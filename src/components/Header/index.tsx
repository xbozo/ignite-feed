import styles from "./styles.module.css"
import igniteLogo from "../../assets/images/Ignite-logo.svg"

export const Header = () => {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo do Ignite" />
        </header>
    )
}