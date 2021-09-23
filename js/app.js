const imagenes = document.querySelectorAll(".galeria .contenedor-imagen");
const imagenModal = document.getElementById("imagen-modal");
const descripcionImagen = document.getElementById("descripcion-imagen");

imagenes.forEach((imagen) => {
  imagen.addEventListener("click", () => {
    const img = imagen.querySelector("img");
    imagenModal.src = img.src;
    let id = img.id;
    let linkGit =
      '<a href="https://github.com/GonFrecks1/MVCStoreDemo.git" target="_blank">https://github.com/GonFrecks1/MVCStoreDemo.git</a>';

    switch (id) {
      case "img-1":
        descripcionImagen.innerHTML =
          "BASE DE DATOS: Tablas y Stored Procedures.";
        break;
      case "img-2":
        descripcionImagen.innerHTML = "DESKTOP: Registro de articulos.";
        break;
      case "img-3":
        descripcionImagen.innerHTML = "DESKTOP: Pantalla de ventas.";
        break;
      case "img-4":
        descripcionImagen.innerHTML =
          "MVC: Practica Carrito de compras img #1, code github: " + linkGit;
        break;
      case "img-5":
        descripcionImagen.innerHTML =
          "MVC: Practica Carrito de compras img #2, code github: " + linkGit;
        break;
      case "img-6":
        descripcionImagen.innerHTML =
          "MVC: Practica Carrito de compras img #3, code github: " + linkGit;
        break;
      case "img-7":
        descripcionImagen.innerHTML = "MVC: ";
        break;
      case "img-8":
        descripcionImagen.innerHTML =
          "Modificación al sistema para que funcione en Farmacia, se instalo DataBase con XAMPP y exe con C# en farmacia del pueblo";
        break;
      case "img-9":
        descripcionImagen.innerHTML = "Ticket de corte de caja.";
        // "Reporte de Existencias Mínimas: filtra por <= a cantidad.";
        break;
      case "img-10":
        descripcionImagen.innerHTML =
          "Reporte de Ventas: Filtra por periodo o estableciendo rango de fechas.";
        break;
      default:
        break;
    }
  });
});
