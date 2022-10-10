import styles from './todo.module.css'
import Checkbox from "../checkbox/checkbox";
import Delete_button from "../delete.button/delete.button";
import {FC} from "react";

export interface TProps {
    title: string;
    complete: boolean;
    id: string;
}

interface TodoTask {
    task: TProps;
    delClick: (task: TProps) => void;
    onChange: (task: TProps) => void;
}

const Todo_task: FC<TodoTask> = ({task, delClick, onChange}) => {
    return (
        <div className={styles.task}>
            <Checkbox IsChecked={task.complete} onChange={() => onChange(task)}/>
            <div className={styles.task__text}>{task.title}</div>
            <Delete_button onClick={() => delClick(task)}/>
        </div>
    )
}

export default Todo_task;