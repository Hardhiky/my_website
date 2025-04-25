import axios from 'axios';

const token = import.meta.env.VITE_GITHUB_TOKEN;

if (!token) {
  console.error('GitHub token is not configured in .env file');
}

export const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Accept': 'application/vnd.github.v3+json',
    'Authorization': `token ${token}`,
    'User-Agent': 'Portfolio-App'
  }
}); 