<template>
  <header>
    <nav>
      <ul id="navLinks">
        <li><router-link to="/" exact>Home</router-link></li>
        <li><router-link to="/jobs">Jobs</router-link></li>
        <li><router-link to="/about">About Us</router-link></li>
        <li><router-link to="/forum">Forum</router-link></li>
        <li id="loginLink"><router-link to="/login">Log In</router-link></li>
        <li id="signupLink"><router-link to="/signup">Sign Up</router-link></li>
        <li id="usernameLink" style="display: none;"><a href="#">Welcome, <span id="username"></span></a></li>
        <li id="logoutLink" style="display: none;"><a href="#" @click="logout">Log Out</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header-nav',
  mounted() {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');

    if (token && username) {
      document.getElementById('loginLink').style.display = 'none';
      document.getElementById('signupLink').style.display = 'none';
      document.getElementById('username').textContent = username;
      document.getElementById('usernameLink').style.display = 'block';
      document.getElementById('logoutLink').style.display = 'block';
    }

    // Highlight active link
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('#navLinks a');
    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
      }
    });
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      window.location.href = '/';
    }
  }
};
</script>

<style scoped>
/* Your header styles here */
</style>
