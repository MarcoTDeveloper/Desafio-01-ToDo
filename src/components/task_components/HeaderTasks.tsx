import styles from './HeaderTasks.module.css';

export function TaskHeader() {
    return(
        <div className={styles.tasks}>
            <header>

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
        </div>
    )
}