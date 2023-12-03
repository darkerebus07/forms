const scriptURL = 'https://script.google.com/macros/s/AKfycbyJ4MfNnyuYuQdNQRkSLRXjTFJPPVcPg8y79UQ9zEIor3RjTVXzoxMgd-G2uteVsw2_/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
