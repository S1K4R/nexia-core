// Todo lo editable de la web está aquí.
export const config = {
  nombre: "Nexia Core",
  eslogan: "Transformando la complejidad operativa en valor de negocio.",
  esloganEn: "Leading the digital industrial revolution.",
  // WhatsApp: solo dígitos, con código de país (ejemplo, cámbialo por el real)
  whatsapp: "51987654321",
  telefono: "+51 987 654 321",
  correo: "contacto@nexiacore.com",
  ubicacion: "Lima, Perú",
  // Redes: deja "" para mostrar "Próximamente"
  redes: {
    linkedin: "",
    instagram: "",
    facebook: "",
  },
  mensajeWhatsappFlotante: "Hola, estoy interesado en el producto",
  mensajeDemo: "Hola, quiero solicitar una demo de Nexia Core.",
};

export const waLink = (texto) =>
  `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(texto)}`;
