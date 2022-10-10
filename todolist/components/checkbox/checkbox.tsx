import styles from './checkbox.module.css'

interface CProps {
    IsChecked: boolean;
    onChange: () => void;
}

const Checkbox = (props: CProps) => {
    return (
        <input className={styles.checkbox} type="checkbox" checked={props.IsChecked}
               onChange={props.onChange}></input>
    )
}

export default Checkbox;