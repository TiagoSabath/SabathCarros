const veiculosCadastrados = JSON.parse(localStorage.getItem("veiculosCadastradosStorage"));
const sectionCardContainer = document.querySelector("section");

if (!veiculosCadastrados) {
    const mensagem = document.createElement("h1");
    mensagem.innerHTML =
        "Anuncie aqui ";
    sectionCardContainer.appendChild(mensagem);
} else {
    for (let i = 0; i < veiculosCadastrados.length; i++) {
        const carro = veiculosCadastrados[i];

        const divCard = document.createElement("div");
        divCard.className = "car-card";
        const image = document.createElement("img");
        image.src = carro.img;
        image.className = "carImg";

        const carDescriptionElem = document.createElement("h2");
        carDescriptionElem.className = "carDescription";

        const ulAtrib = document.createElement("ul");
        ulAtrib.className = "ulCard";

        const param = {
            Marca: carro.marca,
            Modelo: carro.modelo,
            Telefone: carro.tele,
            Ano: carro.ano,
            KM: carro.km,
            Valor: carro.valor,
        };

        for (const valor in param) {
            const parametro = document.createElement("li");
            parametro.className = "list-param";
            parametro.innerText = `${valor}: ${param[valor]}`;
            ulAtrib.appendChild(parametro);
        }


        const btnExcluir = document.createElement("button");
        btnExcluir.innerHTML = "Excluir anúncio";
        btnExcluir.type = "button";
        btnExcluir.className = "btnExcluir";

        btnExcluir.addEventListener("click", function () {
            excluirVeiculo(i);
        });

        divCard.appendChild(image);
        divCard.appendChild(carDescriptionElem);
        divCard.appendChild(ulAtrib);
        divCard.appendChild(btnExcluir);
        sectionCardContainer.appendChild(divCard);
    }
}

function excluirVeiculo(index) {
    veiculosCadastrados.splice(index, 1);
    localStorage.setItem("veiculosCadastradosStorage", JSON.stringify(veiculosCadastrados));
    const cardToRemove = document.querySelector(`.car-card:nth-child(${index + 1})`);
    if (cardToRemove) {
        cardToRemove.remove();
    }
}
