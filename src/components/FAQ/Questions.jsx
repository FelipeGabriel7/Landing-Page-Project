import { useState } from 'react';
import { FaQuestionCircle } from 'react-icons/fa';

export const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "O que é o Rhuela Queries?",
            answer: "Rhuela Queries é um aplicativo gamificado que ensina SQL de forma interativa e divertida, permitindo que você aprenda no seu próprio ritmo."
        },
        {
            question: "Quais plataformas estão disponíveis?",
            answer: "O app está disponível para Android e iOS. Você pode baixá-lo na Google Play Store e na Apple App Store."
        },
        {
            question: "Preciso de experiência prévia em programação?",
            answer: "Não, o Rhuela Queries foi projetado para iniciantes. Você pode começar do zero e progredir conforme aprende."
        },
        {
            question: "Como funciona a gamificação?",
            answer: "O app utiliza desafios, pontos e recompensas para tornar o aprendizado mais envolvente e motivador. Você pode acompanhar seu progresso e competir com amigos."
        },
        {
            question: "O que faço se tiver dúvidas?",
            answer: "Você pode acessar a seção de ajuda no app ou participar da nossa comunidade online para interagir com outros usuários e obter suporte."
        },
        {
            question: "O app é gratuito?",
            answer: "O Rhuela Queries oferece uma versão gratuita com recursos básicos e uma versão premium com funcionalidades adicionais."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="p-10 bg-stone-50">
            <h2 className="text-3xl font-bold text-center mb-8">Perguntas Frequentes (FAQ)</h2>
            <div className="max-w-3xl mx-auto">
                {faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-300 mb-4 rounded-lg transition-shadow hover:shadow-lg">
                        <div
                            className="flex justify-between items-center p-4 cursor-pointer"
                            onClick={() => toggleFAQ(index)}
                        >
                            <h3 className="text-xl font-semibold flex items-center">
                                <FaQuestionCircle className="text-gray-800 mr-2 transition-transform hover:scale-110" />
                                {faq.question}
                            </h3>
                            <span>{openIndex === index ? '-' : '+'}</span>
                        </div>
                        {openIndex === index && (
                            <p className="p-4 text-gray-700">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
