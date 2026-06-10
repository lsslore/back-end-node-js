// Función principal
async function main() {
  try {
    const args = process.argv.slice(2); // Captura después de "npm run start"

    // Consultar todos los productos
    if (args[0] === "GET" && args[1] === "products") {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
    }

    // Consultar un producto específico
    else if (args[0] === "GET" && args[1].startsWith("products/")) {
      const productId = args[1].split("/")[1];

      // Validación de ID
      if (!productId || isNaN(productId)) {
        console.log("ID inválido. Usa: GET products/<id>");
        return;
      }

      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const data = await response.json();
      console.log(data);
    }

    // Crear un producto nuevo
    else if (args[0] === "POST" && args[1] === "products") {
      // Validación de argumentos
      if (args.length < 5) {
        console.log("Faltan argumentos. Usa: POST products <title> <price> <category>");
        return;
      }

      const [title, precioTexto, category] = args.slice(2);
      const price = Number(precioTexto);

      if (isNaN(price)) {
        console.log("El precio debe ser un número válido.");
        return;
      }

      const response = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        body: JSON.stringify({ title, price, category }),
        headers: { "Content-Type": "application/json" }
      });

      const data = await response.json();

      // Muestra las propiedades del producto creado en el formato requerido (id, title, price, category)

      console.log(`id: ${data.id}`);
      console.log(`title: '${data.title}'`);
      console.log(`price: '${data.price}'`);
      console.log(`category: "${data.category}"`);
    }

    // Eliminar un producto
    else if (args[0] === "DELETE" && args[1].startsWith("products/")) {
      const productId = args[1].split("/")[1];

      // Validación de ID
      if (!productId || isNaN(productId)) {
        console.log("ID inválido. Usa: DELETE products/<id>");
        return;
      }

      const response = await fetch(`https://fakestoreapi.com/products/${productId}`, {
        method: "DELETE"
      });

      const data = await response.json();
      console.log("Producto eliminado:", data);
    }

    // Si el comando no coincide con nada
    else {
      console.log("Comando inválido. Formatos válidos:");
      console.log("   GET products");
      console.log("   GET products/<id>");
      console.log("   POST products <title> <price> <category>");
      console.log("   DELETE products/<id>");
    }

  } catch (error) {
    console.error("Error en la operación:", error.message);
  }
}

// Ejecutar la función principal
main();
