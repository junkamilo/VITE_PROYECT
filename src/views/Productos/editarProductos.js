export const editarProducto = async (id, data) => {
    console.log(id, data);
  
    fetch(`http://localhost:3000/api/productos/${id}`, {
      method: "PUT",
      body: JSON.stringify({
          id
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  