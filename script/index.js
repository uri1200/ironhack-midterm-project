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
        // const form = document.getElementsByTagName('form');
        // const preLoad = new FormData(form);
        // const load = new URLSearchParams(preLoad);

        // fetch('https://httpbin.org/post', {
        //     method: "POST",
        //     body: load,
        // })
        //     .then(res => res.json())
        //     .then(data => console.log(data))
        //     .catch(err => console.log(err));
        alert('Formulario enviado correctamente')
    })

