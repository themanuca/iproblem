import styles from './Input.module.css'
function Input (props){
    return <>
            <div className={styles.divInputValues}>
                <label>{props.label}</label>
                <input name={props.name} className={styles.inputValues} type={props.type} onChange={props.handleChange} />
            </div>
    </>
}

export default Input