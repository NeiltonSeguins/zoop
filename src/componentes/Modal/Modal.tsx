import { useEffect, useRef, useCallback } from "react";
import "./Modal.css";
import ModalCabecalho from "./ModalCabecalho";
import ModalConteudo from "./ModalConteudo";

interface ModalProps extends React.HTMLProps<HTMLDialogElement> {
  estaAberta: boolean;
  fecharModal: () => void;
}

const Modal = ({ fecharModal, estaAberta, ...rest }: ModalProps) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const escutadorTecla = useCallback(
    (evento: KeyboardEvent) => {
      if (evento.key === "Escape") {
        fecharModal();
      }
    },
    [fecharModal]
  );

  const capturarFoco = useCallback((evento: FocusEvent) => {
    if (!modalRef.current?.contains(evento.target as Node)) {
      modalRef.current?.focus();
    }
  }, []);

  useEffect(() => {
    if (estaAberta) {
      document.addEventListener("keydown", escutadorTecla);
      document.addEventListener("focusin", capturarFoco);

      modalRef.current?.focus();
    }

    return () => {
      document.removeEventListener("keydown", escutadorTecla);
      document.removeEventListener("focusin", capturarFoco);
    };
  }, [estaAberta, escutadorTecla, capturarFoco]);

  return (
    <>
      <div className="modal__overlay" onClick={fecharModal} />
      <dialog
        className="modal__container"
        open={estaAberta}
        onClose={fecharModal}
        aria-modal={estaAberta}
        ref={modalRef}
        {...rest}
      >
        <ModalCabecalho aoFechar={fecharModal} />
        <ModalConteudo aoFechar={fecharModal} />
      </dialog>
    </>
  );
};

export default Modal;
