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
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const data = await response.json();
      console.log(data);
    }

    // Crear un producto nuevo
    else if (args[0] === "POST" && args[1] === "products") {
      const [title, price, category] = args.slice(2);

      const response = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        body: JSON.stringify({ title, price, category }),
        headers: { "Content-Type": "application/json" }
      });

      const data = await response.json();
      console.log("Producto creado:", data);
    }

    // Eliminar un producto
    else if (args[0] === "DELETE" && args[1].startsWith("products/")) {
      const productId = args[1].split("/")[1];

      const response = await fetch(`https://fakestoreapi.com/products/${productId}`, {
        method: "DELETE"
      });

      const data = await response.json();
      console.log("Producto eliminado:", data);
    }

    // Si el comando no coincide con nada
    else {
      console.log("Comando no reconocido. Usa GET, POST o DELETE.");
    }

  } catch (error) {
    console.error("Error en la operación:", error.message);
  }
}

// Ejecutar la función principal
main();
