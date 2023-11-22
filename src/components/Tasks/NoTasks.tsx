import clipboardIcon from '../../assets/clipboard-icon.svg';

import styles from './NoTasks.module.css';

export function NoTasks() {
    return(
        <div className={styles.noTask}>
            <div className={styles.noTasksContent}>
                <img className={styles.nothingIcon} src={clipboardIcon} />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    )
}