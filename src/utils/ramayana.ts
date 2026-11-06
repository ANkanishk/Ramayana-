/**
 * Pure helper functions and logic for Ramayana: The Rise movie portal
 */

export interface Kaanda {
  id: string;
  name: string;
  sanskrit: string;
  desc: string;
  keyEvents: string[];
  significance: string;
}

export const KAANDAS: Kaanda[] = [
  {
    id: 'bala',
    name: 'बाल काण्ड',
    sanskrit: 'बालकाण्डम्',
    desc: 'श्री राम का जन्म, ताड़का वध, विश्वामित्र यज्ञ रक्षा और धनुष भंग कर सीता स्वयंवर।',
    keyEvents: ['श्री राम जन्म', 'विश्वामित्र आगमन', 'अहिल्या उद्धार', 'शिव धनुष भंग'],
    significance: 'अवतार का प्राकट्य एवं ईश्वरीय संकल्प'
  },
  {
    id: 'ayodhya',
    name: 'अयोध्या काण्ड',
    sanskrit: 'अयोध्याकाण्डम्',
    desc: 'राज्याभिषेक की तैयारी, कैकेयी का वरदान मांगना और श्री राम का 14 वर्ष का वनवास।',
    keyEvents: ['मंथरा षड्यंत्र', 'कैकेयी हठ', 'श्री राम वन गमन', 'भरत मिलाप (पादुका पूजन)'],
    significance: 'धर्म, मर्यादा और त्याग की पराकाष्ठा'
  },
  {
    id: 'aranya',
    name: 'अरण्य काण्ड',
    sanskrit: 'अरण्यकाण्डम्',
    desc: 'पंचवटी निवास, शूर्पणखा प्रसंग, खर-दूषण संहार, मारीच स्वर्णमृग और सीता हरण।',
    keyEvents: ['शूर्पणखा मानमर्दन', 'स्वर्णमृग प्रसंग', 'सीता हरण', 'जटायु मोक्ष'],
    significance: 'धर्म-अधर्म के प्रत्यक्ष संघर्ष का प्रारंभ'
  },
  {
    id: 'kishkindha',
    name: 'किष्किन्धा काण्ड',
    sanskrit: 'किष्किन्धाकाण्डम्',
    desc: 'ऋष्यमूक पर्वत पर सुग्रीव एवं हनुमान जी से भेंट, बाली वध और वानर सेना का संगठन।',
    keyEvents: ['श्री राम-सुग्रीव मित्रता', 'बाली वध', 'सीता खोज हेतु चारों दिशाओं में प्रस्थान'],
    significance: 'सच्ची मित्रता और शरणागत रक्षा'
  },
  {
    id: 'sundara',
    name: 'सुन्दर काण्ड',
    sanskrit: 'सुन्दरकाण्डम्',
    desc: 'हनुमान जी का समुद्र लांघना, लंका प्रवेश, अशोक वाटिका में सीता दर्शन और लंका दहन।',
    keyEvents: ['समुद्र लंघन', 'अशोक वाटिका भेंट', 'अक्षय कुमार वध', 'स्वर्ण लंका दहन'],
    significance: 'भक्ति, अदम्य साहस और संकटमोचन शक्ति'
  },
  {
    id: 'yuddha',
    name: 'युद्ध काण्ड',
    sanskrit: 'युद्धकाण्डम्',
    desc: 'राम सेतु निर्माण, महासंग्राम, कुंभकर्ण-मेघनाद वध, रावण वध और अयोध्या में श्री राम का राज्याभिषेक।',
    keyEvents: ['राम सेतु निर्माण', 'कुंभकर्ण वध', 'मेघनाद संहार', 'दशानन रावण वध', 'राम राज्याभिषेक'],
    significance: 'अधर्म पर धर्म और असत्य पर सत्य की अंतिम विजय'
  }
];

/**
 * Transforms any Google Drive URL into an embeddable preview URL that does not redirect
 */
export function getGoogleDriveEmbedUrl(rawUrl: string): string {
  if (!rawUrl) return '';
  
  // Extract file ID from patterns:
  // /file/d/{id}/view
  // id={id}
  const fileIdMatch = rawUrl.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || rawUrl.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (fileIdMatch && fileIdMatch[1]) {
    return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
  }
  
  return rawUrl;
}

/**
 * Formats time in seconds to mm:ss format
 */
export function formatAudioTime(seconds: number): string {
  if (isNaN(seconds) || seconds < 0) return '00:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

export type ThemeMode = 'ram' | 'ravana';

export interface ThemeConfig {
  name: string;
  title: string;
  subTitle: string;
  shloka: string;
  shlokaMeaning: string;
  primaryColor: string;
  accentColor: string;
  bgGradient: string;
  badgeBg: string;
  cardBorder: string;
}

export function getThemeConfig(mode: ThemeMode): ThemeConfig {
  if (mode === 'ravana') {
    return {
      name: 'रावण साम्राज्य',
      title: 'दशानन रावण : स्वर्ण लंका का अधिपति',
      subTitle: 'शिव तांडव के रचयिता, प्रकांड विद्वान, महापराक्रमी लंका नरेश',
      shloka: 'जटाटवीगलज्जलप्रवाहपावितस्थले गलेऽवलम्ब्य लम्बितां भुजङ्गतुङ्गमालिकाम्।',
      shlokaMeaning: 'शिव ताण्डव स्तोत्र - जिनकी जटाओं से बहती गंगा कंठ को पवित्र करती है',
      primaryColor: '#DC2626', // Crimson red
      accentColor: '#F59E0B',  // Fiery amber
      bgGradient: 'from-[#1a0505] via-[#0f0303] to-[#080202]',
      badgeBg: 'bg-red-950/80 border-red-700/60 text-red-200',
      cardBorder: 'border-red-600/30 hover:border-red-500/60'
    };
  }

  // Default: Ram theme
  return {
    name: 'श्री राम राज्य',
    title: 'मर्यादा पुरुषोत्तम श्री राम : धर्म एवं करुणा के साक्षात रूप',
    subTitle: 'सूर्यवंश के गौरव, कोदंडधारी, प्रजावत्सल अयोध्यापति',
    shloka: 'रामो विग्रहवान् धर्मः साधुः सत्यपराक्रमः। राजा सर्वस्य लोकस्य देवानामिव वासवः॥',
    shlokaMeaning: 'श्री राम धर्म के साक्षात स्वरूप हैं, साधु पुरुषों के रक्षक व सत्य पराक्रमी हैं',
    primaryColor: '#F59E0B', // Golden amber
    accentColor: '#EA580C',  // Saffron
    bgGradient: 'from-[#0d1322] via-[#070b14] to-[#04060b]',
    badgeBg: 'bg-amber-950/80 border-amber-600/50 text-amber-200',
    cardBorder: 'border-amber-500/30 hover:border-amber-400/60'
  };
}
