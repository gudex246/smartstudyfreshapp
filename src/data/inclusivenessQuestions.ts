import { ExamQuestion } from '../types';

/**
 * Inclusiveness / Special Needs & Inclusive Education (SNIE 1012)
 * University Freshman Model & Final Examination Questions
 * Curated from Ethiopian Higher Education Harmonized Modular Curriculum & University Exams.
 * Complete with official answer keys, pedagogical hints, and bilingual explanations with emojis.
 */
export const INCLUSIVENESS_QUESTIONS: ExamQuestion[] = [
  // =========================================================================
  // Question 1: Impairment vs Disability vs Handicap
  // =========================================================================
  {
    id: 'snie-2025-model-q1',
    courseId: 'snie-1012',
    courseCode: 'SNIE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Understanding Disabilities: Conceptual Triad',
    points: 1,
    question: 'A university student who has a severed spinal cord uses a wheelchair for mobility. However, the student is unable to attend lectures on the second floor because the building lacks ramps or an elevator. In this scenario, the absence of ramps and elevators represents a:',
    options: [
      'Impairment',
      'Handicap',
      'Biological defect',
      'Internal pathology'
    ],
    correctAnswer: 1,
    hint: 'Impairment is the biological condition; disability is the functional limitation; handicap is the environmental or societal barrier.',
    explanation: 'Academic Explanation:\n1. The severed spinal cord is the Impairment (biological/anatomical damage).\n2. The inability to walk is the Disability (functional activity limitation).\n3. The inaccessible building lacking ramps or elevators represents the Handicap (the societal and environmental barrier preventing equal participation).\n\n🇪🇹 የሰውነት ጉዳቱ ኢምፔርመንት (Impairment) ሲሆን፤ መራመድ አለመቻሉ ዲሳቢሊቲ (Disability) ነው፤ ነገር ግን ሕንፃው ደረጃ ብቻ ሆኖ ተዳፋት (Ramp) ወይም ሊፍት ባለመኖሩ ምክንያት ወደ ሁለተኛ ፎቅ እንዳይገባ ያገደው ማኅበራዊ መሰናክል ሀንዲካፕ (Handicap) ይባላል። 🚧♿\n\nVerified Answer: Option B (Handicap).'
  },

  // =========================================================================
  // Question 2: Social Model vs Medical Model
  // =========================================================================
  {
    id: 'snie-2025-model-q2',
    courseId: 'snie-1012',
    courseCode: 'SNIE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Models of Disability: Social Model',
    points: 1,
    question: 'Which model of disability asserts that disability is NOT a biological pathology of the individual body, but is instead socially constructed by an oppressive, inaccessible environment that fails to accommodate human diversity?',
    options: [
      'The Medical / Individual Model',
      'The Charity Model',
      'The Social Model of Disability',
      'The Moral / Religious Model'
    ],
    correctAnswer: 2,
    hint: 'This activist model argues that removing societal barriers (ramps, Braille, sign language) eliminates the disability.',
    explanation: 'Academic Explanation:\n1. The Social Model differentiates impairment (biological variation) from disability (social oppression and barriers).\n2. It asserts that society disables people with impairments by designing environments, policies, and attitudes exclusively for non-disabled people.\n\n🇪🇹 ማኅበራዊ ሞዴል (Social Model)፡ አካል ጉዳተኝነትን የፈጠረው የሰውየው ሰውነት ሳይሆን፣ ደረጃዎችን በመገንባት፣ የብሬይልና የምልክት ቋንቋ ባለማዘጋጀት ሰዎችን የሚያግደው የማይመች ማኅበረሰባዊ አካባቢ ነው ይላል። 🏛️♿✨\n\nVerified Answer: Option C (The Social Model of Disability).'
  },

  // =========================================================================
  // Question 3: Historical Shift to Inclusion
  // =========================================================================
  {
    id: 'snie-2025-model-q3',
    courseId: 'snie-1012',
    courseCode: 'SNIE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Historical Evolution: Exclusion to Inclusion',
    points: 1,
    question: 'Arrange the historical progression of societal approaches to persons with disabilities in the correct chronological order from earliest to most modern:',
    options: [
      'Inclusion ➡️ Integration ➡️ Segregation ➡️ Exclusion',
      'Exclusion ➡️ Segregation ➡️ Integration ➡️ Inclusion',
      'Segregation ➡️ Exclusion ➡️ Inclusion ➡️ Integration',
      'Integration ➡️ Exclusion ➡️ Segregation ➡️ Inclusion'
    ],
    correctAnswer: 1,
    hint: 'Society moved from killing/abandoning to institutionalizing, then mainstreaming, and finally universal inclusion.',
    explanation: 'Academic Explanation:\n1. The historical trajectory moved through four phases: 1) Exclusion/Extermination (ancient abandonment); 2) Segregation (isolation in separate special institutions); 3) Integration (placing in regular schools expecting the child to adapt); and 4) Inclusion (transforming schools and society to welcome all).\n\n🇪🇹 የታሪክ ጉዞው ቅደም ተከተል፡ በመጀመሪያ ማግለልና መግደል (Exclusion) ➡️ ከዚያ ነጥሎ በልዩ ማቆያ ማስተማር (Segregation) ➡️ ከዚያ ወደ መደበኛ ትምህርት ቤት ማምጣት (Integration) ➡️ እና በመጨረሻም ሙሉ ማኅበረሰባዊ ውህደትና ሥርዓቱን ለሁሉም ምቹ ማድረግ (Inclusion) ነው። 🔄🏫\n\nVerified Answer: Option B.'
  },

  // =========================================================================
  // Question 4: Specific Learning Disabilities: Dyslexia
  // =========================================================================
  {
    id: 'snie-2025-model-q4',
    courseId: 'snie-1012',
    courseCode: 'SNIE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Specific Learning Disabilities: Reading',
    points: 1,
    question: 'A neurodevelopmental learning disability characterized by severe, unexpected difficulties with accurate and fluent word reading, decoding phonemes, and spelling despite having normal intelligence is called:',
    options: [
      'Dyscalculia',
      'Dyslexia',
      'Dysgraphia',
      'Down Syndrome'
    ],
    correctAnswer: 1,
    hint: 'Dyslexia affects reading; dyscalculia affects mathematics; dysgraphia affects handwriting.',
    explanation: 'Academic Explanation:\n1. Dyslexia is a specific learning disability characterized by difficulties with word recognition and poor spelling.\n2. Dysgraphia affects motor writing, while Dyscalculia affects mathematical comprehension.\n\n🇪🇹 ዲስሌክሲያ (Dyslexia) ማለት የተማሪው አእምሮአዊ የማሰብ ችሎታ ከፍተኛ ሆኖ እያለ ቃላትን በማንበብ፣ ፊደላትን በመለየትና በፊደል አጻጻፍ (Spelling) ላይ የሚገጥም ልዩ የመማር እክል ነው። 📖✏️\n\nVerified Answer: Option B (Dyslexia).'
  },

  // =========================================================================
  // Question 5: Specific Learning Disabilities: Dyscalculia
  // =========================================================================
  {
    id: 'snie-2025-model-q5',
    courseId: 'snie-1012',
    courseCode: 'SNIE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Specific Learning Disabilities: Mathematics',
    points: 1,
    question: 'A student who possesses normal intellectual ability but exhibits chronic, severe difficulty understanding number concepts, learning arithmetic facts, and computing mathematical calculations is experiencing:',
    options: [
      'Dysgraphia',
      'Dyscalculia',
      'Autism Spectrum Disorder',
      'Sensory Ataxia'
    ],
    correctAnswer: 1,
    hint: 'Calculia relates to calculation and arithmetic mathematics.',
    explanation: 'Academic Explanation:\n1. Dyscalculia is a neurological learning disorder affecting the ability to comprehend numbers, perform calculations, and grasp mathematical concepts.\n\n🇪🇹 ዲስካልኩሊያ (Dyscalculia) ማለት ተማሪው በሌላው ትምህርት ጎበዝ ሆኖ ነገር ግን የሒሳብ ቁጥሮችን፣ ቀመሮችንና ስሌቶችን ለመረዳትና ለማስላት የሚገጥመው የአንጎል መረጃ የማቀነባበር እክል ነው። 🔢📐\n\nVerified Answer: Option B (Dyscalculia).'
  },

  // =========================================================================
  // Question 6: Autism Spectrum Disorder (ASD)
  // =========================================================================
  {
    id: 'snie-2025-model-q6',
    courseId: 'snie-1012',
    courseCode: 'SNIE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Developmental Disorders: Autism Spectrum',
    points: 1,
    question: 'Autism Spectrum Disorder (ASD) is fundamentally characterized by two core diagnostic behavioral domains:',
    options: [
      'Hearing loss and physical muscle atrophy',
      'Persistent deficits in social communication/interaction and restricted, repetitive patterns of behavior or interests',
      'Inability to digest protein and severe night blindness',
      'Sudden loss of motor memory after physical exercise'
    ],
    correctAnswer: 1,
    hint: 'Look for challenges in social communication combined with repetitive routines or intense focused interests.',
    explanation: 'Academic Explanation:\n1. According to diagnostic standards (DSM-5), ASD is characterized by: 1) Persistent deficits in social communication and social interaction; and 2) Restricted, repetitive patterns of behavior, interests, or activities, often with sensory sensitivities.\n\n🇪🇹 ኦቲዝም (Autism Spectrum Disorder) በማኅበራዊ ግንኙነትና በመግባባት ላይ በሚታዩ ውስንነቶች እንዲሁም በተደጋጋሚ ጠባዮችና ለየት ባሉ የፍላጎት መስኮች የሚገለጽ የልጅነት የዕድገት ሁኔታ ነው። 🧩🎨\n\nVerified Answer: Option B.'
  },

  // =========================================================================
  // Question 7: Intellectual Disability
  // =========================================================================
  {
    id: 'snie-2025-model-q7',
    courseId: 'snie-1012',
    courseCode: 'SNIE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Intellectual Disabilities: Criteria',
    points: 1,
    question: 'In special needs education, an "Intellectual Disability" is formally diagnosed when an individual displays significant limitations in both intellectual functioning (IQ score below 70) and:',
    options: [
      'Physical running speed',
      'Adaptive behavior (conceptual, social, and practical everyday life skills) originating before age 18',
      'Musical singing pitch',
      'High blood pressure'
    ],
    correctAnswer: 1,
    hint: 'Adaptive behavior includes communication, self-care, social problem-solving, and practical living skills.',
    explanation: 'Academic Explanation:\n1. Intellectual disability is defined by significant limitations both in intellectual functioning (IQ < 70) and in adaptive behavior (daily living, communication, and social skills) originating before the age of 18.\n\n🇪🇹 የአእምሮ ዕድገት ውስንነት (Intellectual Disability) የሚባለው የተማሪው የማሰብ አቅም (IQ ከ70 በታች) ሆኖ በተጨማሪም የዕለት ተዕለት ኑሮን በራስ አቅም የመምራትና የመግባባት (Adaptive behavior) ውስንነት ከ18 ዓመት ዕድሜ በፊት ሲከሰት ነው። 🧠🌱\n\nVerified Answer: Option B.'
  },

  // =========================================================================
  // Question 8: Integration vs Inclusion
  // =========================================================================
  {
    id: 'snie-2025-model-q8',
    courseId: 'snie-1012',
    courseCode: 'SNIE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'hard',
    topic: 'Philosophical Paradigms: Integration vs Inclusion',
    points: 1,
    question: 'What is the critical philosophical difference between educational "Integration" and genuine "Inclusion"?',
    options: [
      'Integration is completely free of charge, while inclusion requires private tuition fees',
      'Integration places the student in the regular school expecting the student to adapt to the existing system, whereas Inclusion transforms the entire school curriculum, environment, and teaching methods to fit the student',
      'Integration is only for blind students, while inclusion is only for deaf students',
      'Integration uses computers, while inclusion uses only paper textbooks'
    ],
    correctAnswer: 1,
    hint: 'Does the child adapt to the rigid school, or does the school adapt to welcome every diverse child?',
    explanation: 'Academic Explanation:\n1. Integration brings the child into regular school but leaves the curriculum and architecture unchanged; the student must sink or swim.\n2. Inclusion restructures the school, environment, pedagogical methods, and attitudes so that all diverse learners succeed.\n\n🇪🇹 በመቀላቀል (Integration) እና በእውነተኛ አካታችነት (Inclusion) መካከል ያለው ትልቅ ልዩነት፡ በመቀላቀል ጊዜ ተማሪው ራሱ ላልተለወጠው ትምህርት ቤት እንዲላመድ ሲጠበቅበት፤ በአካታችነት ጊዜ ግን ትምህርት ቤቱና መምህሩ ራሳቸውን ለተማሪው ፍላጎት እንዲመች አድርገው ይለውጣሉ። 🏫🌈✨\n\nVerified Answer: Option B.'
  },

  // =========================================================================
  // Question 9: Equity vs Equality
  // =========================================================================
  {
    id: 'snie-2025-model-q9',
    courseId: 'snie-1012',
    courseCode: 'SNIE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Foundational Principles: Equity vs Equality',
    points: 1,
    question: 'A teacher gives every student in class the exact same printed English exam paper without modifications, even though two students are completely blind. This teacher is practicing _______, but failing to achieve _______:',
    options: [
      'Equity; Equality',
      'Equality; Equity',
      'Inclusion; Segregation',
      'Assessment; Evaluation'
    ],
    correctAnswer: 1,
    hint: 'Equality treats everyone identically; equity gives each person what they specifically need to succeed.',
    explanation: 'Academic Explanation:\n1. Equality means treating everyone the exact same, which disadvantages those with different needs.\n2. Equity recognizes diversity and provides differentiated accommodations (e.g., Braille or screen reader for blind students) to ensure fair opportunities.\n\n🇪🇹 መምህሩ ለሁሉም እኩል የታተመ ወረቀት መስጠቱ እኩልነት (Equality) ቢሆንም፤ ዓይነ-ስውራን ተማሪዎች የሚፈልጉትን ብሬይል ባለመስጠቱ ፍትሐዊነትን (Equity) አጓድሏል! አካታችነት ፍትሐዊነትን ይሻል። ⚖️👌\n\nVerified Answer: Option B (Equality; Equity).'
  },

  // =========================================================================
  // Question 10: Individualized Education Program (IEP)
  // =========================================================================
  {
    id: 'snie-2025-model-q10',
    courseId: 'snie-1012',
    courseCode: 'SNIE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Pedagogical Planning: The IEP',
    points: 1,
    question: 'An Individualized Education Program (IEP) in special needs and inclusive education is best described as:',
    options: [
      'A disciplinary contract used to suspend disruptive students from school',
      'A personalized, legally documented educational blueprint establishing measurable annual goals, services, and accommodations tailored to a student with special needs',
      'A medical prescription for pharmaceutical drugs written by pediatricians',
      'A national standardized exam taken at the completion of grade 12'
    ],
    correctAnswer: 1,
    hint: 'It is a personalized written plan detailing measurable goals and tailored accommodations.',
    explanation: 'Academic Explanation:\n1. An IEP is a customized, written educational document developed by a multidisciplinary team for a student with special educational needs.\n2. It outlines the student\'s present performance, measurable annual goals, specialized instructional services, and necessary accommodations.\n\n🇪🇹 ግላዊ የትምህርት ዕቅድ (IEP) ማለት ልዩ ፍላጎት ላለው ለእያንዳንዱ ተማሪ የተዘጋጀ፣ የተማሪውን የአሁን ደረጃ፣ ዓመታዊ ግቦችና የሚያስፈልገውን ድጋፍ በዝርዝር የያዘ የተማሪው የትምህርት ካርታ ነው። 📝📋\n\nVerified Answer: Option B.'
  },

  // =========================================================================
  // Question 11: Accommodations vs Modifications
  // =========================================================================
  {
    id: 'snie-2025-model-q11',
    courseId: 'snie-1012',
    courseCode: 'SNIE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'hard',
    topic: 'Instructional Interventions: Accommodations vs Modifications',
    points: 1,
    question: 'Granting a student with low vision enlarged-print exam sheets and 30 minutes of extra time without altering the academic content or grading criteria of the exam is an example of a(n):',
    options: [
      'Curricular Modification',
      'Instructional / Testing Accommodation',
      'Handicap barrier',
      'Affirmative segregation'
    ],
    correctAnswer: 1,
    hint: 'Accommodations change how a student accesses information without changing what is tested.',
    explanation: 'Academic Explanation:\n1. An Accommodation changes *how* a student learns or is tested (e.g., large print, extra time) without lowering or altering the academic standard.\n2. A Modification alters *what* is learned or tested (e.g., reducing the complexity or quantity of curriculum standards).\n\n🇪🇹 የፈተናውን የይዘት ደረጃ ሳይቀንሱ ጽሑፉን በትልቁ ማተም ወይም ተጨማሪ የፈተና ሰዓት መስጠት ማስተካከያ (Accommodation) ይባላል። ⏱️📄\n\nVerified Answer: Option B (Instructional / Testing Accommodation).'
  },

  // =========================================================================
  // Question 12: Differentiated Instruction
  // =========================================================================
  {
    id: 'snie-2025-model-q12',
    courseId: 'snie-1012',
    courseCode: 'SNIE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Inclusive Pedagogy: Differentiated Instruction',
    points: 1,
    question: 'According to Carol Ann Tomlinson’s model of Differentiated Instruction, teachers can adapt instruction across four primary elements based on student readiness, interest, and learning profile:',
    options: [
      'Salary, Pension, Holiday, and Overtime',
      'Content, Process, Product, and Learning Environment',
      'Classroom colour, Uniform, Bell schedule, and Flag ceremony',
      'Tuition, Transportation, Lunch menu, and Textbook supplier'
    ],
    correctAnswer: 1,
    hint: 'What is taught (Content), how it is learned (Process), how knowledge is demonstrated (Product), and where it happens (Environment).',
    explanation: 'Academic Explanation:\n1. Tomlinson identified four curricular elements that teachers can differentiate: Content (curriculum access), Process (learning activities), Product (demonstration of mastery), and Learning Environment (classroom climate).\n\n🇪🇹 የተለያየ የማስተማሪያ ዘዴ (Differentiated Instruction) በአራት መንገዶች ይተገበራል፤ እነሱም ይዘቱን ማስተካከል (Content)፣ ሂደቱን ማስተካከል (Process)፣ የውጤት ማሳያውን ማስተካከል (Product) እና አካባቢውን ማመቻቸት (Environment) ናቸው። 🎨📚⚙️\n\nVerified Answer: Option B.'
  },

  // =========================================================================
  // Question 13: Assistive Technology: Screen Readers
  // =========================================================================
  {
    id: 'snie-2025-model-q13',
    courseId: 'snie-1012',
    courseCode: 'SNIE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Assistive Technology: Screen Readers',
    points: 1,
    question: 'JAWS (Job Access With Speech) and NVDA (NonVisual Desktop Access) are specialized high-tech assistive technologies classified as:',
    options: [
      'Hearing aid amplifiers',
      'Screen reading software that converts digital text into synthesized speech for visually impaired users',
      'Wheelchair motors',
      'Speech synthesis tools for stuttering exclusively'
    ],
    correctAnswer: 1,
    hint: 'They read screen contents aloud through computer speakers for blind individuals.',
    explanation: 'Academic Explanation:\n1. JAWS and NVDA are software applications that read aloud digital text displayed on a computer screen using synthetic text-to-speech, enabling visually impaired users to use computers independently.\n\n🇪🇹 ጆውስ (JAWS) እና ኤንቪዲኤ (NVDA) በኮምፒውተር ስክሪን ላይ ያለውን ጽሑፍ በድምፅ በማንበብ ዓይነ-ስውራን ኮምፒውተርንና ኢንተርኔትን በቀላሉ እንዲጠቀሙ የሚያስችሉ ረዳት የሶፍትዌር ቴክኖሎጂዎች ናቸው። 💻🎧🦯\n\nVerified Answer: Option B.'
  },

  // =========================================================================
  // Question 14: Universal Design: Architectural Origin
  // =========================================================================
  {
    id: 'snie-2025-model-q14',
    courseId: 'snie-1012',
    courseCode: 'SNIE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Universal Design: Architectural Concept',
    points: 1,
    question: 'The architectural design philosophy that emphasizes creating environments and products from the outset that can be used by all people without the need for specialized retrofit adaptation is called:',
    options: [
      'Segregated Architecture',
      'Universal Design',
      'Specialized Retrofitting',
      'Nominal Design'
    ],
    correctAnswer: 1,
    hint: 'Coined by Ron Mace, it designs access for everyone from the very beginning.',
    explanation: 'Academic Explanation:\n1. Universal Design (UD), pioneered by Ron Mace, is the design of products and environments usable by all people to the greatest extent possible without specialized redesign.\n\n🇪🇹 ሁለንተናዊ ንድፍ (Universal Design) ማለት ማንኛውም ሕንፃ ወይም መሣሪያ ሲሠራ ከመጀመሪያው ጀምሮ ለአካል ጉዳተኞችም ሆነ ለጤነኞች እኩል ምቹ ሆኖ እንዲገነባ የሚያደርግ የሕንፃ ጥበብ ፍልስፍና ነው። 🏛️🚪\n\nVerified Answer: Option B (Universal Design).'
  },

  // =========================================================================
  // Question 15: UDL: Three Brain Networks
  // =========================================================================
  {
    id: 'snie-2025-model-q15',
    courseId: 'snie-1012',
    courseCode: 'SNIE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'hard',
    topic: 'Universal Design for Learning: Core Principles',
    points: 1,
    question: 'Universal Design for Learning (UDL) is structured around three foundational principles corresponding to neurological brain networks. Which principle corresponds to the "Affective Networks" (the "WHY" of learning)?',
    options: [
      'Multiple Means of Representation',
      'Multiple Means of Action and Expression',
      'Multiple Means of Engagement',
      'Multiple Means of Physical Construction'
    ],
    correctAnswer: 2,
    hint: 'Engagement is about interest, motivation, and why we learn.',
    explanation: 'Academic Explanation:\n1. UDL principles correspond to three brain networks: 1) Engagement = Affective networks ("WHY" of learning); 2) Representation = Recognition networks ("WHAT" of learning); 3) Action & Expression = Strategic networks ("HOW" of learning).\n\n🇪🇹 ሁለንተናዊ የትምህርት ንድፍ (UDL) ላይ የተማሪዎችን ስሜትና ተነሳሽነት ለመቀስቀስ የሚያገለግለው "ተማሪዎች ለምን ይማራሉ?" የሚለውን የሚመልሰው የማነሳሳት መርሕ (Multiple Means of Engagement) ነው። 🎯🧠❤️\n\nVerified Answer: Option C (Multiple Means of Engagement).'
  },

  // =========================================================================
  // Question 16: UDL: Representation Principle
  // =========================================================================
  {
    id: 'snie-2025-model-q16',
    courseId: 'snie-1012',
    courseCode: 'SNIE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'UDL: Principle of Representation',
    points: 1,
    question: 'A lecturer presents course material using printed textbooks, audio podcasts, captioned video clips, and tactile 3D models. This lecturer is exemplifying which core UDL principle?',
    options: [
      'Multiple Means of Representation (The "WHAT" of learning)',
      'Multiple Means of Action and Expression',
      'Sole Sensory Modality',
      'Standardized Curriculum'
    ],
    correctAnswer: 0,
    hint: 'Presenting information through multiple sensory channels (audio, visual, tactile).',
    explanation: 'Academic Explanation:\n1. The UDL Principle of Representation (the "WHAT" of learning) demands offering information in various formats: auditory, visual, and tactile, ensuring all sensory modalities are served.\n\n🇪🇹 መምህሩ ትምህርቱን በጽሑፍ፣ በድምፅ፣ በቪዲዮና በሚዳሰሱ ሞዴሎች አቀናጅቶ ማስተማሩ ትምህርቱን በተለያዩ መንገዶች የማቅረብ መርሕ (Multiple Means of Representation) ማሳያ ነው። 👁️👂📖\n\nVerified Answer: Option A.'
  },

  // =========================================================================
  // Question 17: Physical Accessibility: Ramp Slopes
  // =========================================================================
  {
    id: 'snie-2025-model-q17',
    courseId: 'snie-1012',
    courseCode: 'SNIE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Physical Accessibility Standards',
    points: 1,
    question: 'According to universal architectural building codes and the Ethiopian Building Proclamation, the standard maximum slope ratio for a wheelchair entry ramp should be:',
    options: [
      '1:1 (45-degree angle)',
      '1:12 (for every 1 unit of vertical rise, 12 units of horizontal run)',
      '1:50',
      '1:2'
    ],
    correctAnswer: 1,
    hint: 'A gentle slope of 1 unit up for every 12 units across prevents wheelchairs from flipping.',
    explanation: 'Academic Explanation:\n1. The standard architectural slope for wheelchair ramps is 1:12 (approx. 4.76 degrees), ensuring that wheelchair users can ascend and descend safely without tipping over.\n\n🇪🇹 በሕንፃ መመዘኛ ሕግ መሠረት ለተሽከርካሪ ወንበር የሚሠራ ተዳፋት (Ramp) ተጠቃሚው እንዳይገለበጥና በደህና እንዲወጣ በ1፡12 ምጣኔ መሠራት አለበት። 📐♿\n\nVerified Answer: Option B (1:12).'
  },

  // =========================================================================
  // Question 18: Psychosocial Inclusion: Person-First Language
  // =========================================================================
  {
    id: 'snie-2025-model-q18',
    courseId: 'snie-1012',
    courseCode: 'SNIE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Psychosocial Inclusion: Language and Stigma',
    points: 1,
    question: 'Which of the following phrases exemplifies respectful "Person-First Language" recommended by inclusive education specialists?',
    options: [
      '"The cripple in room 4"',
      '"The autistic boy"',
      '"A student with autism"',
      '"An insane person"'
    ],
    correctAnswer: 2,
    hint: 'Emphasize the person before mentioning the condition.',
    explanation: 'Academic Explanation:\n1. Person-First Language emphasizes the individuality and human dignity of the person before their disability (e.g., "a person with a disability" or "a student with autism", rather than defining the human being entirely by their impairment).\n\n🇪🇹 ሰብአዊ ክብርን የሚያስቀድም አነጋገር (Person-First Language) ሰውን ከጉዳቱ አስቀድሞ መጥራት ነው፤ "ኦቲስቲክ" ከማለት "ኦቲዝም ያለበት ተማሪ" ወይም "አንካሳ" ከማለት "የእንቅስቃሴ ውስንነት ያለበት ግለሰብ" ማለት ተገቢ ነው። 👤🤝✨\n\nVerified Answer: Option C ("A student with autism").'
  },

  // =========================================================================
  // Question 19: The Salamanca Statement (1994)
  // =========================================================================
  {
    id: 'snie-2025-model-q19',
    courseId: 'snie-1012',
    courseCode: 'SNIE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'International Legal Frameworks: Salamanca 1994',
    points: 1,
    question: 'The historic UNESCO international conference held in Spain in 1994 that established the global imperative that regular schools with an inclusive orientation are the most effective means of combating discriminatory attitudes is known as:',
    options: [
      'The Geneva Convention',
      'The Salamanca Statement and Framework for Action',
      'The Kyoto Protocol',
      'The Rome Statute'
    ],
    correctAnswer: 1,
    hint: 'Held in Salamanca, Spain, in 1994, it is the foundational charter for inclusive education.',
    explanation: 'Academic Explanation:\n1. The Salamanca Statement (1994) declared that regular schools with an inclusive orientation are the most effective mechanism for combating discriminatory attitudes and achieving Education for All (EFA).\n\n🇪🇹 የሳላማንካ ድንጋጌ (Salamanca Statement 1994) በስፔን የተፈረመ ታላቅ ሰነድ ሲሆን፤ መደበኛ ትምህርት ቤቶች አካታች አሠራርን በመከተል አድልዎን ለመዋጋት እጅግ ውጤታማ መሣሪያዎች መሆናቸውን ያረጋገጠ ነው። 📜🏫🇪🇸\n\nVerified Answer: Option B (The Salamanca Statement and Framework for Action).'
  },

  // =========================================================================
  // Question 20: UNCRPD (2006): Article 24
  // =========================================================================
  {
    id: 'snie-2025-model-q20',
    courseId: 'snie-1012',
    courseCode: 'SNIE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'hard',
    topic: 'UN Convention on Rights of Persons with Disabilities',
    points: 1,
    question: 'Under Article 24 of the UN Convention on the Rights of Persons with Disabilities (UNCRPD, ratified by Ethiopia in 2010), States Parties are legally obligated to ensure:',
    options: [
      'Immediate expulsion of all disabled children to remote private asylums',
      'An inclusive education system at all levels and lifelong learning without discrimination, based on equal opportunity and reasonable accommodation',
      'Exclusive separate homeschooling with parent-funded private tutors',
      'Automatic exemption of all persons with disabilities from learning to read'
    ],
    correctAnswer: 1,
    hint: 'Article 24 mandates inclusive education systems and reasonable accommodation at all educational levels.',
    explanation: 'Academic Explanation:\n1. Article 24 of the UNCRPD legally mandates that States Parties must ensure an inclusive education system at all levels, providing reasonable accommodation tailored to individual requirements.\n\n🇪🇹 በዓለም አቀፉ የአካል ጉዳተኞች መብቶች ስምምነት (UNCRPD) አንቀጽ 24 መሠረት መንግሥታት በሁሉም የትምህርት እርከኖች አካታች የትምህርት ሥርዓት የመዘርጋትና አስፈላጊውን ማስተካከያ (Reasonable accommodation) የማሟላት ዓለም አቀፍ የሕግ ግዴታ አለባቸው። ⚖️🌍\n\nVerified Answer: Option B.'
  },

  // =========================================================================
  // Question 21: FDRE Constitution: Article 41(5)
  // =========================================================================
  {
    id: 'snie-2025-model-q21',
    courseId: 'snie-1012',
    courseCode: 'SNIE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Ethiopian Legal Framework: FDRE Constitution',
    points: 1,
    question: 'Which article of the 1995 Constitution of the Federal Democratic Republic of Ethiopia (FDRE) explicitly obligates the State to allocate resources to provide rehabilitation and assistance to physically and mentally disabled persons?',
    options: [
      'Article 41(5)',
      'Article 1',
      'Article 105',
      'Article 12'
    ],
    correctAnswer: 0,
    hint: 'Found in the chapter on Economic, Social, and Cultural Rights.',
    explanation: 'Academic Explanation:\n1. Article 41(5) of the 1995 FDRE Constitution explicitly states: "The State shall, within available means, allocate resources to provide rehabilitation and assistance to the physically and mentally disabled, the aged, and to children who are left without parents or guardian."\n\n🇪🇹 በ1987ቱ የኢፌዲሪ ሕገ-መንግሥት አንቀጽ 41(5) መሠረት መንግሥት ለአካልና ለአእምሮ ጉዳተኞች እንዲሁም ለአቅመ-ደካሞች መልሶ ማቋቋሚያና ድጋፍ በጀት የመመደብ ሕገ-መንግሥታዊ ግዴታ ተጥሎበታል። 🇪🇹📜🏛️\n\nVerified Answer: Option A (Article 41(5)).'
  },

  // =========================================================================
  // Question 22: Ethiopian Building Proclamation No. 624/2009
  // =========================================================================
  {
    id: 'snie-2025-model-q22',
    courseId: 'snie-1012',
    courseCode: 'SNIE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Ethiopian Statutory Law: Building Code',
    points: 1,
    question: 'Under the Ethiopian Building Proclamation (Proclamation No. 624/2009), all public service buildings in Ethiopia are legally required to:',
    options: [
      'Charge entrance fees to wheelchair users',
      'Be physically accessible to persons with physical disabilities through ramps, wide entrances, and adapted sanitary facilities',
      'Operate exclusively on ground floors with no second storeys permitted',
      'Demolish all historic architecture immediately'
    ],
    correctAnswer: 1,
    hint: 'Section 36 mandates physical accessibility features in all public structures.',
    explanation: 'Academic Explanation:\n1. Proclamation No. 624/2009 (Section 36) requires that any public building must be designed and constructed to provide accessible entrance, circulation, and sanitary facilities for persons with disabilities.\n\n🇪🇹 በኢትዮጵያ የሕንፃ አዋጅ ቁጥር 624/2001 መሠረት ማንኛውም የሕዝብ አገልግሎት የሚሰጥ ሕንፃ (ዩኒቨርሲቲ፣ ሆስፒታል፣ ፍርድ ቤት) ለአካል ጉዳተኞች ምቹ የሆነ ተዳፋት፣ ሰፊ በርና መጸዳጃ ቤት እንዲኖረው በሕግ ያስገድዳል። 🏢♿\n\nVerified Answer: Option B.'
  },

  // =========================================================================
  // Question 23: Community-Based Rehabilitation (CBR)
  // =========================================================================
  {
    id: 'snie-2025-model-q23',
    courseId: 'snie-1012',
    courseCode: 'SNIE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Service Delivery Models: Community-Based Rehabilitation',
    points: 1,
    question: 'The World Health Organization (WHO) model of "Community-Based Rehabilitation" (CBR) is particularly suited for developing countries like Ethiopia because it:',
    options: [
      'Builds multi-million dollar institutional asylums in European capitals',
      'Utilizes local community resources, primary healthcare workers, families, and community volunteers to provide decentralized rehabilitation and economic empowerment right in rural villages',
      'Requires disabled persons to pay for international surgical operations',
      'Replaces all local schooling with television broadcasts'
    ],
    correctAnswer: 1,
    hint: 'CBR delivers services directly within rural communities using local human resources.',
    explanation: 'Academic Explanation:\n1. CBR is a community-level strategy that promotes rehabilitation, equalization of opportunities, and social inclusion of persons with disabilities by mobilizing local resources, families, primary healthcare workers, and community leaders.\n\n🇪🇹 በማኅበረሰብ አቀፍ ተሳትፎ መልሶ ማቋቋም (CBR) ውድ የሆኑ ሆስፒታሎች በሌሉባቸው የገጠር መንደሮች የአካባቢውን ማኅበረሰብ፣ የጤና ኤክስቴንሽን ሠራተኞችንና ቤተሰቦችን በማስተባበር አካል ጉዳተኞች በጤና፣ በትምህርትና በሥራ ራሳቸውን እንዲችሉ የሚያደርግ የዓለም ጤና ድርጅት (WHO) ሞዴል ነው። 🌾🤝✨\n\nVerified Answer: Option B.'
  },

  // =========================================================================
  // Question 24: Causes of Disability: Perinatal
  // =========================================================================
  {
    id: 'snie-2025-model-q24',
    courseId: 'snie-1012',
    courseCode: 'SNIE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Etiology of Disabilities: Perinatal Stage',
    points: 1,
    question: 'Which of the following causes of childhood neurological impairment occurs specifically during the "perinatal" stage (the process of labor and delivery)?',
    options: [
      'Inherited chromosomal mutations from grandparents',
      'Birth asphyxia (deprivation of oxygen to the baby\'s brain during prolonged, obstructed labor)',
      'Traffic accidents occurring at age 10',
      'Severe adult hypertension'
    ],
    correctAnswer: 1,
    hint: 'Perinatal means around the time of birth, during labor and delivery.',
    explanation: 'Academic Explanation:\n1. Prenatal occurs before birth (genetics, maternal rubella).\n2. Perinatal occurs during birth (birth asphyxia, birth trauma, umbilical cord strangulation).\n3. Postnatal occurs after birth (infections, accidents).\n\n🇪🇹 በወሊድ ወቅት (Perinatal stage) የሚከሰት ትልቁ የአእምሮ ጉዳት መንስኤ ምጥ ሲራዘም ለሕፃኑ አንጎል የሚደርስ የኦክስጅን እጥረት (Birth asphyxia) ነው። 👶⚡\n\nVerified Answer: Option B.'
  },

  // =========================================================================
  // Question 25: Sustainable Development Goals: SDG 4
  // =========================================================================
  {
    id: 'snie-2025-model-q25',
    courseId: 'snie-1012',
    courseCode: 'SNIE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Global Commitments: SDG 4',
    points: 1,
    question: 'United Nations Sustainable Development Goal 4 (SDG 4) of the 2030 Agenda explicitly calls on all nations to:',
    options: [
      'Privatize all primary and secondary schools worldwide',
      'Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all',
      'Segregate students based on physical performance exams',
      'Abolish all special needs educational funding'
    ],
    correctAnswer: 1,
    hint: 'SDG 4 is the global goal for inclusive and equitable quality education.',
    explanation: 'Academic Explanation:\n1. UN Sustainable Development Goal 4 commits the international community to: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all" by 2030.\n\n🇪🇹 የተባበሩት መንግሥታት የዘላቂ ልማት ግብ 4 (SDG 4) እ.ኤ.አ በ2030 ለሁሉም የሰው ልጆች አካታች፣ ፍትሐዊና ጥራት ያለው ትምህርት እንዲሁም የዕድሜ ልክ የመማር ዕድል ማዳረስን ዓላማ ያደረገ ዓለም አቀፍ ግብ ነው። 🎯🌱🌍\n\nVerified Answer: Option B.'
  }
];
