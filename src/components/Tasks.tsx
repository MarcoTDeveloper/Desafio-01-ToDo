import styles from './Tasks.module.css'

import clipboardIcon from '../assets/clipboard-icon.svg';

export function Tasks() {
    return(
        <div>
            <header className={styles.tasksHeader}>
                <span>Tarefas criadas</span>
                <span>0</span>
                <span>Concluídas</span>
                <span>0</span>
            </header>
            <div className={styles.tasks}>
                <img className={styles.nothingIcon} src={clipboardIcon} />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    )
}