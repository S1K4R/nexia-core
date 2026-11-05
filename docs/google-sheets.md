# Guardar las opiniones en Google Sheets (opcional)

El formulario ya funciona solo con Web3Forms. Si además quieres que cada opinión se guarde como fila en una hoja de Google, el dueño de la hoja debe publicar un Apps Script (unos 5 minutos).

## Pasos

1. Abre la hoja de cálculo de destino con tu cuenta de Google.
2. Usa la pestaña llamada **Feedback_Clientes** (si no existe, créala con ese nombre exacto). En la fila 1 escribe: `Fecha | Nombre | Empresa o cargo | Valoración | Comentario`.
3. Menú **Extensiones → Apps Script**. Borra el código y pega esto:

```js
function doPost(e) {
  var hoja = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Feedback_Clientes");
  var d = JSON.parse(e.postData.contents);
  // Descarta el campo trampa y los envíos vacíos
  if (d.botcheck || !d.nombre || !d.comentario) {
    return ContentService.createTextOutput("ignorado");
  }
  hoja.appendRow([new Date(), d.nombre, d.empresa, d.valoracion, d.comentario]);
  return ContentService.createTextOutput("ok");
}
```

4. Pulsa **Implementar → Nueva implementación → Tipo: Aplicación web**.
   - Ejecutar como: **Yo**.
   - Quién tiene acceso: **Cualquier persona**.
5. Autoriza los permisos cuando Google los pida y copia la **URL de la aplicación web** (termina en `/exec`).
6. Pega esa URL en la variable de entorno `NEXT_PUBLIC_SHEETS_URL`:
   - En local: en el archivo `.env.local`.
   - En Vercel: **Settings → Environment Variables**, y vuelve a desplegar.

Si cambias el código del script, crea una **nueva versión** de la implementación (la URL se mantiene).

> La URL es pública por diseño: cualquiera que la conozca puede enviar filas. Para un proyecto académico es suficiente.
