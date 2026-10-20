import { ExamQuestion } from '../types';

/**
 * Haramaya University - College of Natural and Computational Sciences / HULMS
 * Mathematics for Natural Science (Math 1011) - Midterm Examination (2018 E.C.)
 * Complete 20-Question Examination with Official Feedback Keys and Rigorous Step-by-Step Explanations (English Only).
 */
export const MATH_2018_MIDTERM_QUESTIONS: ExamQuestion[] = [
  // =========================================================================
  // Question 1
  // =========================================================================
  {
    id: 'math-2018-mid-q1',
    courseId: 'math-1011',
    courseCode: 'Math 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Propositional Logic: Truth Value of Biconditional Statements',
    points: 1,
    question: 'The truth value of the statement "3 + 2 = 7 if and only if 5 + 7 = 12" is:',
    options: [
      'False',
      'True'
    ],
    correctAnswer: 0,
    hint: 'Determine the truth values of both component propositions separately. A biconditional (p ⇔ q) is true if and only if both components share identical truth values.',
    explanation: 'Step-by-step logical evaluation:\n1. Let p be the proposition: "3 + 2 = 7". Since 3 + 2 = 5 ≠ 7, proposition p is False (F).\n2. Let q be the proposition: "5 + 7 = 12". Since 5 + 7 = 12, proposition q is True (T).\n3. The compound statement is a biconditional: p ⇔ q, which translates to F ⇔ T.\n4. By definition of the biconditional operator, p ⇔ q is True if and only if both p and q have the same truth value (both T or both F). Because p is F and q is T, the statement F ⇔ T evaluates to FALSE.\n\nVerified Answer: Option A (False).'
  },

  // =========================================================================
  // Question 2
  // =========================================================================
  {
    id: 'math-2018-mid-q2',
    courseId: 'math-1011',
    courseCode: 'Math 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Predicate Logic & Quantifiers: Real Roots of Quadratic Equations',
    points: 1,
    question: 'The truth value of the statement (∃x ∈ R)(x² + x + 1 = 0) is:',
    options: [
      'True',
      'False'
    ],
    correctAnswer: 1,
    hint: 'Check the discriminant Δ = b² - 4ac of the quadratic equation x² + x + 1 = 0 over the set of real numbers ℝ.',
    explanation: 'Step-by-step mathematical proof:\n1. The given statement asserts that there exists at least one real number x ∈ ℝ such that x² + x + 1 = 0.\n2. In the quadratic equation x² + x + 1 = 0, the coefficients are a = 1, b = 1, and c = 1.\n3. Compute the discriminant: Δ = b² - 4ac = (1)² - 4(1)(1) = 1 - 4 = -3.\n4. Because the discriminant is strictly negative (Δ = -3 < 0), the equation has no real roots; its roots are complex numbers: x = (-1 ± i√3)/2 ∉ ℝ.\n5. Therefore, no real number satisfies x² + x + 1 = 0, which means the existential statement (∃x ∈ ℝ)(x² + x + 1 = 0) is FALSE.\n\nVerified Answer: Option B (False).'
  },

  // =========================================================================
  // Question 3
  // =========================================================================
  {
    id: 'math-2018-mid-q3',
    courseId: 'math-1011',
    courseCode: 'Math 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Real Number System: Multiplicative Inverse of Radicals',
    points: 1,
    question: 'The multiplicative inverse of 3 - √3 is (9 - √3)/3. (Evaluate whether this proposition is True or False)',
    options: [
      'False',
      'True'
    ],
    correctAnswer: 0,
    hint: 'Find the reciprocal 1 / (3 - √3) and rationalize the denominator by multiplying numerator and denominator by the conjugate (3 + √3).',
    explanation: 'Step-by-step derivation:\n1. The multiplicative inverse of any non-zero real number z is 1/z. For z = 3 - √3, its inverse is 1 / (3 - √3).\n2. Rationalize the denominator by multiplying by the conjugate (3 + √3) / (3 + √3):\n   1 / (3 - √3) = (3 + √3) / [(3 - √3)(3 + √3)]\n   = (3 + √3) / [3² - (√3)²]\n   = (3 + √3) / (9 - 3)\n   = (3 + √3) / 6.\n3. The statement asserts that the multiplicative inverse is (9 - √3)/3 (or (9 - √33)/3), which is clearly unequal to the true simplified value (3 + √3)/6.\n4. Therefore, the statement is FALSE.\n\nVerified Answer: Option A (False).'
  },

  // =========================================================================
  // Question 4
  // =========================================================================
  {
    id: 'math-2018-mid-q4',
    courseId: 'math-1011',
    courseCode: 'Math 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'hard',
    topic: 'Predicate Logic: Order and Equivalence of Nested Quantifiers',
    points: 1,
    question: 'Let P(x, y) and U be any open proposition and universal set, respectively. Which of the following is false?',
    options: [
      '(∃x)(∃y)(P(x, y)) ≡ (∃y)(∃x)(P(x, y))',
      '(∀x)(∀y)(P(x, y)) ≡ (∀y)(∀x)(P(x, y))',
      'If (∃x)(∀y)¬(P(x, y)) ≡ F, then ¬[(∀x)(∃y)(P(x, y))] ≡ F',
      'If (∀x)(∃y)(P(x, y)) ≡ T, then (∃y)(∀x)(P(x, y)) ≡ T'
    ],
    correctAnswer: 3,
    hint: 'Recall that swapping mixed quantifiers (∀x)(∃y) to (∃y)(∀x) does NOT preserve logical truth. A single universal y does not necessarily exist for all x.',
    explanation: 'Step-by-step logical analysis:\n1. Option A: (∃x)(∃y)P(x, y) ≡ (∃y)(∃x)P(x, y) is a standard theorem; consecutive existential quantifiers can be commuted.\n2. Option B: (∀x)(∀y)P(x, y) ≡ (∀y)(∀x)P(x, y) is also a standard theorem; consecutive universal quantifiers can be commuted.\n3. Option C: By quantifier negation, ¬[(∀x)(∃y)P(x, y)] ≡ (∃x)(∀y)¬P(x, y). Therefore, if (∃x)(∀y)¬P(x, y) ≡ F, then ¬[(∀x)(∃y)P(x, y)] ≡ F. This is true.\n4. Option D: While (∃y)(∀x)P(x, y) logically implies (∀x)(∃y)P(x, y), the converse is FALSE. For example, let U = ℤ and P(x, y) be "x < y". For every integer x, there exists an integer y such that x < y (True). But there does not exist a single integer y that is greater than every integer x (False). Hence, Option D is FALSE.\n\nVerified Answer: Option D.'
  },

  // =========================================================================
  // Question 5
  // =========================================================================
  {
    id: 'math-2018-mid-q5',
    courseId: 'math-1011',
    courseCode: 'Math 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Set Theory: Universal Set and Complements',
    points: 1,
    question: 'Let U be the set of natural numbers, and A = {x ∈ U : x = -2 or x = -1}. Then what is the complement of A?',
    options: [
      '{-2}',
      'U',
      '∅',
      'U - {-2}'
    ],
    correctAnswer: 1,
    hint: 'Check whether the elements -2 or -1 belong to the universal set of natural numbers U = ℕ = {1, 2, 3, ...}.',
    explanation: 'Step-by-step set theoretic solution:\n1. The universal set is U = ℕ = {1, 2, 3, 4, ...} (the set of positive integers/natural numbers).\n2. Set A is defined by set-builder notation as: A = {x ∈ U : x = -2 or x = -1}.\n3. Since natural numbers are strictly positive (or non-negative in some definitions), neither -2 nor -1 belongs to U (i.e., -2 ∉ ℕ and -1 ∉ ℕ).\n4. Because no element in U satisfies the condition, set A contains no elements: A = ∅ (the empty set).\n5. The complement of A relative to U is defined as: Aᶜ = U \\ A = U \\ ∅ = U.\n\nVerified Answer: Option B (U).'
  },

  // =========================================================================
  // Question 6
  // =========================================================================
  {
    id: 'math-2018-mid-q6',
    courseId: 'math-1011',
    courseCode: 'Math 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'hard',
    topic: 'Formal Logic & Deductive Arguments: Validity of Inferences',
    points: 1,
    question: 'If an argument p, p ⇒ q, r ⇒ q ⊢ Q is valid, then which of the following cannot be the possible conclusion Q?',
    options: [
      '¬q ∨ r',
      '¬r',
      'q ∧ r',
      '¬q'
    ],
    correctAnswer: 3,
    hint: 'Apply Modus Ponens to premises p and p ⇒ q to determine the mandatory truth value of q.',
    explanation: 'Step-by-step deductive analysis:\n1. Given premises: (1) p is True, (2) p ⇒ q is True, (3) r ⇒ q is True.\n2. From premises (1) and (2), applying Modus Ponens yields that q must be TRUE.\n3. Since q is necessarily True, its negation ¬q is necessarily FALSE in all truth assignments that satisfy the premises.\n4. An argument is valid if and only if whenever all premises are true, the conclusion is also true. If Q = ¬q, the premises would be True while the conclusion is False, which is an explicit contradiction and makes the argument invalid.\n5. Therefore, ¬q can never be a valid conclusion Q.\n\nVerified Answer: Option D (¬q).'
  },

  // =========================================================================
  // Question 7
  // =========================================================================
  {
    id: 'math-2018-mid-q7',
    courseId: 'math-1011',
    courseCode: 'Math 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Propositional Logic: Negation of Conditional Statements',
    points: 1,
    question: 'The negation of the statement "If Adama is in Ethiopia, then Adama is in Africa" is:',
    options: [
      'If Adama is not in Ethiopia, then Adama is not in Africa.',
      'Adama is in Ethiopia and in Africa.',
      'If Adama is not in Africa, then Adama is not in Ethiopia.',
      'Adama is in Ethiopia and not in Africa.'
    ],
    correctAnswer: 3,
    hint: 'Recall the fundamental logical equivalence for the negation of an implication: ¬(p ⇒ q) ≡ p ∧ ¬q.',
    explanation: 'Step-by-step logical proof:\n1. Let p be: "Adama is in Ethiopia".\n2. Let q be: "Adama is in Africa".\n3. The original statement is of the conditional form: p ⇒ q.\n4. The negation of a conditional statement is logically equivalent to the conjunction of the antecedent and the negation of the consequent:\n   ¬(p ⇒ q) ≡ ¬(¬p ∨ q) ≡ p ∧ ¬q (by De Morgan\'s Law).\n5. Translating p ∧ ¬q back into words gives: "Adama is in Ethiopia and Adama is not in Africa."\n\nVerified Answer: Option D.'
  },

  // =========================================================================
  // Question 8
  // =========================================================================
  {
    id: 'math-2018-mid-q8',
    courseId: 'math-1011',
    courseCode: 'Math 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Propositional Logic: Definition of Proposition',
    points: 1,
    question: 'Which one of the following is not a proposition?',
    options: [
      '2 is an even number.',
      'A rectangle has four sides.',
      '1 is a multiplicative identity in the set of whole numbers.',
      'Multiply 3x + 7 by 3.'
    ],
    correctAnswer: 3,
    hint: 'A proposition must be a declarative statement that is either True or False. Commands and imperative sentences are not propositions.',
    explanation: 'Step-by-step verification:\n1. By definition, a proposition is a declarative sentence that is either True or False, but not both.\n2. Option A ("2 is an even number") is a declarative statement with truth value True.\n3. Option B ("A rectangle has four sides") is a declarative statement with truth value True.\n4. Option C ("1 is a multiplicative identity in the set of whole numbers") is a declarative statement with truth value True.\n5. Option D ("Multiply 3x + 7 by 3") is an imperative sentence (a command/instruction). It expresses an action to be performed and cannot be assigned a truth value of True or False. Therefore, it is NOT a proposition.\n\nVerified Answer: Option D.'
  },

  // =========================================================================
  // Question 9
  // =========================================================================
  {
    id: 'math-2018-mid-q9',
    courseId: 'math-1011',
    courseCode: 'Math 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Propositional Logic: Truth Values of Implication and Conjunction',
    points: 1,
    question: 'Suppose that the truth value of (p ⇒ q) is False; then the truth value of (p ∧ q) is:',
    options: [
      'False',
      'True'
    ],
    correctAnswer: 0,
    hint: 'A conditional statement p ⇒ q is False under exactly one condition: when p is True and q is False.',
    explanation: 'Step-by-step deduction:\n1. The truth table of the conditional statement p ⇒ q shows that p ⇒ q is False if and only if the antecedent p is True and the consequent q is False:\n   p = T and q = F.\n2. Now substitute these values into the conjunction (p ∧ q):\n   p ∧ q = T ∧ F.\n3. By the definition of conjunction, T ∧ F evaluates to False.\n4. Therefore, the truth value of (p ∧ q) is FALSE.\n\nVerified Answer: Option A (False).'
  },

  // =========================================================================
  // Question 10
  // =========================================================================
  {
    id: 'math-2018-mid-q10',
    courseId: 'math-1011',
    courseCode: 'Math 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Predicate Logic: Negation of Multiple Quantifiers and Conjunction',
    points: 1,
    question: 'The negation of the statement (∀x)(∃y)(¬P(x, y) ∧ Q(x, y)) is:',
    options: [
      '(∀x)(∃y)(¬P(x, y) ∨ Q(x, y))',
      '(∃x)(∀y)(¬P(x, y) ∧ Q(x, y))',
      '(∃x)(∀y)(P(x, y) ∨ ¬Q(x, y))',
      '(∀x)(∀y)(¬P(x, y) ∧ Q(x, y))'
    ],
    correctAnswer: 2,
    hint: 'Distribute the negation through the quantifiers (∀ turns into ∃, ∃ turns into ∀) and apply De Morgan\'s Law to the inner conjunction ¬(¬P ∧ Q).',
    explanation: 'Step-by-step transformation using predicate rules:\n1. Start with the negated expression:\n   ¬[(∀x)(∃y)(¬P(x, y) ∧ Q(x, y))]\n2. Move the negation past the universal quantifier (∀x):\n   (∃x) ¬[(∃y)(¬P(x, y) ∧ Q(x, y))]\n3. Move the negation past the existential quantifier (∃y):\n   (∃x)(∀y) ¬[¬P(x, y) ∧ Q(x, y)]\n4. Apply De Morgan\'s law to the inner conjunction:\n   ¬[¬P(x, y) ∧ Q(x, y)] ≡ ¬(¬P(x, y)) ∨ ¬Q(x, y) ≡ P(x, y) ∨ ¬Q(x, y)\n5. Putting it all together yields:\n   (∃x)(∀y)(P(x, y) ∨ ¬Q(x, y)).\n\nVerified Answer: Option C.'
  },

  // =========================================================================
  // Question 11
  // =========================================================================
  {
    id: 'math-2018-mid-q11',
    courseId: 'math-1011',
    courseCode: 'Math 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Set Theory: Elements vs Subsets with Nested Sets',
    points: 1,
    question: 'If A = {1, 3, {1, 2}, {∅}, 4}, then {1, {∅}} ⊂ A and {1, 2} ∈ A. (Evaluate whether this proposition is True or False)',
    options: [
      'False',
      'True'
    ],
    correctAnswer: 1,
    hint: 'Check if both 1 and {∅} are elements of A to verify the proper subset relation, and check if {1, 2} is listed as an element of A.',
    explanation: 'Step-by-step element and subset verification:\n1. The elements of set A are:\n   • Element 1: 1 ∈ A\n   • Element 2: 3 ∈ A\n   • Element 3: {1, 2} ∈ A\n   • Element 4: {∅} ∈ A\n   • Element 5: 4 ∈ A\n2. First part: Does {1, {∅}} ⊂ A?\n   A set S is a subset of A if every element of S belongs to A. The elements of {1, {∅}} are 1 and {∅}. Both 1 ∈ A and {∅} ∈ A. Furthermore, {1, {∅}} ≠ A. Thus, {1, {∅}} ⊂ A is TRUE.\n3. Second part: Does {1, 2} ∈ A?\n   Looking directly at the definition of A, {1, 2} is explicitly an element of A (Element 3). Thus, {1, 2} ∈ A is TRUE.\n4. Both conjuncts are True; therefore, True ∧ True = TRUE.\n\nVerified Answer: Option B (True).'
  },

  // =========================================================================
  // Question 12
  // =========================================================================
  {
    id: 'math-2018-mid-q12',
    courseId: 'math-1011',
    courseCode: 'Math 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Set Theory: Elements vs Subsets and Cardinality',
    points: 1,
    question: 'Let A = {x ∈ N : x² - 1 = 0} and B = {0, 1, 2, 3, 4, 5}. Which one of the following is false?',
    options: [
      'Number of subsets of A is two.',
      '1 ∈ A ∩ B',
      'Number of proper subsets of B is 63.',
      '1 ⊆ A'
    ],
    correctAnswer: 3,
    hint: 'Distinguish between the element membership symbol (∈) and the subset inclusion symbol (⊆).',
    explanation: 'Step-by-step set evaluation:\n1. Solve for set A: x² - 1 = 0 ⟹ x² = 1 ⟹ x = ±1. Since x ∈ ℕ = {1, 2, 3, ...}, the only valid natural number is x = 1. Thus, A = {1}, so n(A) = 1.\n2. Option A: The number of subsets of A is 2^(n(A)) = 2¹ = 2 (namely, ∅ and {1}). This is true.\n3. Option B: Set B has elements {0, 1, 2, 3, 4, 5}. Then A ∩ B = {1} ∩ {0, 1, 2, 3, 4, 5} = {1}. Since 1 ∈ {1}, 1 ∈ A ∩ B is true.\n4. Option C: Set B has 6 elements, n(B) = 6. The number of proper subsets of B is 2⁶ - 1 = 64 - 1 = 63. This is true.\n5. Option D: The expression "1 ⊆ A" is mathematically invalid. The number 1 is an element of A (1 ∈ A), not a set. Subset notation requires sets on both sides: {1} ⊆ A. Therefore, "1 ⊆ A" is FALSE.\n\nVerified Answer: Option D.'
  },

  // =========================================================================
  // Question 13
  // =========================================================================
  {
    id: 'math-2018-mid-q13',
    courseId: 'math-1011',
    courseCode: 'Math 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Real Analysis: Infimum (Greatest Lower Bound) of a Sequence Set',
    points: 1,
    question: 'Let A = {n / (1 + n) : n ∈ N}. Then what is the greatest lower bound of A?',
    options: [
      '1/2',
      '0',
      '1',
      '3'
    ],
    correctAnswer: 0,
    hint: 'List the values of an = n / (1 + n) for n = 1, 2, 3, ... and observe whether the sequence is strictly increasing.',
    explanation: 'Step-by-step calculation of greatest lower bound (infimum):\n1. The set is generated by the sequence a_n = n / (n + 1) for n ∈ ℕ = {1, 2, 3, ...}.\n2. Evaluate the first few terms:\n   • For n = 1: a₁ = 1 / (1 + 1) = 1/2 = 0.5\n   • For n = 2: a₂ = 2 / (1 + 2) = 2/3 ≈ 0.667\n   • For n = 3: a₃ = 3 / (1 + 3) = 3/4 = 0.75\n   • As n → ∞: lim (n / (n + 1)) = 1.\n3. Since a_(n+1) - a_n = (n+1)/(n+2) - n/(n+1) = 1 / [(n+1)(n+2)] > 0, the sequence is strictly monotonically increasing.\n4. Therefore, the minimum element of set A occurs at n = 1, which is 1/2.\n5. Since 1/2 belongs to A and is a lower bound, it is the greatest lower bound: inf(A) = 1/2.\n\nVerified Answer: Option A (1/2).'
  },

  // =========================================================================
  // Question 14
  // =========================================================================
  {
    id: 'math-2018-mid-q14',
    courseId: 'math-1011',
    courseCode: 'Math 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'hard',
    topic: 'Set Theory: Power Set Cardinality and Proper Subsets',
    points: 1,
    question: 'Suppose A be any finite set and the number of proper subsets of P(A) is 15, then which of the following is not correct?',
    options: [
      'The number of subsets of A is 4.',
      'The number of proper subsets of A is 3.',
      'The number of elements of P(A) is equal to the number of subsets of A.',
      'The number of elements of A is 4.'
    ],
    correctAnswer: 3,
    hint: 'If a set S has m elements, its number of proper subsets is 2^m - 1. Set S = P(A).',
    explanation: 'Step-by-step algebraic solution:\n1. Let the number of elements of set A be n(A) = k.\n2. The power set P(A) contains 2^k elements, so m = n(P(A)) = 2^k.\n3. The number of proper subsets of any set with m elements is 2^m - 1.\n4. We are given: 2^m - 1 = 15 ⟹ 2^m = 16 = 2⁴ ⟹ m = n(P(A)) = 4.\n5. Since n(P(A)) = 2^k = 4 = 2², it follows that k = n(A) = 2.\n6. Now verify the options:\n   • Option A: The number of subsets of A is 2^(n(A)) = 2² = 4. (Correct)\n   • Option B: The number of proper subsets of A is 2² - 1 = 3. (Correct)\n   • Option C: n(P(A)) = 4, and the number of subsets of A is 2² = 4. (Correct)\n   • Option D: "The number of elements of A is 4." We found n(A) = 2, not 4! (Incorrect statement).\n\nVerified Answer: Option D.'
  },

  // =========================================================================
  // Question 15
  // =========================================================================
  {
    id: 'math-2018-mid-q15',
    courseId: 'math-1011',
    courseCode: 'Math 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Number Theory: LCM via Prime Factorization',
    points: 1,
    question: 'Suppose that two composite numbers a = r^e · t^u · p and b = t^q · h^k · p^f, where r, t, p, and h are primes, and u ≤ q and f ≥ 1. Then what is the LCM(a, b)?',
    options: [
      't^p · p',
      't^q · p^f · h^k',
      'r^e · t^q · h^k · p^f',
      't^q'
    ],
    correctAnswer: 2,
    hint: 'To compute the Least Common Multiple (LCM), take the highest exponent of each distinct prime factor present in both factorizations.',
    explanation: 'Step-by-step prime factorization procedure for LCM:\n1. The distinct prime factors present in a and b are r, t, h, and p.\n2. Determine the maximum exponent for each prime factor:\n   • For prime r: exponent in a is e; exponent in b is 0. Maximum exponent is max(e, 0) = e ⟹ r^e.\n   • For prime t: exponent in a is u; exponent in b is q. Given u ≤ q, maximum exponent is max(u, q) = q ⟹ t^q.\n   • For prime h: exponent in a is 0; exponent in b is k. Maximum exponent is max(0, k) = k ⟹ h^k.\n   • For prime p: exponent in a is 1; exponent in b is f. Given f ≥ 1, maximum exponent is max(1, f) = f ⟹ p^f.\n3. Multiplying these highest prime powers yields:\n   LCM(a, b) = r^e · t^q · h^k · p^f.\n\nVerified Answer: Option C (r^e t^q h^k p^f).'
  },

  // =========================================================================
  // Question 16
  // =========================================================================
  {
    id: 'math-2018-mid-q16',
    courseId: 'math-1011',
    courseCode: 'Math 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Set Theory: Discrete Set vs Continuous Real Interval',
    points: 1,
    question: 'If A = {-5, -3, -2, -1, 0, 1, ..., 10} and B = {x ∈ R : -6 ≤ x ≤ 10}, then A = B. (Evaluate whether this proposition is True or False)',
    options: [
      'False',
      'True'
    ],
    correctAnswer: 0,
    hint: 'A contains only specific discrete integers, whereas B is a continuous interval of real numbers containing infinitely many non-integers.',
    explanation: 'Step-by-step set equality analysis:\n1. Two sets A and B are equal (A = B) if and only if they possess precisely the identical set of elements (i.e., A ⊆ B and B ⊆ A).\n2. Set A is a finite, discrete set of integer points.\n3. Set B = [-6, 10] is an uncountably infinite closed interval of real numbers ℝ.\n4. B contains countless real numbers that are not in A (for example, 0.5 ∈ B, π ∈ B, √2 ∈ B, but none of these belong to A). Furthermore, -6 ∈ B but -6 ∉ A.\n5. Because A ≠ B, the statement "A = B" is FALSE.\n\nVerified Answer: Option A (False).'
  },

  // =========================================================================
  // Question 17
  // =========================================================================
  {
    id: 'math-2018-mid-q17',
    courseId: 'math-1011',
    courseCode: 'Math 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Number Theory: Prime Factorization',
    points: 1,
    question: 'How many distinct prime divisors/factors does 91 have?',
    options: [
      '4',
      '5',
      '3',
      '2'
    ],
    correctAnswer: 3,
    hint: 'Decompose 91 into its prime factors. Test small primes like 2, 3, 5, 7, 11...',
    explanation: 'Step-by-step prime decomposition:\n1. Test the prime numbers in ascending order:\n   • 2 does not divide 91 (91 is odd).\n   • 3 does not divide 91 (sum of digits 9 + 1 = 10, not divisible by 3).\n   • 5 does not divide 91 (last digit is not 0 or 5).\n   • Testing 7: 91 ÷ 7 = 13 (with 0 remainder).\n2. Both 7 and 13 are prime numbers.\n3. The complete prime factorization of 91 is: 91 = 7¹ × 13¹.\n4. The distinct prime divisors are {7, 13}, which count to exactly 2 distinct prime factors.\n\nVerified Answer: Option D (2).'
  },

  // =========================================================================
  // Question 18
  // =========================================================================
  {
    id: 'math-2018-mid-q18',
    courseId: 'math-1011',
    courseCode: 'Math 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Predicate Logic: Universal Instantiation and Truth Values',
    points: 1,
    question: 'Let P(x) be any open proposition and U be any universal set. Which of the following is correct?',
    options: [
      'If (∃x)P(x) ≡ F, then (∀x)P(x) ≡ T',
      'If (∃x)P(x) ≡ F, then (∀x)¬P(x) ≡ F',
      'If (∀x)P(x) ≡ T, then (∃x)P(x) ≡ T',
      '(∃x)P(x) ≡ ((∃x)P(x))'
    ],
    correctAnswer: 2,
    hint: 'In any non-empty domain, if a property holds universally for every single element, it must exist for at least one element.',
    explanation: 'Step-by-step quantifier analysis:\n1. In standard classical predicate logic, the universal domain U is non-empty.\n2. The statement (∀x)P(x) ≡ T asserts that the predicate P(x) is true for every element x in U.\n3. Because U has at least one element, any chosen element satisfies P(x).\n4. Therefore, there certainly exists an element x for which P(x) is true, meaning (∃x)P(x) ≡ T.\n5. Hence, the deduction "If (∀x)P(x) ≡ T, then (∃x)P(x) ≡ T" is universally valid.\n\nVerified Answer: Option C.'
  },

  // =========================================================================
  // Question 19
  // =========================================================================
  {
    id: 'math-2018-mid-q19',
    courseId: 'math-1011',
    courseCode: 'Math 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Propositional Logic: Logical Equivalence of Conditional Forms',
    points: 1,
    question: 'Let p ⇒ q be a given conditional statement. Which of the following is not true?',
    options: [
      'The converse of the inverse of p ⇒ q is the converse of p ⇒ q',
      'The converse of the inverse of p ⇒ q is the contrapositive of p ⇒ q',
      'q ⇒ p ≡ p ⇒ q',
      'p ⇒ q ≡ ¬q ⇒ ¬p'
    ],
    correctAnswer: 2,
    hint: 'A conditional statement p ⇒ q is NOT logically equivalent to its converse q ⇒ p.',
    explanation: 'Step-by-step verification:\n1. The given conditional is p ⇒ q.\n2. Its converse is q ⇒ p.\n3. The truth tables for p ⇒ q and q ⇒ p differ:\n   • When p is False and q is True: p ⇒ q is True, but q ⇒ p (T ⇒ F) is False!\n4. Because they yield different truth values in this case, a conditional statement is NOT logically equivalent to its converse:\n   (q ⇒ p) ≢ (p ⇒ q).\n5. Therefore, the assertion "q ⇒ p ≡ p ⇒ q" is definitively NOT TRUE.\n\nVerified Answer: Option C.'
  },

  // =========================================================================
  // Question 20
  // =========================================================================
  {
    id: 'math-2018-mid-q20',
    courseId: 'math-1011',
    courseCode: 'Math 1011',
    year: '2018 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Predicate Logic: Truth Values of Quantified Statements',
    points: 1,
    question: 'Which one of the following statement has the truth value true?',
    options: [
      '(∃x)(∀y)(x + y = y), where U = N',
      '(∀x)(∀y)(x - y = 5), where U = Z',
      '(∀x)(∃y)(xy = 1), where U = Q',
      '(∃x)(∃y)(x - y = 5), where U = Z'
    ],
    correctAnswer: 3,
    hint: 'Test each statement with concrete numerical values in the specified number domains (ℕ, ℤ, ℚ).',
    explanation: 'Step-by-step analysis of each option:\n1. Option A: (∃x)(∀y)(x + y = y) over U = ℕ = {1, 2, 3, ...}. This requires x = 0 to be an additive identity, but 0 ∉ ℕ. Hence, False.\n2. Option B: (∀x)(∀y)(x - y = 5) over U = ℤ. This claims every pair of integers has difference 5 (e.g. 1 - 2 = -1 ≠ 5). Hence, False.\n3. Option C: (∀x)(∃y)(xy = 1) over U = ℚ. For x = 0 ∈ ℚ, there is no rational number y such that 0 · y = 1. Hence, False.\n4. Option D: (∃x)(∃y)(x - y = 5) over U = ℤ. We only need to find at least one pair of integers. Choose x = 8 and y = 3 (both integers in ℤ); then 8 - 3 = 5. Because a witness exists, this statement is TRUE.\n\nVerified Answer: Option D.'
  }
];
