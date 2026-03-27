import aptosCover from '../assets/images/aptos-sybil-detector/aptos.png'
import logisticsCover from '../assets/images/Vyn-logistics/vyn-log.png'

export const projects = [
  {
    id: 'aptos',
    slug: 'aptos-sybil-detector',
    path: '/projects/aptos-sybil-detector',
    title: 'Aptos Sybil Detector',
    year: '2025',
    category: 'BLOCKCHAIN AI / ML SYSTEM DEVELOPMENT',
    categoryVi: 'AI BLOCKCHAIN / PHÁT TRIỂN HỆ THỐNG ML',
    shortDescription:
      'A blockchain-focused AI/ML project designed to identify suspicious wallets through on-chain behavior analysis and machine learning classification.',
    shortDescriptionVi:
      'Một dự án AI/ML trong blockchain được xây dựng để phát hiện các ví đáng ngờ thông qua phân tích hành vi on-chain và mô hình phân loại machine learning.',
    tags: ['Python', 'NumPy', 'Pandas', 'Jupyter Notebook', 'Scikit-learn'],
    tagsVi: ['Python', 'NumPy', 'Pandas', 'Jupyter Notebook', 'Scikit-learn'],
    coverImage: aptosCover,
    coverAlt: 'Aptos Sybil Detector cover',
  },

  {
    id: 'logistics',
    slug: 'vyn-logistics',
    path: '/projects/vyn-logistics',
    title: 'VYN Logistics',
    year: '2026',
    category: 'LOGISTICS AI / ML SYSTEM DEVELOPMENT',
    categoryVi: 'AI LOGISTICS / PHÁT TRIỂN HỆ THỐNG ML',
    shortDescription:
      'A logistics-focused AI/ML project designed to detect operational bottlenecks through process analysis, anomaly detection, and structured risk outputs.',
    shortDescriptionVi:
      'Một dự án AI/ML trong logistics được xây dựng để phát hiện điểm nghẽn vận hành thông qua phân tích quy trình, phát hiện bất thường và các đầu ra rủi ro có cấu trúc.',
    tags: ['Python', 'Jupyter Notebook', 'Machine Learning', 'FastAPI'],
    tagsVi: ['Python', 'Jupyter Notebook', 'Machine Learning', 'FastAPI'],
    coverImage: logisticsCover,
    coverAlt: 'VYN Logistics cover',
  },
]

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug)
}