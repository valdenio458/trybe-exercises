    
    import React from 'react';
    import './App.css';

    const Task = (value) => {
      return (
        <li>{value}</li>
      );
    }

    const tarefas = ['Acordar', 'Escovar os dentes', 'Tomar café', 'Estudar'];

    class App extends React.Component {
      render() {
        return (          
          <ol>{tarefas.map((tarefa) => Task(tarefa))}</ol>
        );
      }
    }

    export default App;
