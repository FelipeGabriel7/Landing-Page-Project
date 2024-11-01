import { FaBookOpen, FaBriefcase, FaQuestionCircle, FaRegEye } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils";

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
        <motion.div variants={fadeIn("right", 0.025)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false }} className="p-20 bg-white">
            <h2 className="text-3xl font-bold text-center mb-6">Recursos do App</h2>
            <div className="space-y-6">
                {resources.map((resource, index) => (
                    <div
                        key={index}
                        className="flex items-start p-4 gap-2 border-b border-gray-300 transition-transform transform hover:scale-105 hover:bg-gray-100"
                    >
                        <span className="text-md lg:text-sm"> {resource.icon} </span>
                        <div>
                            <h3 className="text-xl font-semibold">{resource.title}</h3>
                            <p className="text-gray-700">{resource.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};
