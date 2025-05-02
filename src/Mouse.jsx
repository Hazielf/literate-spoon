import "./css/Productos.css"

const Mouse = () => {
  const mouses = [
    {
      id: 1,
      imagen: "/img/productos/mpouse.avif",
      titulo: "Ratón de tres modos Mouse inalámbrico recargable INPHIC A9 Bee",
      caracteristicas: [
        "Interfaz del producto: Interfaz USB",
        "Chip de control principal: PAW3212",
        "Peso neto del ratón: 138G", 
        "Cable de ratón: Alambre trenzado de 1,8 m"
      ],
      precio: "S/250"
    },
    {
      id: 2,
      imagen: "/img/productos/mouse2.avif",
      titulo: "INPHIC Ratón PM1 inalámbrico",
      caracteristicas: [
        "Condición del producto: Nuevo",
        "Año de lanzamiento: 2024",
        "Tipo de accesorio de computación: Mouse",
        "Segmento: Gamer"
      ],
      precio: "S/185"
    },
    {
      id: 3, 
      imagen: "/img/productos/mouse4.avif",
      titulo: "MOUSE GAMING LOGITECH G203 LIGHTSYNC",
      caracteristicas: [
        "Marca: LOGITECH",
        "Tecnología de sensor: HERO",
        "DPI máximo: 8000",
        "Botones programables: 6"
      ],
      precio: "S/199"
    },
    {
      id: 4,
      imagen: "/img/productos/mouse3.avif", 
      titulo: "MOUSE GAMER LOGITECH G703",
      caracteristicas: [
        "Tecnología inalámbrica LIGHTSPEED",
        "Sensor HERO 25K",
        "RGB LIGHTSYNC",
        "Power Play compatible"
      ],
      precio: "$290"
    },
    {
      id: 5,
      imagen: "/img/productos/mouse5.avif",
      titulo: "Mouse Logitec G203 Optico Lightsync 8000",
      caracteristicas: [
        "Microprocesador: 32 bits ARM",
        "Resolución: 200-12.000 dpi",
        "Aceleración máx.: > 40 G",
        "Velocidad máx.: > 400 ips"
      ],
      precio: "S/580"
    },
    {
      id: 6,
      imagen: "/img/productos/MOUSE 6.avif", 
      titulo: "MOUSE GAMER LOGITECH G502 X PLUS RGB",
      caracteristicas: [
        "Año de lanzamiento: 2024",
        "Detalle de la garantía: 1 AÑO",
        "Modelo: G502 X PLUS",
        "País de origen: Estados Unidos"
      ],
      precio: "S/600"
    },
    {
      id: 7,
      imagen: "/img/productos/MOUSE7.avif",
      titulo: "Mouse Gamer Playpro Usb Retroiluminado",
      caracteristicas: [
        "Marca: Playpro",
        "Conexión: USB",
        "Condición del ítem: Nuevo",
        "Resolución del sensor: 3200 dpi"
      ],
      precio: "S/500"
    },
    {
      id: 8,
      imagen: "/img/productos/mouse 8.avif",
      titulo: "MOUSE GAMER HAVIT MS1025",
      caracteristicas: [
        "Año de lanzamiento: 2020",
        "Detalle de la garantía: buenas condiciones",
        "Modelo: MS1025",
        "País de origen: China"
      ],
      precio: "S/140"
    },
    {
      id: 9,
      imagen: "/img/productos/mouse9.avif",
      titulo: "Meetion G3325 Professional RGB Gaming Mouse",
      caracteristicas: [
        "Resolución: 5000 DPI, ajustable mediante software",
        "Botones: 8 botones programables",
        "Iluminación: RGB con 10 modos personalizables",
        "Aceleración Máxima: 20G"
      ],
      precio: "S/330"
    },
    {
      id: 10,
      imagen: "/img/productos/mouse10.avif",
      titulo: "MOUSE INALAMBRICO GAMER RECARGABLE LUZ RGB",
      caracteristicas: [
        "Condición del producto: Nuevo",
        "Año de lanzamiento: 2023",
        "Detalle de la garantía: Garantía solo por defectos de fábrica. 3 MESES",
        "País de origen: China"
      ],
      precio: "s/800"
    },
    {
      id: 11,
      imagen: "/img/productos/mouse11.avif",
      titulo: "Gaming Mouse 7D 3200 DPI RGB",
      caracteristicas: [
        "Certificación de calidad: CE y RoHS",
        "Cable: 1.4 metros de nylon trenzado",
        "Consumo eficiente de energía: 5V y 100 mA",
        "Peso: 115 gramos y dimensiones: 130x86x40mm"
      ],
      precio: "s/400" 
    },
    {
      id: 12,
      imagen: "/img/productos/mouse12.webp",
      titulo: "Mouse Gamer MICRONICS CY8",
      caracteristicas: [
        "Modelo: CY8",
        "Sensor óptico profesional",
        "RGB Rainbow",
        "6 botones programables"
      ],
      precio: "s/375"
    }
  ]

  return (
    <main className="items-page">
      <div className="items-container">
        <div className="items-grid">
          {mouses.map((mouse) => (
            <div key={mouse.id} className="item-card">
              <img
                src={mouse.imagen}
                alt={mouse.titulo}
                className="item-image"
              />
              <h2 className="item-title">{mouse.titulo}</h2>
              
              <div className="item-specs">
                {mouse.caracteristicas.map((caracteristica) => (
                  <p key={`${mouse.id}-${caracteristica}`} className="item-spec">{caracteristica}</p>
                ))}
              </div>
              
              <h1 className="item-price">{mouse.precio}</h1>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Mouse