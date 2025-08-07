import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'cloud-architecture',
    title: 'Arquitectura Cloud',
    description: 'Diseño de infraestructuras escalables y resilientes en AWS siguiendo las mejores prácticas de la nube.',
    icon: 'Cloud',
    features: [
      'Arquitecturas serverless',
      'Microservicios',
      'Auto-scaling',
      'Multi-región',
      'Disaster Recovery'
    ]
  },
  {
    id: 'migration',
    title: 'Migración Cloud',
    description: 'Migración completa de aplicaciones on-premise a AWS con mínima interrupción del servicio.',
    icon: 'ArrowRight',
    features: [
      'Análisis de dependencias',
      'Estrategia de migración',
      'Testing exhaustivo',
      'Rollback plan',
      'Optimización post-migración'
    ]
  },
  {
    id: 'cicd',
    title: 'CI/CD & DevOps',
    description: 'Implementación de pipelines de integración y despliegue continuo para desarrollo ágil.',
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
    description: 'Reducción significativa de costes AWS mediante análisis y optimización de recursos.',
    icon: 'TrendingDown',
    features: [
      'Análisis de uso',
      'Reserved Instances',
      'Spot Instances',
      'Auto-scaling policies',
      'Cost alerts'
    ]
  },
  {
    id: 'security',
    title: 'Seguridad Cloud',
    description: 'Implementación de medidas de seguridad robustas siguiendo el modelo de responsabilidad compartida.',
    icon: 'Shield',
    features: [
      'IAM & Access Control',
      'VPC & Network Security',
      'Encryption at rest/transit',
      'Security monitoring',
      'Compliance (GDPR, SOC2)'
    ]
  },
  {
    id: 'monitoring',
    title: 'Monitoring & Observability',
    description: 'Sistemas de monitoreo y observabilidad para detectar y resolver problemas proactivamente.',
    icon: 'Activity',
    features: [
      'CloudWatch & X-Ray',
      'Log aggregation',
      'Alerting systems',
      'Performance metrics',
      'Distributed tracing'
    ]
  }
]; 