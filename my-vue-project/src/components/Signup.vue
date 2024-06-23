<template>
  <div>
    <main>
      <div class="signup-container">
        <div class="signup-content">
          <div class="signup-left">
            <h1>Welcome to Juni</h1>
            <p>Your gateway to finding the perfect internship.</p>
            <img src="@/assets/images/sign-up.jpg" alt="Signup Image">
          </div>
          <div class="signup-right">
            <h2>Sign Up</h2>
            <div id="signup-message" class="message"></div>
            <form @submit.prevent="register" class="signup-form">
              <label for="username">Name:</label>
              <input type="text" v-model="username" required>
              <label for="email">Email:</label>
              <input type="email" v-model="email" required>
              <label for="password">Password:</label>
              <div class="password-field">
                <input type="password" v-model="password" required>
                <span class="toggle-password" @click="togglePassword">Show</span>
              </div>
              <label for="country">Country:</label>
              <select v-model="country" required>
                <option value="">Select Country</option>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
                <option value="uk">United Kingdom</option>
              </select>
              <button type="submit">Sign Up</button>
            </form>
            <div class="alternative-signup">
              <p>Or sign up with:</p>
              <div class="social-buttons">
                <a href="#" class="facebook-btn">Facebook</a>
                <a href="#" class="google-btn">Google</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <p>&copy; 2024 Internship Finder. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'SignupPage',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      country: ''
    };
  },
  methods: {
    register() {
      const messageDiv = document.getElementById('signup-message');
      fetch('http://localhost:5001/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: this.username, email: this.email, password: this.password })
      })
        .then(response => response.json())
        .then(data => {
          if (data.message) {
            messageDiv.textContent = 'User registered successfully';
            messageDiv.style.color = 'green';
          } else {
            messageDiv.textContent = 'Registration failed';
            messageDiv.style.color = 'red';
          }
        })
        .catch(error => {
          console.error('Error:', error);
          messageDiv.textContent = 'Error: ' + error.message;
          messageDiv.style.color = 'red';
        });
    },
    togglePassword() {
      const passwordField = document.querySelector('.password-field input');
      const togglePassword = document.querySelector('.password-field .toggle-password');
      if (passwordField.type === 'password') {
        passwordField.type = 'text';
        togglePassword.textContent = 'Hide';
      } else {
        passwordField.type = 'password';
        togglePassword.textContent = 'Show';
      }
    }
  }
};
</script>

<style scoped>
@import "@/assets/css/styles.css";

.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background: url('@/assets/images/backgrounds.png') no-repeat center center fixed;
  background-size: cover;
}

.signup-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.signup-left {
  flex: 1;
  padding: 20px;
  text-align: center;
}

.signup-left h1 {
  font-size: 36px;
  margin-bottom: 10px;
}

.signup-left p {
  font-size: 18px;
  margin-bottom: 20px;
}

.signup-left img {
  max-width: 100%;
  border-radius: 8px;
}

.signup-right {
  flex: 1;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
}

.signup-right h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.signup-form label {
  display: block;
  margin-bottom: 8px;
  color: #333;
}

.signup-form input[type="text"],
.signup-form input[type="email"],
.signup-form input[type="password"],
.signup-form select {
  width: calc(100% - 22px);
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.signup-form button {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  background-color: #333;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
}

.signup-form button:hover {
  background-color: #555;
}

.password-field {
  position: relative;
}

.password-field .toggle-password {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  color: #777;
}

.alternative-signup {
  margin-top: 20px;
  text-align: center;
}

.alternative-signup p {
  font-size: 14px;
  margin-top: 10px;
}

.alternative-signup a {
  color: #ff9800;
  text-decoration: none;
}

.social-buttons {
  margin-top: 10px;
}

.social-buttons a {
  display: inline-block;
  text-decoration: none;
  color: #fff;
  background-color: #3b5998;
  padding: 10px 20px;
  border-radius: 4px;
  margin-right: 10px;
  transition: background-color 0.3s;
}

.social-buttons a.google-btn {
  background-color: #db4437;
}

.social-buttons a:hover {
  background-color: #4c68d7;
}

@media (max-width: 768px) {
  .signup-content {
    flex-direction: column;
    align-items: center;
  }

  .signup-right {
    margin-top: 20px;
  }
}
</style>
