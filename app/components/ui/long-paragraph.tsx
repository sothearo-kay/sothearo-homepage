interface LongParagraphProps {
  children: React.ReactNode;
  className?: React.HTMLAttributes<HTMLParagraphElement>["className"];
}

export const LongParagraph: React.FC<LongParagraphProps> = ({
  children,
  className,
}) => {
  return (
    <p className={`max-w-prose${className ? ` ${className}` : ""}`}>
      {children}
    </p>
  );
};
