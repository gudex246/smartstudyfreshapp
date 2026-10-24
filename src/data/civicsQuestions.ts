import { ExamQuestion } from '../types';

/**
 * Moral and Civic Education (MCiE 1012) - University Freshman Examination Questions
 * Curated from Ethiopian Higher Education Harmonized Modular Curriculum & University Exams.
 * Complete with official answer keys, pedagogical hints, and bilingual explanations with emojis (avoiding the repetitive 'amharic explanation' header).
 */
export const CIVICS_QUESTIONS: ExamQuestion[] = [
  // =========================================================================
  // Question 1: Goals of Civic Education
  // =========================================================================
  {
    id: 'mcie-2025-model-q1',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Understanding Civics: Core Purpose',
    points: 1,
    question: 'The primary educational goal of Moral and Civic Education in Ethiopian higher education institutions is to:',
    options: [
      'Encourage citizens to passively accept all state decrees without question',
      'Cultivate informed, ethically responsible, competent, and participatory democratic citizens',
      'Train students exclusively in criminal law litigation procedures',
      'Replace all cultural moral traditions with foreign constitutional ideologies'
    ],
    correctAnswer: 1,
    hint: 'Civic education equips citizens with civic knowledge, skills, and values to engage productively in democratic life.',
    explanation: 'Academic Explanation:\n1. Civic education empowers citizens with the knowledge of constitutional systems, skills of critical analysis and democratic participation, and ethical dispositions like tolerance and social responsibility.\n2. It develops active, responsible citizenship rather than passive submission.\n\n🇪🇹 የሞራልና የሲቪክስ ትምህርት ዋና ዓላማ ተማሪዎች ሕገ-መንግሥታዊ ዕውቀት፣ ምክንያታዊ የትንታኔ ክህሎትና ማኅበራዊ ኃላፊነት ኖሯቸው በዴሞክራሲያዊ አኗኗር በንቃት የሚሳተፉ ዜጎች እንዲሆኑ ማስቻል ነው። 🏛️💡\n\nVerified Answer: Option B.'
  },

  // =========================================================================
  // Question 2: Utilitarianism
  // =========================================================================
  {
    id: 'mcie-2025-model-q2',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Normative Ethics: Utilitarianism',
    points: 1,
    question: 'Which ethical philosophy, founded by Jeremy Bentham and John Stuart Mill, asserts that the moral rightness of an action is determined solely by whether it produces "the greatest happiness for the greatest number"?',
    options: [
      'Deontology',
      'Utilitarianism (Consequentialism)',
      'Virtue Ethics',
      'Ethical Relativism'
    ],
    correctAnswer: 1,
    hint: 'This consequentialist theory measures moral goodness by utility and the net amount of happiness produced.',
    explanation: 'Academic Explanation:\n1. Utilitarianism is the classic teleological/consequentialist ethical theory.\n2. Formulated by Jeremy Bentham and refined by John Stuart Mill, it evaluates actions based on their consequences: an act is right if it maximizes net utility (pleasure/happiness) and minimizes suffering for the largest number of people.\n\n🇪🇹 ዩቲሊታሪያኒዝም (Utilitarianism) በጄረሚ ቤንታምና በጆን ስቱዋርት ሚል የተመሠረተ ውጤት-ተኮር የሥነ-ምግባር ፍልስፍና ሲሆን፤ የአንድ ድርጊት ትክክለኛነት የሚለካው "ለአብዛኛው የኅብረተሰብ ክፍል ከፍተኛውን ደስታና እርካታ ማምጣት" በመቻሉ ብቻ ነው። 🌟👥\n\nVerified Answer: Option B (Utilitarianism (Consequentialism)).'
  },

  // =========================================================================
  // Question 3: Kant's Categorical Imperative
  // =========================================================================
  {
    id: 'mcie-2025-model-q3',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'hard',
    topic: 'Deontological Ethics: Categorical Imperative',
    points: 1,
    question: 'According to Immanuel Kant’s deontological philosophy, human beings must be treated "always as an end in themselves and never merely as a means to an end" because:',
    options: [
      'Human beings are rational autonomous agents with intrinsic, incalculable moral dignity',
      'Treating people nicely ensures they will repay the favor with economic profit',
      'Society will collapse into economic recession if workers are not flattered',
      'Divine commandments threaten eternal damnation for impoliteness'
    ],
    correctAnswer: 0,
    hint: 'Kant argued that things have a price, but persons have intrinsic dignity that cannot be calculated or traded.',
    explanation: 'Academic Explanation:\n1. Kant\'s second formulation of the Categorical Imperative (Formula of Humanity) establishes that rational human beings possess unconditional intrinsic dignity.\n2. Using a person purely as a tool or instrument (a mere means) for selfish economic or political goals violates their moral autonomy.\n\n🇪🇹 ኢማኑኤል ካንት የሰው ልጅ የማሰብና ራስን በምክንያታዊነት የመምራት ተፈጥሯዊ ክብር (Intrinsic dignity) ስላለው፣ ሰዎችን ለራስህ ጥቅም ወይም ለሥልጣንህ መጠቀሚያ መሣሪያ ብቻ አድርገህ መመልከት ፈጽሞ የተከለከለ ነው ብሏል። 💎⚖️\n\nVerified Answer: Option A.'
  },

  // =========================================================================
  // Question 4: Aristotle's Doctrine of the Mean
  // =========================================================================
  {
    id: 'mcie-2025-model-q4',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Virtue Ethics: The Golden Mean',
    points: 1,
    question: 'In Aristotle\'s virtue ethics, moral virtue is conceptualized as the "Golden Mean"—an intermediate state between two vicious extremes. In this framework, "Courage" is the mean between:',
    options: [
      'Arrogance and Humility',
      'Cowardice (deficiency) and Rashness/Foolhardiness (excess)',
      'Generosity and Extravagance',
      'Honesty and Deception'
    ],
    correctAnswer: 1,
    hint: 'Too little fear leads to rashness, while too much fear results in cowardice.',
    explanation: 'Academic Explanation:\n1. Aristotle defined moral virtue as a balanced disposition between two vices: a vice of deficiency (too little) and a vice of excess (too much).\n2. Courage is the Golden Mean: Cowardice is the deficiency (too much fear, fleeing duty), while Rashness/Foolhardiness is the excess (acting recklessly without rational caution).\n\n🇪🇹 አሪስቶትል በወርቅ ሚዛን (Golden Mean) መርሑ እንዳስረዳው፤ እውነተኛ ጀግንነት (Courage) የሚባለው መልካም ጠባይ በፈሪነት (Cowardice - ማነስ) እና በሞኝ እብሪተኝነት (Rashness - ማብዛት) መካከል ያለ ሚዛናዊ ጠባይ ነው። 🦁⚖️\n\nVerified Answer: Option B.'
  },

  // =========================================================================
  // Question 5: Elements of the State
  // =========================================================================
  {
    id: 'mcie-2025-model-q5',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'The State: Essential Attributes',
    points: 1,
    question: 'In political science and constitutional law, which four elements are universally recognized as indispensable components of a sovereign State?',
    options: [
      'Monarchy, Aristocracy, Democracy, and Dictatorship',
      'Permanent Population, Defined Territory, Effective Government, and Sovereignty',
      'Army, Police, Courts, and Prison system',
      'Federalism, Decentralization, Human Rights, and Free Press'
    ],
    correctAnswer: 1,
    hint: 'Recall the Montevideo Convention criteria: people, land, governing authority, and supreme power.',
    explanation: 'Academic Explanation:\n1. The four essential attributes of a state are: Permanent Population, Defined Territory, Effective Government, and Sovereignty.\n2. Sovereignty is the supreme distinguishing hallmark—without supreme internal authority and external independence, an entity is merely a province or colony, not a sovereign state.\n\n🇪🇹 የአንድ ሉዓላዊ አገር አራቱ መሠረታዊ ምሰሶዎች ቋሚ ሕዝብ (Population)፣ የተከለለ ድንበር (Territory)፣ ውጤታማ መንግሥት (Government) እና ሉዓላዊነት (Sovereignty) ናቸው። 🏛️🗺️👑\n\nVerified Answer: Option B.'
  },

  // =========================================================================
  // Question 6: Social Contract Theory: John Locke
  // =========================================================================
  {
    id: 'mcie-2025-model-q6',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Theories of State Origin: Social Contract',
    points: 1,
    question: 'Enlightenment philosopher John Locke argued that individuals leave the state of nature and form a social contract primarily to establish a government that protects their natural inalienable rights to:',
    options: [
      'Glory, Conquest, and Military Dominance',
      'Life, Liberty, and Estate (Property)',
      'Subservience, Religious Dogma, and Feudal Tenancy',
      'Absolute Equality of Wealth and Physical Power'
    ],
    correctAnswer: 1,
    hint: 'These three natural rights inspired Thomas Jefferson when drafting the American Declaration of Independence.',
    explanation: 'Academic Explanation:\n1. In his "Second Treatise of Government" (1690), John Locke asserted that in the pre-political state of nature, humans possess God-given inalienable rights to Life, Liberty, and Property (Estate).\n2. Governments are established as a fiduciary trust solely to safeguard these rights; if rulers violate them, citizens possess the legitimate right to overthrow the tyrannical government.\n\n🇪🇹 ጆን ሎክ እንዳስተማረው፤ የሰው ልጅ በተፈጥሮው የማይገሰሱ ሦስት መሠረታዊ መብቶች አሉት፤ እነሱም የመኖር መብት (Life)፣ የነፃነት መብት (Liberty) እና የሀብት ማፍራት መብት (Property) ናቸው። መንግሥት እነዚህን መብቶች ካላስከበረ ሕዝቡ መንግሥቱን የመቀየር መብት አለው። 🗽📜✨\n\nVerified Answer: Option B.'
  },

  // =========================================================================
  // Question 7: Federal vs Unitary State Structure
  // =========================================================================
  {
    id: 'mcie-2025-model-q7',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'State Systems: Federalism vs Unitary System',
    points: 1,
    question: 'What is the fundamental constitutional distinction between a Federal system of government (like Ethiopia and the USA) and a Unitary system (like France and Japan)?',
    options: [
      'Federal systems hold periodic elections, while unitary systems never permit elections',
      'In a federal system, constitutional power is legally shared and divided between central and regional governments; in a unitary system, all sovereign power is concentrated in the central government',
      'Unitary systems always have written constitutions, while federal systems rely strictly on unwritten customs',
      'Federal systems allow the president to abolish all local courts at will'
    ],
    correctAnswer: 1,
    hint: 'Look for the division and sharing of constitutional sovereignty between two tiers of government.',
    explanation: 'Academic Explanation:\n1. In a Federal system, sovereignty is constitutionally partitioned between a central federal government and autonomous regional/state governments; neither tier can unilaterally abolish the other.\n2. In a Unitary system, constitutional power resides exclusively in the central national government, which delegates administrative duties to local departments at its discretion.\n\n🇪🇹 በፌዴራላዊ ሥርዓት (እንደ ኢትዮጵያና አሜሪካ) ሥልጣን በማዕከላዊው መንግሥትና በክልል መንግሥታት መካከል በሕገ-መንግሥት ተከፋፍሎ በጋራ የሚመራ ሲሆን፤ በአሀዳዊ ሥርዓት (እንደ ፈረንሳይ) ግን ሙሉ ሥልጣን በማዕከላዊው ጠቅላይ መንግሥት እጅ ብቻ የተከማቸ ነው። 🌐🏛️\n\nVerified Answer: Option B.'
  },

  // =========================================================================
  // Question 8: Separation of Powers
  // =========================================================================
  {
    id: 'mcie-2025-model-q8',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Organs of Government: Separation of Powers',
    points: 1,
    question: 'The constitutional doctrine formulated by Montesquieu advocating that the Legislative, Executive, and Judicial powers of government must be vested in separate, independent bodies to prevent tyranny is known as:',
    options: [
      'The Spoils System',
      'Separation of Powers and Checks and Balances',
      'Democratic Centralism',
      'Executive Discretion'
    ],
    correctAnswer: 1,
    hint: 'This system divides state functions into three independent branches that check and restrain each other.',
    explanation: 'Academic Explanation:\n1. Baron de Montesquieu in "The Spirit of the Laws" (1748) argued that concentrating legislative, executive, and judicial authority in one hand produces tyranny.\n2. Separating these powers into distinct branches—combined with checks and balances—ensures that power restrains power.\n\n🇪🇹 ሞንተስኪዩ ያስቀመጠው የሥልጣን ክፍፍል (Separation of Powers) መርሕ አንዱ የመንግሥት አካል አምባገነን እንዳይሆን ሥልጣኑ ለሕግ አውጪ፣ ለሕግ አስፈጻሚና ለሕግ ተርጓሚ ተከፍሎ እርስ በርስ የሚቆጣጠሩበት ሥርዓት ነው። ⚖️🏛️\n\nVerified Answer: Option B.'
  },

  // =========================================================================
  // Question 9: Acquisition of Citizenship
  // =========================================================================
  {
    id: 'mcie-2025-model-q9',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Citizenship Law: Modes of Acquisition',
    points: 1,
    question: 'Under Article 6 of the 1995 Constitution of Ethiopia, an infant acquires Ethiopian citizenship at birth if either parent is an Ethiopian national, regardless of the child\'s country of birth. This legal principle is known as:',
    options: [
      'Jus Soli (Right of Soil)',
      'Jus Sanguinis (Right of Blood)',
      'Naturalization by Presidential decree',
      'Honorary citizenship'
    ],
    correctAnswer: 1,
    hint: 'Sanguis is Latin for blood; citizenship is inherited genealogically through parental nationality.',
    explanation: 'Academic Explanation:\n1. Jus Sanguinis ("right of blood") confers citizenship based on parental descent/nationality, regardless of where the child is born.\n2. Jus Soli ("right of soil") confers citizenship based strictly on physical birthplace within state territory.\n3. The Ethiopian Nationality Proclamation and FDRE Constitution (Article 6) are anchored in Jus Sanguinis.\n\n🇪🇹 ጁስ ሳንጒኒስ (Jus Sanguinis - በደም የሚገኝ ዜግነት)፡ በኢትዮጵያ ሕገ-መንግሥት አንቀጽ 6 መሠረት አባቱ ወይም እናቱ ኢትዮጵያዊ የሆነ ልጅ በየትም አገር ቢወለድ ኢትዮጵያዊ ዜግነት ያገኛል። 🩸🇪🇹\n\nVerified Answer: Option B (Jus Sanguinis (Right of Blood)).'
  },

  // =========================================================================
  // Question 10: Constitutional Supremacy
  // =========================================================================
  {
    id: 'mcie-2025-model-q10',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Constitutional Law: Supremacy Clause',
    points: 1,
    question: 'According to Article 9 of the 1995 FDRE Constitution (Supremacy of the Constitution), what is the legal consequence if an ordinary parliamentary statute or customary practice contradicts a constitutional provision?',
    options: [
      'The customary practice supersedes the constitution automatically',
      'The contradicting statute or customary practice shall be of no effect (null and void)',
      'The prime minister amends the constitution informally without parliament',
      'The conflicting law is valid for five years before expiry'
    ],
    correctAnswer: 1,
    hint: 'The constitution is the supreme law of the land; any conflicting law is void.',
    explanation: 'Academic Explanation:\n1. Article 9(1) of the 1995 FDRE Constitution states: "The Constitution is the supreme law of the land. Any law, customary practice or a decision of an organ of state or a public official which contravenes this Constitution shall be of no effect."\n\n🇪🇹 በሕገ-መንግሥቱ አንቀጽ 9 መሠረት ሕገ-መንግሥት የሕጎች ሁሉ የበላይ ነው፤ ከሕገ-መንግሥቱ ጋር የሚቃረን ማንኛውም ሕግ፣ ልማዳዊ አሠራር ወይም የመንግሥት ውሳኔ ዋጋ ቢስና ውድቅ (Null and void) ይሆናል። 📜👑⚖️\n\nVerified Answer: Option B.'
  },

  // =========================================================================
  // Question 11: Ethiopian Constitutional History: 1931 Constitution
  // =========================================================================
  {
    id: 'mcie-2025-model-q11',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Constitutional History of Ethiopia: 1931 Document',
    points: 1,
    question: 'What was the primary political motivation of Emperor Haile Selassie I in promulgating Ethiopia’s first written constitution in July 1931?',
    options: [
      'To abolish the monarchy and establish a multi-party socialist republic',
      'To centralize imperial political authority, curtail regional hereditary lords, and project modern statehood internationally',
      'To divide Ethiopia into autonomous linguistic regional republics',
      'To transfer all imperial landholdings directly to peasant tenant farmers'
    ],
    correctAnswer: 1,
    hint: 'The Emperor sought to consolidate centralized power in Addis Ababa while demonstrating modernity to the League of Nations.',
    explanation: 'Academic Explanation:\n1. Promulgated on July 16, 1931, Ethiopia\'s first written constitution consolidated imperial centralization.\n2. It curbed the hereditary power of regional nobility (Rases), established a bicameral consultative parliament under absolute imperial authority, and projected modern statehood to European powers.\n\n🇪🇹 ንጉሠ ነገሥት ኃይለ ሥላሴ በ1923 ዓ.ም የመጀመሪያውን የጽሑፍ ሕገ-መንግሥት ያወጡበት ዋና ዓላማ የአካባቢ መሳፍንትን ሥልጣን ቀንሶ ሥልጣኑን በማዕከላዊ መንግሥት እጅ ማሰባሰብና ለዓለም አቀፉ ማኅበረሰብ ዘመናዊ መንግሥት መሆናቸውን ማሳየት ነበር። 🏛️👑\n\nVerified Answer: Option B.'
  },

  // =========================================================================
  // Question 12: 1995 FDRE Constitution: Article 39
  // =========================================================================
  {
    id: 'mcie-2025-model-q12',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: '1995 FDRE Constitution: Self-Determination',
    points: 1,
    question: 'Under Article 39 of the 1995 FDRE Constitution, every Nation, Nationality, and People in Ethiopia is granted the unconditional constitutional right to:',
    options: [
      'Veto all national budget allocations unilaterally',
      'Self-determination, including the right to secession',
      'Maintain an independent private standing army with foreign military alliances',
      'Issue sovereign regional currency notes'
    ],
    correctAnswer: 1,
    hint: 'This landmark clause guarantees self-determination up to and including secession.',
    explanation: 'Academic Explanation:\n1. Article 39(1) of the 1995 FDRE Constitution decrees: "Every Nation, Nationality and People in Ethiopia has an unconditional right to self-determination, including the right to secession."\n2. It provides specific procedural steps (two-thirds regional council vote followed by a referendum supervised by the federal electoral board) for implementing this right.\n\n🇪🇹 በ1987ቱ የኢፌዲሪ ሕገ-መንግሥት አንቀጽ 39 መሠረት ማንኛውም የኢትዮጵያ ብሔር፣ ብሔረሰብና ሕዝብ እስከ መገንጠል ድረስ ያለውን የራስን ዕድል በራስ የመወሰን ያልተገደበ ሕገ-መንግሥታዊ መብት አለው። 🇪🇹📜\n\nVerified Answer: Option B.'
  },

  // =========================================================================
  // Question 13: Constitutional Interpretation in Ethiopia
  // =========================================================================
  {
    id: 'mcie-2025-model-q13',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'hard',
    topic: 'FDRE Constitution: Constitutional Interpretation',
    points: 1,
    question: 'Unlike the United States where the Supreme Court interprets the constitution (judicial review), under Articles 62 and 83 of the 1995 FDRE Constitution, the ultimate authority to interpret the constitution is vested in the:',
    options: [
      'Federal Supreme Court Cassation Division',
      'Council of Constitutional Inquiry exclusively',
      'House of Federation (HoF)',
      'Office of the Prime Minister'
    ],
    correctAnswer: 2,
    hint: 'This political body represents the Nations, Nationalities, and Peoples of Ethiopia, assisted by the Council of Constitutional Inquiry.',
    explanation: 'Academic Explanation:\n1. Under Article 62(1) and Article 83(1) of the FDRE Constitution, the House of Federation (HoF) has the constitutional power to interpret the Constitution.\n2. The Council of Constitutional Inquiry (CCI) investigates constitutional disputes and submits recommendations to the HoF, but final authority resides with the HoF.\n\n🇪🇹 በአሜሪካ ሕገ-መንግሥትን የመተርጎም ሥልጣን የጠቅላይ ፍርድ ቤት ሲሆን፤ በኢትዮጵያ ግን በሕገ-መንግሥቱ አንቀጽ 62 እና 83 መሠረት ሕገ-መንግሥቱን የመተርጎም የመጨረሻው የበላይ ሥልጣን የተሰጠው ለፌዴሬሽን ምክር ቤት (House of Federation) ነው። 🏛️⚖️\n\nVerified Answer: Option C (House of Federation (HoF)).'
  },

  // =========================================================================
  // Question 14: A.V. Dicey's Rule of Law
  // =========================================================================
  {
    id: 'mcie-2025-model-q14',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Rule of Law: Dicey\'s Classical Principles',
    points: 1,
    question: 'Which of the following is NOT one of the three foundational tenets of the "Rule of Law" formulated by British constitutional scholar A.V. Dicey in 1885?',
    options: [
      'Absolute supremacy of regular law over arbitrary governmental power',
      'Equality before the law, with all citizens subject to ordinary courts',
      'Universal executive immunity, allowing prime ministers to rule without judicial oversight',
      'The constitution is the consequence of the inherent rights of individuals enforced by courts'
    ],
    correctAnswer: 2,
    hint: 'Rule of Law rejects arbitrary power and executive immunity; everyone is subject to law.',
    explanation: 'Academic Explanation:\n1. A.V. Dicey\'s three pillars of the Rule of Law are: 1) Absolute supremacy of regular law over arbitrary power; 2) Equality before the law for all classes; and 3) Constitutional rights protected by ordinary courts.\n2. Universal executive immunity is the antithesis of the Rule of Law.\n\n🇪🇹 ኤ.ቪ. ዳይሲ (A.V. Dicey) ያስቀመጣቸው ሦስቱ የሕግ የበላይነት ምሰሶዎች፡ የሕግ ፍጹም የበላይነት፣ በሕግ ፊት ሁሉም ሰው እኩል መሆን፣ እና የዜጎች መብት በፍርድ ቤት መጠበቅ ናቸው። መሪዎች ከሕግ በላይ ናቸው የሚለው አምባገነናዊ አስተሳሰብ ከሕግ የበላይነት ጋር ፈጽሞ ይቃረናል። ⚖️🚫\n\nVerified Answer: Option C.'
  },

  // =========================================================================
  // Question 15: Principles of Democracy: Pluralism
  // =========================================================================
  {
    id: 'mcie-2025-model-q15',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Core Democratic Principles: Pluralism',
    points: 1,
    question: 'The democratic principle of "Political Pluralism" refers to:',
    options: [
      'The peaceful coexistence and competition of multiple political parties, civil organizations, and diverse viewpoints',
      'A mandatory one-party state enforcing ideological conformity',
      'The concentration of all media outlets under the state ministry of information',
      'The rotation of royal dynasties every ten years'
    ],
    correctAnswer: 0,
    hint: 'Plural means multiple; democracy thrives on diverse opinions and competing political organizations.',
    explanation: 'Academic Explanation:\n1. Political pluralism is an essential hallmark of genuine democracy.\n2. It guarantees the legal right of diverse political parties, independent trade unions, civic associations, and interest groups to freely organize and peacefully compete for political office.\n\n🇪🇹 የፖለቲካ ብዙኃንነት (Political Pluralism) ማለት የተለያዩ ተፎካካሪ የፖለቲካ ፓርቲዎች፣ የሲቪክ ማኅበራትና የተለያዩ የሐሳብ አመለካከቶች በነፃነት የሚንቀሳቀሱበትና የሚወዳደሩበት ዴሞክራሲያዊ ሥርዓት ነው። 🌈🏛️🤝\n\nVerified Answer: Option A.'
  },

  // =========================================================================
  // Question 16: Good Governance: Transparency
  // =========================================================================
  {
    id: 'mcie-2025-model-q16',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Good Governance: Transparency',
    points: 1,
    question: 'When government institutions disclose public budgets, procurement contracts, and official decision-making processes openly to citizens and the press, they are upholding the governance pillar of:',
    options: [
      'Bureaucratic Secrecy',
      'Transparency',
      'Patronage',
      'Centralism'
    ],
    correctAnswer: 1,
    hint: 'This pillar ensures that information is freely accessible and visible to all citizens.',
    explanation: 'Academic Explanation:\n1. Transparency means that public decisions are taken and enforced in compliance with open rules and procedures.\n2. Information regarding state contracts, tax revenues, and policy formulation is freely accessible and directly understandable to all citizens and independent media.\n\n🇪🇹 ግልጽነት (Transparency) ማለት የመንግሥት ቢሮዎች የሕዝብን በጀት፣ የጨረታ ውሎችንና የውሳኔ አሰጣጥ ሂደቶችን ለሕዝብና ለጋዜጠኞች በግልጽ ክፍት በማድረግ ሌብነትንና ሙስናን የመከላከል መርሕ ነው። 🔍🏢💡\n\nVerified Answer: Option B (Transparency).'
  },

  // =========================================================================
  // Question 17: Good Governance: Accountability
  // =========================================================================
  {
    id: 'mcie-2025-model-q17',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Good Governance: Accountability',
    points: 1,
    question: 'The master pillar of Good Governance requiring elected representatives, civil servants, and judicial officers to answer for their conduct and be subject to legal sanctions for wrongdoing is:',
    options: [
      'Accountability',
      'Nepotism',
      'Administrative Discretion',
      'Autocracy'
    ],
    correctAnswer: 0,
    hint: 'Those who exercise public authority must account to the public for their decisions.',
    explanation: 'Academic Explanation:\n1. Accountability is a cornerstone of good governance.\n2. Government agencies, private sector entities, and civil society actors must be answerable to the public and to institutional stakeholders who will be affected by their decisions and actions.\n\n🇪🇹 ተጠያቂነት (Accountability) ማለት ማንኛውም የመንግሥት ባለሥልጣን፣ ዳኛ ወይም ሠራተኛ ለሚወስነው ውሳኔ፣ ለሚሠራው ሥራና ለሕዝብ ሀብት አያያዝ ለሕዝቡና ለሕግ ተጠያቂ ሆኖ ጥፋት ሲያጠፋ በሕግ የሚቀጣበት አሠራር ነው። 📋⚖️🚨\n\nVerified Answer: Option A (Accountability).'
  },

  // =========================================================================
  // Question 18: Three Generations of Human Rights: Karel Vasak
  // =========================================================================
  {
    id: 'mcie-2025-model-q18',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'hard',
    topic: 'Human Rights Jurisprudence: Three Generations',
    points: 1,
    question: 'In Karel Vasak’s classification of human rights, "Second-Generation Human Rights" (codified in the ICESCR) focus on:',
    options: [
      'Civil liberties protecting the individual against arbitrary arrest and torture (Liberty)',
      'Economic, social, and cultural rights requiring proactive state investment in food, housing, healthcare, and education (Equality)',
      'Collective solidarity rights to peace, development, and a healthy environment (Fraternity)',
      'Intellectual property rights for software algorithms exclusively'
    ],
    correctAnswer: 1,
    hint: 'First generation is Liberty (Civil/Political), Second generation is Equality (Economic/Social/Cultural), Third generation is Fraternity (Solidarity).',
    explanation: 'Academic Explanation:\n1. First-generation rights are civil and political rights (negative rights protecting liberty).\n2. Second-generation rights are economic, social, and cultural rights (positive rights ensuring equality and dignified living standards like education, healthcare, and food).\n3. Third-generation rights are solidarity and collective rights (fraternity, environment, development).\n\n🇪🇹 ሁለተኛው የሰብአዊ መብት ትውልድ (Second-Generation Rights) መንግሥት በጀት መድቦ ለዜጎች ሊያሟላቸው የሚገቡትን የኢኮኖሚ፣ ማኅበራዊና ባሕላዊ መብቶች (ምግብ፣ መጠለያ፣ ነፃ ትምህርትና ሕክምና) ያጠቃልላል። 🏥🌾📚\n\nVerified Answer: Option B.'
  },

  // =========================================================================
  // Question 19: Third-Generation Human Rights
  // =========================================================================
  {
    id: 'mcie-2025-model-q19',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Human Rights: Solidarity and Collective Rights',
    points: 1,
    question: 'Which of the following is categorized as a "Third-Generation" or "Solidarity" Human Right?',
    options: [
      'The right to a fair trial by an impartial tribunal',
      'The right to freedom of religious conscience',
      'The right of peoples to self-determination, peace, development, and a clean environment',
      'The right to private domestic voting secrecy'
    ],
    correctAnswer: 2,
    hint: 'These collective rights belong to whole communities and future generations rather than isolated individuals.',
    explanation: 'Academic Explanation:\n1. Third-generation solidarity rights encompass collective entitlements of entire human communities.\n2. They include the right to peace, economic development, a clean and ecologically sound environment, and self-determination (codified in the African Charter / ACHPR).\n\n🇪🇹 ሦስተኛው የሰብአዊ መብቶች ትውልድ (Solidarity / Collective Rights) ለመላው ማኅበረሰብ በጋራ የሚሰጡ መብቶች ናቸው፤ ለምሳሌ የሰላም መብት፣ የልማት መብት፣ ንጹሕ ያልተበከለ አካባቢ የማግኘት መብትና የራስን ዕድል በራስ የመወሰን መብት። 🌍🕊️🌱\n\nVerified Answer: Option C.'
  },

  // =========================================================================
  // Question 20: Human Rights Interpretation: FDRE Constitution Art. 13(2)
  // =========================================================================
  {
    id: 'mcie-2025-model-q20',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'hard',
    topic: 'FDRE Constitution: Article 13(2) Interpretation',
    points: 1,
    question: 'Article 13(2) of the 1995 FDRE Constitution contains a vital interpretative clause mandating that all fundamental human and democratic rights in Chapter Three must be interpreted in conformity with:',
    options: [
      'The political manifestos of the ruling party of the day',
      'The Universal Declaration of Human Rights (UDHR) and international human rights treaties ratified by Ethiopia',
      'The traditional commercial decrees of the 19th-century regional kings',
      'Administrative directives issued by regional police commissioners'
    ],
    correctAnswer: 1,
    hint: 'Look for the international human rights instruments ratified by Ethiopia, including the UDHR.',
    explanation: 'Academic Explanation:\n1. Article 13(2) of the FDRE Constitution explicitly commands: "The fundamental rights and freedoms specified in this Chapter shall be interpreted in a manner conforming to the principles of the Universal Declaration of Human Rights, International Covenants on Human Rights and International instruments adopted by Ethiopia."\n\n🇪🇹 በኢፌዲሪ ሕገ-መንግሥት አንቀጽ 13(2) መሠረት በምዕራፍ ሦስት የተዘረዘሩት ሰብአዊና ዴሞክራሲያዊ መብቶች በሙሉ ከተባበሩት መንግሥታት ዓለም አቀፍ የሰብአዊ መብቶች ድንጋጌ (UDHR) እና ኢትዮጵያ ካጸደቀቻቸው ዓለም አቀፍ ስምምነቶች ጋር በተጣጣመ መንገድ መተርጎም አለባቸው። 📜🇪🇹🌍\n\nVerified Answer: Option B.'
  },

  // =========================================================================
  // Question 21: Johan Galtung: Negative vs Positive Peace
  // =========================================================================
  {
    id: 'mcie-2025-model-q21',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Peace Studies: Negative vs Positive Peace',
    points: 1,
    question: 'In Johan Galtung’s peace research framework, "Positive Peace" is distinguished from "Negative Peace" because positive peace requires:',
    options: [
      'Merely silencing guns through a fragile temporary ceasefire',
      'The presence of social justice, equal economic opportunity, human dignity, and the eradication of structural violence',
      'Deploying heavily armed foreign peacekeepers indefinitely in every city',
      'The total ban on all public protests and labor strikes'
    ],
    correctAnswer: 1,
    hint: 'Negative peace is the absence of direct war; positive peace is the presence of justice and equity.',
    explanation: 'Academic Explanation:\n1. Johan Galtung defined Negative Peace as the mere absence of direct physical violence or war.\n2. Positive Peace requires the presence of social justice, equity, transparent governance, and the dismantling of structural violence (poverty, institutional inequality, oppression).\n\n🇪🇹 ዮሀን ጋልቱንግ (Johan Galtung) እንዳስረዳው፤ አሉታዊ ሰላም (Negative peace) የጦርነትና የተኩስ አለመኖር ብቻ ሲሆን፤ እውነተኛ አዎንታዊ ሰላም (Positive peace) ግን ፍትሕ፣ እኩልነትና ሰብአዊ ክብር የተረጋገጠበት፣ ድህነትና ጭቆና የተወገዱበት ዘላቂ ሰላም ነው። 🕊️🌾✨\n\nVerified Answer: Option B.'
  },

  // =========================================================================
  // Question 22: Conflict Transformation vs Conflict Management
  // =========================================================================
  {
    id: 'mcie-2025-model-q22',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Conflict Transformation: John Paul Lederach',
    points: 1,
    question: 'How does "Conflict Transformation" (advocated by John Paul Lederach) differ fundamentally from traditional "Conflict Management"?',
    options: [
      'Conflict transformation seeks to suppress all dissent through overwhelming military force',
      'Conflict transformation addresses and transforms the root structural injustices, traumatic relationships, and systemic causes generating the conflict to build durable peace',
      'Conflict management completely eliminates the need for any negotiations',
      'Conflict transformation applies only to international interstate wars between nuclear superpowers'
    ],
    correctAnswer: 1,
    hint: 'Transformation goes beyond managing immediate symptoms to heal deep social structures and relationships.',
    explanation: 'Academic Explanation:\n1. Conflict management aims to control or contain direct physical fighting in the short term.\n2. Conflict transformation goes deeper: it addresses the root structural inequalities, psychological traumas, and broken interpersonal relationships that caused the conflict, converting hostile dynamics into constructive relationships.\n\n🇪🇹 ግጭትን ወደ ሰላም መለወጥ (Conflict Transformation) ግጭቱን ለጊዜው ማብረድ ብቻ ሳይሆን፤ የጥላቻውን ሥረ-መሠረት ነቅሎ በማውጣት፣ ማኅበራዊ ኢፍትሐዊነትን በማስተካከልና ግንኙነቶችን በማከም ዘላቂ እርቅን ይፈጥራል። 🕊️🌱❤️\n\nVerified Answer: Option B.'
  },

  // =========================================================================
  // Question 23: Professional Ethics: Whistleblowing
  // =========================================================================
  {
    id: 'mcie-2025-model-q23',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Professional Ethics: Integrity & Public Interest',
    points: 1,
    question: 'When an engineer or civil servant discovers that their agency is illegally dumping toxic industrial chemicals into a municipal drinking water river and exposes this criminal conduct to public oversight bodies, they are engaging in:',
    options: [
      'Corporate Sabotage',
      'Whistleblowing (Ethical Disclosure)',
      'Embezzlement',
      'Professional Defamation'
    ],
    correctAnswer: 1,
    hint: 'This ethical act exposes illegal, dangerous, or corrupt activities to protect public health and safety.',
    explanation: 'Academic Explanation:\n1. Whistleblowing is the ethical disclosure by an employee of organizational malpractice, corruption, illegal conduct, or substantial dangers to public health and safety to competent authorities or the public.\n2. It prioritizes public well-being over blind corporate loyalty.\n\n🇪🇹 ጥቆማ መስጠት (Whistleblowing) ማለት አንድ ሠራተኛ በመስሪያ ቤቱ ውስጥ የሕዝብን ጤና፣ ደህንነት ወይም የአገርን ሀብት አደጋ ላይ የሚጥል ሕገ-ወጥ ሌብነት ሲፈጸም ለሕግ አካላትና ለሕዝብ የሚያጋልጥበት ከፍተኛ የሞራል ተግባር ነው። 📢🚨🛡️\n\nVerified Answer: Option B (Whistleblowing (Ethical Disclosure)).'
  },

  // =========================================================================
  // Question 24: Direct vs Representative Democracy
  // =========================================================================
  {
    id: 'mcie-2025-model-q24',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Democratic Governance: Direct Democracy',
    points: 1,
    question: 'Which historical system of democracy required eligible citizens to gather in person in a central public assembly (the Pnyx) to debate and vote directly on all public legislation, treaties, and judicial verdicts without elected intermediaries?',
    options: [
      'Classical Athenian Direct Democracy (5th Century BCE)',
      'The Roman Imperial Senate',
      'The British Westminster Parliamentary System',
      'The American Electoral College'
    ],
    correctAnswer: 0,
    hint: 'Practiced in ancient Greece where all citizens voted directly on laws.',
    explanation: 'Academic Explanation:\n1. Classical Athens in the 5th century BCE practiced Direct Democracy.\n2. Citizens assembled directly in the Ecclesia to debate policy, pass legislation, vote on war, and cast ostracism votes without electing professional politicians.\n\n🇪🇹 በጥንቷ አቴንስ የነበረው ቀጥተኛ ዴሞክራሲ (Direct Democracy) ዜጎች ያለ ምንም ወኪል ራሳቸው በአካል ተሰብስበው በሕግና በውሳኔዎች ላይ ድምፅ የሚሰጡበት ጥንታዊ ሥርዓት ነበር። 🏛️🙋‍♂️📜\n\nVerified Answer: Option A.'
  },

  // =========================================================================
  // Question 25: Democratic Development: Amartya Sen
  // =========================================================================
  {
    id: 'mcie-2025-model-q25',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'hard',
    topic: 'Democracy and Development: Famine Prevention',
    points: 1,
    question: 'Nobel Memorial Prize-winning economist Amartya Sen demonstrated in his landmark thesis that "no substantial famine has ever occurred in any independent, democratic country with an uncensored press" because:',
    options: [
      'Democratic countries are blessed with perpetual rainfall and never suffer climate droughts',
      'Democratic leaders face regular election scrutiny and media criticism, compelling them to react promptly to agricultural crop failures and prevent mass starvation',
      'Developing democratic nations always import all their food grains free of charge from foreign charities',
      'Famines are caused exclusively by global financial stock market crashes'
    ],
    correctAnswer: 1,
    hint: 'Democratic accountability and free press create political incentives that force governments to distribute emergency food relief.',
    explanation: 'Academic Explanation:\n1. Amartya Sen showed that famines are crises of food distribution, entitlement, and political accountability, not mere shortages of rainfall.\n2. In a democracy with periodic elections, opposition parties, and an uncensored press, a government cannot hide rural food shortages without risking political defeat, forcing it to act rapidly.\n\n🇪🇹 የአማርትያ ሴን የኖቤል ተሸላሚ ጥናት፡ ነፃ ፕሬስና ዴሞክራሲ ባለበት አገር ድርቅ ቢከሰትም እንኳ ረሃብ ሆኖ ሰዎችን አይገድልም! ምክንያቱም መንግሥት በምርጫ እንዳይወድቅና በጋዜጠኞች እንዳይጋለጥ በመፍራት ፈጥኖ ለሕዝቡ ምግብ ያደርሳል። 🌾📰✨\n\nVerified Answer: Option B.'
  }
];
