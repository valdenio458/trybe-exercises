import React from 'react'

class JobForm extends React.Component{
    render(){
        const { handleChange } = this.props;
        return(
            <fieldset>
             <legend>Dados Profissionais</legend>
             <div className='container'>
                Resumo do currículo:
                    <textarea
                    name='resume'
                    maxLength='1000'
                    required
                    onChange={handleChange}
                    
                    />
                                
            </div>
            <div className='container'>
                Cargo:
                    <textarea
                    name='role'
                    maxLength='40'
                    required
                    onChange={handleChange}
                    //onMouseEnter={() => {alert('Preencha com cuidado esta informação.');}}
                    >
                    </textarea>             
            </div> 
            <div className='container'>
                Descrição:
                    <input
                    type='text'
                    name='roleDescription'
                    maxLength='40'
                    required
                    onChange={handleChange}                    
                    >
                    </input>             
            </div>           
         </fieldset>
        )

    }
}

export default JobForm