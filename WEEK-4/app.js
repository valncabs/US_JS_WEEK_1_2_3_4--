
// =====================================
// URL DE LA API
// =====================================

const API_URL = "http://localhost:3000/products";


// =====================================
// REFERENCIAS DEL DOM
// =====================================

const form = document.getElementById("productForm");

const nameInput = document.getElementById("name");

const priceInput = document.getElementById("price");

const productList = document.getElementById("productList");

const message = document.getElementById("message");


// =====================================
// MOSTRAR MENSAJES
// =====================================

function showMessage(text, type) {

    message.textContent = text;

    if (type === "success") {

        message.style.color = "green";

    } else {

        message.style.color = "red";
    }
}


// =====================================
// OBTENER PRODUCTOS DE LA API
// =====================================

async function getProducts() {

    try {

        const response = await fetch(API_URL);

        const products = await response.json();

        renderProducts(products);

        console.log("GET:", products);

    } catch (error) {

        console.error(error);

        showMessage(
            "Error al obtener productos",
            "error"
        );
    }
}


// =====================================
// RENDERIZAR PRODUCTOS
// =====================================

function renderProducts(products) {

    productList.innerHTML = "";

    products.forEach((product) => {

        // Crear li
        const li = document.createElement("li");

        li.innerHTML = `
            <span>
                ${product.name} - $${product.price}
            </span>
        `;

        // =====================================
        // BOTON ELIMINAR
        // =====================================

        const deleteButton =
            document.createElement("button");

        deleteButton.textContent = "Eliminar";

        deleteButton.addEventListener("click", () => {

            deleteProduct(product.id);

        });


        // =====================================
        // BOTON EDITAR
        // =====================================

        const editButton =
            document.createElement("button");

        editButton.textContent = "Editar";

        editButton.addEventListener("click", () => {

            editProduct(product);

        });


        // Contenedor botones
        const buttonContainer =
            document.createElement("div");

        buttonContainer.appendChild(editButton);

        buttonContainer.appendChild(deleteButton);

        li.appendChild(buttonContainer);

        productList.appendChild(li);

    });
}


// =====================================
// AGREGAR PRODUCTO
// =====================================

form.addEventListener("submit", async (event) => {

    event.preventDefault();

    const name = nameInput.value.trim();

    const price = priceInput.value.trim();


    // VALIDACIONES

    if (name === "" || price === "") {

        showMessage(
            "Todos los campos son obligatorios",
            "error"
        );

        return;
    }


    const newProduct = {

        name,
        price

    };


    try {

        const response = await fetch(API_URL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(newProduct)

        });


        const data = await response.json();

        console.log("POST:", data);

        showMessage(
            "Producto agregado correctamente",
            "success"
        );

        form.reset();

        // RECARGAR PRODUCTOS
        getProducts();

    } catch (error) {

        console.error(error);

        showMessage(
            "Error al agregar producto",
            "error"
        );
    }
});


// =====================================
// ELIMINAR PRODUCTO
// =====================================

async function deleteProduct(id) {

    try {

        await fetch(`${API_URL}/${id}`, {

            method: "DELETE"

        });

        console.log("DELETE:", id);

        showMessage(
            "Producto eliminado",
            "success"
        );

        getProducts();

    } catch (error) {

        console.error(error);

        showMessage(
            "Error al eliminar",
            "error"
        );
    }
}


// =====================================
// EDITAR PRODUCTO
// =====================================

async function editProduct(product) {

    // Pedir nuevos datos
    const newName = prompt(
        "Nuevo nombre:",
        product.name
    );

    const newPrice = prompt(
        "Nuevo precio:",
        product.price
    );


    // Validar
    if (!newName || !newPrice) {

        showMessage(
            "Datos inválidos",
            "error"
        );

        return;
    }


    const updatedProduct = {

        name: newName,
        price: newPrice

    };


    try {

        const response = await fetch(
            `${API_URL}/${product.id}`,
            {

                method: "PUT",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(updatedProduct)

            }
        );

        const data = await response.json();

        console.log("PUT:", data);

        showMessage(
            "Producto actualizado",
            "success"
        );

        getProducts();

    } catch (error) {

        console.error(error);

        showMessage(
            "Error al actualizar",
            "error"
        );
    }
}


// =====================================
// INICIAR APP
// =====================================

getProducts();

