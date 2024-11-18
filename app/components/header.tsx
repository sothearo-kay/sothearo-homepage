import Link from "next/link";
import { ToggleSwitch } from "./toggle-switch";

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 bg-background">
      <div className="container flex items-center py-4">
        <nav className="flex-1">
          <ul className="flex items-center gap-6">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>

        <ToggleSwitch />
      </div>
    </header>
  );
};
