<!-- src/components/About.vue -->
<template>
  <div class="about-us-page">
    <h1>About Juny</h1>
    <p>Today, we're thrilled to take you through a journey that began with a simple yet powerful idea: the creation of Juny. Our platform is not just a bridge between academia and the professional world; it's a catalyst for the next generation of IT experts.</p>
    <div class="timeline">
      <div class="timeline-item left">
        <div class="timeline-icon">
          <i class="fas fa-lightbulb"></i>
        </div>
        <div class="timeline-content">
          <h3>2022</h3>
          <p>In 2022, we laid our foundation. It was the year we transformed our vision into reality by launching a platform dedicated to nurturing the future of tech. We understood that the transition from classroom to career needed a new pathway, and we were determined to pave it.</p>
        </div>
      </div>
      <div class="timeline-item right">
        <div class="timeline-icon">
          <i class="fas fa-users"></i>
        </div>
        <div class="timeline-content">
          <h3>2023</h3>
          <p>As 2023 unfolded, we celebrated our first milestone – user growth. We didn't just increase numbers; we built a community. A community of eager students and visionary employers. And with each new member, our mission gained strength.</p>
        </div>
      </div>
      <div class="timeline-item left">
        <div class="timeline-icon">
          <i class="fas fa-rocket"></i>
        </div>
        <div class="timeline-content">
          <h3>2024</h3>
          <p>Moving forward to 2024, our platform underwent a significant transformation. Advanced job matching algorithms were introduced, making the search for the perfect job or candidate not just efficient, but also intuitive.</p>
        </div>
      </div>
      <div class="timeline-item right">
        <div class="timeline-icon">
          <i class="fas fa-award"></i>
        </div>
        <div class="timeline-content">
          <h3>2025</h3>
          <p>And here we are in 2025, standing strong as an industry leader, not just participating in the tech world, but actively shaping it.</p>
        </div>
      </div>
    </div>
    <section class="forum-section">
      <h2>The Forum</h2>
      <p>Now, let's talk about the heart of our community – the Forum.</p>
      <p>Imagine a place where curiosity meets knowledge, where your questions ignite discussions that lead to real-world solutions. That's what our forum is all about. It's more than a place to chat; it's where connections are made, where mentorship flourishes, and where the seeds of innovation are sown.</p>
      <p>Every thread in the forum is a tapestry of perspectives, rich with the wisdom of experienced professionals and the fresh ideas of students. Here, you don't just post a message; you start a conversation that could very well be the beginning of your next big breakthrough.</p>
      <p>As we delve deeper into our discussion, I'd like to touch upon the advanced features that make our forum stand out. Our filtering system allows you to find discussions that resonate with your current learning path or professional challenges. Whether it's the latest AI trends or the ever-evolving landscape of cybersecurity, the knowledge you seek is at your fingertips.</p>
      <p>In closing, our forum is more than a feature. It’s a community builder, a learning accelerator, and a career launcher. At Juny, we're not just preparing you for the future – we're helping you shape it.</p>
    </section>
    <section class="contact-support">
      <h2>Contact Support</h2>
      <div class="contact-methods">
        <div class="contact-item">
          <i class="fas fa-envelope"></i>
          <p>Email us at <a href="mailto:support@juny.com">support@juny.com</a></p>
        </div>
        <div class="contact-item">
          <i class="fas fa-phone-alt"></i>
          <p>Call us at <a href="tel:+1234567890">+1234567890</a></p>
        </div>
        <div class="contact-item">
          <i class="fas fa-comments"></i>
          <p>Join our <router-link to="/forum">community forum</router-link></p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
};
</script>

<style scoped>
@import "../assets/css/styles.css";
</style>
