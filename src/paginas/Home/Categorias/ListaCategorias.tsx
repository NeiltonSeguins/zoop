import Link from "../../../componentes/Link";
import CategoriaItem from "./CategoriaItem";
import { CategoriasProps } from "./Categorias";

const ListaCategorias = ({ categorias }: CategoriasProps) => {
  return (
    <ul tabIndex={0} className="secao__categoria">
      {categorias.map((categoria) => (
        <Link href="#" key={categoria.id}>
          <CategoriaItem
            titulo={categoria.titulo}
            src={categoria.src}
            altImg={categoria.altImg}
          />
        </Link>
      ))}
    </ul>
  );
};

export default ListaCategorias;
