import styles from './Checkbox.module.css'
import { v4 as uuidv4 } from 'uuid';

export function Checkbox() {

    const uniqueId = uuidv4();

    return(
        <div className={styles.customCheckbox}>
            <input id={uniqueId} type="checkbox" />
            <label htmlFor={uniqueId}></label>
        </div>
    )
}