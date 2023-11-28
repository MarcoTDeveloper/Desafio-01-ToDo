import { SubmitHandler, useForm } from 'react-hook-form';

import { CreateTaskButton } from './Button';

import styles from './index.module.css';

import { TasksDataProps } from '..';
import { api } from '../../../services/api';
import { KeyedMutator } from 'swr';

type CreateTaskFormData = {
    content: string;
}

type CreateTaskProps = {
    mutate:  KeyedMutator<TasksDataProps[]>
}

export function CreateTask({ mutate }: CreateTaskProps) {
    const { register, handleSubmit, watch, reset } = useForm<CreateTaskFormData>()
    const watchContent = watch("content");

    const handleCreateTask: SubmitHandler<CreateTaskFormData> = (data) => {
        api.post("/task/create", data).then(() => {
            mutate();
            reset();
        }).catch(() => {
            console.log('deu errado'); 
        })

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