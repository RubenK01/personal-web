import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

// AWS Logo
export const AWSIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 256 153" className={className}>
    <path fill="#F90" d="M72.392 39.996c0 3.346-1.096 6.063-3.288 8.151-2.192 2.088-5.125 3.132-8.8 3.132-3.674 0-6.608-1.044-8.8-3.132-2.192-2.088-3.288-4.805-3.288-8.151 0-3.347 1.096-6.064 3.288-8.152 2.192-2.088 5.126-3.132 8.8-3.132 3.675 0 6.608 1.044 8.8 3.132 2.192 2.088 3.288 4.805 3.288 8.152"/>
    <path fill="#F90" d="M187.595 79.888c-13.742 10.148-33.694 15.43-50.889 15.43-24.066 0-45.747-8.9-62.144-23.703-.644-.583-.07-1.378.707-.925 17.765 10.343 39.742 16.582 62.459 16.582 15.314 0 32.135-3.178 47.604-9.748 2.33-1.003 4.281 1.528 2.263 2.364"/>
    <path fill="#F90" d="M193.401 73.425c-1.756-2.251-11.641-1.065-16.087-.536-.536.07-.619-.402-.134-.742 7.877-5.543 20.802-3.947 22.299-2.088 1.497 1.859-.402 14.784-7.743 20.936-.446.402-.871.188-.67-.335 1.66-4.151 5.378-13.438 3.622-15.69l.981-1.545z"/>
  </svg>
);

// Kubernetes Logo
export const KubernetesIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 256 249" className={className}>
    <path fill="#326CE5" d="M128.533 8.606c-1.596 0-3.042.468-4.303 1.338l-107.95 74.671c-2.522 1.74-4.05 4.652-4.05 7.77v95.18c0 3.118 1.528 5.868 4.05 7.608l107.95 74.671c2.522 1.74 5.746 1.74 8.268 0l107.95-74.671c2.522-1.74 4.05-4.49 4.05-7.608V92.385c0-3.118-1.528-5.868-4.05-7.608L132.498 9.944c-1.261-.87-2.707-1.338-4.303-1.338z"/>
    <path fill="#FFF" d="m128.533 23.424-99.37 68.686v82.286l99.37 68.686 99.37-68.686V92.11l-99.37-68.686z"/>
    <path fill="#326CE5" d="M128.533 35.576c50.873 0 92.124 41.251 92.124 92.124s-41.251 92.124-92.124 92.124-92.124-41.251-92.124-92.124 41.251-92.124 92.124-92.124z"/>
  </svg>
);

// Terraform Logo
export const TerraformIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 256 256" className={className}>
    <path fill="#623CE4" d="M85.042 127.996V256L0 210.667V82.671l85.042 45.325z"/>
    <path fill="#5C4EE5" d="M170.084 127.996V256L85.042 210.667V82.671l85.042 45.325z"/>
    <path fill="#4040B2" d="M170.084 0v128.004L85.042 82.679V0l85.042 82.671z"/>
    <path fill="#5C4EE5" d="M256 45.325v128.004l-85.916-45.325V0L256 45.325z"/>
  </svg>
);

// GitHub Logo
export const GitHubIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 256 250" className={className}>
    <path fill="#161614" d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.18-23.837-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 4.993-25.319 13.188-34.259-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.94 13.179 20.284 13.179 34.259 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691.001 128.001.001Z"/>
  </svg>
);

// Docker Logo
export const DockerIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 256 185" className={className}>
    <path fill="#2496ED" d="M250.716 75.877c-5.89-4.016-19.408-5.516-29.788-3.756-1.274-9.523-6.754-17.907-16.688-25.266l-5.662-4.202-3.756 5.849c-7.359 11.547-9.336 30.205-1.037 42.687-3.008 1.65-8.863 3.756-16.688 3.756H1.037c-.45 14.773 1.65 29.171 6.567 42.125 7.734 20.258 19.594 30.205 39.288 30.205 37.451 0 65.202-17.344 76.124-55.357 11.735.188 23.095-2.633 31.43-12.02 5.849-6.567 9.336-14.96 10.798-24.142l1.088-5.1-4.952-3.194c-7.922-5.1-18.844-5.849-27.742-2.087l1.275-1.275zm-118.25-57.069h23.47v21.894h-23.47V18.808zm0 24.329h23.47v21.894h-23.47V43.137zm-26.29 0h23.47v21.894h-23.47V43.137zm-26.29 0h23.47v21.894H79.886V43.137zm-26.29 0h23.47v21.894H53.596V43.137zm26.29 24.328h23.47v21.895H79.886V67.465zm26.29 0h23.47v21.895h-23.47V67.465zm26.29 0h23.47v21.895h-23.47V67.465zm26.478 0H182.914v21.895h-23.47V67.465z"/>
  </svg>
);

// Jenkins Logo
export const JenkinsIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 256 256" className={className}>
    <path fill="#D33833" d="M128 0C57.308 0 0 57.308 0 128s57.308 128 128 128 128-57.308 128-128S198.692 0 128 0z"/>
    <path fill="#FFF" d="M128 20c59.647 0 108 48.353 108 108s-48.353 108-108 108S20 187.647 20 128 68.353 20 128 20z"/>
    <path fill="#335061" d="M128 36c-50.811 0-92 41.189-92 92s41.189 92 92 92 92-41.189 92-92-41.189-92-92-92z"/>
  </svg>
);

// Prometheus Logo
export const PrometheusIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 256 256" className={className}>
    <path fill="#E6522C" d="M128 0L95.936 42.667h64.128L128 0zm0 256l32.064-42.667H95.936L128 256zM42.667 95.936L0 128l42.667 32.064V95.936zm170.666 0v64.128L256 128l-42.667-32.064z"/>
    <circle fill="#E6522C" cx="128" cy="128" r="42.667"/>
  </svg>
);

// Grafana Logo
export const GrafanaIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 256 256" className={className}>
    <path fill="#F46800" d="M128 0C57.308 0 0 57.308 0 128s57.308 128 128 128 128-57.308 128-128S198.692 0 128 0z"/>
    <path fill="#FFF" d="M128 32c53.02 0 96 42.98 96 96s-42.98 96-96 96-96-42.98-96-96 42.98-96 96-96z"/>
  </svg>
);

// DataDog Logo
export const DataDogIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 256 256" className={className}>
    <path fill="#632CA6" d="M128 0C57.308 0 0 57.308 0 128s57.308 128 128 128 128-57.308 128-128S198.692 0 128 0z"/>
    <path fill="#FFF" d="M128 32c53.02 0 96 42.98 96 96s-42.98 96-96 96-96-42.98-96-96 42.98-96 96-96z"/>
  </svg>
);

// New Relic Logo
export const NewRelicIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 256 256" className={className}>
    <path fill="#008C99" d="M128 0C57.308 0 0 57.308 0 128s57.308 128 128 128 128-57.308 128-128S198.692 0 128 0z"/>
    <path fill="#FFF" d="M128 32c53.02 0 96 42.98 96 96s-42.98 96-96 96-96-42.98-96-96 42.98-96 96-96z"/>
  </svg>
);

// Vault Logo
export const VaultIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 256 256" className={className}>
    <path fill="#000" d="M128 0L43.692 42.667v170.666L128 256l84.308-42.667V42.667L128 0z"/>
    <path fill="#FFD814" d="M128 21.333l74.667 37.334v138.666L128 234.667l-74.667-37.334V58.667L128 21.333z"/>
  </svg>
);

// SonarQube Logo
export const SonarQubeIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 256 256" className={className}>
    <path fill="#4E9BCD" d="M128 0C57.308 0 0 57.308 0 128s57.308 128 128 128 128-57.308 128-128S198.692 0 128 0z"/>
    <path fill="#FFF" d="M128 32c53.02 0 96 42.98 96 96s-42.98 96-96 96-96-42.98-96-96 42.98-96 96-96z"/>
  </svg>
);

// Azure Logo
export const AzureIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 256 193" className={className}>
    <path fill="#0078D4" d="M85.343 0L0 153.333h42.667L128 38.667 85.343 0zm85.324 0L128 96l42.667 96h85.333L170.667 0z"/>
  </svg>
);

// Google Cloud Logo
export const GoogleCloudIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 256 256" className={className}>
    <path fill="#4285F4" d="M128 0L64 64v128l64 64 64-64V64L128 0z"/>
    <path fill="#34A853" d="M192 64l-64 64-64-64L128 0l64 64z"/>
    <path fill="#FBBC04" d="M192 192l-64-64v-64l64 64v64z"/>
    <path fill="#EA4335" d="M64 192V64l64 64v64l-64 64z"/>
  </svg>
);

// Digital Ocean Logo
export const DigitalOceanIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 256 256" className={className}>
    <path fill="#0080FF" d="M128 0C57.308 0 0 57.308 0 128s57.308 128 128 128c35.346 0 67.269-14.365 90.51-37.608L128 128V0z"/>
    <path fill="#0080FF" d="M128 256v-85.333h85.333c0 47.128-38.205 85.333-85.333 85.333z"/>
    <path fill="#0080FF" d="M42.667 128h85.333v85.333H42.667V128z"/>
  </svg>
);

// Snyk Logo
export const SnykIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 256 256" className={className}>
    <path fill="#4C4A73" d="M128 0C57.308 0 0 57.308 0 128s57.308 128 128 128 128-57.308 128-128S198.692 0 128 0z"/>
    <path fill="#FFF" d="M128 32c53.02 0 96 42.98 96 96s-42.98 96-96 96-96-42.98-96-96 42.98-96 96-96z"/>
  </svg>
);

// Mapeo de tecnologías a iconos
export const techIconMap = {
  AWS: AWSIcon,
  K8s: KubernetesIcon,
  TF: TerraformIcon,
  GH: GitHubIcon,
  DC: DockerIcon,
  JF: JenkinsIcon,
  PM: PrometheusIcon,
  GF: GrafanaIcon,
  DD: DataDogIcon,
  NR: NewRelicIcon,
  VT: VaultIcon,
  SQ: SonarQubeIcon,
  SK: SnykIcon,
  AZ: AzureIcon,
  GC: GoogleCloudIcon,
  DO: DigitalOceanIcon,
};

export type TechIconType = keyof typeof techIconMap; 