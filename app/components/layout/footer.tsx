import { Paragraph } from "../ui/paragraph";
import { SocialLinks } from "../ui/social-links";

export const Footer: React.FC = () => {
  return (
    <footer className="pb-16">
      <div className="container gap-6 flex-between">
        <Paragraph className="text-sm font-medium">
          © 2024 Sothearo. All rights reserved.
        </Paragraph>
        <SocialLinks />
      </div>
    </footer>
  );
};
