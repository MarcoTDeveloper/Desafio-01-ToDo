import { useState } from "react";

import { TaskHeader } from "./HeaderTasks";
import { NoTasks } from "./NoTasks";
import { Task } from "./Task";
import { CreateTask } from "./Create";

export type TasksDataProps = {
    id: string;
    content: string;
    checked: boolean;
}

export function Tasks() {
    const [tasks, setTasks] = useState<TasksDataProps[]>([]);

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
            ) : tasks.map(({id, content}) => (
                <Task
                    key={id}
                    id={id}
                    content={content}
                />
            ))}
        </>
    );
}