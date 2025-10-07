import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { experienceData, educationData } from '../data/portfolioData';

// Register fonts if needed
// Font.register({ family: 'Roboto', src: '...' });

// Tailwind Color Reference:
// teal-600: #0d9488
// teal-700: #0f766e #0d9488
// orange-500: #f97316
// orange-600: #ea580c
// orange-700: #c2410c
// gray-700: #374151
// gray-600: #4b5563
// gray-500: #6b7280

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 10,
    fontFamily: 'Helvetica',
    backgroundColor: '#ffffff',
  },
  header: {
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  photoColumn: {
    width: 80,
    alignItems: 'center',
    marginRight: 15,
  },
  nameColumn: {
    flex: 2,
    paddingRight: 10,
  },
  contactColumn: {
    flex: 2,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0d9488', // teal-600
    marginBottom: 3,
  },
  title: {
    fontSize: 14,
    color: '#4b5563', // gray-600
  },
  contactInfo: {
    flexDirection: 'column',
    fontSize: 9,
    color: '#374151', // gray-700
  },
  contactItem: {
    marginBottom: 2,
    fontSize: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactLabel: {
    fontWeight: 'bold',
    marginRight: 5,
    color: '#6b7280', // gray-500
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    border: '3 solid #0d9488', // teal-600
  },
  section: {
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#c2410c', // orange-700
    marginBottom: 6,
    borderBottom: '2 solid #fed7aa', // orange-200
    paddingBottom: 3,
  },
  companyCard: {
    marginBottom: 10,
    padding: 8,
    backgroundColor: '#fffbeb', // orange-50
    borderLeft: '3 solid #f97316', // orange-500
  },
  companyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  companyName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#c2410c', // orange-700
  },
  period: {
    fontSize: 9,
    color: '#ffffff',
    backgroundColor: '#f97316', // orange-500
    padding: '3 8',
    borderRadius: 10,
  },
  experienceItem: {
    marginBottom: 8,
    marginLeft: 8,
  },
  experienceTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#111827', // gray-900
    marginBottom: 2,
  },
  experienceDescription: {
    fontSize: 9,
    color: '#4b5563', // gray-600
    marginBottom: 5,
    fontStyle: 'italic',
  },
  highlightsList: {
    marginLeft: 8,
  },
  highlight: {
    fontSize: 9,
    color: '#374151', // gray-700
    marginBottom: 1,
  },
  techStack: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    marginTop: 5,
  },
  tech: {
    fontSize: 8,
    color: '#ffffff', // teal-700
    backgroundColor: '#0d9488', // teal-100
    padding: '2 6',
    borderRadius: 8,
  },
  educationItem: {
    marginBottom: 12,
  },
  degree: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#111827', // gray-900
  },
  institution: {
    fontSize: 10,
    color: '#c2410c', // orange-700
    marginBottom: 3,
  },
  location: {
    fontSize: 8,
    color: '#6b7280', // gray-500
    marginBottom: 5,
  },
  topicsList: {
    marginLeft: 10,
  },
  topic: {
    fontSize: 9,
    color: '#4b5563', // gray-600
    marginBottom: 2,
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  skillCategory: {
    width: '30%',
    marginBottom: 10,
  },
  categoryName: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#c2410c', // orange-700
    marginBottom: 5,
  },
  skillItem: {
    fontSize: 9,
    color: '#4b5563', // gray-600
    marginBottom: 2,
  },
  interestsContainer: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 5,
  },
  interest: {
    fontSize: 9,
    color: '#ffffff',
    backgroundColor: '#0d9488',
    padding: '3 8',
    borderRadius: 8,
  },
});

interface CVDocumentProps {
  translations: {
    name: string;
    title: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    country: string;
    sections: {
      experience: string;
      education: string;
      skills: string;
      keyAchievements: string;
    };
    interests: string;
    experience: any;
    skills: {
      programmingLanguages: string;
      frameworks: string;
      toolsDevOps: string;
      databases: string;
      languages: string;
      systems: string;
    };
    skillsData: any;
    education: any;
    interestsData: any;
  };
  profileImageUrl?: string;
}

export const CVDocument = ({ translations, profileImageUrl }: CVDocumentProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header - 3 Columns */}
      <View style={styles.header}>
        {/* Column 3: Profile Photo */}
        {profileImageUrl && (
          <View style={styles.photoColumn}>
            <Image src={profileImageUrl} style={styles.profileImage} />
          </View>
        )}

        {/* Column 1: Name & Title */}
        <View style={styles.nameColumn}>
          <Text style={styles.name}>{translations.name}</Text>
          <Text style={styles.title}>{translations.title}</Text>
        </View>

        {/* Column 2: Contact Info */}
        <View style={styles.contactColumn}>
          <View style={styles.contactInfo}>
            <View style={styles.contactItem}>
              <Text>{translations.email}</Text>
            </View>
            <View style={styles.contactItem}>
              <Text>{translations.phone}</Text>
            </View>
            <View style={styles.contactItem}>
              <Text>{translations.city}, {translations.country}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Experience Section */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: '#0d9488' }]}>{translations.sections.experience}</Text>
        {experienceData.map((company, idx) => {
          const companyKey = ['marjory', 'niji', 'capgemini'][idx];
          const companyTrans = translations.experience[companyKey];

          return (
            <View key={idx} style={styles.companyCard}>
              <View style={styles.companyHeader}>
                <Text style={styles.companyName}>{companyTrans.company}</Text>
                <Text style={styles.period}>{company.period}</Text>
              </View>

              {company.experiences.map((exp, expIdx) => {
                if (expIdx === 2) return null;
                const expTrans = companyTrans.experiences[expIdx];
                return (
                  <View key={expIdx} style={styles.experienceItem}>
                    <Text style={styles.experienceTitle}>{expTrans.title} ({exp.period})</Text>
                    <Text style={styles.experienceDescription}>{expTrans.description}</Text>

                    <View style={styles.highlightsList}>
                      {expTrans.highlights.map((highlight: string, hIdx: number) => (
                        <Text key={hIdx} style={styles.highlight}>• {highlight}</Text>
                      ))}
                    </View>

                    <View style={styles.techStack}>
                      {exp.technologies.map((tech, tIdx) => (
                        <Text key={tIdx} style={styles.tech}>{tech}</Text>
                      ))}
                    </View>
                  </View>
                );
              })}
            </View>
          );
        })}
      </View>
    </Page>

    {/* Second Page - Education & Interests */}
    <Page size="A4" style={styles.page}>
      {/* Skills Section */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: '#0d9488' }]}>{translations.sections.skills}</Text>
        <View style={styles.skillsGrid}>
          {Object.keys(translations.skills).map((categoryKey, idx) => {
            const categoryName = translations.skills[categoryKey as keyof typeof translations.skills];
            const items = translations.skillsData[categoryKey];

            return (
              <View key={idx} style={styles.skillCategory}>
                <Text style={styles.categoryName}>{categoryName}</Text>
                {items?.map((item: string, itemIdx: number) => (
                  <Text key={itemIdx} style={styles.skillItem}>• {item}</Text>
                ))}
              </View>
            );
          })}
        </View>
      </View>
      {/* Education Section */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: '#0d9488' }]}>{translations.sections.education}</Text>
        {translations.education.map((edu: any, idx: number) => (
          <View key={idx} style={styles.educationItem}>
            <Text style={styles.degree}>{edu.degree}</Text>
            <Text style={styles.institution}>{edu.institution}</Text>
            <Text style={styles.location}>{edu.location} • {educationData[idx].period}</Text>
            <View style={styles.topicsList}>
              {edu.topics?.map((topic: string, topicIdx: number) => (
                <Text key={topicIdx} style={styles.topic}>• {topic}</Text>
              ))}
            </View>
          </View>
        ))}
      </View>

      {/* Interests Section */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: '#0d9488' }]}>{translations.interests}</Text>
        <View style={styles.interestsContainer}>
          {translations.interestsData.map((interest: string, idx: number) => (
            <Text key={idx} style={styles.interest}>{interest}</Text>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);
