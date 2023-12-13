import React, { forwardRef } from "react";
import "./CampoDigitacao.css";
import MensagemErro from "./MensagemErro";

interface CampoDigitacaoProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  legenda?: string;
  icone?: React.ReactNode;
  id: string;
  erro?: string;
}

const CampoDigitacao = forwardRef<HTMLInputElement, CampoDigitacaoProps>(
  ({ legenda, id, erro, ...rest }, ref) => {
    const erroId = erro ? `${id}-erro` : undefined;
    return (
      <label htmlFor={id} className="campo__texto--legenda">
        {legenda}
        <input
          className="campo__texto"
          aria-describedby={erroId}
          id={id}
          ref={ref}
          {...rest}
        />
        {erro && <MensagemErro id={erroId} mensagemErro={erro} />}
      </label>
    );
  }
);

export default CampoDigitacao;
