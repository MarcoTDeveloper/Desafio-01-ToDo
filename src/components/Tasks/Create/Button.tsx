import { PlusCircle } from 'phosphor-react'

import styles from './Button.module.css'

type CreateTaskButtonProps = {
    watchContent: string;
}

export function CreateTaskButton({ watchContent }: CreateTaskButtonProps) {
    return(
        <button
            className={styles.buttonInBar}
            type='submit'
            disabled={!watchContent || watchContent == ""}
        >
            Criar <PlusCircle size={16} weight='bold'/>
        </button>
    )
}