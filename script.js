// exibir/oculta senha
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
	const type = password.type === "password" ? "text" : "password";
	password.type = type;

	this.classList.toggle("fa-eye");
	this.classList.toggle("fa-eye-slash");
});

// validação dos campos
function fieldValidation(event) {
	var user = document.querySelector('#cpfEmail');
	var pass = document.querySelector('#password');
	var infoBox = document.querySelector('#infoBox');

	if (user.value.trim() === '') {

		infoBox.textContent = 'Preencha o campo usuário para continuar';
		infoBox.style.color = 'red'
		infoBox.style.opacity = '1';
		user.style.border = '1px solid red';
		user.focus();
		event.preventDefault();

		// oculta a msg e altera o comportamento da borda por de 2.5s
		setTimeout(() => {
			user.style.border = '';
		}, 2000);

	} else if (pass.value.trim() === '') {

		infoBox.textContent = 'Preencha o campo senha para continuar';
		infoBox.style.color = 'red'
		infoBox.style.opacity = '1';
		pass.style.border = '1px solid red';
		pass.focus();
		event.preventDefault();

		setTimeout(() => {
			pass.style.border = '';
		}, 2000);

	} else {
		infoBox.textContent = 'Login realizado com sucesso ✅️';
		infoBox.style.color = 'green'
		event.preventDefault();
	}
}
