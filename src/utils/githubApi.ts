import { githubApi } from './githubConfig';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  topics: string[];
  language: string | null;
  created_at: string;
  updated_at: string;
  homepage: string | null;
}

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  category: string[];
  githubUrl: string;
  demoUrl?: string;
  detailsUrl?: string;
}

const GITHUB_USERNAME = 'Hardhiky';

// Map GitHub topics to project categories
const topicToCategory: { [key: string]: string[] } = {
  // Full Stack
  'fullstack': ['Full Stack'],
  'full-stack': ['Full Stack'],
  'mern': ['Full Stack'],
  'mean': ['Full Stack'],
  'web-app': ['Full Stack'],
  'backend': ['Full Stack'],
  'api': ['Full Stack'],
  
  // Web Development
  'web': ['Web Development'],
  'frontend': ['Web Development'],
  'react': ['Web Development'],
  'nextjs': ['Web Development'],
  'vue': ['Web Development'],
  'angular': ['Web Development'],
  'typescript': ['Web Development'],
  'javascript': ['Web Development'],
  
  // Machine Learning
  'machine-learning': ['Machine Learning'],
  'ml': ['Machine Learning'],
  'deep-learning': ['Machine Learning'],
  'data-science': ['Machine Learning'],
  'tensorflow': ['Machine Learning'],
  'pytorch': ['Machine Learning'],
  
  // DevOps
  'devops': ['DevOps'],
  'docker': ['DevOps'],
  'kubernetes': ['DevOps'],
  'ci-cd': ['DevOps'],
  'automation': ['DevOps'],
  'aws': ['DevOps'],
  'azure': ['DevOps'],
  'gcp': ['DevOps'],
  
  // AI
  'ai': ['AI'],
  'artificial-intelligence': ['AI'],
  'nlp': ['AI'],
  'computer-vision': ['AI'],
  'reinforcement-learning': ['AI']
};

// Map languages to tech stack
const languageToTech: { [key: string]: string } = {
  'Python': 'Python',
  'JavaScript': 'JavaScript',
  'TypeScript': 'TypeScript',
  'React': 'React',
  'Node.js': 'Node.js',
  'Rust': 'Rust',
  'C++': 'C++',
  'Java': 'Java',
  'Go': 'Go',
  'Dockerfile': 'Docker',
  'Shell': 'Shell Scripting',
  'HTML': 'HTML',
  'CSS': 'CSS',
};

// Array of available background images
const PROJECT_IMAGES = [
  '/images/medium-card.png',
  '/images/cryptid-card.png',
  '/images/trance-card.png',
  '/images/ankh-card.png',
  '/images/immolate-card.png',
  '/images/ectoplasm-card.png',
  '/images/ouija-card.png',
  '/images/sigil-card.png',
  '/images/wrath-card.png',
  '/images/aura-card.png',
  '/images/talisman-card.png',
  '/images/incantation-card.png',
  '/images/grim-card.png',
  '/images/familiar-card.png'
];

// Default image in case of any issues
const DEFAULT_IMAGE = '/images/medium-card.png';

export const fetchGitHubProjects = async (): Promise<Project[]> => {
  try {
    console.log('Fetching GitHub projects...');
    
    const response = await githubApi.get<GitHubRepo[]>(`/users/${GITHUB_USERNAME}/repos`);

    if (!response.data) {
      console.error('No data received from GitHub API');
      throw new Error('No data received from GitHub API');
    }

    console.log('Successfully fetched repositories:', response.data.length);

    return response.data.map((repo: GitHubRepo) => {
      // Get categories from topics
      const categories = new Set<string>();
      categories.add('All');
      
      console.log(`Processing repo: ${repo.name}`);
      console.log('Repo topics:', repo.topics);
      
      repo.topics.forEach((topic: string) => {
        const mappedCategories = topicToCategory[topic.toLowerCase()] || [];
        console.log(`Topic: ${topic}, Mapped categories:`, mappedCategories);
        mappedCategories.forEach(cat => categories.add(cat));
      });

      // Get tech stack from language and topics
      const techStack = new Set<string>();
      if (repo.language) {
        const tech = languageToTech[repo.language];
        if (tech) techStack.add(tech);
      }

      // Get a random image or use default if something goes wrong
      let imageUrl;
      try {
        console.log('Available images:', PROJECT_IMAGES.length);
        const randomIndex = Math.floor(Math.random() * PROJECT_IMAGES.length);
        console.log('Selected index:', randomIndex);
        imageUrl = PROJECT_IMAGES[randomIndex];
        if (!imageUrl) {
          console.warn(`No image at index ${randomIndex}, using default`);
          imageUrl = DEFAULT_IMAGE;
        }
      } catch (err) {
        console.warn(`Failed to get random image for ${repo.name}, using default:`, err);
        imageUrl = DEFAULT_IMAGE;
      }

      console.log(`Final image URL for ${repo.name}:`, imageUrl);

      const project = {
        id: repo.id,
        title: repo.name.split('-').map((word: string) => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' '),
        description: repo.description || 'No description available',
        imageUrl: imageUrl,
        techStack: Array.from(techStack),
        category: Array.from(categories),
        githubUrl: repo.html_url,
        demoUrl: repo.homepage || undefined,
        detailsUrl: `https://github.com/${GITHUB_USERNAME}/${repo.name}/wiki`,
      };

      console.log(`Project ${project.title} assigned image: ${imageUrl}`);
      return project;
    });
  } catch (error: any) {
    console.error('Detailed error information:', {
      message: error.message,
      status: error.response?.status,
      statusText: error.response?.statusText,
      headers: error.response?.headers,
      data: error.response?.data
    });

    if (error.response?.status === 401) {
      console.error('Authentication failed - Token might be invalid or expired');
    } else if (error.response?.status === 403) {
      console.error('Rate limit exceeded or insufficient permissions');
    }
    
    throw new Error(`GitHub API Error: ${error.message}`);
  }
};

// Function to update projects in localStorage
export const updateProjectsCache = async (): Promise<void> => {
  const projects = await fetchGitHubProjects();
  localStorage.setItem('githubProjects', JSON.stringify(projects));
  localStorage.setItem('lastUpdated', new Date().toISOString());
};

// Function to get cached projects
export const getCachedProjects = (): Project[] | null => {
  const cached = localStorage.getItem('githubProjects');
  const lastUpdated = localStorage.getItem('lastUpdated');
  
  if (!cached || !lastUpdated) return null;
  
  // Check if cache is older than 1 hour
  const lastUpdate = new Date(lastUpdated);
  const now = new Date();
  const hoursDiff = (now.getTime() - lastUpdate.getTime()) / (1000 * 60 * 60);
  
  if (hoursDiff > 1) {
    updateProjectsCache(); // Update in background
  }
  
  return JSON.parse(cached);
}; 