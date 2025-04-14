function calcJuros() {

    let valorInicial = document.getElementById("campo-valor").value;
    let investimentoMensal = document.getElementById("campo-investimento").value;
    let juros = document.getElementById("campo-juros").value;
    let qntdMeses = document.getElementById("campo-meses").value;
    let mesInicial = Math.round(document.getElementById("campo-mes-inicial").value);
    let anoInicial = document.getElementById("campo-ano-inicial").value;

    let taxaMensal = Math.pow(1+juros/100, 1/12) - 1;
    // document.getElementById("test").innerHTML = taxaMensal;

    let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    let i = 0;
    for (i; i < qntdMeses; i++) {
        document.getElementById("tabela").innerHTML += 
            `<tr>
                <td> ` + (i+1) + `</td> 
                <td> ` + meses[(mesInicial + i) % 12] + ` </td>
                <td> ` + anoInicial + ` </td>
             </tr>`;
    }
}

