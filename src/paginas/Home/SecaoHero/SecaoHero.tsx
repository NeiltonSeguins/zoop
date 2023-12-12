import "./SecaoHero.css";
import Botao from "../../../componentes/Botao";
import SecaoHeroImagem from "./SecaoHeroImagem";
import SecaoHeroTitulo from "./SecaoHeroTitulo";
import SecaoHeroDescricao from "./SecaoHeroDescricao";
import { useState } from "react";
import Modal from "../../../componentes/Modal";

const SecaoHero = () => {
  const [abrirModal, setAbrirModal] = useState(false);

  return (
    <section className="secao__hero">
      {abrirModal && (
        <Modal
          ariaLabel="Pegue o cupom da Zoop"
          estaAberta={abrirModal}
          fecharModal={() => setAbrirModal(false)}
        />
      )}
      <div className="secao__hero--conteudo">
        <SecaoHeroImagem />
        <div className="secao__hero--informacoes">
          <SecaoHeroTitulo />
          <SecaoHeroDescricao />
          <Botao variante="primario" onClick={() => setAbrirModal(true)}>
            Quero ver!
          </Botao>
        </div>
      </div>
    </section>
  );
};

export default SecaoHero;
