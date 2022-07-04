const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const deliveryPerson = order.order.delivery.deliveryPerson;
    const orderName = order.name;
    const phoneNumber = order.phoneNumber;
    const street = order.address.street;
    const number = order.address.number;
    const apartment = order.address.apartment
    
   console.log(`Olá ${deliveryPerson}, entrega para: ${orderName},Telefone: ${phoneNumber},R.${street}, Nº:${number},AP:${apartment}.`);
   console.log('-------------------------------------------------------------------')
  }
  
  
  customerInfo(order);
    
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    const novoNome= order.name = 'Luiz Silva';
    const pizza = Object.keys(order.order.pizza);
    const bebida = order.order.drinks.coke.type;
    const novoPreco = order.payment.total = '50'
    console.log(`Olá ${novoNome}, o total do seu pedido de ${pizza[0]}, ${pizza[1]} e ${bebida} é R$${novoPreco},00.`)
  
  }
  
  orderModifier(order);