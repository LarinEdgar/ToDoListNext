import styles from './delete.button.module.css'

export interface DProps {
    onClick: () => void;
}

const Delete_button = (props: DProps) => {
    return (
        <button className={styles.delete_button} onClick={props.onClick}>
            <span className={styles.tooltipText}>Press to delete</span>
        </button>
    )
}

export default Delete_button;