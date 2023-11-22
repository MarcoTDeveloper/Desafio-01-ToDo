import styles from './Checkbox.module.css'

export function Checkbox() {
    return(
        <div className={styles.customCheckbox}>
            <input id='checkbox-1' type="checkbox" />
            <label htmlFor="checkbox-1"></label>
        </div>
    )
}