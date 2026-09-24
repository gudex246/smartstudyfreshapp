import { Chapter } from '../types';

export const ECONOMICS_MODULE_CHAPTERS: Chapter[] = [
  {
    id: 'econ-ch1',
    courseId: 'econ-1011',
    number: 1,
    title: 'Chapter 1: Basics of Economics 📊',
    summary: 'Definitions of economics (Wealth, Welfare, Scarcity, Growth), scarcity and choice, 4 economic resources, opportunity cost and PPF, basic economic questions, capitalism vs command vs mixed systems, and circular flow models.',
    readTimeMinutes: 25,
    keyFormulas: [
      'Opportunity Cost of Good X = Amount of Good Y Sacrificed / Amount of Good X Gained (ΔY / ΔX)',
      'Slope of PPF = Marginal Rate of Transformation (MRT) = - ΔY / ΔX',
      'Circular Flow Identity: Household Consumption Spending = Business Revenue',
      'Economic Resources & Rewards: Land ➔ Rent, Labor ➔ Wage, Capital ➔ Interest, Entrepreneurship ➔ Profit'
    ],
    content: `Chapter 1: Basics of Economics 📊

1.1 Definition and Nature of Economics 🌐
Economics is one of the most exciting disciplines in the social sciences. The word economy comes from the Greek phrase Oikonomia, meaning one who manages a household (oikos = house, nemein = manage).

Historical Roots:
The science of economics in its modern formal form is about two hundred years old. Adam Smith, widely celebrated as the father of modern economics, published his landmark book, An Inquiry into the Nature and Causes of the Wealth of Nations, in the year 1776.

Four Historical Perspectives on Economics:
1. Wealth Definition (Adam Smith and Classical Economists): Focuses on the production, accumulation, and distribution of material wealth.
2. Welfare Definition (Alfred Marshall): Focuses on mankind in the ordinary business of life, examining that part of individual and social action most closely connected with the attainment and use of material requisites of well-being.
3. Scarcity Definition (Lionel Robbins, 1932): Defines economics as the science that studies human behavior as a relationship between ends and scarce means which have alternative uses. This is the most accepted definition today.
4. Growth and Development Definition (Paul Samuelson): Studies how societies use scarce productive resources over time to produce various commodities and distribute them for consumption among various persons and groups.

Formal Modern Definition:
Economics is a social science that studies the efficient allocation of scarce resources so as to attain the maximum fulfillment of unlimited human needs and wants.

Key Insights Derived from the Definition:
• Scarcity: Resources are limited in supply relative to desires.
• Allocation: Resources must be assigned purposefully among competing uses.
• Efficiency: Productive allocation must be optimal, avoiding waste.
• Unlimited Needs: Human desires expand continuously with technological and cultural evolution.

---

1.2 The Rationales of Economics 💡
Two fundamental facts provide the foundation of economics:
1. Human wants are unlimited and diverse.
2. Economic resources available to satisfy these wants are scarce.

The basic economic problem is therefore about scarcity and choice. Choice is at the heart of all decision-making across individuals, households, businesses, and governments.

---

1.3 Scope and Method of Analysis in Economics 🔬🔭

1.3.1 Scope of Economics: Microeconomics vs. Macroeconomics
Modern economics operates across two complementary analytical levels:

A. Microeconomics 🔍
• Focus: Economic behavior of individual decision-making units (households, single firms, specific industries).
• Central Problem: Price determination and allocation of resources to maximize satisfaction and profits.
• Core Tools: Demand and supply of particular commodities and factors.
• Solves: What, how, and for whom to produce for individual firms and markets.
• Examples: Price of teff in Addis Ababa, a dairy firm's output choice, consumer response to coffee price hikes.

B. Macroeconomics 🌍
• Focus: Aggregate behavior of the whole economy and economy-wide phenomena.
• Central Problem: Determination of national income, aggregate employment, and general price stability.
• Core Tools: Aggregate Demand (AD) and Aggregate Supply (AS).
• Solves: Full employment of national resources, controlling inflation, and promoting economic growth.
• Examples: Ethiopia's annual real GDP growth rate, national inflation rate, balance of payments, foreign currency reserves.

1.3.2 Positive and Normative Analysis ⚖️
• Positive Economics: Concerned with objective analysis of facts and describing the world as it is. Answers: What was? What is? What will be? Contains no moral judgments and can be empirically verified or rejected by real-world data.
  Example: The inflation rate in Ethiopia is 15 percent.
• Normative Economics: Evaluates the desirability of alternative outcomes based on ethics, personal value judgments, and philosophical opinions. Answers: What ought to be? Or what should the economy be? Cannot be proven or rejected by facts alone; disagreements are resolved through societal debate or political voting.
  Example: The government ought to provide free fertilizer subsidies to smallholder farmers.

1.3.3 Inductive and Deductive Reasoning in Economics 🧠
• Inductive Reasoning: Deriving general economic principles or theories from specific empirical observations and factual data (moving from particular facts to general theory).
  Steps: 1. Selecting the problem; 2. Data collection and analysis; 3. Establishing cause-and-effect relationships.
• Deductive Reasoning: Arriving at specific conclusions starting from general fundamental assumptions, axioms, or self-evident truths (moving from general premises to particular conclusions).
  Steps: 1. Identifying the problem; 2. Specifying assumptions; 3. Formulating hypotheses; 4. Testing hypotheses against real-world evidence.

---

1.4 Scarcity, Choice, Opportunity Cost, and the Production Possibilities Frontier (PPF) 📈

Free Resources vs. Scarce (Economic) Resources:
• Free Resources: Available in quantities greater than human desires at zero price (for example, sunshine, ambient outdoor air).
• Scarce Resources: The quantity available is less than what people desire at zero price.

The Four Categories of Economic Resources (Factors of Production):
1. Labor 👷: Physical and mental human effort. Reward: Wage.
2. Land 🌾: Natural resources and gifts of nature (fertile soil, water, minerals, forests). Reward: Rent.
3. Capital 🚜: Manufactured tools, machinery, factories, and transport equipment used to produce other goods. Reward: Interest.
4. Entrepreneurship 💼: Human talent that organizes land, labor, and capital, innovates, and assumes business risks. Reward: Profit.

Important Distinction: Scarcity vs. Shortage ⚠️
• Scarcity is a universal, everlasting condition where resources are limited relative to unlimited human wants.
• Shortage is a temporary, specific market disequilibrium occurring when quantity demanded exceeds quantity supplied at the prevailing market price.

Choice and Opportunity Cost 🔄
Scarcity implies choice, and choice implies cost. Whenever an alternative is chosen, another opportunity is sacrificed.
• Opportunity Cost: The amount or value of the next best alternative sacrificed in order to obtain one more unit of a given product.
• Opportunity Cost is measured in real goods and services forgone, not simply in money expenses.

The Production Possibilities Frontier (PPF) 📉
A graphical curve illustrating the maximum combinations of two goods an economy can produce under conditions of full resource employment and constant technology.

Assumptions of the PPF Model:
1. The quantity and quality of economic resources are fixed during the year.
2. The economy produces only two broad classes of output (e.g., Food vs. Computers).
3. The economy operates at full employment and productive efficiency.
4. Technology remains unchanged throughout the analysis period.
5. Resources are specialized and not equally adaptable across all industries.

Alternative Production Possibilities Schedule:
Point A: Food = 500 tons, Computers = 0 units
Point B: Food = 420 tons, Computers = 500 units (Opportunity cost = 80 tons of food for 500 computers = 0.16 tons per computer)
Point C: Food = 320 tons, Computers = 1000 units (Opportunity cost = 100 tons of food for 500 computers = 0.20 tons per computer)
Point D: Food = 180 tons, Computers = 1500 units (Opportunity cost = 140 tons of food for 500 computers = 0.28 tons per computer)
Point E: Food = 0 tons, Computers = 2000 units (Opportunity cost = 180 tons of food for 500 computers = 0.36 tons per computer)

Three Core Economic Concepts Illustrated by PPF:
• Scarcity: Output combinations beyond the curve (unattainable region) cannot be produced with current resources.
• Choice: Selecting any single point along the curve reflects society's conscious choice.
• Opportunity Cost: The downward-sloping shape reflects trade-offs.

The Law of Increasing Opportunity Cost:
As an economy produces more units of one commodity, the opportunity cost per additional unit rises because resources are specialized and not perfectly adaptable to all production lines. This law gives the PPF its concave shape (bowed outward from the origin).

Economic Growth and PPF Shifts 🚀:
• Outward (Rightward) Shift: Caused by increases in resource quantity/quality or technological breakthroughs in both sectors.
• Asymmetric Growth: An outward shift along only one axis caused by technological improvements specific to that single sector.
• Inward (Leftward) Shift: Caused by wars, natural disasters, severe epidemics, or resource depletion.

---

1.5 The Three Central Questions of Economics ❓
1. What to Produce? (Resource Allocation): Deciding the exact combination of consumer goods vs capital goods, civil vs military goods, and necessity vs luxury goods.
2. How to Produce? (Choice of Technique): Deciding between labor-intensive methods (using more labor relative to capital) and capital-intensive methods (using more automated machinery relative to labor).
3. For Whom to Produce? (Distribution of Output): Deciding how national output is shared among society members (equity vs efficiency).

---

1.6 Economic Systems 🏛️
An economic system is the institutional arrangement established to resolve the basic economic problems.

1. Capitalist Economy (Free Market / Laissez-Faire) 🗽
• Features: Private property rights, consumer sovereignty, profit motive, competitive markets, self-interest, price mechanism coordinates allocation, minimal government interference.
• Advantages: Dynamic flexibility, decentralization of economic power, rapid innovation, higher per-capita growth, wide variety of goods.
• Disadvantages: Income inequality, worker exploitation, market failures, neglect of social goods, negative externalities (such as industrial pollution).

2. Command Economy (Socialist / Centrally Planned) 🚩
• Features: Collective public ownership of means of production, central government planning bureau, complete state control, social welfare orientation, absence of private profit motive.
• Advantages: Absence of wasteful competition, balanced regional development, elimination of private monopoly exploitation, high income equality.
• Disadvantages: Inefficient bureaucratic administration, lack of price signals, lack of incentives for hard work, red-tapism, severe restriction of consumer and producer freedoms.

3. Mixed Economy 🤝
• Features: Co-existence of private and public sectors, economic planning combined with price mechanism, state control of strategic industries (defense, power, telecommunications) alongside private enterprise in consumer goods.
• Advantages: Balances individual enterprise with social welfare, protects against excessive inequality, fosters planned long-term capital development.
• Disadvantages: Risk of public sector inefficiency, regulatory red tape, vulnerability to corruption and black markets if poorly governed.

---

1.7 Decision-Making Units and the Circular Flow Model 🔄

Three Decision-Making Units:
1. Households 👨‍👩‍👧: Own factors of production; sell labor, land, capital, and entrepreneurship; buy final goods and services.
2. Business Firms 🏭: Hire productive inputs; produce and sell final goods and services; seek profit.
3. Government 🏛️: Collects taxes; provides public goods (defense, roads, healthcare, legal systems); provides subsidies to firms and transfer payments to households.

Two Primary Markets:
• Product Market: Market where final goods and services are transacted between buyers and sellers.
• Factor (Input) Market: Market where resources (labor, land, capital) are transacted between households and firms.

Circular Flow Dynamics:
• Two-Sector Model: Clockwise flow represents real physical flows (labor and resources flow from households to firms; final goods flow from firms to households). Counter-clockwise flow represents financial monetary flows (consumption spending flows from households to firms as revenue; wages, rent, interest, and profits flow from firms to households as factor income).
• Three-Sector Model: Incorporates government taxes from households and firms, government spending in product markets, factor payments in factor markets, and welfare transfers/subsidies.`
  },
  {
    id: 'econ-ch2',
    courseId: 'econ-1011',
    number: 2,
    title: 'Chapter 2: Theory of Demand and Supply ⚖️',
    summary: 'Theory of demand, demand schedules and functions, determinants of demand, point and arc price elasticity, income and cross elasticity, theory of supply and elasticity of supply, market equilibrium solving, shortages, surpluses, and shift effects.',
    readTimeMinutes: 28,
    keyFormulas: [
      'Demand Function: Qd = a - bP (where b = |ΔQd / ΔP|)',
      'Point Price Elasticity of Demand: Ed = (ΔQ / ΔP) × (P0 / Q0)',
      'Arc (Midpoint) Elasticity: Ed = [(Q1 - Q0) / (Q0 + Q1)] / [(P1 - P0) / (P0 + P1)]',
      'Income Elasticity of Demand: Yed = (ΔQ / ΔY) × (Y0 / Q0)',
      'Cross-Price Elasticity of Demand: Xed = (ΔQx / ΔPy) × (Py0 / Qx0)',
      'Point Elasticity of Supply: Es = (ΔQs / ΔP) × (P0 / Q0)',
      'Market Equilibrium Condition: Qd = Qs'
    ],
    content: `Chapter 2: Theory of Demand and Supply ⚖️

2.1 Theory of Demand 📉
In economics, demand means much more than a mere desire. Effective demand requires two essential components:
1. Willingness to purchase a commodity.
2. Ability to pay (purchasing power).

The Law of Demand:
Other things remaining constant (ceteris paribus), there is an inverse (negative) relationship between the price of a good and the quantity demanded of that good.
• When Price rises ➔ Quantity Demanded falls.
• When Price falls ➔ Quantity Demanded rises.

Why Does the Demand Curve Slope Downward?
• Income Effect: A price decline enhances the consumer's real purchasing power, enabling them to buy more units with the same nominal budget.
• Substitution Effect: A cheaper commodity replaces relatively more expensive alternative goods.
• Law of Diminishing Marginal Utility: Each successive unit provides less additional satisfaction, so consumers only purchase more if price is lowered.

Demand Function and Schedules:
A typical linear demand function is expressed as:
Qd = a - bP
Where a is autonomous demand (quantity demanded when price is zero), and b is the slope parameter (b = |ΔQ / ΔP|).

Example from Module:
Suppose at Price = 5 Birr, Qd = 7 kg of oranges; at Price = 4 Birr, Qd = 9 kg.
Slope b = (9 - 7) / (4 - 5) = 2 / (-1) = -2
Using Qd = a - 2P at P = 4: 9 = a - 2(4) ➔ a = 17 ➔ Qd = 17 - 2P

Market Demand (Horizontal Summation) 👥:
Market demand is obtained by horizontally adding the individual quantities demanded by all market consumers at each price level.
If an individual demand is P = 10 - Q/2 (which simplifies to Q = 20 - 2P) and there are 100 identical buyers in the market:
Qm = 100 × (20 - 2P) = 2000 - 200P

2.1.2 Determinants of Demand (Demand Shifters) 🔄:
• Change in Quantity Demanded: Movement along the existing demand curve caused solely by a change in the good's own price.
• Change in Demand: Shift of the entire demand curve (rightward for increase, leftward for decrease) caused by non-price factors:
  1. Consumer Income:
     - Normal Goods: Demand increases as income rises (positive relationship).
     - Inferior Goods: Demand decreases as income rises (inverse relationship).
  2. Prices of Related Goods:
     - Substitute Goods (Tea and Coffee): Price of Good Y rises ➔ Demand for Good X increases.
     - Complementary Goods (Cars and Fuel): Price of Good Y rises ➔ Demand for Good X decreases.
  3. Consumer Tastes and Preferences: Positive preferences shift demand rightward.
  4. Expectations of Future Prices or Incomes: Expecting higher future prices increases current demand.
  5. Number of Buyers: Growth in population expands market demand rightward.

2.1.3 Elasticity of Demand 🎯
Elasticity measures the responsiveness of quantity demanded to changes in an independent variable.

A. Price Elasticity of Demand (PED)
1. Point Elasticity:
   Ed = (Percentage change in Qd) / (Percentage change in Price) = (ΔQ / ΔP) × (P0 / Q0)
2. Arc (Midpoint) Elasticity:
   Ed = [(Q1 - Q0) / (Q0 + Q1)] / [(P1 - P0) / (P0 + P1)]

Worked Numerical Example:
Suppose P0 = 5 Birr, Q0 = 100 units. Price drops to P1 = 4 Birr and Q1 increases to 110 units.
Arc Ed = [(110 - 100) / (100 + 110)] / [(4 - 5) / (4 + 5)]
Arc Ed = [10 / 210] / [-1 / 9] = (1 / 21) × (-9 / 1) = -9 / 21 = -3 / 7 = -0.43
Taking absolute value: |Ed| = 0.43 (Inelastic demand).

Five Degrees of Price Elasticity:
• Perfectly Inelastic (|Ed| = 0): Vertical demand curve. Quantity demanded is completely unresponsive to price changes (e.g., life-saving insulin).
• Inelastic (0 < |Ed| < 1): Percentage change in quantity is smaller than percentage change in price (e.g., salt, basic staple grains).
• Unitary Elastic (|Ed| = 1): Percentage change in quantity equals percentage change in price.
• Elastic (|Ed| > 1): Percentage change in quantity exceeds percentage change in price (e.g., luxury goods, branded electronics).
• Perfectly Elastic (|Ed| = ∞): Horizontal demand curve. Buyers purchase any quantity at a fixed price, but demand drops to zero if price increases slightly.

Determinants of Price Elasticity:
1. Availability of close substitutes (more substitutes ➔ more elastic).
2. Time horizon (longer time ➔ more elastic as consumers adjust habits).
3. Proportion of income spent on the item (larger budget share ➔ more elastic).
4. Importance in consumer budget (luxuries are elastic; necessities are inelastic).

B. Income Elasticity of Demand (YED) 💵:
Yed = (ΔQ / ΔY) × (Y0 / Q0)
• Yed > 1 ➔ Luxury Good
• 0 < Yed < 1 ➔ Necessity Normal Good
• Yed < 0 ➔ Inferior Good

C. Cross-Price Elasticity of Demand (XED) 🔄:
Xed = (ΔQx / ΔPy) × (Py0 / Qx0)
• Xed > 0 (Positive) ➔ Substitute Goods (e.g., tea and coffee)
• Xed < 0 (Negative) ➔ Complementary Goods (e.g., fuel and motor vehicles)
• Xed = 0 ➔ Independent Unrelated Goods

---

2.2 Theory of Supply 📈

The Law of Supply:
Other things remaining constant (ceteris paribus), there is a direct (positive) relationship between price and quantity supplied:
• When Price rises ➔ Quantity Supplied rises.
• When Price falls ➔ Quantity Supplied falls.

Determinants of Supply:
1. Price of inputs (labor wages, raw materials, energy): Higher input costs shift supply leftward.
2. Technology: Advances lower costs and shift supply rightward.
3. Weather and climatic conditions: Favorable weather boosts agricultural supply outward.
4. Prices of related goods: Higher prices for alternative crops incentivize farmers to reallocate land.
5. Sellers' expectations: Expecting higher prices in the near future may lead sellers to hoard stock, reducing current supply.
6. Taxes and Subsidies: Taxes shift supply leftward; subsidies shift supply rightward.
7. Number of sellers: More firms expand market supply rightward.

Price Elasticity of Supply (Es) 📐:
Es = (ΔQs / ΔP) × (P0 / Q0)
• Elastic (Es > 1): Supply responds vigorously to price changes.
• Inelastic (Es < 1): Output capacity cannot adjust quickly.
• Perfectly Inelastic (Es = 0): Vertical supply line (e.g., agricultural supply on harvest day).
• Perfectly Elastic (Es = ∞): Horizontal supply line.

---

2.3 Market Equilibrium ⚖️
Market equilibrium occurs at the intersection of market demand and market supply where:
Qd = Qs
• Equilibrium Price (Pe): The market-clearing price.
• Equilibrium Quantity (Qe): The volume bought and sold.

Disequilibrium Scenarios:
• Market Surplus (Excess Supply): Occurs when Market Price > Pe. Sellers cannot clear inventory and compete by lowering price toward Pe.
• Market Shortage (Excess Demand): Occurs when Market Price < Pe. Buyers cannot obtain desired quantities and bid price upward toward Pe.

Comprehensive Numerical Workout:
Given market demand: Qd = 100 - 2P
Given market supply: P = (Qs / 2) + 10 ➔ Qs = 2P - 20
a) Find Equilibrium Price and Quantity:
   Set Qd = Qs ➔ 100 - 2P = 2P - 20
   100 + 20 = 2P + 2P ➔ 120 = 4P ➔ Pe = 30 Birr
   Substitute Pe = 30 into Qd: Qe = 100 - 2(30) = 40 units.
b) Determine market condition at P = 25 Birr:
   Qd = 100 - 2(25) = 50 units
   Qs = 2(25) - 20 = 30 units
   Qd > Qs ➔ Shortage of 50 - 30 = 20 units.
c) Determine market condition at P = 35 Birr:
   Qd = 100 - 2(35) = 30 units
   Qs = 2(35) - 20 = 50 units
   Qs > Qd ➔ Surplus of 50 - 30 = 20 units.`
  },
  {
    id: 'econ-ch3',
    courseId: 'econ-1011',
    number: 3,
    title: 'Chapter 3: Theory of Consumer Behaviour 🛒',
    summary: 'Consumer preferences, concept of utility, cardinal utility approach and assumptions, TU and MU curves, law of diminishing marginal utility, consumer equilibrium in cardinal theory, ordinal utility approach, indifference curves, MRS, budget lines, and consumer optimum.',
    readTimeMinutes: 28,
    keyFormulas: [
      'Marginal Utility: MU = ΔTU / ΔQ = dTU / dQ',
      'Cardinal Equilibrium (Single Commodity): MUx = Px',
      'Cardinal Equilibrium (Two Commodities): MUx / Px = MUy / Py = MU of Money, subject to Px×X + Py×Y = M',
      'Marginal Rate of Substitution: MRS(x,y) = - (ΔY / ΔX) = MUx / MUy',
      'Budget Line Equation: Y = (M / Py) - (Px / Py) × X (Slope = - Px / Py)',
      'Ordinal Consumer Optimum: MRS(x,y) = Px / Py (Tangency Condition)'
    ],
    content: `Chapter 3: Theory of Consumer Behaviour 🛒

3.1 Consumer Preferences 🧐
Consumer theory examines how rational individuals make purchase decisions based on subjective preferences and budget constraints.
• Strict Preference (X ≻ Y): The consumer definitely prefers bundle X over bundle Y.
• Indifference (X ~ Y): The consumer derives equal satisfaction from both bundles.
• Weak Preference (X ⪰ Y): The consumer considers X at least as good as Y.
• Axiom of Transitivity: If X ⪰ Y and Y ⪰ Z, then consistency requires that X ⪰ Z.

---

3.2 The Concept of Utility ✨
Utility is the satisfaction, pleasure, or want-satisfying power derived from consuming a good or service.

Key Characteristics of Utility:
• Utility vs. Usefulness: Utility and usefulness are NOT synonymous. A Picasso painting may have zero functional usefulness but tremendous utility to an art collector.
• Subjective: Utility varies from person to person. A cigarette provides zero utility to a non-smoker.
• Temporal and Spatial Variation: Utility changes with time and location. Hot coffee yields greater utility on a cold morning than at midday.

---

3.3 Approaches to Measuring Utility 📏

3.3.1 The Cardinal Utility Approach 🔢
Formulated by neo-classical economists (such as Alfred Marshall), assuming utility is objectively and cardinally measurable in discrete numerical units called utils (e.g., 1, 2, 3 utils).

Core Assumptions of Cardinal Utility:
1. Consumer Rationality: Consumers systematically maximize total satisfaction subject to budget constraints.
2. Cardinal Measurability: Utility of each commodity is quantitatively measurable.
3. Constant Marginal Utility of Money: The subjective value of one Birr remains constant regardless of the consumer's income level.
4. Diminishing Marginal Utility (DMU): Successive units of a commodity yield progressively smaller increments of utility.
5. Additive Utility Function: Total utility is the additive sum of utilities from individual goods: TU = f(X1, X2, ..., Xn).

Total Utility (TU) vs. Marginal Utility (MU) 📈:
• Total Utility (TU): The aggregate satisfaction obtained from consuming a specific quantity of a good during a given time period.
• Marginal Utility (MU): The additional satisfaction gained from consuming one more unit:
  MU = ΔTU / ΔQ = dTU / dQ

Fundamental Geometric Relationships:
• When MU is positive, TU is increasing.
• When MU equals zero, TU reaches its maximum (satiation / saturation point).
• When MU becomes negative, TU begins declining (disutility / over-consumption).

The Law of Diminishing Marginal Utility (LDMU) 🍌:
As a consumer consumes more units of a standardized commodity in a given time period, the satisfaction derived from each successive unit decreases, ceteris paribus.
Assumptions: Homogeneous units, continuous consumption without time gaps, stable consumer tastes.

Consumer Equilibrium in Cardinal Theory ⚖️:
• Single Commodity Case: The consumer consumes up to the point where the marginal utility of the good equals its market price:
  MUx = Px
• Two or More Commodities Case (Equi-Marginal Principle):
  MUx / Px = MUy / Py = ... = MUn / Pn = MU of Money
  Subject to the budget constraint: Px×X + Py×Y = M

Worked Numerical Example (from Module):
Saron has an income of M = 7 Birr. Price of banana = 1 Birr, Price of bread = 4 Birr.
Testing combinations where MUbanana / Pbanana = MUbread / Pbread = 3:
Banana: at Q = 3, MU = 3 ➔ MU / P = 3 / 1 = 3
Bread: at Q = 1, MU = 12 ➔ MU / P = 12 / 4 = 3
Budget Check: (1 Birr × 3 bananas) + (4 Birr × 1 loaf) = 3 + 4 = 7 Birr (Exactly exhausts income!).
Total Utility achieved: TU = TUbanana(3) + TUbread(1) = 14 + 12 = 26 utils. No other combination yields higher satisfaction within 7 Birr.

Limitations of Cardinal Approach:
1. Utility is a subjective psychological sensation that cannot be quantified cardinally in real life.
2. The assumption of constant marginal utility of money is unrealistic because as money becomes scarcer, its subjective marginal value rises.

---

3.3.2 The Ordinal Utility Approach (Indifference Curve Analysis) 🎨
Pioneered by J.R. Hicks and R.G.D. Allen, ordinal theory asserts that utility cannot be measured in absolute units, but consumers can rank bundles in order of preference (1st, 2nd, 3rd choice).

Assumptions of Ordinal Theory:
1. Rationality of consumers.
2. Utility is ordinal (ranking bundles).
3. Diminishing Marginal Rate of Substitution (MRS).
4. Non-satiation (monotonic preferences: more of a good is strictly preferred to less).
5. Transitivity and consistency of choice.

Indifference Sets, Curves, and Maps 🗺️:
• Indifference Schedule: A tabular list of combinations of two goods yielding identical total utility.
• Indifference Curve (IC): A graphical curve showing different combinations of two goods that give the consumer equal satisfaction.
• Indifference Map: A family of indifference curves representing different levels of satisfaction.

Four Properties of Indifference Curves:
1. Negative Slope (Downward-sloping to the right): Consuming more of Good X requires sacrificing some of Good Y to maintain constant utility.
2. Convex to the Origin: The slope decreases as you move down the curve, reflecting the Law of Diminishing Marginal Rate of Substitution.
3. Higher Curves Represent Higher Satisfaction: Curves further from the origin contain more goods and denote higher welfare.
4. Indifference Curves Cannot Intersect: If two curves intersected, transitivity would be violated (logical contradiction).

Marginal Rate of Substitution (MRS) 🔄:
The rate at which a consumer is willing to give up units of Good Y to obtain one extra unit of Good X while keeping utility constant:
MRS(x,y) = - (ΔY / ΔX) = MUx / MUy
Proof via Total Differential: Along an indifference curve, utility is constant so dU = 0.
dU = (∂U/∂X)dX + (∂U/∂Y)dY = 0 ➔ MUx×dX + MUy×dY = 0 ➔ - dY/dX = MUx / MUy = MRS(x,y).

Mathematical Example:
Given utility function U(X,Y) = X^4 × Y^2
MUx = ∂U/∂X = 4 × X^3 × Y^2
MUy = ∂U/∂Y = 2 × X^4 × Y
MRS(x,y) = MUx / MUy = (4 × X^3 × Y^2) / (2 × X^4 × Y) = 2Y / X

The Budget Line (Price Line) 💳:
Shows all combinations of two goods that exhaust the consumer's nominal income:
M = Px×X + Py×Y ➔ Y = (M / Py) - (Px / Py)×X
• Vertical Intercept: M / Py (all income spent on Good Y).
• Horizontal Intercept: M / Px (all income spent on Good X).
• Slope: - Px / Py (the relative market price ratio).

Shifts of the Budget Line:
• Parallel Shift: Change in income (M) with prices constant.
• Rotation: Change in the price of one good while income and the other price remain constant.

Consumer Optimum (Equilibrium in Ordinal Theory) 🎯:
The consumer maximizes satisfaction where the highest attainable indifference curve is tangent to the budget line:
Slope of Indifference Curve = Slope of Budget Line
MRS(x,y) = Px / Py ➔ MUx / MUy = Px / Py ➔ MUx / Px = MUy / Py

Comprehensive Mathematical Workout (from Module):
Given utility function: U(X,Y) = XY + 2X
Prices: Px = 4 Birr, Py = 2 Birr; Income M = 60 Birr.
Step 1: Budget equation ➔ 4X + 2Y = 60
Step 2: Marginal utilities:
MUx = ∂U/∂X = Y + 2
MUy = ∂U/∂Y = X
Step 3: Tangency condition:
MUx / MUy = Px / Py ➔ (Y + 2) / X = 4 / 2 = 2 ➔ Y + 2 = 2X ➔ Y = 2X - 2
Step 4: Substitute into budget constraint:
4X + 2(2X - 2) = 60 ➔ 4X + 4X - 4 = 60 ➔ 8X = 64 ➔ X = 8 units
Y = 2(8) - 2 = 14 units.
Optimal bundle: X = 8, Y = 14.
At equilibrium, MRS(x,y) = Px / Py = 4 / 2 = 2.`
  },
  {
    id: 'econ-ch4',
    courseId: 'econ-1011',
    number: 4,
    title: 'Chapter 4: The Theory of Production and Cost ⚙️',
    summary: 'Short-run production, fixed vs variable inputs, TP, MP, AP relationships, law of variable proportions, the three stages of production, explicit vs implicit costs, accounting vs economic profit, short-run cost curves (TFC, TVC, TC, AFC, AVC, ATC, MC), and the mirror relationship between production and cost curves.',
    readTimeMinutes: 28,
    keyFormulas: [
      'Production Function: Q = f(L, K)',
      'Marginal Product of Labor: MPL = dTP / dL = ΔQ / ΔL',
      'Average Product of Labor: APL = TP / L',
      'Economic Profit = Total Revenue - (Explicit Costs + Implicit Costs)',
      'Total Cost: TC = TFC + TVC',
      'Average Cost: ATC = TC / Q = AFC + AVC',
      'Marginal Cost: MC = dTC / dQ = dTVC / dQ',
      'Duality Relationship: MC = w / MPL and AVC = w / APL'
    ],
    content: `Chapter 4: The Theory of Production and Cost ⚙️

4.1 Theory of Production in the Short Run 🏭
Production is the technical transformation of inputs into finished outputs that have exchange value and create utility.

Inputs and Time Horizons:
• Fixed Inputs: Inputs whose quantity cannot be readily changed in the short run (e.g., factory buildings, heavy machinery, specialized land).
• Variable Inputs: Inputs whose quantity can be altered almost instantaneously in response to desired output changes (e.g., raw materials, unskilled labor).
• Short Run: A planning period in which at least one input is fixed.
• Long Run: A planning horizon long enough that all factors of production are variable (no fixed inputs).

Short-Run Product Concepts:
• Total Product (TP or Q): The total physical output produced by combining variable labor (L) with fixed capital (K): Q = f(L).
• Marginal Product of Labor (MPL): The extra output resulting from hiring one additional worker:
  MPL = dTP / dL = ΔQ / ΔL
• Average Product of Labor (APL): Total output per worker:
  APL = TP / L

Geometric Relationship Between MPL and APL:
• When APL is rising, MPL > APL (pulls average upward).
• When APL reaches its maximum, MPL = APL (MP cuts AP at its peak).
• When APL is declining, MPL < APL (pulls average downward).

The Law of Variable Proportions (Law of Diminishing Returns) 📉:
As successive units of a variable input (labor) are added to a fixed amount of plant and equipment, beyond some point the marginal product attributed to each additional unit of the variable input will decline.
Assumptions: Technology is constant, homogeneous labor quality.

The Three Stages of Production 🔢:
1. Stage I (Increasing Average Returns):
   • Extends from L = 0 to the point where APL reaches its maximum (MPL = APL).
   • Fixed inputs are under-utilized because there are too few workers to operate the machinery efficiently.
   • Inefficient region: A rational firm will not stop here because adding workers continues to increase efficiency.
2. Stage II (Diminishing Marginal Returns - The Rational Stage):
   • Extends from maximum APL (MPL = APL) to the point where MPL = 0 (where TP reaches its maximum).
   • Additional workers contribute positively to output, and fixed capital is being utilized efficiently.
   • Rational firms operate exclusively within Stage II, selecting the exact employment level based on wage rates and product prices.
3. Stage III (Negative Marginal Returns):
   • Begins where MPL becomes negative and TP starts falling.
   • Fixed plant is over-utilized and overcrowded, creating physical bottlenecks.
   • Irrational region: A rational firm never operates in Stage III.

Calculus Workout Example (from Module):
Given production function: Q = 4KL - 0.6K^2 - 0.1L^2 with fixed capital K = 5.
Substitute K = 5: Q = 4(5)L - 0.6(25) - 0.1L^2 = 20L - 15 - 0.1L^2
a) Average Product of Labor:
   APL = Q / L = 20 - 15/L - 0.1L
b) Labor level that maximizes total output Q:
   Set MPL = dQ/dL = 0 ➔ 20 - 0.2L = 0 ➔ 0.2L = 20 ➔ L = 100 workers.
c) Maximum Achievable Output:
   Qmax = 20(100) - 15 - 0.1(100^2) = 2000 - 15 - 1000 = 985 units.

---

4.2 Theory of Costs in the Short Run 💰

Explicit Costs vs. Implicit Costs:
• Explicit (Accounting) Costs: Direct out-of-pocket monetary payments made to acquire purchased inputs (wages, raw materials, electricity, building rent).
• Implicit Costs: The estimated monetary opportunity cost of self-owned, non-purchased resources used in the business (e.g., the salary the entrepreneur forgave by leaving their previous job, interest on personal savings invested in the firm).
• Economic Cost = Explicit Costs + Implicit Costs
• Accounting Profit = Total Revenue - Explicit Costs
• Economic Profit = Total Revenue - (Explicit Costs + Implicit Costs)
• Note: Accounting Profit will always be greater than Economic Profit by the exact amount of implicit costs!

Short-Run Total Cost Curves:
• Total Fixed Cost (TFC): Expenses that do not vary with output volume (straight horizontal line).
• Total Variable Cost (TVC): Expenses that change directly with output (inverse S-shape due to the law of variable proportions).
• Total Cost (TC): The vertical sum of TFC and TVC: TC = TFC + TVC (inverse S-shape starting at TFC when Q = 0).

Short-Run Per-Unit Cost Curves:
• Average Fixed Cost (AFC) = TFC / Q (declines continuously, approaching both axes asymptotically).
• Average Variable Cost (AVC) = TVC / Q (U-shaped).
• Average Total Cost (ATC or AC) = TC / Q = AFC + AVC (U-shaped; vertical gap between ATC and AVC equals AFC).
• Marginal Cost (MC) = dTC / dQ = dTVC / dQ (U-shaped; slope of TC and TVC).

Crucial Cost Curve Properties:
• The MC curve cuts both the AVC and ATC curves precisely at their minimum points.
• When MC < ATC, ATC is falling; when MC > ATC, ATC is rising.

The Duality Between Production and Cost (Mirror Image) 🪞:
Assuming a constant wage rate w:
• MC = ΔTVC / ΔQ = w × (ΔL / ΔQ) = w / MPL
  ➔ MC is the direct reciprocal (mirror image) of MPL! When MPL is rising, MC is falling. When MPL is at its maximum, MC is at its minimum!
• AVC = TVC / Q = w × (L / Q) = w / APL
  ➔ AVC is the direct reciprocal of APL! When APL reaches its peak, AVC is at its minimum!

Calculus Workout Example (from Module):
Given cost function: TC = 2Q^3 - 2Q^2 + Q + 10
a) TFC = 10, TVC = 2Q^3 - 2Q^2 + Q
b) Derivations:
   AFC = 10 / Q
   AVC = TVC / Q = 2Q^2 - 2Q + 1
   ATC = 2Q^2 - 2Q + 1 + 10/Q
   MC = dTC/dQ = 6Q^2 - 4Q + 1
c) Find output level minimizing MC:
   dMC/dQ = 12Q - 4 = 0 ➔ Q = 4/12 = 1/3 (0.33 units).
   Minimum MC = 6(1/3)^2 - 4(1/3) + 1 = 6/9 - 4/3 + 1 = 0.33 Birr.
d) Find output level minimizing AVC:
   dAVC/dQ = 4Q - 2 = 0 ➔ Q = 2/4 = 0.5 units.
   Minimum AVC = 2(0.5^2) - 2(0.5) + 1 = 0.5 - 1 + 1 = 0.5 Birr.`
  },
  {
    id: 'econ-ch5',
    courseId: 'econ-1011',
    number: 5,
    title: 'Chapter 5: Market Structure 🏢',
    summary: 'Concept of market in physical and digital space, Perfect Competition assumptions and profit maximization (TR-TC and MR-MC approaches), short-run equilibrium and shutdown points, Pure Monopoly characteristics and sources, Monopolistic Competition, Oligopoly, and comprehensive market models comparison.',
    readTimeMinutes: 28,
    keyFormulas: [
      'Total Revenue: TR = P × Q',
      'Average Revenue: AR = TR / Q = P',
      'Marginal Revenue: MR = dTR / dQ',
      'Golden Profit Maximization Rule: MR = MC (First Order Condition)',
      'Second Order Condition: dMC/dQ > dMR/dQ (MC must be rising)',
      'Economic Profit: π = (P - ATC) × Q',
      'Shutdown Condition: P < minimum AVC'
    ],
    content: `Chapter 5: Market Structure 🏢

5.1 The Concept of Market in Physical and Digital Space 🌐
According to the American Marketing Association, a market is the process of planning and executing the conception, pricing, promotion, and distribution of goods, services, and ideas to create exchanges that satisfy individual and organizational objectives.
• Physical Markets: Locations where buyers and sellers physically congregate to conduct transactions in person.
• Digital Markets: Electronic networks and internet platforms that connect buyers and sellers digitally, enabling round-the-clock trading without physical co-presence.

---

5.2 Perfectly Competitive Market 🌾

Six Fundamental Assumptions of Pure Competition:
1. Large Number of Buyers and Sellers: Each individual firm produces an infinitesimally small fraction of total market output. No individual buyer or seller can influence market price. Sellers are price takers.
2. Homogeneous Product: All firms produce identical, standardized commodities (e.g., wheat, raw agricultural produce). Buyers perceive zero difference.
3. Perfect Mobility of Factors of Production: Resources (labor, capital, raw materials) are entirely free to move across industries and regions.
4. Free Entry and Exit: No legal, financial, or technological barriers prevent new firms from entering or existing firms from leaving.
5. Perfect Market Knowledge: All buyers and sellers possess complete information regarding current and future prices and availability.
6. Absence of Government Interference: Free enterprise prevails without price controls, discriminatory taxes, or rationing.

Demand Curve Faced by a Competitive Firm:
Because the competitive firm is a price taker, it can sell any desired quantity at the prevailing market equilibrium price (Pm).
• Demand curve (Df) is a horizontal line at the market price: Df = P = AR = MR.

Profit Maximization Approaches:
1. Total Approach (TR - TC Approach): The firm maximizes profit at the output level where the positive vertical distance between Total Revenue (TR = P × Q) and Total Cost (TC) is greatest.
2. Marginal Approach (MR - MC Approach):
   • First Order Condition (FOC): MR = MC
   • Second Order Condition (SOC): Slope of MC > Slope of MR (MC must be rising at the intersection).

Four Short-Run Economic Positions for a Competitive Firm ⚖️:
1. Supernormal (Economic) Profit: Occurs when Price > ATC at the MR = MC output.
2. Normal Profit (Zero Economic Profit / Break-Even): Occurs when Price = ATC at the MR = MC output.
3. Operating at a Loss: Occurs when AVC < Price < ATC. The firm continues operating in the short run because revenue covers all variable operating costs and partially offsets fixed overhead expenses.
4. The Shutdown Point: Occurs when Price falls below minimum AVC (P < min AVC). The firm minimizes losses by shutting down operations immediately.

Comprehensive Calculus Workout (from Module):
Given competitive price P = $10, and TC = 2 + 10q - 4q^2 + q^3
a) Profit-maximizing output:
   In perfect competition, MR = P = 10.
   MC = dTC/dq = 10 - 8q + 3q^2
   Equating MR = MC: 10 = 10 - 8q + 3q^2 ➔ -8q + 3q^2 = 0 ➔ q(-8 + 3q) = 0
   Solutions: q = 0 or q = 8/3 (2.67 units).
   Second Order Test: dMC/dq = -8 + 6q
   At q = 0: slope is -8 (negative, invalid).
   At q = 8/3: slope is -8 + 6(8/3) = 8 > 0 (positive, valid!).
   Profit-maximizing output is q = 8/3 units.
b) Equilibrium Maximum Profit:
   TR = P × q = 10 × (8/3) = 26.67 Birr
   TC at q = 8/3: 2 + 10(8/3) - 4(8/3)^2 + (8/3)^3 = 19.18 Birr
   Profit = TR - TC = 26.67 - 19.18 = 7.48 Birr.
c) Minimum Price to Stay in the Market (Shutdown Price):
   TVC = 10q - 4q^2 + q^3 ➔ AVC = 10 - 4q + q^2
   Find minimum AVC: dAVC/dq = -4 + 2q = 0 ➔ q = 2 units.
   Min AVC = 10 - 4(2) + 2^2 = 10 - 8 + 4 = 6 Birr.
   The firm requires a minimum price of $6 to avoid shutting down.

---

5.3 Pure Monopoly Market 🏰
A market structure at the opposite end of competition, characterized by a single seller supplying a unique product with no close substitutes.

Characteristics of Monopoly:
1. Single Seller: One firm constitutes the entire industry.
2. No Close Substitutes: The product is unique; buyers have no alternative choices.
3. Price Maker: The monopolist faces the downward-sloping industry demand curve and exercises control over market price by altering output.
4. Blocked Entry: Absolute economic, legal, or technological barriers prevent potential rivals from entering.

Sources of Monopoly Power:
1. Legal Restrictions: Government charters, public utility franchises (e.g., postal service, national electricity grid, water supply).
2. Control Over Key Raw Materials: Exclusive ownership of vital mineral deposits (e.g., historic bauxite control by ALCOA).
3. Natural Monopolies: Huge economies of scale mean a single gigantic firm can supply the entire market at a lower average cost than two or more smaller firms.
4. Patent Rights: Intellectual property laws granting inventors exclusive production rights for a specified period.

---

5.4 Monopolistically Competitive Market 🏬
A market structure blending elements of both competition and monopoly.
Characteristics:
1. Differentiated Products: Goods are close substitutes but differentiated by branding, packaging, quality, style, or location (real vs fancied differentiation).
2. Many Buyers and Sellers: Numerous independent firms.
3. Easy Entry and Exit: Minimal barriers to entry in the long run.
4. Non-Price Competition: Aggressive advertising, warranties, brand positioning, and customer service to cultivate brand loyalty.

---

5.5 Oligopoly Market 🚗
A market dominated by a few large, mutually interdependent firms.
Characteristics:
1. Few Dominant Firms: A handful of giant firms control the majority of industry sales.
2. Mutual Interdependence: Every firm's pricing, advertising, and output decisions directly affect rival firms, creating strategic game-playing.
3. Significant Entry Barriers: High capital startup costs, patents, and economies of scale.
4. Homogeneous or Differentiated Products: Homogeneous oligopoly (steel, cement) vs Differentiated oligopoly (automobiles, smartphones).
5. Non-Price Competition: Firms avoid direct price wars and compete through product innovation and advertising.
• Duopoly: A special case of oligopoly with exactly two competing firms.

Summary Comparison Table of Market Models:
• Pure Competition: Large number of firms, homogeneous product, no price control (price taker), very easy entry (e.g., agricultural produce).
• Monopolistic Competition: Many firms, differentiated products, narrow price control, relatively easy entry (e.g., clothing, restaurants, soap).
• Oligopoly: Few dominant firms, homogeneous or differentiated products, price control limited by interdependence/collusion, difficult entry (e.g., steel, automobiles, telecom).
• Pure Monopoly: Single firm, unique product without substitutes, significant price control (price maker), blocked entry (e.g., local power and water utilities).`
  },
  {
    id: 'econ-ch6',
    courseId: 'econ-1011',
    number: 6,
    title: 'Chapter 6: Fundamental Concepts of Macroeconomics 🌍',
    summary: 'Macroeconomic goals, National Income Accounting (GDP vs GNP), expenditure, income, and value-added approaches, limitations of GDP, other social accounts (NNP, NI, PI, PDI), nominal vs real GDP, GDP deflator, CPI, business cycle phases, unemployment types, inflation causes and economic costs, trade and budget deficits, and monetary and fiscal policy tools.',
    readTimeMinutes: 30,
    keyFormulas: [
      'GNP = GDP + Net Factor Income from Abroad (NFI)',
      'Expenditure GDP: GDP = C + I + G + (X - M)',
      'Net Investment = Gross Private Domestic Investment - Depreciation',
      'Net National Product: NNP = GNP - Depreciation',
      'National Income: NI = NNP - Indirect Business Taxes (IBT)',
      'Real GDP = (Nominal GDP / GDP Deflator) × 100',
      'GDP Deflator = (Nominal GDP / Real GDP) × 100',
      'CPI = (Σ Pt × Q0 / Σ P0 × Q0) × 100',
      'Inflation Rate = [(Pt - Pt-1) / Pt-1] × 100',
      'Fisher Equation: Nominal Interest Rate (I) = Real Interest Rate (r) + Inflation Rate (Π)',
      'Unemployment Rate = (Unemployed / Total Labor Force) × 100',
      'Trade Balance: Net Capital Outflow (S - I) = Net Exports (NX)'
    ],
    content: `Chapter 6: Fundamental Concepts of Macroeconomics 🌍

6.1 Goals of Macroeconomics 🎯
Macroeconomics investigates the aggregate behavior of the economy as an interconnected whole.
Primary Policy Goals:
1. High and sustained economic growth (annual expansion in real national output).
2. Full employment (reducing involuntary unemployment to the natural rate).
3. Price stability (controlling high or volatile inflation).
4. Balance of Payments (BoP) and budget deficit equilibrium.
5. Equitable distribution of national income among citizens.

---

6.2 National Income Accounting (NIA) 📊
National Income Accounting provides statistical measurements of a country's aggregate output, income, and expenditure.

Gross Domestic Product (GDP) vs. Gross National Product (GNP):
• Gross Domestic Product (GDP): The total market value of all currently produced final goods and services produced within the geographic boundaries of a country during a specified time period (usually one year).
  Key principles: Measures current production only; counts only final goods (excludes intermediate goods to prevent double counting); based on geographical borders regardless of ownership.
• Gross National Product (GNP): The total market value of all final goods and services produced by domestically owned factors of production, regardless of where they are geographically located.
  GNP = GDP + Net Factor Income from Abroad (NFI)
  - NFI > 0 ➔ GNP > GDP
  - NFI < 0 ➔ GNP < GDP
  - NFI = 0 ➔ GNP = GDP

Three Approaches to Measure GDP 📐:

I. The Product (Value-Added) Approach:
Calculates GDP by summing the value added by every firm at each stage of production.
Avoiding Double Counting:
Example: Farmer produces wheat and sells to flour miller for 500 Birr (Value added = 500). Miller sells flour to baker for 2,000 Birr (Value added = 1,500). Baker sells bread to consumer for 2,500 Birr (Value added = 500). Total GDP = 500 + 1,500 + 500 = 2,500 Birr (the final price of bread). Adding all sales (500 + 2000 + 2500 = 5000) causes 2500 Birr of double counting!

II. The Expenditure Approach:
Sums all expenditures on final goods and services across four economic sectors:
GDP = C + I + G + (X - M)
1. Personal Consumption Expenditure (C): Spending by households on durable goods, non-durable goods, and services.
2. Gross Private Domestic Investment (I): Spending by businesses on machinery, commercial buildings, residential housing construction, and inventory changes.
   Note: Net Private Domestic Investment = Gross Investment - Depreciation.
3. Government Purchases (G): Spending on public sector payrolls, schools, roads, and defense. Excludes welfare transfer payments (pensions, subsidies).
4. Net Exports (NX = X - M): Exports (X) minus Imports (M).

III. The Income Approach:
Sums all factor incomes earned by resource owners in production plus depreciation and indirect business taxes, minus subsidies:
GDP = Compensation of Employees (Wages) + Rental Income + Net Interest + Profits (Corporate profits + Proprietors' income) + Indirect Business Taxes + Depreciation - Subsidies.

Other National Income Accounts 📑:
• Net National Product (NNP) = GNP - Capital Consumption Allowance (Depreciation)
• National Income (NI) = NNP - Indirect Business Taxes (IBT)
• Personal Income (PI) = NI - [Social security taxes + Corporate income taxes + Retained corporate profits] + [Public transfer payments + Net interest on government debt]
• Personal Disposable Income (PDI or DI) = PI - Personal Taxes
  Note: Disposable Income is either consumed or saved: DI = C + S.

Limitations of GDP as a Measure of Welfare ⚠️:
1. Ignores the Underground Economy (informal market transactions, unrecorded cash activities, parallel currency markets).
2. Excludes Non-Monetized Household Production (subsistence farming, childcare, domestic chores).
3. Does not account for environmental degradation, pollution, or resource depletion.
4. Fails to reflect income distribution or quality-of-life enhancements.

---

6.3 Nominal vs. Real GDP and the GDP Deflator 📈
• Nominal GDP: Measures output valued at current market prices of the year in which goods were produced (distorted by price inflation).
• Real GDP: Measures output valued at constant base-year prices, isolating real physical growth from price changes.
• GDP Deflator: A comprehensive price index reflecting the overall price level:
  GDP Deflator = (Nominal GDP / Real GDP) × 100
  In the base year, GDP Deflator is always 100.

Worked Numerical Example (from Module):
2017 (Base Year): Good X (Q=20, P=$5), Good Y (Q=8, P=$50)
Nominal GDP 2017 = (20 × 5) + (8 × 50) = $100 + $400 = $500
Real GDP 2017 = $500 (GDP Deflator = 100)

2018: Good X (Q=25, P=$20), Good Y (Q=10, P=$100)
Nominal GDP 2018 = (25 × 20) + (10 × 100) = $500 + $1000 = $1500
Real GDP 2018 (at 2017 prices) = (25 × 5) + (10 × 50) = $125 + $500 = $625
GDP Deflator 2018 = (1500 / 625) × 100 = 240.
This indicates the general price level in 2018 was 140% higher than the base year!

---

6.4 The Consumer Price Index (CPI) vs. GDP Deflator 🛒
• Consumer Price Index (CPI): Measures changes in the cost of a fixed representative basket of consumer goods bought by urban households:
  CPI = (Current Cost of Basket / Base Year Cost of Basket) × 100

Key Differences Between CPI and GDP Deflator:
1. Coverage: GDP deflator measures prices of all domestically produced goods; CPI measures prices of only goods purchased by consumers.
2. Imported Goods: Imported consumer goods are included in CPI, but excluded from GDP Deflator.
3. Weighting: CPI uses a fixed basket of goods (Laspeyres weighting), whereas GDP Deflator allows the basket to vary dynamically (Paasche weighting).

---

6.5 The Business Cycle 📉📈
The business cycle describes recurrent fluctuations in total output, employment, and trade over time.
Four Distinct Phases:
1. Peak / Boom 🏔️: Capacity utilization is at its highest, output exceeds long-term trend, unemployment is very low, inflationary pressures build.
2. Contraction / Recession 📉: Economic output shrinks, corporate profits fall, and cyclical unemployment rises.
3. Trough / Depression 🕳️: The lowest turning point of the cycle; severe unemployment and idle plant capacity.
4. Expansion / Recovery 🚀: Economic activity rebounds, business confidence strengthens, output and employment rise toward potential GDP.

---

6.6 Macroeconomic Problems 🛑

6.6.1 Unemployment 👥
• Productive Population (in Ethiopia): Ages 14 to 60.
• Labor Force = Employed Persons + Unemployed Persons (actively searching for work).
• Unemployment Rate = (Unemployed Persons / Labor Force) × 100

Types of Unemployment:
1. Frictional Unemployment: Short-term unemployment arising as workers transition between jobs or university graduates seek their first position.
2. Structural Unemployment: Caused by fundamental mismatches between workers' skills or geographical locations and employer requirements.
3. Cyclical Unemployment: Caused by economy-wide downturns and deficiencies in aggregate demand during recessions.
• Natural Rate of Unemployment = Frictional + Structural Unemployment (prevails when cyclical unemployment is zero). Full employment does not mean zero unemployment!

6.6.2 Inflation 💸
A sustained and persistent rise in the general price level over time.
• Inflation Rate = [(CPI_t - CPI_t-1) / CPI_t-1] × 100

Causes of Inflation:
• Demand-Pull Inflation: Rapid growth in aggregate demand outpaces aggregate productive capacity ("Too much money chasing too few goods").
• Cost-Push Inflation: Sharp increases in production costs (fuel, wages, imported inputs) that shift aggregate supply leftward.

Economic Costs of Inflation:
• Erodes real purchasing power of currency.
• Shoe-Leather Costs: Wasted time and effort making frequent bank trips to minimize cash holdings.
• Menu Costs: Administrative expenses of continually reprinting catalogs and price tags.
• Wealth Redistribution: Unanticipated inflation transfers wealth from creditors (lenders) to debtors (borrowers).
• Fisher Equation: Nominal Interest Rate (I) = Real Interest Rate (r) + Expected Inflation (Π).

6.6.3 Budget Deficits and Trade Deficits ⚖️
• Budget Deficit: Government spending (G) exceeds tax revenues (T). Financed through concessional domestic or foreign borrowing.
• Trade Balance: S - I = NX (Net Capital Outflow equals Net Exports).
  - Trade Surplus: S > I, NX > 0 (net lender to the world).
  - Trade Deficit: I > S, NX < 0 (net borrower from the world).

---

6.7 Macroeconomic Policy Instruments 🏛️

6.7.1 Monetary Policy 🏦
Administered by the Central Bank (e.g., National Bank of Ethiopia).
Tools: Reserve requirements, discount rates, open market operations.
• Expansionary: Lowers interest rates and expands credit to combat recessions.
• Contractionary: Hikes interest rates and tightens credit to suppress inflation.

6.7.2 Fiscal Policy 📜
Administered by the Ministry of Finance using Government Spending and Taxation.
Four Major Functions of Fiscal Policy:
1. Allocation: Directing public revenues to specific national priorities (infrastructure, education, public health).
2. Distribution: Utilizing progressive taxation and targeted subsidies to reduce inequality.
3. Stabilization: Smoothing business cycle swings to prevent runaway inflation or deep recessions.
4. Development: Financing strategic long-term development projects and correcting market failures.`
  }
];
