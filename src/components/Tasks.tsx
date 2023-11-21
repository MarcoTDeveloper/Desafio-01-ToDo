import styles from './Tasks.module.css'

import clipboardIcon from '../assets/clipboard-icon.svg';
import { TaskCreated } from './TaskCreated';

export function Tasks() {
    return(
        <div className={styles.tasks}>
            <header className={styles.tasksHeader}>

                <aside>
                    <span className={styles.createTasksColor}>
                        Tarefas criadas
                    </span>

                    <span className={styles.counterTasksCreated}>
                        0
                    </span>
                </aside>

                <aside>
                    <span className={styles.completedTasksColor}>
                        Concluídas
                    </span>

                    <span className={styles.counterTasksCompleted}>
                        0
                    </span>
                </aside>
            </header>

            
            <div className={styles.noTasks}>
                    <div className={styles.noTasksContent}>
                        <img className={styles.nothingIcon} src={clipboardIcon} />
                        <strong>Você ainda não tem tarefas cadastradas</strong>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>
            </div>

            <div className={styles.taskCreated}>
                <TaskCreated />
                <TaskCreated />
                <TaskCreated />
            </div>
        </div>
    )
}