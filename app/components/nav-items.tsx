import { NavLink } from "react-router";
import { cn } from "~/lib/utils";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Companions", to: "/companions" },
  { label: "My Journey", to: "/my-journey" },
];

export function NavItems() {
  return (
    <nav className="flex items-center gap-4">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            cn("text-primary", { "font-semibold": isActive })
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
