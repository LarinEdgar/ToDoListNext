import styles from './input.module.css'

interface IProps {
    value?: string;
    onChange: (value: string) => void;
}

const Input = (props: IProps) => {
    function handleChange(event: any) {
        props.onChange(event.target.value)
    }

    return (
        <input className={styles.input} type="text" value={props.value} onChange={handleChange}/>
    )
}

export default Input;