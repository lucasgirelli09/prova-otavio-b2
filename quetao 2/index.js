function validadeSenha(password) {
  const lowercaseLetters = /[a-z]/;
  const uppercaseLetters = /[A-Z]/;
  const digits = /[0-9]/;
  const minLength = 8;

  const hasLowercase = lowercaseLetters.test(password);
  const hasUppercase = uppercaseLetters.test(password);
  const hasDigits = digits.test(password);
  const hasValidLength = password.length >= minLength;

  return hasLowercase && hasUppercase && hasDigits && hasValidLength;
}

const inputPassword = prompt("Digite sua senha:");
const isPasswordValid = validadeSenha(inputPassword);

if (isPasswordValid) {
  console.log("Senha válida!");
} else {
  console.log("Senha inválida!");

  if (inputPassword.length < 8) {
    console.log("A senha deve ter pelo menos 8 caracteres.");
  }
  if (!lowercaseLetters.test(inputPassword)) {
    console.log("A senha deve conter pelo menos uma letra minúscula.");
  }
  if (!uppercaseLetters.test(inputPassword)) {
    console.log("A senha deve conter pelo menos uma letra maiúscula.");
  }
  if (!digits.test(inputPassword)) {
    console.log("A senha deve conter pelo menos um número.");
  }
}
