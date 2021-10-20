import styles from './Input.module.css'
function Select (props){
    
    return <>
            <div className='categoria'>
                    <label>{props.label}</label>
                    <select name={props.name} onChange={props.handleChange} className='categoria'>
                        <option selected>ESCOLHA UMA OPÇÃO</option>
                        {
                            props.options &&
                                props.options.map((option,index) => (
                                    <option key={index}>{option}</option>
                                ))
                        }
                    </select>
            </div>
    </>
}

export default Select