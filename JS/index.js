//GLOBAL

var btn_menu = document.createElement("img");
btn_menu.src = "./Assets/menu.svg";


/**
 * @description Con esta función corroboro que el elemento dentro del JSON exista, y en caso de que no,
 * no se muestra
 * @version 1.0
 * @returns true or false
 */

function object_exist(value) {
  if (value != undefined && value != "" && value != "null") {
    return true;
  } else {
    return false;
  }
}

/**
 * @description Obtengo todo el contenido del JSON y lo plasmo en la pantalla
 * @version 1.0
 */

async function getData() {
  let data = await fetch("./data.json")
    .then((res) => res.json())
    .then((res) => {
      return res;
    });

  const { title, tag, text, image_web, image_mobile, buttons } = data.banner;
  const { logo, options } = data.menu;

  /*NAVBAR*/
  var containerLeft = document.getElementById("left");
  var containerRight = document.getElementById("right");
  //Logo
  var logoUp = document.createElement("img");
  logoUp.setAttribute("id", "logoUp");
  logoUp.src = logo;
  containerLeft.appendChild(logoUp);

  //Menu
  options.forEach((element) => {
    if (object_exist(element.url) && object_exist(element.name)) {
      if (element.class === "button") {
        var button = document.createElement("a");
        button.textContent = element.name;
        button.href = element.url;
        button.classList.add("button");
        containerRight.appendChild(button);
      } else {
        var a = document.createElement("a");
        a.textContent = element.name;
        a.href = element.url;
        containerRight.appendChild(a);
      }
    }
  });

  //Menu escondido
  var menuEscondido = document.createElement("div");
  menuEscondido.setAttribute('id', 'menuEscondido')
  containerRight.appendChild(menuEscondido);
  containerRight.appendChild(btn_menu).classList.add("btnShow");
  options.forEach((element) => {
    if (object_exist(element.url) && object_exist(element.name)) {
      var a = document.createElement("a");
      a.textContent = element.name;
      a.href = element.url;
      menuEscondido.appendChild(a);
    }
  });
  

  /*HOME*/
  var container = document.getElementById("containerText");

  //Texto

  var titulo = document.createElement("h1");
  titulo.textContent = title;

  var sub_tag = document.createElement("h2");
  sub_tag.textContent = tag;

  var texto = document.createElement("p");
  texto.textContent = text;

  container.appendChild(sub_tag);
  container.appendChild(titulo);
  container.appendChild(texto);

  //Botones
  if (object_exist(buttons[(0, 1)].url) && object_exist(buttons[(0, 1)].name)) {
    var enlace = document.createElement("a");
    enlace.textContent = buttons[0].name;
    enlace.href = buttons[0].url;
    enlace.target = buttons[0].target;
    container.appendChild(enlace);
  }


}

  /**
 * @description Obtiene el elemento menuEscondido y al cumplir la condición, añade la clase
 * active y cambia su estado. Al volver a hacer click en el botón si no está en su estado
 * original, remueve la clase.
 * @version 1.0
 * @returns true or false
 */

   var open = false;
   btn_menu.onclick =  function openMenu() {
    var menu = document.getElementById("menuEscondido");
    if (open === false) {
      menu.classList.add("active");
      open = true;
    } else {
      menu.classList.remove("active");
      open = false;
    }
  }