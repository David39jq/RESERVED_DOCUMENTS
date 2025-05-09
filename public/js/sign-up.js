/*=============== MOSTRAR OCULTAR CONTRASEÑA CREAR CUENTA ===============*/
const passwordRegister = (loginPass, loginEye) =>{
    const input = document.getElementById(loginPass),
          iconEye = document.getElementById(loginEye)
 
    iconEye.addEventListener('click', () =>{
       // Cambiar contraseña a texto
       input.type === 'password' ? input.type = 'text'
                                       : input.type = 'password'
 
       // cambio de icono
       iconEye.classList.toggle('ri-eye-fill')
       iconEye.classList.toggle('ri-eye-off-fill')
    })
 }
 passwordRegister('campoPass', 'logincampoPass');
 passwordRegister('campoConfirmPass', 'logincampoConfirmPass');

 /*=============== VALIDACIÓN DE FORMULARIO ===============*/
document.querySelector('.login__form').addEventListener('submit', function (e) {
   const password = document.querySelector('input[name="password_usuario"]').value.trim();
   const confirmPassword = document.querySelector('input[name="confirm_password_usuario"]').value.trim();

   // Validar longitud de contraseña
   if (password.length < 8 || password.length > 12) {
       alert("La contraseña debe tener entre 8 y 12 caracteres.");
       e.preventDefault();
       return;
   }

   // Validar coincidencia
   if (password !== confirmPassword) {
       alert("Las contraseñas no coinciden.");
       e.preventDefault();
       return;
   }
});
