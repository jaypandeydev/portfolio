type TitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

const Title = ({ eyebrow, title, description }: TitleProps) => {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="heading mt-3">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-inkSoft">{description}</p>
      )}
    </div>
  );
};

export default Title;
