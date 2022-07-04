//* Transformar snake case em camel case:

const serialize = (userData)=> {
  return {
    id: userData.id,
    firstName: userData.first_name,
    lastName: userData.middle_name,
    email: userData.email,
    password:userData.password
  }
}