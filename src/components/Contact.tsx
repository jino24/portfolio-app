import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          {t('contact.heading')}
        </h2>
        <div className="w-24 h-1 bg-orange-400 mx-auto mb-12"></div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">{t('contact.heading')}</h3>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-100 mb-1">{t('contact.emailTitle')}</h4>
                  <a href={`mailto:${t('contact.email')}`} className="hover:text-orange-400 transition-colors">
                    {t('contact.email')}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-100 mb-1">{t('contact.phoneTitle')}</h4>
                  <a href={`tel:${t('contact.phone')}`} className="hover:text-orange-400 transition-colors">
                    {t('contact.phone')}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-100 mb-1">{t('contact.location')}</h4>
                  <p>{t('contact.address')}</p>
                  <p>{t('contact.city')}</p>
                  <p>{t('contact.country')}</p>
                </div>
              </div>
            </div>

            {/* Quick Message */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="mb-6 text-teal-100">
                {t('contact.description')}
              </p>
              <a
                href={`mailto:${t('contact.email')}`}
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg hover:shadow-xl"
              >
                {t('contact.sendEmail')}
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center pt-8 border-t border-white/20">
            <p className="text-teal-100">
              © {new Date().getFullYear()} {t('contact.name')}. Built with React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
