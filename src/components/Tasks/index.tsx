import { useState, useEffect } from "react";

import { TaskHeader } from "./HeaderTasks";
import { NoTasks } from "./NoTasks";
import { Task } from "./Task";
import { CreateTask } from "./Create";
import { useFetch } from "../../hooks/useFetch";
import { api } from "../../services/api";

export type TasksDataProps = {
    id: string;
    content: string;
    checked: boolean;
}

export function Tasks() {
    const { data, mutate } = useFetch<TasksDataProps[]>("/task");
    const [tasks, setTasks] = useState<TasksDataProps[]>([]);

    useEffect(() => {
        if (data) {
            setTasks(data);
        }
    }, [data]);


    const handleTaskCheck = (taskId: string, checked: boolean) => {
        api.put('/task/update', {
            id: taskId,
            checked
        }).then(() => {
            const updatedTask = tasks.map((task) => {
                if (task.id == taskId) {
                    return {
                        ...task,
                        checked: checked
                    }
                }

                return task
            })
            mutate(updatedTask, false);
        })
    };

    const handleTaskDelete = (taskId: string) => {
        api.post('/task/delete', {
            id: taskId
        }).then(() => {
            const updatedTasks = tasks.filter((task) => {
                if (task.id != taskId) {
                    return task
                }
            })
            mutate(updatedTasks, false);
        })
    };

    return(
        <>
            <CreateTask
                mutate={mutate}
            />
            <TaskHeader
                tasksLength={tasks.length}
                completedTasks={tasks.filter(task => task.checked === true).length}
            />
            {!tasks || tasks.length === 0 ? (
                <NoTasks />
            ) : tasks.map(({id, content, checked}) => (
                <Task
                    key={id}
                    id={id}
                    content={content}
                    checked={checked}
                    onTaskCheck={handleTaskCheck}
                    onTaskDelete={handleTaskDelete}
                />
            ))}
        </>
    );
}