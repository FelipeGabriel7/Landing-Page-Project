import ImagePrincipal from '../../assets/Imagem_principal_rhuela_Queries.jpg'
import GooglePlay from '../../assets/google_play.png'
import AppleStore from '../../assets/app_store.png'

export const ProductPage = () => {
    return (
        <>
            <div className="bg-gray-100 flex  w-[100%] justify-between">
                <div className='p-8 gap-8 flex-col  md:flex md:text-start md:justify-center md:items-start justify-center items-center text-center md-'>
                    <h1 className='text-5xl bg'> Aprenda SQL de forma divertida e eficaz!</h1>
                    <p className='p-[0.8px] bg-blue-900 w-4/12 rounded-2xl'> </p>
                    <p className='text-xl'> Venha conferir o mais novo app para se aprender SQL de verdade, <br /> estude quando e onde quiser!</p>

                    <div>
                        <button className='bg-gray-800 p-4 mt-2 rounded-lg text-2xl text-clip text-white cursor-pointer hover:bg-gray-700 animate-bounce'> Começar a utilizar o App </button>
                    </div>
                    <div>
                        <p className='text-lg mb-2'> Já disponível nas seguintes plataformas: </p>
                        <div className='flex gap-4'>
                            <img src={GooglePlay} className='max-w-[120px] mt-4 cursor-pointer hover:scale-125 transition' />
                            <img src={AppleStore} className='max-w-[120px] mt-4 cursor-pointer hover:scale-125 transition' />
                        </div>
                    </div>
                </div>
                <div className='w-[20%]'>
                    <img src={ImagePrincipal} className='w-12/12 m-auto' />
                </div>

            </div >


        </>
    )
}