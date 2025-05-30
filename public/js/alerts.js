// alerts.js
const hideAlert = () => {
    const el = document.querySelector('.alert');
    if (el) el.parentElement.removeChild(el);
  };
  
  const showAlert = (type, msg) => {
    hideAlert(); // first remove any previous alert
    const markup = `<div class = "alert alert--${type}">${msg}</div>`;
    document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
    window.setTimeout(hideAlert, 5000);
  };
  
  // Export these functions globally
  window.alerts = { hideAlert, showAlert };
  