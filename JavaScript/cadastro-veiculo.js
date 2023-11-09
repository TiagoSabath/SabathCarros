const btnCadastrarVeiculo = document.querySelector(".btnVeiculo");

btnCadastrarVeiculo.addEventListener("click", cadastrarVeiculo);


let veiculosCadastrados = [];

let img = "";
const imageEl = document.querySelector("#img");
imageEl.addEventListener("change", () => {
  const fr = new FileReader();
  fr.readAsDataURL(imageEl.files[0]);
  fr.addEventListener("load", () => {
    img = fr.result;
  });
});

function cadastrarVeiculo(event) {
  event.preventDefault();
  if (localStorage.veiculosCadastradosStorage) {
    veiculosCadastrados = JSON.parse( 
      localStorage.getItem("veiculosCadastradosStorage" ));
      alert("Veiculo anunciado: ")
 }

 
  const tele = document.querySelector("#veiculoTele").value;
  const ano = document.querySelector("#veiculoAno").value;
  const km = document.querySelector("#veiculoKm").value;
  const valor = document.querySelector("#veiculoValor").value;
  const marca = document.querySelector("#veiculoMarca").value;
  const modelo = document.querySelector("#veiculoModelo").value;

  if (!tele || !valor || !km || !img || !marca || !modelo) {
  } else {
    veiculosCadastrados.push({
      marca,
      modelo,
      ano,
      km,
      tele,
      valor,
      img,
    });
    console.log(`Veículos  cadastrado com sucesso!`);
  }
  console.log(veiculosCadastrados);
  localStorage.veiculosCadastradosStorage = JSON.stringify(veiculosCadastrados);
  atualizarTabelaVeiculos();
}
marca = "";
modelo = "";
tele = "";
ano = "";
km = "";
valor = "";
img = "";
 function listarVeiculosCadastrados() {
 return veiculosCadastrados;
 }
  
