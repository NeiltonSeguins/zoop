import Botao from "@/componentes/Botao";
import IconeMenuSetaBaixo from "@/componentes/Icones/IconeMenuSetaBaixo";

interface MenuDropdownTrigger {
  menuAberto: boolean;
  opcaoSelecionada: string;
  toggleOpcoes: () => void;
}

const MenuDropdownTrigger = ({
  menuAberto,
  opcaoSelecionada,
  toggleOpcoes,
}: MenuDropdownTrigger) => {
  return (
    <div className="dropdown__trigger">
      <Botao
        type="button"
        aria-haspopup="listbox"
        aria-expanded={menuAberto}
        onClick={toggleOpcoes}
      >
        {opcaoSelecionada}
      </Botao>
      <IconeMenuSetaBaixo />
    </div>
  );
};

export default MenuDropdownTrigger;
