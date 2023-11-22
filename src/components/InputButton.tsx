import { PlusCircle } from 'phosphor-react'
import styles from './InputButton.module.css'

export function SearchBarButton() {
    return(
        <button className={styles.buttonInBar} type='submit'>
            Criar <PlusCircle size={16} weight='bold'/>
        </button>
    )
}