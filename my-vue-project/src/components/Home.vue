<template>
  <div>
    <main>
      <section class="hero">
        <div class="hero-content">
          <h1>Skill-Building Platform for Future Tech Leaders</h1>
          <p>Juni connects students with IT careers, offering practical experience, job matching, and skill-building tools, with a focus on continuous adaptation to the tech industry's evolving needs.</p>
          <div class="hero-buttons">
            <a href="start.html" class="btn btn-primary">Start now</a>
            <a href="contact.html" class="btn btn-secondary">Contact sales</a>
          </div>
        </div>
        <div class="hero-image">
          <div class="glass-effect">
            <h3>Latest Updates</h3>
            <ul>
              <li>New internships available</li>
              <li>Upcoming webinars</li>
              <li>2024 tech trends</li>
              <li>Networking tips</li>
            </ul>
          </div>
        </div>
      </section>
      <section class="search-jobs">
        <h2>Find Your Job</h2>
        <form action="search_results.html" method="GET">
          <input type="text" name="query" placeholder="Search for jobs..." class="form-control">
          <select name="location" class="form-control">
            <option value="">All Locations</option>
            <option value="remote">Remote</option>
            <option value="new-york">New York</option>
            <option value="san-francisco">San Francisco</option>
          </select>
          <select name="category" class="form-control">
            <option value="">All Categories</option>
            <option value="software-development">Software Development</option>
            <option value="data-science">Data Science</option>
            <option value="design">Design</option>
          </select>
          <button type="submit" class="btn"><i class="fa fa-search"></i> Search</button>
        </form>
      </section>
      <section class="news-feed">
        <h2>News Feed</h2>
        <div class="news-grid">
          <div class="news-item" v-for="(news, index) in newsItems" :key="index">
            <img :src="news.image" :alt="news.title">
            <h3>{{ news.title }}</h3>
            <p>{{ news.description }}</p>
          </div>
        </div>
      </section>
      <section class="about-us">
        <h2>About Juni</h2>
        <div class="about-content">
          <div class="icon">
            <i class="fas fa-graduation-cap"></i>
          </div>
          <p>Juni is a platform dedicated to helping students and recent graduates find internships and entry-level jobs that match their skills and interests. 
            <router-link to="/about" style="color: red;">Read more</router-link>
          </p>
        </div>
      </section>
      <section class="about-forum">
        <h2>Join Our Forum</h2>
        <p>Connect with other professionals, ask questions, and share your experiences in our community forum.</p>
        <a href="forum.html" class="btn"><i class="fa fa-comments"></i> Go to Forum</a>
      </section>
    </main>
    <footer>
      <p>&copy; 2024 Juni. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      isLoggedIn: false,
      username: '',
      newsItems: [
        { image: require('@/assets/images/news1.jpeg'), title: 'Latest Internship Opportunities', description: 'Check out the latest internships available in top companies.' },
        { image: require('@/assets/images/news2.jpeg'), title: 'Webinar on Career Development', description: 'Join our upcoming webinar on how to boost your career prospects.' },
        { image: require('@/assets/images/news3.jpeg'), title: 'New Tech Trends in 2024', description: 'Stay updated with the latest trends in the tech industry.' },
        { image: require('@/assets/images/news4.jpeg'), title: 'Interview Tips from Experts', description: 'Learn how to ace your next interview with these tips.' },
        { image: require('@/assets/images/news5.jpeg'), title: 'Upcoming Career Fairs', description: 'Don\'t miss out on upcoming career fairs in your area.' },
        { image: require('@/assets/images/news6.jpeg'), title: 'How to Build a Strong Resume', description: 'Discover the best tips and tricks for creating a resume that stands out.' },
        { image: require('@/assets/images/news7.jpeg'), title: 'Networking for Success', description: 'Learn how to effectively network and build professional relationships.' },
        { image: require('@/assets/images/news8.jpeg'), title: 'Job Search Strategies', description: 'Find out the most effective strategies for searching and applying for jobs.' },
      ]
    };
  },
  mounted() {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    if (token && username) {
      this.isLoggedIn = true;
      this.username = username;
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      this.isLoggedIn = false;
      this.username = '';
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
@import "../assets/css/styles.css";
</style>
