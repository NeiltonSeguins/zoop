import { IconeInstagram, IconeTiktok, IconeWhatsapp } from "../Icones";
import Link from "../Link";
import Tipografia from "../Tipografia";

const iconesRedesSociais = [
  {
    componente: <IconeWhatsapp />,
    alt: "Ícone da rede social Whatsapp",
  },
  {
    componente: <IconeInstagram />,
    alt: "Ícone da rede social Instagram",
  },
  {
    componente: <IconeTiktok />,
    alt: "Ícone da rede social Tik Tok",
  },
];

const RodapeRedesSociais = () => {
  return (
    <div className="rodape__redes-sociais">
      <Tipografia
        style={{ fontWeight: "700" }}
        elemento="h3"
        variante="corpo"
        cor="verde"
      >
        Redes sociais
      </Tipografia>
      <Tipografia elemento="p" variante="corpo" cor="cinza">
        Acesse nossas redes:
      </Tipografia>
      <ul tabIndex={0} className="rodape__redes-sociais--icones">
        {iconesRedesSociais.map((icone) => (
          <Link href="#" key={icone.alt} alt={icone.alt}>
            {icone.componente}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default RodapeRedesSociais;
