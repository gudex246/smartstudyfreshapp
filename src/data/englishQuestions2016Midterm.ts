import { ExamQuestion } from '../types';

/**
 * Haramaya University - School of Foreign Languages and Journalism
 * Communicative English Language Skills I (FLEn 1011) - Midterm Examination (2016 E.C.)
 * Complete Examination with Reading Passage, Vocabulary, Tenses, Conditionals, and Modals.
 * All explanations are strictly in English only as requested.
 */

const READING_PASSAGE_FULL = `[Reading Passage: Love at First Sight]

It was love at first sight. It's always exciting to hear those words. But do people really believe in love at first sight? We asked 40 Americans this question - 18 men and 22 women. Thirteen people (32%) said they believed in love at first sight; 27 people (68%) said they didn't.

Next, we wanted to find out who believed in love at first sight and who didn't. We were surprised to find that both younger and older people believed they could fall in love in a few short seconds. We also learned that people from many different professions had love-at-first-sight experiences. These people included a scientist, an artist, a dancer, and a computer programmer.

What was the most interesting thing we learned in our study? More men than women believed in love at first sight: 44% of the men believed in this kind of love, while only 27% of the women did.

Here's what some of the men and women in our survey said about love at first sight:

• John (Artist, Age 30):
"Yes, I believe in love at first sight. It happened to me. I was at a party several years ago when I saw Luisa. I knew she was the one for me when her eyes flashed back at me. It was like they looked into my heart, read my life story, and said, 'I like what I see, and I want to be with you.' That night at the party, I went over to Luisa and asked her to dance. She said, 'Of course, I was waiting for you to ask.' That was three years ago, and we're still together."

• Mark (Salesperson, Age 35):
"I didn't use to believe in love at first sight, but now I do. About four years ago, I was giving a sales presentation when this amazing woman walked into the room. We made eye contact, and my heart started beating faster. After my presentation, I introduced myself, and she and I went out for dinner the next night. We talked and talked, and by the end of the evening, I was truly in love with her. That feeling of love at first sight was like nothing else. In just a few seconds, I was filled with intense energy and passion. Anne and I got married a year later."

• Emily (College student, Age 23):
"No, I don't believe in love at first sight. Love comes later in a relationship. When I met my boyfriend, I felt something tingly. I guess you could call it puppy love, but it wasn't true love. It took about a year for true love to develop between us."

• Carol (Writer, Age 37):
"Do I believe in love at first sight? No, not really. Love is based on trust and shared experiences and values. Love takes time to develop. You fall in love slowly by talking to a special person, writing him love letters, fighting, making up. The key to love is staying excited about the other person, month after month, year after year."

• Sarah (High school senior, Age 18):
"I don't think love at first sight happens very often, but of course it happens sometimes. It makes me happy to think that it might happen to me. If I didn't believe love at first sight was possible, it would be really depressing."`;

export const ENGLISH_2016_MIDTERM_QUESTIONS: ExamQuestion[] = [
  // =========================================================================
  // PART ONE: READING COMPREHENSION (Love at First Sight)
  // =========================================================================
  {
    id: 'flen-2016-mid-q1',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Reading Comprehension: Best Title',
    points: 1,
    question: `${READING_PASSAGE_FULL}\n\n1. The possible title for this reading passage can be ________.`,
    options: [
      'How people love each other',
      'Friendship',
      'Love at First Sight',
      'Trust between friends'
    ],
    correctAnswer: 2,
    hint: 'Look at the opening topic sentence and the central concept discussed throughout the text.',
    explanation: 'The entire text revolves around whether people believe in "Love at First Sight." It reports survey statistics on this specific question and provides testimonials from five individuals sharing their viewpoints on falling in love instantaneously. Therefore, Option C ("Love at First Sight") is the most fitting title.'
  },
  {
    id: 'flen-2016-mid-q2',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Reading Comprehension: Primary Purpose',
    points: 1,
    question: `${READING_PASSAGE_FULL}\n\n2. The primary purpose of the passage is to ________.`,
    options: [
      'explore the difference between love and friendship',
      'identify whether or not people believe in love at first sight',
      'discuss how true love develops',
      'explain how to give true love'
    ],
    correctAnswer: 1,
    hint: 'Review the research question asked to 40 Americans in the first paragraph.',
    explanation: 'The main goal of the passage is to explore and identify whether or not people believe in love at first sight. It presents survey statistics (32% yes vs 68% no, gender breakdown) followed by individual interviews illustrating both beliefs. Option B is correct.'
  },
  {
    id: 'flen-2016-mid-q3',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Reading Comprehension: Survey Statistics',
    points: 1,
    question: `${READING_PASSAGE_FULL}\n\n3. Which statement is true about the people in the study?`,
    options: [
      '32% of the men and women do not believe in love at first sight.',
      '56% of the men believe in love at first sight.',
      '27% of the women believe in love at first sight.',
      '68% of the women believe in love at first sight.'
    ],
    correctAnswer: 2,
    hint: 'Check Paragraph 3 for the exact percentage of women who reported believing in love at first sight.',
    explanation: 'Paragraph 3 explicitly states: "44% of the men believed in this kind of love, while only 27% of the women did." Therefore, option C ("27% of the women believe in love at first sight") is factually correct. Option A is false because 32% do believe (68% do not); Option B is false because 44% of men believe; Option D is false because 27% of women believe (73% do not).'
  },
  {
    id: 'flen-2016-mid-q4',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Reading Comprehension: Character Analysis (John & Mark)',
    points: 1,
    question: `${READING_PASSAGE_FULL}\n\n4. According to the passage, what did John and Mark have in common regarding love at first sight?`,
    options: [
      'Both of them fell in love instantly and ended up in long-term relationships/marriage with the women they met.',
      'Both of them were giving a sales presentation when they fell in love.',
      'Both of them did not believe in love at first sight until they reached age 40.',
      'Both of them met their partners at university graduation parties.'
    ],
    correctAnswer: 0,
    hint: 'Compare John\'s testimonial (still together after three years) and Mark\'s testimonial (married Anne a year later).',
    explanation: 'Both John and Mark experienced instant attraction that developed into committed relationships: John fell in love immediately with Luisa at a party and is still together three years later; Mark experienced intense love at first sight with Anne and married her a year later. Option A is correct.'
  },
  {
    id: 'flen-2016-mid-q5',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Reading Comprehension: Character Analysis (Carol)',
    points: 1,
    question: `${READING_PASSAGE_FULL}\n\n5. What is Carol\'s viewpoint on how genuine love develops?`,
    options: [
      'True love happens in a few seconds through instant physical chemistry.',
      'Love takes time to develop and is built on trust, shared experiences, values, and communication.',
      'Love can only be sustained if partners never have arguments or disagreements.',
      'Love is identical to puppy love and disappears after a month.'
    ],
    correctAnswer: 1,
    hint: 'Look at Carol\'s description: "Love is based on trust and shared experiences and values. Love takes time to develop."',
    explanation: 'Carol (37, Writer) states: "Love is based on trust and shared experiences and values. Love takes time to develop. You fall in love slowly by talking to a special person, writing him love letters, fighting, making up." Option B accurately summarizes her perspective.'
  },
  {
    id: 'flen-2016-mid-q6',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Reading Comprehension: Character Analysis (Emily)',
    points: 1,
    question: `${READING_PASSAGE_FULL}\n\n6. How does Emily describe the initial feeling she had when she first met her boyfriend?`,
    options: [
      'She called it "puppy love," stating that true love took about a year to develop.',
      'She described it as unconditional love at first sight.',
      'She felt completely disinterested and avoided talking to him.',
      'She believed her boyfriend was her soulmate within five seconds.'
    ],
    correctAnswer: 0,
    hint: 'Emily says: "I felt something tingly. I guess you could call it puppy love, but it wasn\'t true love."',
    explanation: 'Emily (23, College student) explains that what she felt initially was "something tingly" or "puppy love," but clarifies that "it wasn\'t true love. It took about a year for true love to develop between us." Option A is correct.'
  },
  {
    id: 'flen-2016-mid-q7',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Reading Comprehension: Character Analysis (Sarah)',
    points: 1,
    question: `${READING_PASSAGE_FULL}\n\n7. Why does Sarah (18, High school senior) maintain hope in love at first sight?`,
    options: [
      'Because she has already been married for four years.',
      'Because thinking that it might happen to her makes her happy, and disbelieving it would feel depressing.',
      'Because her science teacher proved it in a laboratory experiment.',
      'Because she conducted her own survey of 40 classmates.'
    ],
    correctAnswer: 1,
    hint: 'Sarah says: "It makes me happy to think that it might happen to me. If I didn\'t believe love at first sight was possible, it would be really depressing."',
    explanation: 'Sarah admits that while it may not happen often, holding on to the possibility that it could happen to her brings her happiness, whereas doubting its possibility would feel depressing. Option B is correct.'
  },
  {
    id: 'flen-2016-mid-q8',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Vocabulary: Context Clues (tingly)',
    points: 1,
    question: `${READING_PASSAGE_FULL}\n\n8. In Emily\'s statement, the word "tingly" ("I felt something tingly") refers to:`,
    options: [
      'a painful physical injury',
      'a slight prickling or thrilling sensation of excitement',
      'extreme coldness and shivering',
      'deep anger and frustration'
    ],
    correctAnswer: 1,
    hint: '"Tingly" describes a physical flutter or spark of nervous excitement when being near someone attractive.',
    explanation: 'In this romantic context, feeling "tingly" denotes a fluttering, pleasant, prickling sensation associated with nervous excitement or infatuation. Option B is correct.'
  },
  {
    id: 'flen-2016-mid-q9',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Vocabulary: Idiomatic Expression (puppy love)',
    points: 1,
    question: `${READING_PASSAGE_FULL}\n\n9. What does the idiom "puppy love" mean in Emily\'s statement?`,
    options: [
      'Affection shown towards domestic pets and animals',
      'Intense, youthful infatuation that is usually shallow or temporary',
      'A lifelong commitment between mature adults',
      'A scientific method for selecting a romantic partner'
    ],
    correctAnswer: 1,
    hint: '"Puppy love" refers to immature, adolescent infatuation that differs from mature long-term love.',
    explanation: '"Puppy love" is an idiom referring to adolescent or temporary romantic infatuation that feels intense but lacks the depth, maturity, and durability of genuine long-term love. Option B is correct.'
  },
  {
    id: 'flen-2016-mid-q10',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Vocabulary: Idiomatic Phrasal Verb (making up)',
    points: 1,
    question: `${READING_PASSAGE_FULL}\n\n10. In Carol\'s statement ("fighting, making up"), the phrasal verb "making up" means:`,
    options: [
      'inventing a fictional story',
      'applying cosmetic products to one\'s face',
      'reconciling and restoring friendly relations after a disagreement',
      'ending a relationship permanently'
    ],
    correctAnswer: 2,
    hint: 'What do partners do after an argument or fight to resolve their conflict?',
    explanation: 'In relationships, "to make up" means to forgive, reconcile, and resolve differences after a conflict or fight. Option C is correct.'
  },

  // =========================================================================
  // PART B: VOCABULARY IN DIALOGUE (From Table: amazing, eye contact, make up, professions, survey)
  // =========================================================================
  {
    id: 'flen-2016-mid-q11',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Vocabulary: Phrasal Verbs (make up)',
    points: 1,
    question: `Complete the dialogue with the most suitable word from the table:\n[ amazing | eye contact | make up | professions | survey ]\n\nAbdi: "I think Ayantu and Saron are not in good terms."\nBeka: "Right! They are still angry with each other, but I hope they will ________ (11) very soon."`,
    options: [
      'make up',
      'eye contact',
      'professions',
      'amazing'
    ],
    correctAnswer: 0,
    hint: 'A phrasal verb meaning to forgive each other and reconcile after an argument.',
    explanation: 'The phrasal verb "make up" means to end a dispute, forgive each other, and restore good terms after an argument. Option A is correct.'
  },
  {
    id: 'flen-2016-mid-q12',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Vocabulary: Research Methods (survey)',
    points: 1,
    question: `Complete the dialogue with the most suitable word from the table:\n[ amazing | eye contact | make up | professions | survey ]\n\nSelam: "I'm doing a (an) ________ (12). If you have time, could you have some minutes to answer my questions, please?"\nFantu: "Yes, of course. Let's do that right now."`,
    options: [
      'survey',
      'amazing',
      'professions',
      'eye contact'
    ],
    correctAnswer: 0,
    hint: 'A research activity where questions are asked to collect opinions or data.',
    explanation: 'A "survey" is a data-collection method where a set of structured questions is administered to individuals to gather information or opinions. Option A is correct.'
  },
  {
    id: 'flen-2016-mid-q13',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Vocabulary: Descriptive Adjectives (amazing)',
    points: 1,
    question: `Complete the dialogue with the most suitable word from the table:\n[ amazing | eye contact | make up | professions | survey ]\n\nAman: "I had so much fun on my first meeting with Chaltu in Harar. We had a (an) ________ (13) time!"\nBelete: "That is great! How did you get Harar?"\nAman: "It is a very peaceful city. You feel as if you are at home."`,
    options: [
      'amazing',
      'professions',
      'survey',
      'make up'
    ],
    correctAnswer: 0,
    hint: 'An adjective starting with a vowel sound meaning wonderful, delightful, or marvelous.',
    explanation: '"Amazing" is an adjective meaning causing great surprise, wonder, or pleasure ("an amazing time"). Option A is correct.'
  },
  {
    id: 'flen-2016-mid-q14',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Vocabulary: Career Fields (professions)',
    points: 1,
    question: `Complete the dialogue with the most suitable word from the table:\n[ amazing | eye contact | make up | professions | survey ]\n\nA: "Which department would you like to join next year?"\nB: "Hopefully, I will join Medicine if I score good results in all freshman courses...and you?"\nA: "I haven't decided yet, but medicine is not my cup of tea. Why do you want to join medicine?"\nB: "There are usually lots of job opportunities available in medical ________ (14), like nursing, psychiatry, and pharmacy."`,
    options: [
      'professions',
      'eye contact',
      'amazing',
      'survey'
    ],
    correctAnswer: 0,
    hint: 'A noun referring to specialized careers requiring formal higher qualifications.',
    explanation: 'A "profession" is an occupation requiring specialized training, formal education, and ethical standards (e.g., medicine, nursing, pharmacy). The plural "medical professions" fits the context. Option A is correct.'
  },
  {
    id: 'flen-2016-mid-q15',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Vocabulary: Collocations (eye contact)',
    points: 1,
    question: `Complete the dialogue with the most suitable phrase from the table:\n[ amazing | eye contact | make up | professions | survey ]\n\nMeron: "Have you talked to him?"\nEkram: "Yes, I haven't."\nMeron: "That is great! Don't make ________ (15) with him. If you do, he'll think you're interested in talking to him."`,
    options: [
      'eye contact',
      'professions',
      'make up',
      'amazing'
    ],
    correctAnswer: 0,
    hint: 'A standard English collocation meaning looking directly into another person\'s eyes.',
    explanation: '"To make eye contact" is a standard English collocation meaning looking directly into another person\'s eyes during social encounters. Option A is correct.'
  },

  // =========================================================================
  // PART TWO: GRAMMAR — SECTION A: TENSES (Questions 16 - 27)
  // Dialogue between Ahmed and Robsan (Present Perfect vs Simple Past)
  // =========================================================================
  {
    id: 'flen-2016-mid-q16',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Grammar: Present Perfect with "just"',
    points: 1,
    question: `Complete the dialogue using the appropriate form of the verb in brackets:\n\nAhmed: "Hey, Robsan! I ________ (16) (just / realize) that it's my daughters' birthday next week."`,
    options: [
      'have just realized',
      'just realized',
      'am just realizing',
      'had just realized'
    ],
    correctAnswer: 0,
    hint: 'The adverb "just" expressing an immediate past action with present news relevance requires the Present Perfect tense.',
    explanation: 'In standard British and academic English, when "just" refers to an event that happened moments ago with present relevance (new information being shared), the Present Perfect tense ("have just realized") is used. Option A is correct.'
  },
  {
    id: 'flen-2016-mid-q17',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Grammar: Present Perfect with "for ages"',
    points: 1,
    question: `Complete the dialogue using the appropriate form of the verb in brackets:\n\nRobsan: "Oh, yes 16th January. What do you think we should get them?"\nAhmed: "Well, they ________ (17) (not go) to the theatre for ages, so we could buy them tickets to a show."`,
    options: [
      'haven\'t gone',
      'didn\'t go',
      'weren\'t going',
      'hadn\'t gone'
    ],
    correctAnswer: 0,
    hint: 'The time expression "for ages" indicates a duration extending from the past up to the present moment.',
    explanation: 'The duration phrase "for ages" (meaning for a very long time up to now) requires the Present Perfect tense: "haven\'t gone" (or "haven\'t been"). Option A is correct.'
  },
  {
    id: 'flen-2016-mid-q18',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Grammar: Simple Past with "last year"',
    points: 1,
    question: `Complete the dialogue using the appropriate form of the verb in brackets:\n\nRobsan: "But we ________ (18) (get) them theatre tickets last year."`,
    options: [
      'got',
      'have got',
      'were getting',
      'had got'
    ],
    correctAnswer: 0,
    hint: 'The finished past time marker "last year" specifies a completed past period.',
    explanation: 'Definite completed past time expressions such as "last year", "yesterday", or "in 2020" require the Simple Past tense ("got"). Present perfect cannot be used with specific finished past time indicators. Option A is correct.'
  },
  {
    id: 'flen-2016-mid-q19',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Grammar: Present Perfect for Life Experience',
    points: 1,
    question: `Complete the dialogue using the appropriate form of the verb in brackets:\n\nAhmed: "You\'re right. Well, they ________ (19) (not eat) at that new hotel. We could book them a table."`,
    options: [
      'haven\'t eaten',
      'didn\'t eat',
      'weren\'t eating',
      'hadn\'t eaten'
    ],
    correctAnswer: 0,
    hint: 'Refers to life experience up to the present moment regarding a newly opened venue.',
    explanation: 'Ahmed is referring to an ongoing state of experience up to the present time—they have not yet had the experience of eating at that hotel. This requires the Present Perfect tense: "haven\'t eaten". Option A is correct.'
  },
  {
    id: 'flen-2016-mid-q20',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Grammar: Present Perfect with "since"',
    points: 1,
    question: `Complete the dialogue using the appropriate form of the verb in brackets:\n\nAhmed: "Yeah, I suppose they are quite fussy about food. Well, they ________ (20) (not have) a holiday since last summer. What about paying for them to go abroad for the weekend?"`,
    options: [
      'haven\'t had',
      'didn\'t have',
      'weren\'t having',
      'hadn\'t had'
    ],
    correctAnswer: 0,
    hint: 'The preposition "since" connects a starting point in the past to the present moment.',
    explanation: 'The time preposition "since" followed by a past point ("since last summer") indicates an unbroken period extending to the present, which requires the Present Perfect tense: "haven\'t had". Option A is correct.'
  },
  {
    id: 'flen-2016-mid-q21',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Grammar: Simple Past with "ago"',
    points: 1,
    question: `Complete the dialogue using the appropriate form of the verb in brackets:\n\nRobsan: "But they ________ (21) (go) to the garden center two weeks ago..."`,
    options: [
      'went',
      'have gone',
      'were going',
      'had gone'
    ],
    correctAnswer: 0,
    hint: 'The time adverbial "two weeks ago" specifies a finished moment in the past.',
    explanation: 'Time expressions with "ago" (e.g., "two weeks ago") specify a definite point in past time and always take the Simple Past tense ("went"). Option A is correct.'
  },
  {
    id: 'flen-2016-mid-q22',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Grammar: Parallel Simple Past Verbs',
    points: 1,
    question: `Complete the dialogue using the appropriate form of the verb in brackets:\n\nRobsan: "...they went to the garden center two weeks ago and ________ (22) (buy) lots of plants."`,
    options: [
      'bought',
      'have bought',
      'were buying',
      'had bought'
    ],
    correctAnswer: 0,
    hint: 'The coordinating conjunction "and" links two parallel past actions that occurred two weeks ago.',
    explanation: 'The verb "buy" is coordinated with "went" under the same time frame ("two weeks ago"). Parallelism requires the Simple Past tense ("bought"). Option A is correct.'
  },
  {
    id: 'flen-2016-mid-q23',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Grammar: Present Perfect for Duration (for years)',
    points: 1,
    question: `Complete the dialogue using the appropriate form of the verb in brackets:\n\nAhmed: "They ________ (23) (have) their tennis rackets for years."`,
    options: [
      'have had',
      'had',
      'are having',
      'were having'
    ],
    correctAnswer: 0,
    hint: 'The phrase "for years" indicates continuous possession from the past continuing into the present.',
    explanation: 'Possession that began years ago and continues into the present is expressed with the Present Perfect tense of the verb have: "have had". Option A is correct.'
  },
  {
    id: 'flen-2016-mid-q24',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Grammar: Simple Past for Specific Past Occurrence',
    points: 1,
    question: `Complete the dialogue using the appropriate form of the verb in brackets:\n\nAhmed: "I ________ (24) (hear) one of them complaining about it when they came back from their game last week."`,
    options: [
      'heard',
      'have heard',
      'was hearing',
      'had heard'
    ],
    correctAnswer: 0,
    hint: 'The hearing took place at a specific completed past moment ("last week").',
    explanation: 'The event occurred at a definite point in past time ("when they came back... last week"). Specific past actions require the Simple Past tense ("heard"). Option A is correct.'
  },
  {
    id: 'flen-2016-mid-q25',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Grammar: Simple Past in Time Clauses (when... last week)',
    points: 1,
    question: `Complete the dialogue using the appropriate form of the verb in brackets:\n\nAhmed: "...when they ________ (25) (come) back from their game last week. What about new rackets, then?"`,
    options: [
      'came',
      'have come',
      'were coming',
      'had come'
    ],
    correctAnswer: 0,
    hint: 'The past time clause is anchored by "last week".',
    explanation: 'A subordinate time clause introduced by "when" that references a finished past event ("last week") takes the Simple Past tense ("came"). Option A is correct.'
  },
  {
    id: 'flen-2016-mid-q26',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Grammar: Simple Past with "yesterday"',
    points: 1,
    question: `Complete the dialogue using the appropriate form of the verb in brackets:\n\nAhmed: "Well, Mum said yesterday that she ________ (26) (be) bored with listening to the same music all the time."`,
    options: [
      'was',
      'has been',
      'is',
      'had been'
    ],
    correctAnswer: 0,
    hint: 'Reported speech anchored to a specific past statement made "yesterday".',
    explanation: 'The main verb "said" is in the Simple Past, anchored by "yesterday". Sequence of tenses in reported speech requires the past tense form of be: "was". Option A is correct.'
  },
  {
    id: 'flen-2016-mid-q27',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Grammar: Present Perfect with "for ages"',
    points: 1,
    question: `Complete the dialogue using the appropriate form of the verb in brackets:\n\nAhmed: "She ________ (27) (not buy) any new CDs for ages. We could download as many new music as possible soon."`,
    options: [
      'hasn\'t bought',
      'didn\'t buy',
      'wasn\'t buying',
      'hadn\'t bought'
    ],
    correctAnswer: 0,
    hint: 'The phrase "for ages" indicates a negative state continuing up to the present moment.',
    explanation: 'The duration phrase "for ages" referring to a situation that has continued until now requires the Present Perfect tense: "hasn\'t bought" (or "has not bought"). Option A is correct.'
  },

  // =========================================================================
  // PART TWO: GRAMMAR — SECTION B: CONDITIONALS (Questions 28 - 32)
  // =========================================================================
  {
    id: 'flen-2016-mid-q28',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Grammar: Inverted Third Conditional (had I studied...)',
    points: 1,
    question: `Complete the dialogue with the correct conditional verb form:\n\nRemedan: "How did you get the entrance exam?"\nAwol: "It was somehow good. I got pass mark. I would be able to join software engineering now on condition that I had studied harder last year. What about you?"\nRoba: "For me, ..... very tricky, but had I studied hard it ________ (28) (not be) much difficult. Thanks to Yafet. He helped me a lot."`,
    options: [
      'would not have been',
      'would not be',
      'will not be',
      'had not been'
    ],
    correctAnswer: 0,
    hint: '"Had I studied hard" is an inverted Third Conditional clause (= If I had studied hard). What is the matching past hypothetical result clause?',
    explanation: '"Had I studied hard" is an inverted Third Conditional clause expressing an unreal past hypothesis (= "If I had studied hard"). The main clause result for an unreal past situation requires "would (not) have + past participle": "would not have been". Option A is correct.'
  },
  {
    id: 'flen-2016-mid-q29',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Grammar: Mixed Conditional (Past condition with present result)',
    points: 1,
    question: `Complete the dialogue with the correct conditional verb form:\n\nA: "I heard that Samrawit is still living with her family."\nB: "I think so! I don't think that she will leave her family soon."\nA: "Why for? She is 25 years old!"\nB: "Don't you know that she is not working though graduated two year ago. She ________ (29) (not be) still living with her family now, at this age, if she had been employed. You know that there are fewer job opportunities in this country!"`,
    options: [
      'would not be',
      'would not have been',
      'will not be',
      'is not'
    ],
    correctAnswer: 0,
    hint: 'Notice the time word "now" in the main clause: an unreal past condition ("if she had been employed") yielding a PRESENT hypothetical result.',
    explanation: 'This is a classic Mixed Conditional (Type 3 condition + Type 2 result). The condition is set in the past ("if she had been employed"), but the consequence describes her present unreal state ("now, at this age"): "She would not be still living with her family now". Option A is correct.'
  },
  {
    id: 'flen-2016-mid-q30',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Grammar: First Conditional (Real possibility in future)',
    points: 1,
    question: `Complete the dialogue with the correct conditional verb form:\n\nSolomon: "What time does the exam start?"\nKibrom: "It starts at 9:00am. Hurry up! We don't have much time; if we ________ (30) (not take) taxi we won't arrive on time."\nSolomon: "Exactly! We had better do that."`,
    options: [
      'don\'t take',
      'won\'t take',
      'didn\'t take',
      'hadn\'t taken'
    ],
    correctAnswer: 0,
    hint: 'In a First Conditional clause ("if + Present Simple, will/won\'t + bare verb"), the if-clause takes the Simple Present tense.',
    explanation: 'This is a First Conditional sentence expressing a real future possibility. The main clause uses "won\'t arrive" (will not arrive), which requires the if-clause to be in the Simple Present tense: "if we don\'t take a taxi". Option A is correct.'
  },
  {
    id: 'flen-2016-mid-q31',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Grammar: Conditional with "unless" + Present Simple',
    points: 1,
    question: `Complete the dialogue with the correct conditional verb form:\n\nAbel: "Selam and Betel are not talking to each other in the classroom. What happened to them?"\nBeletu: "I don\'t know. Do you have any information, Tirsit?"\nTirsit: "Yes of course. Selam completed her scholarship process without informing Betel last month."\nBeletu: "I think Betel wouldn\'t ignore her now provided that Selam had told her about the scholarship."\nAbel: "I have never though that Betel is such a lying girl!"\nTirsit: "Selam is not going to speak to her at all unless Betel ________ (31) (beg) her kneeling on her knees down; she did really.......!"\nBeletu: "She deserves!"`,
    options: [
      'begs',
      'will beg',
      'begged',
      'has begged'
    ],
    correctAnswer: 0,
    hint: 'A conditional clause introduced by "unless" refers to a future contingency and takes the Simple Present with third-person singular -s.',
    explanation: '"Unless" functions like "if not" in conditional time clauses. When the main clause expresses a future intention ("Selam is not going to speak to her"), the unless-clause takes the Simple Present tense. For third-person singular "Betel", the verb is "begs". Option A is correct.'
  },
  {
    id: 'flen-2016-mid-q32',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Grammar: Second Conditional Subjunctive (If I were you)',
    points: 1,
    question: `Complete the dialogue with the correct conditional verb form:\n\nTsion: "How often do you visit your family, Rahel?"\nRahel: "I don\'t regularly visit my families for I hardly have days off on weekends....and you?"\nTsion: "I do frequently visit them whenever I have day off."\nRahel: "You are lucky! I would always visit them if I ________ (32) (be) you."`,
    options: [
      'were',
      'was',
      'am',
      'would be'
    ],
    correctAnswer: 0,
    hint: 'In hypothetical Second Conditional statements giving advice or imagining oneself as another person, the past subjunctive "were" is the standard form.',
    explanation: 'In the Second Conditional, when imagining an unreal hypothetical identity or giving advice, the subjunctive form "were" is standard for all grammatical persons ("if I were you, I would..."). Option A is correct.'
  },

  // =========================================================================
  // PART TWO: GRAMMAR — SECTION C: MODAL AUXILIARY VERBS (Questions 33 - 37)
  // Box: [ had better not | should have | should | ought not | had better |
  //        ought to not have | shouldn't have | Ought | had better to ]
  // =========================================================================
  {
    id: 'flen-2016-mid-q33',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Grammar: Semi-modal "Ought" + to infinitive',
    points: 1,
    question: `Fill in the blank with the most appropriate modal verb from the box:\n[ had better not | should have | should | ought not | had better | ought to not have | shouldn't have | Ought | had better to ]\n\nAlmaz: "I heard you are planning to go to Dire Dawa next weekend. Is that true?"\nHayat: "Yeah, I ________ (33) to visit my aunt. She\'s a bit sick."`,
    options: [
      'Ought',
      'should',
      'had better',
      'had better to'
    ],
    correctAnswer: 0,
    hint: 'Notice the full infinitive particle "to" immediately following the blank space ("to visit").',
    explanation: 'Among standard modals, "should" and "had better" take a bare infinitive without "to". Only the semi-modal "ought" combines with "to + base verb" ("ought to visit"). In the provided word box, "Ought" is the correct entry. Option A is correct.'
  },
  {
    id: 'flen-2016-mid-q34',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Grammar: Asking for Advice with "should"',
    points: 1,
    question: `Fill in the blank with the most appropriate modal verb from the box:\n[ had better not | should have | should | ought not | had better | ought to not have | shouldn't have | Ought | had better to ]\n\nAlmaz: "It was yesterday."\nHayat: "What!? I wish I had remembered it. What ________ (34) I do, Alme?"`,
    options: [
      'should',
      'had better',
      'Ought',
      'had better to'
    ],
    correctAnswer: 0,
    hint: 'The standard modal auxiliary used in question inversion when asking someone for advice.',
    explanation: 'When asking someone for advice or guidance in a dilemma, standard English uses "What should I do?". "Had better" and "Ought" are not used in this standard question inversion pattern. Option A is correct.'
  },
  {
    id: 'flen-2016-mid-q35',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Grammar: Urgent Negative Warning with "had better not"',
    points: 1,
    question: `Fill in the blank with the most appropriate modal verb from the box:\n[ had better not | should have | should | ought not | had better | ought to not have | shouldn't have | Ought | had better to ]\n\nAlmaz: "I suggest you submit the report now if you have already organized it. You ________ (35) delay it any longer. The instructor may have zero tolerance after some time."`,
    options: [
      'had better not',
      'ought not',
      'shouldn\'t have',
      'had better to'
    ],
    correctAnswer: 0,
    hint: 'An urgent warning against an action carrying negative consequences ("the instructor may have zero tolerance").',
    explanation: '"Had better not + bare infinitive" expresses an urgent warning that failure to act promptly will lead to trouble or negative consequences ("the instructor may have zero tolerance"). Note that "ought not" requires "to" ("ought not to delay"). Therefore, "had better not" is the only correct choice. Option A is correct.'
  },
  {
    id: 'flen-2016-mid-q36',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Grammar: Urgent Immediate Recommendation with "had better"',
    points: 1,
    question: `Fill in the blank with the most appropriate modal verb from the box:\n[ had better not | should have | should | ought not | had better | ought to not have | shouldn't have | Ought | had better to ]\n\nChaltu: "Alme, Misha has just fainted!"\nAlmaz: "What! We ________ (36) take her to the hospital right now; something worse may happen to her. Is there anyone else who can help us?"`,
    options: [
      'had better',
      'had better to',
      'should have',
      'Ought'
    ],
    correctAnswer: 0,
    hint: 'Expresses an urgent, high-stakes recommendation in an emergency situation.',
    explanation: 'In an emergency where immediate action is required to avoid worsening harm ("something worse may happen to her"), "had better + bare infinitive" ("we had better take her") is the most appropriate modal. Note that "had better to" is ungrammatical. Option A is correct.'
  },
  {
    id: 'flen-2016-mid-q37',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Grammar: Past Criticized Obligation with "should have + past participle"',
    points: 1,
    question: `Fill in the blank with the most appropriate modal verb from the box:\n[ had better not | should have | should | ought not | had better | ought to not have | shouldn't have | Ought | had better to ]\n\nChaltu: "No, there isn't!"\nAlmaz: "You ________ (37) called at least Goytom and Lapiso!"\nChaltu: "I hadn't any time, Alme! No worries, we can ask those guys for help."`,
    options: [
      'should have',
      'shouldn\'t have',
      'had better',
      'ought to not have'
    ],
    correctAnswer: 0,
    hint: 'Notice the past participle "called". This modal structure expresses criticism of a sensible action that was NOT performed in the past.',
    explanation: '"Should have + past participle" is used to express regret or criticism concerning a desirable action that was neglected in the past ("you should have called them"). "Shouldn\'t have" would mean she did call them and that it was a mistake, which contradicts Chaltu\'s response. Option A is correct.'
  }
];
