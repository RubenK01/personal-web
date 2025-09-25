import type { Metadata } from 'next';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PrivacyPolicy from '@/components/PrivacyPolicy';

export const metadata: Metadata = {
  title: 'Política de Privacidad | Rubén Casado Domínguez',
  description:
    'Política de privacidad y protección de datos de Rubén Casado Domínguez, consultor freelance especializado en AWS y DevSecOps.'
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-dark-950">
      <Navigation />
      <PrivacyPolicy />
      <Footer />
    </main>
  );
}
