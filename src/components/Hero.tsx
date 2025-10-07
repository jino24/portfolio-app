import { useTranslation } from 'react-i18next';
import profileImage from '../assets/profile.jpg';
import { DownloadCVButton } from './DownloadCVButton';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 text-white">
      <div className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <img
              src={profileImage}
              alt={t('contact.name')}
              className="w-40 h-40 rounded-full border-4 border-white/30 shadow-2xl object-cover"
            />
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
            {t('contact.name')}
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-teal-100">
            {t('contact.title')}
          </h2>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-lg">
            <a
              href={`mailto:${t('contact.email')}`}
              className="flex items-center gap-2 hover:text-orange-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {t('contact.email')}
            </a>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {t('contact.phone')}
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {t('contact.city')}, {t('contact.country')}
            </span>
          </div>

          {/* Download CV Button */}
          <div className="mb-12">
            <DownloadCVButton />
          </div>

          {/* Scroll Down Indicator */}
          <div className="animate-bounce mt-12">
            <a href="#experience" className="inline-block">
              <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
