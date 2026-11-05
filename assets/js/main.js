// We Want More · interacciones de la landing

// 1) Palabra que rota en la frase "MORE ___, MORE DRAGONS."
const palabras = ['HUMANS', 'CREATORS', 'SCIENCE', 'EMPATHY'];
const palabra = document.getElementById('palabra');
const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let i = 0;

if (palabra && !sinMovimiento) {
  setInterval(() => {
    palabra.classList.add('oculta');
    setTimeout(() => {
      i = (i + 1) % palabras.length;
      palabra.textContent = palabras[i];
      palabra.classList.remove('oculta');
    }, 300);
  }, 2200);
}

// 2) Medir clics en los botones de llamada a la acción (eventos de GA4).
//    Funciona solo cuando ya pegaste la etiqueta de Google en el <head>.
function medir(nombreEvento, parametros) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', nombreEvento, parametros);
  }
}

document.querySelectorAll('[data-cta]').forEach((boton) => {
  boton.addEventListener('click', () => {
    medir('clic_cta', { ubicacion: boton.dataset.cta });
  });
});

// 3) Formulario de demostración: avisa que aún no está conectado.
//    Cuando pegues el formulario de Brevo, este bloque deja de usarse.
const formDemo = document.getElementById('form-demo');
if (formDemo) {
  formDemo.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const aviso = document.getElementById('aviso');
    if (!formDemo.checkValidity()) {
      aviso.textContent = 'Completa tu nombre, correo, perfil y acepta la política para continuar.';
      return;
    }
    aviso.textContent = 'Formulario de prueba: aún no está conectado a Brevo. Reemplázalo por tu código de inserción.';
  });
}
