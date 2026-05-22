# Deployment

The portfolio is a static, prerendered site served by **nginx inside a Docker
container**. GitHub Actions builds the image, pushes it to **GHCR**, then the
VPS pulls and restarts it. The host's existing **Caddy** terminates TLS and
reverse-proxies `jayppandey.com` to the container.

```
push to main ─▶ GitHub Actions ─▶ build image ─▶ GHCR
                                                   │
                              VPS: docker compose pull && up -d
                                                   │
        Caddy (host, TLS)  ──reverse_proxy──▶  container 127.0.0.1:8081
```

---

## 1. Find the current site on the VPS

SSH in and locate how `jayppandey.com` is served today:

```bash
ssh <user>@<vps-ip>

# Find the jayppandey.com block in your central Caddyfile
sudo grep -rn "jayppandey" /etc/caddy/ 2>/dev/null
caddy --version            # confirm Caddy is the host proxy
```

The matching block shows the current setup — either a `root` + `file_server`
pointing at a directory (e.g. `/var/www/jayppandey.com`) or a `reverse_proxy`.
Note that path; you'll replace the block in step 4.

```bash
# If it serves static files, that's the old build — safe to archive later:
ls -la /var/www/jayppandey.com   # (path from the Caddyfile block)
```

---

## 2. One-time VPS setup

```bash
# Install Docker + compose plugin (skip if already installed)
curl -fsSL https://get.docker.com | sh

# Create the deploy directory
sudo mkdir -p /opt/jayppandey
sudo chown $USER:$USER /opt/jayppandey
```

The GHCR image is built from a public repo — make the **package public** once
so the VPS can pull without auth:
GitHub → your profile → Packages → `portfolio` → Package settings →
Change visibility → Public.

(Alternatively keep it private and run once on the VPS:
`echo <PAT-with-read:packages> | docker login ghcr.io -u jaypandeydev --password-stdin`)

---

## 3. GitHub repository secrets

Repo → Settings → Secrets and variables → Actions → **New repository secret**:

| Secret         | Value                                            |
| -------------- | ------------------------------------------------ |
| `VPS_HOST`     | VPS IP address or hostname                       |
| `VPS_USER`     | SSH username                                     |
| `VPS_SSH_KEY`  | Private SSH key (full contents) with VPS access  |
| `VPS_PORT`     | SSH port — `22` unless you changed it            |

Pushing to GHCR uses the built-in `GITHUB_TOKEN` — no secret needed for that.

---

## 4. Point Caddy at the container

There is no `jayppandey.com` block yet — **append** this to
`/etc/caddy/Caddyfile`. (Port 8081, since 8080 is already used by tutorra.)

```caddy
# --- Jay Pandey Portfolio ---
www.jayppandey.com {
    redir https://jayppandey.com{uri} permanent
}

jayppandey.com {
    reverse_proxy 127.0.0.1:8081
    encode zstd gzip

    header {
        Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
        X-Content-Type-Options "nosniff"
        X-Frame-Options "SAMEORIGIN"
        Referrer-Policy "strict-origin-when-cross-origin"
        -Server
    }

    log {
        output file /var/log/caddy/jayppandey.log
    }
}
```

DNS: make sure `jayppandey.com` and `www.jayppandey.com` have A records
pointing to this VPS — Caddy needs that to issue the TLS certificate.

Then reload Caddy (TLS is obtained automatically):

```bash
sudo systemctl reload caddy
```

---

## 5. First deploy

Either push to `main`, or trigger **Actions → Deploy → Run workflow**.
The pipeline builds the image, pushes it, copies `docker-compose.yml` to
`/opt/jayppandey`, then pulls and starts the container.

Verify on the VPS:

```bash
cd /opt/jayppandey
docker compose ps
curl -I http://127.0.0.1:8081         # expect HTTP 200
curl -sI https://jayppandey.com       # expect HTTP 200 via Caddy
```

From here, **every push to `main` auto-deploys**.

---

## Manual operations

```bash
cd /opt/jayppandey

docker compose pull && docker compose up -d   # manual deploy
docker compose logs -f portfolio              # logs
docker compose down                           # stop

# Roll back to a previous image (commit SHA tags are pushed too):
docker compose down
docker run -d --name jayppandey-portfolio --restart unless-stopped \
  -p 127.0.0.1:8081:80 ghcr.io/jaypandeydev/portfolio:<old-sha>
```

## Test the image locally

The image only packages the prerendered `dist/`, so build the site first:

```bash
npm ci
npm run build                          # Vite build + react-snap prerender
docker build -t portfolio .
docker run --rm -p 8080:80 portfolio   # open http://localhost:8080
```
