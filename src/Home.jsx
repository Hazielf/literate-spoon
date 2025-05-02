import "./css/Home.css";

const Home = () => {
  const productos = [
    {
      id: 1,
      titulo: "Computadores",
      imagen: "/img/main/cpu.png"
    },
    {
      id: 2,
      titulo: "Monitores", 
      imagen: "/img/main/monitor.png"
    },
    {
      id: 3,
      titulo: "Laptops",
      imagen: "/img/main/laptop.png"
    },
    {
      id: 4,
      titulo: "Impresoras",
      imagen: "/img/main/impresora.png"
    },
    {
      id: 5,
      titulo: "Almacenamiento",
      imagen: "/img/main/almacenamiento.png"
    },
    {
      id: 6,
      titulo: "Componentes",
      imagen: "/img/main/componentes.png"
    }
  ];

  return (
    <main>
      <div className="banner">
        <img
          src="/img/main/banner_promo.jpg"
          alt="Banner promocional"
        />
      </div>

      <div className="grid">
        {productos.map((producto) => {
          return (
            <div 
              key={producto.id} 
              className="grid_item"
            >
              <h2>{producto.titulo}</h2>
              <img
                className="product-image"
                src={producto.imagen}
                alt={producto.titulo}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Home;