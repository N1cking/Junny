<template>
  <div>
    <main>
      <section class="forum-page">
        <h1>Forum</h1>
        <div class="tags-section">
          <h2>Tags</h2>
          <div class="tags">
            <a href="#">Programming</a>
            <a href="#">Front-end</a>
            <a href="#">C++</a>
            <a href="#">CSS</a>
            <a href="#">Python</a>
            <a href="#">Business Analytics</a>
            <a href="#">Data Analytics</a>
            <a href="#">More Tags...</a>
          </div>
          <div class="search-bar">
            <input type="text" placeholder="Search tags...">
          </div>
        </div>

        <div class="posts-section">
          <h2>Posts</h2>
          <div v-for="post in posts" :key="post._id" class="post">
            <div class="post-header">
              <img :src="post.authorAvatar" alt="Author Avatar" class="author-avatar">
              <div>
                <h3>{{ post.title }}</h3>
                <p class="author-name">Author: {{ post.author }}</p>
              </div>
            </div>
            <p>{{ post.content }}</p>
            <div class="comments-section">
              <h4>Comments</h4>
              <div v-for="comment in post.comments" :key="comment._id" class="comment">
                <p><strong>{{ comment.author }}:</strong> {{ comment.content }}</p>
              </div>
              <form @submit.prevent="addComment(post._id)">
                <input v-model="newComments[post._id]" placeholder="Add a comment" required>
                <button type="submit">Comment</button>
              </form>
            </div>
          </div>
        </div>

        <div class="create-post-section">
          <h2>Create a New Post</h2>
          <form @submit.prevent="createPost">
            <input v-model="newPost.title" placeholder="Title" required>
            <textarea v-model="newPost.content" placeholder="Content" required></textarea>
            <button type="submit">Create Post</button>
          </form>
        </div>
      </section>
    </main>
    <footer>
      <p>© 2024 Juny. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ForumPage',
  data() {
    return {
      posts: [],
      newPost: {
        title: '',
        content: ''
      },
      newComments: {} // Используем объект для хранения комментариев для каждого поста
    };
  },
  mounted() {
    this.fetchPosts();
  },
  methods: {
    fetchPosts() {
      axios.get('http://localhost:5001/api/posts')
        .then(response => {
          this.posts = response.data;
        })
        .catch(error => {
          console.error('Error fetching posts:', error);
        });
    },
    createPost() {
      const token = localStorage.getItem('token');
      const author = localStorage.getItem('username');
      axios.post('http://localhost:5001/api/posts', {
        ...this.newPost,
        author: author,
        authorAvatar: 'https://via.placeholder.com/50', // заменить на путь к аватарке автора
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => {
          this.posts.push(response.data);
          this.newPost.title = '';
          this.newPost.content = '';
        })
        .catch(error => {
          console.error('Error creating post:', error);
        });
    },
    addComment(postId) {
      const token = localStorage.getItem('token');
      const author = localStorage.getItem('username');
      const comment = {
        author: author,
        content: this.newComments[postId]
      };
      axios.post(`http://localhost:5001/api/posts/${postId}/comments`, comment, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => {
          const post = this.posts.find(p => p._id === postId);
          post.comments.push(response.data);
          this.$set(this.newComments, postId, ''); // Очистить поле ввода комментария
        })
        .catch(error => {
          console.error('Error adding comment:', error);
        });
    }
  }
};
</script>

<style scoped>
@import "../assets/css/styles.css";

.post {
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.post-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.author-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.author-name {
  margin: 0;
  font-size: 14px;
  color: #555;
}

.comments-section {
  margin-top: 20px;
}

.comment {
  margin-bottom: 10px;
}

.create-post-section,
.create-comment-section {
  border: 1px solid #ddd;
  padding: 20px;
  margin-top: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

input,
textarea {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  background-color: #ff9800;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #e68900;
}
</style>
