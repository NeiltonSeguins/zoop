import Link from "@/componentes/Link";
import { useCallback, useEffect, useRef } from "react";

interface MenuDropdownItemProps {
  opcao: string;
  indice: number;
  estaAberta: boolean;
  ariaSelecionada: boolean;
  onSelect: (indice: number) => void;
}

const MenuDropdownItem = ({
  opcao,
  indice,
  ariaSelecionada,
  estaAberta,
  onSelect,
}: MenuDropdownItemProps) => {
  const itemListaRef = useRef<HTMLDialogElement>(null);
  const listaItemId = opcao.toLowerCase().split(" ").join("-");

  const escutadorTecla = useCallback(
    (evento: KeyboardEvent) => {
      console.log("Tecla pressionada. Índice:", indice);
      if (evento.key === "Enter") {
        onSelect(indice);
      }
    },
    [indice, onSelect]
  );

  useEffect(() => {
    if (estaAberta) {
      document.addEventListener("keydown", escutadorTecla);
      itemListaRef.current?.focus();
    }

    return () => {
      document.removeEventListener("keydown", escutadorTecla);
    };
  }, [estaAberta, escutadorTecla]);

  return (
    <li
      id={listaItemId}
      role="option"
      aria-selected={ariaSelecionada}
      onClick={() => onSelect(indice)}
    >
      <Link href="#" className="dropdown__item--link">
        {opcao}
      </Link>
    </li>
  );
};

export default MenuDropdownItem;
