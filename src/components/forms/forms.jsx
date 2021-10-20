import "./forms.css";
import { useState } from 'react';


function Forms(){


    const [formValues, setFormValues] = useState({});

    const inputchange = (e) =>{
        const {name, value}= e.target;
        setFormValues({...formValues,[name]:value});
    };

    const formSubmit = (e) =>{
        e.preventDefault(); // Evita que os dados apareçam na URL
        const formData = new FormData(e.target); //torna em objeto e acessam o evento de target desse objeto
        const data = Object.fromEntries(formData); // jogo os dados do "target" capturado do objeto de cima, em uma variavel.

        console.log(data);
    }

    console.log(formValues);

    return(
    
        
        <form className='form' onSubmit={formSubmit}>
            <fieldset>    
                <div className='nome'>
                    <label>Nome</label>
                    <input name='nome' type='text' onChange={inputchange} />
                </div>

                <div className='sala'>
                    <label>Sala</label>
                    <input type='text' onChange={inputchange} name='sala'  />
                </div>  
            
                <div className='categoria'>
                    <label>Categoria</label>
                    <select name='categoria' onChange={inputchange} className='categoria'>
                        <option selected>ESCOLHA UMA OPÇÃO</option>
                        <option value='1'>INTERNET</option>
                        <option value='2'>ENERGIA</option>
                        <option value='3'>COMPUTADOR</option>
                        
                    </select>

                </div>

                <div  className='texto'>
                    <label>Descreva o problema</label>
                    <textarea name='texto' onChange={inputchange} ></textarea>
                </div>
            </fieldset>

            <button className='btn-envia' type='submit'>ENVIAR</button>

        </form>
    );

}

export default Forms;