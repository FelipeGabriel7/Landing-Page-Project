import React from 'react';
import { FaBookOpen, FaHistory, FaCode, FaRegEye, FaBriefcase, FaQuestionCircle } from 'react-icons/fa';

const benefits = [
    {
        title: 'Lições de acordo com seu nível',
        description: 'Acesse conteúdos adaptados ao seu nível de conhecimento, desde iniciante até avançado.',
        icon: <FaBookOpen className="text-3xl" />
    },
    {
        title: 'História e Curiosidade do SQL',
        description: 'Descubra a evolução do SQL e fatos interessantes que enriquecem seu aprendizado.',
        icon: <FaHistory className="text-3xl" />
    },
    {
        title: 'Entenda a sintaxe e variações',
        description: 'Aprenda as regras da sintaxe SQL e explore suas diversas variações e usos.',
        icon: <FaCode className="text-3xl" />
    },
    {
        title: 'Total controle a qualquer momento',
        description: 'Tenha a liberdade de praticar e revisar conteúdos a qualquer hora, no seu ritmo.',
        icon: <FaRegEye className="text-3xl" />
    },
    {
        title: 'Aprendizagem orientada ao mercado',
        description: 'Conteúdos que refletem as necessidades e demandas do mercado de trabalho atual.',
        icon: <FaBriefcase className="text-3xl" />
    },
    {
        title: 'Quando e como utilizar o SQL',
        description: 'Saiba em quais situações aplicar SQL para resolver problemas reais de dados.',
        icon: <FaQuestionCircle className="text-3xl" />
    }
];

export const BenefitsSection = () => {
    return (
        <div className="p-10 bg-stone-50">
            <h2 className="text-4xl font-bold text-center mb-8">Benefícios do Rhuela Queries</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg p-12 transition-transform duration-300 transform hover:bg-amber-500 hover:text-white hover:scale-105"
                    >
                        <div className="flex items-center mb-8">
                            {benefit.icon}
                            <h3 className="text-xl font-semibold ml-3">{benefit.title}</h3>
                        </div>
                        <p className="">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};


