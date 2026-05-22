# The site — including the react-snap prerender — is built BEFORE this image:
#   - in CI, by the GitHub Actions workflow
#   - locally, via `npm run build`
# react-snap's headless browser is x86-only and unhappy inside cross-arch
# Docker builds, so prerendering is kept out of the image. This image simply
# serves the finished static `dist/` with nginx.
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY dist /usr/share/nginx/html
EXPOSE 80
