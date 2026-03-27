import aptosCover from '../../../personal-portfolio/src/assets/images/aptos-sybil-detector/aptos.png'
import logisticsCover from '../../../personal-portfolio/src/assets/images/Vyn-logistics/vyn-log.png'

export const projects = [
  {
    id: 'aptos',
    slug: 'aptos-sybil-detector',
    path: '/projects/aptos-sybil-detector',
    title: 'Aptos Sybil Detector',
    year: '2025',
    category: 'Blockchain AI / Wallet Classification',
    shortDescription:
      'A machine learning wallet classification project for identifying legitimate and suspicious wallets based on wallet history data.',
    heroDescription:
      'This project focuses on applying machine learning to analyze wallet behavior and classify wallets as legitimate or suspicious using historical wallet data.',
    tags: ['Python', 'NumPy', 'Pandas', 'Jupyter Notebook', 'Scikit-learn'],
    coverImage: aptosCover,
    coverAlt: 'Aptos Sybil Detector cover',
    overview:
      'Write your project overview here. Introduce the context, the objective of the project, and why this problem matters.',
    problem: [
      'Explain the background problem here.',
      'Describe why wallet classification is important.',
      'Mention the challenge of distinguishing legitimate and suspicious behavior.',
    ],
    approach: [
      'Describe how you collected or prepared the data.',
      'Explain your feature engineering process.',
      'Write how you trained and evaluated the machine learning model.',
    ],
    techStack: ['Python', 'NumPy', 'Pandas', 'Jupyter Notebook', 'Scikit-learn'],
    results: [
      'Built a machine learning-based classification workflow.',
      'Improved understanding of real-world blockchain-related AI use cases.',
      'Strengthened hands-on experience in practical ML development.',
    ],
    learnings: [
      'Learned how to turn behavioral data into meaningful ML features.',
      'Improved practical model-building and experimentation skills.',
      'Gained experience connecting AI with a real-world use case.',
    ],
  },
  {
    id: 'logistics',
    slug: 'vyn-logistics',
    path: '/projects/vyn-logistics',
    title: 'VYN Logistics',
    year: '2026',
    category: 'Logistics AI / ML System Development',
    shortDescription:
      'A logistics-focused AI/ML project designed to address practical operational problems with model development and deployment support.',
    heroDescription:
      'This project focuses on applying AI and machine learning in logistics to solve operational problems through model development, experimentation, and deployment-oriented implementation.',
    tags: ['Python', 'Jupyter Notebook', 'Machine Learning', 'FastAPI'],
    coverImage: logisticsCover,
    coverAlt: 'VYN Logistics cover',
    overview:
      'Write your project overview here. Explain what business or operational problem the project was trying to solve and why it was meaningful.',
    problem: [
      'Describe the logistics problem here.',
      'Explain the operational difficulty or inefficiency you wanted to address.',
      'Mention why AI/ML was chosen for this scenario.',
    ],
    approach: [
      'Describe your data preparation and analysis process.',
      'Explain how the models were built and compared.',
      'Write how deployment support or FastAPI integration was handled.',
    ],
    techStack: ['Python', 'Jupyter Notebook', 'Scikit-learn', 'FastAPI'],
    results: [
      'Developed a practical AI/ML workflow for logistics-related problems.',
      'Trained multiple machine learning models in parallel.',
      'Improved understanding of deployment-oriented AI system development.',
    ],
    learnings: [
      'Learned more about building AI systems for practical business problems.',
      'Improved understanding of the full workflow from experimentation to deployment.',
      'Strengthened problem-solving skills in an operational AI context.',
    ],
  },
]

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug)
}