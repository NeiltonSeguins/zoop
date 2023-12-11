import MenuDropdown from "@/componentes/MenuDropdown";
import MenuDropdownItem from "@/componentes/MenuDropdown/MenuDropdownItem";
import MenuDropdownLista from "@/componentes/MenuDropdown/MenuDropdownLista";
import MenuDropdownTrigger from "@/componentes/MenuDropdown/MenuDropdownTrigger";
import useMenuDropdown from "@/hooks/useMenuDropdown";

const listaMenu = ["Sobre Nós", "Quem somos", "Nossas lojas", "Carreiras"];

const Menu = () => {
  const {
    menuAberto,
    opcaoSelecionada,
    toggleOpcoes,
    aoSelecionar,
    escutadorTecla,
  } = useMenuDropdown();

  return (
    <MenuDropdown>
      <MenuDropdownTrigger
        menuAberto={menuAberto}
        opcaoSelecionada={listaMenu[opcaoSelecionada]}
        toggleOpcoes={toggleOpcoes}
      />
      {menuAberto && (
        <MenuDropdownLista opcaoAtiva={listaMenu[opcaoSelecionada]}>
          {listaMenu.map((itemLista, indice) => (
            <MenuDropdownItem
              key={indice}
              indice={indice}
              opcao={itemLista}
              onSelect={aoSelecionar}
              aoPressionarTecla={escutadorTecla}
              ariaSelecionada={opcaoSelecionada === indice}
            />
          ))}
        </MenuDropdownLista>
      )}
    </MenuDropdown>
  );
};

export default Menu;
