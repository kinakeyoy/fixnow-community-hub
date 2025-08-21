# 📋 Guía Completa: Migrar FixNow a Nueva Cuenta GitHub y Publicar

## 🎯 Objetivo
Migrar completamente el proyecto FixNow a una nueva cuenta de GitHub y publicarlo en GitHub Pages, manteniendo la página idéntica a la actual.

---

## 📋 Prerequisitos
- Nueva cuenta de GitHub creada
- Nuevo correo electrónico
- Git instalado en tu computadora
- Node.js instalado (versión 18 o superior)

---

## 🔄 MÉTODO 1: Usando Lovable (Más Fácil)

### Paso 1: Desconectar Cuenta Actual
1. En Lovable, ve a **Account Settings** (icono de usuario arriba derecha)
2. Busca la sección **GitHub Integration**
3. Haz clic en **Disconnect from GitHub**
4. Confirma la desconexión

### Paso 2: Conectar Nueva Cuenta
1. Cierra sesión de GitHub en tu navegador
2. Inicia sesión con tu nueva cuenta de GitHub
3. En Lovable, haz clic en **GitHub** → **Connect to GitHub**
4. Autoriza la aplicación Lovable con tu nueva cuenta
5. Selecciona la organización/cuenta donde crear el repo

### Paso 3: Crear Nuevo Repositorio
1. En Lovable, haz clic en **Create Repository**
2. Nombra el repositorio (ej: `fixnow-landing`)
3. Espera a que se sincronice todo el código

### Paso 4: Publicar en GitHub Pages
1. Ve a tu nuevo repositorio en GitHub
2. Ve a **Settings** → **Pages**
3. En **Source**, selecciona **GitHub Actions**
4. Crea el archivo `.github/workflows/deploy.yml` con este contenido:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
    
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm install
    
    - name: Build
      run: npm run build
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

5. Haz commit y push de este archivo
6. Ve a **Actions** y espera que termine el deploy
7. Tu página estará disponible en: `https://tu-usuario.github.io/fixnow-landing`

---

## 🔄 MÉTODO 2: Manual/Local (Control Total)

### Paso 1: Descargar Código Actual
```bash
# Clona el repositorio actual
git clone https://github.com/CUENTA-ACTUAL/REPO-ACTUAL.git fixnow-backup
cd fixnow-backup

# Guarda una copia de seguridad completa
cp -r . ../fixnow-final/
cd ../fixnow-final

# Elimina la referencia al repo anterior
rm -rf .git
```

### Paso 2: Preparar Nuevo Repositorio Local
```bash
# Inicializa nuevo repositorio
git init
git add .
git commit -m "Initial commit - FixNow landing page"
```

### Paso 3: Crear Repositorio en Nueva Cuenta GitHub
1. Ve a tu nueva cuenta de GitHub
2. Haz clic en **New Repository**
3. Nombra el repo: `fixnow-landing`
4. **NO inicialices** con README, .gitignore o license
5. Copia la URL del repositorio

### Paso 4: Conectar y Subir
```bash
# Conecta con el nuevo repositorio
git remote add origin https://github.com/TU-NUEVA-CUENTA/fixnow-landing.git

# Sube todo el código
git branch -M main
git push -u origin main
```

### Paso 5: Configurar GitHub Pages
1. En tu repositorio, ve a **Settings** → **Pages**
2. En **Source**, selecciona **GitHub Actions**
3. Crea el archivo de workflow (paso 4 del Método 1)
4. Espera el deploy automático

### Paso 6: Verificar Funcionamiento Local
```bash
# Instala dependencias
npm install

# Ejecuta en desarrollo
npm run dev

# Construye para producción
npm run build

# Vista previa de producción
npm run preview
```

---

## 🔧 Configuraciones Adicionales

### Dominio Personalizado (Opcional)
Si tienes un dominio propio:
1. En **Settings** → **Pages** → **Custom domain**
2. Ingresa tu dominio: `www.fixnow.com`
3. Crea archivo `CNAME` en la raíz con tu dominio
4. Configura DNS en tu proveedor:
   ```
   CNAME www tu-usuario.github.io
   ```

### Variables de Entorno
Si tu proyecto usa variables de entorno:
1. Ve a **Settings** → **Secrets and variables** → **Actions**
2. Agrega cada variable como **Repository secret**

### Configuración de Build
Asegúrate que tu `package.json` tenga:
```json
{
  "homepage": "https://tu-usuario.github.io/fixnow-landing",
  "scripts": {
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

---

## ✅ Lista de Verificación Final

### Antes del Deploy:
- [ ] Código respaldado localmente
- [ ] Nueva cuenta GitHub lista
- [ ] Repositorio creado en nueva cuenta
- [ ] Código subido completamente
- [ ] Workflow de GitHub Actions configurado

### Después del Deploy:
- [ ] Página carga correctamente
- [ ] Todas las imágenes se ven
- [ ] Formularios funcionan
- [ ] Responsive design funciona
- [ ] SEO metadata presente
- [ ] Performance optimizada

### Verificación de Contenido:
- [ ] Countdown timer funciona
- [ ] Sección Hero completa
- [ ] Service Rating funcional
- [ ] Team Section visible
- [ ] Early Access Form funciona
- [ ] Footer presente
- [ ] Todos los estilos aplicados

---

## 🚨 Solución de Problemas Comunes

### Error: "404 - Page not found"
```bash
# Verifica la configuración base en vite.config.ts
export default defineConfig({
  base: '/fixnow-landing/', // Nombre de tu repositorio
  // ... resto de config
})
```

### Imágenes no cargan
- Verifica que las imágenes estén en `src/assets/`
- Usa imports relativos: `import imagen from '@/assets/imagen.jpg'`

### Estilos no se aplican
- Verifica que `index.css` esté importado en `main.tsx`
- Confirma que Tailwind esté configurado correctamente

### Build falla
```bash
# Limpia cache y reinstala
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📞 Recursos Adicionales

- [GitHub Pages Docs](https://docs.github.com/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [GitHub Actions Docs](https://docs.github.com/actions)

---

## 🎉 ¡Listo!

Siguiendo esta guía tendrás tu página FixNow funcionando idénticamente en tu nueva cuenta de GitHub y publicada en GitHub Pages. 

**URL Final:** `https://tu-nuevo-usuario.github.io/fixnow-landing`

¿Necesitas ayuda con algún paso específico? ¡Pregúntame!