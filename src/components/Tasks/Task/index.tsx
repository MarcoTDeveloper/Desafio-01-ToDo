import { Trash } from 'phosphor-react';

import { Checkbox } from './Checkbox';
import styles from './Index.module.css';

type TaskProps = {
    id: string;
    content: string;
    checked: boolean;
    onTaskCheck: (id: string, checked: boolean) => void;
    onTaskDelete: (id: string) => void;
}

export function Task({id, content, checked, onTaskCheck, onTaskDelete}: TaskProps) {

    const handleCheck = (checked: boolean) => {
        onTaskCheck(id, checked);
    }

    const handleDelete = () => {
        onTaskDelete(id);
    }

    return(
        <div className={styles.launchedTasks}>
            <div className={styles.checkboxTasks}>
                <Checkbox
                    id={id} 
                    checked={checked}
                    onCheck={handleCheck}
                />
                <p>{content}</p>
            </div>

            <button onClick={handleDelete}>
                <Trash size={24} />
            </button>
        </div>
    )
}