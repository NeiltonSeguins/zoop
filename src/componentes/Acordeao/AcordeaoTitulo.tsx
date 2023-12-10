import { IconeSetaBaixo, IconeSetaCima } from "../Icones";
import Tipografia from "../Tipografia";

interface AcordeaoTitulo {
  id: string;
  estaAberto: boolean;
  titulo: string;
  alternaVisibilidade: () => void;
}

const AcordeaoTitulo = ({
  id,
  estaAberto,
  titulo,
  alternaVisibilidade,
}: AcordeaoTitulo) => {
  return (
    <summary
      role="button"
      className="acordeao__titulo"
      aria-expanded={estaAberto}
      aria-controls={id}
      onClick={alternaVisibilidade}
    >
      <Tipografia elemento="h2" variante="h3" cor="cinza">
        {titulo}
      </Tipografia>
      <span>{estaAberto ? <IconeSetaCima /> : <IconeSetaBaixo />}</span>
    </summary>
  );
};

export default AcordeaoTitulo;
