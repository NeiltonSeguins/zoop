import Botao from "../Botao";
import CampoDigitacao from "../CampoDigitacao";
import { IconeBusca } from "../Icones";
import "./Pesquisa.css";

const Pesquisa = () => {
  return (
    <div className="campo__pesquisa" aria-label="Campo de Busca">
      <CampoDigitacao
        placeholder="Digite aqui o produto que você busca"
        type="text"
        name="Campo entrada"
        aria-label="Campo de pesquisa"
      />
      <Botao aria-label="Ícone de Lupa" icone={<IconeBusca />} />
    </div>
  );
};

export default Pesquisa;
