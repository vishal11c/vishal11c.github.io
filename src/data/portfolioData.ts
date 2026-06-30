export const profileData = {
  name: 'Vishal Indradev Chauhan',
  role: 'Associate Software Engineer @ NICE',
  summaryShort:
    'I design and build secure, scalable enterprise software with .NET, Angular, AWS, Docker, and Microservices — accelerated by GitHub Copilot, Claude AI, and custom MCP servers.',
  summary:
    'Associate Software Engineer with 2+ years of experience designing enterprise software using .NET, Angular, Java, TypeScript, AWS, CloudFormation, Docker, REST APIs, and Microservices. I actively integrate AI into my engineering workflow — using GitHub Copilot for daily coding, Claude AI for architecture and code review, building custom MCP servers for development automation, and consuming LLM APIs (Anthropic, OpenAI) directly in applications. Experienced in cloud-native systems, infrastructure modernization, secure backend services, and production engineering.',
  links: {
    github: 'https://github.com/vishal11c?tab=repositories',
    linkedin: 'https://www.linkedin.com/in/vishalcse/',
    email: 'vishal.in.chauhan@gmail.com',
    leetcode: 'https://leetcode.com/u/user3065vs/',
    gfg: 'https://www.geeksforgeeks.org/profile/visindra2000',
  },
  location: 'Mumbai, Maharashtra',
  phone: '+91-8104868335',
  highlights: ['.NET', 'Angular', 'AWS', 'Java', 'CloudFormation', 'Docker', 'Microservices', 'TypeScript', 'MCP Server', 'GitHub Copilot', 'Claude AI'],
  stats: [
    { label: 'Years Experience', value: 2, suffix: '+' },
    { label: 'Students Mentored', value: 100, suffix: '+' },
    { label: 'Product Quality Lift', value: 20, suffix: '%' },
    { label: 'Certifications', value: 1, suffix: '' },
  ],
  trustedTechnologies: [
    'AWS',
    'Angular',
    '.NET',
    'Java',
    'MCP Server',
    'GitHub Copilot',
    'Claude AI',
    'Docker',
    'React',
    'CloudFormation',
    'Prometheus',
    'Grafana',
    'MongoDB',
    'TypeScript',
    'Microservices',
  ],
  hobbies: [
    'I enjoy reading insightful books on technology, productivity, and personal growth.',
    'Cooking helps me stay creative and disciplined, much like building software systems.',
    'I regularly listen to engineering and leadership podcasts to keep learning every week.',
  ],
  experience: [
    {
      company: 'NICE',
      role: 'Software Engineer Intern → Associate Software Engineer',
      period: 'Jan 2024 - Present',
      location: 'Pune, Maharashtra',
      points: [
        'Built enterprise-scale applications using .NET, Angular, TypeScript, AWS, CloudFormation, REST APIs, Microservices, Docker, and SQL.',
        'Improved product quality from 65% to 85%+ by resolving production defects and refactoring legacy modules.',
        'Modernized AWS infrastructure by consolidating regional CloudFormation templates into reusable deployments.',
        'Implemented secure cloud practices using IAM, EC2 hardening, Secrets Manager, HTTPS/TLS, FIPS compliance, and CloudWatch logging.',
      ],
    },
    {
      company: 'Wiingy',
      role: 'Technical Mentor',
      period: 'Mar 2023 - Present',
      location: 'Remote',
      points: [
        'Mentored 100+ students and professionals in DSA, Java, React, SQL, DBMS, OS, and CN.',
        'Recognized as Best Tutor & Mentor for consistent high-impact technical mentorship.',
      ],
    },
    {
      company: 'Fresh Express',
      role: 'Software Development Intern',
      period: 'Jul 2022 - Dec 2022',
      location: 'Sangli, Maharashtra',
      points: [
        'Developed image-processing modules for automated fruit quality analysis with backend workflows and web visualization.',
      ],
    },
  ],
  aiTools: [
    {
      name: 'GitHub Copilot',
      category: 'AI Coding Assistant',
      tag: 'Daily Driver',
      color: 'blue' as const,
      uses: [
        'Inline code completion & multi-line generation',
        'Copilot Chat for debugging and code explanation',
        'Pull request review suggestions & summaries',
        'Unit test scaffolding and refactor guidance',
      ],
    },
    {
      name: 'Claude AI (Anthropic)',
      category: 'LLM / Reasoning Model',
      tag: 'Daily Driver',
      color: 'orange' as const,
      uses: [
        'System design reviews and architecture decisions',
        'Complex code refactoring and legacy analysis',
        'Documentation, spec writing, and ADRs',
        'API integration, prompt crafting, context strategies',
      ],
    },
    {
      name: 'MCP Servers',
      category: 'Model Context Protocol',
      tag: 'Building & Using',
      color: 'violet' as const,
      uses: [
        'Built custom MCP servers for dev workflow automation',
        'Filesystem MCP for AI-driven file read/write operations',
        'GitHub MCP for AI-assisted pull request workflows',
        'Composed multi-tool MCP pipelines for LLM agents',
      ],
    },
    {
      name: 'AI Model APIs',
      category: 'LLM API Engineering',
      tag: 'Integrating',
      color: 'cyan' as const,
      uses: [
        'Anthropic Claude API — streaming & batch completions',
        'OpenAI-compatible API consumption and abstraction',
        'Prompt engineering: few-shot, chain-of-thought patterns',
        'Context window management and retrieval strategies',
      ],
    },
  ],
  projects: [
    {
      title: 'Enterprise-style MERN Applications',
      category: 'Full Stack',
      description:
        'Built full-stack applications with secure JWT auth, role-based authorization, CRUD flows, advanced filtering/sorting, and scalable component-driven React architecture.',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs'],
      links: {
        code: 'https://github.com/vishal11c?tab=repositories',
        live: '',
      },
    },
    {
      title: 'Cloud Orchestration UI Modules',
      category: 'Cloud Platform',
      description:
        'Developed responsive Angular modules integrated with backend APIs for cloud orchestration and production workflows.',
      tech: ['Angular', 'TypeScript', 'REST APIs', 'AWS'],
      links: {
        code: 'https://github.com/vishal11c?tab=repositories',
        live: '',
      },
    },
  ],
  cloudExpertise: [
    {
      title: 'Infrastructure as Code',
      type: 'infrastructure',
      description:
        'Designed reusable AWS infrastructure templates and reduced deployment duplication using CloudFormation standardization.',
      services: ['CloudFormation', 'EC2', 'Auto Scaling', 'ELB', 'VPC', 'Route 53'],
      subCategories: [
        {
          name: 'Compute Services',
          items: ['EC2', 'Auto Scaling', 'Elastic Load Balancing', 'Lambda'],
        },
        {
          name: 'Networking',
          items: ['VPC', 'Route 53', 'CloudFront', 'Direct Connect'],
        },
      ],
    },
    {
      title: 'Cloud Security',
      type: 'security',
      description:
        'Implemented IAM hardening, secret management, HTTPS/TLS, FIPS compliance, and secure configuration practices.',
      services: ['IAM', 'AWS Secrets Manager', 'KMS', 'Security Groups', 'HTTPS/TLS'],
      subCategories: [
        {
          name: 'Identity & Access',
          items: ['IAM Policies', 'IAM Roles', 'Temporary Credentials', 'Multi-Factor Auth'],
        },
        {
          name: 'Secrets Management',
          items: ['AWS Secrets Manager', 'Parameter Store', 'KMS Encryption', 'Certificate Manager'],
        },
      ],
    },
    {
      title: 'Storage & Database',
      type: 'observability',
      description:
        'Architected scalable storage solutions and optimized database deployments for performance and cost efficiency.',
      services: ['S3', 'DynamoDB', 'RDS', 'Aurora', 'ElastiCache', 'EBS'],
      subCategories: [
        {
          name: 'Storage Services',
          items: ['Amazon S3', 'Elastic Block Store (EBS)', 'AWS Backup', 'AWS DataSync'],
        },
        {
          name: 'Database Services',
          items: ['RDS (MySQL/PostgreSQL)', 'Aurora', 'DynamoDB', 'ElastiCache', 'DocumentDB'],
        },
      ],
    },
    {
      title: 'AI & Analytics Services',
      type: 'operations',
      description:
        'Leveraging AWS AI/ML services for intelligent automation, insights, and advanced application features.',
      services: ['SageMaker', 'Bedrock', 'Rekognition', 'Textract', 'QuickSight'],
      subCategories: [
        {
          name: 'Machine Learning',
          items: ['Amazon SageMaker', 'Bedrock (Generative AI)', 'Forecast', 'Lookout'],
        },
        {
          name: 'AI Services',
          items: ['Rekognition', 'Textract', 'Translate', 'Comprehend'],
        },
        {
          name: 'Analytics',
          items: ['QuickSight', 'Athena', 'Redshift', 'EMR'],
        },
      ],
    },
    {
      title: 'Observability & Operations',
      type: 'operations',
      description:
        'Built production monitoring and diagnostics stacks for services and deployments with actionable visibility.',
      services: ['CloudWatch', 'X-Ray', 'Prometheus', 'Grafana', 'Alerting'],
      subCategories: [
        {
          name: 'Monitoring',
          items: ['CloudWatch Metrics', 'CloudWatch Logs', 'CloudWatch Alarms', 'AWS X-Ray'],
        },
        {
          name: 'Third-Party Integration',
          items: ['Prometheus', 'Grafana', 'Datadog', 'New Relic'],
        },
      ],
    },
  ],
  skills: [
    {
      category: 'Languages',
      level: 88,
      items: ['Java', 'C++', 'C#', 'SQL', 'JavaScript', 'TypeScript'],
    },
    {
      category: 'Frontend',
      level: 90,
      items: ['Angular', 'React', 'HTML5', 'CSS3', 'Bootstrap'],
    },
    {
      category: 'Backend',
      level: 87,
      items: ['.NET', 'Node.js', 'Express.js', 'Microservices', 'JWT Auth'],
    },
    {
      category: 'Cloud & DevOps',
      level: 89,
      items: ['AWS', 'CloudFormation', 'EC2', 'IAM', 'Secrets Manager', 'Docker', 'Prometheus', 'Grafana'],
    },
    {
      category: 'AI & Developer Tools',
      level: 87,
      items: ['GitHub Copilot', 'Claude AI', 'MCP Servers', 'Anthropic API', 'Prompt Engineering', 'LLM Integration', 'AI Workflows', 'VS Code'],
    },
  ],
  certifications: [
    {
      title: 'AWS Certified Cloud Practitioner (CLF-C02)',
      issuer: 'Amazon Web Services',
      year: '2025',
      featured: true,
      link: 'https://www.credly.com/badges/b9acfbfa-36e5-4bad-8215-5c2b1882f858',
    },
  ],
  achievements: [
    "Winner — Striver's SDE Sheet Challenge (Coding Ninjas Collaboration)",
    "Secured 7th Rank in COMPILE IT TECHUMEN'23 Coding Competition",
    'Recognized as Best Tutor & Mentor at Wiingy',
    'Designed, developed, and deployed a production-ready NGO website',
    'Built and shipped custom MCP servers integrated into AI-assisted dev workflows',
    'Adopted GitHub Copilot + Claude AI as core daily tools — measurably reducing review and delivery cycles',
  ],
  quickNav: ['About', 'Experience', 'Projects', 'Cloud', 'Skills', 'Contact'],
}
