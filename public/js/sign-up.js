passwordRegister('campoPass', 'logincampoPass');
// // Función para alternar visibilidad de contraseña
// const togglePasswordVisibility = (inputId, iconId) => {
//     const input = document.getElementById(inputId);
//     const icon = document.getElementById(iconId);
  
//     if (input && icon) {
//       icon.addEventListener('click', () => {
//         const isHidden = input.type === 'password';
//         input.type = isHidden ? 'text' : 'password';
  
//         icon.classList.toggle('ri-eye-off-fill', !isHidden);
//         icon.classList.toggle('ri-eye-fill', isHidden);
//       });
//     }
//   };
  
//   // Aplicar la función a ambos campos
//   togglePasswordVisibility('campoPass', 'logincampoPass');
//   togglePasswordVisibility('campoConfirmPass', 'logincampoConfirmPass');

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
