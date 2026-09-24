import { Chapter } from '../types';

export const PSYCHOLOGY_MODULE_CHAPTERS: Chapter[] = [
  {
    id: 'psyc-ch1',
    courseId: 'psyc-1011',
    number: 1,
    title: 'Unit 1: Essence of Psychology',
    summary: 'Definition, etymology, 4 goals of psychology, historical foundation (Wilhelm Wundt 1879), early schools vs modern perspectives, subfields, and research methods.',
    readTimeMinutes: 12,
    keyFormulas: [
      'Etymology: Greek "psyche" (mind/soul/spirit) + "logos" (study) = Study of mind/soul (Symbol: Ψ)',
      'Scientific Definition: The scientific study of human behavior (overt) and underlying mental processes (covert)',
      '4 Goals of Psychology: 1. Description (What?), 2. Explanation (Why?), 3. Prediction (When?), 4. Control/Influence (How to change?)',
      'Modern Perspectives: Psychodynamic, Behavioral, Humanistic, Cognitive, Biological, Socio-cultural',
      'Research Methods: Descriptive (Observation, Case study, Survey), Correlational (no causation), Experimental (Cause & Effect: IV vs DV)'
    ],
    content: `### Unit 1: Essence of Psychology

#### 1.1 Definition and Epistemology
- **Etymological Origin**: Derived from Greek words **'psyche'** (mind, soul, or spirit) and **'logos'** (study, knowledge, or discourse). Symbolized by the Greek letter **Ψ (psi)**.
- **Modern Scientific Definition**: **"Psychology is the scientific study of human behavior and the underlying mental processes."**
  - **Science**: Employs systematic observation, objective experimentation, and empirical data rather than casual common sense.
  - **Behavior**: All outward or **overt** observable actions and reactions (talking, facial expressions, bodily movement).
  - **Mental Processes**: Internal, **covert** activities of the mind (thinking, feeling, remembering, reasoning).

---

#### 1.2 The Four Goals of Psychology
1. **Description (What is happening?)**: Observing and recording behavior systematically without bias (identifying who, where, and under what circumstances).
2. **Explanation (Why is it happening?)**: Uncovering underlying causes to construct meaningful **theories** of behavior.
3. **Prediction (When will it occur in the future?)**: Determining the likelihood that a behavior will happen given specific conditions.
4. **Control / Influence (How can it be changed?)**: Modifying behavior from undesirable to desirable states, or holding extraneous variables constant in research.

---

#### 1.3 Historical Foundation & Modern Perspectives
- **Birth of Psychology**: Established in **1879** at the University of Leipzig, Germany, by **Wilhelm Wundt** ("Father of Modern Psychology"), who founded the first formal psychology laboratory using **objective introspection**.
- **Six Modern Perspectives**:
  1. **Psychodynamic Perspective (Sigmund Freud)**: Emphasizes the **unconscious mind**, repressed instinctual drives (libido/aggression), and early childhood experiences as shapers of adult personality ("archaeologists of the mind").
  2. **Behavioral Perspective (Watson, Skinner)**: The **"black box"** approach; focuses exclusively on observable behavior shaped by environmental stimuli, rewards, and punishments (ignoring internal mental processes).
  3. **Humanistic Perspective (Carl Rogers, Abraham Maslow)**: The **"third force"**; emphasizes free will, personal growth, human dignity, and the drive toward **self-actualization**.
  4. **Cognitive Perspective**: Investigates internal mental operations—how people reason, remember, store language, solve problems, and form mental representations.
  5. **Biological Perspective**: Explores how physical body systems—brain structure, electrical neural impulses, neurotransmitters, hormones, and evolutionary genetics—drive behavior.
  6. **Socio-cultural Perspective**: Studies how social context and cultural rules shape behavior; individuals are both the **products and producers** of culture ("like fish in water").

---

#### 1.4 Major Subfields of Psychology
- **Developmental**: Physical, cognitive, and social changes across the human lifespan.
- **Personality**: Enduring individual traits, characteristics, and moral development.
- **Social**: Group dynamics, conformity, attitudes, prejudice, and social perception.
- **Cross-Cultural**: Comparing psychological phenomena across diverse global cultures.
- **Industrial/Organizational (I/O)**: Applying psychology to improve workplace productivity and morale.
- **Educational**: Curriculum design, teaching effectiveness, and school learning environments.
- **Health**: Psychological factors in preventing and managing physical illness.
- **Clinical vs. Counseling**:
  - *Clinical*: Diagnosing and treating severe psychological disorders.
  - *Counseling*: Helping individuals manage everyday adjustment issues and less severe life difficulties.

---

#### 1.5 Research Methods & Scientific Steps
- **Three Research Designs**:
  - **Descriptive**:
    - *Naturalistic Observation*: Real-world observation (subject to observer effect & observer bias).
    - *Case Study*: In-depth investigation of a single individual (rich detail, but cannot generalize).
    - *Survey*: Standardized questionnaires to large representative samples (accesses covert beliefs).
  - **Correlational**: Measures strength and direction between two variables; **correlation does NOT imply causation**.
  - **Experimental**: The only method establishing **cause-and-effect**. Involves:
    - **Independent Variable (IV)**: Manipulated factor (the cause).
    - **Dependent Variable (DV)**: Measured outcome (the effect).
    - **Experimental Group** (receives manipulation) vs. **Control Group** (baseline comparison).
- **Five Steps in Scientific Research**:
  1. *Defining the Problem* $\\rightarrow$ 2. *Formulating the Hypothesis* $\\rightarrow$ 3. *Testing the Hypothesis* $\\rightarrow$ 4. *Drawing Conclusions* $\\rightarrow$ 5. *Reporting Results*`
  },
  {
    id: 'psyc-ch2',
    courseId: 'psyc-1011',
    number: 2,
    title: 'Unit 2: Learning and Theories of Learning',
    summary: 'Definition of learning, 4 core attributes, principles & factors influencing learning, classical conditioning (Pavlov), operant conditioning (Skinner), social cognitive theory (Bandura), and cognitive learning (latent & insight).',
    readTimeMinutes: 15,
    keyFormulas: [
      'Learning Definition: A relatively permanent change in behavior occurring as a result of experience or practice',
      'Classical Conditioning: UCS ➔ UCR; CS + UCS ➔ UCR; CS ➔ CR (Involuntary stimulus substitution)',
      'Operant Conditioning: Behavior = f(Consequences). Reinforcement strengthens; Punishment weakens',
      'Reinforcement Schedules: Continuous (fast learning) vs Intermittent/Partial (FR, VR, FI, VI - VR is most extinction-resistant)',
      'Observational Learning (Bandura): Attention ➔ Retention ➔ Motor Reproduction ➔ Motivation',
      'Cognitive Learning: Latent Learning (Tolman - cognitive maps) & Insight Learning (Köhler - "Aha!" experience)'
    ],
    content: `### Unit 2: Learning and Theories of Learning

#### 2.1 Definition & Attributes of Learning
- **Core Definition**: **"Learning is a relatively permanent change in behavior occurring as a result of experience or practice."**
- **Four Critical Attributes**:
  1. Learning involves a change in behavior.
  2. The change is **relatively permanent**.
  3. Excludes temporary alterations caused by fatigue, illness, drugs/intoxicants, or natural biological maturation.
  4. Requires **experience or practice**, and manifests in outward performance.

#### 2.2 Principles & Factors Influencing Learning
- **Key Principles**:
  - *Readiness*: Learners must be physically, mentally, and emotionally prepared.
  - *Exercise & Practice*: Meaningful repetition strengthens neural pathways.
  - *Effect*: Behaviors followed by pleasant sensations are strengthened; unpleasant outcomes weaken associations.
  - *Primacy & Recency*: First impressions create strong retention; most recently learned material is readily recalled.
  - *Intensity*: Learning from direct, vivid experiences is superior to passive substitutes.
- **Influencing Factors**: Motivation, neuromuscular maturation, health, psychological security, ambient study conditions, previous background knowledge, and **distributed practice** (superior to massed cramming).

---

#### 2.3 Behavioral Theories of Learning

##### A. Classical Conditioning (Ivan Pavlov)
- Involuntary emotional and physiological reflexes conditioned to a neutral stimulus.
- **Four Foundational Elements**:
  - **Unconditioned Stimulus (UCS)**: Naturally triggers an innate response without training (e.g., meat powder).
  - **Unconditioned Response (UCR)**: Automatic, unlearned reflex (e.g., salivation to meat).
  - **Conditioned Stimulus (CS)**: Previously neutral stimulus that, through repeated contiguous pairing, elicits a conditioned reflex (e.g., bell sound).
  - **Conditioned Response (CR)**: Learned response elicited by the CS alone (e.g., salivation to bell).
- **Core Principles**:
  - *Stimulus Generalization*: Responding to stimuli similar to the CS.
  - *Stimulus Discrimination*: Responding only to the specific conditioned stimulus.
  - *Extinction*: Gradual weakening and disappearance of the CR when the CS is repeatedly presented without the UCS.
  - *Spontaneous Recovery*: Sudden reappearance of an extinguished response following a rest period.

##### B. Operant / Instrumental Conditioning (B.F. Skinner)
- Voluntary actions strengthened or weakened by their environmental consequences.
- **Consequences**:
  - **Positive Reinforcement**: Presenting a desirable stimulus following a behavior $\\rightarrow$ increases behavior frequency.
  - **Negative Reinforcement**: Removing an unpleasant/aversive stimulus $\\rightarrow$ increases behavior frequency (e.g., fastening seatbelt to silence alarm; *escape* and *avoidance learning*).
  - **Positive Punishment**: Administering an aversive stimulus $\\rightarrow$ suppresses behavior frequency (e.g., reprimand).
  - **Negative Punishment**: Removing a pleasant privilege $\\rightarrow$ suppresses behavior frequency (e.g., confiscating phone).
- **Reinforcement Schedules**:
  - *Fixed-Ratio (FR)*: Reinforced after a set number of responses (post-reinforcement pause).
  - *Variable-Ratio (VR)*: Reinforced after an unpredictable average number of responses (highest steady response rate, extreme resistance to extinction; e.g., slot machines).
  - *Fixed-Interval (FI)*: Reinforced for the first response after a fixed time duration has elapsed.
  - *Variable-Interval (VI)*: Reinforced after varying, unpredictable time intervals.
- **Shaping**: Reinforcing **successive approximations** toward a complex target behavior.

---

#### 2.4 Social Learning Theory (Albert Bandura)
- Learning by observing models (**observational learning / modeling**).
- **Forms of Reinforcement**: Direct reinforcement, **Vicarious reinforcement** (seeing others rewarded), and **Self-reinforcement**.
- **Four Requisites for Modeling**:
  1. **Attention**: Actively observing the model.
  2. **Retention**: Committing the observed action to memory (mental rehearsal).
  3. **Motor Reproduction**: Physical developmental capability to replicate the behavior.
  4. **Motivation**: Possessing the desire and perceived reward to exhibit the behavior.

---

#### 2.5 Cognitive Learning Theory
- Focuses on internal mental representations, insight, and problem-solving:
  - **Latent Learning (Edward Tolman)**: Learning that occurs without explicit reinforcement and remains hidden until incentive is provided (demonstrated with rats forming *cognitive maps* in mazes).
  - **Insight Learning (Wolfgang Köhler)**: Sudden perceptual reorganization of a problem's elements leading to an instantaneous solution without trial-and-error (**"Aha!" experience**).`
  },
  {
    id: 'psyc-ch3',
    courseId: 'psyc-1011',
    number: 3,
    title: 'Unit 3: Memory and Forgetting',
    summary: 'Memory definition and 3 processes (encoding, storage, retrieval), Atkinson-Shiffrin 3-stage model (sensory, STM/working, LTM), serial position effect, theories of forgetting, and strategies for memory enhancement.',
    readTimeMinutes: 14,
    keyFormulas: [
      '3 Memory Processes: Encoding (input conversion) ➔ Storage (retention) ➔ Retrieval (access)',
      'Atkinson-Shiffrin Model: Sensory (<1-2s) ➔ Short-Term/Working (7±2 chunks, ~30s) ➔ Long-Term (unlimited, lifetime)',
      'Long-Term Memory: Declarative/Explicit (Semantic = facts; Episodic = events) vs Implicit (Procedural = skills)',
      'Serial Position Effect: U-shaped recall curve (Primacy effect = LTM storage; Recency effect = fresh in STM)',
      '5 Theories of Forgetting: 1. Decay, 2. Interference (Proactive & Retroactive), 3. Displacement, 4. Motivated (Repression), 5. Cue-Dependent'
    ],
    content: `### Unit 3: Memory and Forgetting

#### 3.1 Meaning and Three Processes of Memory
- **Memory Definition**: The active cognitive system that encodes, retains, and retrieves information across time, bridging past experiences with present actions.
- **The Three Core Processes**:
  1. **Encoding**: Transforming physical sensory input into a usable neural code.
  2. **Storage**: Maintaining encoded information in the nervous system over time (forming a memory trace or *engram*).
  3. **Retrieval**: Accessing stored information and bringing it into conscious awareness.

---

#### 3.2 Atkinson-Shiffrin Three-Stage Memory Model
1. **Sensory Memory (Sensory Register)**:
   - Initial entry buffer holding sensory impressions for fractions of a second.
   - *Iconic Memory* (visual): Lasts $\\approx 0.5 - 1$ second.
   - *Echoic Memory* (auditory): Lasts $\\approx 2 - 4$ seconds.
   - High capacity, raw unprocessed sensory details; fades rapidly without selective attention.
2. **Short-Term Memory (STM) / Working Memory**:
   - The active conscious workspace.
   - **Capacity**: George Miller’s **"Magic Number $7 \\pm 2$"** chunks of information.
   - **Duration**: $\\approx 20 - 30$ seconds without rehearsal.
   - Can be prolonged via **Maintenance Rehearsal**; expanded via **Chunking** (grouping isolated bits into meaningful units).
3. **Long-Term Memory (LTM)**:
   - Relatively permanent storehouse with virtually **unlimited capacity** and indefinite duration.
   - **Subsystems of LTM**:
     - **Declarative / Explicit Memory** (conscious, verbally recallable):
       - *Semantic Memory*: Universal facts, concepts, definitions, logic, and mathematics.
       - *Episodic Memory*: Personal autobiographical life experiences and specific chronological episodes.
     - **Non-Declarative / Implicit Memory** (unconscious motor skills & conditioned habits):
       - *Procedural Memory*: Motor skills, habits, and procedures ("how-to" knowledge like swimming or typing).

---

#### 3.3 The Serial Position Effect
- When recalling an unorganized list of items immediately, memory follows a distinct **U-shaped curve**:
  - **Primacy Effect**: Superior recall of items at the **beginning** of the list (items receive undivided attention and transfer to LTM).
  - **Recency Effect**: Superior recall of items at the **end** of the list (items are still fresh in working STM).
  - Items in the middle suffer highest forgetting due to STM crowding.

---

#### 3.4 Forgetting and Theories of Forgetting
- **Hermann Ebbinghaus**: The first experimental study of forgetting using nonsense syllables (*FIW, BOZ*). His **Forgetting Curve** shows forgetting occurs **most rapidly in the first hours** (especially hour 1) and then gradually plateaus.
- **Five Theories of Forgetting**:
  1. **Decay Theory**: Physical memory traces (*engrams*) fade away passively over time if not accessed.
  2. **Interference Theory**:
     - *Proactive Interference*: Previously learned older material disrupts recall of newly learned information.
     - *Retroactive Interference*: Newly acquired information disrupts recall of previously learned older information.
  3. **Displacement Theory**: Incoming new items push out older items from limited STM storage ($7 \\pm 2$).
  4. **Motivated Forgetting (Freudian Repression)**: Pushing traumatic, anxiety-provoking thoughts into the unconscious to protect the ego.
  5. **Cue-Dependent Forgetting**: Failure to retrieve information due to absence of effective retrieval triggers (involves *context-dependent* and *state-dependent* memory).

---

#### 3.5 Memory Enhancement Strategies
- **Elaborative Rehearsal**: Connecting new concepts with existing long-term memories.
- **Overlearning**: Continuing practice well beyond initial mastery.
- **Spaced Practice**: Distributed learning sessions with adequate sleep and rest.`
  },
  {
    id: 'psyc-ch4',
    courseId: 'psyc-1011',
    number: 4,
    title: 'Unit 4: Motivation and Emotions',
    summary: 'Nature and types of motivation (intrinsic vs extrinsic), theories of motivation (instinct, drive-reduction, homeostasis, arousal, incentive, cognitive, Maslow’s hierarchy), conflict of motives, and theories of emotion (James-Lange, Cannon-Bard, Schachter-Singer).',
    readTimeMinutes: 13,
    keyFormulas: [
      'Motivation: Latin "movere" (to move) - initiates, directs, and sustains goal-oriented activity',
      'Types: Intrinsic (internal satisfaction) vs Extrinsic (external rewards/grades/money)',
      'Drive-Reduction: Need (biological deficit) ➔ Drive (tension) ➔ Action ➔ Homeostasis restored',
      'Maslow\'s Hierarchy (Bottom to Top): Physiological ➔ Safety ➔ Love/Belonging ➔ Esteem ➔ Self-Actualization',
      'Conflicts of Motives: Approach-Approach (++), Avoidance-Avoidance (--), Approach-Avoidance (+-), Multiple Approach-Avoidance',
      'Theories of Emotion: James-Lange (Arousal ➔ Emotion); Cannon-Bard (Arousal & Emotion simultaneous); Schachter-Singer (Arousal + Cognitive Appraisal ➔ Emotion)'
    ],
    content: `### Unit 4: Motivation and Emotions

#### 4.1 Motivation: Meaning and Types
- **Definition**: Derived from Latin **'movere'** (to move). Motivation is the internal force that activates, directs, and sustains goal-directed behavior to satisfy biological or psychological needs.
- **Two Primary Types**:
  - **Intrinsic Motivation**: Engaging in an activity purely for its inherent enjoyment, interest, or personal fulfillment.
  - **Extrinsic Motivation**: Performing an action to attain tangible external incentives (money, grades, praise, awards) or avoid punishment.

---

#### 4.2 Major Theories of Motivation
1. **Instinct Approaches**: Inborn, biologically pre-programmed behavioral patterns shared across a species (e.g., flight, maternal instinct).
2. **Drive-Reduction Theory (Clark Hull)**:
   - **Need**: A state of biological deprivation (food, water).
   - **Drive**: Unpleasant internal physiological tension that energizes behavior to reduce the need.
   - **Homeostasis**: The body's biological thermostat maintaining a balanced physiological equilibrium.
   - *Primary Drives* (survival: hunger, thirst) vs. *Secondary Drives* (learned: money, status).
3. **Arousal Approaches**: Individuals seek to maintain an **optimal level of physiological excitement/stimulation** (explaining curiosity and sensation-seeking).
4. **Incentive Theory**: Focuses on the external **"pull"** of rewarding stimuli (grades, food presentation) complementing the internal "push" of drives.
5. **Cognitive Approaches**: Emphasizes the role of mental thoughts, personal expectations, beliefs, and attributions of control.
6. **Humanistic Approach (Abraham Maslow's Hierarchy of Needs)**:
   - Lower survival needs must be satisfied before higher psychological needs emerge:
     1. **Physiological Needs**: Air, food, water, sleep, shelter.
     2. **Safety Needs**: Security, protection, stability, order.
     3. **Love and Belongingness Needs**: Affiliation, friendship, acceptance, intimacy.
     4. **Esteem Needs**: Self-respect, achievement, competence, reputation, and status.
     5. **Self-Actualization**: Fulfilling one’s highest creative potential and becoming all that one is capable of being.

---

#### 4.3 Conflicts of Motives
1. **Approach-Approach Conflict**: Choosing between **two equally desirable** alternatives (e.g., choosing between two dream vacations).
2. **Avoidance-Avoidance Conflict**: Choosing between **two equally undesirable** alternatives (e.g., undergoing painful dental surgery vs. suffering chronic toothache).
3. **Approach-Avoidance Conflict**: Facing a single goal that has **both positive and negative** aspects (e.g., accepting a prestigious job that requires moving away from family).
4. **Multiple Approach-Avoidance Conflict**: Choosing between two or more options, each possessing multiple pros and cons.

---

#### 4.4 Emotions: Definition, Components & Theories
- **Definition**: The "feeling" aspect of consciousness involving physiological arousal, expressive behavior, and subjective cognitive interpretation.
- **Three Elements**:
  - *Physiological Arousal*: Autonomic sympathetic nervous system activation (elevated heart rate, adrenaline, dilated pupils).
  - *Expressive Behavior*: Outward body language, postures, gestures, and facial expressions.
  - *Subjective Cognitive Experience*: Labeling and interpreting the inner feeling.
- **Theories of Emotion**:
  - **James-Lange Theory**: Physiological arousal precedes the emotional experience (**"We feel sorry because we cry, angry because we strike, afraid because we tremble"**).
  - **Cannon-Bard Theory**: The thalamus simultaneously sends sensory signals to the cerebral cortex (subjective emotion) and the autonomic nervous system (bodily arousal) at the exact same time.
  - **Schachter-Singer Two-Factor (Cognitive Arousal) Theory**: Emotion requires both **physiological arousal** and a **cognitive interpretation/labeling** of that arousal based on environmental cues.`
  },
  {
    id: 'psyc-ch5',
    courseId: 'psyc-1011',
    number: 5,
    title: 'Unit 5: Personality',
    summary: 'Meaning of personality, distinction from temperament & character, Freud’s psychoanalytic structure (Id, Ego, Superego), defense mechanisms, trait theory (The Big Five / OCEAN), and Carl Rogers\' humanistic self-theory.',
    readTimeMinutes: 13,
    keyFormulas: [
      'Personality: Latin "persona" (mask) - unique pattern of enduring thoughts, feelings, and actions',
      'Freud\'s Tripartite Structure: Id (Pleasure principle), Ego (Reality principle), Superego (Morality principle / conscience & ego-ideal)',
      'Ego Defense Mechanisms: Repression, Denial, Regression, Rationalization, Displacement, Projection, Reaction Formation, Sublimation',
      'The Big Five Traits (OCEAN): Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism',
      'Carl Rogers: Self-concept (Real Self vs Ideal Self congruence), Unconditional vs Conditional Positive Regard'
    ],
    content: `### Unit 5: Personality

#### 5.1 Meaning of Personality
- **Etymology**: Derived from the Latin **'persona'**, the theatrical mask worn by ancient actors.
- **Definition**: **"The unique, relatively enduring pattern of psychological thoughts, emotions, and behaviors that characterizes an individual across time and situations."**
- **Important Distinctions**:
  - *Personality*: Comprehensive set of enduring traits and behaviors.
  - *Character*: Moral and ethical value judgments about a person.
  - *Temperament*: Inborn, biologically rooted emotional reactivity and adaptability present from infancy.

---

#### 5.2 The Psychoanalytic Theory (Sigmund Freud)
- **Tripartite Structure of Personality**:
  - **The Id (Pleasure Principle)**: Primitive, unconscious, instinctual reservoir of psychic energy (**libido**). Demands immediate gratification regardless of consequences (**"If it feels good, do it"**).
  - **The Ego (Reality Principle)**: The rational, realistic, executive mediator between id desires and societal constraints (**"Do it only if you can get away with it"**).
  - **The Superego (Moral Center)**: Develops through internalizing societal values from parents. Consists of:
    - *The Conscience*: Produces guilt and moral remorse when standards are violated.
    - *The Ego-Ideal*: Standards of excellence that produce pride when achieved.
- **Psychological Defense Mechanisms**:
  Unconscious strategies employed by the ego to reduce anxiety caused by id-superego conflict:
  1. **Repression**: Involuntary banishment of threatening thoughts into the unconscious.
  2. **Denial**: Outright refusal to acknowledge an obvious, threatening reality.
  3. **Regression**: Reverting to an earlier, immature developmental stage during stress (e.g., thumb-sucking).
  4. **Rationalization**: Formulating socially acceptable excuses to justify inappropriate behavior.
  5. **Displacement**: Redirecting emotional impulses from a threatening target to a safer substitute (e.g., yelling at your child after being reprimanded by your boss).
  6. **Projection**: Attributing one's own unacceptable impulses onto others.
  7. **Reaction Formation**: Behaving in a manner directly opposite to one's genuine, unconscious impulses.
  8. **Sublimation**: Channeling unacceptable aggressive or sexual urges into socially constructive outlets (e.g., sports, art).

---

#### 5.3 Trait Theories of Personality & The Big Five (OCEAN)
- Traits are stable, enduring personal dimensions that predict behavior across situations.
- **The Five-Factor Model (OCEAN)**:
  - **O - Openness to Experience**: Imaginative, intellectually curious, artistic vs. conventional, resistant to change.
  - **C - Conscientiousness**: Organized, dependable, self-disciplined, punctual vs. careless, disorderly.
  - **E - Extraversion**: Outgoing, sociable, enthusiastic vs. introverted, solitary, reserved.
  - **A - Agreeableness**: Empathetic, cooperative, trusting, gentle vs. irritable, competitive, hostile.
  - **N - Neuroticism**: Emotionally volatile, prone to anxiety, moodiness vs. calm, emotionally resilient.

---

#### 5.4 Humanistic Theory of Personality (Carl Rogers)
- Rejects psychoanalytic determinism; emphasizes innate goodness and the **self-actualizing tendency**.
- **Self-Concept Components**:
  - **Real Self**: Our actual perception of our characteristics, abilities, and traits.
  - **Ideal Self**: Who we aspire or feel we ought to be.
  - *Congruence*: Close alignment between real and ideal self $\\rightarrow$ psychological harmony and high self-worth.
  - *Incongruence*: Severe mismatch between real and ideal self $\\rightarrow$ anxiety, defensive behavior, neurosis.
- **Positive Regard**:
  - *Unconditional Positive Regard*: Warmth, love, and acceptance given with **no strings attached**; essential for becoming a **fully functioning person**.
  - *Conditional Positive Regard*: Love and respect granted only when conforming to others' rigid expectations.`
  },
  {
    id: 'psyc-ch6',
    courseId: 'psyc-1011',
    number: 6,
    title: 'Unit 6: Psychological Disorders and Treatment Techniques',
    summary: 'Criteria of abnormality (abnormality, maladaptiveness, personal distress), theoretical causes, major disorders (mood, anxiety, personality), and treatment techniques/modalities.',
    readTimeMinutes: 14,
    keyFormulas: [
      'Criteria of Abnormality: 1. Deviation from statistical/cultural norms, 2. Maladaptiveness (functional impairment), 3. Personal distress',
      'Causes: Biological (neurotransmitters/dopamine), Psychoanalytic (ego conflict), Behavioral (learned habits), Cognitive (faulty schemas)',
      'Major Disorders: Mood (Depression, Mania, Bipolar), Anxiety (GAD, Panic, Phobias, OCD, PTSD), Personality (Paranoid, Antisocial)',
      'Psychotherapy Branches: Cognitive (restructuring thoughts - best for depression), Behavioral (desensitization - best for phobias), Psychodynamic (unconscious insights), Eclectic/Integrationist',
      'Treatment Modalities: Individual, Group (peer validation), Couples & Family'
    ],
    content: `### Unit 6: Psychological Disorders and Treatment Techniques

#### 6.1 Defining Psychological Disorders & Criteria
- **Definition**: A pattern of behavioral, cognitive, or emotional symptoms that causes significant distress or impairs daily functioning.
- **Three Diagnostic Criteria**:
  1. **Abnormality (Deviance)**: Behaviors that depart significantly from cultural norms or statistical averages (must be evaluated in cultural context).
  2. **Maladaptiveness**: Actions that significantly disrupt academic, social, personal, or occupational functioning.
  3. **Personal Distress**: Subjective inner turmoil, profound suffering, anxiety, or despair experienced by the individual.

---

#### 6.2 Perspectives on Etiology (Causes)
- **Biological Perspective**: Genetic vulnerabilities, structural brain abnormalities, and chemical neurotransmitter dysregulations (e.g., elevated dopamine in schizophrenia; serotonin deficiencies in depression).
- **Psychoanalytic Perspective**: Failure of the ego to manage intense conflict between id impulses and superego morality, often tracing back to unresolved childhood trauma.
- **Behavioral Perspective**: Maladaptive behaviors are learned responses acquired through conditioning and environmental reinforcement.
- **Cognitive Perspective**: Mental disorders stem from irrational thought patterns, negative self-talk, cognitive distortions, and maladaptive belief systems.

---

#### 6.3 Major Categories of Psychological Disorders
1. **Mood Disorders**:
   - *Major Depressive Disorder*: Persistent despair, lethargy, loss of interest, and feelings of worthlessness.
   - *Bipolar Disorder*: Extreme mood swings alternating between debilitating depression and euphoric **mania** (grandiosity, hyperactive racing thoughts).
   - *Dysthymia & Cyclothymia*: Chronic, milder variations of depression and bipolar mood fluctuations.
2. **Anxiety Disorders**:
   - Severe, excessive fear and nervousness out of proportion to real environmental threat.
   - *Generalized Anxiety Disorder (GAD)*: Chronic, free-floating worry lasting at least 6 months.
   - *Panic Disorder*: Sudden, recurrent episodes of intense terror, heart palpitations, and shortness of breath.
   - *Phobias*: Intense, irrational fears of specific objects or situations (e.g., Agoraphobia, Social Phobia).
   - *Obsessive-Compulsive Disorder (OCD)*: Intrusive recurrent thoughts (*obsessions*) paired with repetitive ritualistic behaviors (*compulsions*).
   - *Post-Traumatic Stress Disorder (PTSD)*: Flashbacks, hyperarousal, and emotional numbness following severe trauma.
3. **Personality Disorders**:
   - Rigid, inflexible, deeply ingrained maladaptive traits (e.g., *Paranoid*, *Schizoid*, *Antisocial Personality Disorder*).

---

#### 6.4 Psychotherapy Approaches and Modalities
- **Core Elements of Psychotherapy**:
  - Warm, non-judgmental therapeutic alliance.
  - Empathetic understanding.
  - Mutually agreed-upon treatment objectives.
- **Main Treatment Approaches**:
  - **Cognitive Therapy**: Identifies and modifies irrational, catastrophic cognitive schemas (proven highly effective for depression).
  - **Behavioral Therapy**: Applies conditioning principles (systematic desensitization, exposure therapy) to extinguish fears (proven highly effective for phobias).
  - **Psychodynamic Therapy**: Fosters insight into unconscious childhood dynamics and defenses.
  - **Eclectic / Integrationist Approach**: Combines methods tailored to the patient's individual diagnosis.
- **Treatment Modalities**:
  - *Individual Therapy*: Deep one-on-one personalized clinical focus.
  - *Group Therapy*: Shared peer support, overcoming isolation, vicarious learning.
  - *Couples & Family Therapy*: Resolving relationship dynamics and systemic communication breakdowns.`
  },
  {
    id: 'psyc-ch7',
    courseId: 'psyc-1011',
    number: 7,
    title: 'Unit 7: Introduction to Life Skills',
    summary: 'Conceptual definition of life skills (WHO & UNICEF), core features, 10 primary life skill components, and personal/social goals.',
    readTimeMinutes: 10,
    keyFormulas: [
      'WHO Definition: Abilities for adaptive and positive behavior that enable individuals to deal effectively with everyday demands and challenges',
      'UNICEF Definition: Behavioral change approach designed to balance knowledge, attitude, and skills',
      '10 Core Components: Critical thinking, Self-confidence, Self-awareness, Self-esteem, Decision making, Interpersonal relations, Reflective communication, Peer resistance, Rights & duties, Problem solving',
      'Primary Goal: Harmonious living, self-protection, reduced risky behaviors, academic & career success'
    ],
    content: `### Unit 7: Introduction to Life Skills

#### 7.1 Nature and Definitions of Life Skills
- **WHO Definition**: **"Abilities for adaptive and positive behavior that enable individuals to deal effectively with the demands and challenges of everyday life."**
  - *Adaptive*: Flexibility to adjust to changing circumstances.
  - *Positive Behavior*: Forward-looking approach to challenges.
- **UNICEF Definition**: A behavioral development and modification approach designed to synthesize and balance three domains: **knowledge**, **attitudes**, and **skills**.
- **Core Premise**: Academic excellence alone is insufficient for successful living; psychosocial competencies empower youth to navigate modern social, emotional, and occupational hurdles.

---

#### 7.2 Ten Core Components of Life Skills
1. **Critical Thinking**: Analyzing arguments, identifying biases, and making reasoned judgments.
2. **Self-Awareness**: Understanding one's own character, strengths, weaknesses, desires, and dislikes.
3. **Self-Esteem**: Cognitive and emotional self-evaluation of personal worth and competence.
4. **Self-Confidence**: Trust in one’s own capacities to successfully perform tasks and face challenges.
5. **Decision-Making**: Formulating and choosing constructive alternatives based on objective evaluation.
6. **Problem-Solving**: Step-by-step resolution of discrepancies between an actual state and a desired goal.
7. **Interpersonal Relationships**: Establishing, nurturing, and maintaining positive social bonds.
8. **Reflective Communication**: Attentive verbal and non-verbal exchange with active listening.
9. **Peer Pressure Resistance**: Resisting harmful social coercion while preserving personal integrity.
10. **Knowing Rights and Duties**: Understanding legal, moral, and social obligations and freedoms.

---

#### 7.3 Goals and Applications of Life Skills
- **Personal and Academic Goals**:
  - Enhancing classroom behavior, learning autonomy, and goal attainment.
  - Fostering emotional resilience, anxiety control, and positive self-image.
- **Social and Health Goals**:
  - Preventing risky adolescent behaviors (substance abuse, violence, delinquency, school dropout).
  - Promoting peaceful conflict resolution, empathy, and social cooperation.`
  },
  {
    id: 'psyc-ch8',
    courseId: 'psyc-1011',
    number: 8,
    title: 'Unit 8: Intra-Personal and Interpersonal Skills',
    summary: 'Self-concept & self-awareness, self-esteem vs self-confidence, self-control, anger management, emotional intelligence (5 domains), stress & coping (problem-focused vs emotion-focused), resilience, critical vs creative thinking, and 7 steps of problem solving.',
    readTimeMinutes: 16,
    keyFormulas: [
      'Self-Concept vs Self-Awareness: Self-concept is the multidimensional cognitive structure; Self-awareness is active monitoring of thoughts/feelings',
      'Self-Confidence (trust in known ability) vs Courage (action in the face of fear/unknown)',
      'Emotional Intelligence Domains: Self-Awareness, Self-Regulation, Motivation, Empathy/Social Awareness, Social Skills',
      'Stress Coping: Problem-Focused (change stressor directly) vs Emotion-Focused (regulate emotional reaction)',
      'Resilience (APA): Bouncing back from adversity, trauma, or significant stress',
      'Thinking Styles: Critical (analytic, convergent, vertical) vs Creative (generative, divergent, lateral)',
      'Problem Solving: 1. Recognize ➔ 2. Define ➔ 3. Strategy ➔ 4. Organize info ➔ 5. Allocate resources ➔ 6. Monitor ➔ 7. Evaluate'
    ],
    content: `### Unit 8: Intra-Personal and Interpersonal Skills

#### 8.1 Self-Concept and Self-Awareness
- **Self-Concept**: The multidimensional totality of beliefs, evaluations, and schemas an individual holds about their physical, social, and moral self across past, present, and future.
- **Self-Awareness**: The active monitoring of our thoughts, motivations, emotions, strengths, and blind spots. Essential for accurate self-reflection and personal growth.

#### 8.2 Self-Esteem vs. Self-Confidence
- **Self-Esteem**: The emotional and evaluative judgment of our personal worth. Composed of:
  - *Competency-based esteem*: Grounded in personal effectiveness and accomplishment.
  - *Virtue-based self-worth*: Grounded in moral ethics, integrity, and character.
- **Self-Confidence**: Trust in our ability to perform successfully in a given domain.
- **Confidence vs. Courage**: Confidence operates within the realm of the *known*; courage operates when facing the *uncertain, unknown, or fearful*.

#### 8.3 Self-Control & Anger Management
- **Self-Control**: The conscious capacity to delay immediate gratification to achieve superior long-term goals.
- **Anger Management**: Anger is triggered when one feels devalued, obstructed, or threatened.
  - *Techniques*: Pause before reacting; recognize cognitive distortions; focus on problem repair rather than blame; avoid making decisions during emotional peaks.

#### 8.4 Emotional Intelligence (EI)
- The ability to perceive, assess, harness, and regulate emotions in oneself and others.
- **Five Domains (Daniel Goleman)**:
  1. *Self-Awareness*: Recognizing your emotional states.
  2. *Self-Regulation*: Managing disruptive emotional impulses.
  3. *Internal Motivation*: Striving for goals beyond money or status.
  4. *Empathy / Social Awareness*: Tuning into others’ feelings and perspectives.
  5. *Social Skills*: Managing relationships and inspiring cooperation.

#### 8.5 Stress, Coping Styles & Resilience
- **Categories of Stressors**: Catastrophes, Significant life changes, and Daily hassles.
- **Two Coping Strategies**:
  - **Problem-Focused Coping**: Directly altering the stressor or environment when the situation is controllable.
  - **Emotion-Focused Coping**: Regulating the emotional response when the situation cannot be changed.
- **Resilience**: The process of adapting well and **"bouncing back"** in the face of adversity, trauma, or hardship.

#### 8.6 Critical vs. Creative Thinking
| Dimension | Critical Thinking | Creative Thinking |
| :--- | :--- | :--- |
| **Cognitive Process** | Analytic, logical | Generative, imaginative |
| **Focus** | Convergent (one optimal answer) | Divergent (multiple possibilities) |
| **Logic Mode** | Vertical, linear | Lateral, associative |
| **Judgment** | Evaluative, probability-based | Suspended judgment |

#### 8.7 Problem Solving & Decision Making
- *Well-Defined Problems* (clear path & solution) vs. *Ill-Defined Problems* (ambiguous path; e.g., choosing a career).
- **Seven Steps in Problem Solving**:
  1. Recognize the problem $\\rightarrow$ 2. Mentally define and represent the problem $\\rightarrow$ 3. Develop alternative strategies $\\rightarrow$ 4. Organize knowledge and resources $\\rightarrow$ 5. Allocate physical/mental energy $\\rightarrow$ 6. Monitor progress $\\rightarrow$ 7. Evaluate final solution accuracy.`
  },
  {
    id: 'psyc-ch9',
    courseId: 'psyc-1011',
    number: 9,
    title: 'Unit 9: Academic Skills',
    summary: 'Time management strategies, effective note-taking systems (Cornell, Outlining, Charting), study methods (SQ3R), test-taking skills, overcoming test anxiety via realistic self-talk, SMART goal setting, and career development skills.',
    readTimeMinutes: 13,
    keyFormulas: [
      'Time Management: A non-renewable resource; plan, prioritize, avoid multitasking, eliminate time wasters',
      'Cornell Note-Taking: 3 sections (Cue column 30% + Notes column 70% + Bottom summary)',
      'SQ3R Study Method: Survey ➔ Question ➔ Read ➔ Recite ➔ Review',
      'Overcoming Test Anxiety: Realistic thinking (Pay attention to self-talk ➔ Identify anxiety thoughts ➔ Challenge thinking traps)',
      'SMART Goals: Specific, Measurable, Actionable/Attainable, Realistic, Time-bound',
      'Career Management Skills (CMS): Continuous lifelong coordination of learning, work, and life choices'
    ],
    content: `### Unit 9: Academic Skills

#### 9.1 Time Management
- Time is a **communal non-renewable resource** that must be budgeted like financial capital.
- **Ten Proven Strategies**:
  1. Track where time actually goes.
  2. Set clear priorities.
  3. Use systematic planning tools (calendars, agendas).
  4. Maintain organized physical and digital workspaces.
  5. Schedule study blocks during peak energy hours.
  6. Delegate non-essential tasks.
  7. Conquer procrastination with immediate micro-steps.
  8. Eliminate external time wasters (social media, interruptions).
  9. Avoid inefficient multi-tasking (monotasking produces superior retention).
  10. Maintain sleep, nutrition, and physical health.

---

#### 9.2 Note-Taking and Study Systems
- **Three Common Note-Taking Methods**:
  1. **Cornell Method**: Page divided into three distinct segments:
     - *Notes Column (Right 70%)*: Detailed lecture points during class.
     - *Cue/Recall Column (Left 30%)*: Questions, keywords, and study cues written immediately after class.
     - *Summary (Bottom)*: 2–3 sentence synthesis of the page.
  2. **Outlining**: Hierarchical indentation of main topics, subtopics, and supporting examples.
  3. **Charting**: Matrix tables comparing dates, theories, researchers, and core findings.
- **The SQ3R Method**:
  - **S**urvey $\\rightarrow$ **Q**uestion $\\rightarrow$ **R**ead $\\rightarrow$ **R**ecite $\\rightarrow$ **R**eview.

---

#### 9.3 Test-Taking Skills & Managing Test Anxiety
- **Test Anxiety**: Negative mood state characterized by physical tension, elevated adrenaline, and catastrophizing thoughts that impair memory retrieval.
- **Three Steps of Realistic Thinking to Overcome Anxiety**:
  1. *Pay attention to self-talk*: Notice internal messages ("I’m going to fail" vs. "I am prepared and will do my best").
  2. *Identify anxiety-provoking triggers*: Pinpoint the exact fear (fear of time running out, fear of disappointing others).
  3. *Challenge thinking traps*: Replace irrational emotional assumptions with objective facts and empirical evidence.

---

#### 9.4 SMART Goal Setting & Career Development
- **SMART Framework**:
  - **S**pecific: Clearly defined target.
  - **M**easurable: Quantifiable criteria for success.
  - **A**ction-oriented: Concrete steps to execute.
  - **R**ealistic: Achievable given current resources.
  - **T**ime-bound: Clear target deadline.
- **Career Management Skills (CMS)**: Continuous lifelong process of understanding self, evaluating educational and occupational alternatives, and executing career plans.`
  },
  {
    id: 'psyc-ch10',
    courseId: 'psyc-1011',
    number: 10,
    title: 'Unit 10: Social Skills',
    summary: 'Cultural diversity and multiculturalism, gender and social inclusion, interpersonal communication, social influences, resisting peer pressure, assertiveness, conflict resolution (win-win), teamwork, and overcoming risky behaviors.',
    readTimeMinutes: 14,
    keyFormulas: [
      'Cultural Diversity: Multiculturalism respects and empowers all groups; diversity management capitalizes on multiple social identities',
      'Gender vs Sex: Sex is biological; Gender is a multi-level social institution (individual, interactional, structural)',
      'Social Influence: Compliance (behavioral change without attitude change) vs Conformity vs Obedience',
      'Assertiveness: Direct, honest communication respecting own rights AND others\' rights (balances passive and aggressive)',
      'Conflict Sources: Economic, Value, Power (Katz). Approaches: Win-Lose, Lose-Lose, Win-Win (collaborative problem solving)',
      'Effective Teams: Complementary skills, shared vision, mutual accountability'
    ],
    content: `### Unit 10: Social Skills

#### 10.1 Cultural Diversity and Diversity Management
- **Multiculturalism**: A system of beliefs and behaviors that recognizes, values, and respects cultural differences while empowering all groups within society.
- **Principles of Diversity Management**:
  - Avoid ethnocentric cultural stereotyping and value imposition.
  - Recognize that language non-fluency does not indicate low cognitive capacity.
  - Capitalize on multiple social identities to build bridges of mutual trust.

---

#### 10.2 Gender and Social Inclusion
- **Sex vs. Gender**:
  - *Sex*: Biological and physiological differences (chromosomes, hormonal profiles, anatomy).
  - *Gender*: Socially constructed roles, expectations, and institutional structures across three levels:
    1. *Individual Level*: Socialized traits and gender identity.
    2. *Interactional Level*: Social expectations and cultural norms.
    3. *Structural Level*: Distribution of power, resources, and social rewards.
- **Gender Inclusion**: Implementing equitable access in education, economy, leadership, and legal protections.

---

#### 10.3 Interpersonal Communication & Assertiveness
- **Communication Channels**: Verbal messages paired with non-verbal signals (eye gaze, facial expressions, body posture, and paralinguistics).
- **Communication Styles**:
  - *Passive*: Concealing true thoughts/feelings; submissive; leads to resentment and low self-esteem.
  - *Aggressive*: Violating others' rights through intimidation, blame, or hostility.
  - *Assertive*: Clearly and respectfully expressing beliefs, needs, and boundaries while honoring the rights and feelings of others.

---

#### 10.4 Social Influence and Resisting Peer Pressure
- **Forms of Influence**: Compliance (surface behavioral yielding to requests), Conformity (aligning with group norms), and Obedience (following authoritative orders).
- **Handling Peer Pressure**:
  - Use the **"Delay Tactic"** ("Let me think about that and get back to you").
  - Practice clear, direct refusals ("No thanks, that's not for me").
  - Surround yourself with friends who respect your autonomy.
  - Employ **Bystander Intervention** to protect peers facing coercion.

---

#### 10.5 Conflict and Conflict Resolution
- **Sources of Conflict (Daniel Katz)**:
  - *Economic Conflict*: Competing over scarce material resources.
  - *Value Conflict*: Clashing ideological beliefs and lifestyle principles.
  - *Power Conflict*: Struggles over influence and authority.
- **Three Resolution Strategies**:
  1. **Win-Lose**: One party prevails at the total expense of the other (unsustainable; breeds future retaliation).
  2. **Lose-Lose**: Compromise where both parties sacrifice essential goals, or both are harmed.
  3. **Win-Win (Collaborative Problem Solving)**: Both parties reframe the conflict as **"Us vs. The Problem"** to maximize shared mutual gains.

---

#### 10.6 Teamwork and Overcoming Adolescent Risky Behavior
- **Effective Teams**: Characterized by complementary skills, clear shared vision, open communication, and **mutual accountability**.
- **Mitigating Risky Behaviors**: Strengthening family functioning, school connections, community safety, emotional competence, and sustained mentoring from caring adults.`
  }
];
