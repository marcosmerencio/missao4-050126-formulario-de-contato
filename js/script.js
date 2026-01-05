document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const toast = document.getElementById('toast');
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        // --- VALIDAÇÃO DO NOME ---
        const nameValue = nameInput.value.trim();
        const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ']+(\s+[A-Za-zÀ-ÖØ-öø-ÿ']+)+$/;

        if (nameValue === "") {
            showError(nameInput, "Nome obrigatório.");
            isValid = false;
        } else if (!nameRegex.test(nameValue)) {
            showError(nameInput, "Por favor, informe seu nome completo.");
            isValid = false;
        } else {
            removeError(nameInput);
        }

        // --- VALIDAÇÃO DO EMAIL ---
        const emailValue = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailValue === "") {
            showError(emailInput, "E-mail obrigatório.");
            isValid = false;
        } else if (!emailRegex.test(emailValue)) {
            showError(emailInput, "Informe um endereço de e-mail válido.");
            isValid = false;
        } else {
            removeError(emailInput);
        }

        if (isValid) {
            toast.classList.add('show');
            form.reset();
            setTimeout(() => toast.classList.remove('show'), 4000);
        }
    });

    function showError(input, message) {
        const group = input.parentElement;
        const messageSpan = group.querySelector('.error-message');
        messageSpan.textContent = message;
        group.classList.add('error');
    }

    function removeError(input) {
        input.parentElement.classList.remove('error');
    }

    // Limpa erro ao digitar
    [nameInput, emailInput].forEach(input => {
        input.addEventListener('input', () => removeError(input));
    });
});