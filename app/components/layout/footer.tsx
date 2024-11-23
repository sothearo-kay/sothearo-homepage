import { SocialLinks } from "../ui/social-links";

export const Footer: React.FC = () => {
  return (
    <footer className="pb-16">
      <div className="flex-between container">
        <p className="text-sm">© 2024 Sothearo. All rights reserved.</p>
        <SocialLinks />
      </div>
    </footer>
  );
};
