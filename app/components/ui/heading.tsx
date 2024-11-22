interface HeadingProps {
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({ children }) => {
  return (
    <h2 className="mb-4 font-mplus text-2xl font-semibold underline decoration-dashed underline-offset-8">
      {children}
    </h2>
  );
};
