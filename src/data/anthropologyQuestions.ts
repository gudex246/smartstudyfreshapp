import { ExamQuestion } from '../types';

/**
 * Social Anthropology (Anth 1012) - University Freshman Examination Questions
 * Curated from Ethiopian Higher Education Harmonized Modular Curriculum & University Exams.
 * Complete with official answer keys, pedagogical hints, and in-depth academic explanations (English Only).
 */
export const ANTHROPOLOGY_QUESTIONS: ExamQuestion[] = [
  // =========================================================================
  // Question 1: Nature and Subfields of Anthropology
  // =========================================================================
  {
    id: 'anth-2025-model-q1',
    courseId: 'anth-1012',
    courseCode: 'Anth 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Introduction to Anthropology: Four Subfields',
    points: 1,
    question: 'The subfield of anthropology that investigates fossil remains of early hominids like Lucy (Dinknesh) to understand human evolutionary origins is called:',
    options: [
      'Archaeological Anthropology',
      'Paleoanthropology (Biological Anthropology)',
      'Linguistic Anthropology',
      'Socio-Cultural Anthropology'
    ],
    correctAnswer: 1,
    hint: 'This branch combines paleontology and physical anthropology to study ancient human fossils.',
    explanation: 'Academic Explanation:\n1. Physical or Biological Anthropology investigates the biological evolution and physical variation of human beings.\n2. Paleoanthropology is the specialized sub-discipline within biological anthropology that studies fossilized skeletal remains of early hominids to trace human lineage.\n3. The famous hominid fossil Lucy (Australopithecus afarensis) was discovered in 1974 in Hadar, Afar Region, Ethiopia.\n\nVerified Answer: Option B (Paleoanthropology).'
  },

  // =========================================================================
  // Question 2: Holism
  // =========================================================================
  {
    id: 'anth-2025-model-q2',
    courseId: 'anth-1012',
    courseCode: 'Anth 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Anthropological Approaches: Holism',
    points: 1,
    question: 'Which of the following best describes the "holistic approach" in social anthropology?',
    options: [
      'Studying only traditional and rural non-Western societies',
      'Focusing exclusively on economic transactions and market behavior',
      'Viewing human biology, society, culture, language, and history as an interconnected whole',
      'Judging the practices of foreign cultures using modern scientific ethics'
    ],
    correctAnswer: 2,
    hint: 'Holism comes from the Greek "holos" meaning complete or whole.',
    explanation: 'Academic Explanation:\n1. The holistic approach is one of anthropology\'s core hallmarks.\n2. Rather than studying political or economic systems in isolation, anthropologists examine how biology, ecology, kinship, religion, language, and technology interrelate as a unified system.\n\nVerified Answer: Option C (Viewing human biology, society, culture, language, and history as an interconnected whole).'
  },

  // =========================================================================
  // Question 3: Cultural Relativism vs Ethnocentrism
  // =========================================================================
  {
    id: 'anth-2025-model-q3',
    courseId: 'anth-1012',
    courseCode: 'Anth 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Theories of Culture: Cultural Relativism',
    points: 1,
    question: 'An individual who asserts that their own ethnic customs represent the only civilized and natural way of life, while dismissing the practices of other groups as backward or irrational, is exhibiting:',
    options: [
      'Cultural Relativism',
      'Ethnocentrism',
      'Enculturation',
      'Assimilation'
    ],
    correctAnswer: 1,
    hint: 'This attitude places one\'s own ethnic group at the center of the universe and uses it to evaluate all other cultures.',
    explanation: 'Academic Explanation:\n1. Ethnocentrism is the universal tendency to view one\'s own culture as superior and to apply one\'s own cultural standards in judging the behavior and beliefs of other societies.\n2. Conversely, Cultural Relativism is the anthropological principle that behavior in a particular culture must be evaluated in terms of that culture\'s own values, history, and context.\n\nVerified Answer: Option B (Ethnocentrism).'
  },

  // =========================================================================
  // Question 4: Characteristics of Culture (E.B. Tylor)
  // =========================================================================
  {
    id: 'anth-2025-model-q4',
    courseId: 'anth-1012',
    courseCode: 'Anth 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Concept of Culture: Classic Definition',
    points: 1,
    question: 'The British anthropologist who formulated the classical 1871 definition of culture as "that complex whole which includes knowledge, belief, art, morals, law, custom..." was:',
    options: [
      'Bronislaw Malinowski',
      'Franz Boas',
      'Sir Edward Burnett Tylor',
      'Claude Lévi-Strauss'
    ],
    correctAnswer: 2,
    hint: 'He is considered one of the founders of cultural anthropology and published "Primitive Culture" in 1871.',
    explanation: 'Academic Explanation:\n1. Sir Edward Burnett Tylor offered the first formal anthropological definition of culture in his 1871 work "Primitive Culture".\n2. Tylor emphasized that culture is not genetically inherited, but rather "acquired by man as a member of society".\n\nVerified Answer: Option C (Sir Edward Burnett Tylor).'
  },

  // =========================================================================
  // Question 5: Enculturation
  // =========================================================================
  {
    id: 'anth-2025-model-q5',
    courseId: 'anth-1012',
    courseCode: 'Anth 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Concept of Culture: Enculturation',
    points: 1,
    question: 'The lifelong process by which a child learns, internalizes, and transmits the culture, norms, and language of their society is known as:',
    options: [
      'Diffusion',
      'Acculturation',
      'Enculturation',
      'Ethnocide'
    ],
    correctAnswer: 2,
    hint: 'This is the anthropological term for socialization into one\'s native culture.',
    explanation: 'Academic Explanation:\n1. Enculturation is the process through which an individual acquires the cultural competence of their own society.\n2. It occurs both consciously (direct instruction by parents/teachers) and unconsciously through everyday observation and cultural reinforcement.\n\nVerified Answer: Option C (Enculturation).'
  },

  // =========================================================================
  // Question 6: Cultural Change Mechanisms
  // =========================================================================
  {
    id: 'anth-2025-model-q6',
    courseId: 'anth-1012',
    courseCode: 'Anth 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Mechanisms of Culture Change: Diffusion vs Acculturation',
    points: 1,
    question: 'The continuous exchange of cultural features that results when two distinct cultural groups have prolonged, firsthand contact, while both groups nevertheless maintain their distinct identities, is termed:',
    options: [
      'Assimilation',
      'Acculturation',
      'Innovation',
      'Syncretism'
    ],
    correctAnswer: 1,
    hint: 'Unlike assimilation where the minority loses its separate identity, here both groups exchange traits but remain distinct.',
    explanation: 'Academic Explanation:\n1. Acculturation refers to the cultural modifications that result when two cultural groups come into continuous direct contact.\n2. In acculturation, parts of both cultures change, but each group retains its separate cultural identity.\n3. By contrast, assimilation occurs when one group is completely absorbed into the dominant culture.\n\nVerified Answer: Option B (Acculturation).'
  },

  // =========================================================================
  // Question 7: Participant Observation
  // =========================================================================
  {
    id: 'anth-2025-model-q7',
    courseId: 'anth-1012',
    courseCode: 'Anth 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Fieldwork Methods: Participant Observation',
    points: 1,
    question: 'Which anthropologist is credited with pioneering and institutionalizing the method of long-term ethnographic fieldwork and participant observation during his study of the Trobriand Islanders?',
    options: [
      'Bronislaw Malinowski',
      'Lewis Henry Morgan',
      'Karl Marx',
      'Max Weber'
    ],
    correctAnswer: 0,
    hint: 'He spent years during World War I living in tents in the Trobriand Islands of Melanesia.',
    explanation: 'Academic Explanation:\n1. Polish-British anthropologist Bronislaw Malinowski revolutionized socio-cultural anthropology during his fieldwork in the Trobriand Islands (1915–1918).\n2. He introduced participant observation: living in the village, learning the indigenous vernacular, and participating in daily activities to grasp "the native\'s point of view".\n\nVerified Answer: Option A (Bronislaw Malinowski).'
  },

  // =========================================================================
  // Question 8: Emic vs Etic
  // =========================================================================
  {
    id: 'anth-2025-model-q8',
    courseId: 'anth-1012',
    courseCode: 'Anth 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Fieldwork Perspectives: Emic and Etic',
    points: 1,
    question: 'In anthropological methodology, an investigation that focuses on local explanations, native categories of thought, and the insider\'s worldview is called the:',
    options: [
      'Etic approach',
      'Emic approach',
      'Positivist approach',
      'Quantitative approach'
    ],
    correctAnswer: 1,
    hint: 'Derived from linguistics (phonemic vs phonetic). Emic represents the insider\'s cultural perspective.',
    explanation: 'Academic Explanation:\n1. The terms emic and etic were coined by linguist Kenneth Pike.\n2. The emic perspective investigates how local people think, perceive, and categorize their own cultural world.\n3. The etic (scientist-oriented) perspective shifts the focus to the categories, hypotheses, and analytical explanations formulated by the external researcher.\n\nVerified Answer: Option B (Emic approach).'
  },

  // =========================================================================
  // Question 9: Human Biological Diversity and Race
  // =========================================================================
  {
    id: 'anth-2025-model-q9',
    courseId: 'anth-1012',
    courseCode: 'Anth 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Human Diversity: The Scientific Concept of Race',
    points: 1,
    question: 'What is the contemporary scientific consensus in physical anthropology regarding the concept of human "races"?',
    options: [
      'Humans naturally divide into five genetically discrete, pure biological subspecies.',
      '"Race" is a social and ideological construction with no valid basis in discrete biological packages.',
      'Racial classifications accurately reflect geographic differences in intelligence and moral character.',
      'Skin color is biologically concordant with blood type, cranial capacity, and physical stamina.'
    ],
    correctAnswer: 1,
    hint: 'Genetic studies show that 85-94% of human genetic diversity is found within local populations, not between continental groups.',
    explanation: 'Academic Explanation:\n1. The American Anthropological Association (AAA) statement on race confirms that human physical variations vary continuously along geographical gradients (clines).\n2. Traits are non-concordant: skin color does not predict blood group or cranial traits.\n3. While biological race is a myth, social race produces real societal consequences due to racism and discrimination.\n\nVerified Answer: Option B ("Race" is a social and ideological construction with no valid basis in discrete biological packages).'
  },

  // =========================================================================
  // Question 10: Kinship Types
  // =========================================================================
  {
    id: 'anth-2025-model-q10',
    courseId: 'anth-1012',
    courseCode: 'Anth 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Kinship & Family: Types of Kinship Ties',
    points: 1,
    question: 'Relatives to whom an individual is related through socially and legally recognized marriage (such as a spouse, mother-in-law, or brother-in-law) are termed:',
    options: [
      'Consanguineal kin',
      'Affinal kin',
      'Fictive kin',
      'Collateral kin'
    ],
    correctAnswer: 1,
    hint: 'Consanguineal refers to blood ties, while in-laws are formed through marital alliance.',
    explanation: 'Academic Explanation:\n1. Consanguineal kin are related through biological descent ("blood" relatives).\n2. Affinal kin are relatives established by marriage (affines/in-laws).\n3. Fictive kin are relationships where social bonds mimic kinship (godparents, adoptive siblings).\n\nVerified Answer: Option B (Affinal kin).'
  },

  // =========================================================================
  // Question 11: Patrilineal Descent
  // =========================================================================
  {
    id: 'anth-2025-model-q11',
    courseId: 'anth-1012',
    courseCode: 'Anth 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Kinship Systems: Patrilineal Descent',
    points: 1,
    question: 'In a patrilineal descent system, a man traces his descent, clan membership, and primary inheritance rights through:',
    options: [
      'His mother and his mother\'s brother (maternal uncle)',
      'Both his father and his mother equally on a bilateral basis',
      'His father, his father\'s father, and his father\'s brothers exclusively',
      'His spouse\'s parents and marital lineage'
    ],
    correctAnswer: 2,
    hint: 'Patri- relates to the paternal (male) line.',
    explanation: 'Academic Explanation:\n1. In patrilineal (agnatic) descent, individuals belong to their father\'s descent group.\n2. Children of males belong to the group, whereas children of females belong to their husband\'s patrilineage.\n3. Patrilineal descent is the prevalent kinship organization in the vast majority of Ethiopian societies (e.g., Oromo, Amhara, Tigray, Afar, Somali).\n\nVerified Answer: Option C (His father, his father\'s father, and his father\'s brothers exclusively).'
  },

  // =========================================================================
  // Question 12: Forms of Marriage (Polygyny)
  // =========================================================================
  {
    id: 'anth-2025-model-q12',
    courseId: 'anth-1012',
    courseCode: 'Anth 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Marriage Forms: Polygyny vs Polyandry',
    points: 1,
    question: 'A marital arrangement in which one man is legally married to two or more women simultaneously is specifically known as:',
    options: [
      'Monogamy',
      'Polyandry',
      'Polygyny',
      'Endogamy'
    ],
    correctAnswer: 2,
    hint: 'Polygamy is the general umbrella term for plural marriage. Polygyny specifically denotes multiple wives (gyno-).',
    explanation: 'Academic Explanation:\n1. Polygamy refers broadly to marriage with multiple spouses.\n2. Polygyny is the marriage of one man to multiple women.\n3. Polyandry is the rare marriage of one woman to multiple men.\n\nVerified Answer: Option C (Polygyny).'
  },

  // =========================================================================
  // Question 13: Post-Marital Residence
  // =========================================================================
  {
    id: 'anth-2025-model-q13',
    courseId: 'anth-1012',
    courseCode: 'Anth 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Post-Marital Residence Patterns',
    points: 1,
    question: 'When a newly married couple establishes their home with or near the parents of the husband, the post-marital residence pattern is called:',
    options: [
      'Matrilocal residence (Uxorilocal)',
      'Patrilocal residence (Virilocal)',
      'Neolocal residence',
      'Avunculocal residence'
    ],
    correctAnswer: 1,
    hint: 'Patri- indicates living with or near the husband\'s father\'s kin.',
    explanation: 'Academic Explanation:\n1. Patrilocal (virilocal) residence occurs when the bride moves to the groom\'s community or father\'s compound. It strongly correlates with patrilineal descent and is common in rural Ethiopia.\n2. Matrilocal residence is settling near the bride\'s mother.\n3. Neolocal residence involves setting up a new independent household.\n\nVerified Answer: Option B (Patrilocal residence (Virilocal)).'
  },

  // =========================================================================
  // Question 14: Theories of Ethnicity (Fredrik Barth)
  // =========================================================================
  {
    id: 'anth-2025-model-q14',
    courseId: 'anth-1012',
    courseCode: 'Anth 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'hard',
    topic: 'Theories of Ethnicity: Constructivism & Fredrik Barth',
    points: 1,
    question: 'In his landmark 1969 work "Ethnic Groups and Boundaries", Fredrik Barth argued that ethnic identity is primarily maintained through:',
    options: [
      'The static preservation of isolated, unchangeable cultural content',
      'Biological purity and genetic isolation of the population',
      'Social boundaries created and negotiated through ongoing interactions with "others"',
      'Strict religious prohibitions against intermarriage and trade'
    ],
    correctAnswer: 2,
    hint: 'Barth emphasized social boundaries over the internal cultural "stuff".',
    explanation: 'Academic Explanation:\n1. Fredrik Barth showed that ethnic identities are dynamic and socially constructed rather than fixed primordial givens.\n2. Ethnic groups persist not through physical or geographical isolation, but through boundary-maintenance mechanisms that define members versus non-members during daily social encounters.\n\nVerified Answer: Option C (Social boundaries created and negotiated through ongoing interactions with "others").'
  },

  // =========================================================================
  // Question 15: Theories of Ethnicity (Primordialism vs Instrumentalism)
  // =========================================================================
  {
    id: 'anth-2025-model-q15',
    courseId: 'anth-1012',
    courseCode: 'Anth 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Theories of Ethnicity: Instrumentalism',
    points: 1,
    question: 'The theoretical perspective that views ethnicity not as an ancient ancestral inheritance, but as a practical, strategic instrument mobilized by political and economic elites to capture state power and resources is called:',
    options: [
      'Primordialism',
      'Essentialism',
      'Instrumentalism',
      'Evolutionism'
    ],
    correctAnswer: 2,
    hint: 'This approach treats ethnicity as an instrument or tool for political competition.',
    explanation: 'Academic Explanation:\n1. Instrumentalism posits that ethnic boundaries and loyalties are emphasized or manipulated by political elites to maximize their group\'s share of economic and political resources.\n2. In contrast, Primordialism argues that ethnic attachments are biological and cultural givens rooted in ancient history.\n\nVerified Answer: Option C (Instrumentalism).'
  },

  // =========================================================================
  // Question 16: Indigenous Conflict Resolution (Gadaa & Jaarsummaa)
  // =========================================================================
  {
    id: 'anth-2025-model-q16',
    courseId: 'anth-1012',
    courseCode: 'Anth 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Indigenous Dispute Settlement: Oromo Jaarsummaa',
    points: 1,
    question: 'In the customary dispute resolution system of the Oromo people, the institution where respected community elders mediate conflicts, investigate truth, and arrange restorative reconciliation is called:',
    options: [
      'Shimgillina',
      'Jaarsummaa',
      'Bayito',
      'Mada\'a'
    ],
    correctAnswer: 1,
    hint: 'Jaarsa in Afaan Oromoo refers to an elder; Jaarsummaa is elders\' mediation.',
    explanation: 'Academic Explanation:\n1. Jaarsummaa is the indigenous Oromo practice of conflict mediation presided over by community elders (Jaarsolii).\n2. It focuses on restorative justice, determining moral culpability, awarding compensation (such as Gumaa), and restoring harmony between families and clans.\n\nVerified Answer: Option B (Jaarsummaa).'
  },

  // =========================================================================
  // Question 17: Siinqee Institution
  // =========================================================================
  {
    id: 'anth-2025-model-q17',
    courseId: 'anth-1012',
    courseCode: 'Anth 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Gender and Indigenous Governance: Siinqee',
    points: 1,
    question: 'The "Siinqee" institution in Oromo society represents:',
    options: [
      'A weapon carried by young warriors entering the Gadaa military rank',
      'A ritual stick carried by married women representing their collective moral authority and power to intervene against violence',
      'A monetary currency utilized in pre-modern markets of southwestern Ethiopia',
      'A musical instrument played exclusively during agricultural harvest ceremonies'
    ],
    correctAnswer: 1,
    hint: 'Siinqee is a stick given to women upon marriage and symbolizes women\'s social, religious, and legal rights.',
    explanation: 'Academic Explanation:\n1. Siinqee is a special stick gifted to an Oromo woman by her mother on her wedding day.\n2. It functions as a powerful symbol of women\'s institutionalized authority to challenge injustice, protect women\'s rights, and intercede in armed male conflict to compel an immediate ceasefire.\n\nVerified Answer: Option B (A ritual stick carried by married women representing their collective moral authority and power to intervene against violence).'
  },

  // =========================================================================
  // Question 18: Shimgillina in Amhara
  // =========================================================================
  {
    id: 'anth-2025-model-q18',
    courseId: 'anth-1012',
    courseCode: 'Anth 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Indigenous Dispute Settlement: Shimgillina',
    points: 1,
    question: 'The traditional customary council of elders in the Amhara region that resolves civil disputes, land quarrels, and marital disagreements through mediation and communal blessings is known as:',
    options: [
      'Xeer',
      'Shimgillina',
      'Yajoka',
      'Gordanna'
    ],
    correctAnswer: 1,
    hint: 'Led by "Shimaglewoch" (elders) in the Amharic language.',
    explanation: 'Academic Explanation:\n1. Shimgillina is the traditional mediation mechanism among the Amhara and neighboring communities.\n2. Highly esteemed elders (Shimaglewoch) arbitrate disputes, prevent retaliatory feuds, and conclude with symbolic reconciliation rites and communal prayers.\n\nVerified Answer: Option B (Shimgillina).'
  },

  // =========================================================================
  // Question 19: Mada'a in Afar
  // =========================================================================
  {
    id: 'anth-2025-model-q19',
    courseId: 'anth-1012',
    courseCode: 'Anth 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Indigenous Dispute Settlement: Afar Mada\'a',
    points: 1,
    question: 'The customary legal code and conflict resolution system utilized by the Afar pastoralists to settle clan disputes, grazing rights, and homicide compensation is known as:',
    options: [
      'Bayito',
      'Mada\'a',
      'Xeer',
      'Seera'
    ],
    correctAnswer: 1,
    hint: 'Administered by traditional judges called "Makabanto" in the Afar society.',
    explanation: 'Academic Explanation:\n1. Mada\'a is the comprehensive customary legal system of the Afar pastoralists.\n2. Administered by elders and judges (Makabanto), it regulates pastoral resource management, marriage, inter-clan peace treaties, and blood payments.\n\nVerified Answer: Option B (Mada\'a).'
  },

  // =========================================================================
  // Question 20: Restorative vs Retributive Justice
  // =========================================================================
  {
    id: 'anth-2025-model-q20',
    courseId: 'anth-1012',
    courseCode: 'Anth 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Legal Anthropology: Restorative vs Retributive Justice',
    points: 1,
    question: 'Unlike formal modern state courts which primarily prioritize retributive justice (punishment, fines, and imprisonment), indigenous customary justice systems in Ethiopia fundamentally emphasize:',
    options: [
      'Strict incarceration and capital punishment',
      'Adversarial competition with distinct legal winners and losers',
      'Restorative justice, social healing, reconciliation, and preserving community harmony',
      'Elimination of all informal mediation in favor of bureaucratic litigation'
    ],
    correctAnswer: 2,
    hint: 'Indigenous dispute settlement aims to repair broken community bonds and reintegrate the wrongdoer.',
    explanation: 'Academic Explanation:\n1. Formal state courts rely on retributive justice, focusing on penalizing infractions against state statutes.\n2. Customary systems prioritize restorative justice: healing wounded social relationships, restoring dignity, providing victim compensation, and securing long-term communal peace.\n\nVerified Answer: Option C (Restorative justice, social healing, reconciliation, and preserving community harmony).'
  },

  // =========================================================================
  // Question 21: Gurage Customary Systems (Yajoka Kicha)
  // =========================================================================
  {
    id: 'anth-2025-model-q21',
    courseId: 'anth-1012',
    courseCode: 'Anth 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Customary Institutions: Yajoka Kicha of Gurage',
    points: 1,
    question: 'The supreme traditional legislative and judicial assembly of the Sebat Bet Gurage that convenes at a sacred open-air site to codify and adjudicate customary law is called:',
    options: [
      'Gordanna Seera',
      'Yajoka Kicha',
      'Bayito',
      'Chawa'
    ],
    correctAnswer: 1,
    hint: 'Yajoka is held in Chaha district for the Sebat Bet Gurage, while Gordanna serves the Kistane Gurage.',
    explanation: 'Academic Explanation:\n1. Yajoka Kicha is the highest customary council and judicial court for the Sebat Bet Gurage.\n2. It reviews customary legal statutes, arbitrates major conflicts between clans, and issues binding communal decisions.\n\nVerified Answer: Option B (Yajoka Kicha).'
  },

  // =========================================================================
  // Question 22: Universal Incest Taboo
  // =========================================================================
  {
    id: 'anth-2025-model-q22',
    courseId: 'anth-1012',
    courseCode: 'Anth 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Kinship & Marriage: Incest Taboo',
    points: 1,
    question: 'The cultural rule universally found in all known human societies that strictly prohibits sexual intercourse or marriage between close biological kin (such as parents and children, or brother and sister) is called:',
    options: [
      'The rule of endogamy',
      'The incest taboo',
      'The levirate rule',
      'The sororate rule'
    ],
    correctAnswer: 1,
    hint: 'This is one of the few cultural universals identified across all human cultures.',
    explanation: 'Academic Explanation:\n1. The incest taboo is a cultural universal prohibiting sexual relations between primary family members.\n2. Anthropologists note that it forces individuals to marry outside their nuclear family, creating inter-family social, political, and economic alliances.\n\nVerified Answer: Option B (The incest taboo).'
  },

  // =========================================================================
  // Question 23: Exogamy vs Endogamy
  // =========================================================================
  {
    id: 'anth-2025-model-q23',
    courseId: 'anth-1012',
    courseCode: 'Anth 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Marriage Rules: Exogamy and Endogamy',
    points: 1,
    question: 'A marriage rule that requires a person to seek a marital partner OUTSIDE of their own lineage, clan, or local group is termed:',
    options: [
      'Endogamy',
      'Exogamy',
      'Polygamy',
      'Polyandry'
    ],
    correctAnswer: 1,
    hint: 'Exo- means outside or external.',
    explanation: 'Academic Explanation:\n1. Exogamy is the practice of marrying outside of a specific defined cultural or kin group (such as one\'s clan).\n2. Endogamy, on the other hand, requires marriage within a defined social, caste, religious, or ethnic boundary.\n\nVerified Answer: Option B (Exogamy).'
  },

  // =========================================================================
  // Question 24: Traditional Assimilation in Ethiopia (Moggaasa)
  // =========================================================================
  {
    id: 'anth-2025-model-q24',
    courseId: 'anth-1012',
    courseCode: 'Anth 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Ethnic Relations in Ethiopia: Moggaasa and Guddifacha',
    points: 1,
    question: 'The historical Oromo institution of collective adoption through which non-Oromo individuals or entire communities were incorporated into an Oromo clan with full equal rights and lineage membership is called:',
    options: [
      'Guddifacha',
      'Moggaasa',
      'Harambee',
      'Gumaa'
    ],
    correctAnswer: 1,
    hint: 'Guddifacha is individual child adoption, whereas Moggaasa is clan-level collective incorporation.',
    explanation: 'Academic Explanation:\n1. Moggaasa is an Oromo customary institution of collective adoption and incorporation of individuals or groups into a clan.\n2. The adopted members take the clan\'s genealogy and acquire all customary rights, obligations, and protections of the Gadaa system.\n\nVerified Answer: Option B (Moggaasa).'
  },

  // =========================================================================
  // Question 25: Indigenous Knowledge Systems
  // =========================================================================
  {
    id: 'anth-2025-model-q25',
    courseId: 'anth-1012',
    courseCode: 'Anth 1012',
    year: '2025 Model',
    examType: 'model',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Indigenous Knowledge Systems: Characteristics',
    points: 1,
    question: 'Which of the following is a key characteristic of Indigenous Knowledge Systems (IKS)?',
    options: [
      'It is generated exclusively in modern academic laboratories and written in peer-reviewed journals.',
      'It is static, unchanging, and detached from local ecological conditions.',
      'It is experiential, community-specific, orally transmitted, and adapted to local ecological settings.',
      'It is universally identical across all continents without geographical variation.'
    ],
    correctAnswer: 2,
    hint: 'IKS is accumulated through generations of local observation and passed orally.',
    explanation: 'Academic Explanation:\n1. Indigenous Knowledge Systems (IKS) represent empirical, practical knowledge developed by local communities over centuries.\n2. It is transmitted orally through practical apprenticeship, storytelling, and cultural rites, providing vital strategies for agriculture, biodiversity conservation, and medicine.\n\nVerified Answer: Option C (It is experiential, community-specific, orally transmitted, and adapted to local ecological settings).'
  }
];
