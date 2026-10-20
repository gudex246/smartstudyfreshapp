import { ExamQuestion } from '../types';

/**
 * Haramaya University - College of Social Sciences and Humanities / HULMS
 * Communicative English Language Skills I (FLEn 1011) - Midterm Examination (2018 E.C.)
 * Complete 30-Question Examination with Full Reading Passage and In-Depth Academic Explanations (English Only).
 */
export const READING_PASSAGE_2018 = `[Reading Passage: The Hidden Life of Urban Trees]

Paragraph 1:
Although people often think of cities as places dominated by concrete, glass, and steel, urban areas also host surprisingly complex ecosystems. Among the most important members of these ecosystems are urban trees. They line streets, fill public parks, and sometimes persist in small patches of remnant forest. Despite being surrounded by human-made structures, these trees play essential roles in improving city life.

Paragraph 2:
Urban trees provide a variety of environmental benefits. Their leaves absorb pollutants such as nitrogen dioxide and sulfur dioxide, helping to improve air quality. Trees also cool neighborhoods by creating shade and releasing moisture through a process known as transpiration. In fact, research shows that temperatures in tree-lined streets can be several degrees lower than in treeless areas during summer months.

Paragraph 3:
Beyond environmental effects, trees offer substantial psychological benefits. Studies have indicated that people who live near green spaces report lower stress levels and higher overall life satisfaction. Even brief encounters with natural elements—such as walking beneath a canopy of branches—can restore mental focus. Because modern urban life is often fast-paced and stressful, these small moments of contact with nature can be surprisingly restorative.

Paragraph 4:
However, maintaining healthy urban forests is far from simple. Trees in cities face numerous challenges, including limited soil, compacted ground, pollution, and damage from vehicles. Additionally, climate change brings new stresses—stronger storms, prolonged heat waves, and invasive pests that thrive in warmer temperatures. Urban planners and arborists must therefore work together to choose species that can withstand these difficult conditions.

Paragraph 5:
Despite these obstacles, many cities are investing in ambitious tree-planting programs. These initiatives aim not only to beautify neighborhoods but also to build resilience against climate-related disasters such as flooding and extreme heat. Community organizations frequently join these efforts, teaching residents how to plant and care for young trees. Through these partnerships, cities hope to create greener, healthier environments for future generations.`;

export const ENGLISH_2018_MIDTERM_QUESTIONS: ExamQuestion[] = [
  // =========================================================================
  // Question 1
  // =========================================================================
  {
    id: 'flen-2018-mid-q1',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Tense Usage: Simple Past with Definite Past Time Marker',
    points: 1,
    question: "A: 'Where is Bikila?' B: 'He _____________ ten minutes ago.'",
    options: [
      'has gone out',
      'have gone out',
      'has been out',
      'went out'
    ],
    correctAnswer: 3,
    hint: 'Notice the specific time expression "ten minutes ago". Specific finished time expressions require the Simple Past tense.',
    explanation: 'Grammar Rule & Explanation:\n1. The phrase "ten minutes ago" is a definite, completed past time indicator.\n2. When an action was completed at a specific stated point in the past, English grammar mandates the Simple Past tense ("went out"), not the Present Perfect ("has gone out").\n3. Present Perfect connects past events to the present without naming a specific past time point.\n\nCorrect Answer: Option D (went out).'
  },

  // =========================================================================
  // Question 2
  // =========================================================================
  {
    id: 'flen-2018-mid-q2',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Reading Comprehension: Vocabulary in Context',
    points: 1,
    question: `${READING_PASSAGE_2018}\n\nDominated (paragraph 1) most nearly means:`,
    options: [
      'Decorated',
      'Confronted',
      'Buried',
      'Controlled'
    ],
    correctAnswer: 3,
    hint: 'Look at Paragraph 1: "...places dominated by concrete, glass, and steel...". What word best describes being overwhelmingly ruled or governed by these physical structures?',
    explanation: 'Reading Comprehension Derivation:\n1. In Paragraph 1, the sentence reads: "Although people often think of cities as places dominated by concrete, glass, and steel, urban areas also host surprisingly complex ecosystems."\n2. Here, "dominated" describes an environment that is heavily controlled, governed, or overwhelmingly characterized by inanimate materials over nature.\n3. Among the choices, "Controlled" is the closest synonym to "dominated" in this environmental context.\n\nCorrect Answer: Option D (Controlled).'
  },

  // =========================================================================
  // Question 3
  // =========================================================================
  {
    id: 'flen-2018-mid-q3',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Modal Auxiliaries: Expressing Reasonable Expectation',
    points: 1,
    question: 'I wonder where Chaltu is. She _______ here by now.',
    options: [
      'ought to be',
      'had better be',
      'ought be',
      'should be'
    ],
    correctAnswer: 3,
    hint: 'The speaker expresses a logical assumption or expectation regarding normal arrival time ("by now").',
    explanation: 'Grammar Rule & Explanation:\n1. The modal auxiliary "should" (as well as "ought to") is used to express reasonable expectation or logical likelihood based on standard arrangements ("She should be here by now").\n2. "Had better" expresses an urgent warning or strong advice with negative consequences, which does not fit wondering about someone\'s expected arrival.\n3. "Ought be" is ungrammatical because "ought" requires the "to" infinitive particle.\n4. "Should be" is the primary standard modal used in Ethiopian communicative English textbooks for expressing reasonable expectation.\n\nCorrect Answer: Option D (should be).'
  },

  // =========================================================================
  // Question 4
  // =========================================================================
  {
    id: 'flen-2018-mid-q4',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Modal Auxiliaries: Giving Advice and Recommendations',
    points: 1,
    question: 'If you want to maintain a healthy lifestyle, you _______ incorporate a balanced diet into your daily routine to improve your overall well-being.',
    options: [
      'better had',
      'better not had',
      'should',
      'ought not'
    ],
    correctAnswer: 2,
    hint: 'Which modal auxiliary gives general recommendation and advice while being grammatically correct?',
    explanation: 'Grammar Rule & Explanation:\n1. "Should" is the core modal auxiliary used to give sensible advice and positive recommendations.\n2. "Better had" and "better not had" are ungrammatical word orders (the correct idiom is "had better").\n3. "Ought not" lacks the preposition "to" and conveys a negative prohibition, which contradicts maintaining a healthy lifestyle.\n4. Therefore, "should" is both syntactically and semantically correct.\n\nCorrect Answer: Option C (should).'
  },

  // =========================================================================
  // Question 5
  // =========================================================================
  {
    id: 'flen-2018-mid-q5',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Reading Comprehension: Pronoun Reference',
    points: 1,
    question: `${READING_PASSAGE_2018}\n\nIn paragraph 2, “their leaves” refers to:`,
    options: [
      "Buildings' surfaces",
      'City parks',
      'Pollutants',
      'Trees'
    ],
    correctAnswer: 3,
    hint: 'Look at the preceding sentence in Paragraph 2: "Urban trees provide a variety of environmental benefits. Their leaves absorb pollutants..."',
    explanation: 'Pronoun Reference Analysis:\n1. In Paragraph 2, sentence 1 introduces the plural subject: "Urban trees provide a variety of environmental benefits."\n2. Sentence 2 continues: "Their leaves absorb pollutants such as nitrogen dioxide..."\n3. The possessive pronoun "Their" directly modifies "leaves", referring back to the trees (Urban trees).\n\nCorrect Answer: Option D (Trees).'
  },

  // =========================================================================
  // Question 6
  // =========================================================================
  {
    id: 'flen-2018-mid-q6',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Reading Comprehension: Contextual Reference',
    points: 1,
    question: `${READING_PASSAGE_2018}\n\nIn paragraph 3, “these small moments” refers to:`,
    options: [
      'Fast-paced lifestyles',
      'Hours spent exercising',
      'Brief encounters with nature',
      'The entire day'
    ],
    correctAnswer: 2,
    hint: 'Read the sentence right before "these small moments" in Paragraph 3.',
    explanation: 'Reading Comprehension Derivation:\n1. Paragraph 3 states: "Even brief encounters with natural elements—such as walking beneath a canopy of branches—can restore mental focus. Because modern urban life is often fast-paced and stressful, these small moments of contact with nature can be surprisingly restorative."\n2. "These small moments" explicitly references the "brief encounters with natural elements" described in the immediate previous sentence.\n\nCorrect Answer: Option C (Brief encounters with nature).'
  },

  // =========================================================================
  // Question 7
  // =========================================================================
  {
    id: 'flen-2018-mid-q7',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Reading Comprehension: Contextual Reference',
    points: 1,
    question: `${READING_PASSAGE_2018}\n\nIn paragraph 4, “these difficult conditions” refers to:`,
    options: [
      'Green-space benefits',
      'Wildlife habitats',
      'Recreation opportunities',
      'Limited soil, pollution, storms, heat, and pests'
    ],
    correctAnswer: 3,
    hint: 'Paragraph 4 catalogs the urban hardships trees face.',
    explanation: 'Reading Comprehension Derivation:\n1. Paragraph 4 outlines the multiple environmental hazards trees confront in urban settings: "Trees in cities face numerous challenges, including limited soil, compacted ground, pollution, and damage from vehicles. Additionally, climate change brings new stresses—stronger storms, prolonged heat waves, and invasive pests..."\n2. The concluding sentence recommends choosing species that can withstand "these difficult conditions", meaning all the listed stresses: limited soil, pollution, storms, extreme heat, and pests.\n\nCorrect Answer: Option D (Limited soil, pollution, storms, heat, and pests).'
  },

  // =========================================================================
  // Question 8
  // =========================================================================
  {
    id: 'flen-2018-mid-q8',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Reading Comprehension: Pronoun and Noun Phrase Reference',
    points: 1,
    question: `${READING_PASSAGE_2018}\n\nIn paragraph 5, “these initiatives” refers to:`,
    options: [
      'Parks and playgrounds',
      'Climate disasters',
      'Tree-planting programs',
      'Shopping centers'
    ],
    correctAnswer: 2,
    hint: 'Check sentence 1 and sentence 2 of Paragraph 5.',
    explanation: 'Reading Comprehension Derivation:\n1. Paragraph 5 begins: "Despite these obstacles, many cities are investing in ambitious tree-planting programs. These initiatives aim not only to beautify neighborhoods but also to build resilience..."\n2. The demonstrative phrase "These initiatives" directly substitutes for the "ambitious tree-planting programs" introduced in the opening clause.\n\nCorrect Answer: Option C (Tree-planting programs).'
  },

  // =========================================================================
  // Question 9
  // =========================================================================
  {
    id: 'flen-2018-mid-q9',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Reading Comprehension: Vocabulary & Synonym in Context',
    points: 1,
    question: `${READING_PASSAGE_2018}\n\nObstacles (paragraph 5) refers to:`,
    options: [
      'Forests',
      'Traditions',
      'Decorations',
      'Challenges'
    ],
    correctAnswer: 3,
    hint: '"Obstacles" refers back to the challenges described in the previous paragraph.',
    explanation: 'Reading Comprehension Derivation:\n1. Paragraph 5 begins: "Despite these obstacles...", summarizing the challenges presented in Paragraph 4 (compacted soil, vehicle damage, pests, heat waves, and storms).\n2. An obstacle is something that impedes progress or creates difficulty—a direct synonym for "Challenges".\n\nCorrect Answer: Option D (Challenges).'
  },

  // =========================================================================
  // Question 10
  // =========================================================================
  {
    id: 'flen-2018-mid-q10',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Reading Comprehension: Vocabulary in Context',
    points: 1,
    question: `${READING_PASSAGE_2018}\n\nPersist (paragraph 1) most nearly means:`,
    options: [
      'Move quickly',
      'Continue to exist',
      'Change shape',
      'Grow larger'
    ],
    correctAnswer: 1,
    hint: 'In Paragraph 1: "...and sometimes persist in small patches of remnant forest."',
    explanation: 'Vocabulary in Context Analysis:\n1. Paragraph 1 states: "They line streets, fill public parks, and sometimes persist in small patches of remnant forest."\n2. "Persist" means to endure, remain, or continue to exist despite surrounding adversity or changing human environments.\n3. Therefore, "Continue to exist" is the accurate contextual meaning.\n\nCorrect Answer: Option B (Continue to exist).'
  },

  // =========================================================================
  // Question 11
  // =========================================================================
  {
    id: 'flen-2018-mid-q11',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Reading Comprehension: Vocabulary in Context',
    points: 1,
    question: `${READING_PASSAGE_2018}\n\nRestorative (paragraph 3) most nearly means:`,
    options: [
      'Decorative',
      'Dangerous',
      'Refreshing',
      'Unpredictable'
    ],
    correctAnswer: 2,
    hint: 'Notice the connection in Paragraph 3 with "restore mental focus" and renewing energy.',
    explanation: 'Vocabulary in Context Analysis:\n1. Paragraph 3 explains: "Even brief encounters with natural elements—such as walking beneath a canopy of branches—can restore mental focus... these small moments of contact with nature can be surprisingly restorative."\n2. "Restorative" means having the quality of rejuvenating, refreshing, healing, or renewing vitality after mental fatigue.\n3. The closest synonym provided is "Refreshing".\n\nCorrect Answer: Option C (Refreshing).'
  },

  // =========================================================================
  // Question 12
  // =========================================================================
  {
    id: 'flen-2018-mid-q12',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Reading Comprehension: Vocabulary in Context',
    points: 1,
    question: `${READING_PASSAGE_2018}\n\nSubstantial (paragraph 3) means:`,
    options: [
      'Imaginary',
      'Considerable',
      'Slight',
      'Sudden'
    ],
    correctAnswer: 1,
    hint: 'Paragraph 3: "...trees offer substantial psychological benefits."',
    explanation: 'Vocabulary in Context Analysis:\n1. Paragraph 3 notes: "Beyond environmental effects, trees offer substantial psychological benefits."\n2. "Substantial" signifies large in amount, value, or importance; significant and "Considerable".\n3. Antonyms would be "slight" or "insignificant".\n\nCorrect Answer: Option B (Considerable).'
  },

  // =========================================================================
  // Question 13
  // =========================================================================
  {
    id: 'flen-2018-mid-q13',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Modal Auxiliaries: Advice for Eye Protection',
    points: 1,
    question: 'The sun is very bright today. You ______ wear sunglasses to protect your eyes.',
    options: [
      'should',
      'had better',
      'had better not',
      'ought to'
    ],
    correctAnswer: 0,
    hint: 'A general piece of helpful advice on a sunny day.',
    explanation: 'Grammar Rule & Explanation:\n1. "Should" is the primary modal verb used to give general practical advice or recommended courses of action ("You should wear sunglasses").\n2. While "had better" is possible for urgent warnings, general guidance in this unit is expressed by "should".\n3. "Had better not" is a negative warning, which contradicts protecting one\'s eyes.\n\nCorrect Answer: Option A (should).'
  },

  // =========================================================================
  // Question 14
  // =========================================================================
  {
    id: 'flen-2018-mid-q14',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Modal Auxiliaries: Moral Duty and Interpersonal Advice',
    points: 1,
    question: 'To foster better relationships with your classmates, you ________ make an effort to communicate openly and honestly as this can lead to a more collaborative work environment.',
    options: [
      'ought not to',
      'should not',
      'ought to',
      'had better not to'
    ],
    correctAnswer: 2,
    hint: 'The sentence advises a positive social obligation to improve relationships.',
    explanation: 'Grammar Rule & Explanation:\n1. Fostering positive relationships requires taking constructive action; therefore, negative modals ("ought not to", "should not") are logically incorrect.\n2. "Had better not to" is ungrammatical because "had better" takes a bare infinitive without "to".\n3. "Ought to" expresses moral obligation, duty, or strong recommendation with proper syntax.\n\nCorrect Answer: Option C (ought to).'
  },

  // =========================================================================
  // Question 15
  // =========================================================================
  {
    id: 'flen-2018-mid-q15',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Modal Auxiliaries: Urgency & Warning with "Had Better"',
    points: 1,
    question: 'We _____ stop for petrol shortly. The tank is close to being empty.',
    options: [
      'should',
      'had better',
      'ought not to',
      'ought to'
    ],
    correctAnswer: 1,
    hint: 'Notice the immediate risk/negative consequence: running out of fuel and being stranded on the road.',
    explanation: 'Grammar Rule & Explanation:\n1. "Had better" is used instead of "should" or "ought to" when there is an impending risk or negative consequence if the action is not performed immediately.\n2. Because the petrol tank is almost empty, failing to stop will cause the car to break down.\n3. Therefore, "had better" is the precise modal for urgent warnings.\n\nCorrect Answer: Option B (had better).'
  },

  // =========================================================================
  // Question 16
  // =========================================================================
  {
    id: 'flen-2018-mid-q16',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Reading Comprehension: Paragraph Main Focus',
    points: 1,
    question: `${READING_PASSAGE_2018}\n\nWhat is the main focus of paragraph 4?`,
    options: [
      'Reasons people dislike nature',
      'Ancient forests and their history',
      'How to plant a garden',
      'Challenges urban trees face'
    ],
    correctAnswer: 3,
    hint: 'Read the topic sentence of Paragraph 4: "However, maintaining healthy urban forests is far from simple. Trees in cities face numerous challenges..."',
    explanation: 'Reading Comprehension Analysis:\n1. Paragraph 4 specifically addresses the obstacles and stresses that trees experience in cities, such as limited soil, pollution, vehicle impacts, severe storms, heat waves, and invasive pests.\n2. The main focus is clearly the "Challenges urban trees face".\n\nCorrect Answer: Option D (Challenges urban trees face).'
  },

  // =========================================================================
  // Question 17
  // =========================================================================
  {
    id: 'flen-2018-mid-q17',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Reading Comprehension: Overall Main Idea',
    points: 1,
    question: `${READING_PASSAGE_2018}\n\nWhat is the main idea of the passage?`,
    options: [
      'Urban trees require more water than rural trees.',
      'Urban trees provide essential benefits despite many challenges.',
      'Most cities are eliminating trees to create space.',
      'Urban parks are the only places where trees grow.'
    ],
    correctAnswer: 1,
    hint: 'Synthesize the entire text: environmental/psychological benefits are presented alongside the harsh challenges and city efforts to protect them.',
    explanation: 'Main Idea Synthesis:\n1. The passage opens by explaining that urban trees provide indispensable environmental (clean air, cooling) and psychological (stress relief) benefits.\n2. It then outlines the serious difficulties urban trees face (pollution, compacted soil, climate extremes) and the community partnerships working to sustain them.\n3. The overarching thesis statement is: "Urban trees provide essential benefits despite many challenges."\n\nCorrect Answer: Option B (Urban trees provide essential benefits despite many challenges).'
  },

  // =========================================================================
  // Question 18
  // =========================================================================
  {
    id: 'flen-2018-mid-q18',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Reading Comprehension: Paragraph Summary',
    points: 1,
    question: `${READING_PASSAGE_2018}\n\nWhich choice best summarizes paragraph 2?`,
    options: [
      'Trees have negative effects on air quality.',
      'Pollution harms trees more than humans.',
      'Urban trees only provide beauty.',
      'Trees cool the environment and absorb pollutants'
    ],
    correctAnswer: 3,
    hint: 'Paragraph 2 highlights absorption of gases (NO2, SO2) and cooling through transpiration.',
    explanation: 'Paragraph Summary Analysis:\n1. Paragraph 2 focuses on physical environmental benefits: absorbing harmful pollutants (improving air quality) and reducing local temperatures through shade and transpiration.\n2. Option D accurately captures both core aspects: "Trees cool the environment and absorb pollutants".\n\nCorrect Answer: Option D (Trees cool the environment and absorb pollutants).'
  },

  // =========================================================================
  // Question 19
  // =========================================================================
  {
    id: 'flen-2018-mid-q19',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Reading Comprehension: Paragraph Purpose',
    points: 1,
    question: `${READING_PASSAGE_2018}\n\nWhich option expresses the main purpose of paragraph 3?`,
    options: [
      'To argue that trees cause stress',
      'To warn people not to walk in parks',
      'To describe how buildings reduce stress',
      'To explain psychological benefits of trees'
    ],
    correctAnswer: 3,
    hint: 'Notice the topic sentence of Paragraph 3: "Beyond environmental effects, trees offer substantial psychological benefits."',
    explanation: 'Paragraph Purpose Analysis:\n1. Paragraph 3 details how nature contact reduces human stress, elevates life satisfaction, and restores mental focus in fast-paced cities.\n2. Its primary communicative purpose is "To explain psychological benefits of trees".\n\nCorrect Answer: Option D (To explain psychological benefits of trees).'
  },

  // =========================================================================
  // Question 20
  // =========================================================================
  {
    id: 'flen-2018-mid-q20',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Reading Comprehension: Paragraph Summary',
    points: 1,
    question: `${READING_PASSAGE_2018}\n\nWhich statement best summarizes paragraph 1?`,
    options: [
      'Cities have no room for natural life.',
      'Most trees survive only in forests.',
      'Urban trees are rare and unimportant.',
      'Urban areas still sustain meaningful tree ecosystems'
    ],
    correctAnswer: 3,
    hint: 'Paragraph 1 contrasts concrete city structures with surprisingly complex living ecosystems.',
    explanation: 'Paragraph Summary Analysis:\n1. Paragraph 1 explains that although cities are primarily built of concrete, steel, and glass, they host vibrant urban forests and trees that play an essential role in city life.\n2. Thus, the best summary is that "Urban areas still sustain meaningful tree ecosystems".\n\nCorrect Answer: Option D (Urban areas still sustain meaningful tree ecosystems).'
  },

  // =========================================================================
  // Question 21
  // =========================================================================
  {
    id: 'flen-2018-mid-q21',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Reading Comprehension: Paragraph Summary',
    points: 1,
    question: `${READING_PASSAGE_2018}\n\nWhich statement best summarizes paragraph 5?`,
    options: [
      'Planting trees provides no long-term value.',
      'Climate change has ended tree-planting efforts.',
      'Cities are abandoning tree planting.',
      'Communities and governments are jointly expanding urban forests'
    ],
    correctAnswer: 3,
    hint: 'Look at the partnerships between city initiatives and community organizations in Paragraph 5.',
    explanation: 'Paragraph Summary Analysis:\n1. Paragraph 5 highlights that cities are investing in tree-planting programs and partnering with community organizations and residents to plant and nurture young trees for climate resilience.\n2. The statement that best summarizes this is: "Communities and governments are jointly expanding urban forests".\n\nCorrect Answer: Option D (Communities and governments are jointly expanding urban forests).'
  },

  // =========================================================================
  // Question 22
  // =========================================================================
  {
    id: 'flen-2018-mid-q22',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Grammar: Present Perfect with "Yet" vs Simple Past with Time Clause',
    points: 1,
    question: "A: '____________ their homework yet?' B: 'Yes, they ___________ it when they arrived from school.'",
    options: [
      'Has the kids done/did',
      'Have the kids done/did',
      'Did the kids do/have done',
      'Did the kids do/did'
    ],
    correctAnswer: 1,
    hint: 'Speaker A asks about completion up to the present with "yet". Speaker B specifies a past time clause ("when they arrived").',
    explanation: 'Grammar Rule & Explanation:\n1. For Speaker A, the time adverb "yet" in an interrogative sentence with a plural subject ("the kids") requires the Present Perfect tense: "Have the kids done... yet?".\n2. For Speaker B, the response references a definite, completed past time event ("when they arrived from school"), which requires the Simple Past tense ("did it").\n3. Combining both clauses gives: "Have the kids done / did".\n\nCorrect Answer: Option B (Have the kids done/did).'
  },

  // =========================================================================
  // Question 23
  // =========================================================================
  {
    id: 'flen-2018-mid-q23',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Grammar: Present Perfect vs Simple Past with Specific Clock Time',
    points: 1,
    question: "A: '_____________ lunch yet?' B: 'Yes, I ___________ lunch at 1:30.'",
    options: [
      'Have you had/have had',
      'Has you had/has had',
      'Have you had /had',
      'Did you have /have had'
    ],
    correctAnswer: 2,
    hint: 'The question uses "yet" (Present Perfect), while the reply gives a definite past clock time "at 1:30" (Simple Past).',
    explanation: 'Grammar Rule & Explanation:\n1. The question asks about an action up to now using "yet": "Have you had lunch yet?".\n2. The answer specifies a finished, exact past clock time ("at 1:30"), which strictly requires the Simple Past tense ("had lunch at 1:30"), not the Present Perfect ("have had").\n3. Correct combination: "Have you had / had".\n\nCorrect Answer: Option C (Have you had /had).'
  },

  // =========================================================================
  // Question 24
  // =========================================================================
  {
    id: 'flen-2018-mid-q24',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Conditional Sentences: Third Conditional (Unreal Past)',
    points: 1,
    question: 'If he hadn’t broken his arm last year, he ______ in the national championship.',
    options: [
      'would compete',
      'competes',
      'competed',
      'would have competed'
    ],
    correctAnswer: 3,
    hint: 'Look at the if-clause: "If he hadn\'t broken..." (Past Perfect). What structure completes the main clause of a Third Conditional?',
    explanation: 'Grammar Rule & Explanation:\n1. The sentence refers to a hypothetical past situation that did not happen ("last year").\n2. The Third Conditional formula is:\n   If + Past Perfect (hadn\'t broken) ---> would have + past participle (would have competed).\n3. "Would compete" is Second Conditional (present unreal), whereas the context is explicitly in the past ("last year").\n\nCorrect Answer: Option D (would have competed).'
  },

  // =========================================================================
  // Question 25
  // =========================================================================
  {
    id: 'flen-2018-mid-q25',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Conditional Sentences: Third Conditional If-Clause',
    points: 1,
    question: 'If I _____ the deadline was earlier, I would have written the report overnight.',
    options: [
      'have known',
      'had known',
      'would know',
      'will know'
    ],
    correctAnswer: 1,
    hint: 'The main clause contains "would have written". The corresponding if-clause requires the Past Perfect.',
    explanation: 'Grammar Rule & Explanation:\n1. The main clause uses "would have written", which is the result clause of a Third Conditional sentence.\n2. In the Third Conditional, the if-clause must be in the Past Perfect tense (had + past participle: "had known").\n3. Neither "have known" (Present Perfect) nor "would know" is grammatically valid in the condition clause.\n\nCorrect Answer: Option B (had known).'
  },

  // =========================================================================
  // Question 26
  // =========================================================================
  {
    id: 'flen-2018-mid-q26',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Conditional Sentences: Zero Conditional (Scientific Fact)',
    points: 1,
    question: 'If you heat certain metals, they _________ their shape permanently.',
    options: [
      'will lose',
      'lose',
      'lost',
      'would lose'
    ],
    correctAnswer: 1,
    hint: 'Heating metals to alter their shape is a permanent scientific fact. Universal laws of science use the Zero Conditional.',
    explanation: 'Grammar Rule & Explanation:\n1. The Zero Conditional is used for universal physical laws, scientific truths, and general facts that always happen under specific conditions.\n2. Structure: If + Simple Present (heat) ---> Simple Present (lose).\n3. When heating particular metals, they predictably lose their original form as a general physical principle.\n\nCorrect Answer: Option B (lose).'
  },

  // =========================================================================
  // Question 27
  // =========================================================================
  {
    id: 'flen-2018-mid-q27',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Conditional Sentences: Second Conditional (Hypothetical Present)',
    points: 1,
    question: 'If you understood quantum mechanics, you ______ this paradox more easily.',
    options: [
      'would appreciate',
      'understand',
      'understood',
      'will understand'
    ],
    correctAnswer: 0,
    hint: 'The if-clause has "understood" (Simple Past) expressing an unreal present condition.',
    explanation: 'Grammar Rule & Explanation:\n1. The Second Conditional expresses an unreal or hypothetical situation in the present or future.\n2. Structure: If + Simple Past (understood) ---> would + bare infinitive (would appreciate).\n3. Therefore, "would appreciate" is the correct conditional verb phrase.\n\nCorrect Answer: Option A (would appreciate).'
  },

  // =========================================================================
  // Question 28
  // =========================================================================
  {
    id: 'flen-2018-mid-q28',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Tense Usage: Simple Past for Finished Past State vs Present Perfect',
    points: 1,
    question: 'She ______________ in Paris for three years and now she lives in Addis Ababa.',
    options: [
      'has lived',
      'lives',
      'have lived',
      'lived'
    ],
    correctAnswer: 3,
    hint: 'Does she still live in Paris? Notice: "and now she lives in Addis Ababa". The residence in Paris is completely finished.',
    explanation: 'Grammar Rule & Explanation:\n1. Although the prepositional phrase "for three years" often accompanies the Present Perfect, that only applies if the action continues into the present.\n2. Here, the subsequent clause clarifies: "and now she lives in Addis Ababa". Her residence in Paris ended in the past.\n3. A past completed period that no longer connects to the present must be stated in the Simple Past tense ("lived").\n\nCorrect Answer: Option D (lived).'
  },

  // =========================================================================
  // Question 29
  // =========================================================================
  {
    id: 'flen-2018-mid-q29',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Conditional Sentences: First Conditional (Real Future Possibility)',
    points: 1,
    question: 'We ______ the project immediately, if the company approves our proposal.',
    options: [
      'start',
      'will start',
      'would start',
      'would have started'
    ],
    correctAnswer: 1,
    hint: 'The if-clause is in the Simple Present ("approves"). What modal future form completes the First Conditional?',
    explanation: 'Grammar Rule & Explanation:\n1. The First Conditional expresses a real, plausible condition and its probable future outcome.\n2. Structure: Main Clause: will + base verb (will start) <---> If + Simple Present (approves).\n3. "We will start the project immediately, if the company approves our proposal."\n\nCorrect Answer: Option B (will start).'
  },

  // =========================================================================
  // Question 30
  // =========================================================================
  {
    id: 'flen-2018-mid-q30',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Question Formation: Simple Past with "Did" + Base Form',
    points: 1,
    question: '______________ the door when you left?',
    options: [
      'Did you locked',
      'Have you locked',
      'Did you lock',
      'Do you locked'
    ],
    correctAnswer: 2,
    hint: 'In past questions beginning with "Did", the main lexical verb must be in its base form (bare infinitive).',
    explanation: 'Grammar Rule & Explanation:\n1. The action took place at a definite past time ("when you left"), requiring the Simple Past interrogative structure.\n2. The rule for Simple Past questions is: Did + Subject + Base Form of Verb (infinitive without to).\n3. "Did you locked" is a common error of double-past marking. The auxiliary "did" already marks past tense, so the main verb must remain "lock".\n4. Therefore, the correct question is: "Did you lock the door when you left?".\n\nCorrect Answer: Option C (Did you lock).'
  }
];
