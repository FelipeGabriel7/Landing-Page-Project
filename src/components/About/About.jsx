import imgApp from '../../assets/praticar_rhuela_queries.jpg'

export const AboutPage = () => {
    return (
        <>
            <div className='flex justify-between w-full items-center'>
                <div className='w-[50%]'>
                    <img src={imgApp} className='w-full' />
                </div>
                <div className="flex flex-col gap-10  justify-center items-start p-12">
                    <h1 className="text-3xl text-gray-600"> Sobre o App</h1>
                    <div className="flex flex-col gap-2 w-10/12">
                        <h2 className="text-2xl font-medium"> O que é o Rhuela Queries? </h2>
                        <p className="text-lg"> O Rhuela Queries é um aplicativo educacional inovador que transforma o aprendizado de SQL em uma experiência envolvente e gamificada.
                            Projetado para atender tanto iniciantes quanto usuários avançados,
                            o app combina teoria e prática, facilitando a compreensão de conceitos complexos de bancos de dados. </p>
                    </div>

                    <div className="flex flex-col gap-2 w-10/12">
                        <h2 className="text-2xl font-medium"> Características Principais </h2>
                        <ul className="mt-2 p-2 flex gap-8 justify-between flex-col">
                            <li className="text-lg list-item"> <b> Gamificação do Aprendizado:  </b> Com desafios, pontos e recompensas, o Rhuela Queries torna o aprendizado divertido. Complete níveis, ganhe badges e acompanhe seu progresso à medida que aprimora suas habilidades em SQL. </li>
                            <li className="text-lg list-item"> <b> Conteúdo Didático: </b>O app oferece tutoriais, exercícios e quizzes que abrangem desde os fundamentos até tópicos avançados, permitindo que os usuários aprendam de maneira estruturada e eficaz.</li>
                            <li className="text-lg"> <b> Ambiente Interativo: </b> Pratique consultas SQL em um ambiente seguro, onde você pode testar suas habilidades em tempo real e experimentar os resultados de suas operaçõe</li>
                            <li className="text-lg"> <b> Projeto Educacional: </b> O Rhuela Queries não é apenas um app; é uma iniciativa que visa democratizar o acesso ao conhecimento sobre bancos de dados. Com uma missão de capacitar alunos e profissionais de tecnologia, nosso projeto é acessível a todos, independentemente do nível de experiência.</li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-2 w-10/12">
                        <p className="text-xl text-medium"> Descubra o Rhuela Queries e comece sua jornada no mundo do SQL de forma divertida e eficaz!</p>
                    </div>
                </div>


            </div>
        </>
    )
}