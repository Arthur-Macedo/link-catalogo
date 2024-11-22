import React from "react";

interface Cut {
  id: number;
  name: string;
  price: string;
  img: string;
  description: string;
}

interface DetalhesProps {
  cut: Cut | null;
  onClose: () => void;
}

const Detalhes: React.FC<DetalhesProps> = ({ cut, onClose }) => {
  if (!cut) {
    return <p className="text-white">Corte não encontrado</p>;
  }

  const handleRedirect = () => {
    const telefone = "5585985010759"; 
    const mensagem = `Gostaria de agendar o corte de cabelo ${cut.name}, no valor de ${cut.price}.`;
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank"); // Abre o link em uma nova aba
  };

  return (
    <div className="bg-black min-h-screen p-4 fixed inset-0 flex justify-center items-center z-50">
      <div className="bg-gray-700 p-6 rounded-lg w-full sm:w-96">
        <button onClick={onClose} className="text-orange-300 mb-6">
          &larr; Voltar para o catálogo
        </button>

        <img
          src={cut.img}
          alt={cut.name}
          className="w-full h-64 object-cover rounded-md"
        />
        <h1 className="text-white text-2xl font-bold mt-4">{cut.name}</h1>
        <p className="text-gray-400 text-xl mt-2">{cut.price}</p>
        <p className="text-gray-300 mt-4">{cut.description}</p>
        <button
          onClick={handleRedirect}
          className="bg-blue-500 text-white font-semibold py-2 px-4 mt-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 transform hover:scale-105"
        >
          Marcar Horário
        </button>
      </div>
    </div>
  );
};

export default Detalhes; // Isso garante que o componente seja exportado como default
