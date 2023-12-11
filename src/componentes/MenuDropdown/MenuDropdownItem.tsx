import Link from "@/componentes/Link";

interface MenuDropdownItemProps {
  opcao: string;
  indice: number;
  ariaSelecionada: boolean;
  onSelect: (indice: number) => void;
  aoPressionarTecla: (indice: number) => void;
}

const MenuDropdownItem = ({
  opcao,
  indice,
  ariaSelecionada,
  onSelect,
  aoPressionarTecla,
}: MenuDropdownItemProps) => {
  const listaItemId = opcao.toLowerCase().split(" ").join("-");

  return (
    <li
      id={listaItemId}
      role="option"
      aria-selected={ariaSelecionada}
      onClick={() => onSelect(indice)}
      onKeyDown={() => aoPressionarTecla}
    >
      <Link href="#" className="dropdown__item--link">
        {opcao}
      </Link>
    </li>
  );
};

export default MenuDropdownItem;
