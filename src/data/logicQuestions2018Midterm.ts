import { ExamQuestion } from '../types';

/**
 * Haramaya University - College of Social Sciences & Humanities / HULMS
 * Critical Thinking & Logic (LoCT 1011) - Midterm Examination (2018 E.C.)
 * Complete 30-Question Examination with Official Feedback Keys and Comprehensive Explanations
 * in 3 Languages: English, Amharic (አማርኛ), and Afaan Oromoo.
 */
export const LOGIC_2018_MIDTERM_QUESTIONS: ExamQuestion[] = [
  // =========================================================================
  // Question 1
  // =========================================================================
  {
    id: 'loct-2018-mid-q1',
    courseId: 'loct-1011',
    courseCode: 'LoCT 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Recognizing Non-Arguments: Passages',
    points: 1,
    question: '"Authoritarian states are characterized by strong central governments that fairly stringently limit the range of political activity. More often than not, they are one-party states, which means that only one party, that which supports the government, is allowed to engage in political activity. Free discussion and association are strictly curtailed in these systems. Anyone who might dare to criticize the government or to express ideas that are not in conformity with its policies can be severely punished, even by death." What type of passage it is?',
    options: [
      'Report',
      'Exposition',
      'Explanation',
      'Argument',
      'Illustration'
    ],
    correctAnswer: 2,
    hint: 'Notice that the author accounts for and clarifies the internal mechanisms and operational nature of authoritarian regimes rather than proving a controversial thesis.',
    explanation: 'According to the official examination feedback, this passage is an Explanation. The text elucidates and clarifies the operational characteristics and internal mechanics of why and how authoritarian systems function and suppress dissent, rather than advancing premises to establish a disputed inferential claim (argument).',
    explanationAmharic: 'በፈተናው ይፋዊ መልስ መሠረት ይህ ምንባብ "ማብራሪያ" (Explanation) ነው። ደራሲው አንድ አከራካሪ ሀሳብ እውነት መሆኑን ለማረጋገጥ ከመሞከር (Argument) ይልቅ፣ አምባገነናዊ መንግስታት በምን አይነት ባህሪያት እንደሚገለጹ፣ ስልጣናቸውን እንዴት እንደሚቆጣጠሩና ተቃውሞን እንዴት እንደሚያፍኑ አሰራራቸውን የሚያብራራና የሚያስረዳ ጽሁፍ ነው። ስለዚህ ትክክለኛው መልስ Explanation (C) ነው።',
    explanationAfaanOromo: 'Akka qajeelfama qormaataatti, barruun kun "Ibsa" (Explanation) jedhama. Barreessaan yaada falmisiisaa tokko dhugaa gochuuf yaaluu (argument) mannaa, mootummoonni abbaa irree akkamitti akka hojjetan, aangoo isaanii akkamitti akka to\'ataniifi mormitoota akkamitti akka adaban amala isaanii ibsuuf dhiyaate. Kanaafuu deebiin sirriin Explanation (C) dha.'
  },

  // =========================================================================
  // Question 2
  // =========================================================================
  {
    id: 'loct-2018-mid-q2',
    courseId: 'loct-1011',
    courseCode: 'LoCT 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Types of Inductive Arguments: Argument from Authority',
    points: 1,
    question: 'What is the reasoning in the following argument? "The Supreme Court has ruled that freedom of expression is protected unless it directly incites violence. The Supreme Court is the highest legal authority in the country. Therefore, freedom of expression is protected unless the expression directly incites violence."',
    options: [
      'Argument from analogy',
      'Argument based on sign',
      'Causal inference',
      'Argument from authority',
      'Inductive generalization'
    ],
    correctAnswer: 3,
    hint: 'The conclusion relies directly on the authoritative ruling and status of the nation\'s highest judicial court.',
    explanation: 'An argument from authority (argumentum ad verecundiam) bases its conclusion on the claim or judgment of an acknowledged expert, institution, or legal authority. Here, the ruling of the Supreme Court as the highest legal body is cited as the basis for the conclusion.',
    explanationAmharic: 'ከስልጣን/ባለስልጣን አካል የሚመነጭ መከራከሪያ (Argument from authority) የሚባለው አንድ ድምዳሜ ተቀባይነት ያለው ወይም እውነት ነው ተብሎ የሚወሰደው በጉዳዩ ላይ ህጋዊ ስልጣን ወይም ከፍተኛ እውቅና ያለው አካል (እዚህ ላይ የሀገሪቱ ከፍተኛ የህግ አካል የሆነው ጠቅላይ ፍርድ ቤት) በመወሰኑ ላይ ሲመሰረት ነው። ስለዚህ ትክክለኛው መልስ D ነው።',
    explanationAfaanOromo: 'Falmiin qaama aangoo/ogeessa irratti hundaa\'e (Argument from authority) kan jedhamu, murtoon tokko fudhatama kan argatu qaamni seeraan aangoo olaanaa qabu (asitti Mana Murtii Waliigalaa) waan murteesseef yoo ta\'eedha. Kanaafuu deebiin sirriin D dha.'
  },

  // =========================================================================
  // Question 3
  // =========================================================================
  {
    id: 'loct-2018-mid-q3',
    courseId: 'loct-1011',
    courseCode: 'LoCT 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Types of Definitions: Etymological Definition',
    points: 1,
    question: 'What kind of definition is this? "Cardiology" comes from Greek kardia means heart and logos means study which literally translated as the study of the heart.',
    options: [
      'Definition by genus and difference',
      'Etymological definition',
      'Enumerative definition',
      'Subclass definition',
      'Operational definition'
    ],
    correctAnswer: 1,
    hint: 'Notice the definition traces the term to its ancestral root words in the ancient Greek language.',
    explanation: 'An etymological definition defines a word by tracing its historical linguistic lineage and ancestral word roots. Explaining "Cardiology" via Greek "kardia" (heart) and "logos" (study) is a classic etymological definition.',
    explanationAmharic: 'የስነ-ቃል አመጣጥ ፍቺ (Etymological definition) ማለት የአንድን ቃል መነሻ የታሪክና የቋንቋ ምንጭ (root words) በመግለጽ የሚሰጥ ፍቺ ነው። እዚህ ላይ "Cardiology" የሚለው ቃል የመጣው ከግሪክ ቃላት "kardia" (ልብ) እና "logos" (ጥናት) መሆኑን በማሳየት ተተርጉሟል። ስለዚህ ትክክለኛው መልስ B ነው።',
    explanationAfaanOromo: 'Hiikni hundee jechaa (Etymological definition) maddaa fi seenaa jecha tokkoo afaan dhalootaa isaatiin (asitti jechoota Giriik "kardia" jechuun onnee fi "logos" jechuun qorannoo) ibsuun kan kennamuudha. Kanaafuu deebiin sirriin B dha.'
  },

  // =========================================================================
  // Question 4
  // =========================================================================
  {
    id: 'loct-2018-mid-q4',
    courseId: 'loct-1011',
    courseCode: 'LoCT 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Types of Definitions: Precising Definition',
    points: 1,
    question: 'A court revises the definition of "assault" to make it legally clearer. This is an example of:',
    options: [
      'Lexical definition',
      'Persuasive definition',
      'Precising definition',
      'Theoretical definition',
      'Stipulative definition'
    ],
    correctAnswer: 2,
    hint: 'The purpose is to decrease vagueness in an already existing term for judicial or legal application.',
    explanation: 'A precising definition reduces the vagueness of an already established term so that it can be applied with strict clarity and boundary precision in specialized settings, such as a court of law defining "assault".',
    explanationAmharic: 'አሻሚነትን የሚቀርፍ ፍቺ (Precising definition) አስቀድሞ በቋንቋ ውስጥ የሚገኝን ቃል ግልጽ ያልሆነ ወይም አሻሚ (vague) የሆነ ትርጉም በህግ ወይም በልዩ ሙያዊ አውድ ውስጥ ይበልጥ ግልጽ፣ ጥብቅና የተወሰነ ለማድረግ የሚሰጥ ፍቺ ነው። ስለዚህ ትክክለኛው መልስ C ነው።',
    explanationAfaanOromo: 'Hiikni ifaa fi murtaa\'aa (Precising definition) jecha duraan afaan keessa jiru garuu wal-xaxaa/ifaa hin taane (vague) tokko seera ykn bakka murtaa\'etti akka ifa ta\'uuf jecha kan kennamuudha. Kanaafuu deebiin sirriin C dha.'
  },

  // =========================================================================
  // Question 5
  // =========================================================================
  {
    id: 'loct-2018-mid-q5',
    courseId: 'loct-1011',
    courseCode: 'LoCT 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Epistemology: Skepticism',
    points: 1,
    question: 'A researcher claims that knowledge is impossible because human senses and reason are unreliable. This illustrates that his epistemological position is:',
    options: [
      'Skepticism',
      'Intuitionism',
      'Subjectivism',
      'Rationalism',
      'Empiricism'
    ],
    correctAnswer: 0,
    hint: 'Consider the epistemological doctrine asserting that certain, indubitable knowledge cannot be attained.',
    explanation: 'Skepticism is the epistemological doctrine that genuine, reliable, or certain knowledge is impossible to achieve because human sensory perception and reasoning faculties are inherently fallible and prone to error.',
    explanationAmharic: 'የጥርጣሬ ፍልስፍና (Skepticism) የሰው ልጅ የስሜት ህዋሳትና የማሰብ አቅም የማይታመኑ በመሆናቸው ምክንያት አስተማማኝና ፍጹም እውቀትን መጨበጥ አይቻልም የሚል የስነ-እውቀት (Epistemology) አቋም ነው። ስለዚህ ትክክለኛው መልስ A ነው።',
    explanationAfaanOromo: 'Shakkiin beekumsaa (Skepticism) yaada qaamoleen miiraa fi sammuun namaa amanamaa waan hin taaneef beekumsa dhugaa fi amansiisaa gonkumaa argachuun hin danda\'amu jedhudha. Kanaafuu deebiin sirriin A dha.'
  },

  // =========================================================================
  // Question 6
  // =========================================================================
  {
    id: 'loct-2018-mid-q6',
    courseId: 'loct-1011',
    courseCode: 'LoCT 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Formal Fallacies: Denying the Antecedent',
    points: 1,
    question: 'If Oumer is a smoker, then he might be vulnerable to lung cancer. Therefore, since Oumer is not a smoker, it follows that he might not be vulnerable to lung cancer. This argument form is:',
    options: [
      'Invalid',
      'Sound',
      'Strong',
      'Cogent',
      'Valid'
    ],
    correctAnswer: 0,
    hint: 'Look closely at the conditional structure: "If P then Q; Not P; Therefore, not Q." Does non-smoking guarantee safety from lung cancer?',
    explanation: 'This argument commits the formal fallacy of Denying the Antecedent (If P, then Q; Not P; Therefore, not Q). In reality, non-smokers can still be vulnerable to lung cancer through air pollution, genetics, or asbestos exposure. Because the conclusion does not strictly follow from the premises, the argument form is Invalid.',
    explanationAmharic: 'ይህ ክርክር ቀዳሚውን ሁኔታ የመካድ መደበኛ ስህተት (Denying the Antecedent: "P ከሆነ Q ይሆናል። P አልሆነም። ስለዚህ Q አይሆንም") ፈጽሟል። ዑመር አጫሽ ባይሆንም እንኳ በዘረመል፣ በአየር ብክለት ወይም በሌላ ምክንያት ለሳንባ ካንሰር ሊጋለጥ ስለሚችል ድምዳሜው የግድ እውነት አይሆንም። ስለዚህ ክርክሩ ዋጋቢስ/ውድቅ (Invalid) ነው። ትክክለኛው መልስ A ነው።',
    explanationAfaanOromo: 'Falmiin kun dogoggora seer-luga yaadaa "Denying the Antecedent" (Yoo P ta\'e Q ta\'a. P hin taane. Kanaafuu Q hin ta\'u) jedhu qaba. Umer sigaaraa kan hin xuuxne ta\'us sababa dhalataa ykn aara biraatiin dhibee kanaaf saaxilamuu waan danda\'uuf, murtoon kun sirrii hin ta\'u (Invalid). Kanaafuu deebiin A dha.'
  },

  // =========================================================================
  // Question 7
  // =========================================================================
  {
    id: 'loct-2018-mid-q7',
    courseId: 'loct-1011',
    courseCode: 'LoCT 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Types of Inductive Arguments: Inductive Generalization',
    points: 1,
    question: 'Measurements from various coastal cities show rising sea levels over the past decade. Data from additional coastal areas confirm similar increases. Thus, sea levels worldwide are likely continuing to rise. This argument is:',
    options: [
      'Argument from analogy',
      'Inductive generalization',
      'Argument from authority',
      'Prediction',
      'Argument from sign'
    ],
    correctAnswer: 1,
    hint: 'The reasoning moves from an observed sample of coastal cities to a general claim about all coastal waters worldwide.',
    explanation: 'An inductive generalization moves from premises about a sampled portion of a class (measurements from various coastal cities) to a general claim about the entire class as a whole (sea levels worldwide).',
    explanationAmharic: 'ኢንደክቲቭ ጠቅላላ ድምዳሜ (Inductive generalization) ማለት ከተወሰነ የናሙና ክፍል (ከተመረጡ የባህር ዳርቻ ከተሞች መረጃ) ተነስቶ ለጠቅላላው ስብስብ (ለመላው ዓለም የባህር ወለል) አጠቃላይ ድምዳሜ የሚሰጥበት የማመዛዘን አይነት ነው። ስለዚህ ትክክለኛው መልስ B ነው።',
    explanationAfaanOromo: 'Murteessa walii-galaa (Inductive generalization) ragaa naannoolee murtaa\'oo (magaalota qarqara galaanaa muraasa) irraa fudhatame irratti hundaa\'uun addunyaa maraaf murtoo walii-galaa kennuudha. Kanaafuu deebiin sirriin B dha.'
  },

  // =========================================================================
  // Question 8
  // =========================================================================
  {
    id: 'loct-2018-mid-q8',
    courseId: 'loct-1011',
    courseCode: 'LoCT 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Techniques of Extensional Definition: Enumerative Definition',
    points: 1,
    question: 'What technique of definition is used to offer the following definitions? In criminal procedure, the "rights of the accused" include the right to counsel, the right to remain silent, the right to a fair trial, the right to be presumed innocent, and the right to appeal.',
    options: [
      'Subclass definition',
      'Operational definition',
      'Demonstrative definition',
      'Etymological definition',
      'Enumerative definition'
    ],
    correctAnswer: 4,
    hint: 'The technique identifies the extension of the term by naming the individual member rights one by one.',
    explanation: 'An enumerative definition defines a general term by enumerating (listing) individual members or specific constituent items that fall under that term\'s extension.',
    explanationAmharic: 'በዝርዝር የመቁጠር ፍቺ (Enumerative definition) በአንድ ቃል ስር የሚካተቱትን ነጠላ ክፍሎች ወይም ዝርዝር መብቶች አንድ በአንድ በመዘርዘር የሚሰጥ ኤክስቴንሽናል (extensional) ፍቺ ነው። እዚህ ላይ የተከሳሹ መብቶች ተብለው የተካተቱት መብቶች አንድ በአንድ ተዘርዝረዋል። ስለዚህ ትክክለኛው መልስ E ነው።',
    explanationAfaanOromo: 'Hiikni tarreessuun kennamu (Enumerative definition) miseensota ykn qabxiilee jecha tokko jalatti ramadaman tokko tokkoon maqaa dhahuun/tarreessuun kan ibsamudha. Kanaafuu deebiin sirriin E dha.'
  },

  // =========================================================================
  // Question 9
  // =========================================================================
  {
    id: 'loct-2018-mid-q9',
    courseId: 'loct-1011',
    courseCode: 'LoCT 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Types of Definitions: Persuasive Definition',
    points: 1,
    question: 'What kind of definition is this? "Justice" means giving criminals the harsh punishment they truly deserve.',
    options: [
      'Theoretical definition',
      'Lexical definition',
      'Persuasive definition',
      'Precising definition',
      'Stipulative definition'
    ],
    correctAnswer: 2,
    hint: 'Note the emotionally charged and value-laden vocabulary intended to engender an emotional bias.',
    explanation: 'A persuasive definition uses loaded, emotionally charged language ("harsh punishment they truly deserve") to influence readers\' attitudes and sway their feelings rather than providing a neutral, objective explanation.',
    explanationAmharic: 'አሳማኝ/ስሜት ቀስቃሽ ፍቺ (Persuasive definition) ማለት ስሜት ቀስቃሽ ቃላትን (ለምሳሌ "የሚገባቸውን ከባድ ቅጣት መስጠት") በመጠቀም የሰዎችን አመለካከትና ስሜት ወደ ፈለገው አቅጣጫ ለማዘንበል ወይም ለማሳመን የሚሰጥ ፍቺ ነው። ስለዚህ ትክክለኛው መልስ C ነው።',
    explanationAfaanOromo: 'Hiikni amansiisaa/miira kakaasu (Persuasive definition) jechoota miira kakaasaniifi nama amansiisuuf gargaaran fayyadamuun ilaalcha namaa jijjiiruuf kan qophaa\'edha. Kanaafuu deebiin sirriin C dha.'
  },

  // =========================================================================
  // Question 10
  // =========================================================================
  {
    id: 'loct-2018-mid-q10',
    courseId: 'loct-1011',
    courseCode: 'LoCT 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Branches of Philosophy: Aesthetics',
    points: 1,
    question: 'A citizen says: "Beauty is subjective, depending on individual feelings." This claim belongs to which branch of philosophy?',
    options: [
      'Aesthetics',
      'Logic',
      'Metaphysics',
      'Epistemology',
      'Ethics'
    ],
    correctAnswer: 0,
    hint: 'This branch of philosophy investigates the nature of beauty, art, taste, and sensory values.',
    explanation: 'Aesthetics is the philosophical branch that studies art, beauty, aesthetic value, and the nature of sensory judgments (whether beauty is objective or subjective).',
    explanationAmharic: 'ስነ-ውበት (Aesthetics) የውበትን፣ የስነ-ጥበብን፣ የተፈጥሮ ማራኪነትንና የሰዎችን የውበት ፍርድ ተጨባጭነት ወይም ግላዊነት (subjectivity) የሚመረምር የፍልስፍና ዘርፍ ነው። ስለዚህ ትክክለኛው መልስ A ነው።',
    explanationAfaanOromo: 'Aesthetics (Bareedina) damee falaasamaa kan waa\'ee miidhaginaa, aartii fi ilaalcha bareedina namoonni qaban qoratudha. Kanaafuu deebiin sirriin A dha.'
  },

  // =========================================================================
  // Question 11
  // =========================================================================
  {
    id: 'loct-2018-mid-q11',
    courseId: 'loct-1011',
    courseCode: 'LoCT 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Categorical Syllogisms: Fallacy of the Undistributed Middle',
    points: 1,
    question: 'All existentialists discuss about human freedom. The professor discusses about human freedom. Therefore, the professor is an existentialist. This argument is:',
    options: [
      'Cogent',
      'Uncogent',
      'Sound',
      'Valid',
      'Invalid'
    ],
    correctAnswer: 4,
    hint: 'Do only existentialists discuss human freedom? Many other philosophers, sociologists, and ethicists also discuss human freedom.',
    explanation: 'This argument commits the formal deductive Fallacy of the Undistributed Middle. Even if both premises are true, discussing human freedom does not make someone an existentialist, as non-existentialists also debate human freedom. Because the conclusion does not follow with necessity, the argument is Invalid.',
    explanationAmharic: 'ይህ ክርክር ዋጋቢስ/ውድቅ (Invalid) ነው። ምክንያቱም ሌሎች ፈላስፎችና የፖለቲካ ምሁራንም ስለ ሰው ልጅ ነፃነት ስለሚወያዩ፣ ፕሮፌሰሩ ስለ ነፃነት ማውራቱ የግድ የኤግዚስቴንሺያሊዝም አቀንቃኝ አያደርገውም። መካከለኛው ቃል ስላልተዳረሰ (Undistributed middle) ክርክሩ ውድቅ (Invalid) ነው። ስለዚህ ትክክለኛው መልስ E ነው።',
    explanationAfaanOromo: 'Falmiin kun seeraan ala (Invalid) dha. Sababni isaas namoonni biroos waa\'ee bilisummaa namaa waan mari\'ataniif, piroofeesarri kun waa\'ee bilisummaa waan dubbateef qofa egsisteenshiyaalistii ta\'uu hin danda\'u. Kanaafuu deebiin E dha.'
  },

  // =========================================================================
  // Question 12
  // =========================================================================
  {
    id: 'loct-2018-mid-q12',
    courseId: 'loct-1011',
    courseCode: 'LoCT 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Evaluating Inductive Arguments: Strength',
    points: 1,
    question: 'How do you evaluate the following argument? "Almost all species with similar bone structures to Species A evolved from a common ancestor. Species A has a bone structure identical to those species. Therefore, Species A probably evolved from the same common ancestor."',
    options: [
      'Valid but sound',
      'Invalid and unsound',
      'Strong and inductive',
      'Valid but unsound',
      'Invalid and sound'
    ],
    correctAnswer: 2,
    hint: 'Terms like "almost all" and "probably" indicate an inductive argument where the conclusion is highly probable given the premises.',
    explanation: 'The argument relies on probability ("almost all", "probably"), making it inductive. Because the premises, if true, provide strong probabilistic evidence that the conclusion is true, it is Strong and inductive.',
    explanationAmharic: 'ክርክሩ "በጣም አብዛኛዎቹ" (almost all) እና "ምናልባትም" (probably) በሚሉ ሊሆኑ የሚችሉ ቃላት ላይ የተመሰረተ ስለሆነ ኢንደክቲቭ (inductive) ነው። መነሻዎቹ እውነት ከሆኑ ደግሞ ድምዳሜው እውነት የመሆን እድሉ እጅግ ከፍተኛ ስለሆነ ክርክሩ "ጠንካራና ኢንደክቲቭ" (Strong and inductive) ነው። ስለዚህ ትክክለኛው መልስ C ነው።',
    explanationAfaanOromo: 'Falmiin kun jechoota carraa (\'almost all\', \'probably\') jedhaman waan fayyadameef \'inductive\' dha. Akkasumas ragaan dhiyaate dhugaa yoo ta\'e murtoon isaa dhugaa ta\'uuf carraa guddaa waan qabuuf \'Strong and inductive\' jedhama. Kanaafuu deebiin C dha.'
  },

  // =========================================================================
  // Question 13
  // =========================================================================
  {
    id: 'loct-2018-mid-q13',
    courseId: 'loct-1011',
    courseCode: 'LoCT 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Rules for Lexical Definitions: Affective Terminology',
    points: 1,
    question: '"Smoker" means a rude and disgusting individual who threatens the health and comfort of everyone in the nearby. Which one of the following is true about this definition?',
    options: [
      'The definition is obscure.',
      'It violates the rule that says a lexical definition should avoid affective terminology',
      'It does not indicate the context to which the word pertains.',
      'It does not violate any of the eight rules for lexical definitions',
      'It is figurative'
    ],
    correctAnswer: 1,
    hint: 'Words like "rude" and "disgusting" appeal to emotion and subjective disdain rather than neutral objective meaning.',
    explanation: 'Rule 3 of the standard rules for lexical definitions dictates that a definition should avoid affective terminology. Labels such as "rude" and "disgusting" inject subjective prejudice and emotion.',
    explanationAmharic: 'የቃላት ፍቺ (Lexical definition) ከስሜት ቀስቃሽና አድሏዊ ቃላት (affective terminology) የጸዳ መሆን አለበት። "አስጸያፊ" (disgusting) እና "ባለጌ" (rude) የሚሉት ቃላት ስሜታዊ በመሆናቸው ይህንን ህግ ይጥሳሉ። ስለዚህ ትክክለኛው መልስ B ነው።',
    explanationAfaanOromo: 'Seera hiika jechootaa keessaa inni tokko jechoota miira kakaasaniifi loogii qaban (affective terminology) irraa bilisa ta\'uu qaba. Jechoonni akka "fokkisaa" fi "safuu-dhabeessa" jedhan seera kana waan cabsaniif deebiin B dha.'
  },

  // =========================================================================
  // Question 14
  // =========================================================================
  {
    id: 'loct-2018-mid-q14',
    courseId: 'loct-1011',
    courseCode: 'LoCT 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Metaphysics: Ontology',
    points: 1,
    question: 'Metaphysics asks questions such as "What is reality?" and "What is time?" Which of the following illustrates the ontological aspect of metaphysics?',
    options: [
      'Examining the origin of the universe',
      'Exploring whether human actions are free or determined',
      'Investigating whether God exists',
      'It studies the origin, nature and purpose of man.',
      'Studying whether reality is composed of matter, spirit, or both'
    ],
    correctAnswer: 4,
    hint: 'Ontology specifically investigates the fundamental categories and nature of reality/being (materialism vs idealism).',
    explanation: 'Ontology is the foundational sub-field of metaphysics that explores the fundamental nature of existence, substance, and being—specifically whether reality consists of physical matter, spiritual essence, or both.',
    explanationAmharic: 'ኦንቶሎጂ (Ontology / የስነ-ህልውና ጥናት) የእውነታን፣ የህልውናንና የነገሮችን መሠረታዊ ምንነት (ለምሳሌ እውነታ የተገነባው ከቁስ ነው፣ ከመንፈስ ነው ወይስ ከሁለቱም?) የሚመረምር የሜታፊዚክስ ዋነኛ ዘርፍ ነው። ስለዚህ ትክክለኛው መልስ E ነው።',
    explanationAfaanOromo: 'Ontology damee meetaafiziksii kan bu\'uura jiruu, uumamaafi wantoota jiran qoratudha (fknf wanti uumame kun wanta qabatamaadha moo hafuuradha moo lamaan isaaniiti?). Kanaafuu deebiin sirriin E dha.'
  },

  // =========================================================================
  // Question 15
  // =========================================================================
  {
    id: 'loct-2018-mid-q15',
    courseId: 'loct-1011',
    courseCode: 'LoCT 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Deductive Arguments: Validity vs Soundness',
    points: 1,
    question: 'Which of the following arguments is unsound but valid?',
    options: [
      'If it rains, then the streets get wet. It is not raining. Therefore, the streets are not wet.',
      'All Ethiopians are Muslim. All Kenyans are Muslims. Therefore, all Kenyans are Ethiopians.',
      'Some mammals are cats. All cats are mammals. Therefore, some mammals are cats?',
      'All squares have four sides. This figure is four sided. Therefore, it is square.',
      'All birds can fly. Penguins are birds. Therefore, penguins can fly.'
    ],
    correctAnswer: 4,
    hint: 'An unsound but valid argument has a logically valid form where the conclusion must follow if premises were true, but at least one premise is factually false.',
    explanation: 'The argument "All birds can fly; Penguins are birds; Therefore, penguins can fly" has a valid categorical structure. However, because the premise "All birds can fly" is empirically false (penguins and ostriches cannot fly), the argument is unsound.',
    explanationAmharic: 'አንድ ዲዳክቲቭ ክርክር ቅርጹ ትክክል ሆኖ ነገር ግን ቢያንስ አንዱ መነሻው ሀሰት ከሆነ "Unsound but valid" ይባላል። በምርጫ E ላይ ያለው ክርክር ቅርጹ ትክክል (Valid) ቢሆንም፣ "ሁሉም አእዋፍ ይበርራሉ" የሚለው የመጀመሪያው መነሻ ሀቅ ስላልሆነ (ፔንግዊን አይበርም) ክርክሩ "ያልተሟላ/Unsound" ነው። ስለዚህ ትክክለኛው መልስ E ነው።',
    explanationAfaanOromo: 'Falmiin tokko caasaa sirrii qabaatee (valid) garuu ragaaleen dhiyaatan dhugaa yoo hin taane \'unsound\' jedhama. Filannoo E irratti caasaan isaa sirrii ta\'us, "sinbira hundatu barrisa" jechuun soba waan ta\'eef (haldhaan hin barrisu), falmichis \'unsound but valid\' jedhama. Kanaafuu deebiin E dha.'
  },

  // =========================================================================
  // Question 16
  // =========================================================================
  {
    id: 'loct-2018-mid-q16',
    courseId: 'loct-1011',
    courseCode: 'LoCT 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Types of Inductive Arguments: Causal Inference',
    points: 1,
    question: 'What is the nature of the following argument? "The defendant’s threat was followed immediately by the victim’s decision to flee the scene. Threats of immediate harm typically cause a reasonable person to flee. Therefore, the defendant’s threat caused the victim’s flight."',
    options: [
      'Argument based on sign.',
      'Prediction.',
      'Inductive analogy',
      'Causal inference.',
      'Argument from authority.'
    ],
    correctAnswer: 3,
    hint: 'The argument connects a cause (threat) directly with an effect (flight).',
    explanation: 'A causal inference is an inductive reasoning process that moves from observing an effect to inferring its cause, or from observing an antecedent event to concluding that it caused a subsequent effect.',
    explanationAmharic: 'የምክንያትና ውጤት መስተጋብር ድምዳሜ (Causal inference) ማለት አንድ የተከሰተ ክስተት ለሌላው ክስተት መንስኤ/ምክንያት መሆኑን በማስረጃ የሚያስረዳ የማመዛዘን አይነት ነው። እዚህ ላይ ዛቻው ተጎጂው እንዲሸሽ ምክንያት ሆኗል ተብሎ ተደመደመ። ስለዚህ ትክክለኛው መልስ D ነው።',
    explanationAfaanOromo: 'Causal inference (Sababaa fi bu\'aa) falmii wanti tokko wanta biraatiif sababa ta\'uu isaa irratti hundaa\'edha. Asirratti sodaachisuun dhiyaate baqachuu nama miidhameetiif sababa ta\'uun ibsame. Kanaafuu deebiin D dha.'
  },

  // =========================================================================
  // Question 17
  // =========================================================================
  {
    id: 'loct-2018-mid-q17',
    courseId: 'loct-1011',
    courseCode: 'LoCT 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Properties of Deductive Logic: Validity',
    points: 1,
    question: 'Which one of the following statements is false?',
    options: [
      'Every statement has a truth value.',
      'A sound argument must be valid.',
      'There are varying degrees of validity.',
      'All arguments make inferential claims.',
      'Valid argument must have good reasoning.'
    ],
    correctAnswer: 2,
    hint: 'Deductive validity is an absolute, all-or-nothing property; it does not come in percentages or shades.',
    explanation: 'Validity in deductive logic is strictly an all-or-nothing property: an argument is either completely valid or completely invalid. It never admits of degrees (unlike inductive strength, which can be weak or strong). Therefore, statement C is false.',
    explanationAmharic: 'በስነ-አመክንዮ ውስጥ ትክክለኛነት (Validity) ሁለንተናዊ ወይም ሙሉ በሙሉ ያለ/የሌለ (all-or-nothing) ጉዳይ ነው። አንድ ዲዳክቲቭ ክርክር ትክክል (Valid) ነው ወይም ውድቅ (Invalid) ነው እንጂ "በከፊል ወይም በደረጃ ትክክል" ሊሆን አይችልም። ደረጃ ያለው የኢንደክቲቭ ክርክር ጥንካሬ (strength) ብቻ ነው። ስለዚህ ሀሰት የሆነው አባባል C ነው።',
    explanationAfaanOromo: 'Loojikii keessatti \'validity\'n wanta guutumaan guutuutti ta\'u ykn hin taanedha (all-or-nothing). Falmiin tokko \'valid\' dha ykn \'invalid\' dha malee sadarkaa adda addaa hin qabu. Sadarkaa kan qabu \'strength\' qofaadha. Kanaafuu yaadni soba ta\'e C dha.'
  },

  // =========================================================================
  // Question 18
  // =========================================================================
  {
    id: 'loct-2018-mid-q18',
    courseId: 'loct-1011',
    courseCode: 'LoCT 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Deductive Arguments: Structural Validity',
    points: 1,
    question: 'How do you evaluate the following argument? "Every person who appears at a crime scene is guilty of the crime. The witness appeared at the crime scene. Therefore, the witness is guilty of the crime."',
    options: [
      'Weak.',
      'Strong.',
      'Invalid.',
      'Valid.',
      'Cogent.'
    ],
    correctAnswer: 3,
    hint: 'Evaluate solely whether the conclusion would follow necessarily IF the premises were assumed to be true.',
    explanation: 'Validity is a formal structural property: if all persons at a crime scene were guilty, and the witness was at the crime scene, it would be impossible for the witness not to be guilty. Because the conclusion follows with necessity from the premises, the argument is Valid (though unsound due to a false first premise).',
    explanationAmharic: 'አንድ ክርክር ትክክለኛ (Valid) የሚባለው በመነሻዎቹና በድምዳሜው መዋቅራዊ ግንኙነት ላይ ተመስርቶ ነው። መነሻዎቹ እውነት ናቸው ተብለው ቢታሰቡ ድምዳሜው የግድ እውነት ይሆናል። ስለዚህ ክርክሩ በቅርጹ ትክክለኛ (Valid) ነው። ትክክለኛው መልስ D ነው።',
    explanationAfaanOromo: 'Falmiin kun caasaa isaa irratti hundaa\'uun \'Valid\' jedhama. Ragaaleen dhiyaatan soba ta\'anis, yoo dhugaa ta\'an jedhamee fudhatame murtoon dhiyaate sun dirqama dhugaa waan ta\'uuf caasaan isaa \'Valid\' dha. Kanaafuu deebiin D dha.'
  },

  // =========================================================================
  // Question 19
  // =========================================================================
  {
    id: 'loct-2018-mid-q19',
    courseId: 'loct-1011',
    courseCode: 'LoCT 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Types of Definitions: Stipulative vs Lexical',
    points: 1,
    question: 'A stipulative definition is not explained by one of the following statements:',
    options: [
      'It helps to set up secret codes.',
      'It cannot be evaluated as true or false',
      'It might involves coining a new word',
      'Useful to report a meaning a word already has in a language',
      'Assigning of meaning in stipulative definition is arbitrary.'
    ],
    correctAnswer: 3,
    hint: 'Reporting a meaning already in existence in a language is the exact role of a lexical definition.',
    explanation: 'A stipulative definition assigns meaning to a newly coined word or symbol for the first time; it is arbitrary and cannot be judged true or false. Reporting the preexisting meaning a word already has in a language describes a lexical definition.',
    explanationAmharic: 'የስምምነት/አዲስ ፍቺ (Stipulative definition) ለአንድ አዲስ ቃል ወይም ምህጻረ ቃል ለመጀመሪያ ጊዜ ትርጉም መስጠት ነው። በቋንቋ ውስጥ አስቀድሞ ያለውን ትርጉም መዘገብ የቃላት ፍቺ (Lexical definition) እንጂ የስምምነት ፍቺ ተግባር አይደለም። ስለዚህ ትክክለኛው መልስ D ነው።',
    explanationAfaanOromo: 'Hiikni \'Stipulative\' jedhamu jecha haaraaf yeroo jalqabaatiif hiika kennuudha. Jecha duraan afaan keessa jiruuf hiika kennuun garuu hojii \'Lexical definition\' ti. Kanaafuu deebiin sirriin D dha.'
  },

  // =========================================================================
  // Question 20
  // =========================================================================
  {
    id: 'loct-2018-mid-q20',
    courseId: 'loct-1011',
    courseCode: 'LoCT 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Deductive Arguments: Argument Based on Mathematics',
    points: 1,
    question: 'Suppose that I have received 300 birr from Mr. Kebede, 600 birr from Mr. Alemu and 900 birr from Mr. Abdi. It follows that the total amount of money I have collected from the three individuals is 1800 birr. This is typical example of argument based on:',
    options: [
      'Categorical syllogism.',
      'Disjunctive syllogism.',
      'Argument based on mathematics.',
      'Hypothetical syllogism.',
      'Argument from definition.'
    ],
    correctAnswer: 2,
    hint: 'The conclusion is strictly derived from an arithmetic addition computation: 300 + 600 + 900 = 1800.',
    explanation: 'An argument based on mathematics is a deductive argument in which the conclusion depends entirely on some purely arithmetic, geometric, or algebraic computation (300 + 600 + 900 = 1800 birr).',
    explanationAmharic: 'በሂሳብ ስሌት ላይ የተመሰረተ ክርክር (Argument based on mathematics) ድምዳሜው በቀጥታ በሂሳባዊ ድምር ወይም ቀመር (300 + 600 + 900 = 1800 ብር) ላይ የተመሰረተ ዲዳክቲቭ ክርክር ነው። ስለዚህ ትክክለኛው መልስ C ነው።',
    explanationAfaanOromo: 'Falmiin herrega irratti hundaa\'e (Argument based on mathematics) kan murtoon isaa herrega qulqulluu (300 + 600 + 900 = 1800) irratti hundaa\'uudha. Kanaafuu deebiin sirriin C dha.'
  },

  // =========================================================================
  // Question 21
  // =========================================================================
  {
    id: 'loct-2018-mid-q21',
    courseId: 'loct-1011',
    courseCode: 'LoCT 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Types of Inductive Arguments: Prediction',
    points: 1,
    question: 'What kind of argument is this? "Consumer demand for online shopping has steadily increased over the past decade. Retail companies are investing heavily in digital platforms and delivery infrastructure. Therefore, e-commerce will likely surpass traditional retail sales in many countries within the next ten years."',
    options: [
      'Causal inference.',
      'Argument from analogy.',
      'Prediction.',
      'Argument from authority.',
      'Argument based on sign.'
    ],
    correctAnswer: 2,
    hint: 'The argument uses past and present trends to project an event expected to take place in the future.',
    explanation: 'A prediction is an inductive argument that uses knowledge of past or present events and trends to infer what will probably happen in the future ("within the next ten years").',
    explanationAmharic: 'ትንበያ (Prediction) ካለፉ ወይም ከአሁን እውነታዎችና አዝማሚያዎች በመነሳት ወደፊት ስለሚከሰት ክስተት (በሚቀጥሉት አስር ዓመታት ውስጥ ስለሚሆነው ነገር) ድምዳሜ የሚሰጥበት የኢንደክቲቭ ክርክር አይነት ነው። ስለዚህ ትክክለኛው መልስ C ነው።',
    explanationAfaanOromo: 'Prediction (Tilmaama gara fuulduraa) ragaa darbee fi ammaa irratti hundaa\'uun waan gara fuulduraatti (waggoota kudhan dhufan keessatti) ta\'uu danda\'u tilmaamuudha. Kanaafuu deebiin sirriin C dha.'
  },

  // =========================================================================
  // Question 22
  // =========================================================================
  {
    id: 'loct-2018-mid-q22',
    courseId: 'loct-1011',
    courseCode: 'LoCT 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Types of Inductive Arguments: Argument from Analogy',
    points: 1,
    question: 'An economy functions through the interactions of producers, consumers, and markets. A living ecosystem functions through interactions among plants, animals, and their environment. Therefore, an economy is like an ecosystem, since both depend on balanced interactions to remain stable. This is;',
    options: [
      'Argument based on sign.',
      'Argument from analogy.',
      'Prediction.',
      'Inductive generalization.',
      'Argument from authority.'
    ],
    correctAnswer: 1,
    hint: 'The argument draws a comparative parallel between the dynamics of an economy and a biological ecosystem.',
    explanation: 'An argument from analogy establishes that because two separate things share known points of structural or functional similarity (interactions among constituent parts), they also share further analogous qualities.',
    explanationAmharic: 'በማነጻጸር/በምሳሌያዊነት ላይ የተመሰረተ ክርክር (Argument from analogy) በሁለት የተለያዩ ነገሮች (በኢኮኖሚና በስነ-ምህዳር) መካከል ያለውን ተመሳሳይነት በማነጻጸር ድምዳሜ ላይ የሚደረስበት ነው። ስለዚህ ትክክለኛው መልስ B ነው።',
    explanationAfaanOromo: 'Argument from analogy (Wal-bira qabuun falmuu) wantoota adda addaa lama (dinagdee fi naannoo uumamaa) walfakkeenya qaban irratti hundaa\'uun murtoo kennuudha. Kanaafuu deebiin sirriin B dha.'
  },

  // =========================================================================
  // Question 23
  // =========================================================================
  {
    id: 'loct-2018-mid-q23',
    courseId: 'loct-1011',
    courseCode: 'LoCT 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Meaning and Language: Vagueness',
    points: 1,
    question: 'Which of the following statements contains a vague expression or term?',
    options: [
      'Kelbesa said that his apartment is located on Palm Street.',
      'Mr. Kedir, my neighbor, is wealthy.',
      'Yesterday, club Arsenal defeated Branford.',
      'A stolen bicycle was found by man sleeping in the park.',
      'Elias watched Helen throw ball through the window.'
    ],
    correctAnswer: 1,
    hint: 'Vagueness occurs when a term lacks an exact cutoff threshold, creating unclear borderline cases.',
    explanation: 'An expression is vague when its meaning allows for borderline cases where it is impossible to determine definitively whether the term applies. "Wealthy" is vague because there is no exact dollar amount that marks the precise boundary of wealth.',
    explanationAmharic: 'አሻሚ/ወሰን አልባ ቃል (Vague expression) ማለት ግልጽ የድንበር ወሰን የሌለው ቃል ነው። "ሀብታም" (wealthy) የሚለው ቃል አንድ ሰው በትክክል ስንት ብር ሲኖረው ሀብታም እንደሚባል ግልጽ ወሰን ስለሌለው አሻሚ (vague) ቃል ነው። ስለዚህ ትክክለኛው መልስ B ነው።',
    explanationAfaanOromo: 'Jechi daangaa ifaa hin qabne (vague) daangaa sirrii wanti tokko itti ibsamu dhabuudha. Jechi "sooressa" (wealthy) jedhu qarshii meeqa yoo qabaate akka sooretti lakkaa\'amu daangaa ifaa waan hin qabneef deebiin B dha.'
  },

  // =========================================================================
  // Question 24
  // =========================================================================
  {
    id: 'loct-2018-mid-q24',
    courseId: 'loct-1011',
    courseCode: 'LoCT 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Types of Inductive Arguments: Argument from Analogy',
    points: 1,
    question: 'I know for sure that it would be wrong to raise dogs in horrible conditions where they suffer for their entire lives. But, it is also known that pigs are just as smart as dogs, and capable of the same wide range of emotions, and feel pain and suffering in the same that dogs do. So, it is probably also wrong to raise pigs in horrible conditions that exist in factory farms. This passage is an example of argument based on:',
    options: [
      'Argument from analogy.',
      'Categorical Syllogism',
      'Prediction',
      'Disjunctive Syllogism',
      'Hypothetical Syllogism'
    ],
    correctAnswer: 0,
    hint: 'The argument compares the ethical consideration and emotional sentience of dogs to pigs.',
    explanation: 'This passage is an argument from analogy: it draws an ethical conclusion about the treatment of pigs by highlighting their relevant similarities (intelligence, capacity for pain and emotion) to dogs.',
    explanationAmharic: 'ይህ በማነጻጸር/ምሳሌነት ላይ የተመሰረተ ክርክር (Argument from analogy) ነው። የውሾችን እና የአሳማዎችን ተመሳሳይ የስሜትና የስቃይ ተጋላጭነት በማነጻጸር አሳማዎችን በጭካኔ ማርባትም ስህተት ነው የሚል ድምዳሜ ላይ ደርሷል። ስለዚህ ትክክለኛው መልስ A ነው።',
    explanationAfaanOromo: 'Kun \'Argument from analogy\' dha. Sababni isaas amala saree fi booyyeen miira dhukkubbii fi beekumsa irratti qaban walbira qabuun booyyee miidhuunis sirrii akka hin taane murteesse. Kanaafuu deebiin A dha.'
  },

  // =========================================================================
  // Question 25
  // =========================================================================
  {
    id: 'loct-2018-mid-q25',
    courseId: 'loct-1011',
    courseCode: 'LoCT 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Basic Concepts of Logic: Nature of Arguments',
    points: 1,
    question: 'Which of the following is true?',
    options: [
      'Arguments must always claim to prove something.',
      'An argument must always have a premise indicator and a conclusion indicator.',
      'An argument must always have at least two premises and one conclusion.',
      'All passages are argumentative passages.',
      'It is necessary that an argument must present actual evidence or true reason for it to be considered as argument.'
    ],
    correctAnswer: 0,
    hint: 'An argument is distinguished by its inferential claim—claiming that something is demonstrated or proved.',
    explanation: 'By definition, every argument makes an inferential claim—that the premises provide evidence claiming to prove or support a conclusion. Indicator words or actual objective truth of premises are not strictly required for an argument to exist.',
    explanationAmharic: 'በስነ-አመክንዮ መሠረት ክርክር (Argument) ሁልጊዜ አንድን ነገር ወይም ድምዳሜን የማስረዳት ወይም የማረጋገጥ የይገባኛል ጥያቄ (claim to prove something / inferential claim) ያቀርባል። ስለዚህ ትክክለኛው መልስ A ነው።',
    explanationAfaanOromo: 'Akka loojikiitti, falmiin kamiyyuu wanta tokko mirkaneessuuf ykn ragaa dhiyeessuuf yaalii gochuu (claim to prove something) qaba. Kanaafuu yaadni dhugaa ta\'e A dha.'
  },

  // =========================================================================
  // Question 26
  // =========================================================================
  {
    id: 'loct-2018-mid-q26',
    courseId: 'loct-1011',
    courseCode: 'LoCT 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Deductive Syllogisms: Disjunctive Syllogism',
    points: 1,
    question: 'A professor states: "Either the power failed or the server malfunctioned. The power did not fail. Therefore, the server malfunctioned." Which logical structure does this argument follow?',
    options: [
      'Argument from definition.',
      'Categorical syllogism',
      'Hypothetical syllogism',
      'Argument based on mathematics.',
      'Disjunctive syllogism'
    ],
    correctAnswer: 4,
    hint: 'Recognize the disjunction "Either A or B" combined with the negation of one option: "Not A; therefore B."',
    explanation: 'A disjunctive syllogism consists of a disjunctive premise ("Either P or Q"), a second premise denying one alternative ("Not P"), and a conclusion affirming the remaining alternative ("Therefore, Q").',
    explanationAmharic: 'አማራጭ ሲሎጊዝም (Disjunctive syllogism) በውስጡ "ወይ ይሄ ወይም ያኛው" (Either... or...) የሚል የአማራጭ አረፍተ ነገር ይዞ አንዱን ውድቅ በማድረግ ሌላኛውን የሚያጸድቅ የዲዳክቲቭ ክርክር ቅርጽ ነው። ስለዚህ ትክክለኛው መልስ E ነው።',
    explanationAfaanOromo: 'Disjunctive syllogism falmii jecha "Yookiin... yookiin..." (Either... or...) jedhuun jalqabee tokko kuffisuun isa kaan dhugaa godhudha. Kanaafuu deebiin E dha.'
  },

  // =========================================================================
  // Question 27
  // =========================================================================
  {
    id: 'loct-2018-mid-q27',
    courseId: 'loct-1011',
    courseCode: 'LoCT 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Non-Argumentative Passages: Exposition',
    points: 1,
    question: 'What kind of passage is this? "Acids are substances that release hydrogen ions when dissolved in water. Their strength is determined by how completely they dissociate into ions. Strong acids, such as hydrochloric acid, dissociate fully, while weak acids only partially separate. The pH scale is used to measure acidity, with lower values indicating stronger acids. Understanding acid strength is crucial in predicting chemical reactions and behavior in solution."',
    options: [
      'Argument.',
      'Explanation.',
      'Illustration.',
      'Exposition.',
      'Report.'
    ],
    correctAnswer: 3,
    hint: 'An exposition states a general topic sentence and then systematically expands and elaborates on it without proving a disputed thesis.',
    explanation: 'An expository passage (exposition) begins with a topic sentence and elaborates on it to inform or clarify details about a concept rather than attempting to prove an argumentative claim.',
    explanationAmharic: 'ገላጭ/አብራሪ ምንባብ (Exposition) ማለት በመነሻው ላይ አንድ መሪ አረፍተ ነገር አስቀምጦ፣ ስለ ርዕሱ ተጨማሪ መረጃዎችንና ማብራሪያዎችን በዝርዝር የሚያብራራና የሚያስተምር የጽሁፍ አይነት ነው። ስለዚህ ትክክለኛው መልስ D ነው።',
    explanationAfaanOromo: 'Exposition (Barruu ibsaa) yaada ijoo tokkoon jalqabee waa\'ee mata-duree sanaa bal\'inaan ibsa fi ragaalee kennuudha malee yaada falmisiisaa mirkaneessuuf kan dhiyaate miti. Kanaafuu deebiin D dha.'
  },

  // =========================================================================
  // Question 28
  // =========================================================================
  {
    id: 'loct-2018-mid-q28',
    courseId: 'loct-1011',
    courseCode: 'LoCT 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Techniques of Definition: Genus and Difference',
    points: 1,
    question: 'What is the technique used in the following definition? A "smartphone" is a mobile phone with advanced computing capabilities and internet access.',
    options: [
      'Genus and difference.',
      'Operational definition.',
      'Subclass definition.',
      'Enumerative definition.',
      'Etymological definition.'
    ],
    correctAnswer: 0,
    hint: 'Genus = "mobile phone", Difference = "with advanced computing capabilities and internet access".',
    explanation: 'Definition by genus and difference identifies the broader category/genus ("mobile phone") and specifies the specific attribute or difference that distinguishes smartphones from other types of mobile phones.',
    explanationAmharic: 'በስብስብና በልዩ ባህሪ የሚሰጥ ፍቺ (Genus and difference) ቃሉ የሚካተትበትን ሰፊ የስብስብ ክፍል (Genus: ሞባይል ስልክ) በመጥቀስ፣ ከሌሎቹ የስብስቡ አባላት የሚለየውን ልዩ መለያ (Difference: የላቀ የኮምፒውተርና የኢንተርኔት አቅም ያለው መሆኑን) በማከል የሚሰጥ ፍቺ ነው። ስለዚህ ትክክለኛው መልስ A ነው።',
    explanationAfaanOromo: 'Hiikni \'Genus and difference\' madaallii sanyii fi garaagarummaa fayyadamuun kan dhiyaatedha. Sanyiin isaa (Genus) \'bilbila harkaa\' yoo ta\'u, garaagarummaan isaa (Difference) \'dandeettii koompiitaraa olaanaa fi intarneetii qabaachuu\' dha. Kanaafuu deebiin A dha.'
  },

  // =========================================================================
  // Question 29
  // =========================================================================
  {
    id: 'loct-2018-mid-q29',
    courseId: 'loct-1011',
    courseCode: 'LoCT 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Rules for Lexical Definitions: Too Broad',
    points: 1,
    question: 'Which rules of lexical definition violated by the following definition? "Women" means female.',
    options: [
      'It is too narrow.',
      'It is negative.',
      'It uses affective terminology.',
      'It does not conform to the standard of proper grammar.',
      'It is too broad.'
    ],
    correctAnswer: 4,
    hint: '"Female" includes all female animals (cows, mares) and female children (infants, girls), making it encompass far more than adult human females.',
    explanation: 'A definition is too broad if the definiens applies to items not encompassed by the definiendum. Defining "women" as simply "female" is far too broad because it includes female animals of any species and young girls/female infants.',
    explanationAmharic: 'ፍቺው እጅግ ሰፊ ነው (It is too broad)። "ሴት" (women) የሚለውን ቃል "እንስት" (female) ብቻ ብሎ መተርጎም እንስት እንስሳትንና ህጻናትን ጭምር ስለሚያካትት ፍቺው ከተፈለገው በላይ እጅግ የሰፋ (too broad) ሆኗል። ስለዚህ ትክክለኛው መልስ E ነው።',
    explanationAfaanOromo: 'Hiikni kun baay\'ee bal\'aadha (It is too broad). \'Dubartii\' jechuun \'dhalaa\' qofa jechuun beelladoota dhalaa fi daa\'imman dubaraas waan dabalatuuf hiikni isaa daangaa dabarseera. Kanaafuu deebiin E dha.'
  },

  // =========================================================================
  // Question 30
  // =========================================================================
  {
    id: 'loct-2018-mid-q30',
    courseId: 'loct-1011',
    courseCode: 'LoCT 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Branches of Philosophy: Social and Political Philosophy',
    points: 1,
    question: 'Which one of the following branches of philosophy is asking general and foundational questions concerning society, state and government?',
    options: [
      'Philosophy of Law',
      'Social and political philosophy',
      'Logic.',
      'Aesthetics',
      'Philosophy of Anthropology.'
    ],
    correctAnswer: 1,
    hint: 'Investigates the legitimacy of political power, sovereignty, justice, and social institutions.',
    explanation: 'Social and political philosophy is the branch of philosophy that examines foundational questions regarding the nature, structure, authority, justice, and legitimacy of society, the state, and governmental power.',
    explanationAmharic: 'ማህበራዊ እና ፖለቲካዊ ፍልስፍና (Social and political philosophy) ስለ ማህበረሰብ አመሰራረት፣ ስለ መንግስት ህጋዊነት፣ ስልጣንና አስተዳደር መሠረታዊ ጥያቄዎችን የሚመረምር የፍልስፍና ዘርፍ ነው። ስለዚህ ትክክለኛው መልስ B ነው።',
    explanationAfaanOromo: 'Social and political philosophy (Falaasama hawaasaa fi siyaasaa) damee falaasamaa kan waa\'ee bu\'uura hawaasaa, sirna mootummaa, aangoo fi bulchiinsaa qoratudha. Kanaafuu deebiin B dha.'
  }
];
