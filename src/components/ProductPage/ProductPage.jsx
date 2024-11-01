import ImagePrincipal from '../../assets/Imagem_principal_rhuela_Queries.jpg'
import GooglePlay from '../../assets/google_play.png'
import AppleStore from '../../assets/app_store.png'
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils'

export const ProductPage = () => {
    return (
        <>
            <motion.div variants={fadeIn("right", 0.025)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false }}
                className="bg-gray-100 flex text-start  mt-32 md:mt-24 w-[100%] justify-between">
                <div className='p-12 lg:p-8 gap-6 flex-col  md:flex md:text-start md:justify-center md:items-start justify-center items-center text-center md-'>
                    <div className='flex flex-col gap-2 p-2 mt-2 mb-2 justify-start items-start'>
                        <h1 className='text-5xl bg'> Aprenda SQL de forma divertida e eficaz!</h1>
                        <p className='p-[0.8px] bg-blue-900 w-4/12 rounded-2xl hidden lg:flex'> </p>
                        <p className='text-xl'> Venha conferir o mais novo app para se aprender SQL de verdade, <br /> estude quando e onde quiser!</p>

                    </div>
                    <div>
                        <button className='bg-gray-800 p-4 md:p-4 m-2 md:m-0 rounded-lg text-2xl text-clip text-white cursor-pointer hover:bg-gray-700 animate-bounce'> Começar a utilizar o App </button>
                    </div>
                    <div>
                        <p className='text-lg mb-2'> Já disponível nas seguintes plataformas: </p>
                        <div className='flex gap-4 justify-center items-center md:justify-start'>
                            <div className='flex flex-col justify-center items-center gap-2'>
                                <img src={GooglePlay} className='max-w-[120px]  cursor-pointer hover:scale-125 transition' />
                                <p className='hidden'> --- </p>
                            </div>
                            <div className='flex flex-col justify-center items-center gap-1'>

                                <img src={AppleStore} className='max-w-[120px] mt-5 cursor-pointer hover:scale-125 transition' />
                                <p className='font-medium'> Em breve </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[20%] hidden lg:flex'>
                    <img src={ImagePrincipal} className='w-12/12 m-auto' />
                </div>

            </motion.div >


        </>
    )
}