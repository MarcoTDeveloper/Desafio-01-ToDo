import { TaskCreated } from './CreateTask';
import { TaskHeader } from './HeaderTasks';
import { NoTasks } from './NoTasks';

export function Tasks() {
    return(
        <div>
            <div>
                <TaskHeader />
            </div>

            <div>
                <NoTasks />
            </div>

            <div>
                <TaskCreated />
                <TaskCreated />
                <TaskCreated />
            </div>
        </div>
    )
}