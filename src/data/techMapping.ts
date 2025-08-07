export interface TechInfo {
  key: string;
  name: string;
  fullName: string;
  category: 'cloud' | 'devops' | 'monitoring' | 'security';
}

export const techMapping: Record<string, TechInfo> = {
  AWS: {
    key: 'AWS',
    name: 'AWS',
    fullName: 'Amazon Web Services',
    category: 'cloud'
  },
  K8s: {
    key: 'K8s',
    name: 'Kubernetes',
    fullName: 'Kubernetes Container Orchestration',
    category: 'devops'
  },
  TF: {
    key: 'TF',
    name: 'Terraform',
    fullName: 'Terraform Infrastructure as Code',
    category: 'devops'
  },
  GH: {
    key: 'GH',
    name: 'GitHub',
    fullName: 'GitHub Version Control & CI/CD',
    category: 'devops'
  },
  DC: {
    key: 'DC',
    name: 'Docker',
    fullName: 'Docker Containerization',
    category: 'devops'
  },
  JF: {
    key: 'JF',
    name: 'Jenkins',
    fullName: 'Jenkins CI/CD Pipeline',
    category: 'devops'
  },
  PM: {
    key: 'PM',
    name: 'Prometheus',
    fullName: 'Prometheus Monitoring',
    category: 'monitoring'
  },
  GF: {
    key: 'GF',
    name: 'Grafana',
    fullName: 'Grafana Dashboards & Visualization',
    category: 'monitoring'
  },
  DD: {
    key: 'DD',
    name: 'DataDog',
    fullName: 'DataDog Application Monitoring',
    category: 'monitoring'
  },
  NR: {
    key: 'NR',
    name: 'New Relic',
    fullName: 'New Relic Performance Monitoring',
    category: 'monitoring'
  },
  VT: {
    key: 'VT',
    name: 'Vault',
    fullName: 'HashiCorp Vault Secrets Management',
    category: 'security'
  },
  SQ: {
    key: 'SQ',
    name: 'SonarQube',
    fullName: 'SonarQube Code Quality & Security',
    category: 'security'
  },
  SK: {
    key: 'SK',
    name: 'Snyk',
    fullName: 'Snyk Security Vulnerability Scanner',
    category: 'security'
  },
  AZ: {
    key: 'AZ',
    name: 'Azure',
    fullName: 'Microsoft Azure Cloud Platform',
    category: 'cloud'
  },
  GC: {
    key: 'GC',
    name: 'Google Cloud',
    fullName: 'Google Cloud Platform',
    category: 'cloud'
  },
  DO: {
    key: 'DO',
    name: 'DigitalOcean',
    fullName: 'DigitalOcean Cloud Infrastructure',
    category: 'cloud'
  }
};

export const techKeys = Object.keys(techMapping) as Array<keyof typeof techMapping>; 