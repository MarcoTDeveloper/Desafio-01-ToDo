import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { Tasks } from "./components/Tasks";

import styles from './App.module.css';

import './global.css';

export function App() {

  const tasks = [
    {
      
    }
  ];

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <NewTask />
        <div>
          <Tasks />
        </div>
      </div>


    </div>
  )
}
