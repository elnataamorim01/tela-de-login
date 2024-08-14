const allUsers = [];

document.getElementById('registrarBtn').addEventListener('click', function(event){
  event.preventDefault();

  document.querySelector('.formCadastro').style.display = 'flex';
  
  document.querySelector('.formLogin').style.display = 'none';

  document.getElementById('registrarBtn').style.display = 'none';

  document.getElementById('voltarBtn').style.display = 'flex';
  
  title.innerHTML = 'MEMBER REGISTER';
});

document.getElementById('voltarBtn').addEventListener('click', function(event){
  event.preventDefault();

  document.querySelector('.formCadastro').style.display = 'none';
  
  document.querySelector('.formLogin').style.display = 'flex';

  document.getElementById('registrarBtn').style.display = 'flex';

  document.getElementById('voltarBtn').style.display = 'none';

  const title = document.getElementById('title');

  title.innerHTML = 'MEMBER LOGIN';
});

function cadastrarBtn(event){
  event.preventDefault()

  const userNewName = document.getElementById('userNewName').value;

  const newEmail = document.getElementById('newEmail').value;

  const newPassword = document.getElementById('newPassword').value;

  if(!userNewName || !newEmail || !newPassword){
    alert('Preencha todos os campos!')
  }

  let newEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let newPasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;


  if(newEmailRegex.test(newEmail) && newPasswordRegex.test(newPassword)){
    let compararEmail = allUsers.some(function(user){
      return user.email === newEmail 
    })

    if(compararEmail === false){
      const createUser = {
        name: userNewName,
        email: newEmail,
        password: newPassword
      };
    
      allUsers.push(createUser);
      alert(`Usuário ${createUser.name} cadastrado com sucesso.`)
    } else{
      alert(`Email ${newEmail} já cadastrado.`)
    }

  } else if (!newEmailRegex.test(newEmail) && !newPasswordRegex.test(newPassword)) {
    alert('Email ou senha incorretos')
  } else if (!newEmailRegex.test(newEmail) && newPasswordRegex.test(newPassword)){
    alert ('Formato do email incorreto.')
  } else{
    alert('Formato da senha incorreta.\n Sua senha deve conter ao menos:\n-> 8 dígitos\n-> 1 número\n-> 1 letra maiúscula e 1 minúscula\n-> 1 caractere especial ($*&@#)')
  }

}

document.getElementById('cadastrarBtn').addEventListener('click', cadastrarBtn)

function loginBtn(event) {
  event.preventDefault()

  const userName = document.getElementById('userName').value
  const userPassword = document.getElementById('userPassword').value

  let usuarioEncontrado = allUsers.find(function(user) {
    return user.name === userName && user.password === userPassword;
  });

  if (usuarioEncontrado) {
    alert('Bem vindo!')
  } else {
    alert('Usuário ou senha incorretos');
  }
}

document.getElementById('loginBtn').addEventListener('click', loginBtn);
