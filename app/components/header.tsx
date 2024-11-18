import { ToggleSwitch } from "./toggle-switch";

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 bg-background">
      <div className="container py-4">
        <ToggleSwitch />
      </div>
    </header>
  );
};
