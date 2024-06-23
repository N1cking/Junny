require('dotenv').config();
const mongoose = require('mongoose');
const Job = require('./models/Job');

const jobs = [
    { title: "Software Engineer", company: "Tech Corp", location: "New York", description: "Develop software", type: "Full-time", industry: "Technology" },
    { title: "Marketing Specialist", company: "Marketing Inc", location: "Los Angeles", description: "Market products", type: "Part-time", industry: "Marketing" },
    { title: "Graphic Designer", company: "Design Hub", location: "San Francisco", description: "Create designs", type: "Contract", industry: "Design" },
    { title: "Data Analyst", company: "Data Insights", location: "Chicago", description: "Analyze data", type: "Full-time", industry: "Technology" },
    { title: "Project Manager", company: "ManageIt", location: "Seattle", description: "Manage projects", type: "Full-time", industry: "Technology" },
    { title: "Sales Manager", company: "SalesPros", location: "Miami", description: "Manage sales", type: "Full-time", industry: "Marketing" },
    { title: "Content Writer", company: "WriteWell", location: "Austin", description: "Write content", type: "Part-time", industry: "Marketing" },
    { title: "UI/UX Designer", company: "DesignIt", location: "Boston", description: "Design interfaces", type: "Contract", industry: "Design" },
    { title: "DevOps Engineer", company: "DevOps Co", location: "Denver", description: "Implement DevOps practices", type: "Full-time", industry: "Technology" },
    { title: "HR Specialist", company: "HR Solutions", location: "Atlanta", description: "Manage HR tasks", type: "Full-time", industry: "Technology" },
    { title: "Customer Support", company: "SupportNow", location: "Houston", description: "Provide customer support", type: "Part-time", industry: "Marketing" },
    { title: "Product Manager", company: "Productive", location: "San Diego", description: "Manage products", type: "Full-time", industry: "Technology" },
    { title: "SEO Specialist", company: "SEOptimize", location: "Dallas", description: "Optimize SEO", type: "Contract", industry: "Marketing" },
    { title: "Network Engineer", company: "NetWorks", location: "Washington", description: "Manage networks", type: "Full-time", industry: "Technology" },
    { title: "Social Media Manager", company: "Socialize", location: "Philadelphia", description: "Manage social media", type: "Part-time", industry: "Marketing" },
    { title: "QA Engineer", company: "QualityFirst", location: "Phoenix", description: "Test software", type: "Full-time", industry: "Technology" },
    { title: "Financial Analyst", company: "Finance Pros", location: "San Jose", description: "Analyze finances", type: "Full-time", industry: "Technology" },
    { title: "Operations Manager", company: "OperateWell", location: "Jacksonville", description: "Manage operations", type: "Full-time", industry: "Technology" },
    { title: "Business Analyst", company: "AnalyzeThis", location: "San Antonio", description: "Analyze business", type: "Full-time", industry: "Technology" },
    { title: "Recruiter", company: "HireFast", location: "Columbus", description: "Recruit employees", type: "Full-time", industry: "Marketing" }
];

const databaseUrl = process.env.MONGO_URI;

if (!databaseUrl) {
    console.error('MONGO_URI is not defined');
    process.exit(1);
}

mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async () => {
    console.log("Connected to the database");

    try {
        await Job.insertMany(jobs);
        console.log("Jobs added successfully");
    } catch (error) {
        console.error("Error adding jobs:", error);
    } finally {
        mongoose.connection.close();
    }
});
