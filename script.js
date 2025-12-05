let votos = [0, 0, 0, 0, 0];
let rodada = 1;
let senhaDono = "1234"; // Você pode mudar a senha

function votar(grupo) {
    votos[grupo]++;

    if (rodada === 1) {
        let total = votos.reduce((a,b)=>a+b,0);
        if (total >= 10) { // definindo quando muda de rodada
            rodada = 2;
            document.getElementById("rodada-num").innerText = "2";
            alert("Rodada 2 começou!");
        }
    } else {
        let total = votos.reduce((a,b)=>a+b,0);
        if (total >= 20) {
            alert("Votação finalizada!");
        }
    }
}

function resetar() {
    votos = [0,0,0,0,0];
    rodada = 1;
    document.getElementById("rodada-num").innerText = "1";
    alert("Votação resetada!");
}

function verResultados() {
    let senha = document.getElementById("senha").value;

    if (senha !== senhaDono) {
        alert("Senha incorreta!");
        return;
    }

    let maior = Math.max(...votos);
    let vencedor = votos.indexOf(maior);

    let nomes = ["Grupo A", "Grupo B", "Grupo C", "Grupo D", "Grupo E"];

    document.getElementById("resultado-texto").innerText =
        "Vencedor: " + nomes[vencedor] +
        "\n\nVotos: " + votos.join(", ");

    document.getElementById("resultado-final").classList.remove("hidden");
}

function fecharResultado() {
    const popup = document.getElementById("resultado-final");
    popup.classList.add("hidden");
}

document.addEventListener("click", function(e) {
    if (e.target.id === "closeFinal") {
        const popup = document.getElementById("finalPopup");
        if (popup) popup.style.display = "none";
    }
});
