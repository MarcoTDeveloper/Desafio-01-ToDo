import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { Tasks } from "./components/task_components/Tasks";

import styles from './App.module.css';

import './global.css';

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <SearchBar />

        <div>
          <Tasks />
        </div>
      </div>


    </div>
  )
}
