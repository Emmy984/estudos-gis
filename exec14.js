let filme = {
    titulo: "Para todos garotos que já amei",
    ano: 2018,
    diretora: "Susan Johnson"
};

for (let propriedade in filme) {
    console.log(propriedade + ": " + filme[propriedade]);
}