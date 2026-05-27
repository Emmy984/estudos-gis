const desconto = (preço,percentual) => {
    return (preço*percentual)/100
}
console.log(desconto(80,20));