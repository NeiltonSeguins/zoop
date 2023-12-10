import Link from "../../../componentes/Link";
import ProdutoCartao from "./ProdutoCartao";
import { ProdutosProps } from "./Produtos";

const ListaProdutos = ({ produtos }: ProdutosProps) => {
  return (
    <ul className="produtos__maisProcurados--lista">
      {produtos.map((produto) => (
        <Link href="#" key={produto.id}>
          <ProdutoCartao
            src={`/imagens/produtos/${produto.src}`}
            altImg={produto.altImg}
            nome={produto.nome}
            descricao={produto.descricao}
            valor={produto.valor}
          />
        </Link>
      ))}
    </ul>
  );
};

export default ListaProdutos;
