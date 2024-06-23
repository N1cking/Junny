<template>
    <div>
      <Header-nav />
      <main>
        <h1>Posts</h1>
        <div v-for="post in posts" :key="post._id" class="post">
          <h2>{{ post.title }}</h2>
          <p>{{ post.content }}</p>
          <p><strong>Author:</strong> {{ post.author }}</p>
          <div v-if="post.comments && post.comments.length">
            <h3>Comments:</h3>
            <div v-for="comment in post.comments" :key="comment._id" class="comment">
              <p>{{ comment.comment }}</p>
              <p><strong>Author:</strong> {{ comment.author }}</p>
            </div>
          </div>
          <div>
            <input type="text" v-model="newComment" placeholder="Add a comment" />
            <button @click="addComment(post._id)">Add Comment</button>
          </div>
        </div>
      </main>
      <footer class="footer">
        <p>&copy; 2024 Internship Finder. All rights reserved.</p>
      </footer>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import HeaderNav from './Header.vue';
  
  export default {
    name: 'PostsPage',
    components: {
      HeaderNav
    },
    data() {
      return {
        posts: [],
        newComment: ''
      };
    },
    created() {
      this.fetchPosts();
    },
    methods: {
      async fetchPosts() {
        try {
          const response = await axios.get('http://localhost:5001/api/posts');
          this.posts = response.data;
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      },
      async addComment(postId) {
        try {
          const token = localStorage.getItem('token');
          const response = await axios.post(
            'http://localhost:5001/api/posts/comment',
            { postId, comment: this.newComment },
            { headers: { Authorization: `Bearer ${token}` } }
          );
          this.newComment = '';
          this.fetchPosts();
        } catch (error) {
          console.error('Error adding comment:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  @import "../assets/css/styles.css";
  
  .post {
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  .comment {
    margin-top: 10px;
    padding: 5px;
    border-top: 1px solid #ddd;
  }
  </style>
  