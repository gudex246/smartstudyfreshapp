import { ExamQuestion } from '../types';

/**
 * Moral and Civic Education (MCiE 1012) - University Freshman Examination Questions
 * Curated from Ethiopian Higher Education Harmonized Modular Curriculum & University Exams.
 * Complete with official answer keys, pedagogical hints, and in-depth academic explanations (English Only).
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
    explanation: 'Academic Explanation:\n1. Civic education is designed to empower citizens with the knowledge of political systems, the skills of critical analysis and democratic participation, and ethical dispositions like tolerance and social responsibility.\n2. It aims to develop active and responsible citizenship rather than passive obedience.\n\nVerified Answer: Option B (Cultivate informed, ethically responsible, competent, and participatory democratic citizens).'
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
    explanation: 'Academic Explanation:\n1. Utilitarianism is the classic teleological/consequentialist ethical theory.\n2. Formulated by Jeremy Bentham and refined by John Stuart Mill, it evaluates actions based on their consequences: an act is right if it maximizes net utility (pleasure/happiness) and minimizes suffering for the largest number of people.\n\nVerified Answer: Option B (Utilitarianism (Consequentialism)).'
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
    difficulty: 'medium',
    topic: 'Normative Ethics: Deontology & Immanuel Kant',
    points: 1,
    question: 'Immanuel Kant\'s famous moral formulation that one should "act only on that maxim whereby you can at the same time will that it should become a universal law" is known as the:',
    options: [
      'Principle of Utility',
      'Categorical Imperative',
      'Golden Mean',
      'Social Contract'
    ],
    correctAnswer: 1,
    hint: 'Kant\'s unconditional moral command applies to all rational beings without exceptions.',
    explanation: 'Academic Explanation:\n1. Immanuel Kant argued that morality is based on pure practical reason and duty, not subjective desires or consequences.\n2. The Categorical Imperative is the fundamental supreme test of morality: an action is moral only if the underlying principle (maxim) can be universalized for all people without self-contradiction.\n\nVerified Answer: Option B (Categorical Imperative).'
  },

  // =========================================================================
  // Question 4: Respect for Persons Principle
  // =========================================================================
  {
    id: 'mcie-2025-model-q4',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Normative Ethics: Kantian Respect for Humanity',
    points: 1,
    question: 'According to Kantian deontology, why is it fundamentally immoral to exploit, enslave, or deceive other human beings?',
    options: [
      'Because it decreases aggregate national GDP and tax revenue',
      'Because humans possess intrinsic worth and must always be treated as ends in themselves, never merely as instruments or means to an end',
      'Because the state penal code imposes harsh financial sanctions on such behavior',
      'Because it disrupts traditional religious hierarchies'
    ],
    correctAnswer: 1,
    hint: 'Kant\'s second formulation of the Categorical Imperative emphasizes human dignity and autonomy.',
    explanation: 'Academic Explanation:\n1. Kant\'s Formula of Humanity states: "Act in such a way that you treat humanity, whether in your own person or in the person of any other, never merely as a means to an end, but always at the same time as an end."\n2. Rational human beings possess unconditional intrinsic dignity (Würde), meaning they must never be treated as disposable tools for someone else\'s convenience.\n\nVerified Answer: Option B (Because humans possess intrinsic worth and must always be treated as ends in themselves, never merely as instruments or means to an end).'
  },

  // =========================================================================
  // Question 5: Aristotle's Virtue Ethics & Golden Mean
  // =========================================================================
  {
    id: 'mcie-2025-model-q5',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Normative Ethics: Aristotle\'s Doctrine of the Golden Mean',
    points: 1,
    question: 'In Aristotle\'s virtue ethics, moral virtue is conceptualized as the "Golden Mean" between two vices: an excess and a deficiency. In this ethical framework, the virtue of "Courage" is the mean between:',
    options: [
      'Greed and stinginess',
      'Cowardice (deficiency) and rashness/foolhardiness (excess)',
      'Pride and humility',
      'Justice and injustice'
    ],
    correctAnswer: 1,
    hint: 'A coward runs from all danger (deficiency of confidence), while a rash person runs blindly into mortal peril (excess of confidence).',
    explanation: 'Academic Explanation:\n1. In the "Nicomachean Ethics", Aristotle defined moral virtue as a balanced disposition (hexis) lying in the intermediate position between extremes.\n2. For the virtue of courage: the deficiency is cowardice (excessive fear/lack of confidence), while the excess is rashness or foolhardiness (insufficient fear/reckless overconfidence).\n\nVerified Answer: Option B (Cowardice (deficiency) and rashness/foolhardiness (excess)).'
  },

  // =========================================================================
  // Question 6: Four Elements of the State
  // =========================================================================
  {
    id: 'mcie-2025-model-q6',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'State and Government: Elements of Statehood',
    points: 1,
    question: 'Under international law and political science (such as the Montevideo Convention), which of the following represents the four essential constituent elements of a state?',
    options: [
      'Army, Constitution, National Anthem, and Currency',
      'Defined Territory, Permanent Population, Organized Government, and Sovereignty',
      'Democracy, Free Market Economy, Courts, and Media',
      'State Religion, Police, Political Parties, and Borders'
    ],
    correctAnswer: 1,
    hint: 'Recall the classic definition of the state requiring people, land, rule, and supreme authority.',
    explanation: 'Academic Explanation:\n1. A sovereign state requires four essential pillars: a defined territorial border, a permanent settled population, an organized governing administration, and sovereignty (the internal monopoly on law-making and external independence from foreign rule).\n\nVerified Answer: Option B (Defined Territory, Permanent Population, Organized Government, and Sovereignty).'
  },

  // =========================================================================
  // Question 7: Social Contract Theory (John Locke)
  // =========================================================================
  {
    id: 'mcie-2025-model-q7',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Theories of State Origin: John Locke',
    points: 1,
    question: 'According to English political philosopher John Locke, human beings possess natural inalienable rights to "life, liberty, and estate (property)". What is the fundamental purpose of creating a government through a social contract?',
    options: [
      'To grant absolute, unchecked dictatorial power to a monarch',
      'To protect these pre-existing natural rights; if the government violates them, citizens have the moral right to replace it',
      'To abolish all private ownership of agricultural lands',
      'To enforce a single state religion across all citizens'
    ],
    correctAnswer: 1,
    hint: 'Locke\'s philosophy inspired the American Declaration of Independence and constitutional limitations on power.',
    explanation: 'Academic Explanation:\n1. John Locke\'s Two Treatises of Government argued that individuals enter into a social contract to establish a government specifically to secure and protect their natural rights (life, liberty, and property).\n2. Authority rests on the consent of the governed; when a government becomes tyrannical, it breaks the contract, giving citizens the right of revolution.\n\nVerified Answer: Option B (To protect these pre-existing natural rights; if the government violates them, citizens have the moral right to replace it).'
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
    topic: 'Constitutional Principles: Separation of Powers',
    points: 1,
    question: 'The constitutional doctrine formulated by Baron de Montesquieu to prevent tyranny by dividing governmental authority into three distinct branches—Legislative, Executive, and Judicial—is called:',
    options: [
      'Democratic Centralism',
      'Separation of Powers with Checks and Balances',
      'Federalism',
      'Judicial Supremacy'
    ],
    correctAnswer: 1,
    hint: 'This system prevents any single organ from monopolizing state authority.',
    explanation: 'Academic Explanation:\n1. In "The Spirit of the Laws" (1748), Montesquieu argued that liberty is preserved only when the power of making laws (legislature), enforcing laws (executive), and interpreting laws (judiciary) are held by separate bodies with mutual checks and balances.\n\nVerified Answer: Option B (Separation of Powers with Checks and Balances).'
  },

  // =========================================================================
  // Question 9: Citizenship (Jus Sanguinis vs Jus Soli)
  // =========================================================================
  {
    id: 'mcie-2025-model-q9',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Citizenship: Acquisition by Blood vs Soil',
    points: 1,
    question: 'Under Ethiopian nationality law (and Article 6 of the 1995 FDRE Constitution), any person whose parents (or either parent) is an Ethiopian citizen automatically acquires citizenship. This principle of citizenship acquisition by parentage is called:',
    options: [
      'Jus Soli (Right of the Soil)',
      'Jus Sanguinis (Right of Blood)',
      'Naturalization by Presidential Decree',
      'Expatriation'
    ],
    correctAnswer: 1,
    hint: 'Sanguis is Latin for blood; Jus Sanguinis is the right of blood.',
    explanation: 'Academic Explanation:\n1. Jus Sanguinis confers citizenship through the biological nationality of the parents, regardless of where the child is born.\n2. In contrast, Jus Soli grants citizenship based on the geographic territory where birth takes place.\n3. Ethiopian nationality law is primarily based on Jus Sanguinis.\n\nVerified Answer: Option B (Jus Sanguinis (Right of Blood)).'
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
    topic: 'Constitutions: Supremacy of the Constitution',
    points: 1,
    question: 'Under the principle of "Constitutional Supremacy" (such as Article 9(1) of the FDRE Constitution), what happens if a parliamentary proclamation or customary practice contradicts the Constitution?',
    options: [
      'The parliamentary proclamation automatically overrides the constitution.',
      'The conflicting law, customary practice, or decision of a state organ is null and void to the extent of the inconsistency.',
      'The supreme court rewrites the constitution to accommodate the customary practice.',
      'The regional state is suspended from the federation.'
    ],
    correctAnswer: 1,
    hint: 'The constitution is the supreme law of the land; all subordinate laws must conform to it.',
    explanation: 'Academic Explanation:\n1. Constitutional supremacy establishes that the Constitution is the supreme law of the state.\n2. Any law, customary practice, or act of government that contradicts constitutional provisions has no legal effect (is null and void).\n\nVerified Answer: Option B (The conflicting law, customary practice, or decision of a state organ is null and void to the extent of the inconsistency).'
  },

  // =========================================================================
  // Question 11: 1931 First Written Constitution of Ethiopia
  // =========================================================================
  {
    id: 'mcie-2025-model-q11',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Ethiopian Constitutional History: 1931 Constitution',
    points: 1,
    question: 'The first written constitution in the history of Ethiopia was promulgated in 1931 during the reign of:',
    options: [
      'Emperor Menelik II',
      'Emperor Tewodros II',
      'Emperor Haile Selassie I',
      'Lij Iyasu'
    ],
    correctAnswer: 2,
    hint: 'He promulgated the constitution on July 16, 1931, one year after his coronation.',
    explanation: 'Academic Explanation:\n1. Emperor Haile Selassie I introduced Ethiopia\'s first written constitution on July 16, 1931.\n2. It consolidated absolute imperial authority, provided a framework for national modernization, and established a bicameral legislative body.\n\nVerified Answer: Option C (Emperor Haile Selassie I).'
  },

  // =========================================================================
  // Question 12: 1987 PDRE Constitution
  // =========================================================================
  {
    id: 'mcie-2025-model-q12',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Ethiopian Constitutional History: 1987 PDRE Constitution',
    points: 1,
    question: 'The 1987 Constitution of the People\'s Democratic Republic of Ethiopia (PDRE) was characterized by which official political ideology and system?',
    options: [
      'Liberal constitutional monarchy',
      'Marxist-Leninist socialist one-party state led by the Workers\' Party of Ethiopia (WPE)',
      'Multi-party democratic federalism',
      'Islamic parliamentary democracy'
    ],
    correctAnswer: 1,
    hint: 'Promulgated under the Derg regime led by Mengistu Haile Mariam.',
    explanation: 'Academic Explanation:\n1. The 1987 PDRE Constitution formally transitioned the military Derg (PMAC) into a civilian socialist state based on Soviet-style Marxist-Leninist ideology.\n2. It enshrined the Workers\' Party of Ethiopia (WPE) as the vanguard leading party of society and the state.\n\nVerified Answer: Option B (Marxist-Leninist socialist one-party state led by the Workers\' Party of Ethiopia (WPE)).'
  },

  // =========================================================================
  // Question 13: 1995 FDRE Constitution Structure
  // =========================================================================
  {
    id: 'mcie-2025-model-q13',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Ethiopian Constitutional History: 1995 FDRE Constitution',
    points: 1,
    question: 'Under the 1995 Constitution of the Federal Democratic Republic of Ethiopia (FDRE), supreme political power and sovereignty resides in:',
    options: [
      'The Prime Minister and Cabinet Ministers',
      'The Supreme Court and Council of Constitutional Inquiry',
      'The Nations, Nationalities, and Peoples of Ethiopia',
      'The Federal Parliament alone'
    ],
    correctAnswer: 2,
    hint: 'Check Article 8(1) of the FDRE Constitution.',
    explanation: 'Academic Explanation:\n1. Article 8(1) of the 1995 FDRE Constitution explicitly states: "All sovereign power resides in the Nations, Nationalities and Peoples of Ethiopia."\n2. This sovereignty is expressed through their elected representatives and direct democratic participation.\n\nVerified Answer: Option C (The Nations, Nationalities, and Peoples of Ethiopia).'
  },

  // =========================================================================
  // Question 14: Direct vs Representative Democracy
  // =========================================================================
  {
    id: 'mcie-2025-model-q14',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Models of Democracy: Direct vs Representative',
    points: 1,
    question: 'A system of government where citizens elect representatives through regular, competitive, and secret ballots to make laws and govern on their behalf is called:',
    options: [
      'Direct democracy',
      'Representative (Indirect) democracy',
      'Totalitarian autocracy',
      'Aristocracy'
    ],
    correctAnswer: 1,
    hint: 'Most modern nation-states use this model because large populations make direct assembly assemblies impractical.',
    explanation: 'Academic Explanation:\n1. In representative democracy, sovereign citizens delegate decision-making authority to elected officials (parliamentarians, presidents) who are accountable to voters.\n2. In direct democracy (like ancient Athens), citizens assemble in person to vote directly on every law.\n\nVerified Answer: Option B (Representative (Indirect) democracy).'
  },

  // =========================================================================
  // Question 15: Good Governance (Accountability and Transparency)
  // =========================================================================
  {
    id: 'mcie-2025-model-q15',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Good Governance: Transparency and Accountability',
    points: 1,
    question: 'In the context of good governance, the requirement that government decisions and financial transactions are conducted openly according to established rules, with public access to information, is known as:',
    options: [
      'Accountability',
      'Transparency',
      'Consensus Orientation',
      'Arbitrariness'
    ],
    correctAnswer: 1,
    hint: 'Think of clear glass where everything inside is visible to the public eye.',
    explanation: 'Academic Explanation:\n1. Transparency means that information is freely available and directly accessible to those who will be affected by decisions and their enforcement.\n2. Accountability means that public officials and institutions must answer for their actions and accept responsibility for public resources.\n\nVerified Answer: Option B (Transparency).'
  },

  // =========================================================================
  // Question 16: Three Generations of Human Rights (Karel Vasak)
  // =========================================================================
  {
    id: 'mcie-2025-model-q16',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Human Rights: Three Generations',
    points: 1,
    question: 'First-generation human rights (such as the right to life, freedom of expression, freedom of assembly, and fair trial) primarily represent:',
    options: [
      'Socio-economic rights requiring extensive government financial redistribution',
      'Civil and political rights aimed at shielding individuals from arbitrary state interference (Liberty)',
      'Environmental and collective development rights of entire continents',
      'Corporate rights for international multinational businesses'
    ],
    correctAnswer: 1,
    hint: 'First-generation rights originated in 17th-18th century Enlightenment revolutions emphasizing individual liberty.',
    explanation: 'Academic Explanation:\n1. First-generation rights are civil and political rights (liberty-oriented) that protect individuals against government overreach.\n2. Second-generation rights are economic, social, and cultural rights (equality-oriented, e.g., healthcare, education).\n3. Third-generation rights are solidarity and collective rights (fraternity-oriented, e.g., peace, clean environment).\n\nVerified Answer: Option B (Civil and political rights aimed at shielding individuals from arbitrary state interference (Liberty)).'
  },

  // =========================================================================
  // Question 17: Second Generation Rights
  // =========================================================================
  {
    id: 'mcie-2025-model-q17',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Human Rights: Second Generation Rights',
    points: 1,
    question: 'Which of the following is an example of a Second-Generation Human Right?',
    options: [
      'The right to a fair and public trial by an independent court',
      'Freedom of thought, conscience, and religious worship',
      'The right to education, adequate healthcare, and work (Economic & Social Rights)',
      'The right to a clean, ecologically balanced environment'
    ],
    correctAnswer: 2,
    hint: 'Second-generation rights guarantee socioeconomic security and equality of opportunity.',
    explanation: 'Academic Explanation:\n1. Second-generation rights are socioeconomic rights codified in the International Covenant on Economic, Social and Cultural Rights (ICESCR, 1966).\n2. They require affirmative state investment in education, public health, labor protections, and social security.\n\nVerified Answer: Option C (The right to education, adequate healthcare, and work (Economic & Social Rights)).'
  },

  // =========================================================================
  // Question 18: Inherent and Inalienable Nature of Rights
  // =========================================================================
  {
    id: 'mcie-2025-model-q18',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Human Rights: Fundamental Characteristics',
    points: 1,
    question: 'When human rights are described as "inalienable", it means that:',
    options: [
      'They apply only to citizens who pay taxes and vote in general elections.',
      'They cannot be legitimately surrendered, stripped away, or transferred, because they belong to every human by virtue of existence.',
      'They can be cancelled whenever a ruling government passes an ordinary administrative decree.',
      'They belong exclusively to native-born citizens and exclude foreign aliens.'
    ],
    correctAnswer: 1,
    hint: 'Alienation in property law means selling or transferring; inalienable means cannot be taken or given away.',
    explanation: 'Academic Explanation:\n1. Human rights are inalienable because they are intrinsic to human existence and human dignity.\n2. No authority can legitimately revoke a person\'s humanity or their entitlement to fundamental rights.\n\nVerified Answer: Option B (They cannot be legitimately surrendered, stripped away, or transferred, because they belong to every human by virtue of existence).'
  },

  // =========================================================================
  // Question 19: Positive vs Negative Peace (Johan Galtung)
  // =========================================================================
  {
    id: 'mcie-2025-model-q19',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'hard',
    topic: 'Peace and Conflict Studies: Johan Galtung',
    points: 1,
    question: 'In peace studies, pioneer Johan Galtung distinguished between "Negative Peace" and "Positive Peace". According to Galtung, "Positive Peace" refers to:',
    options: [
      'The simple absence of direct open physical warfare or active gun battles',
      'The presence of social justice, equity, human rights, and the elimination of structural and cultural violence',
      'Total military dominance and pacification enforced by an authoritarian army',
      'A temporary ceasefire signed between opposing belligerent armies'
    ],
    correctAnswer: 1,
    hint: 'Negative peace is the absence of war; positive peace is the presence of justice and social harmony.',
    explanation: 'Academic Explanation:\n1. Negative peace is defined as the mere absence of direct physical violence or war.\n2. Positive peace requires structural justice: eliminating systemic inequalities, poverty, ethnic oppression, and discrimination, thereby resolving the root causes of conflict.\n\nVerified Answer: Option B (The presence of social justice, equity, human rights, and the elimination of structural and cultural violence).'
  },

  // =========================================================================
  // Question 20: Universal Declaration of Human Rights (UDHR)
  // =========================================================================
  {
    id: 'mcie-2025-model-q20',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'International Human Rights: UDHR',
    points: 1,
    question: 'The landmark Universal Declaration of Human Rights (UDHR), which established global standards for fundamental human rights, was adopted by the United Nations General Assembly on:',
    options: [
      'July 16, 1931',
      'October 24, 1945',
      'December 10, 1948',
      'August 21, 1995'
    ],
    correctAnswer: 2,
    hint: 'December 10 is celebrated annually worldwide as Human Rights Day.',
    explanation: 'Academic Explanation:\n1. The UDHR was adopted by the UN General Assembly in Paris on December 10, 1948, in response to the atrocities of World War II.\n2. Chaired by Eleanor Roosevelt, it proclaims the universal rights to which all human beings are inherently entitled.\n\nVerified Answer: Option C (December 10, 1948).'
  },

  // =========================================================================
  // Question 21: Civil Society Organizations (CSOs)
  // =========================================================================
  {
    id: 'mcie-2025-model-q21',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Democracy: Role of Civil Society',
    points: 1,
    question: 'Why are independent Civil Society Organizations (CSOs), such as trade unions, human rights associations, and professional bodies, vital for a democratic state?',
    options: [
      'They act as organs of the state to execute administrative police orders.',
      'They act as watchdogs checking state abuses, advocating for marginalized voices, and fostering civic participation.',
      'They replace the elected parliament in passing national budgets.',
      'They enforce compulsory membership in the ruling political party.'
    ],
    correctAnswer: 1,
    hint: 'Civil society operates in the space between the family and the state, holding authorities accountable.',
    explanation: 'Academic Explanation:\n1. Civil society organizations bridge the gap between individual citizens and the state.\n2. They monitor government transparency, defend human rights, educate voters, and organize peaceful collective action.\n\nVerified Answer: Option B (They act as watchdogs checking state abuses, advocating for marginalized voices, and fostering civic participation).'
  },

  // =========================================================================
  // Question 22: Rigid vs Flexible Constitutions
  // =========================================================================
  {
    id: 'mcie-2025-model-q22',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Constitutions: Amendment Procedures',
    points: 1,
    question: 'A constitution that cannot be amended through the ordinary lawmaking process of parliament, but instead requires a complex and rigorous special procedure (such as two-thirds supermajorities and regional ratifications), is classified as a:',
    options: [
      'Flexible constitution',
      'Rigid constitution',
      'Uncodified constitution',
      'Unitary constitution'
    ],
    correctAnswer: 1,
    hint: 'Rigid refers to something that cannot be easily bent or altered.',
    explanation: 'Academic Explanation:\n1. A rigid constitution requires a special, demanding amendment procedure (e.g., Article 104 and 105 of the FDRE Constitution), making it difficult to alter on political whim.\n2. A flexible constitution can be altered by ordinary legislative majorities (like the UK constitution).\n\nVerified Answer: Option B (Rigid constitution).'
  },

  // =========================================================================
  // Question 23: Deontological Ethics and Moral Rules
  // =========================================================================
  {
    id: 'mcie-2025-model-q23',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Moral Philosophy: Deontology vs Consequentialism',
    points: 1,
    question: 'If a doctor refuses to lie to a terminally ill patient because she believes that lying is intrinsically immoral under all circumstances—even if lying would temporarily comfort the patient—her decision is guided by:',
    options: [
      'Utilitarian ethics',
      'Deontological (Duty-based) ethics',
      'Ethical egoism',
      'Machiavellian pragmatism'
    ],
    correctAnswer: 1,
    hint: 'Deontologists judge acts by moral duties, not by desirable consequences.',
    explanation: 'Academic Explanation:\n1. Deontology holds that certain actions (like telling the truth or keeping promises) are strict duties regardless of the outcome.\n2. A utilitarian would consider the consequences (comfort vs. distress), but a deontologist adheres to the rule because lying is inherently wrong.\n\nVerified Answer: Option B (Deontological (Duty-based) ethics).'
  },

  // =========================================================================
  // Question 24: Direct Democracy in Ancient Athens
  // =========================================================================
  {
    id: 'mcie-2025-model-q24',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Democracy: Historical Origins',
    points: 1,
    question: 'The earliest historical model of direct democracy, where all eligible citizens gathered in an open assembly (Ecclesia) to debate and vote directly on state laws, originated in the ancient city-state of:',
    options: [
      'Rome',
      'Sparta',
      'Athens',
      'Carthage'
    ],
    correctAnswer: 2,
    hint: 'Famous 5th-century BCE Greek city-state led by Pericles.',
    explanation: 'Academic Explanation:\n1. Direct democracy was practiced in classical Athens in the 5th century BCE.\n2. All free adult male citizens were members of the Assembly (Ecclesia) and voted directly on public policies and war decisions.\n\nVerified Answer: Option C (Athens).'
  },

  // =========================================================================
  // Question 25: Conflict Transformation
  // =========================================================================
  {
    id: 'mcie-2025-model-q25',
    courseId: 'mcie-1012',
    courseCode: 'MCiE 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Peace and Conflict Studies: Conflict Transformation',
    points: 1,
    question: 'In contemporary peacebuilding, "Conflict Transformation" goes beyond mere conflict management or settlement because it focuses on:',
    options: [
      'Defeating the opposing party through superior military armed firepower',
      'Silencing opposing grievances through state censorship',
      'Addressing the underlying structural inequalities, systemic patterns, and damaged relationships that cause recurring conflicts',
      'Relocating conflicting ethnic groups into separate isolated reservations'
    ],
    correctAnswer: 2,
    hint: 'Transformation alters the deep social and systemic foundations that generate hostility.',
    explanation: 'Academic Explanation:\n1. Conflict settlement merely ends violent hostilities temporarily.\n2. Conflict transformation (championed by John Paul Lederach) seeks deeper change: restructuring unjust relationships, dismantling structural discrimination, and building durable mutual trust for long-term peace.\n\nVerified Answer: Option C (Addressing the underlying structural inequalities, systemic patterns, and damaged relationships that cause recurring conflicts).'
  }
];
