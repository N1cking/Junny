<template>
  <div>
    <main>
      <div id="login-message" class="message"></div>
      <form @submit.prevent="login">
        <h1>Log In</h1>
        <label for="email">Email:</label>
        <input type="email" v-model="email" required>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required>
        <button type="submit">Log In</button>
        <div class="social-login">
          <button class="google"><img src="@/assets/images/google-icon.png" alt="Google" width="20"> Sign in with Google</button>
          <button class="facebook"><img src="@/assets/images/facebook-icon.png" alt="Facebook" width="20"> Sign in with Facebook</button>
        </div>
        <div class="form-links">
          <router-link to="/signup">I don't have an account</router-link>
          <router-link to="/forgot-password">Forgot Password?</router-link>
        </div>
      </form>
    </main>
    <footer class="footer">
      <p>&copy; 2024 Internship Finder. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      const messageDiv = document.getElementById('login-message');
      fetch('http://localhost:5001/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: this.email, password: this.password })
      })
        .then(response => response.json())
        .then(data => {
          if (data.token) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('username', data.username);
            messageDiv.textContent = 'User logged in successfully';
            messageDiv.style.color = 'green';
            this.$router.push('/');
          } else {
            messageDiv.textContent = 'Login failed';
            messageDiv.style.color = 'red';
          }
        })
        .catch(error => {
          console.error('Error:', error);
          messageDiv.textContent = 'Error: ' + error.message;
          messageDiv.style.color = 'red';
        });
    }
  }
};
</script>

<style scoped>
@import "@/assets/css/styles.css";

main {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: url('@/assets/images/backgrounds.png') no-repeat center center fixed;
  background-size: cover;
  min-height: 80vh;
}

form {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
}

form label {
  display: block;
  margin-bottom: 8px;
  color: #333;
}

form input[type="email"],
form input[type="password"] {
  width: calc(100% - 22px);
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

form button {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  background-color: #333;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
}

form button:hover {
  background-color: #555;
}

.form-links {
  text-align: center;
  margin-top: 15px;
}

.form-links a {
  color: #333;
  text-decoration: none;
  font-size: 14px;
  margin: 0 10px;
}

.form-links a:hover {
  text-decoration: underline;
}

.social-login {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 15px 0;
}

.social-login button {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.social-login .google {
  background-color: #db4437;
  color: #fff;
}

.social-login .google:hover {
  background-color: #c33d2f;
}

.social-login .facebook {
  background-color: #3b5998;
  color: #fff;
}

.social-login .facebook:hover {
  background-color: #334d84;
}

.footer {
  background-color: rgba(51, 51, 51, 0.8);
  color: #fff;
  text-align: center;
  padding: 10px 0;
  margin-top: auto;
}
</style>
