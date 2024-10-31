import { Link } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa';

export const Footer = () => {
    const links = [
        { name: 'Início', path: '/' },
        { name: 'Recursos', path: '/recursos' },
        { name: 'Sobre', path: '/sobre' },
        { name: 'Contato', path: '/contato' }
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-gray-800 text-white p-6 cursor-pointer">
            <div className="flex justify-between items-center mb-4">
                <div className="flex space-x-4">
                    {links.map((link, index) => (
                        <a key={index} to={link.path} className="hover:text-amber-400 transition-colors">
                            {link.name}
                        </a>
                    ))}
                </div>
                <button
                    onClick={scrollToTop}
                    className="bg-stone-400 p-2 rounded-full hover:bg-blue-500 transition-colors"
                >
                    <FaArrowUp />
                </button>
            </div>
            <div className="text-center">
                <a to="/termos" className="hover:text-blue-400 transition-colors mx-2">Termos de Uso</a>
                <span>|</span>
                <a to="/politica" className="hover:text-blue-400 transition-colors mx-2">Política de Privacidade</a>
            </div>
            <div className="text-center mt-4 text-sm">
                © {new Date().getFullYear()} Rhuela Queries. Todos os direitos reservados.
            </div>
        </footer>
    );
};

export default Footer;