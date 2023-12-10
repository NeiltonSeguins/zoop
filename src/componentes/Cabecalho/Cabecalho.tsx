import Botao from "../Botao";
import { IconeCarrinho, IconePerfil } from "../Icones";
import Pesquisa from "../Pesquisa";
import Logo from "./Logo";
import "./Cabecalho.css";

const Cabecalho = () => {
  return (
    <header className="cabecalho">
      <Logo />
      {/* Esse vai ser o componente de Menu Dropdown */}
      <Botao>Sobre nós</Botao>
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
