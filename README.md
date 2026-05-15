# SwellPro Argentina - Web premium

Proyecto Next + React + TypeScript basado en la estructura moderna de XPece, adaptado para SwellPro Argentina.

## Qué incluye

- Home moderna orientada a conversión.
- Páginas de producto para:
  - Fisherman FD1+
  - Fisherman Max FD2
  - Fisherman FD3
- Secciones comerciales: beneficios, cómo funciona, comparativa, experiencia, contacto.
- Botones a tienda y WhatsApp.
- Meta Pixel integrado con el ID existente del sitio viejo.
- Redirecciones para rutas viejas:
  - `/fishermandFd1`
  - `/fishermanFd2MAX`
  - `/fishermanFd3`
- Assets optimizados y reutilizados desde el sitio anterior.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abrir:

```bash
http://localhost:3000
```

## Dónde cambiar datos importantes

Archivo principal de datos:

```bash
src/lib/data.ts
```

Ahí podés editar:

- WhatsApp
- email
- URL de tienda
- textos
- productos
- specs
- imágenes

## Tienda

Actualmente los botones apuntan a:

```bash
https://shop-swellpro.com/
```

Cuando tengas los links finales de Tienda Nube/productos, reemplazalos en `src/lib/data.ts` dentro de `buyUrl`.

## Tracking

El Meta Pixel está en:

```bash
src/components/Tracking.tsx
```

Usé el Pixel ID que venía en la web vieja:

```bash
546426051134354
```

Si el cliente usa otro, cambiarlo ahí.
