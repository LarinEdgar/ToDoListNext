import styles from './edit.button.module.css'

interface EProps {
    onClick: () => void;
}

const Edit_button = (props: EProps) => {
    return (
        <button className={styles.edit_button} type="button" onClick={props.onClick}>Add</button>
    )
}

export default Edit_button;