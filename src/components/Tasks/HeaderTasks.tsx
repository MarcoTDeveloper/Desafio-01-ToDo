import styles from './HeaderTasks.module.css';

type TaskHeaderProps = {
    tasksLength: number;
    completedTasks: number;
}

export function TaskHeader({ tasksLength, completedTasks }: TaskHeaderProps) {
    return(
        <div className={styles.tasks}>
            <div>
                <span className={styles.createTasksColor}>
                    Tarefas criadas
                </span>

                <span className={styles.counterTasksCreated}>
                    {tasksLength}
                </span>
            </div>
            <div>
                <span className={styles.completedTasksColor}>
                    Concluídas
                </span>

                <span className={styles.counterTasksCompleted}>
                    {completedTasks} de {tasksLength}
                </span>
            </div>
        </div>
    )
}