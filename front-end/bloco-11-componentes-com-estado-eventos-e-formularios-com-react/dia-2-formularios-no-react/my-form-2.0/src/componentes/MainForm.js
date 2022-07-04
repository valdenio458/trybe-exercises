import React from 'react'
const states = [
    'Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Espírito Santo',
    'Goías',
    'Maranhão',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraíma',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocantins'
    ];
class MainForm extends React.Component{
    render(){

        const { handleChange } = this.props;
        return(      
         <fieldset>
             <legend>Dados Pessoais</legend>
             <div className='container'>
                Nome:
                    <input
                     type='text'
                     name='name'
                     maxLength='40'
                     required
                     onChange={handleChange}
                     >
                    </input>                
            </div>
            <div className='container'>
                Email:
                    <input 
                    type='text'
                    name='email' 
                    maxLength='50'
                    required
                    onChange={handleChange}
                    >
                    </input> 
            </div>           
            <div className='container'>
                CPF:
                    <input 
                    type='text'
                    name='cpf' 
                    maxLength='11'
                    required
                    onChange={handleChange}
                    >
                    </input>                
            </div>
            <div className='container'>
                Endereço:
                    <input 
                    type='text'
                    name='address' 
                    maxLength='200'
                    required
                    onChange={handleChange}
                    >
                    </input>                
            </div>
            <div className='container'>
                Cidade:
                    <input 
                    type='text'
                    name='city' 
                    maxLength='28'
                    required
                    onChange={handleChange}
                    >
                    </input>
             </div> 
             <div className='container'>
                 Estado:
                 <select 
                 name='countryState'
                 required
                 onChange={handleChange}
                 >
                <option value=''>Selecione</option>
                {states.map((value, key) => 
                <option key={ key }>{ value }</option>)}

                 </select>
             </div>  
             <div className='container'>
             <label htmlFor='house'>
                 <input 
                 type='radio'
                 name='addressType'
                 id='house'
                 value='house'
                 onChange={handleChange}
                 >
                 </input>
                 Casa
             </label>
             <label htmlFor='apart'>
                 <input
                 type='radio'
                 name='addressType'
                 id='apart'
                 value='apartment'
                 onChange={handleChange}
                 >
                 </input>
                 Apartamento
             </label>
             </div>
           
         </fieldset>
       
    
        )
    }
}


export default MainForm