import { SearchBarButton } from './InputButton';

import styles from './Input.module.css';

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