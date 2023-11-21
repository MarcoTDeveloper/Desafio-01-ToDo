import { Header } from "./components/Header";
import { Newtask } from "./components/NewtTask";
import { Tasks } from "./components/Tasks";

import styles from './App.module.css';

import './global.css';

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Newtask />

        <div>
          <Tasks />
        </div>
      </div>


    </div>
  )
}
