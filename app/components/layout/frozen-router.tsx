import { useContext } from "react";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { usePathname } from "next/navigation";
import usePreviousValue from "@/app/hooks/usePreviousValue";

interface FrozenRouterProps {
  children: React.ReactNode;
}

export const FrozenRouter: React.FC<FrozenRouterProps> = ({ children }) => {
  const context = useContext(LayoutRouterContext);
  const prevContext = usePreviousValue(context) || null;

  const pathname = usePathname();
  const prevPathname = usePreviousValue(pathname);

  const changed =
    pathname !== prevPathname &&
    pathname !== undefined &&
    prevPathname !== undefined;

  /* If it has changed, we provide the previous context to preserve the current state, 
     thus not unmounting the currently shown route. */

  return (
    <LayoutRouterContext value={changed ? prevContext : context}>
      {children}
    </LayoutRouterContext>
  );
};
