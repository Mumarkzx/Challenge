document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const inputs = form.querySelectorAll("input[required], textarea[required]");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let valido = true;

    form.querySelectorAll(".erro").forEach((msg) => msg.remove());

    inputs.forEach((campo) => {
      if (campo.value.trim() === "") {
        valido = false;
        mostrarErro(campo, "Este campo é obrigatório");
      } else if (campo.type === "email" && !validarEmail(campo.value)) {
        valido = false;
        mostrarErro(campo, "Digite um e-mail válido");
      }
    });

    if (valido) {
      const nome = document.getElementById("nome").value.trim();
      localStorage.setItem("nomeUsuario", nome);
      form.reset();
      alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
    }
  });

  function mostrarErro(campo, mensagem) {
    const erro = document.createElement("div");
    erro.className = "erro";
    erro.textContent = mensagem;
    campo.parentNode.insertBefore(erro, campo.nextSibling);
  }

    function validarEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
  });