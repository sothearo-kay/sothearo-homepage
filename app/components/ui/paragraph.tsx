interface ParagraphProps {
  children: React.ReactNode;
  className?: React.HTMLAttributes<HTMLParagraphElement>["className"];
}

export const Paragraph: React.FC<ParagraphProps> = ({
  children,
  className,
}) => {
  return (
    <p className={`text-balance${className ? ` ${className}` : ""}`}>
      {children}
    </p>
  );
};
