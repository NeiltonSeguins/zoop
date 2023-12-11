import Botao from "../Botao";
import Pesquisa from "../Pesquisa";
import MenuDropdown from "./MenuDropdown";
import MenuDropdownTrigger from "./MenuDropdown/MenuDropdownTrigger";
import MenuDropdownLista from "./MenuDropdown/MenuDropdownLista";
import MenuDropdownItem from "./MenuDropdown/MenuDropdownItem";
import Logo from "./Logo";
import { IconeCarrinho, IconePerfil } from "../Icones";
import "./Cabecalho.css";
import { useState } from "react";

const listaMenu = ["Sobre Nós", "Quem somos", "Nossas lojas", "Carreiras"];

const Cabecalho = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(0);

  const toggleOpcoes = () => {
    setMenuAberto((prev) => !prev);
  };

  const aoSelecionar = (indice: number) => {
    setOpcaoSelecionada(indice);
    setMenuAberto(false);
  };

  return (
    <header className="cabecalho">
      <Logo />
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
                estaAberta={menuAberto}
                onSelect={aoSelecionar}
                ariaSelecionada={opcaoSelecionada === indice}
              />
            ))}
          </MenuDropdownLista>
        )}
      </MenuDropdown>
      <form>
        <Pesquisa />
      </form>
      <ul tabIndex={0} className="cabecalho__icones">
        <li>
          <Botao
            aria-label="Carrinho de supermercado"
            icone={<IconeCarrinho />}
          />
        </li>
        <li>
          <Botao aria-label="Perfil" icone={<IconePerfil />} />
        </li>
      </ul>
    </header>
  );
};

export default Cabecalho;
