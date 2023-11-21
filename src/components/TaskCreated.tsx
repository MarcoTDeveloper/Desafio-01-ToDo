import { Trash } from 'phosphor-react';
import styles from './TaskCreated.module.css';

export function TaskCreated() {
    return(
        <div className={styles.taskBox}>
            <label className={styles.checkboxList}>
                <input type="checkbox"/>
                <div className={styles.taskContent}>
                    <p>
                        Estudar CSS, React, PHP, SQL, Next e terminar o curso da RocketSeat
                    </p>
                </div>

            </label>
            
            <button title='Deletar tarefa'>
                <Trash size={24} />
            </button>
        </div>
    )
}