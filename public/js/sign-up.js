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
 
// Validar las contraseñas antes de enviar el formulario
document.querySelector('.login__form').addEventListener('submit', function (e) {
   const password = document.querySelector('input[name="password_usuario"]').value;
   const confirmPassword = document.querySelector('input[name="confirm_password_usuario"]').value;

   // Verificar que las contraseñas coincidan
   if (password !== confirmPassword) {
       alert("Las contraseñas no coinciden");
       e.preventDefault(); // Evitar el envío del formulario
   }
});