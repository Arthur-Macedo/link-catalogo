import { Link } from "react-router-dom";
import Logo from "../../assets/logo.jpeg"
import Whatsapp from "../../assets/whatsapp.png";
import Loc from "../../assets/mapa.png";
import Catalogo from "../../assets/catalogo.png";

function App() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex flex-col items-center py-8">
        {/* Logo */}
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-orange-300 mt-1 mb-6">
        <img src={Logo} alt="Logo" className="w-full h-full object-cover" />
        </div>
       
        {/* Título */}
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold tracking-widest text-orange-300 bebas-neue-regular">
            @lv.cortees
          </h1>
        </div>

        {/* Linha divisória */}
        <div className="w-64 h-0.5 bg-gray-400 mt-4"></div>

        {/* Subtítulo */}
        <div>
          <p className="text-center mt-4 -mb-3 text-lg md:text-xl text-gray-200">
            Na Relíquia Do LV
          </p>
        </div>
      </header>

      {/* Conteúdo principal */}
      <div className="py-3 px-4 max-w-3xl mx-auto flex-grow">
        <div className="grid gap-4">
          {/* Link para WhatsApp */}
          <a
            href="https://wa.me/5585985010759?text=Venho%20através%20do%20Instagram%20e%20quero%20marcar%20um%20horário"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-2 lg:p-5 border-2 border-orange-300 rounded-2xl shadow-md hover:bg-gray-700 transition-transform transform hover:scale-105"
          >
            <img
              src={Whatsapp}
              alt="WhatsApp"
              className="w-16 h-16 -ml-1 mr-2 rounded-full"
            />
            <div>
              <h2 className="text-xl font-semibold">Acesse WhatsApp</h2>
              <p className="text-gray-300 text-sm">
                Agende seu horário com facilidade pelo WhatsApp
              </p>
            </div>
          </a>

          {/* Link para o catálogo */}
          <Link
            to="/catalogo"
            className="flex items-center p-2 lg:p-5 border-2 border-orange-300 rounded-2xl shadow-md hover:bg-gray-700 transition-transform transform hover:scale-105"
          >
            <img
              src={Catalogo}
              alt="Catálogo"
              className="w-14 h-14 mr-3 rounded-full"
            />
            <div>
              <h2 className="text-xl font-semibold text-white">Catálogo</h2>
              <p className="text-gray-300 text-sm">
                Confira nossos serviços e escolha seu próximo visual.
              </p>
            </div>
          </Link>

          {/* Link para Localização */}
          <a
            href="https://maps.app.goo.gl/nh8t7YyAUmwcpRdS8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-3 lg:p-5 border-2 border-orange-300 rounded-2xl shadow-md hover:bg-gray-700 transition-transform transform hover:scale-105"
          >
            <img
              src={Loc}
              alt="Localização"
              className="w-14 h-14 mr-3 rounded-full"
            />
            <div>
              <h2 className="text-xl font-semibold">Localização</h2>
              <p className="text-gray-300 text-sm">
                Veja como chegar até nossa barbearia
              </p>
            </div>
          </a>
        </div>

        {/* Rodapé */}
        <div className="text-center text-gray-500 text-sm mt-6">
          <p>
            &copy; {new Date().getFullYear()} Arthur Macêdo. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
