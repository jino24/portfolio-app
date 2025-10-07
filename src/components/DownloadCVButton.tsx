import { PDFDownloadLink } from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';
import { CVDocument } from './CVDocument';
import profileImage from '../assets/profile.jpg';

export const DownloadCVButton = () => {
  const { t, i18n } = useTranslation();

  // Get all translations needed for the CV
  const cvTranslations = {
    name: t('contact.name'),
    title: t('contact.title'),
    email: t('contact.email'),
    phone: t('contact.phone'),
    address: t('contact.address'),
    city: t('contact.city'),
    country: t('contact.country'),
    sections: {
      experience: t('sections.experience'),
      education: t('sections.education'),
      skills: t('sections.skills'),
      keyAchievements: t('sections.keyAchievements'),
    },
    interests: t('interests'),
    experience: {
      marjory: t('experience.marjory', { returnObjects: true }),
      niji: t('experience.niji', { returnObjects: true }),
      capgemini: t('experience.capgemini', { returnObjects: true }),
    },
    skills: {
      programmingLanguages: t('skills.programmingLanguages'),
      frameworks: t('skills.frameworks'),
      toolsDevOps: t('skills.toolsDevOps'),
      databases: t('skills.databases'),
      languages: t('skills.languages'),
      systems: t('skills.systems'),
    },
    skillsData: t('skillsData', { returnObjects: true }),
    education: t('education', { returnObjects: true }),
    interestsData: t('interestsData', { returnObjects: true }),
  };

  const fileName = `CV_Jean_Portalis_${i18n.language === 'fr' ? 'FR' : 'EN'}.pdf`;

  return (
    <PDFDownloadLink
      key={i18n.language}
      document={<CVDocument translations={cvTranslations} profileImageUrl={profileImage} />}
      fileName={fileName}
      className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg hover:shadow-xl"
    >
      {({ loading }) =>
        loading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {t('cv.loading')}
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {t('cv.download')}
          </span>
        )
      }
    </PDFDownloadLink>
  );
};
