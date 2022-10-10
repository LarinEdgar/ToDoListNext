import Edit_button from "../components/edit.button/edit.button";
import Input from "../components/input/input";
import Todo_task, {TProps} from "../components/todo.task/todo.task";
import {useCallback, useState} from "react";

const Todo = () => {
    const [value, setValue] = useState<string>("");
    const [tasks, setTasks] = useState<TProps[]>([]);
    const id = Date.now();

    const uncompletedTask = (tasks?: TProps[]): TProps[] => {
        if (!tasks) {
            return [];
        }
        return tasks.filter((task) => !task.complete)
    }

    const completedTask = (tasks?: TProps[]): TProps[] => {
        if (!tasks) {
            return [];
        }
        return tasks.filter((task) => task.complete)
    }

    const handlerInput = (value: string) => {
        setValue(value)
    }

    const handlerEditButton = () => {
        if (!value) {
            return
        }

        const taskParams: TProps = {
            id: id.toString(),
            title: value,
            complete: false,
        }
        setTasks((prevState) => {
            return [...prevState, taskParams]
        })
        setValue("")
    }

    const handlerDeleteButton = useCallback((task: TProps) => {
        setTasks((prevState) => {
            const newList = prevState.filter((element) => element.id !== task.id);

            console.log(task)
            console.log(prevState)
            console.log(newList)
            return newList;
        })
    }, [setTasks])

    const handlerCheckBox = useCallback((task: TProps) => {
        setTasks((prevState) => {
            const {complete, ...rest} = task;
            const newEl: TProps = {complete: !task.complete, ...rest};
            const newState: TProps[] = prevState.filter((element) => element.id !== task.id);
            return [...newState, newEl]
        })
    }, [])

    return (
        <div className="layout">
            <div className="layout__list">
                <div className="layout__list_do">
                    <h1>Do</h1>
                    {uncompletedTask(tasks).map((task, index) => (
                        <Todo_task task={task} delClick={handlerDeleteButton} onChange={handlerCheckBox} key={index}/>
                    ))}
                </div>
                <div className="layout__list_done">
                    <div className="layout__list_done_task">
                        <h1>Done</h1>
                        {completedTask(tasks).map((task, index) => (
                            <Todo_task task={task} delClick={handlerDeleteButton} onChange={handlerCheckBox}
                                       key={index}/>
                        ))}
                    </div>
                </div>
            </div>
            <div className="layout__input">
                <Input onChange={handlerInput} value={value}/>
                <Edit_button onClick={handlerEditButton}/>
            </div>
        </div>
    )
}

export default Todo;