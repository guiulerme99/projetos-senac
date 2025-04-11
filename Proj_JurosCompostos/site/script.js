function calcJuros() {

    let valorInicial = document.getElementById("campo-valor").value;
    let investimentoMensal = document.getElementById("campo-investimento").value;
    let juros = document.getElementById("campo-juros").value;
    let qntdMeses = document.getElementById("campo-meses").value;
    let mesInicial = document.getElementById("campo-mes-inicial").value;
    let anoInicial = document.getElementById("campo-ano-inicial").value;

    let taxaMensal = Math.pow(1+juros/100, 1/12) - 1;
    document.getElementById("campo1").innerHTML = taxaMensal;



}