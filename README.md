# Angular External Libraries Demo

Este proyecto es una demostración sencilla del uso de bibliotecas externas en Angular, específicamente Angular Material para interfaces modernas y `ngx-charts` para visualización de datos.

El proyecto fue generado desde cero utilizando Angular CLI y está dividido en dos partes principales: un formulario modal interactivo y una visualización de datos con gráficos.

Desplegado en GitHub Pages: https://github.com/DanielCaldes/angular-external-libraries

## Tecnologías utilizadas

- Angular
- Angular Material (diálogos, inputs, botones)
- SCSS para estilos
- TypeScript
- ngx-charts (visualización de datos)

## Cómo ejecutar localmente

1. Clonar el repositorio:
   ```
   git clone https://github.com/DanielCaldes/angular-external-libraries.git
   ```
2. Entrar al proyecto:
   ```
   cd angular-external-libraries
   ```
3. Instalar dependencias:
   ```
   npm install
   ```
4. Ejecutar la app:
   ```
   ng serve
   ```
5. Abrir en el navegador:
   ```
   http://localhost:4200
   ```

## Descripción del proyecto

### 1. Componente de Formulario (`MaterialFormComponent`)

- Contiene un botón que abre un **diálogo modal (`DialogComponent`)** utilizando Angular Material.
- El diálogo contiene un formulario con los campos:
  - Nombre
  - Email
  - Dirección
- Incluye dos botones:
  - **Cancelar**: Cierra el diálogo sin enviar nada.
  - **Enviar**: Si el formulario es válido, cierra el diálogo y devuelve los datos al componente padre.
- Los datos enviados se muestran dinámicamente en el HTML de `MaterialFormComponent`.

### 2. Componente de Gráficos (`ChartComponent`)

- Contiene dos gráficos creados con `ngx-charts` cada uno separado en un componente:
  - **Gráfico de líneas**
  - **Gráfico de barras verticales**
- Son responsivos y admiten personalización de colores.
- Los datos están definidos dentro del componente para demostración.

## Estructura del proyecto

```
📁 src/
├── 📁 app/
│   ├── 📁 components/
│   │   ├── 📁 material-form/
│   │   │   ├── 📄 material-form.component.ts
│   │   │   ├── 📄 material-form.component.html
│   │   │   └── 📄 material-form.component.scss
│   │   ├── 📁 dialog/
│   │   │   ├── 📄 dialog.component.ts
│   │   │   ├── 📄 dialog.component.html
│   │   │   └── 📄 dialog.component.scss
│   │   ├── 📁 ngx-charts/
│   │   │   ├── 📄 ngx-charts.component.ts
│   │   │   ├── 📄 ngx-charts.component.html
│   │   │   └── 📄 ngx-charts.component.scss
│   │   ├── 📁 line-chart/
│   │   │   ├── 📄 data.ts
│   │   │   ├── 📄 line-chart.component.ts
│   │   │   ├── 📄 line-chart.component.html
│   │   │   └── 📄 line-chart.component.scss
│   │   ├── 📁 bar-chart/
│   │   │   ├── 📄 data.ts
│   │   │   ├── 📄 bar-chart.component.ts
│   │   │   ├── 📄 bar-chart.component.html
│   │   │   └── 📄 bar-chart.component.scss
│   ├── 📄 app.component.ts
│   ├── 📄 app.component.html
│   └── 📄 app.component.scss
├── 📁 assets/
└── 📄 styles.scss
```
