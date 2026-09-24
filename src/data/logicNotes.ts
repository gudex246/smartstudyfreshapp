import { Chapter } from '../types';

export const LOGIC_MODULE_CHAPTERS: Chapter[] = [
  {
    id: 'logic-ch1',
    courseId: 'loct-1011',
    number: 1,
    title: 'Chapter 1: Logic and Philosophy',
    summary: 'Meaning & nature of philosophy, etymology (love of wisdom), basic features, core branches (Metaphysics, Epistemology, Axiology, Logic), and importance of learning philosophy.',
    readTimeMinutes: 14,
    keyFormulas: [
      'Etymology: Greek "philo" (love) + "sophia" (wisdom) = Love of wisdom (Pythagoras coined "philosopher")',
      'Socrates: "The unexamined life is not worth living" & "Wonder is the feeling of a philosopher"',
      'Dual Sides of Philosophy: Constructive side (formulating answers on reality/truth) & Critical side (rational criticism & evaluation)',
      '4 Core Branches: 1. Metaphysics (Reality), 2. Epistemology (Knowledge), 3. Axiology (Values: Ethics & Aesthetics), 4. Logic (Correct Reasoning)',
      'Metaphysics Aspects: Cosmological (universe origin), Theological (God/evil), Anthropological (mind-body/free will), Ontological (nature of existence)',
      'Epistemology Sources: Empiricism (senses), Rationalism (reason), Intuition, Revelation, Authority'
    ],
    content: `### Chapter 1: Logic and Philosophy

#### 1.1 Meaning and Nature of Philosophy
- **Etymology**: Derived from the Greek words **"philo"** (love) and **"sophia"** (wisdom) $\\rightarrow$ literally **"love of wisdom"**.
- **Historical Origin**: The ancient Greek thinker **Pythagoras** was the first to coin and use the word *"philosopher"* to designate someone with marked curiosity and wonder about the nature of existence.
- **Socrates on Wisdom**:
  - *"Wonder is the feeling of a philosopher, and philosophy begins in wonder."*
  - *"The unexamined life is not worth living."*
  - Philosophical wisdom is not mere technical proficiency or encyclopedic trivia; it is a **critical habit**, eternal vigilance about all claims, and reverence for truth.
- **Philosophy as an Activity**: Philosophy is not merely a static body of doctrines learned in schools; it is the **active enterprise of philosophizing**—grappling with fundamental problems, raising meaningful questions, and persistent analysis.
- **Dual Character of Philosophy**:
  - **Constructive Side**: Formulating rationally defensible answers to fundamental questions regarding reality, knowledge, and values.
  - **Critical Side**: Providing rigorous critique, logical clarification, and evaluation of existing assumptions and answers.

---

#### 1.2 Basic Features of Philosophy
1. **Informal Sense ("Having" a philosophy)**: A personal set of unexamined attitudes, opinions, and everyday outlooks on life and the universe.
2. **Formal Sense ("Doing" philosophy)**: The systematic process of actively reflecting on, criticizing, and testing our most deeply held beliefs.
3. **Holistic Approach**: Looks at reality and human experience as a unified, coherent whole, rather than the fragmented, specialized view of single disciplines.
4. **Logical Analysis of Language**: Clarifying meanings of concepts and stripping away verbal confusion and obscurity.
5. **Perennial Problems**: Deals with timeless questions of existence, truth, mind-body relation, morality, justice, and purpose.

---

#### 1.3 Core Branches of Philosophy
Philosophy consists of four primary branches:

##### 1. Metaphysics (Study of Ultimate Reality)
- Derived from Greek **"meta"** (beyond/after) and **"physika"** (physics) $\\rightarrow$ "those things after the physics" (termed *First Philosophy* by Aristotle).
- Studies the ultimate nature of existence, reality, being, mind, and God.
- **Four Subsets of Metaphysics**:
  - **Cosmological Aspect**: Origin, structure, and development of the universe as an orderly cosmos (accidental or designed? purposeful?).
  - **Theological Aspect**: Concepts of God, divine attributes, problem of evil, relation between God and creation.
  - **Anthropological Aspect**: Human nature, mind-body relationship, free will vs. determinism, soul and immortality.
  - **Ontological Aspect**: What does it mean for something to exist? Is ultimate reality material, spiritual, singular (monism), dual (dualism), or plural?

##### 2. Epistemology (Theory of Knowledge)
- Derived from Greek **"episteme"** (knowledge/understanding) and **"logos"** (study of).
- Investigates the origin, nature, scope, limits, and validity of human knowledge.
- **Epistemological Stances**:
  - *Skepticism*: Claims reliable, certain knowledge is impossible to attain (Gorgias: "Nothing exists; if it did, we could not know it").
  - *Agnosticism*: Profession of ignorance regarding God's existence.
  - *Relativism vs. Absolutism*: Whether truth is subjective/relative or objective/universal.
- **Five Sources of Knowledge**:
  - **Empiricism**: Knowledge acquired through sensory experience (immediate and universal, but susceptible to sensory illusions).
  - **Rationalism**: Reason, intellect, and formal logic as the primary source of knowledge (senses provide raw data; mind organizes them into certainty).
  - **Intuition**: Direct, subconscious apprehension or sudden flash of insight bypassing discursive reasoning.
  - **Revelation**: Transcendent, divine communication accepted on faith.
  - **Authority**: Knowledge accepted on the testimony of experts or tradition.

##### 3. Axiology (Theory of Value)
- Derived from Greek **"axios"** (value/worth) and **"logos"**.
- Three Branches:
  - **Ethics (Moral Philosophy)**: Principles governing right and wrong human conduct.
    - *Normative Ethics*: Formulating moral rules and theories (Consequentialism/Teleology, Deontology, Virtue Ethics).
    - *Meta-Ethics*: Investigating the technical meanings of ethical terms ("good", "right") and moral verification.
    - *Applied Ethics*: Applying ethical principles to concrete dilemmas (abortion, euthanasia, capital punishment).
  - **Aesthetics**: Philosophical study of art, beauty, sensory appreciation, and standards of taste.
  - **Social / Political Philosophy**: Studies societal organization, justice, legitimacy of the state, rights, and ideal governance.

##### 4. Logic (Science of Correct Reasoning)
- The branch that investigates the principles and methods used to distinguish correct (good) from incorrect (bad) reasoning.

---

#### 1.4 Importance of Learning Philosophy
- **Intellectual & Behavioral Independence**: Forming self-directed, autonomous beliefs rather than passively absorbing cultural dogma.
- **Reflective Self-Awareness**: Understanding one's own assumptions and intellectual identity.
- **Flexibility & Tolerance**: Cultivating an open mind and recognizing alternative viewpoints.
- **Dealing with Uncertainty (Bertrand Russell)**: Liberates the mind from dogmatic arrogance, keeps alive the sense of wonder, and broadens human thought beyond common-sense prejudices.`
  },
  {
    id: 'logic-ch2',
    courseId: 'loct-1011',
    number: 2,
    title: 'Chapter 2: Basic Concepts of Logic',
    summary: 'Definition of logic & arguments, premises and conclusions, indicator words, recognizing non-argumentative passages, deduction vs induction, validity, soundness, strength, and cogency.',
    readTimeMinutes: 18,
    keyFormulas: [
      'Argument: Group of statements with at least one premise and one and only one conclusion',
      'Statement: Declarative sentence having a truth-value (True or False)',
      'Premise: Claimed evidence/reason ➔ Conclusion: Claimed to follow from evidence',
      'Two Claims of Arguments: Factual claim (premises are true) & Inferential claim (premises support conclusion - most crucial)',
      'Deductive: Claims conclusion follows with strict necessity/certainty ➔ Evaluated by Validity & Soundness',
      'Sound Deductive Argument = Valid Argument + All True Premises',
      'Inductive: Claims conclusion follows with probability ➔ Evaluated by Strength & Cogency',
      'Cogent Inductive Argument = Strong Argument + All True Premises (and no suppressed evidence)'
    ],
    content: `### Chapter 2: Basic Concepts of Logic

#### 2.1 What is Logic and What is an Argument?
- **Logic**: The organized body of knowledge or philosophical science that evaluates arguments; it develops methods and principles to distinguish good from bad reasoning.
- **Argument**: A technical unit of reasoning consisting of a group of statements, one or more of which (**premises**) are claimed to provide support or evidence for another statement (**conclusion**).
  - An argument contains **at least one premise** and **one and only one conclusion**.
- **Statement (Proposition)**: A declarative sentence that has a truth-value (**Truth** or **Falsity**).
  - *Non-statements* (cannot form arguments): Questions, commands, requests, exclamations, proposals, and suggestions.
- **Premises vs. Conclusion**:
  - **Premise**: Statement setting forth the evidence, reasons, or grounds.
  - **Conclusion**: Statement claimed to follow from the alleged evidence.

---

#### 2.2 Indicator Words & Identifying Components
- **Conclusion Indicators**: *Therefore, thus, hence, consequently, so, accordingly, as a result, entails that, we may infer, it follows that, wherefore, whence*.
- **Premise Indicators**: *Because, since, for, given that, as indicated by, owing to, seeing that, inasmuch as, in that, for the reason that*.
- **Special Case ("For this reason")**: The premise comes *before* "for this reason," and the conclusion comes *after* it.
- **Unmarked Arguments**: When indicator words are absent, identify what the author is trying to prove (the main claim) $\\rightarrow$ that is the conclusion.

---

#### 2.3 Recognizing Argumentative vs. Non-Argumentative Passages
A passage contains an argument if and only if it makes:
1. **A Factual Claim**: Claims to present evidence/reasons.
2. **An Inferential Claim**: Claims that something follows from that alleged evidence (**the defining core of an argument**). Can be *explicit* (marked by indicators) or *implicit* (inferred from logical relationship).

##### Common Non-Argumentative Passages (Lack Inferential Claim):
1. **Warnings & Pieces of Advice**: Cautions against danger or recommendations without evidential proof.
2. **Statements of Belief or Opinion**: Expressions of personal conviction without supporting warrant.
3. **Loosely Associated Statements**: Statements sharing a common topic but lacking inferential connection.
4. **Reports**: Relaying news, historical facts, or statements about arguments without personal endorsement.
5. **Expository Passages**: Starts with a topic sentence and merely elaborates/fleshes it out (becomes an argument only if subsequent sentences *prove* the topic sentence).
6. **Illustrations**: Uses examples to clarify *how* something is done or what it means (becomes an argument from example if the examples serve to *prove* a contentious claim).
7. **Explanations**: Sheds light on an **accepted fact**.
   - **Explanandum**: Statement describing the accepted event.
   - **Explanans**: Statement(s) that purport to explain *why* it occurred.
   - *Contrast*: Arguments move from accepted premises to prove a conclusion; explanations take the event as accepted and move backward to the cause.
8. **Conditional Statements ("If A, then B")**:
   - Composed of **Antecedent** (if-clause) and **Consequent** (then-clause).
   - A single conditional statement is **NOT an argument** because neither antecedent nor consequent is asserted as true evidence.
   - Expresses **Sufficient Condition** (A guarantees B) and **Necessary Condition** (B is required for A to occur).
   - Can serve as components (premises or conclusions) of syllogistic arguments.

---

#### 2.4 Deductive vs. Inductive Arguments

| Feature | Deductive Argument | Inductive Argument |
| :--- | :--- | :--- |
| **Inferential Claim** | Conclusion claimed to follow with **strict certainty / necessity** | Conclusion claimed to follow with **probability** |
| **Impossibility Claim** | Impossible for premises to be true and conclusion false | Improbable for premises to be true and conclusion false |
| **Indicator Words** | *Certainly, definitely, absolutely, necessarily* | *Probably, likely, plausible, reasonable to conclude* |
| **Typical Forms** | Mathematics/geometry, definition, syllogisms (categorical, hypothetical, disjunctive) | Predictions, analogy, inductive generalizations, authority, signs, causal inferences |

##### Deductive Argument Forms:
- **Arguments Based on Mathematics**: Arithmetical/geometric computation (exception: statistical arguments are inductive).
- **Arguments from Definition**: Conclusion follows directly from the definition of a term in the premise (e.g., "Kebede is a bachelor; therefore, he is unmarried").
- **Categorical Syllogism**: Exactly two premises and one conclusion using "all", "no", or "some".
- **Hypothetical Syllogism**: Contains conditional (if-then) premise(s).
- **Disjunctive Syllogism**: Contains an "either... or..." premise.

##### Inductive Argument Forms:
- **Predictions**: Reasoning from past/present knowledge to relative future.
- **Argument from Analogy**: Inferring similarity in unknown properties based on similarities in known properties.
- **Inductive Generalization**: Inferring characteristics of an entire group from a sample.
- **Argument from Authority**: Concluding based on expert testimony or sworn witness.
- **Argument Based on Signs**: Inferring a situation from a symbolic sign (e.g., traffic signs).
- **Causal Inference**: Proceeding from cause to effect or effect to cause.

---

#### 2.5 Evaluating Arguments

##### A. Deductive Arguments: Validity and Soundness
- **Validity**: Evaluates the **inferential claim**.
  - **Valid Argument**: If all premises are assumed true, it is **impossible** for the conclusion to be false.
  - **Invalid Argument**: If all premises are assumed true, it is **possible** for the conclusion to be false.
  - *Crucial Rule*: A deductive argument with **True Premises and a False Conclusion is ALWAYS INVALID**.
- **Soundness**: Evaluates both inferential and factual claims.
  - **Sound Argument = Valid + All Actually True Premises**. (Guarantees a true conclusion).
  - **Unsound Argument**: Any deductive argument that is invalid, has at least one false premise, or both.

##### B. Inductive Arguments: Strength and Cogency
- **Strength**: Evaluates the probabilistic inferential claim.
  - **Strong Argument**: If premises are assumed true, it is **improbable** for the conclusion to be false (more than 50% likely).
  - **Weak Argument**: Even if premises are assumed true, the conclusion is not probable.
  - Admits of *degrees* (can be made stronger/weaker by adding evidence).
- **Cogency**: Evaluates inductive strength and factual accuracy.
  - **Cogent Argument = Strong + All Actually True Premises + Satisfies Total Evidence Requirement (no suppressed evidence)**.
  - **Uncogent Argument**: Any inductive argument that is weak, contains one or more false premises, or suppresses crucial evidence.`
  },
  {
    id: 'logic-ch3',
    courseId: 'loct-1011',
    number: 3,
    title: 'Chapter 3: Logic and Language',
    summary: 'Philosophy of language, cognitive vs emotive meanings, value claims, vagueness and ambiguity, verbal vs factual disputes, intension vs extension, types of definitions, definitional techniques, and 8 rules of lexical definitions.',
    readTimeMinutes: 16,
    keyFormulas: [
      'Language Functions in Logic: Cognitive meaning (conveys factual information) vs Emotive meaning (evokes feelings)',
      'Deficiencies: Vagueness (borderline cases, blurry meaning) vs Ambiguity (multiple distinct meanings)',
      'Disputes: Verbal dispute (ambiguity/vagueness of words) vs Factual dispute (disagreement on empirical facts)',
      'Terms: Proper names, common names, descriptive phrases. Intension (connotation/qualities) determines Extension (denotation/members)',
      '5 Types of Definitions: 1. Stipulative (assigns new meaning), 2. Lexical (dictionary usage), 3. Précising (reduces vagueness), 4. Theoretical (scientific/philosophical theory), 5. Persuasive (influences attitude)',
      'Definitional Techniques: Extensional (Ostensive, Enumerative, Subclass) vs Intensional (Synonymous, Etymological, Operational, Genus and Difference)',
      'Definition by Genus and Difference: Species = Difference + Genus (e.g., Ice = frozen [difference] water [genus])'
    ],
    content: `### Chapter 3: Logic and Language

#### 3.1 Functions of Language: Cognitive and Emotive Meanings
- **Cognitive Meaning**: Terminology that conveys objective information and makes verifiable truth claims (the primary focus of logic).
- **Emotive Meaning**: Terminology designed to express feelings or evoke emotional reactions in the audience.
- **Value Claims**: An assertion that something is good, bad, right, wrong, moral, or immoral. Emotive language often disguises unproven value claims as objective facts to bypass critical scrutiny.

---

#### 3.2 Deficiencies in Meaning: Vagueness and Ambiguity
- **Vagueness**: An expression has **borderline cases** where it is impossible to determine whether the term applies or not. Meaning is hazy, obscure, and exists on a continuous spectrum (e.g., *rich, poor, fresh, tall, normal*).
- **Ambiguity**: An expression can be interpreted as having **two or more clearly distinct, discrete meanings** in a context (e.g., *bank, right, sound, light*).
- **Forms of Disputes in Logic**:
  - **Verbal Disputes**: Apparent disagreements arising from linguistic confusion, vagueness, or ambiguous terminology (resolved by defining terms).
  - **Factual Disputes**: Genuine disagreements concerning empirical facts, events, or data.

---

#### 3.3 Intension and Extension of Terms
- **Term**: Any word or phrase capable of serving as the subject of a proposition (proper names, common nouns, and descriptive phrases). Non-terms include verbs, adverbs, prepositions, and conjunctions.
- **Intensional Meaning (Connotation / Sense)**: The set of qualities, properties, or attributes connoted by the term (logicians use *conventional connotation*).
- **Extensional Meaning (Denotation / Reference)**: The actual members or objects belonging to the class denoted by the term.
- **Core Rule: Intension Determines Extension**: Knowing the attributes (intension) dictates what entities qualify as members (extension).
  - *Empty Extension*: Terms having intension but zero real members in existence (e.g., *unicorn, dinosaur, current king of France*).
- **Order of Terms**:
  - *Increasing Intension*: Each term connotes more attributes (becomes more specific): *Animal $\\to$ Mammal $\\to$ Feline $\\to$ Tiger*.
  - *Increasing Extension*: Each term denotes a larger class: *Tiger $\\to$ Feline $\\to$ Mammal $\\to$ Animal*.

---

#### 3.4 Types and Purposes of Definitions
Every definition consists of:
- **Definiendum**: The term to be defined.
- **Definiens**: The word or phrase that does the defining.

##### Five Types of Definitions:
1. **Stipulative Definition**: Assigns a meaning to a word for the first time (coining new words, acronyms, or codes; e.g., *tigon, liger*). Neither true nor false.
2. **Lexical Definition**: Reports the meaning a word already possesses in conventional language (dictionary definitions). Can be evaluated as true or false.
3. **Précising Definition**: Reduces the vagueness of an existing term for specialized legal, medical, or technical contexts (e.g., defining "poor" as annual income $<\$4,000$).
4. **Theoretical Definition**: Characterizes an entity by connecting it to a comprehensive scientific or philosophical theory (e.g., *heat = kinetic energy of molecules*).
5. **Persuasive Definition**: Formulated using emotionally charged language to influence attitudes and generate favorable or unfavorable feelings.

---

#### 3.5 Definitional Techniques
1. **Extensional (Denotative) Techniques**:
   - *Demonstrative (Ostensive)*: Pointing directly at the object.
   - *Enumerative*: Naming individual members of the class (e.g., "Actor means Abebe Balicha, Samsom Taddesse...").
   - *Definition by Subclass*: Naming categories within the class (e.g., "Tree means oak, pine, elm...").
2. **Intensional (Connotative) Techniques**:
   - *Synonymous Definition*: Providing a single word with equivalent connotation.
   - *Etymological Definition*: Disclosing historical linguistic root and ancestral meaning.
   - *Operational Definition*: Specifying experimental procedures and operations to test applicability.
   - *Definition by Genus and Difference*: Combining a larger class (**genus**) with attributes distinguishing the subclass (**specific difference**). Formula: **Species = Difference + Genus**.

---

#### 3.6 Eight Rules for Lexical Definitions
1. Must conform to proper grammatical standards.
2. Must convey the essential meaning of the definiendum.
3. Must be neither too broad (includes non-members) nor too narrow (excludes genuine members).
4. Must avoid circularity (cannot use the definiendum or its root in the definiens).
5. Should not be negative when it can be affirmative.
6. Must avoid figurative, obscure, vague, or ambiguous language.
7. Must avoid affective/emotionally biased language.
8. Must indicate the context to which the definiens pertains.`
  },
  {
    id: 'logic-ch4',
    courseId: 'loct-1011',
    number: 4,
    title: 'Chapter 4: Basic Concepts of Critical Thinking',
    summary: 'Nature of critical thinking, John Dewey & Robert Ennis definitions, 8 intellectual standards, 5 principles of good arguments, 7 codes of intellectual conduct, barriers to critical thinking, and benefits in life.',
    readTimeMinutes: 16,
    keyFormulas: [
      'Critical Thinking: Disciplined, self-directed, rational, reflective thinking focused on deciding what to believe or do',
      '8 Intellectual Standards: Clarity (gateway), Precision, Accuracy, Relevance, Consistency, Logical Correctness, Completeness, Fairness',
      '5 Principles of Good Argument: Structural principle, Relevance, Acceptability, Sufficiency, Rebuttal principle',
      'Codes of Intellectual Conduct: Fallibility, Truth-Seeking, Clarity, Burden of Proof, Principle of Charity, Suspension of Judgment, Resolution',
      'Barriers to Critical Thinking: Egocentrism (self-interest & superiority bias), Sociocentrism (group bias & conformism), Unwarranted assumptions (stereotyping), Relativism (subjectivism & cultural relativism), Wishful thinking'
    ],
    content: `### Chapter 4: Basic Concepts of Critical Thinking

#### 4.1 Meaning & Definitions of Critical Thinking
- **General Definition**: The wide range of cognitive skills and intellectual dispositions needed to effectively identify, analyze, and evaluate arguments and truth claims.
- **Key Scholar Definitions**:
  - **John Dewey**: *"Active, persistent, and careful consideration of a belief or supposed form of knowledge in light of the grounds that support it and the further conclusions to which it tends."*
  - **Edward Glaser**: Combines attitude of thoughtfulness, knowledge of logical methods, and skill in application.
  - **Robert Ennis**: *"Reasonable, reflective thinking that is focused on deciding what to believe or do."*
  - **Richard Paul**: Thinking about your thinking (**meta-cognition**) to improve its quality by imposing intellectual standards.
  - **Michael Scriven**: Skilled and active interpretation and evaluation of communications and argumentation.
- **Criticocreative Thinking**: Critical thinking is not merely negative debunking; it requires **creative generation** of alternative perspectives, hypotheses, and solutions.

---

#### 4.2 The Eight Universal Intellectual Standards
1. **Clarity**: The **gateway standard**; if a statement is unclear, we cannot assess accuracy or relevance.
2. **Precision**: Demanding exactness, detail, and specific answers to specific questions.
3. **Accuracy**: Ensuring information is true, verified, and free from distortions ("garbage in, garbage out").
4. **Relevance**: Focusing only on evidence that logically bears upon the topic at hand.
5. **Consistency**:
   - *Logical Consistency*: Avoiding mutually contradictory beliefs.
   - *Practical Consistency*: Ensuring words and deeds align (avoiding hypocrisy and unconscious self-deception).
6. **Logical Correctness**: Drawing well-founded, valid conclusions that follow from verified premises.
7. **Completeness**: Preferring thorough, deep analysis over shallow, superficial treatment.
8. **Fairness**: Open-minded, impartial consideration of opposing views without self-serving bias.

---

#### 4.3 Codes of Intellectual Conduct
##### Principles of a Good Argument:
1. **Structural Principle**: Argument must be well-formed with mutually compatible premises and no circularity.
2. **Relevance Principle**: Premises must provide genuine reason to believe the conclusion.
3. **Acceptability Principle**: Reasons must be acceptable to a rational person in light of total evidence.
4. **Sufficiency Principle**: Evidence must be sufficient in weight and number to establish the conclusion.
5. **Rebuttal Principle**: Must anticipate and effectively refute the strongest counterarguments.

##### Principles of Critical Thinking:
1. **Fallibility Principle**: Acknowledging that your own initial beliefs may be flawed or mistaken.
2. **Truth-Seeking Principle**: Earnest, lifelong commitment to discover truth wherever the evidence leads.
3. **Clarity Principle**: Expressing ideas in clean, understandable language free of obscurity.
4. **Burden of Proof Principle**: The responsibility of providing evidence rests on the person who makes the claim. Shifting the burden commits the fallacy of appeal to ignorance.
5. **Principle of Charity**: Reconstructing an opponent’s argument in its **strongest, most plausible version** before evaluating it.
6. **Suspension of Judgment Principle**: Withholding judgment when evidence is insufficient or evenly balanced.
7. **Resolution Principle**: An issue is considered resolved when a position meets all good argument criteria.

---

#### 4.4 Traits of Critical vs. Uncritical Thinkers
- **Critical Thinkers**: Intellectually humble; welcome challenges; curious; base judgments on evidence; practice emotional restraint; think independently against groupthink.
- **Uncritical Thinkers**: Pretend omniscience; regard controversy as ego threats; impatient with complexity; follow gut reactions; conform blindly to crowd opinion.

---

#### 4.5 Major Barriers to Critical Thinking
1. **Egocentrism**: Self-centered thinking.
   - *Self-Interested Thinking*: Accepting beliefs simply because they benefit oneself.
   - *Superiority Bias (Illusory Superiority)*: Overrating one’s abilities, virtue, and intellect compared to others.
2. **Sociocentrism**: Group-centered thinking.
   - *Group Bias*: Viewing one's own tribe, religion, or nation as inherently superior.
   - *Conformism*: Unthinking surrender to group pressure or authority.
3. **Unwarranted Assumptions & Stereotyping**:
   - Taking claims for granted without evidence.
   - *Stereotype*: Hasty generalization assuming all members of a group share identical characteristics.
4. **Relativistic Thinking**:
   - *Subjectivism*: Believing truth is merely individual opinion ("true for me").
   - *Cultural Relativism*: Believing truth is decided by cultural consensus. (Self-defeating: makes moral progress and criticizing societal injustice impossible).
5. **Wishful Thinking**: Believing claims simply because one desires them to be true.`
  },
  {
    id: 'logic-ch5',
    courseId: 'loct-1011',
    number: 5,
    title: 'Chapter 5: Logical Reasoning and Fallacies',
    summary: 'Meaning of fallacies, formal vs informal fallacies, and detailed analysis of 22 informal fallacies across 5 major categories: Relevance, Weak Induction, Presumption, Ambiguity, and Grammatical Analogy.',
    readTimeMinutes: 18,
    keyFormulas: [
      'Fallacy: Defect in reasoning creating the illusion of a good argument other than merely false premises',
      'Formal Fallacies: Structural defect detected by mere inspection of form (Deductive only: e.g., Affirming the Consequent)',
      'Informal Fallacies: Substantive defect detected through content analysis (Deductive and Inductive)',
      'Fallacies of Relevance: Ad Baculum, Ad Misericordiam, Ad Populum, Ad Hominem (Abusive, Circumstantial, Tu Quoque), Accident, Straw Man, Missing the Point, Red Herring',
      'Fallacies of Weak Induction: Unqualified Authority, Appeal to Ignorance, Hasty Generalization, False Cause (Post Hoc, Non Causa, Oversimplified), Slippery Slope, Weak Analogy',
      'Fallacies of Presumption: Begging the Question, Complex Question, False Dichotomy, Suppressed Evidence',
      'Fallacies of Ambiguity & Analogy: Equivocation, Amphiboly, Composition (Parts ➔ Whole), Division (Whole ➔ Parts)'
    ],
    content: `### Chapter 5: Logical Reasoning and Fallacies

#### 5.1 What is a Fallacy? Formal vs. Informal Fallacies
- **Fallacy**: A defect in an argument arising from a flaw in reasoning or the creation of an illusion of validity/cogency, other than merely false premises.
- **Formal Fallacy**: Caused by a purely structural defect in a deductive argument; identifiable by inspecting the argument's symbolic form alone (e.g., *Affirming the Consequent*, *Denying the Antecedent*).
- **Informal Fallacy**: Caused by defects in the content, meaning, or language of statements; detectable only through content analysis.

---

#### 5.2 The Five Families of Informal Fallacies (22 Varieties)

##### Group 1: Fallacies of Relevance (Premises logically irrelevant to conclusion)
1. **Appeal to Force (*Argumentum ad Baculum*)**: Threatening physical or psychological harm to coerce agreement.
2. **Appeal to Pity (*Argumentum ad Misericordiam*)**: Evoking compassion or sympathy when it is irrelevant to the objective claim.
3. **Appeal to the People (*Argumentum ad Populum*)**: Appealing to popular desire for belonging, status, or security.
   - *Direct*: Stirring mob mentality in a crowd (demagoguery).
   - *Indirect*: *Bandwagon* ("everyone is doing it"), *Appeal to Vanity* (celebrity association), *Appeal to Snobbery* (elite status).
4. **Argument against the Person (*Argumentum ad Hominem*)**: Attacking the arguer instead of their argument.
   - *Ad Hominem Abusive*: Direct verbal insults against character or integrity.
   - *Ad Hominem Circumstantial*: Citing personal circumstances/vested interests to discredit the argument.
   - *Tu Quoque ("You too")*: Accusing the opponent of hypocrisy ("How can you tell me to stop smoking when you smoke?").
5. **Fallacy of Accident**: Misapplying a general rule to an atypical specific case that constitutes a legitimate exception.
6. **Straw Man Fallacy**: Distorting, exaggerating, or misrepresenting an opponent's argument to make it easier to knock down.
7. **Missing the Point (*Ignoratio Elenchi*)**: Premises logically lead to one specific conclusion, but the arguer draws a completely different, unexpected conclusion.
8. **Red Herring**: Diverting attention by introducing an irrelevant, flashy side topic and concluding on that new issue.

##### Group 2: Fallacies of Weak Induction (Premises fail to provide sufficient evidence)
9. **Appeal to Unqualified Authority (*Argumentum ad Verecundiam*)**: Citing an authority who lacks genuine expertise in the field, is biased, or when consensus is lacking.
10. **Appeal to Ignorance (*Argumentum ad Ignorantiam*)**: Claiming something is true because it hasn't been proven false, or false because it hasn't been proven true. *(Exceptions: thorough scientific searches by experts; legal presumption of innocence)*.
11. **Hasty Generalization (*Converse Accident*)**: Drawing a universal conclusion from an atypical, biased, or inadequately small sample.
12. **False Cause**: Erroneously linking two events as cause and effect.
    - *Post Hoc Ergo Propter Hoc*: Assuming X caused Y merely because X preceded Y in time.
    - *Non Causa Pro Causa*: Mistaking an effect for a cause, or fabricating an unrelated cause.
    - *Oversimplified Cause*: Selecting only one minor factor from a complex web of causes as the sole cause.
13. **Slippery Slope**: Claiming that an initial step will trigger an inevitable, uncontrollable chain reaction leading to disaster, without proving the links.
14. **Weak Analogy**: Drawing a conclusion based on a comparison between two things that lack relevant systematic similarities.

##### Group 3: Fallacies of Presumption (Premises presume what they purport to prove)
15. **Begging the Question (*Petitio Principii*)**: Circular reasoning where the arguer assumes the truth of the conclusion within the premises (leaving out a shaky key premise or restating premise in conclusion).
16. **Complex Question**: Asking a single question that contains multiple hidden, presupposed entrapments (e.g., "Have you stopped cheating on exams?").
17. **False Dichotomy**: Presenting two extreme options as exhaustive alternatives when more possibilities exist.
18. **Suppressed Evidence**: Concealing crucial evidence that outweighs the stated premises and demands a different conclusion.

##### Group 4: Fallacies of Ambiguity (Linguistic confusion)
19. **Equivocation**: Shifting between two different meanings of a word or phrase within the same argument.
20. **Amphiboly**: Misinterpreting a grammatically ambiguous sentence (dangling modifier, punctuation error) to draw a faulty conclusion.

##### Group 5: Fallacies of Grammatical Analogy (Faulty structural transference)
21. **Composition**: Erroneously transferring an attribute from individual parts onto the entire whole (e.g., "Each player is great, therefore the team is great").
22. **Division**: Erroneously transferring an attribute from the whole/class onto its individual parts (e.g., "The university is 100 years old, therefore each professor is 100 years old").`
  },
  {
    id: 'logic-ch6',
    courseId: 'loct-1011',
    number: 6,
    title: 'Chapter 6: Categorical Propositions',
    summary: 'Standard forms of categorical propositions (A, E, I, O), components (quantifier, subject, copula, predicate), quality, quantity, distribution, Venn diagrams, Modern (Boolean) vs Traditional (Aristotelian) Square of Opposition, and immediate inferences (conversion, obversion, contraposition).',
    readTimeMinutes: 18,
    keyFormulas: [
      'Standard Form Formula: Quantifier + Subject Term + Copula + Predicate Term',
      'The 4 Propositions: A (All S are P - Universal Affirmative), E (No S are P - Universal Negative), I (Some S are P - Particular Affirmative), O (Some S are not P - Particular Negative)',
      'Quantifier: All, No, Some (means "at least one"). Copula: are, are not',
      'Distribution Rule: A distributes S; E distributes S & P; I distributes None; O distributes P ("Unconditionally Distributed: A-S, E-Both, I-None, O-P")',
      'Modern (Boolean) Square: Only CONTRADICTORY holds (A-O, E-I have opposite truth values; all others undetermined)',
      'Traditional (Aristotelian) Square: Contradictory (opposite), Contrary (at least one false), Subcontrary (at least one true), Subalternation (truth down, falsity up)',
      'Logical Operations: Conversion (switch S & P - valid for E & I); Obversion (change quality, negate predicate - valid for ALL A, E, I, O); Contraposition (switch S & P, negate both - valid for A & O)'
    ],
    content: `### Chapter 6: Categorical Propositions

#### 6.1 Definition & Four Standard Forms
- **Categorical Proposition**: A statement that relates two classes (categories) denoted by a **Subject term (S)** and a **Predicate term (P)**, asserting whole or partial inclusion or exclusion.
- **Four Standard Forms**:
  - **A**: *All S are P* (Universal Affirmative - total inclusion)
  - **E**: *No S are P* (Universal Negative - total exclusion)
  - **I**: *Some S are P* (Particular Affirmative - partial inclusion)
  - **O**: *Some S are not P* (Particular Negative - partial exclusion)
- **Four Structural Components**:
  - **Quantifier**: *All*, *No*, or *Some* (indicates quantity; "Some" means *"at least one"*).
  - **Subject Term (S)**: Class of things being evaluated.
  - **Copula**: Sentential connector (*are*, *are not*).
  - **Predicate Term (P)**: Class to which subject is related.
  - **Standard Structure**: **Quantifier + Subject Term + Copula + Predicate Term**.

---

#### 6.2 Attributes: Quality, Quantity, and Distribution
- **Quality**:
  - *Affirmative*: Asserts class inclusion (**A** and **I**).
  - *Negative*: Asserts class exclusion (**E** and **O**).
- **Quantity**:
  - *Universal*: Refers to all members of the subject class (**A** and **E**).
  - *Particular*: Refers to at least one member of the subject class (**I** and **O**).
- **Distribution**: A term is **distributed** if the proposition refers to *every member* of the class denoted by that term.
  - **A** distributes **Subject only**.
  - **E** distributes **both Subject and Predicate**.
  - **I** distributes **neither Subject nor Predicate**.
  - **O** distributes **Predicate only**.
  - *Mnemonic*: **"Unconditionally: All distribute Subjects, Negatives distribute Predicates."**

---

#### 6.3 Venn Diagrams Representation
- Two overlapping circles represent S (left) and P (right).
  - **Shading an area** indicates that the area is **empty** (no members exist).
  - **Placing an "X"** indicates that **at least one member exists**.
- **A (*All S are P*)**: Shading area of S outside P.
- **E (*No S are P*)**: Shading intersection overlap area between S and P.
- **I (*Some S are P*)**: "X" in the intersection overlap between S and P.
- **O (*Some S are not P*)**: "X" in area of S outside P.

---

#### 6.4 Modern (Boolean) vs. Traditional (Aristotelian) Square of Opposition
- **Boolean Standpoint**: Universal propositions (**A** and **E**) have **no existential import** (they do not presuppose the actual existence of members).
  - **Only Contradictory relations hold**:
    - If **A** is True $\\rightarrow$ **O** is False; if **A** is False $\\rightarrow$ **O** is True.
    - If **E** is True $\\rightarrow$ **I** is False; if **E** is False $\\rightarrow$ **I** is True.
    - All other cross-inferences are **logically undetermined**.
- **Aristotelian Standpoint**: Universal statements about existing things possess **existential import**.
  - **Four Relations**:
    1. **Contradictory**: Always opposite truth values (A $\\leftrightarrow$ O; E $\\leftrightarrow$ I).
    2. **Contrary (A and E)**: **Cannot both be true** (at least one must be false). If one is true, other is false; if one is false, other is undetermined.
    3. **Subcontrary (I and O)**: **Cannot both be false** (at least one must be true). If one is false, other is true; if one is true, other is undetermined.
    4. **Subalternation (A to I, E to O)**: **Truth flows downward** (if A is true, I is true); **Falsity flows upward** (if I is false, A is false).

---

#### 6.5 Immediate Inferences: Conversion, Obversion, Contraposition

##### 1. Conversion
- **Operation**: Switch Subject and Predicate terms ($S \\leftrightarrow P$).
- **Valid for**: **E** and **I** propositions only (**No S are P $\\equiv$ No P are S**; **Some S are P $\\equiv$ Some P are S**).
- **Invalid for**: **A** and **O** (committing the formal fallacy of **Illicit Conversion**).

##### 2. Obversion
- **Operation**:
  1. Change the quality of the proposition (Affirmative $\\leftrightarrow$ Negative) without altering quantity.
  2. Replace the predicate term with its **term complement** ($P \\to \\text{non-}P$).
- **Valid for**: **ALL FOUR propositions (A, E, I, O)** with identical truth value:
  - **A**: *All S are P* $\\equiv$ *No S are non-P*
  - **E**: *No S are P* $\\equiv$ *All S are non-P*
  - **I**: *Some S are P* $\\equiv$ *Some S are not non-P*
  - **O**: *Some S are not P* $\\equiv$ *Some S are non-P*

##### 3. Contraposition
- **Operation**:
  1. Switch Subject and Predicate terms.
  2. Replace both terms with their term complements ($\\text{non-}P \\leftrightarrow \\text{non-}S$).
- **Valid for**: **A** and **O** propositions only (**All S are P $\\equiv$ All non-P are non-S**; **Some S are not P $\\equiv$ Some non-P are not non-S**).
- **Invalid for**: **E** and **I** (committing the formal fallacy of **Illicit Contraposition**).`
  }
];
