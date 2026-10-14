import { ExamQuestion } from '../types';

/**
 * Haramaya University - School of Foreign Languages and Journalism
 * Communicative English Language Skills I (FLEn 1011) - Midterm Exam (2014 E.C. / July 11, 2022)
 * All 31 Questions with Official Verified Answers and Comprehensive Academic Explanations (English Only).
 */
export const READING_PASSAGE_2014 = `[Reading Passage: CDN MALLS NEWSLETTER - Company Values]

Paragraph 1:
Every company has an organizational culture and a set of values that guides its mission and workplace conduct. Employers generally introduce these values to new employees during orientation. Orientation is usually the first stage of the onboarding process for a new employee. People do not always realize how important these values are. Let us take a quick look to see how important they can be.

Paragraph 2:
First, a company's values are important before you even start working there. When you apply for a job, interviewers look at more than the interviewee's education and hard skills. They also use these values to see if the interviewee is a good fit for the company. Before an interview, many people look at the company's website to see if they can find information that shows the values of the company. They do this so they can be better prepared for the interview.

Paragraph 3:
Second, company values are important when employers make decisions to retain employees. They expect employees to conform to the company's culture and adopt its values. For example, one of the core values of CDN Malls is "Empower people to do their best." This means all the people who work for CDN Malls must help each other improve. Successful employees use company values to set goals for developing their soft skills. They know that many companies promote from within and having these skills helps in getting a higher position in the company.

Paragraph 4:
Furthermore, workers can observe how successful colleagues meet company values in order to identify gaps in their own performance and set improvement goals for their career development.

Paragraph 5:
Finally, the core values of a company are also important to people outside the company. These values can attract potential employees, clients, and customers. From a company's values, they can see how the company makes decisions and treats people. In short, a company's values give a clear picture of the company's culture, what the company is about, and what is important to it.`;

export const ENGLISH_2014_MIDTERM_QUESTIONS: ExamQuestion[] = [
  // =========================================================================
  // PART I: READING COMPREHENSION (CDN Malls Newsletter - Company Values)
  // =========================================================================
  {
    id: 'flen-2014-mid-q1',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2014 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Reading Comprehension: Main Idea',
    points: 1,
    question: `${READING_PASSAGE_2014}\n\n1. The text is about:`,
    options: [
      'one company\'s organizational culture and values',
      'organizational culture and values in general',
      'the importance of understanding a company\'s values',
      'how to draft a retail business mission statement'
    ],
    correctAnswer: 2,
    hint: 'Look at the thesis statement at the end of Paragraph 1: "People do not always realize how important these values are. Let us take a quick look to see how important they can be."',
    explanation: 'The passage focuses on explaining why recognizing and understanding a company\'s mission and core values matters for job applicants, employees, and external clients ("People do not always realize how important these values are. Let us take a quick look to see how important they can be"). While CDN Malls is used as an introductory example, the central theme is the importance of understanding company values. Therefore, option C is the correct answer.'
  },
  {
    id: 'flen-2014-mid-q2',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2014 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Reading Comprehension: Purpose of Mission & Values',
    points: 1,
    question: `${READING_PASSAGE_2014}\n\n2. Why is it important for a company to have a mission statement and a list of values?`,
    options: [
      'They give a clear picture of the company to current and potential employees, clients, and customers.',
      'They inform the general public about how important the company is.',
      'They help current employees understand what hard skills are important to the company.',
      'They guarantee that every worker will immediately receive a promotion.'
    ],
    correctAnswer: 0,
    hint: 'Review the final paragraph (Paragraph 5) discussing what values communicate to people inside and outside the company.',
    explanation: 'Paragraph 5 states: "The core values of a company are also important to people outside the company. These values can attract potential employees, clients, and customers... In short, a company\'s values give a clear picture of the company\'s culture, what the company is about, and what is important to it." Therefore, option A is the correct answer.'
  },
  {
    id: 'flen-2014-mid-q3',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2014 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Reading Comprehension: Onboarding Process',
    points: 1,
    question: `${READING_PASSAGE_2014}\n\n3. When are the company's values usually introduced to employees?`,
    options: [
      'During the formal retirement exit interview',
      'During orientation, which is usually the first stage of the onboarding process',
      'Only after an employee finishes five consecutive years on the job',
      'When an employee receives a formal disciplinary warning'
    ],
    correctAnswer: 1,
    hint: 'Check the fourth and fifth sentences of Paragraph 1.',
    explanation: 'Paragraph 1 explicitly notes: "Employers generally introduce these values to new employees during orientation. Orientation is usually the first stage of the onboarding process for a new employee." Hence, option B is correct.'
  },
  {
    id: 'flen-2014-mid-q4',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2014 Midterm',
    examType: 'midterm',
    questionType: 'true_false',
    difficulty: 'easy',
    topic: 'Reading Comprehension: Orientation vs Onboarding',
    points: 1,
    question: `${READING_PASSAGE_2014}\n\n4. "Onboarding is another name for orientation."`,
    options: ['True', 'False'],
    correctAnswer: 1,
    hint: 'Notice whether orientation is identical to onboarding or just one stage of the overall onboarding process.',
    explanation: 'Paragraph 1 explains: "Orientation is usually the first stage of the onboarding process for a new employee." This clarifies that orientation is only one preliminary stage of the broader onboarding procedure, not an identical synonym for onboarding. Therefore, the statement is False (Option B).'
  },
  {
    id: 'flen-2014-mid-q5',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2014 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Reading Comprehension: Hiring Process',
    points: 1,
    question: `${READING_PASSAGE_2014}\n\n5. Paragraph 2 talks about how a company's values are:`,
    options: [
      'used before employees start working in the company (during hiring and interview preparation)',
      'used after employees start working in the company',
      'used while employees are working in the company',
      'disregarded by human resource interviewers'
    ],
    correctAnswer: 0,
    hint: 'Paragraph 2 focuses on job interviews and candidate screening.',
    explanation: 'Paragraph 2 details how values influence the recruitment and hiring stage: interviewers check if candidates fit company values, and applicants research values on the website before the interview. This all takes place before employees start working in the company. Option A is correct.'
  },
  {
    id: 'flen-2014-mid-q6',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2014 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Reading Comprehension: Interpreting Value Statements',
    points: 1,
    question: `${READING_PASSAGE_2014}\n\n6. One of the core values of CDN Malls is "Empower people to do their best." This means:`,
    options: [
      'all the people who work for CDN Malls must help each other improve',
      'all the people who work for CDN Malls must be better than others',
      'all the people who work for CDN Malls must be powerful',
      'employees should work in isolation without assistance'
    ],
    correctAnswer: 0,
    hint: 'To empower means giving support, encouragement, and autonomy so that colleagues help each other grow.',
    explanation: '"Empower people to do their best" means creating a supportive and collaborative environment where workers assist and inspire one another to perform at their highest capacity. It does not mean competing aggressively against colleagues (b) or exerting authority/power (c). Option A is correct.'
  },
  {
    id: 'flen-2014-mid-q7',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2014 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Reading Comprehension: Practical Application of Values',
    points: 1,
    question: `${READING_PASSAGE_2014}\n\n7. If I know what the company's values are, I can know:`,
    options: [
      'what soft skills I need to work on to make myself a more successful employee',
      'what to focus on when I observe how successful employees act at work',
      'both a and b',
      'neither a nor b'
    ],
    correctAnswer: 2,
    hint: 'Examine Paragraphs 3 and 4 regarding setting goals for soft skills and observing role-model employees.',
    explanation: 'Paragraph 3 notes that successful employees use company values to set goals for developing their soft skills (statement a). Paragraph 4 explains that workers can observe how successful colleagues meet company values to identify gaps and set improvement goals (statement b). Because both statements are true, option C ("both a and b") is correct.'
  },

  // =========================================================================
  // VOCABULARY I: GUESSING MEANING FROM CONTEXT
  // =========================================================================
  {
    id: 'flen-2014-mid-q8',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2014 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Vocabulary: Context Clues (stage)',
    points: 1,
    question: `${READING_PASSAGE_2014}\n\n8. Guess the meaning of the word "stage" as used in Paragraph 1 ("Orientation is usually the first stage of the onboarding process..."):`,
    options: [
      'a place where plays and dramas are performed',
      'theatre',
      'a step or part in a process',
      'a raised platform for public speakers'
    ],
    correctAnswer: 2,
    hint: 'In a procedural onboarding sequence, "stage" refers to a distinct period or step.',
    explanation: 'In the context of an onboarding procedure, "stage" signifies a distinct phase, step, or part of a continuous process. Options A, B, and D refer to theatrical performance stages. Option C is correct.'
  },
  {
    id: 'flen-2014-mid-q9',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2014 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Vocabulary: Context Clues (retain)',
    points: 1,
    question: `${READING_PASSAGE_2014}\n\n9. Guess the meaning of the word "retain" as used in Paragraph 3 ("when employers make decisions to retain employees..."):`,
    options: [
      'keep',
      'remove',
      'remember',
      'dismiss'
    ],
    correctAnswer: 0,
    hint: 'Retaining employees means holding onto them and keeping them employed rather than losing them.',
    explanation: 'In employment and business contexts, to "retain" workers means to keep, maintain, or preserve their employment rather than discharging them or having them resign. Option A is correct.'
  },
  {
    id: 'flen-2014-mid-q10',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2014 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Vocabulary: Context Clues (promote)',
    points: 1,
    question: `${READING_PASSAGE_2014}\n\n10. Guess the meaning of the word "promote" as used in Paragraph 3 ("many companies promote from within... getting a higher position in the company"):`,
    options: [
      'go through something',
      'cross',
      'move someone to a higher position or rank',
      'advertise merchandise to buyers'
    ],
    correctAnswer: 2,
    hint: 'The text links promotion directly with advancing to a higher job position.',
    explanation: 'In human resources, to "promote" an employee means to elevate or advance them to a higher professional rank, position, or grade. Option C is correct.'
  },

  // =========================================================================
  // VOCABULARY II: SENTENCE COMPLETION FROM WORD BANK
  // =========================================================================
  {
    id: 'flen-2014-mid-q11',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2014 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Vocabulary: Sentence Completion (demonstrate)',
    points: 1,
    question: 'Complete the sentence with the most suitable word from the box:\n\n"His job is to ________ to the customers how the equipment is used."',
    options: [
      'demonstrate',
      'identify',
      'influence',
      'potential'
    ],
    correctAnswer: 0,
    hint: 'This verb means to show or explain by practical operation how equipment operates.',
    explanation: '"Demonstrate" means to clearly show, display, or explain by practical example how something operates. Option A fits both grammatically and semantically.'
  },
  {
    id: 'flen-2014-mid-q12',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2014 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Vocabulary: Workplace Idiom (a good fit)',
    points: 1,
    question: 'Complete the sentence with the most suitable phrase from the box:\n\n"She was not hired because they thought she was not ________."',
    options: [
      'a good fit',
      'hard skills',
      'core values',
      'soft skills'
    ],
    correctAnswer: 0,
    hint: 'This idiomatic phrase describes a person whose personality and working style suit a team or organization.',
    explanation: 'In hiring and recruitment, being "a good fit" means that an applicant\'s personality, communication style, and values match the organization\'s work culture. Option A is correct.'
  },
  {
    id: 'flen-2014-mid-q13',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2014 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Vocabulary: Sentence Completion (potential)',
    points: 1,
    question: 'Complete the sentence with the most suitable word from the box:\n\n"He was worried about the ________ side effects of the drug."',
    options: [
      'potential',
      'hard skills',
      'demonstrate',
      'influence'
    ],
    correctAnswer: 0,
    hint: 'An adjective modifying "side effects" to mean possible or prospective.',
    explanation: '"Potential" functions as an adjective meaning possible, prospective, or capable of coming into existence in the future ("potential side effects"). Option A is correct.'
  },
  {
    id: 'flen-2014-mid-q14',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2014 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Vocabulary: Hard Skills vs Soft Skills',
    points: 1,
    question: 'Complete the sentence with the most suitable term from the box:\n\n"Typing and using the computer are examples of ________."',
    options: [
      'hard skills',
      'soft skills',
      'core values',
      'potential traits'
    ],
    correctAnswer: 0,
    hint: 'Teachable, technical, and quantifiable abilities (like typing and software operation) are classified under this category.',
    explanation: '"Hard skills" are technical, quantifiable knowledge and abilities gained through formal training (such as typing, computer proficiency, data entry, and language translation). In contrast, "soft skills" relate to interpersonal attributes such as teamwork, leadership, and emotional intelligence. Option A is correct.'
  },
  {
    id: 'flen-2014-mid-q15',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2014 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Vocabulary: Sentence Completion (influence)',
    points: 1,
    question: 'Complete the sentence with the most suitable verb from the box:\n\n"His friends tried to ________ him, but he did not listen to them."',
    options: [
      'influence',
      'demonstrate',
      'identify',
      'retain'
    ],
    correctAnswer: 0,
    hint: 'A transitive verb meaning to affect or sway someone\'s actions or decisions.',
    explanation: '"Influence" means to have an effect on someone\'s character, thinking, or behavior. Option A is the correct verb.'
  },

  // =========================================================================
  // REFERENCE QUESTIONS: PRONOUNS & REFERRING EXPRESSIONS
  // =========================================================================
  {
    id: 'flen-2014-mid-q16',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2014 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Reference Questions: Pronoun Reference (They)',
    points: 1,
    question: `${READING_PASSAGE_2014}\n\n16. In Paragraph 2, what does the pronoun "They" refer to in the sentence:\n"Interviewers look at more than the interviewee's education and hard skills. They also use these values to see if the interviewee is a good fit for the company."?`,
    options: [
      'Interviewers',
      'Interviewees',
      'Hard skills',
      'Values'
    ],
    correctAnswer: 0,
    hint: 'Look at the grammatical subject of the preceding sentence.',
    explanation: 'The pronoun "They" refers back to the plural noun antecedent "Interviewers" introduced in the immediately preceding sentence as the individuals who conduct candidate evaluations. Option A is correct.'
  },
  {
    id: 'flen-2014-mid-q17',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2014 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Reference Questions: Demonstrative Reference (this)',
    points: 1,
    question: `${READING_PASSAGE_2014}\n\n17. In Paragraph 2, what does the demonstrative word "this" refer to in the sentence:\n"...many people look at the company's website to see if they can find information that shows the values of the company. They do this so they can be better prepared for the interview."?`,
    options: [
      'Looking at the company\'s website to find information showing its values',
      'Applying for multiple job vacancies simultaneously',
      'Asking the interviewer for salary increments',
      'Skipping the onboarding orientation'
    ],
    correctAnswer: 0,
    hint: 'The demonstrative pronoun "this" replaces the preparatory action described right before it.',
    explanation: 'The demonstrative pronoun "this" substitutes for the whole action clause in the previous sentence: "look at the company\'s website to see if they can find information that shows the values of the company." Option A is correct.'
  },
  {
    id: 'flen-2014-mid-q18',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2014 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Reference Questions: Possessive Reference (its)',
    points: 1,
    question: `${READING_PASSAGE_2014}\n\n18. In Paragraph 3, what does the possessive determiner "its" refer to in the sentence:\n"They expect employees to conform to the company's culture and adopt its values."?`,
    options: [
      'The company\'s',
      'The employee\'s',
      'The supervisor\'s',
      'The interviewee\'s'
    ],
    correctAnswer: 0,
    hint: 'Whose culture and values are employees expected to adopt?',
    explanation: 'The possessive pronoun "its" refers to the singular noun antecedent "the company" (i.e., the company\'s values). Option A is correct.'
  },
  {
    id: 'flen-2014-mid-q19',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2014 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Reference Questions: Idiomatic Expression (from within)',
    points: 1,
    question: `${READING_PASSAGE_2014}\n\n19. In Paragraph 3, what does the expression "from within" refer to in the sentence:\n"They know that many companies promote from within."?`,
    options: [
      'From its current employees / internal staff already working inside the company',
      'From external recruitment agencies',
      'From competitor organizations',
      'From international consulting firms'
    ],
    correctAnswer: 0,
    hint: 'Promoting "from within" means appointing internal workers rather than hiring outside candidates.',
    explanation: 'In workplace English, "promote from within" is an idiom meaning elevating existing employees already on the payroll to higher managerial ranks rather than hiring outside newcomers. Option A is correct.'
  },
  {
    id: 'flen-2014-mid-q20',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2014 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Reference Questions: Pronoun Reference (they)',
    points: 1,
    question: `${READING_PASSAGE_2014}\n\n20. In Paragraph 5, what does the pronoun "they" refer to in the sentence:\n"These values can attract potential employees, clients, and customers. From a company's values, they can see how the company makes decisions."?`,
    options: [
      'Potential employees, clients, and customers (people outside the company)',
      'The board of directors',
      'Competitors in the mall business',
      'Government regulatory officers'
    ],
    correctAnswer: 0,
    hint: 'Identify the external groups listed in the immediately preceding sentence.',
    explanation: 'The pronoun "they" refers directly back to the compound antecedent "potential employees, clients, and customers" (external stakeholders who assess the company from the outside). Option A is correct.'
  },

  // =========================================================================
  // PART II. GRAMMAR IN USE: MODALS IN DIALOGUE (Q21 - Q25)
  // =========================================================================
  {
    id: 'flen-2014-mid-q21',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2014 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Grammar: Embedded / Indirect Question Word Order',
    points: 1,
    question: 'Complete the dialogue with the correct alternative:\n\nHana: "I just got my grade report back and my GPA is low."\nSami: "I\'m sorry to hear that. But it\'s only the first semester. You still have some time to do something about it."\nHana: "What do you think ________ (21) do about it?"',
    options: [
      'I should',
      'should I',
      'I had better',
      'ought I'
    ],
    correctAnswer: 0,
    hint: 'An indirect question clause embedded after "What do you think..." follows statement word order: Subject + Modal.',
    explanation: 'When asking for advice inside an embedded clause introduced by "What do you think...", English grammar requires normal affirmative sentence word order (Subject + Modal: "I should"), rather than inverted question order ("should I"). Hence, "What do you think I should do about it?" is correct. Option A is correct.'
  },
  {
    id: 'flen-2014-mid-q22',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2014 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Grammar: Negative Modals of Advice',
    points: 1,
    question: 'Complete the dialogue with the correct negative modal:\n\nSami: "Then, I suggest you start to be determined to reform and attend your classes regularly. You ________ (22) miss any of your classes unless you\'ve a compelling reason."',
    options: [
      'should not',
      'ought to not',
      'had not better',
      'must not to'
    ],
    correctAnswer: 0,
    hint: '"ought to not" and "had not better" are ungrammatical in standard English.',
    explanation: 'The standard negative modal for strong advice is "should not". The correct negative form of ought is "ought not to" (not "ought to not"), and the correct negative of had better is "had better not" (not "had not better"). Therefore, "should not" is the only grammatically correct option. Option A is correct.'
  },
  {
    id: 'flen-2014-mid-q23',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2014 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Grammar: Modals followed by Full Infinitive (to + verb)',
    points: 1,
    question: 'Complete the dialogue with the correct modal:\n\nSami: "Also, you ________ (23) to take better care of your health. Eat healthy food, take vitamins and do physical exercises to boost your immune system."',
    options: [
      'ought',
      'should',
      'had better',
      'must'
    ],
    correctAnswer: 0,
    hint: 'Notice the prepositional particle "to" right after the blank space ("to take").',
    explanation: 'Modal auxiliaries like "should", "had better", and "must" are followed directly by a bare infinitive without "to" ("should take", "had better take", "must take"). Only the semi-modal "ought" takes the full infinitive with "to": "ought to take". Option A is correct.'
  },
  {
    id: 'flen-2014-mid-q24',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2014 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Grammar: Interrogative Modals of Advice',
    points: 1,
    question: 'Complete the dialogue with the correct question form:\n\nHana: "Recently, I\'ve been working out three to four hours each day. ________ (24) exercise more?"',
    options: [
      'Should I',
      'Ought to I',
      'Had I better',
      'Am I should'
    ],
    correctAnswer: 0,
    hint: 'This is the standard grammatical question pattern used when asking someone for advice.',
    explanation: 'When asking for advice in standard English, "Should I + bare infinitive?" is the standard question structure. Inversions such as "Ought to I" or "Had I better" are non-standard or ungrammatical in modern English. Option A is correct.'
  },
  {
    id: 'flen-2014-mid-q25',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2014 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Grammar: Had Better for Warnings & Negative Consequences',
    points: 1,
    question: 'Complete the dialogue with the most appropriate modal:\n\nSami: "Actually, you need to lessen it. You seem to have already been overdoing it. So you ________ (25) work out less, maybe just 3 to 4 times a week, or you will injure yourself."',
    options: [
      'had better',
      'should',
      'ought to',
      'might'
    ],
    correctAnswer: 0,
    hint: 'This modal expresses an urgent warning accompanied by an explicit negative consequence ("or you will injure yourself").',
    explanation: '"Had better" is used for urgent advice where failure to comply leads directly to a negative outcome or danger ("or you will injure yourself"). Moreover, "ought to" is ruled out because there is no infinitive "to" before the bare verb "work out". Therefore, "had better" is the most accurate choice. Option A is correct.'
  },

  // =========================================================================
  // PART II. GRAMMAR IN USE: TENSE & VERB FORMS (Q26 - Q31)
  // =========================================================================
  {
    id: 'flen-2014-mid-q26',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2014 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Grammar: Present Perfect for Continuing Duration (How long...)',
    points: 1,
    question: 'Fill in the blank with the appropriate form of the verb "be":\n\nRamadan: "Addise, may I ask you a question? How long ________ (26) (be) unemployed?"',
    options: [
      'have you been',
      'were you',
      'are you',
      'had you been'
    ],
    correctAnswer: 0,
    hint: 'Questions introduced by "How long" inquiring about an ongoing state starting in the past and continuing up to the present require the Present Perfect tense.',
    explanation: 'The inquiry "How long..." asks about the duration of an ongoing state that began in the past and continues into the present moment. In English grammar, this requires the Present Perfect tense ("have you been"), which is confirmed by the reply "Since February, 2018". Option A is correct.'
  },
  {
    id: 'flen-2014-mid-q27',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2014 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Grammar: Simple Past with Definite Past Time Adverbial',
    points: 1,
    question: 'Fill in the blank with the appropriate form of the verb "apply":\n\nAddise: "Since February, 2018. But I ________ (27) (apply) for a teaching position at Haramaya High School last week."',
    options: [
      'applied',
      'have applied',
      'was applying',
      'had applied'
    ],
    correctAnswer: 0,
    hint: 'The time adverbial "last week" specifies a completed, definite past period.',
    explanation: 'Definite completed past time markers such as "last week", "yesterday", or "in 2015" demand the Simple Past tense ("applied"). Using the Present Perfect ("have applied") with a definite past time adverbial is grammatically incorrect in standard English. Option A is correct.'
  },
  {
    id: 'flen-2014-mid-q28',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2014 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Grammar: Simple Past with Definite Past Calendar Date',
    points: 1,
    question: 'Fill in the blank with the appropriate form of the verb "receive":\n\nRamadan: "In what field of study did you graduate?"\nAddise: "I ________ (28) (receive) a BA degree in English in January, 2018."',
    options: [
      'received',
      'have received',
      'had received',
      'was receiving'
    ],
    correctAnswer: 0,
    hint: 'Notice the specific completed historical date: "in January, 2018".',
    explanation: 'The phrase "in January, 2018" specifies a finished calendar date in the past. An action completed at a stated past time must be expressed in the Simple Past tense ("received"). Option A is correct.'
  },
  {
    id: 'flen-2014-mid-q29',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2014 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Grammar: Present Perfect for Life Experience (ever)',
    points: 1,
    question: 'Fill in the blank with the appropriate form of the verb "have":\n\nRamadan: "It sounds great. ________ (29) (have) any teaching experience?"',
    options: [
      'Have you ever had',
      'Did you ever have',
      'Had you ever had',
      'Do you ever have'
    ],
    correctAnswer: 0,
    hint: 'Questions asking whether an event has ever occurred in a person\'s lifetime up to the present take the Present Perfect tense.',
    explanation: 'When asking about life experiences at an indefinite time between birth and the present moment (frequently signaled by "ever"), standard English uses the Present Perfect tense: "Have you ever had". Option A is correct.'
  },
  {
    id: 'flen-2014-mid-q30',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2014 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Grammar: Past Habitual Actions (used to)',
    points: 1,
    question: 'Fill in the blank with the appropriate form of "use to":\n\nAddise: "Sure! I ________ (30) (use to) teach English to high school students when I was second year university student."',
    options: [
      'used to',
      'use to',
      'am used to',
      'have used to'
    ],
    correctAnswer: 0,
    hint: 'Expresses an action that was habitually performed in the past but is no longer done.',
    explanation: '"Used to + bare infinitive" describes past habits, routines, or recurring actions that occurred over a period in the past ("when I was second year university student") and are no longer practiced today. Option A is correct.'
  },
  {
    id: 'flen-2014-mid-q31',
    courseId: 'flen-1011',
    courseCode: 'FLEn 1011',
    year: '2014 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Grammar: Stative Verbs in the Present (don\'t know)',
    points: 1,
    question: 'Fill in the blank with the appropriate negative form of the verb "know":\n\nRamadan: "When do you have an interview?"\nAddise: "I ________ (31) (not know) the date yet; I will tell you when I am informed of it."',
    options: [
      'don\'t know',
      'haven\'t known',
      'didn\'t know',
      'am not knowing'
    ],
    correctAnswer: 0,
    hint: '"Know" is a stative verb of mental condition expressing the speaker\'s immediate state of knowledge.',
    explanation: '"Know" is a stative mental verb that denotes a state of cognition rather than a dynamic action. In conversation, stating that you currently lack knowledge or information is expressed in the Simple Present tense: "I don\'t know the date yet". Stative verbs do not take continuous forms ("am not knowing"). Option A is correct.'
  }
];
