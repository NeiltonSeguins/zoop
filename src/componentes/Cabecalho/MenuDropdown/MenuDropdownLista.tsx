interface MenuDropdownListaProps {
  children: React.ReactNode;
  opcaoAtiva: string;
}

const MenuDropdownLista = ({
  children,
  opcaoAtiva,
}: MenuDropdownListaProps) => {
  return (
    <ul
      className="dropdown__lista"
      role="listbox"
      aria-activedescendant={opcaoAtiva}
      tabIndex={-1}
    >
      {children}
    </ul>
  );
};

export default MenuDropdownLista;
