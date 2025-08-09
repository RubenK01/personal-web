'use client';

import React from 'react';

// Componentes SVG oficiales basados en los archivos de public/icons-pack

export const AWSLambdaIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full">
    <defs>
      <linearGradient id="lambda-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor:"#F58536"}} />
        <stop offset="100%" style={{stopColor:"#FF9900"}} />
      </linearGradient>
    </defs>
    <path fill="url(#lambda-grad)" d="M24 4L6 40h6l12-24 12 24h6L24 4z"/>
    <path fill="#232F3E" d="M18 32L12 44h24l-6-12H18z"/>
  </svg>
);

export const AWSEC2Icon = () => (
  <svg viewBox="0 0 48 48" className="w-full">
    <defs>
      <linearGradient id="ec2-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor:"#F58536"}} />
        <stop offset="100%" style={{stopColor:"#FF9900"}} />
      </linearGradient>
    </defs>
    <rect x="8" y="8" width="32" height="32" rx="4" fill="url(#ec2-grad)"/>
    <rect x="12" y="12" width="8" height="8" fill="#fff"/>
    <rect x="28" y="12" width="8" height="8" fill="#fff"/>
    <rect x="12" y="28" width="8" height="8" fill="#fff"/>
    <rect x="28" y="28" width="8" height="8" fill="#fff"/>
    <circle cx="24" cy="24" r="4" fill="#232F3E"/>
  </svg>
);

export const AWSS3Icon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full">
    <defs>
      <linearGradient id="s3-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor:"#3FA849"}} />
        <stop offset="100%" style={{stopColor:"#7DD83F"}} />
      </linearGradient>
    </defs>
    <path fill="url(#s3-grad)" d="M8 12L24 4L40 12v24L24 44L8 36V12z"/>
    <path fill="#232F3E" d="M16 20h16v8H16z"/>
    <circle cx="24" cy="24" r="2" fill="#fff"/>
  </svg>
);

export const DockerIcon = () => (
  <svg viewBox="0 0 756.26 596.9" className="w-full h-full">
    <path fill="#1d63ed" d="M743.96,245.25c-18.54-12.48-67.26-17.81-102.68-8.27-1.91-35.28-20.1-65.01-53.38-90.95l-12.32-8.27-8.21,12.4c-16.14,24.5-22.94,57.14-20.53,86.81,1.9,18.28,8.26,38.83,20.53,53.74-46.1,26.74-88.59,20.67-276.77,20.67H.06c-.85,42.49,5.98,124.23,57.96,190.77,5.74,7.35,12.04,14.46,18.87,21.31,42.26,42.32,106.11,73.35,201.59,73.44,145.66.13,270.46-78.6,346.37-268.97,24.98.41,90.92,4.48,123.19-57.88.79-1.05,8.21-16.54,8.21-16.54l-12.3-8.27ZM189.67,206.39h-81.7v81.7h81.7v-81.7ZM295.22,206.39h-81.7v81.7h81.7v-81.7ZM400.77,206.39h-81.7v81.7h81.7v-81.7ZM506.32,206.39h-81.7v81.7h81.7v-81.7ZM84.12,206.39H2.42v81.7h81.7v-81.7ZM189.67,103.2h-81.7v81.7h81.7v-81.7ZM295.22,103.2h-81.7v81.7h81.7v-81.7ZM400.77,103.2h-81.7v81.7h81.7v-81.7ZM400.77,0h-81.7v81.7h81.7V0Z"/>
  </svg>
);

export const KubernetesIcon = () => (
  <svg viewBox="-0.17 0.08 230.10 223.35" className="w-full h-full">
    <defs>
      <style>{`.cls-1{fill:#fff}.cls-2{fill:#326ce5}`}</style>
    </defs>
    <path d="M134.358 126.466a3.59 3.59 0 0 0-.855-.065 3.685 3.685 0 0 0-1.425.37 3.725 3.725 0 0 0-1.803 4.825l-.026.037 8.528 20.603a43.53 43.53 0 0 0 17.595-22.102l-21.976-3.714zm-34.194 2.92a3.72 3.72 0 0 0-3.568-2.894 3.656 3.656 0 0 0-.733.065l-.037-.045-21.785 3.698a43.695 43.695 0 0 0 17.54 21.946l8.442-20.4-.066-.08a3.683 3.683 0 0 0 .207-2.29zm18.245 8a3.718 3.718 0 0 0-6.557.008h-.018l-10.713 19.372a43.637 43.637 0 0 0 23.815 1.225q2.197-.5 4.292-1.2l-10.738-19.406zm33.914-45l-16.483 14.753.009.047a3.725 3.725 0 0 0 1.46 6.395l.02.089 21.35 6.15a44.278 44.278 0 0 0-6.356-27.432zM121.7 94.039a3.725 3.725 0 0 0 5.913 2.84l.065.027 18.036-12.788a43.85 43.85 0 0 0-25.287-12.19l1.253 22.105zm-19.1 2.921a3.72 3.72 0 0 0 5.904-2.85l.092-.043 1.253-22.14a44.682 44.682 0 0 0-4.501.776 43.467 43.467 0 0 0-20.937 11.409l18.154 12.869zm-9.678 16.729a3.72 3.72 0 0 0 1.462-6.396l.018-.088-16.574-14.824a43.454 43.454 0 0 0-6.168 27.51l21.245-6.13zm16.098 6.512l6.114 2.94 6.096-2.934 1.514-6.581-4.219-5.276h-6.79l-4.231 5.268z" className="cls-2"/>
    <path d="M216.208 133.167l-17.422-75.675a13.602 13.602 0 0 0-7.293-9.073l-70.521-33.67a13.589 13.589 0 0 0-11.705 0L38.76 48.437a13.598 13.598 0 0 0-7.295 9.072l-17.394 75.673a13.315 13.315 0 0 0-.004 5.81 13.506 13.506 0 0 0 .491 1.718 13.1 13.1 0 0 0 1.343 2.726c.239.365.491.72.765 1.064l48.804 60.678c.213.264.448.505.681.75a13.423 13.423 0 0 0 2.574 2.133 13.924 13.924 0 0 0 3.857 1.677 13.298 13.298 0 0 0 3.43.473h.759l77.504-.018a12.993 12.993 0 0 0 1.41-.083 13.47 13.47 0 0 0 1.989-.378 13.872 13.872 0 0 0 1.381-.442c.353-.135.705-.27 1.045-.433a13.941 13.941 0 0 0 1.479-.822 13.303 13.303 0 0 0 3.237-2.865l1.488-1.85 47.299-58.84a13.185 13.185 0 0 0 2.108-3.785 13.67 13.67 0 0 0 .5-1.724 13.282 13.282 0 0 0-.004-5.81z" className="cls-2"/>
    <path d="M225.407 135.107L206.4 52.547a14.838 14.838 0 0 0-7.958-9.9l-76.935-36.73a14.825 14.825 0 0 0-12.771 0L31.808 42.669a14.838 14.838 0 0 0-7.961 9.895L4.873 135.129a14.668 14.668 0 0 0 1.995 11.185c.261.4.538.788.838 1.162l53.246 66.205a14.98 14.98 0 0 0 11.499 5.487l85.387-.02a14.986 14.986 0 0 0 11.5-5.48l53.227-66.211a14.72 14.72 0 0 0 2.842-12.347z" className="cls-1"/>
  </svg>
);

export const GitHubIcon = () => (
  <svg viewBox="0 0 98 96" className="w-full h-full">
    <path fill="#fff" fillRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" clipRule="evenodd"/>
  </svg>
);

export const GitLabIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full">
    <path fill="#FC6D26" d="M12 21.42l3.684-11.333H8.316L12 21.42z"/>
    <path fill="#E24329" d="M12 21.42l-3.684-11.333H1.566L12 21.42z"/>
    <path fill="#FC6D26" d="M1.566 10.087H8.316l-2.105-6.478c-.21-.648-1.116-.648-1.326 0l-3.319 6.478z"/>
    <path fill="#E24329" d="M12 21.42l3.684-11.333h6.75L12 21.42z"/>
    <path fill="#FC6D26" d="M22.434 10.087h-6.75l2.105-6.478c.21-.648 1.116-.648 1.326 0l3.319 6.478z"/>
  </svg>
);

export const JenkinsIcon = () => (
  <svg viewBox="0 0 256 256" className="w-full h-full">
    <path fill="#D33833" d="M128 256C57.421 256 0 198.579 0 128S57.421 0 128 0s128 57.421 128 128-57.421 128-128 128z"/>
    <path fill="#FFF" d="M128 32c-53.019 0-96 42.981-96 96s42.981 96 96 96 96-42.981 96-96-42.981-96-96-96z"/>
    <circle cx="104" cy="96" r="8" fill="#D33833"/>
    <circle cx="152" cy="96" r="8" fill="#D33833"/>
    <path fill="#D33833" d="M96 144c0-17.673 14.327-32 32-32s32 14.327 32 32v16H96v-16z"/>
    <path fill="#F4C430" d="M116 80h24v8h-24z"/>
  </svg>
);

export const TerraformIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full">
    <path fill="#7B42BC" d="M14.168 0v7.764l6.732 3.888v-7.764L14.168 0zM7.436 4.236v15.528L14.168 24V8.472l-6.732-4.236zM0 7.764v7.764l6.732 3.888v-7.764L0 7.764z"/>
  </svg>
);

export const PrometheusIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full">
    <path fill="#E6522C" d="M12 0L6 6v12l6 6 6-6V6l-6-6z"/>
    <circle cx="12" cy="8" r="2" fill="#fff"/>
    <path fill="#fff" d="M8 16h8v2H8z"/>
    <circle cx="10" cy="12" r="1" fill="#fff"/>
    <circle cx="14" cy="12" r="1" fill="#fff"/>
  </svg>
);

export const AnsibleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full">
    <circle cx="12" cy="12" r="10" fill="#EE0000"/>
    <path fill="#fff" d="M7 7h10l-5 10z"/>
    <circle cx="12" cy="12" r="2" fill="#EE0000"/>
  </svg>
);

export const AirflowIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full">
    <circle cx="12" cy="12" r="10" fill="#017CEE"/>
    <path fill="#fff" d="M8 8h8v2H8zm0 4h8v2H8zm0 4h6v2H8z"/>
    <circle cx="18" cy="10" r="2" fill="#fff"/>
  </svg>
);

export const AzureDevOpsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full">
    <path fill="#0078D4" d="M0 8v8l6-2V6l12-2L6 0v6L0 8z"/>
    <path fill="#00BCF2" d="M6 14v6l12 4-6-4V8l-6 6z"/>
  </svg>
);

// Mapeo de tecnologías disponibles
export const technologyIcons = {
  'AWS Lambda': AWSLambdaIcon,
  'AWS EC2': AWSEC2Icon,
  'AWS S3': AWSS3Icon,
  'Docker': DockerIcon,
  'Kubernetes': KubernetesIcon,
  'GitHub': GitHubIcon,
  'GitLab': GitLabIcon,
  'Jenkins': JenkinsIcon,
  'Terraform': TerraformIcon,
  'Prometheus': PrometheusIcon,
  'Ansible': AnsibleIcon,
  'Apache Airflow': AirflowIcon,
  'Azure DevOps': AzureDevOpsIcon,
} as const;

export type TechnologyName = keyof typeof technologyIcons; 