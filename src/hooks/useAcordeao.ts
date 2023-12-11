import { useState } from "react";

const useAcordeao = () => {
  const [aberturasPorItem, setAberturasPorItem] = useState<
    Record<string | number, boolean>
  >({});
  const alternaVisibilidade = (id: string | number) => {
    setAberturasPorItem((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return {
    aberturasPorItem,
    alternaVisibilidade,
  };
};

export default useAcordeao;
