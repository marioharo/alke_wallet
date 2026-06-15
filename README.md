# Alke Wallet 💼

Proyecto del Módulo 2 (Fundamentos del desarrollo Front-end) — Alkemy.

Aplicación de billetera digital que permite a los usuarios iniciar sesión, ver su
saldo, depositar dinero, enviar dinero a contactos y revisar su historial de
movimientos.

## 🚀 Demo

Abrir `index.html` en el navegador (redirige automáticamente a la pantalla de
inicio de sesión).

**Credenciales de prueba:**
- Email: `usuario@wallet.com`
- Contraseña: `1234`

## 📂 Estructura del proyecto

```
alke-wallet/
├── index.html              # Punto de entrada, redirige a login
├── css/
│   └── styles.css          # Estilos generales y paleta fintech
├── js/
│   └── app.js              # Lógica compartida (saldo, transacciones, contactos)
└── html/
    ├── login.html          # Inicio de sesión
    ├── menu.html            # Menú principal con saldo y accesos rápidos
    ├── deposit.html         # Depósito de fondos
    ├── sendmoney.html        # Envío de dinero y gestión de contactos
    └── transactions.html     # Historial de movimientos con filtros
```

## 🛠️ Tecnologías utilizadas

- HTML5 semántico
- CSS3 (diseño responsive y paleta de colores fintech)
- Bootstrap 5
- JavaScript (ES6)
- jQuery

## ✨ Funcionalidades

- **Login**: validación de credenciales con jQuery y alertas de Bootstrap.
- **Menú principal**: muestra el saldo actual (persistido en `localStorage`) y
  accesos a Depositar, Enviar Dinero y Últimos Movimientos.
- **Depósito**: actualiza el saldo, muestra el monto depositado y redirige al
  menú tras una alerta de éxito.
- **Enviar dinero**: búsqueda de contactos, alta de nuevos contactos con
  validación de CBU/alias/banco, selección de contacto y envío con
  actualización de saldo.
- **Últimos movimientos**: historial de transacciones con filtro por tipo
  (depósito, transferencia recibida, compra/pago).

## 🌳 Estrategia de ramas (Git)

- `main` — Código estable, listo para entrega.
- `feature/login` — Funcionalidad de inicio de sesión.
- `feature/transacciones` — Envío y recepción de fondos.
- `feature/depositos` — Depósitos y manejo de saldo.

Cada funcionalidad se desarrolla en su rama correspondiente y se integra a
`main` mediante Pull Requests para revisión de código.
