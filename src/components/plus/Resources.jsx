import { FaBookOpen, FaBriefcase, FaQuestionCircle, FaRegEye } from "react-icons/fa";

export const ResourcesSection = () => {
    const resources = [
        {
            title: "Tutoriais Interativos",
            description: "Aprenda SQL por meio de tutoriais práticos que permitem que você execute consultas em um ambiente seguro.",
            icon: <FaBookOpen className="text-3xl inline-block mr-2" />
        },
        {
            title: "Quizzes e Desafios",
            description: "Teste seus conhecimentos com quizzes dinâmicos e desafios que ajudam a reforçar o aprendizado.",
            icon: <FaQuestionCircle className="text-3xl inline-block mr-2" />
        },
        {
            title: "Relatórios de Progresso",
            description: "Acompanhe seu progresso e identifique áreas para melhorar com relatórios detalhados.",
            icon: <FaRegEye className="text-3xl inline-block mr-2" />
        },
        {
            title: "Suporte e Comunidade",
            description: "Participe da nossa comunidade online e obtenha suporte quando precisar.",
            icon: <FaBriefcase className="text-3xl inline-block mr-2" />
        }
    ];

    return (
        <div className="p-20 bg-white">
            <h2 className="text-3xl font-bold text-center mb-6">Recursos do App</h2>
            <div className="space-y-6">
                {resources.map((resource, index) => (
                    <div
                        key={index}
                        className="flex items-start p-4 border-b border-gray-300 transition-transform transform hover:scale-105 hover:bg-gray-100"
                    >
                        {resource.icon}
                        <div>
                            <h3 className="text-xl font-semibold">{resource.title}</h3>
                            <p className="text-gray-700">{resource.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
