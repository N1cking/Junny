<template>
  <div>
    <h1 class="page-title">Jobs</h1>

    <div class="search-bar-container">
      <div class="search-bar">
        <input type="text" v-model="searchJob" placeholder="Search by job name">
        <input type="text" v-model="searchLocation" placeholder="Search by location">
        <select v-model="searchType">
          <option value="">Select Job Type</option>
          <option value="Internship">Internship</option>
          <option value="Entry Level">Entry Level</option>
          <option value="Part-time">Part-time</option>
          <option value="Full-time">Full-time</option>
        </select>
        <select v-model="searchIndustry">
          <option value="">Select Industry</option>
          <option value="Technology">Technology</option>
          <option value="Marketing">Marketing</option>
          <option value="Design">Design</option>
          <option value="Finance">Finance</option>
        </select>
        <button @click="searchJobs">Search</button>
      </div>
    </div>

    <div id="job-listings" class="job-listings">
      <div v-for="job in filteredJobs" :key="job.title" class="job-listing">
        <div class="job-details">
          <h2>{{ job.title }}</h2>
          <p><strong>Company:</strong> {{ job.company }}</p>
          <p><strong>Location:</strong> {{ job.location }}</p>
          <p><strong>Description:</strong> {{ job.description }}</p>
          <p><strong>Type:</strong> {{ job.type }}</p>
          <p><strong>Industry:</strong> {{ job.industry }}</p>
        </div>
      </div>
    </div>

    <div class="pagination" id="pagination">
      <button v-for="page in totalPages" :key="page" @click="displayListings(page)" :class="{ active: page === currentPage }">
        {{ page }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JobListings',
  data() {
    return {
      searchJob: '',
      searchLocation: '',
      searchType: '',
      searchIndustry: '',
      jobs: [
        { title: "Software Engineering Intern", company: "Tech Solutions", location: "San Francisco", description: "Work on innovative projects", type: "Internship", industry: "Technology" },
        { title: "Marketing Intern", company: "Creative Minds", location: "New York", description: "Assist in marketing campaigns", type: "Internship", industry: "Marketing" },
        { title: "Graphic Design Intern", company: "Design Hub", location: "Los Angeles", description: "Create stunning designs", type: "Internship", industry: "Design" },
        { title: "Junior Software Developer", company: "Tech Innovations", location: "Boston", description: "Develop new features", type: "Entry Level", industry: "Technology" },
        { title: "Junior Marketing Specialist", company: "Brand Boosters", location: "Chicago", description: "Boost brand awareness", type: "Entry Level", industry: "Marketing" },
        { title: "Junior Graphic Designer", company: "Creative Studio", location: "Austin", description: "Design visual content", type: "Entry Level", industry: "Design" },
        { title: "Financial Analyst", company: "Finance Group", location: "Seattle", description: "Analyze financial data", type: "Full-time", industry: "Finance" },
        { title: "Social Media Manager", company: "Socialize", location: "Philadelphia", description: "Manage social media", type: "Part-time", industry: "Marketing" },
        // Добавьте еще работы по аналогии
      ],
      currentPage: 1,
      listingsPerPage: 3
    };
  },
  computed: {
    filteredJobs() {
      let filtered = this.jobs;

      if (this.searchJob) {
        filtered = filtered.filter(job =>
          job.title.toLowerCase().includes(this.searchJob.toLowerCase())
        );
      }

      if (this.searchLocation) {
        filtered = filtered.filter(job =>
          job.location.toLowerCase().includes(this.searchLocation.toLowerCase())
        );
      }

      if (this.searchType) {
        filtered = filtered.filter(job => job.type === this.searchType);
      }

      if (this.searchIndustry) {
        filtered = filtered.filter(job => job.industry === this.searchIndustry);
      }

      const startIndex = (this.currentPage - 1) * this.listingsPerPage;
      return filtered.slice(startIndex, startIndex + this.listingsPerPage);
    },
    totalPages() {
      return Math.ceil(this.jobs.length / this.listingsPerPage);
    }
  },
  methods: {
    displayListings(page) {
      this.currentPage = page;
    },
    searchJobs() {
      this.currentPage = 1; // Reset to first page on search
    }
  }
};
</script>

<style scoped>
@import "../assets/css/styles.css";

.page-title {
  text-align: center;
  margin-bottom: 20px;
}

.search-bar-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.search-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 800px;
  width: 100%;
  gap: 10px;
}

.search-bar input,
.search-bar select {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 1;
}

.search-bar button {
  padding: 10px 20px;
  border: none;
  background-color: #ff9800;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

.search-bar button:hover {
  background-color: #e68900;
}

.job-listings {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.job-listing {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  width: 100%; /* Ensuring job listings take full width */
  max-width: 600px; /* Limiting maximum width for job listings */
}

.job-listing:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.job-details {
  flex: 1;
}

.job-details h2 {
  margin: 0 0 8px 0;
  color: #333;
}

.job-details p {
  margin: 4px 0;
  color: #666;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination button {
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  background-color: #fff;
  color: #333;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 5px;
}

.pagination button:hover {
  background-color: #eee;
}

.pagination button.active {
  background-color: #ff9800;
  color: white;
}
</style>
