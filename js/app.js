// app.js - Lógica compartida de la billetera digital

const STORAGE_KEYS = {
  balance: 'wallet_balance',
  transactions: 'wallet_transactions',
  contacts: 'wallet_contacts',
  loggedIn: 'wallet_logged_in'
};

// Tipos de transacción soportados
const TIPOS_TRANSACCION = {
  deposito: 'Depósito',
  transferencia: 'Transferencia recibida',
  compra: 'Compra / Pago'
};

function getTipoTransaccion(tipo) {
  return TIPOS_TRANSACCION[tipo] || 'Movimiento';
}

// ----- Inicialización de datos por defecto -----
function initWalletData() {
  if (localStorage.getItem(STORAGE_KEYS.balance) === null) {
    localStorage.setItem(STORAGE_KEYS.balance, '1250.00');
  }
  if (localStorage.getItem(STORAGE_KEYS.transactions) === null) {
    const defaultTransactions = [
      { desc: 'Depósito recibido', amount: 200.00, type: 'positive', tipo: 'deposito' },
      { desc: 'Envío a Juan Pérez', amount: -50.00, type: 'negative', tipo: 'compra' },
      { desc: 'Pago de servicios', amount: -120.00, type: 'negative', tipo: 'compra' },
      { desc: 'Transferencia recibida de Ana Gómez', amount: 500.00, type: 'positive', tipo: 'transferencia' },
      { desc: 'Envío a María López', amount: -30.00, type: 'negative', tipo: 'compra' }
    ];
    localStorage.setItem(STORAGE_KEYS.transactions, JSON.stringify(defaultTransactions));
  }
  if (localStorage.getItem(STORAGE_KEYS.contacts) === null) {
    const defaultContacts = [
      { name: 'Juan Pérez', cbu: '0000003100012345678901', alias: 'juan.perez.mp', bank: 'Banco Nación' },
      { name: 'María López', cbu: '0000003100098765432109', alias: 'maria.lopez.mp', bank: 'Banco Galicia' }
    ];
    localStorage.setItem(STORAGE_KEYS.contacts, JSON.stringify(defaultContacts));
  }
}

// ----- Balance -----
function getBalance() {
  return parseFloat(localStorage.getItem(STORAGE_KEYS.balance)) || 0;
}

function setBalance(value) {
  localStorage.setItem(STORAGE_KEYS.balance, value.toFixed(2));
}

function formatCurrency(value) {
  return 'S/ ' + Number(value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// ----- Transacciones -----
function getTransactions() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.transactions)) || [];
}

function addTransaction(desc, amount, tipo) {
  const transactions = getTransactions();
  transactions.unshift({
    desc: desc,
    amount: amount,
    type: amount >= 0 ? 'positive' : 'negative',
    tipo: tipo || (amount >= 0 ? 'transferencia' : 'compra')
  });
  localStorage.setItem(STORAGE_KEYS.transactions, JSON.stringify(transactions));
}

// ----- Contactos -----
function getContacts() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.contacts)) || [];
}

function addContact(contact) {
  const contacts = getContacts();
  contacts.push(contact);
  localStorage.setItem(STORAGE_KEYS.contacts, JSON.stringify(contacts));
}

// ----- Sesión -----
function setLoggedIn(value) {
  localStorage.setItem(STORAGE_KEYS.loggedIn, value ? 'true' : 'false');
}

function isLoggedIn() {
  return localStorage.getItem(STORAGE_KEYS.loggedIn) === 'true';
}

// Inicializar siempre al cargar el script
initWalletData();
