import { useTranslation } from 'react-i18next';

export const Skills = () => {
  const { t } = useTranslation();
  const skillCategories = ['programmingLanguages', 'frameworks', 'toolsDevOps', 'databases', 'languages', 'systems'];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          {t('sections.skills')}
        </h2>
        <div className="w-24 h-1 bg-teal-600 mx-auto mb-12"></div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow border-t-4 border-teal-600"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {index === 0 && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      )}
                      {index === 1 && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      )}
                      {index === 2 && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      )}
                      {index === 3 && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                      )}
                      {index === 4 && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                      )}
                      {index === 5 && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      )}
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{t(`skills.${category}`)}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {(t(`skillsData.${category}`, { returnObjects: true }) as string[]).map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm hover:bg-teal-50 hover:text-teal-700 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Interests */}
          <div className="mt-12 text-center bg-gradient-to-r from-teal-50 to-orange-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('interests')}</h3>
            <div className="flex justify-center gap-6 flex-wrap">
              {(t('interestsData', { returnObjects: true }) as string[]).map((interest, index) => (
                <span
                  key={index}
                  className="bg-white text-gray-700 px-6 py-3 rounded-full text-lg font-medium shadow-md"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
