import { SubmitHandler, useForm } from 'react-hook-form';
import { v4 as uuid } from "uuid";

import { CreateTaskButton } from './Button';
import styles from './index.module.css';
import { TasksDataProps } from '..';

type CreateTaskFormData = {
    content: string;
}

type CreateTaskProps = {
    setTasks: React.Dispatch<React.SetStateAction<TasksDataProps[]>>
}

export function CreateTask({ setTasks }: CreateTaskProps) {
    const { register, handleSubmit, watch, reset } = useForm<CreateTaskFormData>()
    const watchContent = watch("content");

    const handleCreateTask: SubmitHandler<CreateTaskFormData> = ({content}) => {
        setTasks(tasks => [...tasks, {
            id: uuid(),
            content,
            checked: false
        }]);
        reset();
    };

    return(
        <form
            className={styles.createNewTask}
            onSubmit={handleSubmit(handleCreateTask)}
            autoComplete='off'
        >
            <input
                type="search"
                placeholder="Adicione uma nova tarefa"
                {...register("content")}
            />
            <CreateTaskButton
                watchContent={watchContent}
            />
        </form>
    )
}