import styles from './Input.module.css'
function Input (props){
    return <>
            <div className='nome'>
                <label>{props.label}</label>
                <input name={props.name} type={props.type} onChange={props.handleChange} />
            </div>
    </>
}

export default Input