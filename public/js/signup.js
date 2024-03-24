// Example using fetch API in JavaScript
const formData = new FormData(document.getElementById('userSignupForm'));
fetch('/path/to/signup/api', {
  method: 'POST',
  body: formData,
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

