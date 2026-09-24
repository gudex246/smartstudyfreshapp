import { Chapter, Course } from '../types';

export interface UnitQuizQuestion {
  id: string;
  courseId: string;
  courseCode: string;
  unitNumber: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  explanationAmharic?: string;
  explanationAfaanOromo?: string;
  hint?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  topic?: string;
}

// Curated high-yield unit quiz questions directly covering Ethiopian University Freshman lecture notes
export const UNIT_QUIZ_BANK: UnitQuizQuestion[] = [
  // =========================================================================
  // PSYCHOLOGY (Psyc 1011)
  // =========================================================================
  // Unit 1: Essence of Psychology
  {
    id: 'uq-psyc-1-1',
    courseId: 'psyc-1011',
    courseCode: 'Psyc 1011',
    unitNumber: 1,
    topic: 'Historical Foundation',
    difficulty: 'easy',
    question: 'In what year and by whom was the first formal laboratory of modern scientific psychology established at the University of Leipzig, Germany?',
    options: [
      'A. 1879 by Wilhelm Wundt',
      'B. 1900 by Sigmund Freud',
      'C. 1913 by John B. Watson',
      'D. 1890 by William James'
    ],
    correctAnswer: 0,
    hint: 'He is known as the "Father of Modern Psychology" and pioneered objective introspection.',
    explanation: 'Modern scientific psychology formally originated in 1879 when Wilhelm Wundt established the first dedicated psychological research laboratory at the University of Leipzig in Germany.',
    explanationAmharic: 'ሳይንሳዊ የስነ-ልቦና ትምህርት በይፋ የተጀመረው በ1879 እ.ኤ.አ በጀርመን ላይፕዚግ ዩኒቨርሲቲ በዊልሄልም ቩንድት (Wilhelm Wundt) የመጀመሪያው የስነ-ልቦና ቤተ-ሙከራ ሲቋቋም ነው።',
    explanationAfaanOromo: 'Saayinsiin saayikoloojii kan jalqabe bara 1879tti Yuunivarsiitii Leipzig Jarmanitti Wiilhelmi Wundt (Wilhelm Wundt) mana yaalii saayikoloojii isa jalqabaa yeroo hundeessetti.'
  },
  {
    id: 'uq-psyc-1-2',
    courseId: 'psyc-1011',
    courseCode: 'Psyc 1011',
    unitNumber: 1,
    topic: 'Goals of Psychology',
    difficulty: 'medium',
    question: 'A psychologist notices that university freshmen experience high anxiety before examinations and systematically records where and when this happens without assuming the cause. Which goal of psychology is being fulfilled?',
    options: [
      'A. Explanation',
      'B. Description',
      'C. Prediction',
      'D. Control'
    ],
    correctAnswer: 1,
    hint: 'This goal answers "What is happening?" by systematically observing and recording behaviors.',
    explanation: 'Description involves observing, naming, and classifying behavior systematically ("What is happening?") without yet explaining the underlying causes or attempting to alter the behavior.',
    explanationAmharic: 'መግለፅ (Description) ማለት ባህሪው የት፣ መቼ እና እንዴት እንደሚከሰት ሳይንሳዊ በሆነ መንገድ መመዝገብ ሲሆን "ምን እየተከሰተ ነው?" ለሚለው ጥያቄ መልስ ይሰጣል።',
    explanationAfaanOromo: 'Ibsuu (Description) jechuun amalli tokko eessatti, yoomii fi akkamitti akka uumamu ragaa qabatamaa qabachuudha ("Maaltu ta\'aa jira?" kan jedhuuf deebii kenna).'
  },
  {
    id: 'uq-psyc-1-3',
    courseId: 'psyc-1011',
    courseCode: 'Psyc 1011',
    unitNumber: 1,
    topic: 'Modern Perspectives',
    difficulty: 'medium',
    question: 'Which modern psychological perspective is widely known as the "Third Force" because it rejects both deterministic psychoanalysis and mechanistic behaviorism, focusing instead on free will and self-actualization?',
    options: [
      'A. Cognitive Perspective',
      'B. Biological Perspective',
      'C. Humanistic Perspective',
      'D. Socio-cultural Perspective'
    ],
    correctAnswer: 2,
    hint: 'Championed by Carl Rogers and Abraham Maslow, focusing on human potential and inherent goodness.',
    explanation: 'The Humanistic Perspective (Carl Rogers, Abraham Maslow) arose as the "Third Force" in psychology, prioritizing free will, human dignity, conscious choice, and the universal pursuit of self-actualization.',
    explanationAmharic: 'ሂውማኒስቲክ አመለካከት (Humanistic Perspective) በካርል ሮጀርስ እና አብርሃም ማስሎው የተመሰረተ ሲሆን የሰው ልጅን ነፃ ፈቃድ እና ወደ ሙሉ አቅም ማደግን (Self-actualization) በማስቀደም "ሦስተኛው ኃይል" በመባል ይታወቃል።',
    explanationAfaanOromo: 'Ilaalchi Namummaa (Humanistic Perspective) Carl Rogers fi Abraham Maslow\'n kan hoogganamu yoo ta\'u fedhii bilisaa fi of danda\'uu (self-actualization) irratti waan xiyyeeffatuuf "Humna Sadaffaa" jedhama.'
  },

  // Unit 2: Sensation and Perception
  {
    id: 'uq-psyc-2-1',
    courseId: 'psyc-1011',
    courseCode: 'Psyc 1011',
    unitNumber: 2,
    topic: 'Sensory Thresholds',
    difficulty: 'medium',
    question: 'The minimum amount of physical energy or stimulus intensity required for a sensory receptor to detect it 50% of the time is termed the:',
    options: [
      'A. Difference Threshold (JND)',
      'B. Absolute Threshold',
      'C. Sensory Adaptation',
      'D. Signal Transduction'
    ],
    correctAnswer: 1,
    hint: 'It is the absolute boundary between sensing nothing and detecting something half the time.',
    explanation: 'The absolute threshold is the weakest detectable level of stimulus that a person can detect at least 50 percent of the time (e.g. candle flame at 30 miles on a dark night).',
    explanationAmharic: 'ፍፁም ደፍ (Absolute Threshold) ማለት ህዋሳቶቻችን አንድን ማነቃቂያ በ50% ጊዜ ውስጥ ማወቅ የሚችሉበት አነስተኛው የሃይል ወይም የድምፅ መጠን ነው።',
    explanationAfaanOromo: 'Daangaa Gonkaa (Absolute Threshold) jechuun hamma xiqqaa anniisaa ykn soorgoon qaamaa dandeettii dhageettii/argaa keenyaan yoo xiqqaate dhibbeentaa 50 keessatti beekamuu danda\'uudha.'
  },
  {
    id: 'uq-psyc-2-2',
    courseId: 'psyc-1011',
    courseCode: 'Psyc 1011',
    unitNumber: 2,
    topic: 'Gestalt Principles',
    difficulty: 'medium',
    question: 'When reading a textbook, your visual system automatically fills in missing gaps in a broken circular diagram to perceive it as an intact, whole circle. Which Gestalt principle explains this?',
    options: [
      'A. Principle of Proximity',
      'B. Principle of Similarity',
      'C. Principle of Closure',
      'D. Principle of Continuity'
    ],
    correctAnswer: 2,
    hint: 'The mind tends to "close" or complete incomplete figures.',
    explanation: 'The Gestalt principle of Closure states that the brain tends to fill in gaps and connect separated sensory elements to perceive a complete, enclosed whole object.',
    explanationAmharic: 'ክሎዠር (Closure) የአዕምሮአችን ክፍተቶችን በራስ-ሰር በመሙላት ያልተሟሉ ቅርጾችን እንደ አንድ ሙሉ እና የተዘጋ ነገር አድርጎ የመረዳት ዝንባሌ ነው።',
    explanationAfaanOromo: 'Seerri Cufee (Closure) jedhamu sammuun keenya bakka qaawwi jiru guutuun wantoota guutuu hin taane akka guutuu ta\'anitti hubachuu agarsiisa.'
  },

  // Unit 3: Learning Theories
  {
    id: 'uq-psyc-3-1',
    courseId: 'psyc-1011',
    courseCode: 'Psyc 1011',
    unitNumber: 3,
    topic: 'Classical Conditioning',
    difficulty: 'medium',
    question: 'In Ivan Pavlov famous classical conditioning experiments with dogs, what was the bell sound BEFORE conditioning took place, and what did it become AFTER conditioning?',
    options: [
      'A. Unconditioned Stimulus (UCS) ➔ Conditioned Stimulus (CS)',
      'B. Neutral Stimulus (NS) ➔ Conditioned Stimulus (CS)',
      'C. Conditioned Response (CR) ➔ Unconditioned Response (UCR)',
      'D. Primary Reinforcer ➔ Secondary Reinforcer'
    ],
    correctAnswer: 1,
    hint: 'Initially the bell triggered no salivation (neutral), but after pairing with meat powder it triggered salivation.',
    explanation: 'Prior to training, the bell had no innate relation to salivation, making it a Neutral Stimulus (NS). After repeated pairing with food (UCS), the bell elicited learned salivation, becoming the Conditioned Stimulus (CS).',
    explanationAmharic: 'ከስልጠና በፊት የደወል ድምፅ ምራቅ አያመጣም ነበር ስለዚህ ገለልተኛ ማነቃቂያ (NS) ነበር፤ ከምግብ (UCS) ጋር ከተደጋገመ በኋላ ግን ለምዶ ምራቅ የሚያስወጣ የተቃኘ ማነቃቂያ (CS) ሆነ።',
    explanationAfaanOromo: 'Leenjiin dura bilbilli dhangala\'aa afaanii hin fidu waan ta\'eef soorgoo giddu-galeessaa (NS) ture; erga nyaata (UCS) waliin deddeebi\'ee walqabatee booda garuu soorgoo baratame (CS) ta\'e.'
  },
  {
    id: 'uq-psyc-3-2',
    courseId: 'psyc-1011',
    courseCode: 'Psyc 1011',
    unitNumber: 3,
    topic: 'Operant Conditioning',
    difficulty: 'hard',
    question: 'A mother takes away her son video game console because he received poor marks in his school exam. In B.F. Skinner operant conditioning paradigm, this consequence is classified as:',
    options: [
      'A. Positive Punishment',
      'B. Negative Reinforcement',
      'C. Negative Punishment',
      'D. Extinction'
    ],
    correctAnswer: 2,
    hint: '"Negative" means removing a stimulus, and "Punishment" means decreasing the undesirable behavior.',
    explanation: 'Negative Punishment involves the removal (negative) of a desirable stimulus (video games) in order to decrease (punishment) an unwanted behavior (poor academic effort/marks).',
    explanationAmharic: 'አሉታዊ ቅጣት (Negative Punishment) ማለት የማይፈለግን ባህሪ ለመቀነስ ሲባል ተወዳጅ የሆነን ነገር (የቪዲዮ ጌም) ማስወገድ ወይም መውሰድ ነው።',
    explanationAfaanOromo: 'Adabbii Negaatiivii (Negative Punishment) jechuun amala hin barbaadamne hir\'isuuf jecha wanta namatti tolu (viidiyoo geemii) nama jalaa fudhachuudha.'
  },

  // Unit 4: Memory and Forgetting
  {
    id: 'uq-psyc-4-1',
    courseId: 'psyc-1011',
    courseCode: 'Psyc 1011',
    unitNumber: 4,
    topic: 'Atkinson-Shiffrin Model',
    difficulty: 'easy',
    question: 'According to George Miller classic research, what is the average storage capacity of human Short-Term Memory (STM) without chunking or rehearsal?',
    options: [
      'A. 3 to 4 items',
      'B. 7 ± 2 items (5 to 9 units)',
      'C. 15 to 20 items',
      'D. Unlimited capacity'
    ],
    correctAnswer: 1,
    hint: 'Known in psychology as "The Magical Number Seven, Plus or Minus Two".',
    explanation: 'George Miller demonstrated that Short-Term Memory (STM) holds approximately 7 plus or minus 2 chunks of information for roughly 15 to 30 seconds unless maintained by rehearsal.',
    explanationAmharic: 'ጆርጅ ሚለር እንደገለፀው የአጭር ጊዜ ማህደረ-ትውስታ (STM) ያለ ድጋሚ ልምምድ በአማካይ ከ5 እስከ 9 (7 ± 2) መረጃዎችን ብቻ መያዝ ይችላል።',
    explanationAfaanOromo: 'George Miller akka qorateetti kuusaan yaadannoo yeroo gabaabaa (STM) giddu-galeessaan odeeffannoo 7 ± 2 (5 hanga 9) qofa qabachuu danda\'a.'
  },
  {
    id: 'uq-psyc-4-2',
    courseId: 'psyc-1011',
    courseCode: 'Psyc 1011',
    unitNumber: 4,
    topic: 'Interference Theory',
    difficulty: 'hard',
    question: 'A university student memorized their new phone number. Now, whenever an old friend asks for their previous old phone number, the student can only remember the new one. This forgetting is caused by:',
    options: [
      'A. Proactive Interference',
      'B. Retroactive Interference',
      'C. Decay Theory',
      'D. Repression'
    ],
    correctAnswer: 1,
    hint: 'New information interferes backward to block the retrieval of older information.',
    explanation: 'Retroactive Interference happens when newly learned information (new phone number) disrupts and prevents the recall of previously stored older information (old phone number).',
    explanationAmharic: 'ወደኋላ ተመላሽ ጣልቃ-ገብነት (Retroactive Interference) የሚከሰተው አዲስ የተማርነው መረጃ የድሮውን መረጃ እንዳናስታውስ እንቅፋት ሲሆንብን ነው።',
    explanationAfaanOromo: 'Gidduu-lixinsa duubatti deebi\'aa (Retroactive Interference) kan uumamu odeeffannoon haaraan baranne odeeffannoo duraanii akka hin yaadanne yeroo godhuudha.'
  },

  // =========================================================================
  // LOGIC AND CRITICAL THINKING (LoCT 1011 / Phil 1011)
  // =========================================================================
  // Unit 1: Introducing Philosophy
  {
    id: 'uq-logic-1-1',
    courseId: 'phil-1011',
    courseCode: 'LoCT 1011',
    unitNumber: 1,
    topic: 'Branches of Philosophy',
    difficulty: 'medium',
    question: 'Which fundamental branch of philosophy systematically investigates the nature, sources, limits, and validity of human knowledge (truth vs. belief)?',
    options: [
      'A. Metaphysics',
      'B. Epistemology',
      'C. Axiology',
      'D. Ethics'
    ],
    correctAnswer: 1,
    hint: 'Derived from Greek "episteme" meaning knowledge and "logos" meaning study.',
    explanation: 'Epistemology is the theory of knowledge. It asks: "What is knowledge?", "How is knowledge acquired?", and "What distinguishes justified true belief from mere opinion?"',
    explanationAmharic: 'ኤፒስቲሞሎጂ (Epistemology) የእውቀት ምንነትን፣ ምንጮችን እና ድንበሮችን የሚመረምር የፍልስፍና ዘርፍ ነው።',
    explanationAfaanOromo: 'Eppistimooloojii (Epistemology) damee falaasamaa kan waa\'ee maddaa, daangaa fi dhugummaa beekumsa dhala namaa qoratuudha.'
  },

  // Unit 2: Basic Concepts of Logic
  {
    id: 'uq-logic-2-1',
    courseId: 'phil-1011',
    courseCode: 'LoCT 1011',
    unitNumber: 2,
    topic: 'Deductive Validity and Soundness',
    difficulty: 'hard',
    question: 'A deductive argument is defined as "Sound" if and only if it satisfies which two conditions?',
    options: [
      'A. It is valid, and all of its premises are actually true in reality.',
      'B. It is strong, and all premises are probable.',
      'C. Its conclusion is true, regardless of the truth of its premises.',
      'D. It contains exactly two premises and three categorical terms.'
    ],
    correctAnswer: 0,
    hint: 'Soundness = Validity + Actual Truth of all premises.',
    explanation: 'A deductive argument is sound if: (1) it is logically valid (the conclusion follows necessarily from the premises), AND (2) all of its premises are factually true.',
    explanationAmharic: 'አንድ የዲዳክቲቭ ክርክር አስተማማኝ (Sound) የሚባለው፡ ክርክሩ ትክክለኛ (valid) ሲሆን እና ሁሉም መነሻ ሀሳቦቹ (premises) በእውነታው ዓለም እውነት ሲሆኑ ብቻ ነው።',
    explanationAfaanOromo: 'Falmiin dabalataa (Deductive argument) guutuu fi amansiisaa (Sound) kan ta\'u: (1) Seera qabeessa (valid) yoo ta\'e, fi (2) Ragaaleen (premises) hundi dhugaa qabatamaa yoo ta\'aniidha.'
  },

  // Unit 3: Informal Fallacies
  {
    id: 'uq-logic-3-1',
    courseId: 'phil-1011',
    courseCode: 'LoCT 1011',
    unitNumber: 3,
    topic: 'Fallacies of Relevance',
    difficulty: 'medium',
    question: '"You argue that tuition fees should be reduced, but why should we listen to you when you were caught cheating on last semester calculus exam?" This statement commits which informal fallacy?',
    options: [
      'A. Straw Man fallacy',
      'B. Argumentum ad Populum (Appeal to People)',
      'C. Argumentum ad Hominem (Abusive)',
      'D. Red Herring'
    ],
    correctAnswer: 2,
    hint: 'It attacks the personal character of the arguer rather than addressing their actual argument.',
    explanation: 'Argumentum ad Hominem (Abusive) attacks the advocate\'s personal character, honesty, or background instead of evaluating the merits and logic of the argument itself.',
    explanationAmharic: 'አድ ሆሚነም (Argumentum ad Hominem) የቀረበውን አመክንዮአዊ ሀሳብ ከመመዘን ይልቅ ተከራካሪውን ግለሰብ በስብዕናው ማጥቃት ላይ የሚያተኩር የስህተት ክርክር ነው።',
    explanationAfaanOromo: 'Dogoggora \'Ad Hominem\' kan jedhamu yaada dhiyaate xiinxaluu dhiisanii amala dhuunfaa nama falmu sanaa arrabsuu ykn ceepha\'uudha.'
  },

  // =========================================================================
  // GEOGRAPHY OF ETHIOPIA AND THE HORN (GeES 1011)
  // =========================================================================
  // Unit 1: Introduction and Location
  {
    id: 'uq-geog-1-1',
    courseId: 'gees-1011',
    courseCode: 'GeES 1011',
    unitNumber: 1,
    topic: 'Location of Ethiopia',
    difficulty: 'easy',
    question: 'What is the absolute (astronomical) latitudinal and longitudinal extension of Ethiopia?',
    options: [
      'A. 3°N to 15°N Latitude and 33°E to 48°E Longitude',
      'B. 0° to 10°S Latitude and 20°E to 40°E Longitude',
      'C. 5°N to 20°N Latitude and 30°E to 45°E Longitude',
      'D. 8°N to 12°N Latitude and 35°E to 42°E Longitude'
    ],
    correctAnswer: 0,
    hint: 'Moyale lies near 3°N in the south, Bademe near 15°N in the north, Akobo near 33°E in the west.',
    explanation: 'Ethiopia extends astronomically from approximately 3°N (Moyale) to 14°53\'N (often generalized as 15°N) Latitude, and 32°42\'E to 48°E Longitude.',
    explanationAmharic: 'የኢትዮጵያ ፍፁማዊ የኬክሮስ እና የኬንትሮስ መገኛ በግምት ከ 3° ሰሜን እስከ 15° ሰሜን ኬክሮስ እና ከ 33° ምስራቅ እስከ 48° ምስራቅ ኬንትሮስ ነው።',
    explanationAfaanOromo: 'Argamni astiroonoomii Itoophiyaa tilmaamaan 3° Kaabaa hanga 15° Kaabaatti (laattitiyuudii) fi 33° Bahaa hanga 48° Bahaatti (loongitiyuudii) diriira.'
  },

  // Unit 2: Geology and Drainage
  {
    id: 'uq-geog-2-1',
    courseId: 'gees-1011',
    courseCode: 'GeES 1011',
    unitNumber: 2,
    topic: 'Geological Eras',
    difficulty: 'medium',
    question: 'During which geological era did the widespread marine transgression (inundation by the Indian Ocean) and subsequent regression occur in Ethiopia, depositing Adigrat sandstone, Hintalo limestone, and Upper Sandstone?',
    options: [
      'A. Precambrian Era',
      'B. Paleozoic Era',
      'C. Mesozoic Era',
      'D. Cenozoic Era'
    ],
    correctAnswer: 2,
    hint: 'Known as the era of sedimentary rock formation, followed by the Cenozoic rifting and volcanism.',
    explanation: 'The Mesozoic Era was characterized by the sinking and tilting of the Horn of Africa, causing the Indian Ocean to transgress (flood) from southeast to northwest and then regress, laying down massive sedimentary strata.',
    explanationAmharic: 'በሜሶዞይክ ዘመን (Mesozoic Era) የህንድ ውቅያኖስ ምድርን በመሸፈኑና መልሶ በመሸሹ ምክንያት እንደ አዲግራት አሸዋ ድንጋይ እና ህንጣሎ የኖራ ድንጋይ ያሉ ዝቃጭ ድንጋዮች ተፈጠሩ።',
    explanationAfaanOromo: 'Zamana Meesoozoyikii (Mesozoic) keessa Garbi Indiyaa lafa uwwisee (transgression) booda immoo duubatti deebi\'uun (regression) dhagoota jirreelaa kanneen akka dhagaa cirracha Adigrat fi dhagaa nooraa Hintalo uume.'
  },
  {
    id: 'uq-geog-2-2',
    courseId: 'gees-1011',
    courseCode: 'GeES 1011',
    unitNumber: 2,
    topic: 'Drainage Systems',
    difficulty: 'medium',
    question: 'Which river drainage system in Ethiopia is entirely endorheic (inland drainage), terminating in Lake Abe on the border between Ethiopia and Djibouti without reaching the open ocean?',
    options: [
      'A. Abbay (Blue Nile) Basin',
      'B. Awash River Basin',
      'C. Baro-Akobo Basin',
      'D. Genale-Dawa Basin'
    ],
    correctAnswer: 1,
    hint: 'It is the most utilized river in the Ethiopian Rift Valley for commercial irrigation (e.g. Wonji, Metehara).',
    explanation: 'The Awash River flows entirely within the Rift Valley and empties into a string of saline lakes, terminating in Lake Abe (endorheic basin) without opening into any sea or ocean.',
    explanationAmharic: 'የአዋሽ ወንዝ ተፋሰስ ወደ ውጭ ውቅያኖስ የማይፈስ (inland drainage) ሲሆን ጉዞውን በስምጥ ሸለቆ አድርጎ በኢትዮ-ጅቡቲ ድንበር አቤ ሐይቅ (Lake Abe) ላይ ያጠናቅቃል።',
    explanationAfaanOromo: 'Laga Awaash kan jedhamu qarqara galaanaa kan hin geenye yoo ta\'u, laggeen dachee dhooqaa keessa yaa\'uun Haroo Abee (Lake Abe) irratti kan dhumatuudha.'
  },

  // =========================================================================
  // GENERAL PHYSICS (Phys 1011)
  // =========================================================================
  // Unit 1: Vectors and Kinematics
  {
    id: 'uq-phys-1-1',
    courseId: 'phys-1011',
    courseCode: 'Phys 1011',
    unitNumber: 1,
    topic: 'Vector Operations',
    difficulty: 'medium',
    question: 'If vector A = 3i - 2j + 4k and vector B = 2i + 5j + Ck are mutually perpendicular in 3D space, what is the exact value of scalar constant C?',
    options: [
      'A. C = 1',
      'B. C = 2',
      'C. C = -1',
      'D. C = 0.5'
    ],
    correctAnswer: 0,
    hint: 'Two vectors are perpendicular if and only if their dot product A · B = 0.',
    explanation: 'A · B = (3)(2) + (-2)(5) + (4)(C) = 6 - 10 + 4C = -4 + 4C = 0. Solving: 4C = 4 ➔ C = 1.',
    explanationAmharic: 'ሁለት ቬክተሮች ፐርፔንዲኩላር የሚሆኑት ዶት ፕሮዳክታቸው ዜሮ ሲሆን ነው፡ (3)(2) + (-2)(5) + (4)(C) = 6 - 10 + 4C = -4 + 4C = 0 ➔ 4C = 4 ➔ C = 1።',
    explanationAfaanOromo: 'Veektaroonni lama wal-qaxxaamuraa (perpendicular) kan ta\'an dot product\'n isaanii zeeroo yoo ta\'e: (3)(2) + (-2)(5) + (4)(C) = 6 - 10 + 4C = 0 ➔ 4C = 4 ➔ C = 1.'
  },

  // Unit 2: Dynamics & Newton's Laws
  {
    id: 'uq-phys-2-1',
    courseId: 'phys-1011',
    courseCode: 'Phys 1011',
    unitNumber: 2,
    topic: 'Newtonian Dynamics',
    difficulty: 'medium',
    question: 'A 10 kg crate rests on a rough horizontal surface with coefficient of static friction μs = 0.4. If a horizontal pulling force of 30 N is applied (take g = 10 m/s²), what is the actual friction force exerted by the surface?',
    options: [
      'A. 40 N',
      'B. 30 N',
      'C. 0 N',
      'D. 10 N'
    ],
    correctAnswer: 1,
    hint: 'Maximum static friction is fs,max = μs * N. If applied force is less than fs,max, static friction exactly matches applied force!',
    explanation: 'Normal force N = mg = (10)(10) = 100 N. Maximum possible static friction fs,max = μs * N = (0.4)(100) = 40 N. Since the applied force (30 N) < 40 N, the crate does not move, and static friction self-adjusts to exactly 30 N to maintain equilibrium.',
    explanationAmharic: 'ከፍተኛው የማይንቀሳቀስ ሰበቃ fs,max = 0.4 × 100 = 40 N ነው። የተተገበረው ሃይል (30 N) ከ40 N ስለሚያንስ እቃው አይንቀሳቀስም፤ ስለዚህ ሰበቃው እቃውን ሚዛናዊ አድርጎ ለማቆየት ልክ 30 N ይሆናል።',
    explanationAfaanOromo: 'Humni suukkiin gubbaa fs,max = 0.4 × 100 = 40 N dha. Humni itti fe\'ame (30 N) 40 N gadi waan ta\'eef mi\'ichi hin socho\'u, suukkiin jirus sirriitti 30 N ta\'a.'
  },

  // =========================================================================
  // MATHEMATICS FOR NATURAL SCIENCE (Math 1011)
  // =========================================================================
  // Unit 1: Propositional Logic & Set Theory
  {
    id: 'uq-math-1-1',
    courseId: 'math-1011',
    courseCode: 'Math 1011',
    unitNumber: 1,
    topic: 'Conditional Logic Equivalences',
    difficulty: 'easy',
    question: 'Given the conditional statement "If a triangle is equilateral, then it is equiangular", what is its logically equivalent contrapositive?',
    options: [
      'A. If a triangle is equiangular, then it is equilateral.',
      'B. If a triangle is not equilateral, then it is not equiangular.',
      'C. If a triangle is not equiangular, then it is not equilateral.',
      'D. A triangle is equilateral if and only if it is equiangular.'
    ],
    correctAnswer: 2,
    hint: 'The contrapositive of p => q is ~q => ~p.',
    explanation: 'A conditional statement p => q is always logically equivalent to its contrapositive ~q => ~p ("If not equiangular, then not equilateral"). The converse (q => p) and inverse (~p => ~q) are not logically equivalent to the original statement.',
    explanationAmharic: 'የኮንዲሽናል አረፍተ ነገር p => q ኮንትራፖዚቲቭ (Contrapositive) የሚሆነው ~q => ~p ("እኩል ማዕዘን ካልሆነ፣ እኩል ጎን አይደለም") ሲሆን ከዋናው አረፍተ ነገር ጋር እኩል እውነት አለው።',
    explanationAfaanOromo: 'Himni p => q kan walfakkaatu (contrapositive) ~q => ~p yoo ta\'u ("Rog-sadoon kofa qixxee hin qabne yoo ta\'e, cinaacha qixxees hin qabu").'
  },
  {
    id: 'uq-math-1-2',
    courseId: 'math-1011',
    courseCode: 'Math 1011',
    unitNumber: 1,
    topic: 'Set Theory & Power Sets',
    difficulty: 'medium',
    question: 'If set A has exactly 5 distinct elements, how many proper subsets does set A possess?',
    options: [
      'A. 32',
      'B. 31',
      'C. 25',
      'D. 16'
    ],
    correctAnswer: 1,
    hint: 'Total subsets = 2^n. Proper subsets = 2^n - 1 (excluding the set itself).',
    explanation: 'The total number of subsets for a set with n elements is 2^n = 2^5 = 32. The number of PROPER subsets excludes the original set itself, giving 2^n - 1 = 32 - 1 = 31.',
    explanationAmharic: 'የአንድ ስብስብ ጠቅላላ ንዑስ ስብስቦች 2^n = 2^5 = 32 ነው። ትክክለኛ ንዑስ ስብስቦች (proper subsets) ደግሞ ስብስቡን ራሱን ስለማያካትት 32 - 1 = 31 ይሆናል።',
    explanationAfaanOromo: 'Baayinni gar-tokkee hunda (subsets) 2^n = 2^5 = 32 dha. Baayinni \'proper subsets\' immoo ofiisaa waan hin dabalanneef 32 - 1 = 31 ta\'a.'
  },

  // =========================================================================
  // ECONOMICS FOR SOCIAL SCIENCE (Econ 1011)
  // =========================================================================
  // Unit 1: Fundamentals of Economics
  {
    id: 'uq-econ-1-1',
    courseId: 'econ-1011',
    courseCode: 'Econ 1011',
    unitNumber: 1,
    topic: 'Scarcity and Opportunity Cost',
    difficulty: 'easy',
    question: 'Opportunity cost is scientifically defined as:',
    options: [
      'A. The total monetary cash outlay paid for an item in a store.',
      'B. The value of the next best alternative forgone when making a choice.',
      'C. The accounting cost of factory overhead expenses.',
      'D. The loss incurred when market prices fall below production costs.'
    ],
    correctAnswer: 1,
    hint: 'Because resources are scarce, choosing one option means sacrificing the next best alternative.',
    explanation: 'Opportunity cost represents the value of the next highest-valued alternative that must be sacrificed when a choice is made between mutually exclusive alternatives.',
    explanationAmharic: 'የዕድል ዋጋ (Opportunity Cost) ማለት አንድን ምርጫ ስንመርጥ የተተወው ወይም የተሰዋው ቀጣዩ ምርጥ አማራጭ ዋጋ ነው።',
    explanationAfaanOromo: 'Gatiin Carraa (Opportunity Cost) jechuun filannoo tokko yeroo filannu carraa filatamaa isa itti aanee jiru kan dhiifameedha.'
  },
  {
    id: 'uq-econ-1-2',
    courseId: 'econ-1011',
    courseCode: 'Econ 1011',
    unitNumber: 1,
    topic: 'Production Possibilities Frontier',
    difficulty: 'medium',
    question: 'On a standard Production Possibility Curve (PPC), points located strictly INSIDE (below) the curve indicate:',
    options: [
      'A. Unattainable output combinations with current technology.',
      'B. Inefficient production and underutilization of resources.',
      'C. Full and efficient employment of all factors of production.',
      'D. Rapid economic growth.'
    ],
    correctAnswer: 1,
    hint: 'Points ON the curve are efficient; points OUTSIDE are unattainable; points INSIDE are wasteful.',
    explanation: 'Points inside the PPC reflect productive inefficiency—resources are either unemployed or underutilized. Points on the curve reflect full efficiency, and points outside are unattainable with existing technology.',
    explanationAmharic: 'በምርት ዕድል ወሰን (PPC) ውስጥ የሚገኙ ነጥቦች የሀብት ስራ ፈትነትንና ያልተሟላ አጠቃቀምን (Inefficient / Underutilization) ያሳያሉ።',
    explanationAfaanOromo: 'Qabxiin daangaa dandeettii oomishaa (PPC) keessatti argamu qabeenyatti sirnaan fayyadamuu dhabuu fi oomisha gadi-aanaa agarsiisa.'
  },

  // Unit 2: Demand, Supply, and Market Equilibrium
  {
    id: 'uq-econ-2-1',
    courseId: 'econ-1011',
    courseCode: 'Econ 1011',
    unitNumber: 2,
    topic: 'Shift vs Movement Along Demand Curve',
    difficulty: 'medium',
    question: 'Which of the following causes a MOVEMENT ALONG the demand curve rather than a SHIFT of the demand curve?',
    options: [
      'A. A rise in consumer income for normal goods.',
      'B. An increase in the price of substitute goods.',
      'C. A change in the own price of the good itself.',
      'D. A change in consumer tastes and preferences.'
    ],
    correctAnswer: 2,
    hint: 'A change in quantity demanded is triggered exclusively by own price.',
    explanation: 'A change in the own price of the good causes a movement along its existing demand curve (change in quantity demanded). All non-price determinants (income, substitutes, tastes) shift the entire curve.',
    explanationAmharic: 'በፍላጎት ኩርባ ላይ የሚደረግ እንቅስቃሴ (movement along) የሚፈጠረው በእቃው ራሱ ዋጋ (own price) ለውጥ ምክንያት ብቻ ነው።',
    explanationAfaanOromo: 'Sarara fedhii irra socho\'uun kan dhufu gatii meeshichaa qofa jijjiiramuuni; wantoonni kaan sararicha guutuu jijjiiru (shift).'
  },
  // Unit 3: Theory of Elasticity
  {
    id: 'uq-econ-3-1',
    courseId: 'econ-1011',
    courseCode: 'Econ 1011',
    unitNumber: 3,
    topic: 'Price Elasticity of Demand',
    difficulty: 'medium',
    question: 'If the price elasticity of demand for teff is |Ed| = 0.45, demand is considered to be:',
    options: [
      'A. Perfectly elastic',
      'B. Inelastic',
      'C. Unit elastic',
      'D. Perfectly inelastic'
    ],
    correctAnswer: 1,
    hint: 'When |Ed| < 1, consumers are relatively unresponsive to price variations.',
    explanation: 'When the absolute price elasticity of demand is strictly less than 1 (|Ed| < 1), demand is inelastic, typical of essential staple foods like teff.',
    explanationAmharic: 'የዋጋ ፍላጎት የመተጣጠፍ መጠን ከ 1 በታች (|Ed| < 1) ሲሆን ፍላጎቱ የማይተጣጠፍ (Inelastic) ይባላል፤ ይህም ለመሰረታዊ ምግቦች እንደ ጤፍ የተለመደ ነው።',
    explanationAfaanOromo: 'Yeroo safarri jijjiirama fedhii gatii 1 gadi ta\'u (|Ed| < 1) fedhiin sun Inelastic jedhama; kunis nyaata bu\'uuraa akka xaafiif baratamaadha.'
  },
  // Unit 4: Theory of Consumer Behavior
  {
    id: 'uq-econ-4-1',
    courseId: 'econ-1011',
    courseCode: 'Econ 1011',
    unitNumber: 4,
    topic: 'Law of Diminishing Marginal Utility',
    difficulty: 'easy',
    question: 'The Law of Diminishing Marginal Utility states that as an individual consumes more units of a specific commodity in a given period of time:',
    options: [
      'A. Total utility immediately falls to zero.',
      'B. The additional satisfaction derived from each subsequent unit decreases.',
      'C. The marginal utility increases at an increasing rate.',
      'D. The price of the commodity continuously rises.'
    ],
    correctAnswer: 1,
    hint: 'Think of drinking glasses of water when thirsty: the first glass gives huge satisfaction, but the fourth gives much less.',
    explanation: 'The Law of Diminishing Marginal Utility states that as consecutive units of a good are consumed, the marginal utility (extra satisfaction) derived from each additional unit declines.',
    explanationAmharic: 'የመጨረሻ እርካታ መቀነስ ህግ (Law of Diminishing Marginal Utility) አንድን እቃ በተከታታይ ስንጠቀም ከእያንዳንዱ ተጨማሪ እቃ የምናገኘው እርካታ (MU) እየቀነሰ እንደሚሄድ ያብራራል።',
    explanationAfaanOromo: 'Seerri itti-quufinsa dabalataa hir\'achuu (Diminishing Marginal Utility) akka jedhutti yeroo meeshaa tokko walitti fufinsaan fayyadamnu gammachuun dabalataa (MU) argannu hir\'achaa adeema.'
  },

  // =========================================================================
  // GEOGRAPHY - ADDITIONAL UNITS
  // =========================================================================
  // Unit 3: Climate of Ethiopia
  {
    id: 'uq-geog-3-1',
    courseId: 'gees-1011',
    courseCode: 'GeES 1011',
    unitNumber: 3,
    topic: 'Traditional Agro-climatic Zones',
    difficulty: 'medium',
    question: 'In traditional Ethiopian agro-climatic classification, the temperate highlands lying between 2,300 and 3,200 meters above sea level with mean annual temperatures between 10°C and 15°C are designated as:',
    options: [
      'A. Kolla (Hot Lowlands)',
      'B. Woina Dega (Sub-tropical)',
      'C. Dega (Cool Temperate Highlands)',
      'D. Bereha (Hot Arid Desert)'
    ],
    correctAnswer: 2,
    hint: 'Characterized by barley, wheat cultivation, and cool temperatures.',
    explanation: 'Dega encompasses the cool highland plateau between 2,300m and 3,200m altitude. Below it lies Woina Dega (1,500-2,300m) and above it lies Wurch (>3,200m).',
    explanationAmharic: 'ደጋ (Dega) ከባህር ወለል በላይ ከ 2,300 እስከ 3,200 ሜትር ከፍታ ያለው እና ቀዝቃዛ የአየር ንብረት ያለው የደጋማ ስነ-ምህዳር ዞን ነው።',
    explanationAfaanOromo: 'Dagaan (Dega) olka\'iinsa lafaa meetira 2,300 hanga 3,200 gidduutti kan argamu yoo ta\'u, qilleensa qorraa kan qabuudha.'
  },

  // =========================================================================
  // MATHEMATICS - ADDITIONAL UNITS
  // =========================================================================
  // Unit 2: The Real Number System
  {
    id: 'uq-math-2-1',
    courseId: 'math-1011',
    courseCode: 'Math 1011',
    unitNumber: 2,
    topic: 'Completeness Property & Bounds',
    difficulty: 'medium',
    question: 'For the open interval subset S = (2, 7) of real numbers, what are the Greatest Lower Bound (GLB/Infimum) and Least Upper Bound (LUB/Supremum)?',
    options: [
      'A. GLB = 2, LUB = 7',
      'B. GLB = 3, LUB = 6',
      'C. S has neither GLB nor LUB because 2 and 7 are excluded',
      'D. GLB = 0, LUB = ∞'
    ],
    correctAnswer: 0,
    hint: 'The GLB and LUB do not need to belong to the set itself!',
    explanation: 'By definition, the infimum (GLB) is the greatest of all lower bounds (2) and supremum (LUB) is the least of all upper bounds (7). Neither need to be elements of the open interval (2, 7).',
    explanationAmharic: 'ለክፍት ክፍተት S = (2, 7)፡ GLB (Infimum) = 2 ሲሆን LUB (Supremum) = 7 ነው። ድንበሮቹ የግድ በስብስቡ ውስጥ መካተት አይጠበቅባቸውም።',
    explanationAfaanOromo: 'S = (2, 7) tiif GLB = 2 fi LUB = 7 ta\'a. Daangaan kun miseensa tuuta sanaa ta\'uun dirqama miti.'
  },

  // =========================================================================
  // COMMUNICATIVE ENGLISH SKILLS (FLEn 1011)
  // =========================================================================
  // Unit 1: Study Skills & Reading Strategies
  {
    id: 'uq-engl-1-1',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    unitNumber: 1,
    topic: 'Reading Strategies',
    difficulty: 'easy',
    question: 'A student searches quickly through a 500-page biology textbook solely to find the birth year of Charles Darwin. Which reading technique is being employed?',
    options: [
      'A. Skimming',
      'B. Scanning',
      'C. Intensive Reading',
      'D. Critical Reading'
    ],
    correctAnswer: 1,
    hint: 'Skimming is for gist/overview; scanning is hunting for specific data or key facts.',
    explanation: 'Scanning is a reading technique used to locate specific, predetermined facts or figures (such as a date, name, or statistic) without reading the surrounding text.',
    explanationAmharic: 'ስካኒንግ (Scanning) ማለት የተወሰነ የተለየ መረጃን (እንደ ዓመተ-ምህረት ወይም ስም) ፈልጎ ለማግኘት በፍጥነት ፅሁፍ ውስጥ መፈለግ ነው።',
    explanationAfaanOromo: 'Iskanningiin (Scanning) mala dubbisaa odeeffannoo murtaa\'aa ta\'e (kan akka guyyaa ykn maqaa) ariitiin barbaaduuf gargaaruudha.'
  },
  {
    id: 'uq-engl-1-2',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    unitNumber: 1,
    topic: 'Reading Strategies',
    difficulty: 'easy',
    question: 'Reading the title, introductory paragraph, first sentences of each body paragraph, and the concluding summary to grasp the general overview of an article is called:',
    options: [
      'A. Skimming',
      'B. Scanning',
      'C. Proofreading',
      'D. Paraphrasing'
    ],
    correctAnswer: 0,
    hint: 'Reading rapidly to get the main idea or gist of a text.',
    explanation: 'Skimming is high-speed reading designed to identify the main theme, main idea, and overarching structure of a passage quickly.',
    explanationAmharic: 'ስኪሚንግ (Skimming) የአንድን ፅሁፍ ዋና ሀሳብ (gist) እና ጭብጥ በፍጥነት ለመረዳት ርዕሶችንና የመክፈቻ አረፍተ ነገሮችን ማንበብ ነው።',
    explanationAfaanOromo: 'Iskiimiingiin (Skimming) yaada ijoo (main idea) barruu tokkoo ariitiin hubachuuf dubbisuudha.'
  },
  // Unit 2: Sentence Structure & Grammar
  {
    id: 'uq-engl-2-1',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    unitNumber: 2,
    topic: 'Comma Splice and Run-ons',
    difficulty: 'medium',
    question: 'Identify the grammatical error in this sentence: "The library was closed for Ethiopian Christmas, we decided to study in the dormitory."',
    options: [
      'A. Dangling Modifier',
      'B. Comma Splice',
      'C. Subject-Verb Agreement error',
      'D. Fragment Sentence'
    ],
    correctAnswer: 1,
    hint: 'Two independent clauses joined by only a comma without a coordinating conjunction.',
    explanation: 'A Comma Splice occurs when two independent clauses are joined by only a comma without a coordinating conjunction (FANBOYS) or semicolon.',
    explanationAmharic: 'ኮማ ስፕላይስ (Comma Splice) የሚፈጠረው ሁለት ራሳቸውን የቻሉ አረፍተ ነገሮችን ያለ አያያዥ ቃል በኮማ ብቻ ስናገናኝ ነው።',
    explanationAfaanOromo: 'Dogoggorri \'Comma Splice\' kan uumamu himoota of danda\'an lama qoodduu (comma) qofaan yoo walitti qabsifne dha.'
  }
];

// Helper to get questions for a specific course and chapter number
export function getQuestionsForChapter(
  courseCodeOrId: string,
  chapterNumber: number,
  allCourseQuestions?: any[]
): UnitQuizQuestion[] {
  const normId = (courseCodeOrId || '').toLowerCase().replace(/[^a-z0-9]/g, '');

  // Filter curated unit questions
  const curated = UNIT_QUIZ_BANK.filter((q) => {
    const qCourseNorm = q.courseCode.toLowerCase().replace(/[^a-z0-9]/g, '');
    const qCourseIdNorm = q.courseId.toLowerCase().replace(/[^a-z0-9]/g, '');
    const courseMatches =
      normId.includes(qCourseNorm) ||
      normId.includes(qCourseIdNorm) ||
      qCourseNorm.includes(normId) ||
      qCourseIdNorm.includes(normId);

    return courseMatches && q.unitNumber === chapterNumber;
  });

  return curated;
}

// Intelligent Smart Study AI fallback question generator for any note content
export function generateSmartStudyAIQuestionsFromNote(
  chapter: Chapter,
  course: Course
): UnitQuizQuestion[] {
  const generated: UnitQuizQuestion[] = [];
  const text = chapter.content || '';
  const formulas = chapter.keyFormulas || [];

  // Question 1: Unit Summary & Central Objective
  if (chapter.summary && chapter.summary.length > 20) {
    generated.push({
      id: `gen-${chapter.id}-summary`,
      courseId: course.id,
      courseCode: course.code,
      unitNumber: chapter.number,
      topic: 'Core Unit Theme',
      difficulty: 'medium',
      question: `According to ${course.code} Unit ${chapter.number} ("${chapter.title}"), what is the primary focus of this unit?`,
      options: [
        `A. ${chapter.summary.slice(0, 110)}...`,
        `B. Purely administrative procedures unrelated to ${course.name}`,
        `C. Advanced doctorate-level laboratory procedures`,
        `D. Unverified historical folklore without empirical relevance`
      ],
      correctAnswer: 0,
      hint: `Review the introductory summary of Unit ${chapter.number}.`,
      explanation: `As outlined in the course unit syllabus: "${chapter.summary}"`,
      explanationAmharic: `በኮርሱ ማጠቃለያ ላይ እንደተገለፀው የክፍል ${chapter.number} ዋና ትኩረት፡ "${chapter.summary}" ነው።`,
      explanationAfaanOromo: `Akka cuunfaa barnootichaa keessatti ibsametti xiyyeeffannoon Boqonnaa ${chapter.number}: "${chapter.summary}" dha.`
    });
  }

  // Question 2: Formulas / Core Principles
  if (formulas.length > 0) {
    const targetFormula = formulas[0];
    const parts = targetFormula.split(':');
    const label = parts[0] || 'Core Principle';
    const detail = parts.slice(1).join(':').trim() || targetFormula;

    generated.push({
      id: `gen-${chapter.id}-formula`,
      courseId: course.id,
      courseCode: course.code,
      unitNumber: chapter.number,
      topic: 'Key Formulas & Principles',
      difficulty: 'hard',
      question: `In Unit ${chapter.number}, which of the following correctly describes the key principle regarding "${label.trim()}"?`,
      options: [
        `A. ${detail.slice(0, 120)}`,
        `B. It is entirely obsolete and contradicted by modern scientific research.`,
        `C. It applies only to secondary school curriculums and has no freshman relevance.`,
        `D. It states that all related physical and mathematical quantities remain zero at all times.`
      ],
      correctAnswer: 0,
      hint: `Check the "Key Formulas & Core Principles" box at the top of the notes.`,
      explanation: `As detailed in the unit key formulas box: "${targetFormula}"`,
      explanationAmharic: `በዚህ ምዕራፍ ዋና ቀመሮች እና መርሆዎች ውስጥ እንደተጠቀሰው፡ "${targetFormula}" ነው።`,
      explanationAfaanOromo: `Akka seera bu\'uuraa boqonnaa kanaatti: "${targetFormula}" dha.`
    });
  }

  // Question 3: Concept from Content Header
  const headers = text.match(/####?\s+(.+)/g) || [];
  if (headers.length > 0) {
    const cleanHeader = headers[0].replace(/####?\s+/, '').replace(/[*_]/g, '');
    generated.push({
      id: `gen-${chapter.id}-header`,
      courseId: course.id,
      courseCode: course.code,
      unitNumber: chapter.number,
      topic: cleanHeader,
      difficulty: 'medium',
      question: `In the study of ${cleanHeader} within Unit ${chapter.number}, what is a critical concept students must master for university examinations?`,
      options: [
        `A. Understanding the foundational principles and distinctions highlighted under ${cleanHeader}.`,
        `B. Memorizing unrelated random dates from pre-modern history.`,
        `C. Discarding all theoretical definitions in favor of subjective assumptions.`,
        `D. Skipping this section because it is explicitly excluded from national exams.`
      ],
      correctAnswer: 0,
      hint: `Carefully examine the main subheadings in Unit ${chapter.number}.`,
      explanation: `Section "${cleanHeader}" establishes essential conceptual models and exam-tested distinctions for ${course.name}.`,
      explanationAmharic: `ክፍል "${cleanHeader}" ለፈተና አስፈላጊ የሆኑ ፅንሰ-ሀሳቦችንና ልዩነቶችን በግልፅ ያስቀምጣል።`,
      explanationAfaanOromo: `Kutaan "${cleanHeader}" jedhu qormaataaf qabxiiwwan bu\'uuraa fi adda addummaa jiran qulqulleessee barsiisa.`
    });
  }

  return generated;
}
