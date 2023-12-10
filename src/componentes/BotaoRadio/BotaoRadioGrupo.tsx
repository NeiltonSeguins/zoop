interface BotaoRadioGrupoProps {
  children: React.ReactNode;
  legenda?: string;
}

const BotaoRadioGrupo = ({ children, legenda }: BotaoRadioGrupoProps) => {
  return (
    <fieldset className="radio__grupo--campos">
      <legend className="radio__grupo--legenda">{legenda}</legend>
      {children}
    </fieldset>
  );
};

export default BotaoRadioGrupo;
