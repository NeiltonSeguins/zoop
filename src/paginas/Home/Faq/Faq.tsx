import "./Faq.css";
import Tipografia from "../../../componentes/Tipografia";
import Acordeao from "../../../componentes/Acordeao";
import AcordeaoTitulo from "../../../componentes/Acordeao/AcordeaoTitulo";
import AcordeaoDescricao from "../../../componentes/Acordeao/AcordeaoDescricao";
import AcordeaoConteudo from "../../../componentes/Acordeao/AcordeaoConteudo";
import { useState } from "react";
import faq from "../../../assets/faq.json";

const Faq = () => {
  const [estaAberto, setEstaAberto] = useState(false);
  const alternaVisibilidade = () => setEstaAberto((prev) => !prev);

  return (
    <section className="secao__duvidas">
      <Tipografia elemento="h2" variante="h2" cor="azul">
        Dúvidas frequentes
      </Tipografia>
      <Tipografia elemento="p" variante="corpo" cor="grafite">
        Antes de entrar em contato, verifique se sua dúvida está respondida em
        nossa FAQ!
      </Tipografia>
      {/* Aqui entra o Acordeao */}
      <Acordeao>
        {faq.map((duvida) => (
          <AcordeaoConteudo key={duvida.id}>
            <AcordeaoTitulo
              titulo={duvida.titulo}
              estaAberto={estaAberto}
              alternaVisibilidade={alternaVisibilidade}
              id={duvida.id}
            />
            <AcordeaoDescricao
              id={duvida.id}
              descricao={duvida.descricao}
              estaAberto={estaAberto}
            />
          </AcordeaoConteudo>
        ))}
      </Acordeao>
    </section>
  );
};

export default Faq;
