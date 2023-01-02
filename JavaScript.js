const form = document.getElementById('signup-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
    alert('All fields are required!');
    return;
  }

  if (!isValidEmail(email)) {
    alert('Please enter a valid email address!');
    return;
  }

  // Form is valid, submit the data to the server
  submitForm(name, email, password);
});

function isValidEmail(email) {
  // Add code to validate email
}

function submitForm(name, email, password) {
  // Add code to submit the form data to the server
}
