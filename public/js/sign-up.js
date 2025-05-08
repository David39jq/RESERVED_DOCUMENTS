const passwordRegister = (loginPass, loginEye) => {
    const input = document.getElementById(loginPass),
          iconEye = document.getElementById(loginEye);

    iconEye.addEventListener('click', () => {
        input.type = input.type === 'password' ? 'text' : 'password';
        iconEye.classList.toggle('ri-eye-fill');
        iconEye.classList.toggle('ri-eye-off-fill');
    });
};
passwordRegister('campoPass', 'logincampoPass');
passwordRegister('campoConfirmPass', 'logincampoConfirmPass');

document.querySelector('.login__form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const password = data.password_usuario;
    const confirmPassword = data.confirm_password_usuario;

    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
    }

    try {
        const response = await fetch('/regUsuario', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        
        console.log("📩 Respuesta del servidor recibida:", response);
        
        if (!response.ok) {
            console.error("⛔ Error en la respuesta del servidor:", response.status, response.statusText);
            alert("Error en el registro: " + response.statusText);
            return;
        }
        
        const result = await response.json();
        console.log("✅ Datos procesados del servidor:", result);
        

        if (response.ok) {
            alert(result.message || "Registro exitoso");
            window.location.href = result.redirectUrl;
        } else {
            alert(result.message || "Error en el registro");
        }
        
    } catch (error) {
        alert('Error de red o del servidor');
        console.error(error);
    }
});
