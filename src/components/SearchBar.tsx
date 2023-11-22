import { SearchBarButton } from './SearchBarButton';

import styles from './SearchBar.module.css';

export function SearchBar() {
    return(
        <div>
            <form className={styles.createNewTask}>

                <textarea
                    placeholder='Adicione uma nova tarefa'
                />

                <SearchBarButton/>
            </form>
        </div>
    )
}