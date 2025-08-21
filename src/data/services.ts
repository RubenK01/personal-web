import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'cloud-architecture',
    title: 'Arquitectura Cloud',
    description: 'Diseños escalables y seguros, adaptados a tu negocio para crecer sin límites.',
    icon: 'Cloud',
    features: [
      'Arquitecturas serverless',
      'Microservicios escalables',
      'Auto-scaling inteligente',
      'Multi-región resiliente',
      'Disaster Recovery'
    ]
  },
  {
    id: 'migration',
    title: 'Migración Cloud',
    description: 'Migra a AWS de forma rápida y sin interrupciones, con la máxima seguridad y control.',
    icon: 'ArrowRight',
    features: [
      'Análisis previo detallado',
      'Estrategia sin downtime',
      'Testing exhaustivo',
      'Plan de rollback',
      'Optimización post-migración'
    ]
  },
  {
    id: 'cicd',
    title: 'CI/CD & DevOps',
    description: 'Automatiza despliegues y acelera la entrega de valor con pipelines optimizados.',
    icon: 'GitBranch',
    features: [
      'GitHub Actions / GitLab CI',
      'Docker & Kubernetes',
      'Infrastructure as Code',
      'Testing automatizado',
      'Blue-Green deployments'
    ]
  },
  {
    id: 'cost-optimization',
    title: 'Optimización de Costes',
    description: 'Ahorra hasta un 90% aplicando mejores prácticas de uso de instancias y recursos.',
    icon: 'TrendingDown',
    features: [
      'Análisis de uso detallado',
      'Reserved Instances',
      'Spot Instances',
      'Auto-scaling policies',
      'Alertas de costes'
    ]
  },
  {
    id: 'security',
    title: 'Seguridad Cloud',
    description: 'Refuerza la protección con modelos Zero Trust y cifrado avanzado.',
    icon: 'Shield',
    features: [
      'IAM & Access Control',
      'VPC & Network Security',
      'Cifrado extremo a extremo',
      'Monitoreo de seguridad',
      'Compliance (GDPR, SOC2)'
    ]
  },
  {
    id: 'monitoring',
    title: 'Monitoring & Observability',
    description: 'Detecta problemas antes de que impacten al negocio con observabilidad en tiempo real.',
    icon: 'Activity',
    features: [
      'CloudWatch & X-Ray',
      'Agregación de logs',
      'Alertas inteligentes',
      'Métricas de performance',
      'Distributed tracing'
    ]
  }
]; 