import styles from "./styles.module.css"

import { Avatar } from "../Avatar"

import { PencilLine } from "phosphor-react"

export const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <img 
                src="https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
                className={styles.cover} 
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/xbozo.png" />

                <strong>Guilherme Viana</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    <span>Editar seu perfil</span>
                </a>
            </footer>
        </aside>
    )
}