# Gestión de Productos Web App

## Descripción del proyecto

Esta aplicación web fue desarrollada con JavaScript moderno (ES6+) y tiene como objetivo gestionar productos mediante operaciones dinámicas en el DOM, persistencia de datos en Local Storage y sincronización con una API usando Fetch API.

La aplicación permite:

* Agregar productos.
* Visualizar productos dinámicamente.
* Eliminar productos.
* Guardar información en Local Storage.
* Consumir una API mediante operaciones CRUD.
* Validar datos ingresados por el usuario.
* Manejar errores con try...catch.

---

# Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript ES6+
* Local Storage
* Fetch API
* JSON Server

---

# Estructura del proyecto

```plaintext
proyecto-productos/
│
├── index.html
├── app.js
├── style.css
└── db.json
```

---

# Funcionalidades principales

## Manipulación del DOM

La aplicación crea elementos dinámicamente utilizando:

* createElement()
* appendChild()
* addEventListener()

También permite eliminar elementos desde la interfaz.

---

## Persistencia con Local Storage

Los productos se almacenan localmente usando:

```javascript
localStorage.setItem()
localStorage.getItem()
```

Esto permite conservar la información incluso después de recargar la página.

---

## Integración con Fetch API

La aplicación se conecta a una API usando JSON Server e implementa:

| Método | Función              |
| ------ | -------------------- |
| GET    | Obtener productos    |
| POST   | Agregar productos    |
| PUT    | Actualizar productos |
| DELETE | Eliminar productos   |

---

# Instalación del proyecto

## 1. Clonar o descargar el proyecto

```bash
git clone URL_DEL_REPOSITORIO
```


---

## 2. Instalar JSON Server

Abrir terminal y ejecutar:

```bash
npm install -g json-server
```

---

## 3. Ejecutar JSON Server

Ubicarse en la carpeta del proyecto y ejecutar:

```bash
json-server --watch db.json
```

La API estará disponible en:

```plaintext
http://localhost:3000/products
```

---

## 4. Ejecutar la aplicación

Abrir el archivo:

```plaintext
index.html
```

en el navegador.

---

# Validaciones implementadas

* Campos vacíos.
* Datos inválidos.
* Manejo de errores en Fetch API.
* Mensajes dinámicos de éxito y error.

---

# Evidencias solicitadas

Se deben incluir capturas de:

## DOM

* Antes de agregar productos.
* Después de agregar productos.

## Consola

* Respuestas GET.
* Respuestas POST.
* Respuestas PUT.
* Respuestas DELETE.

## Local Storage

Visualización de los datos guardados desde:

```plaintext
F12 → Application → Local Storage
```

---

# Buenas prácticas implementadas

* Uso de let y const.
* Código comentado.
* Nomenclatura camelCase.
* Organización modular del código.
* Uso de async/await.
* Manejo de errores con try...catch.

---

# Autor

Valentina Cabas

---

# Resultado esperado

La aplicación debe permitir gestionar productos correctamente, mantener la persistencia de datos y sincronizar información con la API simulada utilizando Fetch API.
