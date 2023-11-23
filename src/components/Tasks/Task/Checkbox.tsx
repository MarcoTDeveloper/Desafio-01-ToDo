import styles from './Checkbox.module.css'

type CheckboxProps = {
    id: string;
    checked: boolean;
    onCheck: (checked: boolean) => void;
}

export function Checkbox({id, checked, onCheck}: CheckboxProps) {

    const handleCheck = () => {
        onCheck(!checked);
    }

    return(
        <div className={styles.customCheckbox}>
            <input
                id={id}
                type="checkbox"
                checked={checked}
                onChange={handleCheck}
            />
            <label htmlFor={id}></label>
        </div>
    )
}