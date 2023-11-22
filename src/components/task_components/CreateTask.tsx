import { Trash } from 'phosphor-react';
import { Checkbox } from './Checkbox';
import styles from './CreateTask.module.css';

export function TaskCreated() {
    return(
        <div className={styles.launchedTasks}>
            <div className={styles.checkboxTasks}>
                <Checkbox />
                <p>Estudar Html, Css, Php, SQL. Após isso começar o segundo modulo de React da RocketSeat.</p>
            </div>

            <button>
                <Trash size={24} />
            </button>
        </div>
    )
}