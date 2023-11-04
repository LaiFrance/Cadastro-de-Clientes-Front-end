import styles from './styles.module.scss'
import {ReactNode,ButtonHTMLAttributes} from 'react'

interface ButtonProps {
    loading?:boolean,
    children: ReactNode,
}

export function Button() {
    return(
        <button className={styles.button}>
       <a className={styles.buttonText}>
            nome do botão
           </a>
        </button>
    )
}