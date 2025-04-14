function calcJuros() {

    let valorInicial = Number(document.getElementById("campo-valor").value);
    let investimentoMensal = Number(document.getElementById("campo-investimento").value);
    let juros = document.getElementById("campo-juros").value;
    let qntdMeses = document.getElementById("campo-meses").value;
    let mesInicial = Number(Math.round(document.getElementById("campo-mes-inicial").value));
    let anoInicial = Number(document.getElementById("campo-ano-inicial").value);

    let taxaMensal = Math.pow(1+juros/100, 1/12) - 1;
    // document.getElementById("test").innerHTML = taxaMensal;

    let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    let i = 0
    let rendimento = 0, valorFinal = 0, contMes = mesInicial;
    juros = (juros/12) / 100;
    for (i; i < qntdMeses; i++) {
        
        if (contMes == 12) {
            anoInicial++;
            contMes = 0;
        }
        rendimento = Number(valorInicial * juros);
        valorFinal = valorInicial+rendimento;
        document.getElementById("tabela").innerHTML += 
            `<tr>
                <td> ` + (i+1) + `</td> 
                <td> ` + meses[(mesInicial + i) % 12] + ` </td>
                <td> ` + anoInicial + ` </td>
                <td> ` + valorInicial + `</td>
                <td> ` + rendimento + `</td>
                <td> ` + valorFinal + `</td>
             </tr>`;
        valorInicial += investimentoMensal+rendimento;
        rendimento = 0;
        contMes++;
    }
}

