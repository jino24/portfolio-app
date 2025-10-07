import { useTranslation } from 'react-i18next';
import { experienceData } from '../data/portfolioData';
import type { Experience as ExperienceType, CompanyGroup } from '../data/portfolioData';

const ExperienceCard = ({ exp, companyKey, expIndex }: { exp: ExperienceType; companyKey: string; expIndex: number }) => {
  const { t } = useTranslation();
  const translatedExp = t(`experience.${companyKey}.experiences.${expIndex}`, { returnObjects: true }) as any;

  return (
    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div className="flex-1">
          <h4 className="text-xl font-bold text-gray-900 mb-2">{translatedExp.title}</h4>
        </div>
        <div className="text-right">
          <span className="inline-block bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-semibold">
            {exp.period}
          </span>
          {exp.location && (
            <p className="text-gray-600 text-sm mt-1">{exp.location}</p>
          )}
        </div>
      </div>

      <p className="text-gray-700 mb-4">{translatedExp.description}</p>

      <div className="mb-4">
        <h5 className="font-semibold text-gray-900 mb-2">{t('sections.keyAchievements')}:</h5>
        <ul className="list-disc list-inside space-y-1">
          {translatedExp.highlights.map((highlight: string, index: number) => (
            <li key={index} className="text-gray-700 text-sm">{highlight}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2">
        {exp.technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-teal-50 hover:text-teal-700 transition-colors border border-gray-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const CompanyCard = ({ companyGroup, companyKey }: { companyGroup: CompanyGroup; companyKey: string }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow border-2 border-teal-500">
      {/* Company Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 pb-6 border-b-2 border-teal-200">
        <h3 className="text-3xl font-bold text-teal-700">{t(`experience.${companyKey}.company`)}</h3>
        <span className="inline-block bg-teal-600 text-white px-5 py-2 rounded-full text-base font-bold mt-2 md:mt-0 shadow-md">
          {companyGroup.period}
        </span>
      </div>

      {/* Experiences within company */}
      <div className="space-y-6">
        {companyGroup.experiences.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} companyKey={companyKey} expIndex={index} />
        ))}
      </div>
    </div>
  );
};

export const Experience = () => {
  const { t } = useTranslation();
  const companyKeys = ['marjory', 'niji', 'capgemini'];
  const internships = t('internships', { returnObjects: true }) as any[];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          {t('sections.experience')}
        </h2>
        <div className="w-24 h-1 bg-teal-600 mx-auto mb-12"></div>

        <div className="max-w-5xl mx-auto space-y-8">
          {experienceData.map((companyGroup, index) => (
            <CompanyCard key={index} companyGroup={companyGroup} companyKey={companyKeys[index]} />
          ))}
        </div>

        {/* Internships Section */}
        <h3 className="text-3xl md:text-4xl font-bold text-center mt-20 mb-4 text-gray-900">
          {t('sections.internships')}
        </h3>
        <div className="w-24 h-1 bg-orange-500 mx-auto mb-12"></div>

        <div className="max-w-5xl mx-auto space-y-8">
          {internships.map((internship, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-l-4 border-orange-500">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{internship.title}</h4>
                  {internship.company && (
                    <p className="text-lg text-orange-700 font-semibold">{internship.company}</p>
                  )}
                </div>
                <div className="text-right">
                  <span className="inline-block bg-orange-100 text-orange-800 px-4 py-1 rounded-full text-sm font-semibold">
                    {internship.period}
                  </span>
                  {internship.location && (
                    <p className="text-gray-600 text-sm mt-1">{internship.location}</p>
                  )}
                </div>
              </div>

              <p className="text-gray-700 mb-4">{internship.description}</p>

              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">{t('sections.keyAchievements')}:</h5>
                <ul className="list-disc list-inside space-y-1">
                  {internship.highlights?.map((highlight: string, idx: number) => (
                    <li key={idx} className="text-gray-700 text-sm">{highlight}</li>
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
