import { useTranslation } from 'react-i18next';
import { educationData } from '../data/portfolioData';

export const Education = () => {
  const { t } = useTranslation();
  const education = t('education', { returnObjects: true }) as any[];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          {t('sections.education')}
        </h2>
        <div className="w-24 h-1 bg-teal-600 mx-auto mb-12"></div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border-l-4 border-teal-600"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                      <p className="text-lg text-teal-700 font-semibold">{edu.institution}</p>
                      <p className="text-gray-600">{edu.location}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-semibold">
                    {educationData[index].period}
                  </span>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Key Topics:
                </h4>
                <ul className="space-y-2">
                  {edu.topics?.map((topic: string, topicIndex: number) => (
                    <li key={topicIndex} className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">•</span>
                      <span className="text-gray-700">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
