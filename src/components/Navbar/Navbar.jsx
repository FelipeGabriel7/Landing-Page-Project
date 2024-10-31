import { useState } from 'react';
import RuelaLogo from '../../assets/Rhuela_Queries_logo-removebg-preview.png';
import { FaBars, FaTimes } from 'react-icons/fa';
export const NavbarComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`flex items-center justify-between p-4 bg-gray-800 text-white`}>
            <div className="w-2/12 md:w-3/12">
                <img src={RuelaLogo} alt="Ruela Logo" className="max-w-[150px]" />
            </div>
            <div className="hidden md:flex gap-10 p-4">
                <ul><a href="#" className='hover:text-yellow-400'>Home</a></ul>
                <ul><a href="#" className='hover:text-yellow-400'>Sobre</a></ul>
                <ul><a href="#" className='hover:text-yellow-400'>Benefícios</a></ul>
                <ul><a href="#" className='hover:text-yellow-400'>Contato</a></ul>
            </div>

            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-white">
                    {isOpen ? <FaTimes style={{ fontSize: '30px' }} /> : <FaBars style={{ fontSize: '30px' }} />}
                </button>
            </div>
            {isOpen && (
                <div className="absolute top-24 left-0 w-full flex justify-start items-start bg-gray-800 text-white md:hidden">
                    <ul className="flex flex-col items-start p-8 gap-8">
                        <li><a href="#" className='hover:text-yellow-400'>Home</a></li>
                        <li><a href="#" className='hover:text-yellow-400'>Sobre</a></li>
                        <li><a href="#" className='hover:text-yellow-400'>Benefícios</a></li>
                        <li><a href="#" className='hover:text-yellow-400'>Contato</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};
