import { Chapter } from '../types';

export const CIVICS_MODULE_CHAPTERS: Chapter[] = [
  {
    id: 'mcie-ch1',
    courseId: 'mcie-1012',
    number: 1,
    title: 'Chapter 1: Understanding Civics, Ethics, and Morality 🏛️',
    summary: 'Definitions and etymology of civics, citizenship, morality, and ethics; goals of civic and ethical education; civic knowledge, civic skills, and civic dispositions/values.',
    readTimeMinutes: 20,
    keyFormulas: [
      'Etymology: Latin "Civics" from "Civicus" (citizen) and "Civitas" (city-state / commonwealth).',
      'Morality vs Ethics: Morality refers to personal or social beliefs of right and wrong; Ethics is the systematic philosophical study and critical reflection on morality.',
      'Dimensions of Civic Competence: Civic Knowledge (understanding political systems) + Civic Skills (intellectual & participatory abilities) + Civic Dispositions (habits of the heart & civic virtues).'
    ],
    content: `Chapter 1: Understanding Civics, Ethics, and Morality 🏛️

1.1 Definition and Nature of Civics 📖
Civics is the interdisciplinary social science that studies the rights, obligations, and responsibilities of citizens in relation to the state and society.
• Origin: Derived from the Latin word "civicus" (pertaining to citizens) and "civitas" (city-state or commonwealth).
• Core Goal: Cultivating informed, competent, critically minded, and active citizens committed to democratic values, human dignity, social justice, and constitutional order.

---

1.2 The Three Pillars of Civic Competence 🏛️
Civic education develops three interconnected domains:
1. Civic Knowledge 🧠: Understanding the structure of government, constitutional principles, fundamental rights, political history, and international relations.
2. Civic Skills 🛠️:
   - Intellectual Skills: Critical thinking, analyzing policy debates, discerning propaganda, and evaluating government performance.
   - Participatory Skills: Voting, public deliberation, peaceful protest, advocacy, and collaborative community problem-solving.
3. Civic Dispositions (Values) ❤️: Personal and public character traits necessary for a healthy democracy, including tolerance, civic courage, patriotism, respect for the rule of law, compromise, and social responsibility.

---

1.3 Distinguishing Morality, Ethics, and Law ⚖️
While often used interchangeably in everyday language, philosophy distinguishes these concepts:

• Morality: The actual social beliefs, customs, taboos, and standards of right and wrong upheld by an individual, community, or religious tradition.
• Ethics (Moral Philosophy): The systematic, critical, and rational philosophical study of moral principles. Ethics investigates *why* an action is good or bad and tests the logical validity of moral claims.
• Law: A formal body of codified rules enacted by state authority and enforced through coercive police and judicial power. An act may be legal but unethical (e.g., apartheid laws), or ethical but illegal (e.g., civil disobedience against totalitarian oppression).`
  },
  {
    id: 'mcie-ch2',
    courseId: 'mcie-1012',
    number: 2,
    title: 'Chapter 2: Approaches to Ethics and Moral Philosophy ⚖️',
    summary: 'Major normative ethical theories: Teleological/Consequentialist (Utilitarianism - Bentham & Mill), Deontological/Duty Ethics (Immanuel Kant\'s Categorical Imperative), Virtue Ethics (Aristotle), and non-normative meta-ethics.',
    readTimeMinutes: 25,
    keyFormulas: [
      'Utilitarianism (Consequentialism): An action is morally right if and only if it produces "the greatest happiness for the greatest number" (Utility Principle).',
      'Deontology (Kant\'s Duty Ethics): Actions are intrinsically right or wrong, regardless of consequences. Act only on maxims you can will to become universal laws (Categorical Imperative).',
      'Virtue Ethics (Aristotle): Moral goodness flows from an exemplary character; virtues lie in the "Golden Mean" between the vice of deficiency and the vice of excess.',
      'Respect for Persons Principle: "Treat humanity, whether in your own person or in the person of any other, never merely as a means to an end, but always as an end in itself."'
    ],
    content: `Chapter 2: Approaches to Ethics and Moral Philosophy ⚖️

2.1 Branches of Ethics 📚
• Normative Ethics: Formulates practical moral rules, standards, and principles to determine what makes actions right or wrong.
• Non-Normative (Meta-Ethics): Investigates the origin, meaning, and psychological nature of moral concepts (e.g., "What does the word \'good\' mean?").
• Applied Ethics: Resolves specific real-world controversies (medical ethics, business ethics, environmental ethics, and legal ethics).

---

2.2 Major Normative Ethical Theories 🌟

1. Teleological (Consequentialist) Ethics 🎯
Derived from Greek "telos" (end, purpose, goal). Argues that the moral rightness or wrongness of an act depends entirely on the goodness or badness of its consequences.
• Utilitarianism: Founded by Jeremy Bentham and expanded by John Stuart Mill.
  - The Principle of Utility: An action is right in proportion as it tends to promote happiness; wrong as it tends to produce the reverse of happiness.
  - Slogan: "The greatest happiness for the greatest number."
  - Bentham\'s Quantitative Hedonism: Measured pleasures strictly by intensity, duration, certainty, and extent.
  - Mill\'s Qualitative Utilitarianism: Distinguished higher intellectual/moral pleasures from lower bodily pleasures ("Better to be Socrates dissatisfied than a pig satisfied").

2. Deontological (Duty-Based) Ethics 📜
Derived from Greek "deon" (duty, obligation). Championed by German philosopher Immanuel Kant (1724–1804).
• Core Principle: Actions are inherently right or wrong in themselves, irrespective of their results or consequences. Morality is a matter of pure rational duty.
• The Categorical Imperative (Formulations):
  1. Universalizability: "Act only according to that maxim whereby you can at the same time will that it should become a universal law."
  2. Respect for Humanity: "Act in such a way that you treat humanity, whether in your own person or in the person of any other, never merely as a means to an end, but always at the same time as an end." (Humans possess intrinsic dignity and must never be exploited as tools).

3. Virtue Ethics (Aristotle) 🌿
Centered not on rules or consequences, but on the moral character of the person.
• Foundational Thinker: Aristotle (Nicomachean Ethics).
• Eudaimonia: The ultimate human goal is flourishing, true happiness, and living well through reasoned activity.
• The Doctrine of the Golden Mean: Virtue is a middle state between two extremes—a vice of deficiency and a vice of excess:
  - Courage is the mean between cowardice (deficiency) and rashness/foolhardiness (excess).
  - Modesty is the mean between shamelessness (deficiency) and bashfulness (excess).`
  },
  {
    id: 'mcie-ch3',
    courseId: 'mcie-1012',
    number: 3,
    title: 'Chapter 3: State, Government, and Citizenship 🌐',
    summary: 'The four essential elements of statehood, classical theories of state origin (Divine Right, Force, Social Contract - Hobbes, Locke, Rousseau), organs of government, systems of government, and acquisition/loss of citizenship.',
    readTimeMinutes: 25,
    keyFormulas: [
      'Four Elements of the State: Permanent Population + Defined Territory + Organized Government + Sovereignty (Supreme internal authority and external independence).',
      'Social Contract Theorists: Thomas Hobbes (Leviathan - absolute sovereign to escape chaotic state of nature) vs. John Locke (natural rights: life, liberty, estate; government by consent) vs. Jean-Jacques Rousseau (General Will).',
      'Acquisition of Citizenship: Jus Soli (Right of the soil / birthplace) vs. Jus Sanguinis (Right of blood / parentage) + Naturalization.'
    ],
    content: `Chapter 3: State, Government, and Citizenship 🌐

3.1 The Concept and Elements of the State 🏛️
A state is a politically organized community living under a single system of government. It possesses four indispensable attributes:
1. Defined Territory: A recognized physical space bounded by borders, including land, territorial waters, and airspace.
2. Permanent Population: A stable human community inhabiting the territory.
3. Organized Government: The institutional machinery and agency through which the will of the state is formulated, expressed, and executed.
4. Sovereignty: The supreme, absolute, and independent authority of the state:
   - Internal Sovereignty: Monopoly over legitimate physical force and ultimate law-making supremacy over all individuals within its borders.
   - External Sovereignty: Freedom from foreign intervention, recognized under international law.

---

3.2 Theories on the Origin of the State 📜

1. Divine Right Theory: The state is created by God, and rulers are ordained by divine authority, answerable only to God (historical monarchies).
2. Force Theory: The state emerged through violent conquest and subjugation of weaker groups by stronger ones.
3. Evolutionary (Patriarchal/Matriarchal) Theory: The state developed naturally from the expansion of the family, to clans, to tribes, and ultimately to states.
4. Social Contract Theory:
   - Thomas Hobbes (1588–1679): In the "state of nature", life was "solitary, poor, nasty, brutish, and short". Rational individuals surrendered their freedom to an absolute sovereign (*Leviathan*) in exchange for physical security and order.
   - John Locke (1632–1704): Humans possess inalienable Natural Rights to "life, liberty, and estate". Governments are created by social consent to protect these rights. If government fails, citizens possess a moral right to alter or overthrow it.
   - Jean-Jacques Rousseau (1712–1778): Sovereign power resides irrevocably in the "General Will" of the people (*Popular Sovereignty*).

---

3.3 Systems and Structures of Government 🏢

• Separation of Powers: Formulated by Baron de Montesquieu:
  1. Legislative Branch: Enacts laws (Parliament, Congress).
  2. Executive Branch: Enforces and implements laws (Prime Minister/President, Cabinet).
  3. Judicial Branch: Interprets laws and adjudicates legal controversies (Courts).

• Forms of State Organization:
  - Unitary State: Ultimate power is centralized in the national government (e.g., Britain, France, Kenya).
  - Federal State: Constitutional division of powers between a central federal government and regional state units (e.g., Ethiopia, USA, Nigeria, Germany).

---

3.4 Citizenship: Acquisition and Loss 🛂
Citizenship is the legal and political status of full membership in a state, conferring reciprocal rights, protections, and duties.

Modes of Acquiring Citizenship:
1. By Birth:
   - Jus Sanguinis (Right of Blood): Citizenship is inherited through the nationality of the parents (the primary rule in Ethiopia).
   - Jus Soli (Right of the Soil): Citizenship is acquired by virtue of being born on the territorial soil of the country (common in the Americas).
2. By Naturalization (Law): Legal acquisition by foreigners through marriage, prolonged legal residence, or special merit.

Modes of Losing Citizenship: Renunciation, deprivation (for treason/fraud), or substitution.`
  },
  {
    id: 'mcie-ch4',
    courseId: 'mcie-1012',
    number: 4,
    title: 'Chapter 4: Constitution, Constitutionalism, and Rule of Law 📜',
    summary: 'Definition, functions, and classifications of constitutions (written vs unwritten, rigid vs flexible); constitutionalism and supremacy of the constitution; historical evolution of Ethiopian constitutions (1931, 1955, 1987, 1995).',
    readTimeMinutes: 25,
    keyFormulas: [
      'Constitutional Supremacy: The Constitution is the supreme law of the land; any law or official act in contradiction with it is null and void.',
      'Constitutionalism = Constitution + Limitations on Government Power + Protection of Fundamental Freedoms.',
      'Ethiopian Constitutional Timeline: 1931 (Emperor Haile Selassie I, first written) ➔ 1955 (Revised Imperial) ➔ 1987 (PDRE socialist constitution) ➔ 1995 (FDRE democratic federal constitution).'
    ],
    content: `Chapter 4: Constitution, Constitutionalism, and Rule of Law 📜

4.1 The Concept of a Constitution 🏛️
A constitution is the fundamental, supreme legal and political charter of a state that defines the organization of government, allocates powers, limits authority, and enshrines the fundamental rights and freedoms of citizens.

Functions of a Constitution:
• Establishes legal and institutional legitimacy.
• Limits state authority and prevents tyranny.
• Codifies the basic distribution of powers between governmental branches.
• Guarantees fundamental human and democratic rights.

---

4.2 Classification of Constitutions 📑

1. Form / Codification:
• Written (Codified): Enacted into a single unified constitutional document (e.g., Ethiopia, USA).
• Unwritten (Uncodified): Derived from multiple sources including statutory acts, judicial precedents, and historical conventions (e.g., United Kingdom).

2. Amendment Procedure:
• Rigid Constitution: Requires a specialized, rigorous, and demanding amendment procedure (e.g., Ethiopian 1995 Constitution, requiring two-thirds majority in joint parliament sessions and approvals from regional councils).
• Flexible Constitution: Can be altered using the standard ordinary legislative process (e.g., the UK parliament).

---

4.3 Constitutionalism vs Rule of Law ⚖️
• Having a written constitution does not automatically mean a state possesses *constitutionalism*. Totalitarian dictatorships often possess elaborate constitutional texts.
• Constitutionalism: The political philosophy that government authority must be legally limited and subject to checks and balances, independent judicial review, and accountability.
• Rule of Law: All individuals, corporations, and state institutions are equally subject to publicly promulgated, independently adjudicated laws. No one is above the law.

---

4.4 Historical Development of Ethiopian Constitutions 🇪🇹

1. Traditional Pre-Constitutional Legal Documents:
• The Fetha Negest (Law of the Kings): 13th-century canon and civil legal code used in Christian imperial courts.
• Kibre Negest (Glory of Kings): The foundational text establishing the Solomonic lineage and divine right of Ethiopian emperors.

2. The 1931 Constitution:
• Promulgated on July 16, 1931, by Emperor Haile Selassie I.
• First written constitution in Ethiopian history.
• Primary aim: Centralized absolute imperial authority, unified the empire, and established a bicameral parliament (Senate and Chamber of Deputies).

3. The 1955 Revised Constitution:
• Enacted following the 1952 federation with Eritrea.
• Included a detailed chapter on civil rights, established an elected Chamber of Deputies, but reaffirmed the Emperor\'s divine sovereignty.

4. The 1987 PDRE Constitution:
• Enacted under the socialist military Derg regime led by Mengistu Haile Mariam.
• Established the People\'s Democratic Republic of Ethiopia (PDRE) as a Marxist-Leninist one-party socialist state led by the Workers\' Party of Ethiopia (WPE).

5. The 1995 FDRE Constitution:
• Ratified in December 1994 and came into full legal effect on August 21, 1995.
• Established the Federal Democratic Republic of Ethiopia (FDRE) based on multinational ethnic federalism, popular sovereignty, parliamentary democracy, and comprehensive human and democratic rights (incorporating international treaties under Article 9 and Article 13).`
  },
  {
    id: 'mcie-ch5',
    courseId: 'mcie-1012',
    number: 5,
    title: 'Chapter 5: Democracy, Good Governance, and Civil Society 🗳️',
    summary: 'Direct vs Representative democracy, fundamental principles of democratic systems, the eight hallmarks of good governance (UNESCAP), and the vital watchdog role of civil society organizations.',
    readTimeMinutes: 20,
    keyFormulas: [
      'Etymology: Greek "Demos" (the people) + "Kratos" (power/rule) = Rule by the people.',
      'Abraham Lincoln\'s Definition: "Government of the people, by the people, for the people."',
      'Good Governance Pillars: Rule of Law + Transparency + Responsiveness + Consensus Orientation + Equity + Efficiency + Accountability + Participation.'
    ],
    content: `Chapter 5: Democracy, Good Governance, and Civil Society 🗳️

5.1 Concepts and Models of Democracy 🏛️
Democracy is a system of government where supreme political authority is vested in the people and exercised directly by them or by their elected representatives.
• Origin: Greek "demos" (people) + "kratos" (rule).

Models of Democracy:
1. Direct (Pure) Democracy: Citizens gather directly in public assemblies to debate and vote on all legislation and public policies (e.g., ancient Athens, Swiss cantons).
2. Indirect (Representative) Democracy: Citizens elect political representatives through periodic, free, and competitive elections to make laws and administer the state on their behalf.

---

5.2 Fundamental Principles of Democracy 🌟
• Popular Sovereignty: The people are the ultimate source of all political authority.
• Majority Rule and Minority Rights: The majority decides public policies, but the fundamental rights of minorities must be strictly protected against the "tyranny of the majority".
• Free, Fair, and Regular Elections: Universal adult suffrage with secret balloting.
• Multi-Party System: Legitimate competition between diverse political parties.
• Independent Judiciary: Courts free from political interference.

---

5.3 Good Governance 💎
Good governance is the exercise of economic, political, and administrative authority to manage a country\'s affairs in a transparent, accountable, and equitable manner.

The Eight Characteristics of Good Governance:
1. Participation: Active involvement of all citizens, including marginalized groups.
2. Rule of Law: Fair legal frameworks enforced impartially.
3. Transparency: Decisions taken and enforced in accordance with open rules and accessible information.
4. Responsiveness: Institutions serve all stakeholders within a reasonable timeframe.
5. Consensus Orientation: Mediating diverse social interests to reach a broad consensus on what is in the best interest of the whole community.
6. Equity and Inclusiveness: Ensuring all members feel they have a stake in society.
7. Effectiveness and Efficiency: Sustainable use of resources producing optimal results.
8. Accountability: Governmental, private sector, and civil society actors must be answerable to the public.

---

5.4 The Role of Civil Society Organizations (CSOs) 🤝
Civil society encompasses non-governmental, voluntary associations operating in the public sphere between the household and the state (trade unions, human rights advocacy groups, women\'s associations, professional bodies).
• Functions: Monitoring state abuses, advancing human rights, promoting voter education, delivering humanitarian aid, and providing alternative policy solutions.`
  },
  {
    id: 'mcie-ch6',
    courseId: 'mcie-1012',
    number: 6,
    title: 'Chapter 6: Human Rights, Peace, and Conflict Transformation 🕊️',
    summary: 'Characteristics of human rights, the Three Generations of Human Rights (Karel Vasak), international human rights instruments (UDHR, ICCPR, ICESCR), Negative vs Positive Peace (Johan Galtung), and peaceful conflict resolution.',
    readTimeMinutes: 25,
    keyFormulas: [
      'Core Characteristics of Human Rights: Inherent (natural from birth) + Universal (applicable everywhere to all) + Inalienable (cannot be stripped) + Indivisible/Interdependent.',
      'Three Generations of Rights (Karel Vasak): 1st Gen: Civil & Political (Liberty) | 2nd Gen: Economic, Social & Cultural (Equality) | 3rd Gen: Solidarity/Collective Rights (Fraternity).',
      'Johan Galtung\'s Peace Typology: Negative Peace (absence of direct physical violence/war) vs. Positive Peace (absence of structural and cultural violence; presence of justice, equity, and human harmony).'
    ],
    content: `Chapter 6: Human Rights, Peace, and Conflict Transformation 🕊️

6.1 Nature and Characteristics of Human Rights 🌐
Human rights are basic entitlements and freedoms that belong to every person from birth simply by virtue of being human, grounded in universal human dignity.

Key Characteristics:
• Inherent: Not granted by governments; they belong naturally to every human.
• Universal: Belong to all human beings everywhere, regardless of race, gender, religion, or nationality.
• Inalienable: Cannot be legitimately taken away, surrendered, or transferred.
• Indivisible & Interdependent: Civil, political, economic, social, and cultural rights are co-equal and mutually reinforcing.

---

6.2 The Three Generations of Human Rights 📜
Formulated by legal scholar Karel Vasak in 1979, modeled on the French revolutionary ideals:

1. First-Generation (Civil and Political Rights - Liberty) 🗽
• Focus: Protecting individual freedom against state tyranny and interference (negative rights).
• Examples: Right to life, freedom of speech, freedom of religion, right to fair trial, voting rights.
• Foundational Treaty: International Covenant on Civil and Political Rights (ICCPR, 1966).

2. Second-Generation (Economic, Social, and Cultural Rights - Equality) 🏥
• Focus: Requiring positive state action and resource allocation to ensure human well-being (positive rights).
• Examples: Right to work, right to healthcare, right to education, right to adequate housing and food.
• Foundational Treaty: International Covenant on Economic, Social and Cultural Rights (ICESCR, 1966).

3. Third-Generation (Solidarity / Collective Rights - Fraternity) 🤝
• Focus: Group and collective rights of entire communities and peoples.
• Examples: Right to a healthy environment, right to peace, right to self-determination, right to sustainable economic development.

---

6.3 The International Bill of Human Rights 🌍
Comprises:
1. Universal Declaration of Human Rights (UDHR, December 10, 1948).
2. International Covenant on Civil and Political Rights (ICCPR, 1966).
3. International Covenant on Economic, Social and Cultural Rights (ICESCR, 1966).

---

6.4 Concepts of Peace and Conflict Transformation 🕊️
Renowned peace scholar Johan Galtung introduced the crucial distinction:

• Negative Peace: The mere absence of direct physical violence, armed conflict, or war. (A society under military dictatorship may experience negative peace while suffering severe oppression).
• Positive Peace: The presence of social justice, rule of law, equitable economic distribution, and the absence of structural and cultural violence. True lasting stability requires positive peace.`
  }
];
