import { useState, useEffect } from "react";

import { TaskHeader } from "./HeaderTasks";
import { NoTasks } from "./NoTasks";
import { Task } from "./Task";
import { CreateTask } from "./Create";
import { useFetch } from "../../hooks/useFetch";

export type TasksDataProps = {
    id: string;
    content: string;
    checked: boolean;
}

export function Tasks() {
    const { data } = useFetch<TasksDataProps[]>("/task");
    const [tasks, setTasks] = useState<TasksDataProps[]>([]);

    useEffect(() => {
        if (data) {
            setTasks(data);
        }
    }, [data]);


    const handleTaskCheck = (taskId: string, checked: boolean) => {
        const updatedTasks = tasks.map((task) =>
            task.id === taskId ? { ...task, checked } : task
        );
        setTasks(updatedTasks);
    };

    const handleTaskDelete = (taskId: string) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
    };

    return(
        <>
            <CreateTask
                setTasks={setTasks}
            />
            <TaskHeader
                tasksLength={tasks.length}
                completedTasks={tasks.filter(task => task.checked === true).length}
            />
            {tasks.length === 0 ? (
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