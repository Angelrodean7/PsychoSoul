// -----------------        REGISTER        ----------------- //
function modal() {
  let form = document.getElementById("form_data");
  let valid = validation(form);

  if (valid == true) {
    $('#myModal').modal('hide');
    $('#myModalLogin').modal('show');
  }
}

function validation(form) {
  return form.name.checkValidity()
  && form.email.checkValidity()
  && form.adress.checkValidity()
  && form.age.checkValidity()
  && form.reason.checkValidity()
  && form.number.checkValidity()
  && form.membership.checkValidity();
}


function login() {
  let form_login = document.getElementById("form_login");
  let form = new FormData(form_login);
  let user = form.get("username");
  let pass = form.get("password");
  
  if (user == "test" && pass == "test") {
    localStorage.setItem("login", "true");
    window.location.href = "http://127.0.0.1:5500/index.html";
  } else {
    alert("Usuario o contraseña incorrecta");
  }
}


// -----------------        LOGIN        ----------------- //
let val = localStorage.getItem("login");
let payment = localStorage.getItem("pago");

function signOut() {
  localStorage.setItem("login", "false");
  localStorage.setItem("pago", "flase");
}

if (val == "true"){
  // document.getElementById("main-button").innerHTML = '<a href="#" id="menu-button" class="header-button"">Mi Cuenta</a>';
} else {
  document.getElementById("main-button").innerHTML = '<a href="login.html" class="header-button"">Iniciar sesión</a>';
}


// -----------------        MI CUENTA        ----------------- //
let menuButton = document.getElementById("menu-button");
let menuList = document.getElementById("menu-list");

menuButton.addEventListener("click", function() {
  if (menuList.style.display === "none") {
    menuList.style.display = "block";
  } else {
    menuList.style.display = "none";
  }
});


function cita() {
  let form_cita = document.getElementById("form_cita");
  let form = new FormData(form_cita);
  let doc = form.get("doctor");
  let date = form.get("date");
  let hour = form.get("hour");
  
  if (date != "" && hour != "") {
    if (payment == "true") {
      if (doc == 3 && hour == "10:00") {
        $('#myModalNoCita').modal('show');
      } else {
        $('#myModalCita').modal('show');
      }
    } else {
      $('#myModalPago').modal('show');
    }
  }
}


function pago() {
  let form_pago = document.getElementById("form_pago");
  let form = new FormData(form_pago);
  let number = form.get("card-number");
  let name = form.get("card-name");
  let cvv = form.get("cvv");
  
  if (number != "" && name != "" && cvv != "") {
    localStorage.setItem("pago", "true");
    $('#ModalPayment').modal('show');
  }
}

function pass() {
  let form_pass = document.getElementById("form_pass");
  let form = new FormData(form_pass);
  let passA = form.get("pass-act");
  let passN = form.get("pass-new");
  let passN2 = form.get("pass-new2");
  
  if (passA != "" && passN != "" && passN2 != "") {
    $('#ModalPass').modal('show');
  }
}


// COLORES
// #1caf9a
// rgb(37, 226, 199)