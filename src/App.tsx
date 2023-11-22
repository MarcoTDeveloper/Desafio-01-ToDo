import { Header } from "./components/Header";
import { SearchBar } from "./components/Input";
// import { Tasks } from "./components/task_components/Tasks";

import styles from './App.module.css';

import './global.css';
import { TaskHeader } from "./components/task_components/HeaderTasks";
import { NoTasks } from "./components/task_components/NoTasks";

export function App() {

  return (
    <main>
      <Header />
      
      <section className={styles.wrapper}>
        <div>
          <SearchBar />
        </div>

        <div>
          <TaskHeader />
        </div>

        <div>
          <NoTasks />
        </div>
      </section>
    </main>
  )
}
