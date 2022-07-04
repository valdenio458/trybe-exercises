const newEmployees = (createPerson) => {
    const employees = {
      id1: createPerson('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: createPerson('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: createPerson('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };
  function createPerson(name){
      const nome = name.toLowerCase().split(' ').join('_');
      return {
          nomeCompleto: name,
          email: `${nome}@trybe.com`
      };
  }
 const employees = newEmployees(createPerson);
 console.log(employees);
 

  