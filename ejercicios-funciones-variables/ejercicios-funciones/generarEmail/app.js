function generarEmail(usuario, dominio){
    return ` ${usuario}@${dominio}.com `
}
console.log(generarEmail('adalovelace', 'mail'))