import Link, { type LinkProps } from "next/link";

interface ExternalLinkProps
  extends LinkProps,
    React.HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export const ExternalLink: React.FC<ExternalLinkProps> = ({
  children,
  ...props
}) => {
  return (
    <Link target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </Link>
  );
};
