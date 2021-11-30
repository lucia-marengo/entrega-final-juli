const variableFormulario = document.getElementById("formulario");
const mensajeFinal = document.getElementById("resultado");
variableFormulario.addEventListener("submit", function (e) {
  e.preventDefault();
  //target es el form. elements son los campos que tienen name.nombre es el name de ese campo y value es el valor que tiene ese campo
  const elementos = e.target.elements;
  const nombre = elementos.nombre.value;
  const apellido = elementos.apellido.value;
  const pesoActual = parseInt(elementos.pesoActual.value);
  const pesoIdeal = parseInt(elementos.pesoIdeal.value);
  if (
    isNaN(pesoIdeal) ||
    isNaN(pesoActual) ||
    pesoActual === "" ||
    pesoIdeal === "" ||
    pesoActual < pesoIdeal ||
    pesoActual < 1 ||
    pesoIdeal < 1
  )
    return alert("error");
  const pesoABajar = pesoActual - pesoIdeal;
  mensajeFinal.innerText = `${nombre} ${apellido} tu peso a bajar es ${pesoABajar}`;
});
