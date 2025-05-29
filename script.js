function soloLetras(valor) {
      return /^[a-zA\s]+$/.test(valor);
    }

    function soloNumeros(valor) {
      return /^\d{8}$/.test(valor);
    }

    function fechaValida(valor) {
      const fecha = new Date(valor);
      return fecha.getFullYear() > 2006;
    }

    function emailValido(valor) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
    }

    function validarFormulario() {
      const apellido = document.getElementById("apellido").value.trim();
      const nombre = document.getElementById("nombre").value.trim();
      const dni = document.getElementById("dni").value.trim();
      const fechaNacimiento = document.getElementById("fechaNacimiento").value;
      const email = document.getElementById("email").value.trim();

      if (!soloLetras(apellido)) {
        alert("El apellido solo debe contener letras.");
        return false;
      }
      if (!soloLetras(nombre)) {
        alert("El nombre solo debe contener letras.");
        return false;
      }
      if (!soloNumeros(dni)) {
        alert("El DNI debe contener exactamente 8 dígitos.");
        return false;
      }
      if (!fechaValida(fechaNacimiento)) {
        alert("La fecha de nacimiento debe ser posterior al año 2006.");
        return false;
      }
      if (!emailValido(email)) {
        alert("El email ingresado no es válido.");
        return false;
      }
      alert("Formulario enviado correctamente.");
      return true;
    }

    function preguntasProgresivas() {
      const respuestas = [];
      respuestas.push(prompt("¿Cuál es tu nacionalidad?"));
      respuestas.push(prompt("¿Cuál es tu color favorito?"));
      respuestas.push(prompt("¿Cuál es el nombre de tu mascota?"));

      let output = "<h4>Respuestas:</h4><ul>";
      respuestas.forEach(res => output += `<li>${res}</li>`);
      output += "</ul>";
      document.getElementById("respuestas").innerHTML = output;
    }
