import "./css/Productos.css"

function Impresoras() {
  const impresoras = [
    {
      id: 1,
      imagen: "/img/productos/impresora.webp",
      titulo: "Impresora Monofuncional Epson EcoTank L1250",
      caracteristicas: [
        "Conectividad WiFi.",
        "Compacta y Ligera.",
        "App Epson Smart Panel.",
        "Tanques frontales integrados."
      ],
      precio: "S/569"
    },
    {
      id: 2,
      imagen: "/img/productos/impre.jpg",
      titulo: "Impresora Multifuncional Tinta InkBenefit Tank T220",
      caracteristicas: [
        "Tipo de impresora: Multifuncional",
        "Tecnología Suministro: Botella",
        "Tecnología de Impresión: Tinta Continua (Botella de Tinta)",
        "Colores de impresión: Color"
      ],
      precio: "S/700"
    },
    {
      id: 3,
      imagen: "/img/productos/mmmmm.webp",
      titulo: "Impresora Multifuncional HP Smart Tank 580",
      caracteristicas: [
        "Modelo: Hp Smart Tank 580",
        "Marca: HP",
        "Información adicional: Impresión, copia, escaneado",
        "Vendido por: Marketplace"
      ],
      precio: "S/500"
    },
    {
      id: 4,
      imagen: "/img/productos/hhh.jpg",
      titulo: "Brother DCP-L2640DW Impresora láser multifunción",
      caracteristicas: [
        "Marca: Brother",
        "Tecnología de conectividad: Wi-Fi, USB, Ethernet",
        "Tecnología de impresión: Láser",
        "Nombre del modelo: DCPL2640DW"
      ],
      precio: "$ 730"
    },
    {
      id: 5,
      imagen: "/img/productos/hpppp.webp",
      titulo: "HP Smart Tank 580 Tinta Continua Color Wi-Fi Smart App Escáner",
      caracteristicas: [
        "Marca: HP",
        "Modelo: Smart Tank 580",
        "Tipo: Multifuncional",
        "Alto: 157,26 mm"
      ],
      precio: "S/580"
    },
    {
      id: 6,
      imagen: "/img/productos/hp s.jpg",
      titulo: "Impresora Multifuncional Tinta EcoTank L4260",
      caracteristicas: [
        "Marca: Epson",
        "Modelo: EcoTank L4260",
        "Interfaz y conectividad: USB de alta velocidad",
        "Compatibilidad: Windows Vista® / 7 / 8 / 8.1 / 10"
      ],
      precio: "S/800"
    },
    {
      id: 7,
      imagen: "/img/productos/awawa.webp",
      titulo: "Impresora Multifuncional EPSON L3250 Negro",
      caracteristicas: [
        "Modelo: TE-2765G",
        "Tamaño de la pantalla: 27\"",
        "Resolución de pantalla: WQHD",
        "Detalle de la garantía: 1 AÑO POR FALLA DE FABRICA"
      ],
      precio: "S/700"
    },
    {
      id: 8,
      imagen: "/img/productos/qwqwqw.webp",
      titulo: "Impresora Multifuncional EPSON L5590 Negro",
      caracteristicas: [
        "Incluye: TINTAS",
        "Modelo: L5590",
        "Número de entradas USB: 1",
        "Profundidad: 34.7 cm"
      ],
      precio: "S/650"
    },
    {
      id: 9,
      imagen: "/img/productos/zzzzzzz.webp",
      titulo: "Impresora Multifuncional Epson EcoTank L3250",
      caracteristicas: [
        "Garantía del proveedor: 1 año",
        "Marca: EPSON",
        "Modelo: EcoTank L3250",
        "Tipo: Multifuncional"
      ],
      precio: "S/980.00"
    },
    {
      id: 10,
      imagen: "/img/productos/añañaña.webp",
      titulo: "Impresora Multifuncional EPSON L3210",
      caracteristicas: [
        "Modelo: LG 27GS65F",
        "Tamaño de la pantalla: 27\"",
        "Resolución de pantalla: Full HD",
        "Garantía: 12 Meses"
      ],
      precio: "s/1800"
    },
    {
      id: 11,
      imagen: "/img/productos/impre 5.webp",
      titulo: "Impresora HP Todo-en-Uno Smart Tank 580",
      caracteristicas: [
        "Modelo: Smart Tank 580",
        "Alta Resolución (HD): Alta Resolución (HD)",
        "Registro Fecha/Hora: Registro Fecha/Hora",
        "Conexión Firewire: Conexión Firewire"
      ],
      precio: "s/630"
    }
  ]
    return (
    <main className="items-page">
        <div className="items-container">
        <div className="items-grid">
            {impresoras.map((impresora) => (
            <div key={impresora.id} className="item-card">
                <img
                src={impresora.imagen}
                alt={impresora.titulo}
                className="item-image"
                />
                <h2 className="item-title">{impresora.titulo}</h2>
                
                <div className="item-specs">
                {impresora.caracteristicas.map((caracteristica, index) => (
                    <p key={index} className="item-spec">{caracteristica}</p>
                ))}
                </div>
                
                <h1 className="item-price">{impresora.precio}</h1>
            </div>
            ))}
        </div>
        </div>
    </main>
    )
}

export default Impresoras