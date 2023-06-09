//Transformar a array
const numeroLista = Array.from(document.querySelectorAll("#lista-numeros li")).map(function(li) {
    return Number(li.textContent);
  });
  
  // Calcular el promedio
  const promedio = numeroLista.reduce(function(total, numero) {
    return total + numero;
  }, 0) / numeroLista.length;
  const $promedio = document.querySelector("#promedio");
  $promedio.textContent = promedio;
  
  // Obtener el número más chico
  const numeroMinimo = Math.min.apply(null, numeroLista);
  const $numeroMinimo = document.querySelector("#numero-minimo");
  $numeroMinimo.textContent = numeroMinimo;
  
  // Obtener el número más grande
  const numeroMaximo = Math.max.apply(null, numeroLista);
  const $numeroMaximo = document.querySelector("#numero-maximo");
  $numeroMaximo.textContent = numeroMaximo;
  
  // Obtener el número que más se repite
  const contadorNumeros = {};
  let numeroMasFrecuente;
  let frecuenciaMaxima = 0;
  
  for (const numero of numeroLista) {
    contadorNumeros[numero] = (contadorNumeros[numero] || 0) + 1;
  
    if (contadorNumeros[numero] > frecuenciaMaxima) {
      frecuenciaMaxima = contadorNumeros[numero];
      numeroMasFrecuente = numero;
    }
  }
  
  const numeroFrecuenteElement = document.querySelector("#numero-frecuente");
  numeroFrecuenteElement.textContent = numeroMasFrecuente;
  