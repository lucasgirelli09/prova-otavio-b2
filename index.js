function validarSenha(senha) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return regex.test(senha);
}

const inputSenha = prompt("Digite sua senha:");
const senhaValida = validarSenha(inputSenha);

if (senhaValida) {
  console.log("Senha válida!");
} else {
  console.log("Senha inválida!");

  if (inputSenha.length < 8) {
    console.log("A senha deve ter pelo menos 8 caracteres.");
  }
  if (!/(?=.*[a-z])/.test(inputSenha)) {
    console.log("A senha deve conter pelo menos uma letra minúscula.");
  }
  if (!/(?=.*[A-Z])/.test(inputSenha)) {
    console.log("A senha deve conter pelo menos uma letra maiúscula.");
  }
  if (!/(?=.*\d)/.test(inputSenha)) {
    console.log("A senha deve conter pelo menos um número.");
  }
}
