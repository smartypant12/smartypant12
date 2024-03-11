document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'dk1006498' && password === 'Washu0112!') {
      loginForm.reset();
      window.location.assign("tracking.html")
    } else {
      alert('Invalid username or password');
    }
  });
});
