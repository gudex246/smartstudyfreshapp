import { ExamQuestion } from '../types';

/**
 * Haramaya University - College of Social Sciences and Humanities
 * School of Foreign Languages and Journalism - English Language and Literature Program
 * Communicative English Language Skills I (FLEn 1011) - Final Examination (2013 E.C. / February 19, 2020)
 * Complete 50-Question Examination with Official Answers and Academic Explanations (English Only).
 */

export const READING_PASSAGE_2013 = `[Reading Passage: Jean Piaget]

Paragraph 1:
Jean Piaget (1896-1980) was a Swiss developmental psychologist and philosopher. Originally trained as a botanist, he developed one of the most important theories of cognitive development in the field of developmental psychology. He was born in the French-speaking part of Switzerland. The son of a university professor, Piaget was an intellectually precocious child who was interested in the natural world and the subject of biology. Piaget was growing up during a time when Sigmund Freud's theory and practice of psychoanalysis was developing and becoming popular, which also influenced his interests.

Paragraph 2:
After graduating from his university studies, Piaget moved to Paris and taught at a school directed by Alfred Binet, who developed standardized intelligence tests still used today. As he helped to score Binet's tests, Piaget noticed patterns of consistent errors made by younger children but not by older children and adults. He formed a hypothesis that young children thought differently than adults. This was the germ of what would eventually become his theory of progressive, distinct stages of cognitive development that people go through universally as they grow.

Paragraph 3:
Piaget went from France back to Switzerland in 1921, where he directed the Rousseau Institute in Geneva. When he and his wife had three children of their own, he studied their behaviour and learning from their births and through their childhoods. He used the techniques of direct observation and the case study, a method of developing an in-depth, multidimensional profile of each individual child. Piaget described children as "little scientists" who learned through exploring, interacting with, and acting upon their environments.

Paragraph 4:
Piaget proposed in his theory that in learning, just as in biology, humans adapt to their environments through processes of assimilation and accommodation. He proposed that babies form mental constructs to represent their world, which he called schemata. An infant assimilates new information by fitting it into an existing schema. When it will not fit, the child accommodates to it by modifying an existing schema or forming a new one. Because of his emphasis on children's roles in actively constructing their own knowledge of reality, Piaget has been called a great pioneer of constructivism, the theory that people build knowledge based on interactions between their thoughts and experiences.

Paragraph 5:
Jean Piaget's theory – constructivism – states that infants are in a sensorimotor stage of cognitive development, wherein they get information through their senses, engage in motor activities, and receive feedback from the environment about the effects of their motor actions. He formed these ideas by watching his own children, and those of his university professor colleagues, as they learned about their surroundings through trial and error and discovery.

Paragraph 6:
Piaget called his second stage the preoperational stage, from around ages 2-7 years. Children are acquiring motor skills at this time. Their thought is characterized by egocentrism, thinking everything revolves around them with an inability to assume others' viewpoints. Animism – attributing human characteristics and behaviours to inanimate objects – and magical thinking – the belief that their thoughts or actions cause unrelated external events – are typical. Children are not yet capable of thinking logically or of conservation, the ability to retain mentally such properties as amount, number, or volume despite changes in shape, appearance, or arrangement.

Paragraph 7:
In the following stage of concrete operations which lasts until around age 11, children begin to think logically and perform what Piaget termed mental operations; but they can only do these relative to concrete objects they can see, touch, and manipulate. They can thus learn simple arithmetic and science. They no longer think egocentrically. They can solve conservation problems involving concrete materials, first realizing that quantities of solids or liquids are the same even when their shapes or the shapes of their containers are changed; and that the number of objects remains constant even when they are arranged differently. However, they are not yet capable of thinking abstractly or performing entirely mental operations.

Paragraph 8:
In Piaget's stage of formal operations, which begins just before puberty and continues into adolescence and adulthood, youngsters develop the ability to perform wholly mental operations and to consider logical arguments and philosophical ideas. They understand abstract concepts such as justice, democracy, truth, and beauty, and can consider moral issues. In fact, Piaget also developed a theory of moral development accompanying his theory of cognitive development. This influenced later developmental psychologists like Lawrence Kohlberg, who used it as a basis for his own developmental theory of moral reasoning, which expanded on the foundations that Piaget had provided.`;

export const ENGLISH_2013_FINAL_QUESTIONS: ExamQuestion[] = [
  // =========================================================================
  // PART ONE: MODAL VERBS (5%) - Questions 1 to 5
  // =========================================================================
  {
    id: 'flen-2013-fin-q1',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Modal Verbs: Obligation in Context',
    points: 1,
    question: 'Choose the most suitable modal verb to complete the dialogue:\n\nZinash: "Let\'s go shopping. I have got quite a number of things to buy, and I believe I can get them all in this shop. You see, I __________ (1) buy a present for my friend. She has invited me to her birthday. What shall we look at first?"',
    options: [
      'Must',
      'Could',
      'Ought to',
      'Can'
    ],
    correctAnswer: 2,
    hint: 'Zinash expresses a moral duty and strong obligation resulting from a social invitation ("She has invited me to her birthday").',
    explanation: 'In English, "ought to" (or "have to") expresses an objective obligation or duty arising from an external commitment or invitation. Because Zinash was invited to her friend\'s birthday party, she feels an obligation to purchase a gift. Option C ("Ought to") is the correct answer according to the official examination key.'
  },
  {
    id: 'flen-2013-fin-q2',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Modal Verbs: Sensory Perception (Can)',
    points: 1,
    question: 'Choose the most suitable modal verb to complete the dialogue:\n\nBontu: "Gloves, I think. They must be on the ground floor. Yes, here we are, and I __________ (2) see just the kind I want."',
    options: [
      'Must',
      'Could',
      'Ought to',
      'Can'
    ],
    correctAnswer: 3,
    hint: 'Verbs of sensory perception (see, hear, smell) typically pair with this modal to indicate present perception.',
    explanation: 'In standard English, sensory perception verbs like "see", "hear", and "smell" are paired with the modal auxiliary "can" to express the ability to perceive something in the immediate present ("I can see just the kind I want"). Option D ("Can") is correct.'
  },
  {
    id: 'flen-2013-fin-q3',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Modal Verbs: Suggestion & Possibility (Could)',
    points: 1,
    question: 'Choose the most suitable modal verb to complete the dialogue:\n\nBontu: "We\'ll just take a quick look around to see if there is anything, we __________ (3) take back as presents for the family."',
    options: [
      'Must',
      'Could',
      'Ought to',
      'Can'
    ],
    correctAnswer: 1,
    hint: 'This modal expresses tentative possibility or a gentle suggestion.',
    explanation: '"Could" is used here to indicate tentative possibility and make a polite suggestion about items they might potentially purchase for family members ("anything we could take back as presents"). Option B ("Could") is correct.'
  },
  {
    id: 'flen-2013-fin-q4',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Modal Verbs: Strong Recommendation / Direction (Must)',
    points: 1,
    question: 'Choose the most suitable modal verb to complete the dialogue:\n\nBontu: "I want to get a comb and some hair clips. Where do you think I can find them?"\nZinash: "Oh, you __________ (4) go to the haberdashery department. That\'s on a lower floor, I believe. We\'ll get them on our way out."',
    options: [
      'Must',
      'Could',
      'Ought to',
      'Can'
    ],
    correctAnswer: 0,
    hint: 'This modal expresses strong direction and certainty about where those specific items are sold.',
    explanation: '"Must" is employed to give a strong, direct recommendation and necessary instruction directing someone to the specific department where those grooming accessories are located. Option A ("Must") is correct.'
  },
  {
    id: 'flen-2013-fin-q5',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Modal Verbs: Advice & Recommendation (Should)',
    points: 1,
    question: 'Choose the most suitable modal verb to complete the dialogue:\n\nBontu: "Do you think they\'re my size? They look just about right."\nZinash: "You __________ (5) try them on."',
    options: [
      'Must',
      'Could',
      'Ought to',
      'Can',
      'Should'
    ],
    correctAnswer: 4,
    hint: 'This modal expresses everyday practical advice or recommendation.',
    explanation: '"Should" is the modal auxiliary expressing practical advice or recommendation. Zinash advises Bontu that the sensible course of action before buying footwear is to try them on ("You should try them on"). Option E ("Should") is correct.'
  },

  // =========================================================================
  // PART TWO: READING COMPREHENSION (20%) - Questions 6 to 15
  // =========================================================================
  {
    id: 'flen-2013-fin-q6',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Reading Comprehension: Specific Detail',
    points: 1,
    question: `${READING_PASSAGE_2013}\n\n6. According to this passage, Piaget's first scientific discipline was __________.`,
    options: [
      'Botany',
      'Philosophy',
      'Developmental psychology',
      'Cognitive development'
    ],
    correctAnswer: 0,
    hint: 'Check the second sentence of Paragraph 1.',
    explanation: 'Paragraph 1 explicitly states: "Originally trained as a botanist, he developed one of the most important theories of cognitive development in the field of developmental psychology." Therefore, his initial scientific discipline was Botany (Option A).'
  },
  {
    id: 'flen-2013-fin-q7',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Reading Comprehension: Inferred Connection',
    points: 1,
    question: `${READING_PASSAGE_2013}\n\n7. Piaget's proposal of human adaptation to the environment was an application of a principle of __________.`,
    options: [
      'Freudian psychoanalysis',
      'the biology he studied',
      'Binet\'s intelligence test',
      'direct child observation'
    ],
    correctAnswer: 1,
    hint: 'Check the first sentence of Paragraph 4 comparing human learning to biological processes.',
    explanation: 'Paragraph 4 states: "Piaget proposed in his theory that in learning, just as in biology, humans adapt to their environments through processes of assimilation and accommodation." Thus, human environmental adaptation was an application of biological principles he studied. Option B is correct.'
  },
  {
    id: 'flen-2013-fin-q8',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Reading Comprehension: Factual Recall',
    points: 1,
    question: `${READING_PASSAGE_2013}\n\n8. According to paragraph 2, which of the following statements is correct about Piaget's experience with Alfred Binet's intelligence tests?`,
    options: [
      'Piaget helped Alfred Binet by developing the intelligence tests.',
      'Piaget found the tests were inappropriate for younger children.',
      'Piaget felt younger children thought differently than adults did.',
      'Piaget identified error patterns that invalidated the test results.'
    ],
    correctAnswer: 2,
    hint: 'Review the hypothesis Piaget formed while scoring tests in Paragraph 2.',
    explanation: 'Paragraph 2 explains: "As he helped to score Binet\'s tests, Piaget noticed patterns of consistent errors made by younger children but not by older children and adults. He formed a hypothesis that young children thought differently than adults." Hence, Option C is correct.'
  },
  {
    id: 'flen-2013-fin-q9',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Reading Comprehension: Central Point',
    points: 1,
    question: `${READING_PASSAGE_2013}\n\n9. The central point of Piaget's theory is __________.`,
    options: [
      'gradual and continuous progression of cognitive development',
      'Completely different progression from one individual to the next',
      'The premise that younger children make errors but adults do not',
      'Universal progressive stages of development all humans undergo'
    ],
    correctAnswer: 3,
    hint: 'Look at the concluding statement of Paragraph 2 describing distinct developmental stages.',
    explanation: 'Paragraph 2 concludes that Piaget established a "theory of progressive, distinct stages of cognitive development that people go through universally as they grow." Option D accurately captures this core thesis.'
  },
  {
    id: 'flen-2013-fin-q10',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Reading Comprehension: Paraphrasing Main Idea',
    points: 1,
    question: `${READING_PASSAGE_2013}\n\n10. Which one of the following statements reiterates (paraphrases) the main idea of paragraph 5?`,
    options: [
      'Children can understand abstract concepts, conceptualize philosophies and reach logical conclusions within their environment.',
      'Children are not able to think logically and keep the information they get from their surroundings.',
      'Children learn about the world by using their senses to interact with their surroundings.',
      'Children are not capable of constructing their own meanings about the world without the help of their parents.'
    ],
    correctAnswer: 2,
    hint: 'Paragraph 5 focuses on the sensorimotor stage where infants use sensory input and motor actions.',
    explanation: 'Paragraph 5 describes the sensorimotor stage: "infants are in a sensorimotor stage of cognitive development, wherein they get information through their senses, engage in motor activities, and receive feedback from the environment... as they learned about their surroundings through trial and error and discovery." Paraphrased, this means children learn about the world by using their senses to interact with their surroundings (Option C).'
  },
  {
    id: 'flen-2013-fin-q11',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Reading Comprehension: Definition of Term',
    points: 1,
    question: `${READING_PASSAGE_2013}\n\n11. The theory that humans build knowledge from interactions between their thoughts and experiences is called __________.`,
    options: [
      'Biology',
      'Constructivism',
      'Cognitive development',
      'Developmental psychology'
    ],
    correctAnswer: 1,
    hint: 'Check the definition at the end of Paragraph 4.',
    explanation: 'Paragraph 4 states: "...constructivism, the theory that people build knowledge based on interactions between their thoughts and experiences." Therefore, Option B ("Constructivism") is correct.'
  },
  {
    id: 'flen-2013-fin-q12',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Reading Comprehension: Developmental Stages',
    points: 1,
    question: `${READING_PASSAGE_2013}\n\n12. Paragraph 8 states that __________ are in Piaget's formal operational stage of cognitive development.`,
    options: [
      'toddlers',
      'infants',
      'babies',
      'youths'
    ],
    correctAnswer: 3,
    hint: 'Check the age group in Paragraph 8: puberty, adolescence, and adulthood.',
    explanation: 'Paragraph 8 specifies that formal operations begin "just before puberty and continues into adolescence and adulthood, youngsters develop the ability to perform wholly mental operations..." Among the choices, "youths" (adolescents/young adults) represent this stage. Option D is correct.'
  },
  {
    id: 'flen-2013-fin-q13',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Reading Comprehension: Cognitive Concepts (Magical Thinking)',
    points: 1,
    question: `${READING_PASSAGE_2013}\n\n13. If a child believes that his/her disobedience caused a thunderstorm, this is most specifically an example of what Piaget termed __________.`,
    options: [
      'Animism',
      'Magical thinking',
      'Egocentrism',
      'Conservation'
    ],
    correctAnswer: 1,
    hint: 'Check Paragraph 6 for the belief that thoughts or actions cause unrelated external events.',
    explanation: 'Paragraph 6 defines "magical thinking" as "the belief that their thoughts or actions cause unrelated external events." Believing personal disobedience caused an independent natural phenomenon like a thunderstorm is a classic manifestation of magical thinking. Option B is correct.'
  },
  {
    id: 'flen-2013-fin-q14',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Reading Comprehension: Concrete Operational Characteristics',
    points: 1,
    question: `${READING_PASSAGE_2013}\n\n14. Which one of these is correct about the stage of concrete operations?`,
    options: [
      'Children can think abstractly during this stage.',
      'Children still think egocentrically in this stage.',
      'Children can think logically during this stage.',
      'Children cannot perform mental operations.'
    ],
    correctAnswer: 2,
    hint: 'Review the opening sentences of Paragraph 7.',
    explanation: 'Paragraph 7 states: "In the following stage of concrete operations which lasts until around age 11, children begin to think logically and perform what Piaget termed mental operations; but they can only do these relative to concrete objects..." Option C is factually correct. (Options A, B, and D contradict Paragraph 7).'
  },
  {
    id: 'flen-2013-fin-q15',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Reading Comprehension: Influenced Theories',
    points: 1,
    question: `${READING_PASSAGE_2013}\n\n15. From paragraph 8 it is understood that Lawrence Kohlberg's theory __________.`,
    options: [
      'is a cognitive theory that opposes Piaget\'s theory',
      'expands on Piaget\'s moral development theory',
      'focuses primarily upon cognitive development',
      'is a theory which is unrelated to Piaget\'s theory'
    ],
    correctAnswer: 1,
    hint: 'Look at the final sentence of Paragraph 8 regarding Kohlberg\'s work on moral reasoning.',
    explanation: 'Paragraph 8 states that Piaget\'s moral development work "influenced later developmental psychologists like Lawrence Kohlberg, who used it as a basis for his own developmental theory of moral reasoning, which expanded on the foundations that Piaget had provided." Hence, Option B is correct.'
  },

  // =========================================================================
  // PART THREE: PRONOUN REFERENCE (5%) - Questions 16 to 20
  // =========================================================================
  {
    id: 'flen-2013-fin-q16',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Pronoun Reference: "it" in Paragraph 4',
    points: 1,
    question: `${READING_PASSAGE_2013}\n\n16. In paragraph 4, line 4, what does the pronoun "it" refer to in the sentence:\n"An infant assimilates new information by fitting it into an existing schema."?`,
    options: [
      'new information',
      'infant',
      'schema',
      'biology'
    ],
    correctAnswer: 0,
    hint: 'What noun phrase functions as the object being fitted into the schema?',
    explanation: 'The pronoun "it" refers back to the noun phrase "new information" which is assimilated by fitting it into an existing schema. Option A is correct.'
  },
  {
    id: 'flen-2013-fin-q17',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Pronoun Reference: "them" in Paragraph 6',
    points: 1,
    question: `${READING_PASSAGE_2013}\n\n17. In paragraph 6, line 3, what does the pronoun "them" refer to in the sentence:\n"Their thought is characterized by egocentrism, thinking everything revolves around them with an inability to assume others\' viewpoints."?`,
    options: [
      'children between 2-7 years of age',
      'inanimate objects',
      'motor skills',
      'others\' viewpoints'
    ],
    correctAnswer: 0,
    hint: 'Whose egocentric thought causes them to believe everything revolves around themselves?',
    explanation: 'In Paragraph 6, "them" refers to children in the preoperational stage (children between 2-7 years of age). Option A is correct.'
  },
  {
    id: 'flen-2013-fin-q18',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Pronoun Reference: "he" in Paragraph 2',
    points: 1,
    question: `${READING_PASSAGE_2013}\n\n18. In paragraph 2, line 3, what does the pronoun "he" refer to in the sentence:\n"As he helped to score Binet\'s tests, Piaget noticed patterns of consistent errors made by younger children..."?`,
    options: [
      'Jean Piaget',
      'Alfred Binet',
      'Sigmund Freud',
      'A university professor'
    ],
    correctAnswer: 0,
    hint: 'Who was assisting in scoring the intelligence tests in Paris?',
    explanation: '"He" refers directly to Jean Piaget, who worked under Alfred Binet and scored the standardized tests. Option A is correct.'
  },
  {
    id: 'flen-2013-fin-q19',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Pronoun Reference: "who" in Paragraph 8',
    points: 1,
    question: `${READING_PASSAGE_2013}\n\n19. In paragraph 8, line 7, what does the relative pronoun "who" refer to in the sentence:\n"This influenced later developmental psychologists like Lawrence Kohlberg, who used it as a basis for his own developmental theory of moral reasoning..."?`,
    options: [
      'Lawrence Kohlberg',
      'Jean Piaget',
      'Sigmund Freud',
      'Alfred Binet'
    ],
    correctAnswer: 0,
    hint: 'Look at the antecedent immediately preceding the non-defining relative clause.',
    explanation: 'The relative pronoun "who" refers directly to Lawrence Kohlberg, the developmental psychologist who formulated the theory of moral reasoning. Option A is correct.'
  },
  {
    id: 'flen-2013-fin-q20',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Pronoun Reference: "they" in Paragraph 5',
    points: 1,
    question: `${READING_PASSAGE_2013}\n\n20. In paragraph 5, line 5, what does the pronoun "they" refer to in the sentence:\n"He formed these ideas by watching his own children, and those of his university professor colleagues, as they learned about their surroundings through trial and error and discovery."?`,
    options: [
      'Piaget\'s and his colleagues\' children',
      'university professor colleagues',
      'infants in general',
      'developmental psychologists'
    ],
    correctAnswer: 0,
    hint: 'Who was learning about their surroundings through trial and error while Piaget watched?',
    explanation: '"They" refers to the children being observed: "his own children, and those of his university professor colleagues" (Piaget\'s and his colleagues\' children). Option A is correct.'
  },

  // =========================================================================
  // PART FOUR: VOCABULARY IN CONTEXT (5%) - Questions 21 to 25
  // =========================================================================
  {
    id: 'flen-2013-fin-q21',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Vocabulary in Context: "remember / hold in mind"',
    points: 1,
    question: `${READING_PASSAGE_2013}\n\n21. Find a word in Paragraph 6 that means "remember / hold mentally / maintain in memory":\n("...the ability to __________ mentally such properties as amount, number, or volume despite changes in shape, appearance, or arrangement.")`,
    options: [
      'retain',
      'acquire',
      'assume',
      'characterize'
    ],
    correctAnswer: 0,
    hint: 'This transitive verb means to keep or hold information mentally.',
    explanation: 'In Paragraph 6, conservation is defined as "the ability to retain mentally such properties as amount, number, or volume..." To retain means to keep or hold in memory. Option A ("retain") is correct.'
  },
  {
    id: 'flen-2013-fin-q22',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Vocabulary in Context: "origin / seed"',
    points: 1,
    question: `${READING_PASSAGE_2013}\n\n22. Find a word in Paragraph 2 that means "origin / initial seed / embryonic starting point":\n("This was the __________ of what would eventually become his theory of progressive, distinct stages of cognitive development...")`,
    options: [
      'germ',
      'pattern',
      'error',
      'hypothesis'
    ],
    correctAnswer: 0,
    hint: 'This noun metaphorically means the seed or beginning of an idea.',
    explanation: 'In Paragraph 2, "germ" is used metaphorically to mean the seed, beginning, or origin of Piaget\'s developmental stage theory. Option A ("germ") is correct.'
  },
  {
    id: 'flen-2013-fin-q23',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Vocabulary in Context: "mental constructs"',
    points: 1,
    question: `${READING_PASSAGE_2013}\n\n23. Find a word in Paragraph 4 that means "mental concepts / cognitive frameworks / mental constructs":\n("He proposed that babies form mental constructs to represent their world, which he called __________.")`,
    options: [
      'schemata',
      'biology',
      'accommodation',
      'assimilation'
    ],
    correctAnswer: 0,
    hint: 'Plural form of schema, denoting cognitive mental representations.',
    explanation: 'In Paragraph 4, Piaget describes mental constructs used by children to represent their world as "schemata" (plural of schema). Option A ("schemata") is correct.'
  },
  {
    id: 'flen-2013-fin-q24',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Vocabulary in Context: "observed / perceived"',
    points: 1,
    question: `${READING_PASSAGE_2013}\n\n24. Find a word in Paragraph 2 that means "observed / detected / perceived through attention":\n("As he helped to score Binet\'s tests, Piaget __________ patterns of consistent errors made by younger children...")`,
    options: [
      'noticed',
      'moved',
      'scored',
      'graduated'
    ],
    correctAnswer: 0,
    hint: 'A past tense verb meaning became aware of or observed.',
    explanation: 'In Paragraph 2, the text states: "Piaget noticed patterns of consistent errors made by younger children..." "Noticed" means observed or detected. Option A is correct.'
  },
  {
    id: 'flen-2013-fin-q25',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Vocabulary in Context: "thorough / comprehensive"',
    points: 1,
    question: `${READING_PASSAGE_2013}\n\n25. Find a compound word in Paragraph 3 that means "thorough / comprehensive / detailed":\n("...a method of developing an __________ multidimensional profile of each individual child.")`,
    options: [
      'in-depth',
      'direct',
      'individual',
      'scientific'
    ],
    correctAnswer: 0,
    hint: 'Hyphenated adjective meaning extensive and thorough.',
    explanation: 'In Paragraph 3, Piaget describes case studies as "a method of developing an in-depth, multidimensional profile of each individual child." "In-depth" means thorough, comprehensive, and exhaustive. Option A is correct.'
  },

  // =========================================================================
  // PART FIVE: CONDITIONAL SENTENCES (6%) - Questions 26 to 31
  // =========================================================================
  {
    id: 'flen-2013-fin-q26',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Conditional Sentences: Second Conditional (would know)',
    points: 1,
    question: 'Complete the sentence with the correct conditional verb form:\n\n"If you asked him politely, he __________ (know) the answer to your question."',
    options: [
      'would know',
      'knows',
      'will know',
      'had known'
    ],
    correctAnswer: 0,
    hint: 'The if-clause uses the past simple ("asked"), signaling a hypothetical Type 2 conditional.',
    explanation: 'A Type 2 conditional expresses hypothetical or unlikely situations in the present/future: "If + Simple Past, would + bare infinitive". Therefore, "would know" is the grammatically correct answer.'
  },
  {
    id: 'flen-2013-fin-q27',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Conditional Sentences: First Conditional (will not play)',
    points: 1,
    question: 'Complete the sentence with the correct conditional verb form:\n\n"If it rains this afternoon, the children __________ (not play) outside on the sports field."',
    options: [
      'will not play',
      'would not play',
      'did not play',
      'would not have played'
    ],
    correctAnswer: 0,
    hint: 'The if-clause is in the Simple Present ("rains"), indicating a realistic future Type 1 condition.',
    explanation: 'A Type 1 conditional expresses realistic future conditions: "If + Simple Present, will + bare infinitive". The negative form is "will not play" (or "won\'t play"). Option A is correct.'
  },
  {
    id: 'flen-2013-fin-q28',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Conditional Sentences: Second Conditional (would run)',
    points: 1,
    question: 'Complete the sentence with the correct conditional verb form:\n\n"If I saw a dangerous wild beast in the forest, I __________ (run) away as fast as possible."',
    options: [
      'would run',
      'will run',
      'ran',
      'would have run'
    ],
    correctAnswer: 0,
    hint: 'The if-clause uses the Simple Past "saw", requiring "would + bare verb" in the main clause.',
    explanation: 'This is a Type 2 conditional representing an imaginary situation: "If I saw... I would run". Option A is correct.'
  },
  {
    id: 'flen-2013-fin-q29',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Conditional Sentences: Zero Conditional for Scientific Fact (melts)',
    points: 1,
    question: 'Complete the sentence with the correct conditional verb form:\n\n"If you heat ice above zero degrees Celsius, it __________ (melt)."',
    options: [
      'melts',
      'will melt',
      'melted',
      'would melt'
    ],
    correctAnswer: 0,
    hint: 'Scientific facts and physical laws use the Zero Conditional (present simple in both clauses).',
    explanation: 'The Zero Conditional expresses universal scientific facts and general truths: "If + Simple Present, Simple Present". When ice is heated above freezing, it melts. Option A ("melts") is correct.'
  },
  {
    id: 'flen-2013-fin-q30',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Conditional Sentences: Unless / First Conditional (won\'t wait)',
    points: 1,
    question: 'Complete the sentence with the correct conditional verb form:\n\n"Unless you hurry up, we __________ (not wait) for you at the bus terminal."',
    options: [
      'won\'t wait',
      'wouldn\'t wait',
      'didn\'t wait',
      'haven\'t waited'
    ],
    correctAnswer: 0,
    hint: '"Unless" equals "if not", following the Type 1 pattern with a future main clause.',
    explanation: '"Unless" means "if... not" and takes the Simple Present in the subordinate clause, followed by "will / will not (won\'t)" in the main clause: "Unless you hurry up, we won\'t wait for you". Option A is correct.'
  },
  {
    id: 'flen-2013-fin-q31',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Conditional Sentences: Third Conditional (would have understood)',
    points: 1,
    question: 'Complete the sentence with the correct conditional verb form:\n\n"If you had attended the lecture yesterday, you __________ (understand) the lesson much better."',
    options: [
      'would have understood',
      'would understand',
      'will understand',
      'understood'
    ],
    correctAnswer: 0,
    hint: 'The if-clause contains the Past Perfect "had attended", indicating a past unreal Type 3 condition.',
    explanation: 'A Type 3 conditional expresses past counterfactual situations: "If + Past Perfect, would have + past participle". Thus, "would have understood" is the correct form. Option A is correct.'
  },

  // =========================================================================
  // PART SIX: TENSES & VERB FORMS (8%) - Questions 32 to 39
  // =========================================================================
  {
    id: 'flen-2013-fin-q32',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Tenses: Present Perfect with "just"',
    points: 1,
    question: 'Fill in the blank with the correct form of the verb:\n\n"I __________ (just receive) your application letter this morning, and the committee will review it."',
    options: [
      'have just received',
      'just received',
      'had just received',
      'was just receiving'
    ],
    correctAnswer: 0,
    hint: 'Actions completed very recently with present relevance take the Present Perfect with "just".',
    explanation: '"Just" with an action recently completed having immediate relevance to the present requires the Present Perfect: "have just received". Option A is correct.'
  },
  {
    id: 'flen-2013-fin-q33',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Tenses: Simple Present with Stative Verbs',
    points: 1,
    question: 'Fill in the blank with the correct form of the verb:\n\n"We __________ (need) two academic references before we can proceed with your employment contract."',
    options: [
      'need',
      'are needing',
      'have needed',
      'were needing'
    ],
    correctAnswer: 0,
    hint: '"Need" is a stative verb expressing a present requirement.',
    explanation: '"Need" is a stative verb that does not typically take the continuous aspect in standard English. The Simple Present "need" is correct. Option A is correct.'
  },
  {
    id: 'flen-2013-fin-q34',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Tenses: Present Perfect with "so far"',
    points: 1,
    question: 'Fill in the blank with the correct form of the verb:\n\n"So far today, the admissions committee members __________ (give out) all fifty available application forms."',
    options: [
      'have given out',
      'gave out',
      'had given out',
      'are giving out'
    ],
    correctAnswer: 0,
    hint: 'Time expressions denoting an incomplete period up to the present ("so far today") take the Present Perfect.',
    explanation: '"So far today" describes an incomplete time frame leading up to the present moment, requiring the Present Perfect: "have given out". Option A is correct.'
  },
  {
    id: 'flen-2013-fin-q35',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Tenses: Simple Past for Past State',
    points: 1,
    question: 'Fill in the blank with the correct form of the verb:\n\n"When I was a first-year university student, I __________ (have) an old bicycle that I rode every day."',
    options: [
      'had',
      'have had',
      'was having',
      'am having'
    ],
    correctAnswer: 0,
    hint: 'The time clause "When I was a first-year student" denotes a finished past state.',
    explanation: 'A completed state during a specific period in the past requires the Simple Past tense: "had". Option A is correct.'
  },
  {
    id: 'flen-2013-fin-q36',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Tenses: Simple Past with Definite Past Time Adverbial',
    points: 1,
    question: 'Fill in the blank with the correct form of the verb:\n\n"Yesterday afternoon, the relief organization __________ (distribute) food supplies to the drought-affected community."',
    options: [
      'distributed',
      'has distributed',
      'had distributed',
      'was distributing'
    ],
    correctAnswer: 0,
    hint: '"Yesterday afternoon" is an explicit finished past time marker.',
    explanation: 'Definite completed past time indicators ("yesterday afternoon") require the Simple Past tense: "distributed". Option A is correct.'
  },
  {
    id: 'flen-2013-fin-q37',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Tenses: Past Continuous Interrupted by Simple Past',
    points: 1,
    question: 'Fill in the blank with the correct form of the verb:\n\n"While the students were quietly taking their final exam, the emergency bell suddenly __________ (ring)."',
    options: [
      'rang',
      'was ringing',
      'has rung',
      'rung'
    ],
    correctAnswer: 0,
    hint: 'A sudden, short completed action interrupting an ongoing past action takes the Simple Past.',
    explanation: 'When an ongoing action in the Past Continuous ("were quietly taking") is interrupted by a sudden single event, the interrupting event is expressed in the Simple Past: "rang". Option A is correct.'
  },
  {
    id: 'flen-2013-fin-q38',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Tenses: Present Perfect with "already"',
    points: 1,
    question: 'Fill in the blank with the correct form of the verb:\n\n"Don\'t worry about calling the department head; I __________ (already contact) him regarding the schedule change."',
    options: [
      'have already contacted',
      'already contacted',
      'had already contacted',
      'am already contacting'
    ],
    correctAnswer: 0,
    hint: 'An action completed earlier than expected with current relevance uses the Present Perfect with "already".',
    explanation: '"Already" used to emphasize that an action is completed prior to the present moment takes the Present Perfect: "have already contacted". Option A is correct.'
  },
  {
    id: 'flen-2013-fin-q39',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Tenses: Simple Past with "last semester"',
    points: 1,
    question: 'Fill in the blank with the correct form of the verb:\n\n"Last semester, Hawi __________ (take) an intensive academic writing course to improve her essay skills."',
    options: [
      'took',
      'has taken',
      'had taken',
      'was taking'
    ],
    correctAnswer: 0,
    hint: '"Last semester" marks a completed past academic period.',
    explanation: 'The past time adverbial "last semester" requires the Simple Past tense: "took". Option A is correct.'
  },

  // =========================================================================
  // PART SEVEN: ACTIVE & PASSIVE VOICE (8%) - Questions 40 to 47
  // =========================================================================
  {
    id: 'flen-2013-fin-q40',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Passive Voice: Past Simple Passive (was given)',
    points: 1,
    question: 'Choose the correct voice and form of the verb:\n\n"First prize in the regional science exhibition __________ (give) to the innovative engineering team from Haramaya."',
    options: [
      'was given',
      'is given',
      'gave',
      'had given'
    ],
    correctAnswer: 0,
    hint: 'The subject "First prize" is the recipient of the action in the past.',
    explanation: 'Because the grammatical subject "First prize" was the recipient of an action that occurred in the past, the Simple Past Passive ("was given") is required. Option A is correct.'
  },
  {
    id: 'flen-2013-fin-q41',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Verb Agreement: Past Simple of "be" (was)',
    points: 1,
    question: 'Choose the correct form of the verb "be":\n\n"The historical library hall __________ (be) unusually quiet when the researchers entered."',
    options: [
      'was',
      'were',
      'is',
      'been'
    ],
    correctAnswer: 0,
    hint: 'Singular subject "The historical library hall" in the past tense.',
    explanation: 'The singular noun "library hall" in a past context takes the singular past form of "be": "was". Option A is correct.'
  },
  {
    id: 'flen-2013-fin-q42',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Passive Voice: Past Simple Passive (was designed)',
    points: 1,
    question: 'Choose the correct voice and form of the verb:\n\n"The new curriculum framework __________ (design) by a joint committee of experienced educators."',
    options: [
      'was designed',
      'is designed',
      'designed',
      'were designed'
    ],
    correctAnswer: 0,
    hint: 'The singular framework received the action performed by the committee.',
    explanation: 'The singular subject "curriculum framework" is acted upon in the past by an agent introduced with "by". The Past Simple Passive "was designed" is correct. Option A is correct.'
  },
  {
    id: 'flen-2013-fin-q43',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Passive Voice: Past Simple Passive (was completed)',
    points: 1,
    question: 'Choose the correct voice and form of the verb:\n\n"The construction of the modern dormitory complex __________ (complete) ahead of schedule last year."',
    options: [
      'was completed',
      'is completed',
      'completed',
      'were completed'
    ],
    correctAnswer: 0,
    hint: 'The construction was completed by builders in the past.',
    explanation: 'The singular noun phrase "The construction of the modern dormitory complex" requires the Simple Past Passive "was completed". Option A is correct.'
  },
  {
    id: 'flen-2013-fin-q44',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Passive Voice: Past Simple Passive (was shipped)',
    points: 1,
    question: 'Choose the correct voice and form of the verb:\n\n"The specialized scientific apparatus __________ (ship) by air cargo from Europe last month."',
    options: [
      'was shipped',
      'is shipped',
      'shipped',
      'were shipped'
    ],
    correctAnswer: 0,
    hint: 'The singular apparatus was transported by air in the past.',
    explanation: 'The singular subject received the action of shipping in the past, requiring the Simple Past Passive: "was shipped". Option A is correct.'
  },
  {
    id: 'flen-2013-fin-q45',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Active Voice: Intransitive Past Verb (arrived)',
    points: 1,
    question: 'Choose the correct form of the verb:\n\n"The international delegation of visiting professors finally __________ (arrive) at Dire Dawa airport on Sunday morning."',
    options: [
      'arrived',
      'was arrived',
      'is arrived',
      'were arrived'
    ],
    correctAnswer: 0,
    hint: '"Arrive" is an intransitive verb and cannot be made passive.',
    explanation: '"Arrive" is an intransitive verb (it does not take a direct object) and therefore cannot form a passive construction. The active Simple Past form "arrived" is correct. Option A is correct.'
  },
  {
    id: 'flen-2013-fin-q46',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Passive Voice: Plural Past Passive (were put)',
    points: 1,
    question: 'Choose the correct voice and form of the verb:\n\n"All the imported optical microscopes __________ (put) safely into the locked storage cabinet."',
    options: [
      'were put',
      'was put',
      'are put',
      'put'
    ],
    correctAnswer: 0,
    hint: 'The plural subject "All the imported optical microscopes" takes the plural passive auxiliary.',
    explanation: 'The plural subject "microscopes" takes the plural past auxiliary "were" followed by the past participle "put": "were put". Option A is correct.'
  },
  {
    id: 'flen-2013-fin-q47',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Active Voice: Past Simple with Dummy "It" (took)',
    points: 1,
    question: 'Choose the correct form of the verb:\n\n"It __________ (take) the research technicians nearly three hours to calibrate the precision instruments."',
    options: [
      'took',
      'was taken',
      'taken',
      'takes'
    ],
    correctAnswer: 0,
    hint: 'Idiomatic expression of elapsed duration in the past: "It took (someone) (time) to do (something)".',
    explanation: 'The standard English structure for expressing time required for an activity in the past is "It took + person + time + infinitive". Option A ("took") is correct.'
  },

  // =========================================================================
  // PART EIGHT: DENOTATIVE & CONNOTATIVE MEANING (3%) - Questions 48 to 50
  // =========================================================================
  {
    id: 'flen-2013-fin-q48',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Semantics: Connotative Meaning (Brave / Strong / Hero)',
    points: 1,
    question: 'Identify the word with the positive connotation described below:\n\n"A person who risks their own safety to defend and protect their community is commonly associated with the heroic, admiring connotation of being __________."',
    options: [
      'Brave / Hero',
      'Reckless',
      'Aggressive',
      'Foolhardy'
    ],
    correctAnswer: 0,
    hint: 'Contrast positive connotations of courage with negative or reckless equivalents.',
    explanation: 'In semantics, while words like "reckless" or "foolhardy" carry negative connotations of taking unnecessary risks, "brave" and "hero" carry strongly positive, admiring connotations of noble courage. Option A is correct.'
  },
  {
    id: 'flen-2013-fin-q49',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Semantics: Symbolic Association (Christianity / Church)',
    points: 1,
    question: 'Identify the cultural and symbolic association:\n\n"The symbol of the Cross carries deeply established cultural and religious connotations associated with __________."',
    options: [
      'Christianity / Church',
      'Secular mathematics',
      'Navigation charts',
      'Commercial branding'
    ],
    correctAnswer: 0,
    hint: 'Identifies the primary religious denomination symbolically represented by the cross.',
    explanation: 'Beyond its literal denotation as two intersecting lines, the cross carries profound symbolic and spiritual connotations tied directly to Christianity and the Christian Church. Option A is correct.'
  },
  {
    id: 'flen-2013-fin-q50',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2013 Final',
    examType: 'final',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Semantics: Symbolic Association (Islam / Muslim / Mosque)',
    points: 1,
    question: 'Identify the cultural and symbolic association:\n\n"The Crescent Moon and Star symbol carries internationally recognized religious and cultural connotations representing __________."',
    options: [
      'Islam / Muslim / Mosque',
      'Astronomy clubs',
      'Nighttime weather',
      'Maritime navigation'
    ],
    correctAnswer: 0,
    hint: 'Identifies the faith and places of worship symbolized by the crescent.',
    explanation: 'The crescent moon and star symbol carries prominent cultural and religious connotations universally representing Islam, Muslim believers, and Islamic architecture/mosques. Option A is correct.'
  }
];
