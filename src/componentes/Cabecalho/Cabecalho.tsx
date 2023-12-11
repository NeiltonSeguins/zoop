import Botao from "../Botao";
import Pesquisa from "../Pesquisa";
import { IconeCarrinho, IconePerfil } from "../Icones";
import "./Cabecalho.css";
import Logo from "./Logo";
import Menu from "./Menu";

const Cabecalho = () => {
  return (
    <header className="cabecalho">
      <Logo />
      <Menu />
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
