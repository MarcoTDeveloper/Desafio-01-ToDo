import styles from './Checkbox.module.css'

type CheckboxProps = {
    id: string
}

export function Checkbox({id}: CheckboxProps) {
    return(
        <div className={styles.customCheckbox}>
            <input
                id={id}
                type="checkbox"
            />
            <label htmlFor={id}></label>
        </div>
    )
}