import { useState } from "react";

const useMenuDropdown = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(0);

  const toggleOpcoes = () => {
    setMenuAberto((prev) => !prev);
  };

  const aoSelecionar = (indice: number) => {
    setOpcaoSelecionada(indice);
    setMenuAberto(false);
  };

  const escutadorTecla = (indice: number) => (evento: KeyboardEvent) => {
    switch (evento.key) {
      case " ":
      case "Enter":
        evento.preventDefault();
        setOpcaoSelecionada(indice);
        setMenuAberto(false);
        break;
      default:
        break;
    }
  };
  return {
    menuAberto,
    opcaoSelecionada,
    toggleOpcoes,
    aoSelecionar,
    escutadorTecla,
  };
};

export default useMenuDropdown;
