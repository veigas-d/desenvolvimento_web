const form = document.getElementById("form-contato");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const mensagem = document.getElementById("mensagem");
const statusMensagem = document.getElementById("mensagem-status");

// validar email
function emailValido(emailTexto) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTexto);
}

form.addEventListener("submit", function(event) {
  event.preventDefault();

  // verificar campos vazios
  if (
    nome.value.trim() === "" ||
    email.value.trim() === "" ||
    mensagem.value.trim() === ""
  ) {
    statusMensagem.style.color = "red";
    statusMensagem.textContent = "Preencha todos os campos!";
    return;
  }

  // validar email
  if (!emailValido(email.value)) {
    statusMensagem.style.color = "red";
    statusMensagem.textContent = "Digite um e-mail válido!";
    return;
  }

  // sucesso
  statusMensagem.style.color = "green";
  statusMensagem.textContent = "Mensagem enviada com sucesso!";

  // limpar campos
  form.reset();
});