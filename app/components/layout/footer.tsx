import { Paragraph } from "../ui/paragraph";
import { SocialLinks } from "../ui/social-links";

export const Footer: React.FC = () => {
  return (
    <footer className="pb-16">
      <div className="flex-between container gap-6">
        <Paragraph className="text-sm">
          © 2024 Sothearo. All rights reserved.
        </Paragraph>
        <SocialLinks />
      </div>
    </footer>
  );
};
