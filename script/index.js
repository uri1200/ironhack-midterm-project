  document
    .querySelector(".icon-menu")
    .addEventListener("click", (event) => {
      if (
        document.getElementById("menu-burger").classList.contains("active")
      ) {
        document.getElementById("menu-burger").classList.remove("active");
        document.getElementById("icon-menu").classList.remove("active");
        document.getElementById("nav-4").classList.remove("active");
        }
      else{
        document.getElementById("menu-burger").classList.add("active");
        document.getElementById("icon-menu").classList.add("active");
        document.getElementById("nav-4").classList.add("active");
      } 
    });
    document
    .querySelector("form")
    .addEventListener("submit", (event) => {
        event.preventDefault();
        alert('Formulario enviado correctamente');
    })

