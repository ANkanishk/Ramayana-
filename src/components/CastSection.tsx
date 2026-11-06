import React, { useState } from 'react';
import { Sparkles, Shield, Sword, X, ChevronRight } from 'lucide-react';

export interface CastMember {
  id: string;
  actor: string;
  character: string;
  title: string;
  side: 'ayodhya' | 'lanka' | 'divine';
  image: string;
  weapon: string;
  shloka: string;
  shlokaMeaning: string;
  actorBackground: string;
  characterDesc: string;
  specialAuras: string[];
}

export const CAST_DATA: CastMember[] = [
  {
    id: 'ram',
    actor: 'रणबीर कपूर (Ranbir Kapoor)',
    character: 'भगवान श्री राम (Lord Rama)',
    title: 'मर्यादा पुरुषोत्तम · सूर्यवंशी राजकुमार',
    side: 'ayodhya',
    image: '/assets/images/ram-ranbir.jpg',
    weapon: 'दिव्य कोदंड धनुष, ब्रह्मास्त्र एवं वैष्णवास्त्र',
    shloka: 'रामो विग्रहवान् धर्मः साधुः सत्यपराक्रमः। राजा सर्वस्य लोकस्य देवानामिव वासवः॥',
    shlokaMeaning: 'श्री राम धर्म के साक्षात स्वरूप हैं, साधु पुरुषों के रक्षक व सत्य पराक्रमी हैं।',
    actorBackground: 'संजू, रॉकस्टार व ब्रह्मास्त्र फेम अभिनेता। इस पावन भूमिका हेतु २ वर्षों का कड़ा संयम व शारीरिक प्रशिक्षण लिया।',
    characterDesc: 'अयोध्या के चक्रवर्ती सम्राट दशरथ के ज्येष्ठ पुत्र। जिन्होंने पिता के वचनों की रक्षा हेतु राजपाट त्यागकर १४ वर्षों का वनवास स्वीकार किया और धर्म की स्थापना की।',
    specialAuras: ['मर्यादा व करुणा', 'अमोघ शर संधान', 'ईश्वरीय तेज']
  },
  {
    id: 'ravana',
    actor: 'रॉकिंग स्टार यश (Rocking Star Yash)',
    character: 'दशानन रावण (Lankeshwar Ravana)',
    title: 'स्वर्ण लंका का अधिपति · प्रकांड शिवभक्त',
    side: 'lanka',
    image: '/assets/images/ravana-yash.jpg',
    weapon: 'चंद्रहास खड्ग, पाशुपतास्त्र व त्रिशूल',
    shloka: 'जटाटवीगलज्जलप्रवाहपावितस्थले गलेऽवलम्ब्य लम्बितां भुजङ्गतुङ्गमालिकाम्।',
    shlokaMeaning: 'शिव ताण्डव स्तोत्र - भगवान शिव के अनन्य उपासक जिन्होंने कैलाश पर्वत को अपनी भुजाओं पर उठा लिया था।',
    actorBackground: 'केजीएफ (KGF) फेम अखिल भारतीय सुपरस्टार यश। फिल्म के सह-निर्माता भी हैं।',
    characterDesc: 'विश्रवा ऋषि और कैकसी के पुत्र, चारों वेदों और छह शास्त्रों के प्रकांड ज्ञाता, नौ ग्रहों को अपने अधीन करने वाले अपराजेय लंका नरेश।',
    specialAuras: ['अतुल्य पराक्रम', 'शिव तांडव तेज', 'अखंड अहंकार']
  },
  {
    id: 'sita',
    actor: 'साई पल्लवी (Sai Pallavi)',
    character: 'माता जानकी (Mata Sita)',
    title: 'जनकनन्दिनी · साक्षात लक्ष्मी स्वरूपा',
    side: 'ayodhya',
    image: '/assets/images/sita-sai.jpg',
    weapon: 'अडिग सतीत्व, त्याग एवं आत्मबल',
    shloka: 'जनकस्य कुले जाता देवमायेव निर्मिता। सर्वलक्षणसम्पन्ना नारीणामुत्तमा वधूः॥',
    shlokaMeaning: 'राजा जनक के कुल में उत्पन्न, ईश्वरीय लीला स्वरूपा, समस्त सद्गुणों से संपन्न नारी शिरोमणि।',
    actorBackground: 'गार्गी, श्याम सिंघा रॉय व प्रेमम फेम अभिनेत्री, अपनी स्वाभाविक सादगी एवं अभिनय गरिमा हेतु विख्यात।',
    characterDesc: 'धरती से प्रकट हुई मिथिला कुमारी, जिन्होंने राजवैभव त्यागकर पति के साथ वन के कांटों को चुना और अशोक वाटिका में रावण के अहंकार को तृण के समान समझा।',
    specialAuras: ['पवित्रता व तप', 'अटूट आत्मसम्मान', 'मातृत्व वात्सल्य']
  },
  {
    id: 'hanuman',
    actor: 'सनी देओल (Sunny Deol)',
    character: 'पवनपुत्र श्री हनुमान (Lord Hanuman)',
    title: 'रुद्रावतार · महाबली संकटमोचन',
    side: 'divine',
    image: '/assets/images/hanuman-sunny.jpg',
    weapon: 'स्वर्ण गदा एवं वज्र देह',
    shloka: 'मनोजवं मारुततुल्यवेगं जितेन्द्रियं बुद्धिमतां वरिष्ठम्। वातात्मजं वानरयूथमुख्यं श्रीरामदूतं शरणं प्रपद्ये॥',
    shlokaMeaning: 'मन के समान वेग वाले, इन्द्रियों को जीतने वाले, वायुपुत्र श्री रामदूत हनुमान की मैं शरण लेता हूँ।',
    actorBackground: 'गदर फेम राष्ट्रीय पुरस्कार विजेता अभिनेता, जिनकी सिंह गर्जना हनुमान जी के रौद्र रूप को जीवंत करती है।',
    characterDesc: 'अष्टसिद्धि और नौ निधियों के स्वामी, जिन्होंने एक छलांग में १०० योजन समुद्र पार कर स्वर्ण लंका को दग्ध कर दिया और लक्ष्मण जी के प्राणों की रक्षा की।',
    specialAuras: ['अनन्य रामभक्ति', 'अतुलित बल', 'अष्ट सिद्धि सामर्थ्य']
  },
  {
    id: 'lakshman',
    actor: 'रवि दुबे (Ravi Dubey)',
    character: 'भ्राता लक्ष्मण (Prince Lakshmana)',
    title: 'शेषावतार · अमोघ धनुर्धर',
    side: 'ayodhya',
    image: '/assets/images/hero-epic.jpg',
    weapon: 'दिव्य धनुष, आग्नेयास्त्र व वरुणास्त्र',
    shloka: 'अहं तस्यानुजो भ्राता लक्ष्मणेति मया श्रुतः। गुणैर्दास्यमुपागतः॥',
    shlokaMeaning: 'मैं श्री राम का छोटा भाई लक्ष्मण हूँ, उनके दिव्य गुणों से अभिभूत होकर सदैव उनका सेवक हूँ।',
    actorBackground: 'प्रख्यात अभिनेता और निर्माता, जिन्होंने लक्ष्मण के रौद्र एवं समर्पित रूप को साकार किया।',
    characterDesc: 'सुमित्रा नन्दन, जिन्होंने १४ वर्षों तक पलक झपकाए बिना वन में श्री राम और सीता की पहरेदारी की और मेघनाद का वध किया।',
    specialAuras: ['भ्रातृ निष्ठा', 'अमोघ शर संधान', 'क्रोध एवं तेज']
  },
  {
    id: 'dasharatha',
    actor: 'अरुण गोविल (Arun Govil)',
    character: 'महाराज दशरथ (King Dasharatha)',
    title: 'अयोध्या के चक्रवर्ती सम्राट · रघुकुल शिरोमणि',
    side: 'ayodhya',
    image: '/assets/images/ram-ranbir.jpg',
    weapon: 'शब्दवेधी धनुर्विद्या',
    shloka: 'रघुकुल रीति सदा चलि आई, प्राण जाहुँ बरु बचनु न जाई॥',
    shlokaMeaning: 'रघुकुल की सदा से यही परंपरा रही है कि वचन की रक्षा हेतु भले ही प्राण त्यागने पड़ें।',
    actorBackground: 'रामानंद सागर की ऐतिहासिक रामायण में श्री राम का कालजयी अभिनय करने वाले अरुण गोविल इस बार पिता दशरथ बने हैं।',
    characterDesc: 'सूर्यवंशी चक्रवर्ती नरेश, जिनके तीनों लोकों में यश था। पुत्र वियोग में प्राण त्यागने वाले धर्मपरायण पिता।',
    specialAuras: ['सत्यनिष्ठा', 'पितृ स्नेह', 'राजधर्म']
  },
  {
    id: 'kaikeyi',
    actor: 'लारा दत्ता (Lara Dutta)',
    character: 'महारानी कैकेयी (Queen Kaikeyi)',
    title: 'वीर क्षत्राणी · दशरथ की प्रिय महिषी',
    side: 'ayodhya',
    image: '/assets/images/sita-sai.jpg',
    weapon: 'युद्ध कला एवं रथाश्व संचालन',
    shloka: 'सत्यसंधस्य राजर्षेः सुमित्रानन्दवर्धन।',
    shlokaMeaning: 'देवासुर संग्राम में अपने साहस से महाराज दशरथ के प्राण बचाने वाली पराक्रमी रानी।',
    actorBackground: 'मिस यूनिवर्स एवं प्रख्यात अभिनेत्री लारा दत्ता ने कैकेयी के जटिल एवं प्रभावशाली चरित्र को निभाया है।',
    characterDesc: 'अश्वपति की पुत्री, जिन्होंने देवासुर संग्राम में दशरथ के रथ का पहिया संभाला था। मंथरा के कुचक्र में आकर दो वरदान मांगकर इतिहास की दिशा मोड़ दी।',
    specialAuras: ['रणकौशल', 'राजसी दर्प', 'भावुक पश्चाताप']
  },
  {
    id: 'kumbhakarna',
    actor: 'बॉबी देओल (Bobby Deol)',
    character: 'महाबली कुंभकर्ण (Kumbhakarna)',
    title: 'विशालकाय दैत्यवीर · रावण का स्नेही अनुज',
    side: 'lanka',
    image: '/assets/images/ravana-yash.jpg',
    weapon: 'विशाल त्रिशूल एवं लौह मुष्टि',
    shloka: 'स हि तात बली राजा कुम्भकर्णो महाबलः।',
    shlokaMeaning: 'छह माह शयन करने वाला, पर्वत समान काया वाला वीर जिसने रावण को नीति समझाई किन्तु भाई का साथ नहीं छोड़ा।',
    actorBackground: 'एनिमल एवं आश्रम फेम बॉबी देओल का महाकाय दैत्य अवतार।',
    characterDesc: 'रावण का छोटा भाई, जो जानता था कि श्री राम साक्षात नारायण हैं, फिर भी भ्रातृप्रेम और स्वामिधर्म में वीरगति को प्राप्त हुआ।',
    specialAuras: ['पर्वताकार शक्ति', 'सच्ची नीति चेतना', 'अडिग भ्रातृप्रेम']
  }
];

export const CastSection: React.FC = () => {
  const [activeSide, setActiveSide] = useState<'all' | 'ayodhya' | 'lanka' | 'divine'>('all');
  const [selectedCast, setSelectedCast] = useState<CastMember | null>(null);

  const filteredCast =
    activeSide === 'all' ? CAST_DATA : CAST_DATA.filter((c) => c.side === activeSide);

  return (
    <section id="cast" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#070b14] relative overflow-hidden">
      {/* Background Mandala & Glyphs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-amber-500/5 border-dashed pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-cinzel text-amber-400 uppercase tracking-widest mb-2">
            <Sparkles className="w-4 h-4" />
            <span>पात्र एवं कलाकार परिचय</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-epic text-gold-gradient tracking-wide mb-4">
            महाकाव्य के अमर चरित्र
          </h2>

          <p className="text-sm sm:text-base text-stone-300 font-devanagari max-w-2xl mx-auto">
            भारतीय सिनेमा के सबसे बड़े सुपरस्टार्स द्वारा अभिनीत ऐतिहासिक पात्र, जिनके संवाद और
            शौर्य से थिएटर्स गूंज उठेंगे।
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveSide('all')}
              className={`px-4 py-2 rounded-xl text-xs font-devanagari transition-all cursor-pointer ${
                activeSide === 'all'
                  ? 'bg-amber-500 text-black font-bold shadow-lg shadow-amber-500/20'
                  : 'bg-stone-900/80 text-stone-300 hover:text-white border border-stone-800'
              }`}
            >
              सभी पात्र ({CAST_DATA.length})
            </button>
            <button
              onClick={() => setActiveSide('ayodhya')}
              className={`px-4 py-2 rounded-xl text-xs font-devanagari transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSide === 'ayodhya'
                  ? 'bg-amber-600 text-white font-bold shadow-lg shadow-amber-600/20'
                  : 'bg-stone-900/80 text-stone-300 hover:text-white border border-stone-800'
              }`}
            >
              <Shield className="w-3.5 h-3.5" />
              <span>अयोध्या पक्ष (धर्म)</span>
            </button>
            <button
              onClick={() => setActiveSide('lanka')}
              className={`px-4 py-2 rounded-xl text-xs font-devanagari transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSide === 'lanka'
                  ? 'bg-red-700 text-white font-bold shadow-lg shadow-red-700/20'
                  : 'bg-stone-900/80 text-stone-300 hover:text-white border border-stone-800'
              }`}
            >
              <Sword className="w-3.5 h-3.5" />
              <span>लंका पक्ष (पराक्रम)</span>
            </button>
            <button
              onClick={() => setActiveSide('divine')}
              className={`px-4 py-2 rounded-xl text-xs font-devanagari transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSide === 'divine'
                  ? 'bg-orange-500 text-black font-bold shadow-lg shadow-orange-500/20'
                  : 'bg-stone-900/80 text-stone-300 hover:text-white border border-stone-800'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>दिव्य शक्तियां</span>
            </button>
          </div>
        </div>

        {/* 3D Perspective Cast Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCast.map((cast) => (
            <div
              key={cast.id}
              onClick={() => setSelectedCast(cast)}
              className="group relative bg-[#0b101c] border border-amber-500/20 hover:border-amber-400/60 rounded-2xl overflow-hidden shadow-xl hover:shadow-[0_10px_35px_rgba(245,158,11,0.2)] transition-all duration-300 cursor-pointer flex flex-col transform hover:-translate-y-1.5"
            >
              {/* Image Frame with Overlay */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-900">
                <img
                  src={cast.image}
                  alt={cast.character}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.88] contrast-[1.05]"
                  loading="lazy"
                />
                
                {/* Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b101c] via-transparent to-black/30" />

                {/* Side Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span
                    className={`text-[10px] font-semibold px-2.5 py-1 rounded-md uppercase tracking-wider backdrop-blur-md ${
                      cast.side === 'lanka'
                        ? 'bg-red-950/80 border border-red-500/50 text-red-300'
                        : cast.side === 'divine'
                        ? 'bg-orange-950/80 border border-orange-500/50 text-orange-200'
                        : 'bg-amber-950/80 border border-amber-500/50 text-amber-200'
                    }`}
                  >
                    {cast.side === 'lanka' ? 'लंका' : cast.side === 'divine' ? 'रुद्रावतार' : 'अयोध्या'}
                  </span>
                </div>

                {/* Quick Hint */}
                <div className="absolute bottom-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-amber-500 text-black text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-0.5">
                  <span>विवरण</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-amber-100 font-devanagari group-hover:text-amber-300 transition-colors">
                    {cast.character}
                  </h3>
                  <p className="text-xs text-amber-400 font-medium font-cinzel mt-0.5">
                    {cast.actor}
                  </p>
                  <p className="text-[11px] text-stone-400 font-devanagari mt-1 line-clamp-1">
                    {cast.title}
                  </p>
                </div>

                {/* Weapon Tag */}
                <div className="mt-3 pt-2.5 border-t border-stone-800/80 flex items-center gap-1.5 text-[11px] text-stone-300 font-devanagari">
                  <Sword className="w-3 h-3 text-amber-500 shrink-0" />
                  <span className="truncate">{cast.weapon}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Character Modal */}
      {selectedCast && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fade-in">
          <div className="bg-[#0e1424] border border-amber-500/40 rounded-2xl max-w-2xl w-full overflow-hidden shadow-[0_0_60px_rgba(245,158,11,0.25)] flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="relative p-6 bg-gradient-to-r from-amber-950/60 via-stone-900 to-black border-b border-amber-500/20 flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden border border-amber-500/50 shrink-0">
                  <img
                    src={selectedCast.image}
                    alt={selectedCast.character}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-epic text-gold-gradient">
                    {selectedCast.character}
                  </h3>
                  <p className="text-sm font-semibold text-amber-300 font-cinzel">
                    {selectedCast.actor}
                  </p>
                  <p className="text-xs text-stone-400 font-devanagari">
                    {selectedCast.title}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedCast(null)}
                className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-5 font-devanagari text-sm">
              {/* Shloka highlight box */}
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-center">
                <p className="text-sm sm:text-base font-semibold text-amber-200 tracking-wide">
                  {selectedCast.shloka}
                </p>
                <p className="text-xs text-stone-400 mt-1 italic">
                  {selectedCast.shlokaMeaning}
                </p>
              </div>

              {/* Character description */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-amber-400 font-cinzel mb-1">
                  पात्र का महाकाव्य महत्व (SIGNIFICANCE)
                </h4>
                <p className="text-stone-300 leading-relaxed">
                  {selectedCast.characterDesc}
                </p>
              </div>

              {/* Weapons & Astras */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-amber-400 font-cinzel mb-1">
                  दिव्यास्त्र एवं आयुध (WEAPONS & ASTRAS)
                </h4>
                <div className="p-2.5 bg-black/40 border border-stone-800 rounded-lg text-amber-200 flex items-center gap-2">
                  <Sword className="w-4 h-4 text-amber-500" />
                  <span>{selectedCast.weapon}</span>
                </div>
              </div>

              {/* Actor Trivia */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-amber-400 font-cinzel mb-1">
                  कलाकार एवं तैयारी (ACTOR PREPARATION)
                </h4>
                <p className="text-stone-300 leading-relaxed text-xs">
                  {selectedCast.actorBackground}
                </p>
              </div>

              {/* Aura Tags */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-amber-400 font-cinzel mb-2">
                  दिव्य गुण (ATTRIBUTES)
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCast.specialAuras.map((aura, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs rounded-full"
                    >
                      {aura}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
