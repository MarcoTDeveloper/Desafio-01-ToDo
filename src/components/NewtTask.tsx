import { PlusCircle } from 'phosphor-react';

import styles from './Newtask.module.css';

export function Newtask() {
    return(
        <div>
            <form className={styles.createNewTask}>

                <textarea
                    placeholder='Adicione uma nova tarefa'
                />

                <button type='submit'>
                    Criar
                    <PlusCircle size={16} weight='bold'/>
                </button>
            </form>
        </div>
    )
}