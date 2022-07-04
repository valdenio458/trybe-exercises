import React from 'react'
import MainForm from './componentes/MainForm'
import JobForm from './componentes/JobForm'

const inicialState = {
  name:'',
  email:'',
  cpf:'',
  address:'',
  city:'',
  countryState:'',
  addressType:'',
  resume:'',
  role:'',
  roleDescription:''

}
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = inicialState;

    this.handleChange = this.handleChange.bind(this);
  }
  

  handleChange({target}){
    const{ name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({[name]:value,})
  }
  render() {
    return(
      <>
        <MainForm 
        handleChange={this.handleChange}
        />
        <JobForm
         handleChange={this.handleChange}     
        />
      </>
    );
  }
}

export default App;