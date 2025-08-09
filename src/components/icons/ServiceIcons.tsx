import React from 'react';

export type IconProps = React.SVGProps<SVGSVGElement>;

export const CloudArchitectureIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg viewBox="0 0 64 64" className={className} {...props}>
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 42h24a8 8 0 0 0 0-16h-1.2A12.8 12.8 0 0 0 30 18a12.6 12.6 0 0 0-12.2 9.4A8.5 8.5 0 0 0 20 42Z"/>
      <rect x="12" y="44" width="10" height="8" rx="2"/>
      <rect x="27" y="44" width="10" height="8" rx="2"/>
      <rect x="42" y="44" width="10" height="8" rx="2"/>
      <path d="M17 44v-6m15 6v-6m15 6v-6"/>
    </g>
  </svg>
);

export const MigrationIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg viewBox="0 0 64 64" className={className} {...props}>
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 40h20a8 8 0 0 0 0-16h-1.2A12.8 12.8 0 0 0 32 14a12.6 12.6 0 0 0-12.2 9.4A8.5 8.5 0 0 0 22 40Z"/>
      <rect x="8" y="44" width="14" height="10" rx="2"/>
      <rect x="42" y="44" width="14" height="10" rx="2"/>
      <path d="M24 49h12"/>
      <path d="M33 31l7 7-7 7"/>
      <path d="M40 38H18"/>
    </g>
  </svg>
);

export const CiCdDevOpsIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg viewBox="0 0 64 64" className={className} {...props}>
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="22" cy="32" r="10"/>
      <circle cx="42" cy="32" r="10"/>
      <path d="M16 32h12M36 32h12"/>
      <path d="M22 22v-4m0 28v-4M42 22v-4m0 28v-4"/>
      <path d="M26 28l-4 4 4 4M38 28l4 4-4 4"/>
    </g>
  </svg>
);

export const CostOptimizationIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg viewBox="0 0 64 64" className={className} {...props}>
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="20" cy="44" r="8"/>
      <path d="M8 40l12 12 20-20 8 8 8-8"/>
      <path d="M20 40v8m-4-4h8"/>
    </g>
  </svg>
);

export const SecurityCloudIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg viewBox="0 0 64 64" className={className} {...props}>
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 40h20a8 8 0 0 0 0-16h-1.2A12.8 12.8 0 0 0 32 14a12.6 12.6 0 0 0-12.2 9.4A8.5 8.5 0 0 0 22 40Z"/>
      <path d="M40 44v-6a4 4 0 0 1 8 0v6"/>
      <rect x="38" y="44" width="12" height="10" rx="2"/>
      <path d="M44 40v-2"/>
    </g>
  </svg>
);

export const MonitoringIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg viewBox="0 0 64 64" className={className} {...props}>
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 32s8-12 24-12 24 12 24 12-8 12-24 12S8 32 8 32Z"/>
      <circle cx="32" cy="32" r="6"/>
      <path d="M14 46l6-6 6 4 8-10 6 6 10-8"/>
    </g>
  </svg>
); 