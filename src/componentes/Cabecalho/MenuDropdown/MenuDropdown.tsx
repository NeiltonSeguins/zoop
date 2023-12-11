import "./MenuDropdown.css";

interface MenuDropdownProps {
  children: React.ReactNode;
}

const MenuDropdown = ({ children }: MenuDropdownProps) => {
  return <nav className="dropdownMenu">{children}</nav>;
};

export default MenuDropdown;
