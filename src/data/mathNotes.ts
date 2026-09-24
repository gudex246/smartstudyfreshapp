import { Chapter } from '../types';

export const MATH_MODULE_CHAPTERS: Chapter[] = [
  {
    id: 'math-ch1',
    courseId: 'math-1011',
    number: 1,
    title: 'Chapter 1: Propositional Logic and Set Theory 🧠',
    summary: 'Propositions, five basic logical connectives, truth tables, tautologies & contradictions, quantifiers (∀, ∃), rules of inference & arguments validity, set operations, laws of algebra of sets, and Venn diagrams.',
    readTimeMinutes: 18,
    keyFormulas: [
      'Logical Connectives: Negation (¬p), Conjunction (p ∧ q), Disjunction (p ∨ q), Implication (p ⇒ q), Bi-implication (p ⇔ q)',
      'Conditional Equivalences: p ⇒ q ≡ ¬p ∨ q ≡ ¬q ⇒ ¬p (Contrapositive)',
      'De Morgan’s Laws (Logic): ¬(p ∧ q) ≡ ¬p ∨ ¬q; ¬(p ∨ q) ≡ ¬p ∧ ¬q',
      'Quantifier Negation: ¬(∀x P(x)) ≡ ∃x ¬P(x); ¬(∃x P(x)) ≡ ∀x ¬P(x)',
      'Rules of Inference: Modus Ponens [p, p⇒q ⊢ q]; Modus Tollens [¬q, p⇒q ⊢ ¬p]; Hypothetical Syllogism [p⇒q, q⇒r ⊢ p⇒r]',
      'Power Set Cardinality: If |A| = n, then |P(A)| = 2^n, and number of proper subsets = 2^n - 1',
      'Set Operations: A ∪ B = {x: x∈A ∨ x∈B}; A ∩ B = {x: x∈A ∧ x∈B}; A \\ B = {x: x∈A ∧ x∉B}; A Δ B = (A \\ B) ∪ (B \\ A)',
      'Inclusion-Exclusion Principle (3 Sets): n(A ∪ B ∪ C) = n(A) + n(B) + n(C) - n(A ∩ B) - n(A ∩ C) - n(B ∩ C) + n(A ∩ B ∩ C)'
    ],
    content: `Chapter 1: Propositional Logic and Set Theory 🧠

1.1 Propositional Logic 💡
Symbolic logic formalizes logical deduction and inference, eliminating the ambiguities of natural language.
A proposition (or statement) is a declarative sentence that is either True (T) or False (F), but not both simultaneously.
• Examples of propositions: "2 is an even number" (True); "Nairobi is the capital city of Ethiopia" (False).
• Non-propositions: Questions ("What is your name?"), commands ("Give me that book!"), exclamations ("May God bless you!").

Five Fundamental Logical Connectives:
1. Negation (¬p or ~p, "Not p"): Reverses truth value. ¬p is F if p is T; ¬p is T if p is F.
2. Conjunction (p ∧ q, "p and q"): True if and only if both p and q are True.
3. Disjunction (p ∨ q, "p or q"): False if and only if both p and q are False (inclusive OR).
4. Implication / Conditional (p ⇒ q, "If p, then q" or "p implies q"):
   • p is the hypothesis (antecedent); q is the conclusion (consequent).
   • False only when p is True and q is False; True in all other cases.
   • Equivalent verbal expressions: "p only if q", "q if p", "p is sufficient for q", "q is necessary for p".
5. Bi-implication / Equivalence (p ⇔ q, "p if and only if q"):
   • True when p and q share the identical truth value (both T or both F).

Related Conditional Statements:
Given the conditional statement p ⇒ q:
• Converse: q ⇒ p
• Inverse: ¬p ⇒ ¬q
• Contrapositive: ¬q ⇒ ¬p
Crucial Law: A conditional statement is logically equivalent to its contrapositive:
p ⇒ q ≡ ¬q ⇒ ¬p
Notice: Converse and inverse are equivalent to each other, but not to the original conditional!

Compound Propositions, Tautology and Contradiction:
• Tautology: A compound statement that is True under every possible truth assignment of its components (final column of truth table contains only T).
• Contradiction: A compound statement that is False under every possible truth assignment (final column contains only F).
• Contingency: A statement that is neither a tautology nor a contradiction (contains both T and F).
• Logical Equivalence: Two propositions P and Q are equivalent (P ≡ Q) if and only if P ⇔ Q is a tautology.

Laws of Logical Equivalence:
• Idempotent: p ∨ p ≡ p; p ∧ p ≡ p
• Commutative: p ∨ q ≡ q ∨ p; p ∧ q ≡ q ∧ p
• Associative: (p ∨ q) ∨ r ≡ p ∨ (q ∨ r); (p ∧ q) ∧ r ≡ p ∧ (q ∧ r)
• Distributive: p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r); p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r)
• De Morgan’s Laws: ¬(p ∧ q) ≡ ¬p ∨ ¬q; ¬(p ∨ q) ≡ ¬p ∧ ¬q
• Double Negation: ¬(¬p) ≡ p

---

1.2 Open Propositions and Quantifiers 🔍
An open statement (predicate) P(x) is a sentence containing one or more variables whose truth value depends on the values assigned to those variables from the universal set U (domain of discourse).

Quantifiers:
1. Universal Quantifier (∀, "For all", "For every", "For each"):
   ∀x P(x) asserts that P(x) is True for all x in U.
   To prove ∀x P(x) is False, it suffices to find one counterexample c in U such that P(c) is False.
2. Existential Quantifier (∃, "There exists", "For some", "At least one"):
   ∃x P(x) asserts that P(x) is True for at least one element in U.
   To prove ∃x P(x) is False, one must demonstrate that P(x) is False for all x in U.

Negation of Quantifiers:
• ¬(∀x P(x)) ≡ ∃x ¬P(x)
• ¬(∃x P(x)) ≡ ∀x ¬P(x)
Rule: Change ∀ to ∃ (or ∃ to ∀) and negate the predicate expression.

Order of Quantifiers:
• Quantifiers of the same type can be freely commuted: ∀x ∀y P(x,y) ≡ ∀y ∀x P(x,y); ∃x ∃y P(x,y) ≡ ∃y ∃x P(x,y).
• Mixed quantifiers cannot be commuted:
  ∃y ∀x P(x,y) ⇒ ∀x ∃y P(x,y) (The converse is not generally true!).

---

1.3 Arguments and Rules of Inference ⚖️
An argument is a sequence of statements consisting of premises p1, p2, ..., pn leading to a conclusion Q, denoted by:
p1, p2, ..., pn ⊢ Q.
Validity: An argument is valid if Q is True whenever all premises p1, p2, ..., pn are simultaneously True. In other words, (p1 ∧ p2 ∧ ... ∧ pn) ⇒ Q is a tautology.

Standard Rules of Inference:
1. Modus Ponens: p, p ⇒ q ⊢ q
2. Modus Tollens: ¬q, p ⇒ q ⊢ ¬p
3. Hypothetical Syllogism: p ⇒ q, q ⇒ r ⊢ p ⇒ r
4. Disjunctive Syllogism (Modus Tollendo Ponens): p ∨ q, ¬p ⊢ q
5. Simplification (Detachment): p ∧ q ⊢ p (and p ∧ q ⊢ q)
6. Conjunction (Adjunction): p, q ⊢ p ∧ q
7. Constructive Dilemma: (p ⇒ q) ∧ (r ⇒ s), p ∨ r ⊢ q ∨ s

---

1.4 Set Theory: Descriptions, Operations and Venn Diagrams 📊
A set is a well-defined collection of distinct objects called elements.
Four Methods of Set Description:
1. Verbal description (e.g., "The set of counting numbers less than 10").
2. Roster / Complete listing: {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}.
3. Partial listing with ellipsis: {1, 2, 3, ...}.
4. Set-builder notation: {x: P(x) is true}.

Subsets and Power Sets:
• Subset: A ⊆ B iff for all x, (x ∈ A ⇒ x ∈ B).
• Proper Subset: A ⊂ B iff A ⊆ B and A ≠ B.
• Empty Set: Denoted by ∅ or {}, contains no elements. ∅ ⊆ A for every set A.
• Power Set P(A): The set of all subsets of A.
  If set A has n elements:
  - Total number of subsets = 2^n
  - Total number of proper subsets = 2^n - 1

Fundamental Set Operations:
1. Union: A ∪ B = {x: x ∈ A ∨ x ∈ B}
2. Intersection: A ∩ B = {x: x ∈ A ∧ x ∈ B}. If A ∩ B = ∅, A and B are disjoint.
3. Difference (Relative Complement): A \\ B = A - B = {x: x ∈ A ∧ x ∉ B} = A ∩ B'
4. Absolute Complement: A' = U \\ A = {x ∈ U: x ∉ A}
5. Symmetric Difference: A Δ B = (A \\ B) ∪ (B \\ A) = (A ∪ B) \\ (A ∩ B)

De Morgan’s Laws for Sets:
• (A ∪ B)' = A' ∩ B'
• (A ∩ B)' = A' ∪ B'

Cardinality and Principle of Inclusion-Exclusion:
• For two sets: n(A ∪ B) = n(A) + n(B) - n(A ∩ B)
• For three sets:
  n(A ∪ B ∪ C) = n(A) + n(B) + n(C) - n(A ∩ B) - n(A ∩ C) - n(B ∩ C) + n(A ∩ B ∩ C)`
  },
  {
    id: 'math-ch2',
    courseId: 'math-1011',
    number: 2,
    title: 'Chapter 2: The Real and Complex Number Systems 🔢',
    summary: 'Natural numbers, mathematical induction, well-ordering principle, integers, rational numbers, proof that sqrt(2) is irrational, real numbers, LUB & GLB completeness, and complex numbers (rectangular, polar, Euler forms, De Moivre’s theorem, roots).',
    readTimeMinutes: 20,
    keyFormulas: [
      'Sum of First n Natural Numbers: 1 + 2 + ... + n = n·(n + 1) / 2',
      'Sum of First n Squares: 1² + 2² + ... + n² = n·(n + 1)·(2n + 1) / 6',
      'Completeness of Real Numbers: Every non-empty subset of R bounded above has a least upper bound (supremum)',
      'Complex Number Form: z = x + i·y, where i² = -1; Modulus |z| = sqrt(x² + y²)',
      'Complex Conjugate: z_bar = x - i·y; z · z_bar = |z|² = x² + y²',
      'Multiplicative Inverse: z⁻¹ = z_bar / |z|² = (x - i·y) / (x² + y²)',
      'Polar Form: z = r · (cos θ + i · sin θ), where r = |z| and θ = Arg(z) ∈ (-π, π]',
      'Euler’s Formula: z = r · e^(iθ)',
      'De Moivre’s Theorem: z^n = r^n · [cos(nθ) + i · sin(nθ)] = r^n · e^(i·nθ)',
      'Roots of Complex Number: w_k = r^(1/n) · e^(i·(θ + 2kπ)/n), for k = 0, 1, 2, ..., n-1'
    ],
    content: `Chapter 2: The Real and Complex Number Systems 🔢

2.1 The Real Number System 🌐
Number systems evolved historically through structural extensions:
N (Natural) ⊂ W (Whole) ⊂ Z (Integers) ⊂ Q (Rationals) ⊂ R (Real numbers) ⊂ C (Complex numbers).

Natural Numbers N = {1, 2, 3, ...}:
• Divisibility: a is a factor of c if c = a · b for some natural number b.
• Prime vs Composite: A prime number has exactly two positive factors (1 and itself). 1 is neither prime nor composite.
• Fundamental Theorem of Arithmetic: Every composite natural number can be uniquely factored into a product of primes (up to the order of factors).
• GCF and LCM via Prime Factorization:
  - GCF (Greatest Common Factor): Product of common prime factors with the lowest exponents.
  - LCM (Least Common Multiple): Product of all prime factors with the highest exponents.
  - Relation: a · b = GCF(a, b) · LCM(a, b)
• Well-Ordering Principle of N: Every non-empty subset of natural numbers contains a smallest (least) element.

Principle of Mathematical Induction (PMI) 🪜:
Let P(n) be a statement involving a positive integer n:
1. Base Step: Verify that P(1) is True.
2. Inductive Step: Assume P(k) is True for an arbitrary integer k >= 1 (inductive hypothesis), and prove that P(k+1) must consequently be True.
3. Conclusion: By PMI, P(n) is True for all integers n >= 1.
Classic Formulas Proved by Induction:
• 1 + 2 + 3 + ... + n = n·(n + 1) / 2
• 1² + 2² + 3² + ... + n² = n·(n + 1)·(2n + 1) / 6
• 1³ + 2³ + 3³ + ... + n³ = [n·(n + 1) / 2]²

Integers and Rational Numbers Q:
• Rational Number: Any number expressible as a / b, where a, b ∈ Z and b ≠ 0.
• Decimal Representation of Rationals:
  - Terminating decimals: Prime factors of the denominator in lowest terms consist solely of 2s and/or 5s (e.g., 25/4 = 6.25).
  - Non-terminating repeating (periodic) decimals: Denominator has prime factors other than 2 or 5 (e.g., 25/3 = 8.333...).
• Converting Periodic Decimals to Fractions:
  If a number has k non-repeating digits and p repeating digits after the decimal point:
  Multiply by 10^(k+p) and 10^k, then subtract to eliminate the periodic tail.

Proof that sqrt(2) is Irrational (Proof by Contradiction) 💡:
1. Assume sqrt(2) is rational; then sqrt(2) = a / b in lowest terms, where GCF(a, b) = 1.
2. Squaring yields 2 = a² / b²  ==>  a² = 2·b², meaning a² is even, so a must be even.
3. Let a = 2m. Then (2m)² = 2·b²  ==>  4m² = 2·b²  ==>  b² = 2m², meaning b² is even, so b is even.
4. If both a and b are even, 2 divides both a and b, contradicting GCF(a, b) = 1.
5. Therefore, sqrt(2) is irrational.

Real Numbers R and Completeness Property:
• Real numbers comprise the union of all rational and irrational numbers.
• Bounded Sets:
  - Upper Bound: M is an upper bound of set A if x <= M for all x ∈ A.
  - Lower Bound: m is a lower bound of set A if x >= m for all x ∈ A.
  - Least Upper Bound (LUB / Supremum): The smallest of all upper bounds.
  - Greatest Lower Bound (GLB / Infimum): The largest of all lower bounds.
• Completeness Property of R:
  Every non-empty subset of R that is bounded above has a least upper bound (supremum) in R.
  Every non-empty subset of R that is bounded below has a greatest lower bound (infimum) in R.

---

2.2 The Complex Number System C 🌀
Equations like x² + 1 = 0 have no solution in the real number system.
The imaginary unit i satisfies i² = -1 (hence i = sqrt(-1)).
• Standard Form: z = x + i·y (where x = Re(z) is the real part, y = Im(z) is the imaginary part).
• Addition and Subtraction: (a + i·b) ± (c + i·d) = (a ± c) + i·(b ± d)
• Multiplication: (a + i·b) · (c + i·d) = (a·c - b·d) + i·(a·d + b·c)
• Complex Conjugate: If z = x + i·y, then z_bar = x - i·y.
  Properties:
  - z + z_bar = 2·Re(z)
  - z - z_bar = 2i·Im(z)
  - z · z_bar = x² + y² = |z|²
  - Conjugate of sum: (z1 + z2)_bar = z1_bar + z2_bar
  - Conjugate of product: (z1 · z2)_bar = z1_bar · z2_bar
• Modulus (Norm): Distance from origin to (x, y) in the complex plane:
  |z| = sqrt(x² + y²)
  Properties: |z1 · z2| = |z1| · |z2|; |z1 / z2| = |z1| / |z2|; Triangle inequality: |z1 + z2| <= |z1| + |z2|.
• Multiplicative Inverse:
  z⁻¹ = 1 / z = z_bar / |z|² = (x - i·y) / (x² + y²)

Polar Form and Arguments of Complex Numbers 📐:
• Polar representation: z = r · (cos θ + i · sin θ)
  where r = |z| = sqrt(x² + y²), and θ is an argument of z.
• Principal Argument Arg(z): The unique value of θ in the range -π < θ <= π:
  - Quadrant 1 (x > 0, y >= 0): θ = arctan(y / x)
  - Quadrant 2 (x < 0, y >= 0): θ = arctan(y / x) + π
  - Quadrant 3 (x < 0, y < 0): θ = arctan(y / x) - π
  - Quadrant 4 (x > 0, y < 0): θ = arctan(y / x)
• Multiplication and Division in Polar Form:
  - z1 · z2 = r1 · r2 · [cos(θ1 + θ2) + i · sin(θ1 + θ2)]
  - z1 / z2 = (r1 / r2) · [cos(θ1 - θ2) + i · sin(θ1 - θ2)]
  Arguments add during multiplication and subtract during division!

Euler’s Formula and De Moivre’s Theorem:
• Euler's Formula: e^(iθ) = cos θ + i · sin θ
  Hence: z = r · e^(iθ)
• De Moivre’s Theorem: For any integer n:
  [r · (cos θ + i · sin θ)]^n = r^n · [cos(nθ) + i · sin(nθ)] = r^n · e^(i·nθ)

Extraction of nth Roots:
A non-zero complex number z = r · e^(iθ) has exactly n distinct nth roots given by:
w_k = r^(1/n) · [cos((θ + 2kπ) / n) + i · sin((θ + 2kπ) / n)]
for k = 0, 1, 2, ..., n - 1.
Geometrically, all n roots lie evenly spaced on a circle of radius r^(1/n) centered at the origin, separated by angles of 2π / n.`
  },
  {
    id: 'math-ch3',
    courseId: 'math-1011',
    number: 3,
    title: 'Chapter 3: Functions and Their Properties 📈',
    summary: 'Relations & functions, domain & range, composition, injective/surjective/bijective types, inverse functions, polynomials, division algorithm, root theorems, rational functions & asymptotes, exponential, logarithmic, trigonometric, and hyperbolic functions.',
    readTimeMinutes: 22,
    keyFormulas: [
      'Cartesian Product: A × B = {(a, b): a∈A and b∈B}',
      'Function Criteria: Every element in domain has exactly one image in codomain',
      'Composition: (f ∘ g)(x) = f(g(x)), with Dom(f ∘ g) = {x ∈ Dom(g): g(x) ∈ Dom(f)}',
      'Polynomial Division: P(x) = d(x) · q(x) + R(x), where deg(R) < deg(d) or R = 0',
      'Remainder & Factor Theorems: Remainder upon dividing by (x - r) is P(r); (x - r) is a factor iff P(r) = 0',
      'Rational Root Theorem: If p/q is a root of an·x^n + ... + a0 = 0, then p divides a0 and q divides an',
      'Asymptotes of Rational Functions: Vertical when denominator = 0; Horizontal y = an / bn if degrees equal, or y = 0 if deg(num) < deg(den); Oblique if deg(num) = deg(den) + 1',
      'Logarithm Identity: log_b(x) = y ⇔ b^y = x; log_b(M·N) = log_b M + log_b N; log_b(M / N) = log_b M - log_b N',
      'Trigonometric Identities: sin² x + cos² x = 1; 1 + tan² x = sec² x; sin(2x) = 2·sin x·cos x; cos(2x) = cos² x - sin² x',
      'Hyperbolic Definitions: sinh x = (e^x - e^(-x)) / 2; cosh x = (e^x + e^(-x)) / 2; cosh² x - sinh² x = 1'
    ],
    content: `Chapter 3: Functions and Their Properties 📈

3.1 Relations and Functions 🔄
• Cartesian Product: A × B = {(a, b): a ∈ A and b ∈ B}.
• Relation: Any subset R ⊆ A × B is a relation from A into B.
  - Domain: Dom(R) = {a ∈ A: (a, b) ∈ R}
  - Range: Range(R) = {b ∈ B: (a, b) ∈ R} ⊆ Codomain B.
  - Inverse Relation: R⁻¹ = {(b, a): (a, b) ∈ R}

Definition of a Function:
A relation f from A into B is a function (f: A ➔ B) if and only if:
1. Dom(f) = A (every element of A is assigned an element of B).
2. Well-defined / Single-valued: If (x, y) ∈ f and (x, z) ∈ f, then y = z (no domain element has more than one image).
• Vertical Line Test: A curve in the xy-plane is the graph of a function if and only if no vertical line intersects it more than once.

Function Operations:
• Sum: (f + g)(x) = f(x) + g(x), Dom = Dom(f) ∩ Dom(g)
• Difference: (f - g)(x) = f(x) - g(x), Dom = Dom(f) ∩ Dom(g)
• Product: (f · g)(x) = f(x) · g(x), Dom = Dom(f) ∩ Dom(g)
• Quotient: (f / g)(x) = f(x) / g(x), Dom = (Dom(f) ∩ Dom(g)) \\ {x: g(x) = 0}
• Composition: (f ∘ g)(x) = f(g(x))
  Dom(f ∘ g) = {x ∈ Dom(g): g(x) ∈ Dom(f)}

---

3.2 Classification of Functions and Inverses 🔀
1. One-to-One (Injective):
   f(x1) = f(x2) implies x1 = x2 for all x1, x2 in the domain (horizontal line test: every horizontal line cuts the graph at most once).
2. Onto (Surjective):
   Range(f) = Codomain B (every element in B has at least one pre-image in A).
3. Bijective (1-to-1 Correspondence):
   Both injective and surjective.
• Inverse of a Function:
  A function f possesses an inverse f⁻¹ if and only if f is one-to-one (bijective onto its range).
  - To find f⁻¹(x): Set y = f(x), swap x and y, and solve for y = f⁻¹(x).
  - Graph of f⁻¹ is the reflection of f across the line y = x.

---

3.3 Polynomial and Rational Functions 📉
Polynomial Function:
P(x) = an·x^n + a_(n-1)·x^(n-1) + ... + a1·x + a0 (where an ≠ 0, n is a non-negative integer).
• Key Theorems:
  1. Division Algorithm: P(x) = d(x) · q(x) + R(x), where deg(R) < deg(d) or R = 0.
  2. Remainder Theorem: When P(x) is divided by (x - r), the remainder is P(r).
  3. Factor Theorem: (x - r) is a factor of P(x) if and only if P(r) = 0.
  4. Location Theorem: If P(x) is continuous and P(a) · P(b) < 0, then there exists at least one real zero between a and b.
  5. Fundamental Theorem of Algebra: Every polynomial of degree n >= 1 with complex coefficients has at least one zero in C (and exactly n zeros counting multiplicities).
  6. Conjugate Roots Theorem: If a polynomial has real coefficients and a + b·i is a zero, then its complex conjugate a - b·i is also a zero.
  7. Rational Root Theorem: If p / q (in lowest terms) is a rational zero of P(x), then p must be an integer factor of the constant term a0, and q must be an integer factor of the leading coefficient an.

Rational Functions and Asymptotes:
f(x) = n(x) / d(x), where n(x) and d(x) are polynomials and d(x) ≠ 0.
• Vertical Asymptote (VA): The vertical line x = a is a VA if d(a) = 0 and n(a) ≠ 0.
  (If both n(a) = 0 and d(a) = 0, simplify the factor; a common cancelable factor creates a removable hole, not a VA).
• Horizontal Asymptote (HA):
  Let n = deg(numerator) and m = deg(denominator):
  - If n < m: The horizontal line y = 0 (x-axis) is the HA.
  - If n = m: The horizontal line y = an / bm is the HA (ratio of leading coefficients).
  - If n > m: There is no horizontal asymptote.
• Oblique (Slant) Asymptote: Occurs when deg(numerator) = deg(denominator) + 1. Found by polynomial long division: the linear quotient y = mx + b is the slant asymptote.

---

3.4 Exponential and Logarithmic Functions 📊
• Exponential Function: f(x) = b^x (b > 0, b ≠ 1).
  - Domain = R, Range = (0, ∞).
  - y-intercept = (0, 1); horizontal asymptote at y = 0.
  - Growth if b > 1; Decay if 0 < b < 1.
  - Natural Exponential: f(x) = e^x, where e ≈ 2.71828...

• Logarithmic Function: y = log_b(x) ⇔ b^y = x (inverse of b^x).
  - Domain = (0, ∞), Range = R.
  - x-intercept = (1, 0); vertical asymptote at x = 0 (y-axis).
  - Natural Logarithm: ln x = log_e x; Common Logarithm: log x = log_10 x.
• Core Properties of Logarithms:
  1. log_b(u · v) = log_b u + log_b v
  2. log_b(u / v) = log_b u - log_b v
  3. log_b(u^r) = r · log_b u
  4. log_b(b^x) = x and b^(log_b x) = x
  5. Change of Base Formula: log_b c = log_a c / log_a b = ln c / ln b

---

3.5 Trigonometric and Hyperbolic Functions 📐
Trigonometric Ratios on the Unit Circle (x² + y² = 1):
• sin θ = y, cos θ = x, tan θ = y / x
• Reciprocals: csc θ = 1 / sin θ, sec θ = 1 / cos θ, cot θ = 1 / tan θ
• Periodicity: sin and cos have period 2π; tan has period π.
• Fundamental Identities:
  - sin² θ + cos² θ = 1
  - 1 + tan² θ = sec² θ
  - 1 + cot² θ = csc² θ
• Addition Formulas:
  - sin(x ± y) = sin x · cos y ± cos x · sin y
  - cos(x ± y) = cos x · cos y ∓ sin x · sin y
  - tan(x ± y) = (tan x ± tan y) / (1 ∓ tan x · tan y)
• Double-Angle Formulas:
  - sin(2x) = 2 · sin x · cos x
  - cos(2x) = cos² x - sin² x = 2·cos² x - 1 = 1 - 2·sin² x
  - tan(2x) = (2 · tan x) / (1 - tan² x)

Hyperbolic Functions:
Defined via exponential combinations:
• Hyperbolic Sine: sinh x = (e^x - e^(-x)) / 2  (Odd function)
• Hyperbolic Cosine: cosh x = (e^x + e^(-x)) / 2  (Even function, minimum value = 1)
• Hyperbolic Tangent: tanh x = sinh x / cosh x = (e^x - e^(-x)) / (e^x + e^(-x))
• Reciprocals: sech x = 1 / cosh x; csch x = 1 / sinh x; coth x = 1 / tanh x
• Fundamental Identity: cosh² x - sinh² x = 1 (represents points on the hyperbola x² - y² = 1).
• Further Identities:
  - 1 - tanh² x = sech² x
  - coth² x - 1 = csch² x
  - sinh(x + y) = sinh x · cosh y + cosh x · sinh y
  - cosh(x + y) = cosh x · cosh y + sinh x · sinh y`
  },
  {
    id: 'math-ch4',
    courseId: 'math-1011',
    number: 4,
    title: 'Chapter 4: Analytic Geometry 📐',
    summary: 'Coordinate plane, distance formula, segment division & midpoint, equations of straight lines, point-to-line distance, circles, parabolas, ellipses, hyperbolas, and classification of general second-degree curves.',
    readTimeMinutes: 20,
    keyFormulas: [
      'Distance Between Two Points: d = sqrt((x2 - x1)² + (y2 - y1)²)',
      'Division of Segment in Ratio r1:r2: x0 = (r2·x1 + r1·x2)/(r1 + r2), y0 = (r2·y1 + r1·y2)/(r1 + r2)',
      'Midpoint: M = ((x1 + x2)/2, (y1 + y2)/2)',
      'Slope: m = (y2 - y1) / (x2 - x1) = tan θ; Parallel m1 = m2; Perpendicular m1 · m2 = -1',
      'Distance from Point (x0, y0) to Line Ax + By + C = 0: d = |A·x0 + B·y0 + C| / sqrt(A² + B²)',
      'Circle Standard Equation: (x - h)² + (y - k)² = r²',
      'Parabola: Vertical (x - h)² = ±4p·(y - k); Horizontal (y - k)² = ±4p·(x - h); Focal width = 4p',
      'Ellipse: Horizontal (x - h)²/a² + (y - k)²/b² = 1; Vertical (x - h)²/b² + (y - k)²/a² = 1; b² = a² - c²; e = c/a < 1',
      'Hyperbola: Horizontal (x - h)²/a² - (y - k)²/b² = 1; Vertical (y - k)²/a² - (x - h)²/b² = 1; c² = a² + b²; e = c/a > 1; Asymptotes y - k = ±(b/a)·(x - h)'
    ],
    content: `Chapter 4: Analytic Geometry 📐

4.1 Lines and Distance in the Cartesian Plane 📏
• Distance Formula:
  Given points P(x1, y1) and Q(x2, y2):
  |PQ| = sqrt((x2 - x1)² + (y2 - y1)²)
• Division Point of a Line Segment:
  If point R(x0, y0) divides segment PQ in the ratio |PR| : |RQ| = r1 : r2:
  x0 = (r2 · x1 + r1 · x2) / (r1 + r2)
  y0 = (r2 · y1 + r1 · y2) / (r1 + r2)
• Midpoint Formula (r1 = r2 = 1):
  M = ((x1 + x2) / 2, (y1 + y2) / 2)

Equations of Straight Lines:
• Slope (m): Measure of steepness; m = (y2 - y1) / (x2 - x1) = Δy / Δx = tan θ (where θ is the angle of inclination).
  - Horizontal line: m = 0 (equation: y = b).
  - Vertical line: slope is undefined (equation: x = a).
• Forms of Linear Equations:
  1. Slope-Intercept Form: y = m·x + b (m = slope, b = y-intercept).
  2. Point-Slope Form: y - y1 = m · (x - x1)
  3. Two-Point Form: y - y1 = [(y2 - y1) / (x2 - x1)] · (x - x1)
  4. Intercept Form: x / a + y / b = 1 (a = x-intercept, b = y-intercept).
  5. General Form: A·x + B·y + C = 0 (slope m = -A / B, y-intercept = -C / B).
• Parallel and Perpendicular Lines:
  - Parallel (l1 || l2): m1 = m2
  - Perpendicular (l1 ⊥ l2): m1 · m2 = -1  ==>  m2 = -1 / m1
• Distance from Point (x0, y0) to Line Ax + By + C = 0:
  d = |A · x0 + B · y0 + C| / sqrt(A² + B²)
  Distance from origin (0, 0): d = |C| / sqrt(A² + B²)

---

4.2 Circles ⚪
A circle is the locus of all points in a plane equidistant (radius r) from a fixed center C(h, k).
• Standard Equation:
  (x - h)² + (y - k)² = r²
  (Centered at origin: x² + y² = r²).
• General Second-Degree Equation of a Circle:
  x² + y² + D·x + E·y + F = 0
  Completing the square gives center C(-D / 2, -E / 2) and radius:
  r = (1/2) · sqrt(D² + E² - 4F)
  - If D² + E² - 4F > 0: Real circle with radius r.
  - If D² + E² - 4F = 0: Point-circle (single point (-D/2, -E/2)).
  - If D² + E² - 4F < 0: No real locus (empty set).
• Tangent Line to a Circle:
  A line is tangent to a circle if the perpendicular distance from center C to line equals radius r (d(C, line) = r). The radius at the point of tangency is perpendicular to the tangent line.

---

4.3 Parabolas 🏹
A parabola is the locus of points equidistant from a fixed point (focus F) and a fixed line (directrix L).
• Vertex (V): Midpoint between focus and directrix.
• Focal Length (p): Distance |VF| = p.
• Focal Width (Latus Rectum): Length |BB'| = 4p.

Standard Equations (Vertex at (h, k)):
1. Vertical Parabola (Axis of symmetry parallel to y-axis):
   • Opens Upward: (x - h)² = 4p · (y - k)
     Focus: F(h, k + p); Directrix: y = k - p
   • Opens Downward: (x - h)² = -4p · (y - k)
     Focus: F(h, k - p); Directrix: y = k + p
2. Horizontal Parabola (Axis of symmetry parallel to x-axis):
   • Opens to the Right: (y - k)² = 4p · (x - h)
     Focus: F(h + p, k); Directrix: x = h - p
   • Opens to the Left: (y - k)² = -4p · (x - h)
     Focus: F(h - p, k); Directrix: x = h + p

---

4.4 Ellipses 🥚
An ellipse is the locus of points such that the sum of distances to two fixed foci F and F' is constant (equal to 2a): |PF| + |PF'| = 2a.
• Major Axis Length = 2a; Semi-major axis = a.
• Minor Axis Length = 2b; Semi-minor axis = b.
• Focal Distance = c (distance from center to each focus).
• Fundamental Relation: a² = b² + c²  ==>  b² = a² - c² (where a > b).
• Eccentricity: e = c / a (0 < e < 1; measures elongation).

Standard Equations (Center at (h, k)):
1. Horizontal Ellipse (Major axis parallel to x-axis, larger denominator under x):
   (x - h)² / a² + (y - k)² / b² = 1
   Vertices: (h ± a, k); Foci: (h ± c, k); Minor axis endpoints: (h, k ± b).
2. Vertical Ellipse (Major axis parallel to y-axis, larger denominator under y):
   (x - h)² / b² + (y - k)² / a² = 1
   Vertices: (h, k ± a); Foci: (h, k ± c); Minor axis endpoints: (h ± b, k).

---

4.5 Hyperbolas ⏳
A hyperbola is the locus of points such that the absolute difference of distances to two fixed foci F and F' is constant (equal to 2a): ||PF'| - |PF|| = 2a.
• Transverse Axis Length = 2a (connects vertices V and V').
• Conjugate Axis Length = 2b.
• Focal Distance = c (distance from center to each focus).
• Fundamental Relation: c² = a² + b²  ==>  b² = c² - a² (where c > a).
• Eccentricity: e = c / a > 1.

Standard Equations (Center at (h, k)):
1. Horizontal Hyperbola (Transverse axis parallel to x-axis, positive term with x):
   (x - h)² / a² - (y - k)² / b² = 1
   Vertices: (h ± a, k); Foci: (h ± c, k)
   Asymptotes: y - k = ±(b / a) · (x - h)
2. Vertical Hyperbola (Transverse axis parallel to y-axis, positive term with y):
   (y - k)² / a² - (x - h)² / b² = 1
   Vertices: (h, k ± a); Foci: (h, k ± c)
   Asymptotes: y - k = ±(a / b) · (x - h)

General Second-Degree Equation:
A·x² + C·y² + D·x + E·y + F = 0
• Circle: A = C (same non-zero sign and magnitude).
• Parabola: Either A = 0 or C = 0 (exactly one quadratic term).
• Ellipse: A and C have the same sign (A · C > 0) but A ≠ C.
• Hyperbola: A and C have opposite signs (A · C < 0).`
  }
];
