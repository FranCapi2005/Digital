// bloque n5
/*About us

Queremos poder mostrar el gran equipo que estuvo trabajando en el proyecto del último sitio web. Es por eso que queremos habilitar la famosa ruta about-us que envía al usuario el HTML con una descripción del equipo, persona por persona.

Para poder resolver esto debemos completar las partes faltantes del código. Queremos que al usuario, al ingresar al about-us, se le envie la siguiente vista: about-us.html. Esta misma se encuentra en la carpeta views.*/

const path = require('path');

app.get('/about.us', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/about-us.html'))
});
