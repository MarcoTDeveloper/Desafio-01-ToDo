import { Trash } from 'phosphor-react';

import { Checkbox } from './Checkbox';
import styles from './Index.module.css';

type TaskProps = {
    id: string;
    content: string;
}

export function Task({id, content}: TaskProps) {
    return(
        <div className={styles.launchedTasks}>
            <div className={styles.checkboxTasks}>
                <Checkbox id={id} />
                <p>{content}</p>
            </div>

            <button>
                <Trash size={24} />
            </button>
        </div>
    )
}