import styles from './Navbar.module.css'
import RuelaLogo from '../../../../public/Ruela_logo.svg'

export const NavbarComponent = () => {
    return (
        <>
            <div>
                <nav className={styles.containerNavbar}>
                    <div className={styles.imageNavbar}>
                        <img src={RuelaLogo} />
                    </div>
                    <div className={styles.itemNavbar}>
                        <ul> <a href="#"> Home </a> </ul>
                        <ul> <a href="#"> Sobre </a></ul>
                        <ul> <a href="#"> Benéficios </a></ul>
                        <ul> <a href="#"> Contato </a></ul>
                    </div>
                    <div>
                        <button className={styles.buttonNavbar}> Começe a usar </button>
                    </div>


                </nav>


            </div>

        </>

    )

}