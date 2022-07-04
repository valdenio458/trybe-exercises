function selecionaEstado() {
    let estados = document.getElementById('input-state');
    let opcoesDeEstados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  
    for (let i = 0; i < opcoesDeEstados.length; i += 1) {
      let createOptions = document.createElement('option');
      estados.appendChild(createOptions).innerText = opcoesDeEstados[i];
      //estados.appendChild(createOptions).value = opcoesDeEstados[index];
    }
  }
  selecionaEstado();