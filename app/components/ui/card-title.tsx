interface CardTitleProps {
  children: React.ReactNode;
}

export const CardTitle: React.FC<CardTitleProps> = ({ children }) => {
  return <h3 className="font-mplus font-bold capitalize">{children}</h3>;
};
