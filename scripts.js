

function showAlert() {
  alert("Thank you for clicking the button!");
}

document.addEventListener("DOMContentLoaded", function(){
  const ratingForm = document.getElementById('reviewForm');
  const reviewsContainer = document.getElementById('reviewsContainer');

  ratingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userName = document.getElementById('name').value;
    const selectedRating = Array.prototype.filter.call(document.getElementsByName('rating'), (radio) => radio.checked)[0].value;
    const userComment = document.getElementById('comment').value;

    const reviewHTML = `
      <div class="review">
        <h4>${userName}</h4>
        <p>Rating: ${selectedRating} out of 5</p>
        <p>${userComment}</p>
      </div>
    `;
    reviewsContainer.innerHTML = reviewHTML + reviewsContainer.innerHTML;

    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';
    document.getElementsByName('rating').forEach((radio) => radio.checked = false);
  });
});

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Send a request to your server to authenticate the user
  fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  })
  .then((response) => response.json())
  .then((data) => {
    if (data.authenticated) {
      // User is authenticated, redirect to a protected page or set a session cookie
      window.location.href = '/protected';
    } else {
      // Authentication failed, display an error message
      alert('Invalid username or password');
    }
  })
  .catch((error) => console.error('Error:', error));
});

// Node.js example using Express.js
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = getUserFromDatabase(username); // Retrieve user data from database

  if (user && bcrypt.compareSync(password, user.password)) {
    // User is authenticated, set a session cookie or return a JSON response
    res.json({ authenticated: true });
  } else {
    res.json({ authenticated: false });
  }
});

function getUserFromDatabase(username) {
  // Retrieve user data from database using the provided username
  // Return the user data or null if not found
}