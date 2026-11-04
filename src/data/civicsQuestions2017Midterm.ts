import { ExamQuestion } from '../types';

/**
 * Moral and Civic Education (MCiE 1012)
 * Midterm Examination 2017 E.C.
 * Attachment: Moral_and_Civic_Education_Mid_Exam_Questions_f06a49db.pdf
 * Solution Prepared by Smart Study Tutorial
 * All 30 Questions with verified answers and explanations in 3 languages:
 * 1. English (🇬🇧)
 * 2. Amharic / አማርኛ (🇪🇹)
 * 3. Afaan Oromoo (🌳)
 */
export const CIVICS_2017_MIDTERM_QUESTIONS: ExamQuestion[] = [
  // Question 1
  {
    id: 'mcie-2017-mid-q1',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2017 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Deontological Ethics: Core Foundations',
    points: 1,
    question: 'According to deontological ethics, all are CORRECT regarding what makes an action right or wrong, EXCEPT:',
    options: [
      'The intentions and duties behind the action',
      'Autonomy',
      'The laws of nature',
      'The happiness you produce'
    ],
    correctAnswer: 3,
    hint: 'Deontology judges actions by duty and moral rules, while measuring "happiness produced" is utilitarian/consequentialist.',
    explanation: 'Deontological ethics (championed by Immanuel Kant) evaluates morality strictly on the basis of duty, rational rules, good will/intention, and moral autonomy—completely rejecting the idea that consequences or "the happiness you produce" determine an action\'s moral rightness (which is the hallmark of utilitarianism).',
    explanationAmharic: 'የዲዮንቶሎጂ (የግዴታ) ሥነ-ምግባር ፍልስፍና ድርጊቶችን የሚመዝነው በግዴታ (duty)፣ በቅን ልቦና/አላማ (intentions) እና በሞራል ነፃነት (autonomy) ላይ ተመስርቶ እንጂ አንድ ድርጊት በሚያመጣው "ደስታ ወይም ውጤት" (the happiness you produce) አይደለም። ደስታን ማምረት የዩቲሊታሪያኒዝም መለኪያ ነው። ስለዚህ የተሳሳተው D ነው።',
    explanationAfaanOromo: 'Tiyooriin Diyeentooloojii (Deontology) gochi tokko sirrii ykn dogoggora ta\'uu isaa kan madaalu dirqama (duty), yaada keessoo (intention) fi bilisummaa sammuu (autonomy) irratti hundaa\'eeti malee "gammachuu gochi sun uumu" (happiness produced) irratti miti. Gammachuun madaallii Yuutilitaariyaanizimiiti. Kanaaf kan sirrii hin taane D dha.'
  },

  // Question 2
  {
    id: 'mcie-2017-mid-q2',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2017 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Branches of Ethics: Meta-ethics',
    points: 1,
    question: 'Which of the following best describes the ethical focus of Meta-ethics?',
    options: [
      'Creating universal moral rules',
      'Determining the most virtuous action',
      'Focusing on consequences to maximize societal benefit',
      'Evaluating moral judgments\' truth and origins'
    ],
    correctAnswer: 3,
    hint: 'Meta-ethics steps back to examine the foundational nature, truth-value, meaning, and psychological origins of moral concepts.',
    explanation: 'Meta-ethics is the non-normative philosophical branch that examines the foundational nature of moral concepts themselves—investigating whether moral judgments can be objectively true or false, where ethical values originate, and the linguistic meaning of words like "good", "right", or "duty".',
    explanationAmharic: 'ሜታ-ኤቲክስ (Meta-ethics) የሥነ-ምግባር ጽንሰ-ሐሳቦችን መነሻ፣ የቋንቋ ትርጉምና የሞራል ፍርዶች እውነት ወይም ሐሰት መሆናቸውን የሚመረምር የፍልስፍና ዘርፍ ነው (Evaluating moral judgments\' truth and origins)። ስለዚህ ትክክለኛው መልስ D ነው።',
    explanationAfaanOromo: 'Meetaa-eetiksiin (Meta-ethics) damee falaasama safuu kan bu\'uura, madda, hiika afaanii fi dhugummaa murtiiwwan safuu (evaluating moral judgments\' truth and origins) qoratudha. Kanaaf deebiin sirriin D dha.'
  },

  // Question 3
  {
    id: 'mcie-2017-mid-q3',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2017 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Consequentialism: Hedonism and Non-Hedonism',
    points: 1,
    question: 'Which of the following BEST reflects the central principle of hedonism and non-hedonism ethics?',
    options: [
      'The action itself holds intrinsic value regardless of outcomes.',
      'The consequences of an action determine its moral worth.',
      'The morality of an action is determined solely by the agent\'s intention.',
      'Actions are judged by their adherence to a set of pre-established rules.'
    ],
    correctAnswer: 1,
    hint: 'Both hedonistic teleology (seeking pleasure) and non-hedonistic teleology (seeking knowledge/beauty) judge actions strictly by their consequences.',
    explanation: 'Both hedonistic and non-hedonistic normative ethics fall under teleological (consequentialist) ethics. Their shared foundational premise is that the consequences or outcomes of an action determine whether it is morally right or wrong (hedonism defines good outcomes in terms of pleasure, while non-hedonism defines good outcomes in terms of non-hedonic intrinsic goods like knowledge, freedom, or justice).',
    explanationAmharic: 'ትክክለኛው መልስ B ነው። ሄዶኒዝምም (ደስታን እንደ ብቸኛ መልካም ነገር የሚቆጥር) ሆነ ኖን-ሄዶኒዝም (እውቀትንና ፍትህን የመሳሰሉ እሴቶችን መልካም የሚል) ሁለቱም የውጤት-ተኮር (consequentialist) ሥነ-ምግባር ዘርፎች ስለሆኑ የአንድን ድርጊት ትክክለኛነት የሚለኩት ድርጊቱ በሚያመጣው ውጤት (consequences) ነው።',
    explanationAfaanOromo: 'Deebiin sirriin B dha. Hidoonizimii fi nooni-hidoonizimiin lamaanuu tiyoorii bu\'aa-qabeessummaa (consequentialism) keessatti waan ramadamaniif, gatiin safuu gocha tokkoo bu\'aa gochi sun fiduun (consequences of an action determine its moral worth) madaalama.'
  },

  // Question 4
  {
    id: 'mcie-2017-mid-q4',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2017 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Ethical Theories: Egoism Theory',
    points: 1,
    question: 'Identify the wrong statement from the provided alternatives regarding egoism theory:',
    options: [
      'If you don’t take advantage of a situation, you are foolish.',
      'If I mistreat others, they mistreat me, so I resolve to behave myself.',
      'Egoism do not recommend helping others',
      'Do unto others as you would have them do unto you.'
    ],
    correctAnswer: 2,
    hint: 'Egoism DOES recommend helping others whenever helping others advances one\'s own enlightened long-term self-interest.',
    explanation: 'Statement C is false regarding egoism. Ethical egoism does NOT forbid or universally oppose helping others; rather, it often actively recommends helping others when doing so promotes one\'s own enlightened, long-term self-interest, reputation, or security (e.g., building reciprocal goodwill). Hence, claiming egoism never recommends helping others is incorrect.',
    explanationAmharic: 'ስለ ኢጎይዝም (Egoism) የተሳሳተው አባባል C (Egoism do not recommend helping others) ነው። ምክንያቱም ኢጎይዝም ሌሎችን መርዳት ለግል ጥቅማችን፣ ለስም ወይም ለደህንነታችን የሚጠቅም በሚሆንበት ጊዜ ሌሎችን እንድንረዳ ይመክራል (enlightened self-interest)። ስለዚህ ሌሎችን መርዳትን በጭራሽ አይመክርም የሚለው የተሳሳተ ነው።',
    explanationAfaanOromo: 'Igooyizimii ilaalchisee himni dogoggoraa C dha. Sababni isaas Igooyizimiin yeroo nama gargaaruun sun faayidaa fi nageenya dhuunfaa keenyaaf malu yoo ta\'e nama gargaaruu ni deggera (enlightened self-interest). Kanaaf nama gargaaruu hin gorsu jechuun dogoggora.'
  },

  // Question 5
  {
    id: 'mcie-2017-mid-q5',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2017 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'W.D. Ross: Prima Facie Duties',
    points: 1,
    question: 'In Ross\'s framework, which of the following is considered a prima facie duty that obligates one to repair harm caused by a previous action?',
    options: [
      'Duty of Gratitude',
      'Duty of Non-maleficence',
      'Duty of Fidelity',
      'Duty of Reparation'
    ],
    correctAnswer: 3,
    hint: 'The duty to make amends or compensate for past wrongful injuries is reparation.',
    explanation: 'In W.D. Ross\'s intuitionist deontology, the "Duty of Reparation" is the prima facie obligation to compensate or make amends to another person for a previous wrongful act or injury one committed against them.',
    explanationAmharic: 'በዊልያም ዴቪድ ሮስ (W.D. Ross) የፕሪማ ፋሲ ግዴታዎች ሥርዓት ውስጥ ቀደም ሲል ለተፈጠረ ጥፋት ወይም ጉዳት ካሣ መክፈል ወይም ጥፋትን ማስተካከል "የካሣ/የማካካስ ግዴታ" (Duty of Reparation) ይባላል። ስለዚህ መልሱ D ነው።',
    explanationAfaanOromo: 'Akka sirna W.D. Ross tti, dirqamni miidhaa kanaan dura gocha ofiitiin namarra ga\'e beekanii beenyaa kaffaluu fi sirreessuu \'Dirqama Beenyaa\' (Duty of Reparation) jedhama. Deebiin sirriin D dha.'
  },

  // Question 6
  {
    id: 'mcie-2017-mid-q6',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2017 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Nature of Ethics vs Morality',
    points: 1,
    question: 'Which of the following is NOT a correct definition or feature of ethics?',
    options: [
      'The code of a given group serving as a guide to right or wrong',
      'Ethics evaluates human actions based on standards of good and evil',
      'Ethics helps people examine values like honesty, justice, and equality',
      'Ethics is the study of what is morally right and wrong'
    ],
    correctAnswer: 0,
    hint: '"The code or customs of a given specific group" defines morality/mores, whereas ethics is the philosophical, critical investigation of morality.',
    explanation: 'Option A defines "morality" (the specific cultural code, customs, and mores adopted by a group or society). Ethics (moral philosophy) is the systematic, critical philosophical discipline that analyzes, studies, and evaluates moral principles, standards of right and wrong, and human values.',
    explanationAmharic: 'ትክክለኛው መልስ A ነው። "የአንድ ማኅበረሰብ ቡድን ደንብና ወግ" የሚለው የሞራሊቲ (morality / የባሕል ወግ) ትርጓሜ እንጂ የሥነ-ምግባር ፍልስፍና (ethics) ትርጓሜ አይደለም። ኤቲክስ ሞራልን በሳይንሳዊና ፍልስፍናዊ መንገድ በጥልቀት የሚመረምር የጥናት ዘርፍ ነው።',
    explanationAfaanOromo: 'Kan sirrii hin taane A dha. "Seera ykn amala garee tokkoo" kan jedhu hiika mooraalitii (morality) ti malee hiika eetiksii (ethics) miti. Eetiksiin qo\'annoo falaasamaa kan dhugummaa fi sirrummaa safuu qoratudha. Deebiin A dha.'
  },

  // Question 7
  {
    id: 'mcie-2017-mid-q7',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2017 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Kant\'s Categorical Imperative: Universality',
    points: 1,
    question: 'Which principle of Kant\'s categorical imperative requires us to act according to a maxim that rightness or wrongness remains common to everyone everywhere?',
    options: [
      'The Principle of Universality',
      'The Principle of Autonomy',
      'The Principle of Humanity',
      'The Principle of Beneficence'
    ],
    correctAnswer: 0,
    hint: '"Act only according to that maxim whereby you can at the same time will that it should become a universal law."',
    explanation: 'Kant\'s first formulation of the Categorical Imperative is the Principle of Universality (Universal Law): "Act only on that maxim through which you can at the same time will that it should become a universal law" applying equally to all rational beings everywhere without contradiction.',
    explanationAmharic: 'የኢማኑኤል ካንት የመጀመሪያው የሞራል ሕግ "የሁለንተናዊነት መርህ" (The Principle of Universality) ይባላል። አንድ ድርጊት ትክክል የሚሆነው ያ ድርጊት በማንኛውም ቦታና ጊዜ ለሁሉም የሰው ልጆች ሁሉ የጋራ ሕግ ሆኖ መተግበር ሲችል ብቻ ነው። ስለዚህ መልሱ A ነው።',
    explanationAfaanOromo: 'Qajeelfamni Imaanuweel Kaanti inni jalqabaa "Qajeelfama Hunda-galeessummaa" (Principle of Universality) jedhama. Gochi tokko sirrii kan ta\'u yoo seerri gocha sanaa bakka fi yeroo hundaatti nama maraaf seera waliigalaa ta\'uu danda\'e qofaadha. Deebiin A dha.'
  },

  // Question 8
  {
    id: 'mcie-2017-mid-q8',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2017 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Criticisms of Act-Utilitarianism',
    points: 1,
    question: 'Act-utilitarianism is most vulnerable to criticism due to its reliance on:',
    options: [
      'A rigid, rule-based system of moral decision-making.',
      'The difficulty of calculating consequences for every individual act in real-time.',
      'Sacrificing long-term consequences in favor of immediate satisfaction.',
      'The lack of consideration for majority rights and freedoms in morality'
    ],
    correctAnswer: 1,
    hint: 'Evaluating every single spontaneous human act by computing all foreseeable net future consequences is practically impossible.',
    explanation: 'A classic and devastating critique of act-utilitarianism is the calculation problem: in real life, moral agents lack the time, omniscient predictive knowledge, and computational capacity to measure all immediate and long-range consequences of every single individual act before deciding.',
    explanationAmharic: 'አክት-ዩቲሊታሪያኒዝም (Act-utilitarianism) በብዛት የሚተቸው እያንዳንዱ ሰው በዕለት ተዕለት ሕይወቱ የሚያከናውነውን እያንዳንዱን ድርጊት ውጤት በቅጽበት አስልቶ ለማወቅ አዳጋች በመሆኑ ነው (The difficulty of calculating consequences for every individual act in real-time)። ስለዚህ መልሱ B ነው።',
    explanationAfaanOromo: 'Qeeqi guddaan Akiti-yuutilitaariyaanizimii irratti dhiyaatu, namni tokko gocha raawwatu hundaaf bu\'aa inni yeroo sanattis ta\'e gara fuulduraatti fidu hunda safaree bira ga\'uun rakkisaa waan ta\'eefidha. Deebiin B dha.'
  },

  // Question 9
  {
    id: 'mcie-2017-mid-q9',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2017 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Bentham vs Mill on Utilitarian Pleasures',
    points: 1,
    question: 'The consequentialists’ anticipation is to produce the greatest happiness to the greater number of people, but Bentham’s and Mill’s assumptions to obtain pleasure follow different means. Pick the correct one:',
    options: [
      'For Mill, pleasure is summing different acts to maximize',
      'For Bentham, pleasure can have quality in which everyone should have highly favored',
      'For Mill, it’s only human beings that enjoy quality of pleasure which is preferable',
      'Higher order pleasure leads to pain if overindulged'
    ],
    correctAnswer: 2,
    hint: 'Mill famously stated: "It is better to be a human being dissatisfied than a pig satisfied; better to be Socrates dissatisfied than a fool satisfied."',
    explanation: 'John Stuart Mill introduced the qualitative dimension of utilitarianism, distinguishing higher intellectual, moral, and aesthetic pleasures (unique to human faculties) from lower bodily sensual pleasures. Bentham treated all pleasures quantitatively as equal in kind ("push-pin is as good as poetry"). Hence, Option C accurately represents Mill.',
    explanationAmharic: 'ትክክለኛው መልስ C ነው። ጆን ስቱዋርት ሚል የደስታን ጥራት (Quality of pleasure) በማምጣት የሰው ልጅ ብቻ የሚደሰትባቸው ከፍተኛ አእምሮአዊና ሥነ-ምግባራዊ ደስታዎች ከእንስሳዊ የሥጋ ደስታዎች የላቁና ተመራጭ ናቸው ሲል ተከራክሯል። ቤንታም ግን መጠናቸውን ብቻ ነበር ያየው።',
    explanationAfaanOromo: 'Deebiin sirriin C dha. Joon Istiwaart Miil garaagarummaa qulqullina gammachuu (quality of pleasure) fiduun, namoonni qofti gammachuu sammuu fi yaadaa isa olaanaa ta\'e akka qooddatan ibseera. Beentaam garuu hamma gammachuu qofa lakkaa\'a ture.'
  },

  // Question 10
  {
    id: 'mcie-2017-mid-q10',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2017 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Mill\'s Qualitative Pleasures vs Bentham\'s Calculus',
    points: 1,
    question: 'Which one of the following is not a measure of quality over quantity according to Mill’s choice?',
    options: [
      'Certainty',
      'Power',
      'Intellectuality',
      'Self-realization'
    ],
    correctAnswer: 0,
    hint: 'Certainty, intensity, and duration are variables of Bentham\'s quantitative hedonistic calculus.',
    explanation: '"Certainty" belongs to Jeremy Bentham\'s quantitative felicific calculus (intensity, duration, certainty, propinquity, fecundity, purity, and extent). J.S. Mill focused on higher qualitative elements such as intellectuality, noble character, imagination, and self-realization.',
    explanationAmharic: 'የተሳሳተው A (Certainty / እርግጠኝነት) ነው። እርግጠኝነት የጄረሚ ቤንታም የቁጥር መለኪያ (Quantitative calculus) እንጂ የጆን ስቱዋርት ሚል የጥራት መለኪያ አይደለም። ሚል ትኩረት ያደረገው በእውቀት (Intellectuality) እና ራስን በማብቃት (Self-realization) ላይ ነው።',
    explanationAfaanOromo: 'Madaallii qulqullinaa kan hin taane A (Certainty / Mirkanaa\'ummaa) dha. Kun madaallii baay\'inaa kan Jeeremii Beentaam ti malee kan Miil miti. Miil kan xiyyeeffate beekumsa sammuu (intellectuality) fi of-huruphisuu irratti. Deebiin A dha.'
  },

  // Question 11
  {
    id: 'mcie-2017-mid-q11',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2017 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Relationship Between Law and Morality',
    points: 1,
    question: 'Let us say a state adopts that homosexuality is legal. Then, based on this argument, morality and law are distinct in that:',
    options: [
      'Punishment for violating moral and law differs',
      'Some actions that are immoral may be legal',
      'Moral conducts may be illegal',
      'Some actions that are illegal may be moral'
    ],
    correctAnswer: 1,
    hint: 'The law permits or decriminalizes an act, even though some cultural or religious moral codes deem it immoral.',
    explanation: 'Law and morality do not always overlap. An action can be formally legal under positive state law even while being judged immoral by widespread cultural, traditional, or religious moral codes (and vice-versa). Therefore, this example illustrates that some actions deemed immoral can nevertheless be legal.',
    explanationAmharic: 'ትክክለኛው መልስ B (Some actions that are immoral may be legal) ነው። ሕግና ሞራል ሁልጊዜ አንድ አይደሉም። አንድ ድርጊት በመንግሥት ሕግ የተፈቀደ (legal) ቢሆንም በማኅበረሰቡ ወይም በሃይማኖት የሞራል እሴት ግን ስህተት ወይም ነውር (immoral) ሊሆን ይችላል።',
    explanationAfaanOromo: 'Deebiin sirriin B dha. Seerrii fi safuun yeroo hunda tokko miti. Gochi tokko seera mootummaatiin heyyamamaa (legal) ta\'us, safuu fi amantaa hawaasaatiin ammoo falfala (immoral) ta\'uu danda\'a.'
  },

  // Question 12
  {
    id: 'mcie-2017-mid-q12',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2017 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Political Culture: Parochial Political Culture',
    points: 1,
    question: 'According to Almond and Verba’s typology of political culture, which of the following BEST reflects the behavior of citizens living in a parochial political culture?',
    options: [
      'Citizens have interest in politics and rarely engage in political decision making',
      'Citizens mostly care about their family and have no concern and know-how on government actions.',
      'Citizens closely follow government policies but avoid participating in elections.',
      'Citizens actively engage in public debates, elections, and influence political decisions.'
    ],
    correctAnswer: 1,
    hint: 'Parochial citizens are disconnected from the national state, focusing strictly on local village or kinship boundaries.',
    explanation: 'In Gabriel Almond and Sidney Verba\'s classification, citizens in a "parochial political culture" have virtually no awareness of, knowledge about, or interest in the central government and political processes; their identity and loyalty are restricted to their local clan, village, or family.',
    explanationAmharic: 'በትሩፋታዊ/ፓሮኪያል የፖለቲካ ባሕል (Parochial political culture) ውስጥ የሚኖሩ ዜጎች ስለ አገሪቱ ማዕከላዊ መንግሥት፣ ፖሊሲዎችና ፖለቲካዊ ውሳኔዎች ምንም ዓይነት ዕውቀትም ሆነ ፍላጎት የላቸውም፤ ትኩረታቸው በቤተሰብና በአካባቢ ወግ ላይ ብቻ የተወሰነ ነው። ስለዚህ መልሱ B ነው።',
    explanationAfaanOromo: 'Aadaa siyaasaa Paarokiyaal (parochial political culture) keessatti lammiileen dhimma siyaasa biyyaa fi mootummaa irratti beekumsa fi fedhii hin qaban; qalbii fi xiyyeeffannaan isaanii maatii fi naannoo dhiyoo qofa irratti daangeffama. Deebiin B dha.'
  },

  // Question 13
  {
    id: 'mcie-2017-mid-q13',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2017 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Meta-ethics: Cognitivism vs Non-Cognitivism',
    points: 1,
    question: 'Which ethical theory is concerned with whether moral judgments can be true or false?',
    options: [
      'Meta-ethics',
      'Cognitivism',
      'Virtue Ethics',
      'Non-cognitivism'
    ],
    correctAnswer: 1,
    hint: 'Cognitivism explicitly asserts that moral propositions express cognitive beliefs with truth-value (capable of being true or false).',
    explanation: 'Cognitivism is the meta-ethical view holding that moral statements express factual propositions or beliefs about the world, and are therefore capable of having truth value (being objectively true or false). Non-cognitivism denies this, viewing moral statements as mere emotional cries or commands.',
    explanationAmharic: 'ኮግኒቲቪዝም (Cognitivism) የሥነ-ምግባር አባባሎች ተጨባጭ እውነታን የሚገልጹ በመሆናቸው "እውነት ወይም ሐሰት" (true or false) ተብለው ሊመዘኑ ይችላሉ የሚል የሜታ-ኤቲክስ አመለካከት ነው። ስለዚህ መልሱ B ነው።',
    explanationAfaanOromo: 'Koognitiivizimiin (Cognitivism) ilaalcha falaasamaa kan murtiiwwan safuu yaada qabatamaa waan calaqqisiisaniif "dhugaa ykn soba" ta\'uu danda\'u jedhudha. Deebiin sirriin B dha.'
  },

  // Question 14
  {
    id: 'mcie-2017-mid-q14',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2017 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Ross\'s Prima Facie Duties: Non-Maleficence',
    points: 1,
    question: 'According to Ross, which duty emphasizes the importance of not causing harm to others?',
    options: [
      'Duty of non-maleficence',
      'Duty of Fidelity',
      'Duty of Justice',
      'Duty of Beneficence'
    ],
    correctAnswer: 0,
    hint: 'Maleficence means doing harm; non-maleficence means refraining from harming anyone.',
    explanation: 'In W.D. Ross\'s framework, the "Duty of Non-maleficence" is the fundamental obligation to refrain from injuring, harming, or inflicting damage upon other sentient beings.',
    explanationAmharic: 'በዊልያም ዴቪድ ሮስ ሥርዓት ውስጥ በሌሎች ሰዎች ላይ ጉዳት ወይም ጥፋት ላለማድረስ የሚጠበቅብን መሠረታዊ ግዴታ "ጉዳት ያለማድረስ ግዴታ" (Duty of non-maleficence) ይባላል። ስለዚህ መልሱ A ነው።',
    explanationAfaanOromo: 'Akka W.D. Ross tti, dirqamni namoota biroo irratti miidhaa fi balaa kamiyyuu akka hin geessisne nama dhorku \'Dirqama Miidhaa Dhabamsiisuu\' (Duty of non-maleficence) jedhama. Deebiin A dha.'
  },

  // Question 15
  {
    id: 'mcie-2017-mid-q15',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2017 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Virtue Ethics: Focus on Moral Character',
    points: 1,
    question: 'Virtue ethics focuses primarily on:',
    options: [
      'Following a set of predefined rules',
      'Cultivating a good moral character',
      'Calculating the best outcome for the greatest number',
      'Balancing benefits and harms in actions'
    ],
    correctAnswer: 1,
    hint: 'Aristotle\'s virtue ethics asks: "What kind of virtuous person should I be?" rather than "What rule should I obey?"',
    explanation: 'Virtue ethics (originating with Aristotle) places primary emphasis on the character, inner virtues, and moral disposition of the human agent (e.g., courage, temperance, wisdom, honesty), rather than rigid rules or consequence calculations.',
    explanationAmharic: 'የቨርቹው ኤቲክስ (Virtue ethics / የባሕርይ ሥነ-ምግባር) ዋነኛ ትኩረት በሕጎች ወይም በውጤት ላይ ሳይሆን መልካም የሆነ የሥነ-ምግባር ባሕርይን በማዳበርና በመላበስ ላይ ነው (Cultivating a good moral character)። መልሱ B ነው።',
    explanationAfaanOromo: 'Eetiksiin Amalaa (Virtue ethics) seera hordofuu ykn bu\'aa gochaa irratti osoo hin taane, amala gaarii fi safuu qabeessa ta\'e ijaarrachuu (cultivating a good moral character) irratti xiyyeeffata. Deebiin B dha.'
  },

  // Question 16
  {
    id: 'mcie-2017-mid-q16',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2017 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Kantian Ethics: Principle of Autonomy',
    points: 1,
    question: 'The development of self-creation and independency by following the rule of Kant refers to:',
    options: [
      'Principle of Universality',
      'Formal rules',
      'Autonomy',
      'Heteronomy'
    ],
    correctAnswer: 2,
    hint: 'Autonomy is moral self-governance through pure practical reason, opposing heteronomy (external coercion).',
    explanation: 'In Kantian ethics, "Autonomy" is the capacity of a rational moral agent to freely self-legislate the moral law through reason alone, independent of external coercion, bodily desires, or authority (heteronomy).',
    explanationAmharic: 'በካንት ፍልስፍና አንድ ምክንያታዊ ሰው ከማንም የውጭ ተፅዕኖ ነፃ ሆኖ በራሱ አእምሮአዊ ውሳኔ ትክክለኛውን የሞራል ሕግ በማውጣትና በመከተል ራሱን በራሱ የሚመራበት ነፃነት "ኦቶኖሚ" (Autonomy / የሞራል ራስን በራስ ማስተዳደር) ይባላል። መልሱ C ነው።',
    explanationAfaanOromo: 'Falaasama Kaanti keessatti namni dhiibbaa alaa tokko malee qalbii fi sammuu ofiitiin seera safuu baasee ofiin of bulchuun \'Ootoonoomii\' (Autonomy) jedhama. Deebiin sirriin C dha.'
  },

  // Question 17
  {
    id: 'mcie-2017-mid-q17',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2017 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Virtue Ethics vs Deontological Duties',
    points: 1,
    question: 'Which of the following is NOT considered a virtue in virtue ethics?',
    options: [
      'Reparation',
      'Courage',
      'Generosity',
      'Compassion'
    ],
    correctAnswer: 0,
    hint: 'Reparation is an act or duty of making restitution, classified by W.D. Ross as a prima facie duty, not a character trait.',
    explanation: 'Reparation is a deontological action/duty (making amends for a past wrong, as categorized by W.D. Ross). In contrast, courage, generosity, and compassion are enduring character virtues recognized in virtue ethics.',
    explanationAmharic: 'በቨርቹው ኤቲክስ ውስጥ የሰው ልጅ የባሕርይ መገለጫ (Virtue) ያልሆነው A (Reparation / የካሣ ግዴታ) ነው። ሬፓሬሽን ድርጊትን የሚያመለክት ግዴታ (duty) ሲሆን፤ ጀግንነት (Courage)፣ ለጋስነት (Generosity) እና ሩኅሩኅነት (Compassion) ግን የባሕርይ መልካም እሴቶች ናቸው።',
    explanationAfaanOromo: 'Amala gaarii (virtue) kan hin taane A (Reparation) dha. Beenyaa kaffaluun dirqama gochaati malee amala sammuu miti. Gootummaan (courage), arjummaan (generosity) fi gara-laafummaan amala safuuti. Deebiin A dha.'
  },

  // Question 18
  {
    id: 'mcie-2017-mid-q18',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2017 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Applied Utilitarianism',
    points: 1,
    question: 'Which scenario BEST illustrates utilitarianism?',
    options: [
      'Helping a friend expecting a favor in return',
      'Sacrificing one innocent life to save hundreds',
      'Donating anonymously to charity for personal peace of mind',
      'Following the law without question'
    ],
    correctAnswer: 1,
    hint: 'Utilitarianism calculates the net outcome: saving hundreds maximizes overall happiness/utility over saving one.',
    explanation: 'Utilitarianism holds that the right action produces the greatest overall good/happiness for the greatest number of people. Sacrificing one individual to preserve hundreds of innocent lives is the quintessential textbook illustration of strict utilitarian calculation.',
    explanationAmharic: 'ዩቲሊታሪያኒዝምን በግልጽ የሚያሳየው ሁኔታ B (Sacrificing one innocent life to save hundreds) ነው። ምክንያቱም ዩቲሊታሪያኒዝም ለብዙኃኑ ከፍተኛ ጥቅም ማምጣትን ስለሚፈልግ የመቶዎችን ሕይወት ለማዳን የአንድን ሰው ሕይወት መሥዋዕት ማድረግን ይደግፋል።',
    explanationAfaanOromo: 'Yuutilitaariyaanizimii kan calaqqisiisu B dha. Sababni isaas tiyooriin kun faayidaa namoota hedduu waan dursuuf, lubbuu namoota dhibba hedduu baraaruuf jecha nama tokko aarsaa gochuu ni hayyama. Deebiin B dha.'
  },

  // Question 19
  {
    id: 'mcie-2017-mid-q19',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2017 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Ethical Egoism in Practice',
    points: 1,
    question: 'Let us say a lawyer chooses not to report her corrupt boss because doing so would cost her job and destroy her career. Instead, she stays silent to protect her self-interest. According to ethical egoism, how is the lawyer’s action best described?',
    options: [
      'Morally wrong because she allowed corruption to continue.',
      'Morally wrong because the law requires reporting crimes.',
      'Morally acceptable because she prioritized her own welfare.',
      'Morally wrong because she feared revenge/retaliation'
    ],
    correctAnswer: 2,
    hint: 'Ethical egoism claims each person ought to act solely in their own personal self-interest and welfare.',
    explanation: 'Ethical egoism prescribes that an agent\'s only moral duty is to maximize their own personal well-being, self-interest, and career survival. By remaining silent to protect her job and career prospects, she fulfills ethical egoism\'s core tenet.',
    explanationAmharic: 'በኢቲካል ኢጎይዝም (Ethical egoism) እይታ የጠበቃዋ ውሳኔ ተቀባይነት ያለው ነው (Morally acceptable because she prioritized her own welfare)። ምክንያቱም ኢጎይዝም እያንዳንዱ ሰው ለራሱ ጥቅም፣ ደህንነትና ዕድገት ቅድሚያ መስጠት አለበት ብሎ ያምናል። መልሱ C ነው።',
    explanationAfaanOromo: 'Akka tiyoorii Igooyizimiitti (Ethical egoism), gochi abukaattoo kanaa sirriidha (morally acceptable); sababni isaas igooyizimiin namni kamiyyuu faayidaa fi hojii ofiitiif dursa kennuu qaba jedhee waan amanuuf. Deebiin C dha.'
  },

  // Question 20
  {
    id: 'mcie-2017-mid-q20',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2017 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Civic Education: Minimal vs Maximal Conception',
    points: 1,
    question: 'Which of the following best describes the maximal concept of civic education?',
    options: [
      'Focuses mainly on teacher-centered instruction',
      'Extends learning beyond the classroom',
      'Focuses on classroom learning and examinations',
      'Focused to teacher and students interaction in the class'
    ],
    correctAnswer: 1,
    hint: 'Maximal civic education emphasizes active democratic participation, community activism, and experiential learning in real society.',
    explanation: 'The maximal (broad/thick) concept of civic education extends far beyond rote classroom instruction and textbooks to engage students in active community problem-solving, democratic dialogue, civil society volunteering, and real-world civic practice.',
    explanationAmharic: 'ማክሲማል የሲቪክስ ትምህርት (Maximal concept of civic education) ትምህርቱን ከክፍል ውስጥ ገደብ በማውጣት ተማሪዎች በኅብረተሰብ ሕይወትና በዴሞክራሲያዊ እንቅስቃሴዎች በቀጥታ እንዲሳተፉ ያደርጋል (Extends learning beyond the classroom)። መልሱ B ነው።',
    explanationAfaanOromo: 'Hubannoon Maaksimaalii kan barnoota lammummaa barumsa daree qofa keessatti osoo hin daangessin gara hawaasaatti baasuun lammiileen hirmaannaa qabatamaa akka taasisan taasisa (extends learning beyond classroom). Deebiin B dha.'
  },

  // Question 21
  {
    id: 'mcie-2017-mid-q21',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2017 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Normative Ethics: Altruism in Practice',
    points: 1,
    question: 'A young medical doctor must choose between working in her poor hometown for low pay or accepting a high-paying job abroad. What would altruism suggest the medical doctor should do?',
    options: [
      'Wait until the hometown offers him a higher salary.',
      'Accept the higher-paying job abroad for personal success.',
      'Leave and send financial help from abroad.',
      'Stay in his hometown to serve and help others despite personal sacrifices.'
    ],
    correctAnswer: 3,
    hint: 'Altruism demands prioritizing the needs and welfare of others above one\'s own financial gain and comfort.',
    explanation: 'Altruism holds that moral actions are those that selflessly benefit others, even at great personal cost or sacrifice to oneself. Therefore, altruism dictates that the physician remain in her impoverished community to treat needy patients despite receiving lower remuneration.',
    explanationAmharic: 'አልትሩይዝም (Altruism / ራስ ወዳድ አለመሆን) ሐኪሟ የግል ጥቅሟንና ከፍተኛ ደመወዟን መሥዋዕት በማድረግ በድሃው መንደሯ ተቀምጣ ሕሙማንን በቅንነት እንድታገለግል ይመክራል (Stay in hometown to serve and help others)። ስለዚህ መልሱ D ነው።',
    explanationAfaanOromo: 'Alitiruu\'izimiin (Altruism) faayidaa ofii aarsaa gochuun faayidaa fi nageenya namoota biroof dursa kennuu waan ta\'eef, ogeessi fayyaa sun biyya alaa qarshii guddaaf deemuu dhiistee lammii ishee akka tajaajiltu gorsa. Deebiin D dha.'
  },

  // Question 22
  {
    id: 'mcie-2017-mid-q22',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2017 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Branches of Ethics: Meta-ethics',
    points: 1,
    question: 'The non-normative branch of ethics that studies the meaning of ethical concepts is:',
    options: [
      'Metaphysics',
      'Cognitivists',
      'Meta-ethics',
      'Non-cognitivists'
    ],
    correctAnswer: 2,
    hint: 'Meta-ethics investigates the semantic meaning, epistemological justification, and logic of ethical terms.',
    explanation: 'Meta-ethics is the non-normative branch of philosophical ethics that investigates the fundamental meaning, logical structure, and linguistic significance of ethical words (such as "good", "evil", "duty", "justice") rather than prescribing what actions are right or wrong.',
    explanationAmharic: 'የሥነ-ምግባር ጽንሰ-ሐሳቦችን የቋንቋና የፍልስፍና ፍቺ የሚያጠናው ኢ-ደንባዊ (non-normative) የፍልስፍና ቅርንጫፍ ሜታ-ኤቲክስ (Meta-ethics) ይባላል። ስለዚህ መልሱ C ነው።',
    explanationAfaanOromo: 'Dameen falaasama safuu kan hiika fi bu\'uura jechoota safuu qoratu \'Meetaa-eetiksii\' (Meta-ethics) jedhama. Deebiin sirriin C dha.'
  },

  // Question 23
  {
    id: 'mcie-2017-mid-q23',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2017 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Teleological Ethics in Public Health',
    points: 1,
    question: 'A pharmaceutical company rushed the production of a life-saving vaccine during a deadly pandemic. In their hurry, they skipped some clinical trials to meet public demand and save lives quickly. Millions were vaccinated, and the spread of the disease slowed. However, later it was discovered that a small percentage of recipients developed serious side effects. From a teleological point of view, was the company’s decision morally good?',
    options: [
      'No, because they violated medical procedures and risked lives.',
      'Yes, because it is a formal government rule to do in that manner',
      'Yes, because the action resulted in saving millions of lives despite minor side effects.',
      'No, because their intention was driven by profit.'
    ],
    correctAnswer: 2,
    hint: 'Teleology/consequentialism evaluates morality strictly by comparing total positive results against negative outcomes.',
    explanation: 'From a teleological (consequentialist) standpoint, an action is morally good if its net overall consequences produce vastly more good than harm. Since expediting the vaccine saved millions of human lives compared to a tiny percentage of side effects, teleology judges the decision as morally good.',
    explanationAmharic: 'በትልዮሎጂካል (የውጤት ተኮር) እይታ ውሳኔው ትክክል ነበር፤ ምክንያቱም ውሳኔው ያስገኘው ውጤት (የሚሊዮኖች ሕይወት መትረፍ) ካደረሰው ጥቂት የጎንዮሽ ጉዳት እጅግ የላቀ በጎ ውጤት አስገኝቷል (Yes, because it saved millions of lives)። መልሱ C ነው።',
    explanationAfaanOromo: 'Ilaalcha Teeliyooloojiitiin (bu\'aa irratti kan hundaa\'e) murtiin kun sirriidha; sababni isaas lubbuu namoota miliyoona hedduu baraaruun isaa miidhaa xiqqoo namoota muraasa irra ga\'e caalaa bu\'aa guddaa waan kenneef. Deebiin C dha.'
  },

  // Question 24
  {
    id: 'mcie-2017-mid-q24',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2017 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Law vs Ethics Enforcement',
    points: 1,
    question: 'What distinguishes the enforcement of laws from the enforcement of ethics in society?',
    options: [
      'Ethics has no enforcement mechanism at all.',
      'Laws depend on religious institutions for enforcement, unlike ethics.',
      'Ethics is enforced through social approval or condemnation, while laws use the coercive power of the state.',
      'Ethics and laws are both enforced through imprisonment and fines.'
    ],
    correctAnswer: 2,
    hint: 'The state uses police, courts, and prison to enforce laws; ethics is enforced by public opinion, praise, blame, and conscience.',
    explanation: 'Laws are formally backed and enforced by the sovereign coercive authority and police power of the state (courts, police, fines, and imprisonment). In contrast, ethics relies on informal internal conscience, peer pressure, and societal praise or condemnation.',
    explanationAmharic: 'ሕግና ሥነ-ምግባር የሚለያዩበት ዋነኛ መንገድ፡ ሥነ-ምግባር በማኅበራዊ ተቀባይነት፣ በህሊናና በውግዘት ሲተገበር፤ ሕግ ግን በመንግሥት አስገዳጅ ኃይል (ፖሊስ፣ ፍርድ ቤትና እስራት) ይተገበራል (Ethics uses social approval, law uses state coercion)። መልሱ C ነው።',
    explanationAfaanOromo: 'Garaagarummaan seeraa fi safuu: Safuun kan hojiirra oolu qalbii namaa, komii fi kabaja hawaasaatiin yoo ta\'u; Seerri garuu humna dirqisiisaa mootummaa (poolisii, mana murtii fi mana hidhaatiin) raawwatama. Deebiin C dha.'
  },

  // Question 25
  {
    id: 'mcie-2017-mid-q25',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2017 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Philosophers of Virtue Ethics',
    points: 1,
    question: 'Which philosopher is most closely associated with the development of virtue ethics?',
    options: [
      'John Stuart Mill',
      'Aristotle',
      'Immanuel Kant',
      'W.D. Ross'
    ],
    correctAnswer: 1,
    hint: 'Author of the Nicomachean Ethics who defined moral virtue as the Golden Mean.',
    explanation: 'Aristotle is the foundational architect of virtue ethics, articulating in his Nicomachean Ethics that human flourishing (eudaimonia) is achieved by developing virtues of character as the "golden mean" between deficiency and excess.',
    explanationAmharic: 'የባሕርይ ሥነ-ምግባርን (Virtue ethics) በማመንጨትና በማሳደግ የሚታወቀው ጥንታዊው የግሪክ ፈላስፋ አርስቶትል (Aristotle) ነው። ስለዚህ መልሱ B ነው።',
    explanationAfaanOromo: 'Falaasama amala gaarii (Virtue ethics) hundeessuu fi beeksisuun beekamtii guddaa kan qabu falaasamaa Giriik kan ta\'e Aristootil (Aristotle) dha. Deebiin B dha.'
  },

  // Question 26
  {
    id: 'mcie-2017-mid-q26',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2017 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Citizenship Development and Civic Education',
    points: 1,
    question: 'Scholars wrote that the creation of a good citizen in a society primarily depends on:',
    options: [
      'The wealth and resources of a state',
      'The development of the qualities of its members through education',
      'Strict rules and punishments',
      'The natural birth of responsible citizens'
    ],
    correctAnswer: 1,
    hint: 'Civic education nurtures civic knowledge, democratic skills, and virtues in individuals.',
    explanation: 'Democratic theory and civic scholarship confirm that responsible citizens are not merely born; they are cultivated through systematic civic education that develops their intellectual capacities, civic virtues, and democratic dispositions.',
    explanationAmharic: 'ጥሩ ዜጎች በተፈጥሮ ብቻ አይፈጠሩም፤ ጥሩና ኃላፊነት የሚሰማው ዜጋ የሚፈጠረው በትምህርት አማካኝነት የዜጎችን ባሕርይ፣ ዕውቀትና የዴሞክራሲ ክህሎት በማዳበር ነው (Through education)። ስለዚህ መልሱ B ነው።',
    explanationAfaanOromo: 'Hayyoonni akka ibsanitti, lammii gaariin uumamummaan qofa kan dhalatu osoo hin taane, barnoota lammummaa fi naamusaatiin amala, dandeettii fi beekumsa isaanii ijaaruudhaan (through education) kan uumamudha. Deebiin B dha.'
  },

  // Question 27
  {
    id: 'mcie-2017-mid-q27',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2017 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Teleological Principles: The End Justifies the Means',
    points: 1,
    question: 'Which of the following is in line with "the end justifies the means"?',
    options: [
      'The source of morality is God',
      'Do whatever is most loving',
      'Morality is associated with laws of Nature',
      'We all are capable of reasoning in the same manner and on the same level'
    ],
    correctAnswer: 1,
    hint: 'Joseph Fletcher\'s Situation Ethics posits that the ultimate end (agape love) justifies any action or means taken to attain it.',
    explanation: 'Joseph Fletcher\'s Situation Ethics argues that love (agape) is the highest end, and that "the end justifies the means; nothing else does." Doing whatever is most loving justifies breaking traditional rules if it achieves a loving outcome.',
    explanationAmharic: '"መጨረሻው/ውጤቱ መንገዱን ያጸድቀዋል" (The end justifies the means) ከሚለው ሐሳብ ጋር የሚስማማው B (Do whatever is most loving) ነው። በሁኔታዊ ሥነ-ምግባር (Situation ethics) ፍቅር የመጨረሻው ግብ በመሆኑ ያንን ለማሳካት ማንኛውንም መንገድ መጠቀም ይፈቀዳል።',
    explanationAfaanOromo: '"Bu\'aan dhumaa daandii ittiin deemame mirkaneessa" kan jedhu wajjin kan wal-simu B (Do whatever is most loving) dha. Jaalalli galma dhumaa waan ta\'eef wanta jaalala uumu mara raawwachuun hayyamamaadha. Deebiin B dha.'
  },

  // Question 28
  {
    id: 'mcie-2017-mid-q28',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2017 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Classification of Normative Ethical Theories',
    points: 1,
    question: 'Which of the following ethical approaches is odd based on the philosophical school of thought?',
    options: [
      'Utilitarianism',
      'Egoism',
      'Deontology',
      'Altruism'
    ],
    correctAnswer: 2,
    hint: 'Three of these theories are consequentialist/teleological (outcomes for all, outcomes for self, outcomes for others); one is duty-based.',
    explanation: 'Utilitarianism, egoism, and altruism are all teleological (consequentialist) theories that determine moral rightness based on the consequences produced (for everyone, for oneself, or for others). In contrast, Deontology is non-consequentialist (duty-based). Hence, Deontology is the odd one out.',
    explanationAmharic: 'ለየት የሚለው C (Deontology) ነው። ምክንያቱም ዩቲሊታሪያኒዝም፣ ኢጎይዝም እና አልትሩይዝም ሦስቱም በውጤት ላይ የተመሠረቱ (Consequentialist) ሲሆኑ፤ ዲዮንቶሎጂ ግን ውጤትን ሳይሆን ግዴታንና ሕግን ብቻ የሚከተል (Non-consequentialist) ነው።',
    explanationAfaanOromo: 'Kan adda ta\'e C (Deontology) dha. Sababni isaas Yuutilitaariyaanizimii, Igooyizimii fi Alitiruu\'izimiin sadanuu bu\'aa irratti kan hundaa\'an yoo ta\'u; Diyeentooloojiin garuu bu\'aa osoo hin taane dirqama qofa hordofa. Deebiin C dha.'
  },

  // Question 29
  {
    id: 'mcie-2017-mid-q29',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2017 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Ross\'s Prima Facie Duties: Beneficence',
    points: 1,
    question: 'Which of the following duties according to Ross involves promoting the well-being and improvement of others?',
    options: [
      'Duty of Justice',
      'Duty of Beneficence',
      'Duty of Reparation',
      'Duty of Fidelity'
    ],
    correctAnswer: 1,
    hint: 'Beneficence means doing good and improving the virtue, intelligence, or happiness of other people.',
    explanation: 'In W.D. Ross\'s list of prima facie duties, the "Duty of Beneficence" is the moral obligation to do good for others and enhance their conditions in terms of virtue, knowledge, and happiness.',
    explanationAmharic: 'በዊልያም ዴቪድ ሮስ መርህ መሠረት የሌሎችን ሰዎች ደህንነት፣ እውቀትና ደስታ ለማሻሻል በጎ ማድረግ "የበጎ አድራጎት ግዴታ" (Duty of Beneficence) ይባላል። ስለዚህ መልሱ B ነው።',
    explanationAfaanOromo: 'Akka W.D. Ross tti, dirqamni namoota biroof wanta gaarii gochuu fi jireenya isaanii fooyyessuu \'Dirqama Gaarummaa\' (Duty of Beneficence) jedhama. Deebiin B dha.'
  },

  // Question 30
  {
    id: 'mcie-2017-mid-q30',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2017 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Virtue Ethics: Aristotle',
    points: 1,
    question: 'Virtue Ethics aims to develop excellent traits of character. The prominent proponent of this assumption was:',
    options: [
      'Immanuel Kant',
      'J.S. Mill',
      'Aristotle',
      'Jeremy Bentham'
    ],
    correctAnswer: 2,
    hint: 'The Greek philosopher who formulated character excellence (arete) in ancient Athens.',
    explanation: 'Aristotle is the preeminent classical philosopher who championed virtue ethics, asserting that moral excellence involves actively habituating virtuous character traits.',
    explanationAmharic: 'የባሕርይ ሥነ-ምግባር (Virtue Ethics) የሰውን ልጅ መልካም ሥነ-ምግባር ማዳበር ላይ ያተኩራል፤ የዚህ ፍልስፍና ዋነኛ መሪና ጸሐፊ አርስቶትል (Aristotle) ነው። መልሱ C ነው።',
    explanationAfaanOromo: 'Eetiksiin Amalaa (Virtue Ethics) amala gaarii fi safuu namaa ijaaruu irratti kan xiyyeeffatu yoo ta\'u, hayyuun beekamaan yaada kana qopheesse Aristootil (Aristotle) dha. Deebiin C dha.'
  }
];
