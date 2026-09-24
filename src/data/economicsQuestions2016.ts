import { ExamQuestion } from '../types';

/**
 * Haramaya University - College of Business and Economics
 * Department of Economics - Midterm Examination (2016 E.C.)
 * Course: Economics for Social Science (Econ 1011)
 * Complete official exam with answers and in-depth explanations in English, Amharic (አማርኛ), and Afaan Oromoo.
 */
export const ECONOMICS_2016_MIDTERM_QUESTIONS: ExamQuestion[] = [
  // =========================================================================
  // PART ONE: TRUE / FALSE (1.5 points each)
  // =========================================================================
  {
    id: 'econ-2016-mid-q1',
    courseId: 'econ-1011',
    courseCode: 'Econ 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'true_false',
    difficulty: 'easy',
    topic: 'Demand Theory: Change in Quantity Demanded vs Change in Demand',
    points: 1.5,
    question: 'The only factor that can cause a change in quantity demand is its own price of the product',
    options: ['True', 'False'],
    correctAnswer: 0,
    hint: 'Distinguish between a movement along the demand curve versus a shift of the demand curve.',
    explanation: 'In microeconomics, a fundamental distinction exists between a "change in quantity demanded" and a "change in demand". A change in quantity demanded refers strictly to a movement along a fixed demand curve and is caused ONLY by a change in the product\'s own price (ceteris paribus). In contrast, changes in any non-price determinants (consumer income, tastes, prices of substitutes/complements, expectations, and number of buyers) shift the entire curve, which is defined as a "change in demand". Therefore, the statement is True.',
    explanationAmharic: 'በማይክሮ ኢኮኖሚክስ ውስጥ በ"የፍላጎት መጠን ለውጥ" (Change in quantity demanded) እና በ"የፍላጎት ለውጥ" (Change in demand) መካከል መሠረታዊ ልዩነት አለ። የፍላጎት መጠን ለውጥ የሚባለው በፍላጎት ኩርባ ላይ የሚደረግ እንቅስቃሴ (movement along the curve) ሲሆን ይህም የሚከሰተው በራሱ በእቃው መሸጫ ዋጋ (own price of the product) ለውጥ ምክንያት ብቻ ነው። ከዋጋ ውጭ ያሉ ሌሎች ምክንያቶች (እንደ የሸማቾች ገቢ፣ የተተኪና አጋዥ እቃዎች ዋጋ፣ ምርጫ እና የገዢዎች ብዛት) አጠቃላይ የፍላጎት ኩርባውን ወደ ቀኝ ወይም ግራ ያዛውራሉ (shift ያደርጋሉ)፤ ይህም የፍላጎት ለውጥ ይባላል። ስለዚህ አረፍተ ነገሩ እውነት (True) ነው።',
    explanationAfaanOromo: 'Diinagdee maayikiroo keessatti "jijjiirama baay\'ina fedhii" (change in quantity demanded) fi "jijjiirama fedhii" (change in demand) gidduu garaagarummaa guddaatu jira. Jijjiiramni baay\'ina fedhii sarara fedhii tokko irra socho\'uu (movement along the curve) kan agarsiisu yoo ta\'u, kunis gatii oomishichaa mataa isaatiin (own price of the product) qofa dhufa. Sababoonni gatii alaa jiran (galii, gatii meeshaalee wal-qabatanii, fedhii maamilaa) immoo sarara fedhii guutuu gara mirgaatti ykn bitaatti siqsu (shift), kunis jijjiirama fedhii jedhama. Kanaafuu, himni kun Dhugaa (True) dha.'
  },
  {
    id: 'econ-2016-mid-q2',
    courseId: 'econ-1011',
    courseCode: 'Econ 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'true_false',
    difficulty: 'medium',
    topic: 'Elasticity of Demand: Linear Demand Curve Properties',
    points: 1.5,
    question: 'Along a down-ward slopping straight line demand curve, price elasticity is constant',
    options: ['True', 'False'],
    correctAnswer: 1,
    hint: 'Slope is constant along a straight line, but is elasticity (which depends on P/Q) also constant?',
    explanation: 'Along a downward-sloping linear (straight-line) demand curve, the slope (ΔP/ΔQ) is constant, but the price elasticity of demand (Ed = |(dQ/dP) × (P/Q)|) is NOT constant. Elasticity varies continuously at every point along the line: at the vertical price intercept, elasticity is infinite (Ed = ∞); along the upper segment, demand is elastic (Ed > 1); at the midpoint, demand is unitary elastic (Ed = 1); along the lower segment, demand is inelastic (Ed < 1); and at the horizontal quantity intercept, elasticity is zero (Ed = 0). Therefore, the statement is False.',
    explanationAmharic: 'ቁልቁል በሚያዘነብል ቀጥተኛ የፍላጎት መስመር (downward-sloping straight-line demand curve) ላይ፣ የኩርባው ስሎፕ (Slope = ΔP/ΔQ) ቋሚ ቢሆንም፣ የፍላጎት የዋጋ ላስቲክነት (Price Elasticity of Demand) ግን ቋሚ አይደለም። ላስቲክነቱ በኩርባው ላይ በየነጥቡ ይለወጣል፡ በከፍተኛው የዋጋ መገናኛ ነጥብ ላይ ወሰን የለሽ (Ed = ∞)፣ በላይኛው አጋማሽ ላይ ላስቲክ (Ed > 1)፣ በመካከለኛው ነጥብ ላይ አሃዳዊ (Ed = 1)፣ በታችኛው አጋማሽ ላይ ኢ-ላስቲክ (Ed < 1)፣ እንዲሁም በመጨረሻው የታችኛው ነጥብ ላይ ዜሮ (Ed = 0) ይሆናል። ስለዚህ አረፍተ ነገሩ ሀሰት (False) ነው።',
    explanationAfaanOromo: 'Sarara fedhii qajeelaa fi gara gadiitti gombifamaa ta\'e irratti, daagaan sararichaa (slope) dhaabbataa ta\'us, laastikiin gatii fedhii (price elasticity of demand) garuu dhaabbataa miti. Qabxii hundarratti ni jijjiirama: bakka sararri gatii qaxxaamurutti daangaa hin qabu (Ed = ∞), walakkaa olitti laastikii olaanaa (Ed > 1), walakkaa sirrii irratti laastikii tokkummaa (Ed = 1), walakkaa gadiitti laastikii gadi-aanaa (Ed < 1), fi bakka sarara baay\'inaa qaxxaamurutti zeeroo (Ed = 0) ta\'a. Kanaafuu, himni kun Soba (False) dha.'
  },
  {
    id: 'econ-2016-mid-q3',
    courseId: 'econ-1011',
    courseCode: 'Econ 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'true_false',
    difficulty: 'easy',
    topic: 'Scarcity & Economic Resources',
    points: 1.5,
    question: 'A resource is said to be scarce or economic resource when the amount available to a society is less than what people want to have at a given price',
    options: ['True', 'False'],
    correctAnswer: 0,
    hint: 'Think about whether scarcity means desires exceed available supply at a zero or given price.',
    explanation: 'In economics, a resource is defined as scarce (or an economic resource) when the quantity available to society is insufficient to satisfy people\'s wants at a given (or zero) price. Because economic resources are scarce, they command a positive price, require rationing, and necessitate choices involving opportunity cost. In contrast, "free goods" (like sunlight or ambient air) are available in quantities exceeding human desire without incurring any opportunity cost. Therefore, the statement is True.',
    explanationAmharic: 'በኢኮኖሚክስ ውስጥ አንድ ሀብት ውሱን ወይም ኢኮኖሚያዊ ሀብት (scarce / economic resource) የሚባለው ለማህበረሰቡ የቀረበው መጠን ሰዎች በነጻ ወይም በተወሰነ ዋጋ ከሚፈልጉት መጠን አንጻር ሲታይ አነስተኛ ሲሆን ነው። እጥረት በመኖሩ ምክንያት እነዚህ ሀብቶች የዋጋ ተመን ያላቸው ሲሆን የዕድል ወጪን (opportunity cost) እና ምርጫን ያስከትላሉ። ይህም አቅርቦታቸው ከሰው ፍላጎት በላይ በነፃ ከሚገኙ ነፃ እቃዎች (free goods) ይለያቸዋል። ስለዚህ አረፍተ ነገሩ እውነት (True) ነው።',
    explanationAfaanOromo: 'Diinagdee keessatti qabeenyi tokko hanqina qaba ykn qabeenya diinagdeeti (scarce/economic resource) kan jedhamu baayinni hawaasaaf jiru baay\'ina namoonni gatii kenname irratti barbaadan gadi yoo ta\'eedha. Hanqinni waan jiruuf qabeenyi kun gatii qabaata, akkasumas filannoo fi aarsaa (opportunity cost) gaafata. Kunis meeshaalee bilisaa (free goods) kan akka qilleensaa irraa adda isa taasisa. Kanaafuu, himni kun Dhugaa (True) dha.'
  },
  {
    id: 'econ-2016-mid-q4',
    courseId: 'econ-1011',
    courseCode: 'Econ 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'true_false',
    difficulty: 'easy',
    topic: 'Cross-Price Elasticity vs Income Elasticity',
    points: 1.5,
    question: 'The income elasticity is positive whenever goods are substitutes and negative whenever goods are complimentary',
    options: ['True', 'False'],
    correctAnswer: 1,
    hint: 'Which elasticity measures substitutes and complements: income elasticity or cross-price elasticity?',
    explanation: 'This statement confuses Income Elasticity of Demand (YED) with Cross-Price Elasticity of Demand (XED)! Cross-price elasticity of demand measures responsiveness of the quantity demanded of one good to a price change of another good: it is positive for substitute goods (e.g., tea and coffee) and negative for complementary goods (e.g., cars and fuel). Income elasticity of demand, on the other hand, measures responsiveness to consumer income: it is positive for normal goods and negative for inferior goods. Therefore, the statement is False.',
    explanationAmharic: 'ይህ አረፍተ ነገር የገቢ ላስቲክነትን (Income Elasticity) ከተሻጋሪ የዋጋ ላስቲክነት (Cross-Price Elasticity) ጋር ያምታታል። ተሻጋሪ የዋጋ ላስቲክነት (Cross-price elasticity) ለተተኪ እቃዎች (substitutes) አዎንታዊ (positive) ሲሆን ለአጋዥ/ተደጋጋፊ እቃዎች (complements) ደግሞ አሉታዊ (negative) ነው። የገቢ ላስቲክነት ግን ለመደበኛ እቃዎች (normal goods) አዎንታዊ እንዲሁም ለአነስተኛ እቃዎች (inferior goods) አሉታዊ ነው። ስለዚህ አረፍተ ነገሩ ሀሰት (False) ነው።',
    explanationAfaanOromo: 'Himni kun laastikii galii (income elasticity) fi laastikii gatii qaxxaamuraa (cross-price elasticity) walitti mika. Meeshaalee bakka bu\'ootaa (substitutes) fi wal-deeggaraniif (complements) kan ta\'u laastikii gatii qaxxaamuraati (bakka bu\'oofaaf poozatiivii, wal-deeggaraniif negaatiivii). Laastikiin galii garuu meeshaalee idileetiif (normal goods) poozatiivii, meeshaalee gadi-aanoof (inferior goods) negaatiiviidha. Kanaafuu, himni kun Soba (False) dha.'
  },

  // =========================================================================
  // PART TWO: MULTIPLE CHOICE (1 point each)
  // =========================================================================
  {
    id: 'econ-2016-mid-q5',
    courseId: 'econ-1011',
    courseCode: 'Econ 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'hard',
    topic: 'Market Equilibrium with Identical Consumers and Producers',
    points: 1,
    question: 'There are 100 identical consumers in the markets for commodity each with demand function given by P = 9 - 0.075Q and 200 identical producers of the commodity each with supply function given by P = 2 + 0.1Q. Based on the above information, how much are the market equilibrium quantity and price respectively?',
    options: [
      'A. 562 and 5.2',
      'B. 4800 and 56',
      'C. 5600 and 4.8',
      'D. 520 and 6'
    ],
    correctAnswer: 2,
    hint: 'First find individual Qd and Qs in terms of P, multiply by number of consumers (100) and producers (200), then equate Qd = Qs.',
    explanation: 'Step 1: Express individual demand in terms of quantity:\n' +
      'P = 9 - 0.075qd  =>  0.075qd = 9 - P  =>  qd = (9 - P) / 0.075 = 120 - (40/3)P.\n' +
      'With 100 identical consumers, Market Demand:\n' +
      'Qd = 100 × qd = 100 × [120 - (40/3)P] = 12,000 - (4,000/3)P.\n\n' +
      'Step 2: Express individual supply in terms of quantity:\n' +
      'P = 2 + 0.1qs  =>  0.1qs = P - 2  =>  qs = (P - 2) / 0.1 = 10P - 20.\n' +
      'With 200 identical producers, Market Supply:\n' +
      'Qs = 200 × qs = 200 × [10P - 20] = 2,000P - 4,000.\n\n' +
      'Step 3: Solve for market equilibrium (Qd = Qs):\n' +
      '12,000 - (4,000/3)P = 2,000P - 4,000\n' +
      '16,000 = [2,000 + (4,000/3)]P = (10,000/3)P\n' +
      '48,000 = 10,000P  =>  P* = 4.8 Birr.\n\n' +
      'Step 4: Compute equilibrium quantity (Q*):\n' +
      'Q* = 2,000(4.8) - 4,000 = 9,600 - 4,000 = 5,600 units.\n' +
      'Thus, market equilibrium quantity and price are 5600 and 4.8 respectively. Option C is correct.',
    explanationAmharic: 'የደረጃ በደረጃ ስሌት፡\n' +
      '1. የግለሰብ ፍላጎት ቀመር፡ P = 9 - 0.075qd ➔ 0.075qd = 9 - P ➔ qd = (9 - P)/0.075 = 120 - (40/3)P።\n' +
      '100 ሸማቾች ስላሉ የገበያ ፍላጎት፡ Qd = 100 × [120 - (40/3)P] = 12,000 - (4000/3)P።\n' +
      '2. የግለሰብ አቅርቦት ቀመር፡ P = 2 + 0.1qs ➔ 0.1qs = P - 2 ➔ qs = 10P - 20።\n' +
      '200 አምራቾች ስላሉ የገበያ አቅርቦት፡ Qs = 200 × [10P - 20] = 2,000P - 4,000።\n' +
      '3. ገበያ ሚዛን ላይ Qd = Qs ይሆናል፡\n' +
      '12,000 - (4000/3)P = 2,000P - 4,000\n' +
      '16,000 = (10,000/3)P ➔ 48,000 = 10,000P ➔ P* = 4.8 ብር።\n' +
      '4. ሚዛናዊ መጠን (Q*)፡\n' +
      'Q* = 2,000(4.8) - 4,000 = 9,600 - 4,000 = 5,600 ዩኒት።\n' +
      'ስለዚህ ሚዛናዊ መጠኑና ዋጋው በቅደም ተከተል 5600 እና 4.8 ናቸው። ትክክለኛው መልስ C ነው።',
    explanationAfaanOromo: 'Shallaggii tartiiba qabu:\n' +
      '1. Fedhii dhuunfaa: P = 9 - 0.075qd ➔ qd = (9 - P)/0.075 = 120 - (40/3)P.\n' +
      'Maamiltoota 100 waan jiraniif fedhiin gabaa: Qd = 100 × [120 - (40/3)P] = 12,000 - (4000/3)P.\n' +
      '2. Dhiyeessii dhuunfaa: P = 2 + 0.1qs ➔ qs = 10P - 20.\n' +
      'Oomishtoota 200 waan jiraniif dhiyeessiin gabaa: Qs = 200 × [10P - 20] = 2,000P - 4,000.\n' +
      '3. Miizaana gabaa irratti Qd = Qs:\n' +
      '12,000 - (4000/3)P = 2,000P - 4,000\n' +
      '16,000 = (10,000/3)P ➔ 48,000 = 10,000P ➔ P* = 4.8 Birr.\n' +
      '4. Baay\'ina miizaanaa (Q*):\n' +
      'Q* = 2,000(4.8) - 4,000 = 9,600 - 4,000 = 5,600 units.\n' +
      'Kanaafuu, baayinni miizaanaa fi gatiin miizaanaa wal-duraa duubaan 5600 fi 4.8 ta\'u. Deebiin sirriin C dha.'
  },
  {
    id: 'econ-2016-mid-q6',
    courseId: 'econ-1011',
    courseCode: 'Econ 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Market Disequilibrium: Price Set Above Equilibrium (Surplus)',
    points: 1,
    question: 'Based on the market functions in question 5, all would happen if producers set price of commodity at 6 birrs, except:',
    options: [
      'A. Quantity demanded will be 4000',
      'B. Quantity supplied will be 8000',
      'C. Surplus of 4000 will happen',
      'D. Shortage of 4000 will happen'
    ],
    correctAnswer: 3,
    hint: 'Substitute P = 6 into market Qd and Qs. Compare which one is larger: surplus or shortage?',
    explanation: 'From question 5, the market demand and supply equations are:\n' +
      'Qd = 12,000 - (4,000/3)P and Qs = 2,000P - 4,000.\n\n' +
      'When price is set at P = 6 Birr:\n' +
      '1. Market Quantity Demanded: Qd = 12,000 - (4,000/3)(6) = 12,000 - 8,000 = 4,000 units. (Option A is True).\n' +
      '2. Market Quantity Supplied: Qs = 2,000(6) - 4,000 = 12,000 - 4,000 = 8,000 units. (Option B is True).\n' +
      '3. Since Qs (8,000) > Qd (4,000), there is an excess supply (Market Surplus):\n' +
      'Surplus = Qs - Qd = 8,000 - 4,000 = 4,000 units. (Option C is True).\n' +
      '4. Since there is a surplus, a shortage does NOT occur. Hence, option D ("Shortage of 4000 will happen") is false, making it the correct "except" answer. Option D is correct.',
    explanationAmharic: 'በጥያቄ ቁጥር 5 ላይ የተገኙትን የገበያ ፍላጎትና አቅርቦት ቀመሮች በመጠቀም ዋጋው P = 6 ብር ሲሆን፡\n' +
      '1. የተፈለገው መጠን (Qd) = 12,000 - (4000/3)(6) = 12,000 - 8,000 = 4,000 ዩኒት (A እውነት ነው)።\n' +
      '2. የቀረበው መጠን (Qs) = 2,000(6) - 4,000 = 12,000 - 4,000 = 8,000 ዩኒት (B እውነት ነው)።\n' +
      '3. የቀረበው መጠን ከተፈለገው ስለሚበልጥ ትርፍ ምርት ወይም አቅርቦት ይፈጠራል፡ Surplus = 8,000 - 4,000 = 4,000 ዩኒት (C እውነት ነው)።\n' +
      '4. በገበያው ላይ ትርፍ ምርት እንጂ እጥረት (shortage) አልተፈጠረም። ስለዚህ "Shortage of 4000 will happen" የሚለው የተሳሳተ ሲሆን ጥያቄው "except" (ከ... በስተቀር) ስላለ ትክክለኛው መልስ D ነው።',
    explanationAfaanOromo: 'Gatiin P = 6 Birr yeroo ta\'u:\n' +
      '1. Baayinni barbaadame (Qd) = 12,000 - (4000/3)(6) = 4,000 units (A dhugaadha).\n' +
      '2. Baayinni dhiyaate (Qs) = 2,000(6) - 4,000 = 8,000 units (B dhugaadha).\n' +
      '3. Dhiyeessiin fedhii waan caaleef dhangala\'aan (surplus) ni uumama: Surplus = 8,000 - 4,000 = 4,000 units (C dhugaadha).\n' +
      '4. Hanqinni (shortage) hin uumamu, dhiyeessii dabalataatu jira malee. Kanaafuu, himni "Shortage of 4000 will happen" jedhu soba waan ta\'eef, filannoo "except" jedhuuf deebiin sirriin D dha.'
  },
  {
    id: 'econ-2016-mid-q7',
    courseId: 'econ-1011',
    courseCode: 'Econ 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Determinants of Supply: Shift vs Movement Along Curve',
    points: 1,
    question: 'Supply curve for maize shifts in all but not;',
    options: [
      'A. An increase in cost of inputs',
      'B. Bad weather conditions',
      'C. Change in price of its product',
      'D. All'
    ],
    correctAnswer: 2,
    hint: 'Does a change in the product\'s own price shift the supply curve or cause movement along it?',
    explanation: 'A shift of the supply curve is caused by changes in non-price determinants of supply, such as input prices/production costs (Option A), weather/climatic conditions (Option B), technology, government taxes, and subsidies. In contrast, a change in the own price of maize (the product itself) does NOT shift the supply curve; rather, it causes a movement along the existing supply curve (referred to as a change in quantity supplied). Therefore, Option C is correct.',
    explanationAmharic: 'የአቅርቦት ኩርባ መዛወር (shift of the supply curve) የሚከሰተው ከዋጋ ውጭ በሆኑ ምክንያቶች ለውጥ ነው፤ እነርሱም የምርት ግብዓት ወጪዎች መጨመር (A)፣ መጥፎ የአየር ሁኔታ (B)፣ ቴክኖሎጂ እና የመንግስት ግብር ናቸው። በራሱ በምርቱ (በበቆሎ) ዋጋ ላይ የሚመጣ ለውጥ ግን ኩርባውን አያዛውርም፤ ከዚህ ይልቅ በኩርባው ላይ እንቅስቃሴን (movement along the curve / change in quantity supplied) ብቻ ያስከትላል። ስለዚህ ትክክለኛው መልስ C ነው።',
    explanationAfaanOromo: 'Sararri dhiyeessii boqqolloo kan siqu (shift) sababoota gatii alaa jiraniin qofaadha: gatiin galteewwanii yoo dabale (A), haalli qilleensaa yoo bade (B), teeknooloojii fi kkf. Gatiin oomishichaa (boqqolloo) mataan isaa jijjiiramuun garuu sararicha hin siqsu, sarara duraan jiru irra socho\'uu (movement along supply curve) qofa fida. Kanaafuu, deebiin sirriin C dha.'
  },
  {
    id: 'econ-2016-mid-q8',
    courseId: 'econ-1011',
    courseCode: 'Econ 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Positive vs Normative Economics',
    points: 1,
    question: 'One of the following is a normative statement?',
    options: [
      'A. The price of Teff is Br 45 per kg',
      'B. The cause of unemployment is high rural urban migration.',
      'C. Government should reduce tax to the private sectors to increase investment.',
      'D. High fertility rate is the cause for high population growth',
      'E. None.'
    ],
    correctAnswer: 2,
    hint: 'Look for value judgments, prescriptive opinions, or words like "should" or "ought to".',
    explanation: 'Positive statements describe what "is", dealing with objective facts and testable cause-and-effect hypotheses (Options A, B, and D are positive statements because they can be empirically tested against data). Normative statements, on the other hand, express subjective value judgments and opinions about what "ought to be" or "should be" (which cannot be proven or disproven by facts alone). Option C contains the policy recommendation "Government should reduce tax...", making it a normative statement. Option C is correct.',
    explanationAmharic: 'ፖዘቲቭ ኢኮኖሚክስ (Positive economics) ተጨባጭ እውነታዎችን፣ መንስኤና ውጤትን እንዲሁም "ያለውን ነባራዊ ሁኔታ" የሚገልጽ ሲሆን በመረጃ ሊረጋገጥ ይችላል (ምርጫ A, B, እና D ፖዘቲቭ ናቸው)። ኖርማቲቭ ኢኮኖሚክስ (Normative economics) ግን የግል አስተያየትን፣ ዋጋ መስጠትንና "ምን መሆን አለበት/ይገባል" (what ought to be / should be) የሚለውን የሚያቀርብ ነው። ምርጫ C "Government should reduce tax..." (መንግስት ግብር ሊቀንስ ይገባል) የሚል የግል አስተያየት በመያዙ ኖርማቲቭ መግለጫ ነው። ትክክለኛው መልስ C ነው።',
    explanationAfaanOromo: 'Himoonni poozatiivii ragaa qabatamaa fi sababaa fi bu\'aa kan qoratamuu danda\'an (what is) ibsu (A, B, fi D poozatiiviidha). Himoonni noormatiivii immoo ilaalcha dhuunfaa, murtii gatii fi "maal ta\'uu qaba" (ought to be / should be) kan ibsaniidha. Filannoon C "Government should reduce tax..." (mootummaan taaksii hir\'isuu qaba) jedhu yaada fi murtii noormatiivii waan ta\'eef deebii sirriidha. Deebiin sirriin C dha.'
  },
  {
    id: 'econ-2016-mid-q9',
    courseId: 'econ-1011',
    courseCode: 'Econ 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Central Problems of an Economy: How to Produce',
    points: 1,
    question: 'When Abebe builds a dam using few machines and a great deal of labour, he is answering the ______ question.',
    options: [
      'A. For whom to produce',
      'B. What to produce',
      'C. How to produce',
      'D. Where to produce'
    ],
    correctAnswer: 2,
    hint: 'Choosing between labor-intensive and capital-intensive production techniques relates to the method of production.',
    explanation: 'Every economy must resolve three central economic questions:\n' +
      '1. "What to produce?" — Deciding which goods and in what quantities to manufacture.\n' +
      '2. "How to produce?" — Deciding the production technique, method, and input combination (e.g., labor-intensive vs. capital-intensive technology).\n' +
      '3. "For whom to produce?" — Deciding how national output and income are distributed among citizens.\n' +
      'Abebe\'s decision to use a labor-intensive method (heavy reliance on human labor with few machines) addresses the production technique, which is the "How to produce" question. Option C is correct.',
    explanationAmharic: 'ማንኛውም ኢኮኖሚ ሊመልሳቸው የሚገቡ ሦስት መሠረታዊ ጥያቄዎች አሉ፡\n' +
      '1. "ምን መመረት አለበት?" (What to produce) - የሚመረቱ እቃዎችና መጠናቸውን መወሰን።\n' +
      '2. "እንዴት መመረት አለበት?" (How to produce) - የምርት ቴክኖሎጂንና ግብዓቶችን መምረጥ (የሰው ጉልበትን ወይስ የማሽን አጠቃቀምን)።\n' +
      '3. "ለማን መመረት አለበት?" (For whom to produce) - ምርቱ ለማን እንደሚከፋፈል መወሰን።\n' +
      'አበበ ግድቡን በትንሽ ማሽኖችና በብዙ የሰው ጉልበት (labor-intensive technique) ለመስራት መወሰኑ የምርት ስልትን የሚመለከት በመሆኑ "እንዴት መመረት አለበት?" (How to produce) የሚለውን ጥያቄ ይመልሳል። ትክክለኛው መልስ C ነው።',
    explanationAfaanOromo: 'Diinagdeen kamiyyuu gaaffilee bu\'uuraa sadii deebisuu qaba:\n' +
      '1. "Maal oomishu?" (What to produce) - gosaa fi baay\'ina oomishaa murteessuu.\n' +
      '2. "Akkamitti oomishu?" (How to produce) - mala oomishaa fi teeknooloojii filachuu (humna namaa moo maashinii fayyadamuu).\n' +
      '3. "Eenyuuf oomishu?" (For whom to produce) - qoodiinsa oomishaa murteessuu.\n' +
      'Abebeen hidha ijaaruuf maashinii muraasaa fi humna namaa bal\'aa fayyadamuun isaa mala oomishaa waan ta\'eef gaaffii "Akkamitti oomishu?" (How to produce) jedhu deebisa. Deebiin sirriin C dha.'
  },
  {
    id: 'econ-2016-mid-q10',
    courseId: 'econ-1011',
    courseCode: 'Econ 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Opportunity Cost: Explicit vs Implicit Costs',
    points: 1,
    question: 'You decide to take a vacation and the trip costs you 2,000birr. While you are on vacation, you do not report to work where you could have earned 750birr. The opportunity cost of the vacation is',
    options: [
      'A. 750birr',
      'B. 1,250birr',
      'C. 2,000birr',
      'D. 2,750birr'
    ],
    correctAnswer: 3,
    hint: 'Total opportunity cost includes both explicit out-of-pocket expenses and implicit forgone earnings.',
    explanation: 'In economic decision making, the opportunity cost of taking an action includes all costs surrendered, consisting of:\n' +
      '1. Explicit Cost (out-of-pocket financial outlay): 2,000 Birr trip expenses.\n' +
      '2. Implicit Cost (forgone earnings from the next best alternative): 750 Birr salary sacrificed.\n\n' +
      'Total Opportunity Cost = Explicit Cost + Implicit Cost = 2,000 Birr + 750 Birr = 2,750 Birr.\n' +
      'Therefore, Option D is correct.',
    explanationAmharic: 'በኢኮኖሚክስ ውስጥ የአንድ ውሳኔ አጠቃላይ የዕድል ወጪ (Opportunity cost) ግልጽ ወጪን (Explicit cost - በእጅ የወጣውን የ2,000 ብር የጉዞ ወጪ) እና ስውር ወጪን (Implicit cost - ባለመስራት የታጣውን የ750 ብር የቀን ገቢ) ያካትታል። ስለዚህ፡\n' +
      'አጠቃላይ የዕድል ወጪ = 2,000 ብር + 750 ብር = 2,750 ብር።\n' +
      'ትክክለኛው መልስ D ነው።',
    explanationAfaanOromo: 'Diinagdee keessatti gatiin aarsaa (opportunity cost) baasii ifaa (explicit cost - qarshii 2,000 imalaaf bahe) fi baasii dhokataa (implicit cost - qarshii 750 hojii dhiisuun dhabame) lamaan of keessatti qabata. Kanaafuu:\n' +
      'Ida\'ama Gatii Aarsaa = Qarshii 2,000 + Qarshii 750 = Qarshii 2,750.\n' +
      'Deebiin sirriin D dha.'
  },
  {
    id: 'econ-2016-mid-q11',
    courseId: 'econ-1011',
    courseCode: 'Econ 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'hard',
    topic: 'Point Elasticity of Demand at Market Equilibrium',
    points: 1,
    question: 'Suppose the demand curve for potatoes is given by the equation P = 200 - 4Q and the supply curve for potatoes is given by the equation P = Q. From this information we can conclude that when this market is in equilibrium demand for potatoes is',
    options: [
      'A. Elastic',
      'B. Inelastic',
      'C. Perfectly elastic',
      'D. Perfectly inelastic'
    ],
    correctAnswer: 1,
    hint: 'Find equilibrium P* and Q* by setting Demand = Supply, then compute Ed = |(dQ/dP) × (P/Q)|.',
    explanation: 'Step 1: Determine market equilibrium price and quantity:\n' +
      'Equate Demand and Supply: P = 200 - 4Q and P = Q\n' +
      'Q = 200 - 4Q  =>  5Q = 200  =>  Q* = 40 units.\n' +
      'P* = Q* = 40 Birr.\n\n' +
      'Step 2: Find the derivative of quantity demanded with respect to price (dQ/dP):\n' +
      'Demand equation: P = 200 - 4Q  =>  4Q = 200 - P  =>  Q = 50 - 0.25P.\n' +
      'Therefore, dQ/dP = -0.25 (or 1/slope = 1/(-4) = -0.25).\n\n' +
      'Step 3: Calculate point price elasticity of demand (Ed) at equilibrium:\n' +
      'Ed = |(dQ/dP) × (P*/Q*)| = |-0.25 × (40 / 40)| = |-0.25 × 1| = 0.25.\n\n' +
      'Step 4: Classification:\n' +
      'Since |Ed| = 0.25 < 1, demand for potatoes at equilibrium is INELASTIC (0 < Ed < 1). Option B is correct.',
    explanationAmharic: 'የደረጃ በደረጃ ስሌት፡\n' +
      '1. ሚዛናዊ ዋጋ እና መጠን ማግኘት፡\n' +
      'P = 200 - 4Q እና P = Q\n' +
      'Q = 200 - 4Q ➔ 5Q = 200 ➔ Q* = 40።\n' +
      'P* = 40 ብር።\n' +
      '2. የፍላጎት ቀመርን በ Q መልክ መጻፍ፡\n' +
      '4Q = 200 - P ➔ Q = 50 - 0.25P ➔ dQ/dP = -0.25።\n' +
      '3. የፍላጎት የዋጋ ላስቲክነት (Ed) በገበያ ሚዛን ላይ ማስላት፡\n' +
      'Ed = |(dQ/dP) × (P/Q)| = |-0.25 × (40/40)| = 0.25።\n' +
      '4. የላስቲክነት ውጤት፡\n' +
      'የላስቲክነት መጠኑ Ed = 0.25 ከ 1 በታች (Ed < 1) በመሆኑ የድንች ፍላጎት በገበያ ሚዛን ላይ ኢ-ላስቲክ (Inelastic) ነው። ትክክለኛው መልስ B ነው።',
    explanationAfaanOromo: 'Shallaggii tartiiba qabu:\n' +
      '1. Miizaana gabaa argachuu:\n' +
      'P = 200 - 4Q fi P = Q\n' +
      'Q = 200 - 4Q ➔ 5Q = 200 ➔ Q* = 40.\n' +
      'P* = 40 Birr.\n' +
      '2. Dikeeshinii fedhii akka Q dhaan qindeessuu:\n' +
      'Q = 50 - 0.25P ➔ dQ/dP = -0.25.\n' +
      '3. Laastikii gatii fedhii (Ed) miizaana irratti shallaguu:\n' +
      'Ed = |(dQ/dP) × (P/Q)| = |-0.25 × (40/40)| = 0.25.\n' +
      '4. Murtoo:\n' +
      'Gatiin Ed = 0.25 waan ta\'eef, kunis 1 gadi (Ed < 1) waan ta\'eef, fedhiin dinnichaa miizaana irratti laastikii gadi-aanaa (Inelastic) dha. Deebiin sirriin B dha.'
  },
  {
    id: 'econ-2016-mid-q12',
    courseId: 'econ-1011',
    courseCode: 'Econ 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Price Elasticity of Demand Definition & Law of Demand',
    points: 1,
    question: 'Suppose the demand for city bus tickets has a price elasticity of demand of 1.5. This tells us that;',
    options: [
      'A. If the city increases the price of bus tickets by 10%, the percentage change in the quantity of bus tickets demanded will be less than 15%.',
      'B. If the city increases the price of bus tickets by 20%, the percentage change in the quantity of bus tickets demanded will be greater than 15% but less than 30%.',
      'C. If the city decreases the price of bus tickets by 20%, the percentage change in the quantity of bus tickets demanded will be equal to 30%.',
      'D. If the city decreases the price of bus tickets, then the quantity of bus tickets demanded will also decrease since the price elasticity of demand is a positive number'
    ],
    correctAnswer: 2,
    hint: 'Elasticity formula: %ΔQd = Ed × %ΔP. Multiply 1.5 by the percentage change in price.',
    explanation: 'Price elasticity of demand is defined as:\n' +
      'Ed = |%ΔQd / %ΔP| = 1.5  =>  |%ΔQd| = 1.5 × |%ΔP|.\n\n' +
      '- For Option A: If price increases by 10%, |%ΔQd| = 1.5 × 10% = 15% (not less than 15%).\n' +
      '- For Option B: If price increases by 20%, |%ΔQd| = 1.5 × 20% = 30% (not between 15% and 30%).\n' +
      '- For Option C: If the city decreases the price by 20%, the percentage change in quantity demanded is exactly 1.5 × 20% = 30%. In accordance with the Law of Demand, a 20% price drop induces a 30% increase in quantity demanded.\n' +
      '- Option D is incorrect because it violates the Law of Demand (price and quantity demanded move in opposite directions).\n' +
      'Therefore, Option C is correct.',
    explanationAmharic: 'የፍላጎት የዋጋ ላስቲክነት ቀመር፡\n' +
      'Ed = |%ΔQd / %ΔP| = 1.5 ማለት |%ΔQd| = 1.5 × |%ΔP| ማለት ነው።\n' +
      '- አማራጭ A: ዋጋ በ10% ሲጨምር፣ የፍላጎት መጠን ለውጥ 1.5 × 10% = 15% ይሆናል (ከ15% ያንሳል የሚለው ስህተት ነው)።\n' +
      '- አማራጭ B: ዋጋ በ20% ሲጨምር፣ ለውጡ 1.5 × 20% = 30% ይሆናል (ከ15% እና 30% መሀል የሚለው ስህተት ነው)።\n' +
      '- አማራጭ C: የከተማው አውቶቡስ ትኬት ዋጋ በ20% ቢቀንስ፣ የፍላጎት መጠን በመቶኛ ለውጥ በትክክል 1.5 × 20% = 30% ይሆናል። በህገ-ፍላጎት መሰረት ዋጋ ሲቀንስ ፍላጎት በ30% ያድጋል። ይህ ከአማራጭ C ጋር በትክክል ይገጥማል።\n' +
      'ስለዚህ ትክክለኛው መልስ C ነው።',
    explanationAfaanOromo: 'Seera laastikii gatii fedhiitiin:\n' +
      'Ed = |%ΔQd / %ΔP| = 1.5 ➔ |%ΔQd| = 1.5 × |%ΔP|.\n' +
      '- Filannoo A: Gatiin 10% yoo dabale, jijjiiramni baay\'ina fedhii 1.5 × 10% = 15% ta\'a (15% gadi kan jedhu dogoggora).\n' +
      '- Filannoo B: Gatiin 20% yoo dabale, jijjiiramni 1.5 × 20% = 30% ta\'a (gidduu 15% fi 30% kan jedhu dogoggora).\n' +
      '- Filannoo C: Gatiin tikeetii baasiifi 20% yoo gadi bu\'e, jijjiiramni dhibbeentaa baay\'ina fedhii sirriitti 1.5 × 20% = 30% ta\'a. Seera fedhiitiin yeroo gatiin gadi bu\'u baayinni fedhii 30% dabala.\n' +
      'Kanaafuu, deebiin sirriin C dha.'
  },
  {
    id: 'econ-2016-mid-q13',
    courseId: 'econ-1011',
    courseCode: 'Econ 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Production Possibility Frontier (PPF) Definition',
    points: 1,
    question: 'The production possibility frontier depicts;',
    options: [
      'A. The maximum amount of alternative combinations of the two goods that an economy can produce at a point in time.',
      'B. The limited amount of resources that an economy has at a point in time.',
      'C. The alternative combination of capital and labour inputs used in producing goods and services over time',
      'D. The economy\'s employment level at a point in time'
    ],
    correctAnswer: 0,
    hint: 'The PPF shows the upper boundary of feasible production combinations for two goods.',
    explanation: 'By standard economic definition, the Production Possibility Frontier (PPF) or Curve (PPC) shows the maximum alternative combinations of two goods or services that an economy can produce at a given point in time, given fixed resources and existing technology, assuming full and efficient utilization of all available resources. Option A is correct.',
    explanationAmharic: 'የምርት ዕድል ወሰን (Production Possibility Frontier - PPF) አንድ ኢኮኖሚ በአንድ የተወሰነ ጊዜ ውስጥ ያሉትን ውሱን ሀብቶችና ቴክኖሎጂ ሙሉ በሙሉና በብቃት በመጠቀም ሊያመርታቸው የሚችላቸውን የሁለት እቃዎች ከፍተኛ አማራጭ ጥምረቶች የሚያሳይ ኩርባ ነው። ስለዚህ ትክክለኛው መልስ A ነው።',
    explanationAfaanOromo: 'Daangaan dandeettii oomishaa (PPF) qabeenyaa fi teeknooloojii yeroo sanatti jiru guutumaan guutuutti fi haala gaariin fayyadamuun diinagdeen tokko oomishaalee lamaan hangam olaanaa ta\'e oomishuu akka danda\'u sarara agarsiisuudha. Kanaafuu, deebiin sirriin A dha.'
  },
  {
    id: 'econ-2016-mid-q14',
    courseId: 'econ-1011',
    courseCode: 'Econ 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'medium',
    topic: 'Circular Flow Model: Factor Market vs Product Market Roles',
    points: 1,
    question: 'Identify wrong statement from the following?',
    options: [
      'A. Firms are sellers of goods and service in the factor market',
      'B. Households are the sellers of factors of production in the factor market',
      'C. product market is a market for final output',
      'D. Firms are suppliers of goods and services in output market'
    ],
    correctAnswer: 0,
    hint: 'Who sells factors of production in the factor market: households or firms?',
    explanation: 'In the circular flow model of an economy:\n' +
      '1. Factor Market (Resource Market): Households own factors of production (land, labor, capital, entrepreneurship) and SELL them; firms are the BUYERS (demanders) who hire these factors.\n' +
      '2. Product Market (Output Market): Firms produce and SELL finished goods and services; households are the BUYERS.\n\n' +
      'Therefore, statement A ("Firms are sellers of goods and service in the factor market") is completely FALSE because firms are buyers in the factor market, and output goods are traded in the product market. Option A is the wrong statement to identify.',
    explanationAmharic: 'በክብ የኢኮኖሚ ፍሰት ሞዴል (Circular Flow Model) መሰረት፡\n' +
      '- በግብዓት/ምርት ሀብት ገበያ (Factor Market) ውስጥ የምርት ሀብቶችን (የሰው ጉልበት፣ መሬት፣ ካፒታል) የሚሸጡት አባወራዎች/ቤተሰቦች (Households) ሲሆኑ ገዢዎቹ ደግሞ ድርጅቶች (Firms) ናቸው። ስለዚህ "Firms are sellers of goods and service in the factor market" የሚለው የተሳሳተ ነው (ጥያቄው የተሳሳተውን ለዩ ስለሚል ትክክለኛው መልስ A ነው)።\n' +
      '- በምርት ገበያ (Product market) ደግሞ ድርጅቶች ሸጪ ሲሆኑ አባወራዎች ገዢ ናቸው።',
    explanationAfaanOromo: 'Moodela marsaa diinagdee (Circular Flow Model) keessatti:\n' +
      '- Gabaa galteewwanii (Factor market) keessatti abbootiin qabeenyaa kan akka humna namaa, lafaa fi kaappitaalaa maatiiwwan (households) yoo ta\'an, isaan gurguru; dhaabbileen (firms) immoo bittota. Kanaafuu, "Firms are sellers in factor market" kan jedhu gonkumaa soba (gaaffichi soba kan barbaaduuf deebiin A dha).\n' +
      '- Gabaa oomishaa (Product market) keessatti dhaabbileen gurgurtuu yoo ta\'an maatiin bittota.'
  },
  {
    id: 'econ-2016-mid-q15',
    courseId: 'econ-1011',
    courseCode: 'Econ 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Movements vs Shifts of Curves & Inferior Goods',
    points: 1,
    question: 'Which one of the following statements is true?',
    options: [
      'A. Ceteris paribus change in price results in movement along a demand curve.',
      'B. Ceteris paribus, change in price results in shift of a supply curve',
      'C. Ceteris paribus, change in technology results in movement along a supply curve.',
      'D. Ceteris paribus, increase in income shifts the demand curve for inferior goods to the right (outward)'
    ],
    correctAnswer: 0,
    hint: 'Own price changes always cause movement along the curve, while non-price determinants shift curves.',
    explanation: 'Analysis of each statement:\n' +
      '- Statement A is TRUE: Under ceteris paribus, a change in a good\'s own price causes a movement along its demand curve (a change in quantity demanded).\n' +
      '- Statement B is FALSE: A change in price causes movement along the supply curve, not a shift.\n' +
      '- Statement C is FALSE: A technological advancement shifts the supply curve rightward, not a movement along it.\n' +
      '- Statement D is FALSE: For inferior goods, an increase in consumer income reduces demand, shifting the demand curve to the left (inward), not to the right.\n\n' +
      'Therefore, Option A is the only true statement.',
    explanationAmharic: 'የእያንዳንዱ ምርጫ ትንተና፡\n' +
      '- አረፍተ ነገር A እውነት ነው፡ ሌሎች ነገሮች ሳይለወጡ በራሱ በእቃው ዋጋ ላይ የሚመጣ ለውጥ በፍላጎት ኩርባ ላይ እንቅስቃሴን (movement along a demand curve) ያስከትላል።\n' +
      '- B ሀሰት ነው፡ የዋጋ ለውጥ በአቅርቦት ኩርባ ላይ እንቅስቃሴ እንጂ ኩርባውን አያዛውርም (shift አያደርግም)።\n' +
      '- C ሀሰት ነው፡ የቴክኖሎጂ ለውጥ አጠቃላይ የአቅርቦት ኩርባውን ያዛውራል (shift ያደርጋል) እንጂ በኩርባው ላይ እንቅስቃሴ አያመጣም።\n' +
      '- D ሀሰት ነው፡ ለአነስተኛ እቃዎች (inferior goods) የገቢ መጨመር ፍላጎታቸውን ስለሚቀንስ ኩርባው ወደ ግራ እንጂ ወደ ቀኝ አይሸጋገርም።\n' +
      'ስለዚህ ትክክለኛው መልስ A ነው።',
    explanationAfaanOromo: 'Xiinxala filannoowwanii:\n' +
      '- Himni A dhugaadha: Wanti biraa osoo hin jijjiiramin gatiin meeshichaa jijjiiramuun sarara fedhii irra socho\'uu (movement along demand curve) fida.\n' +
      '- B soba: Gatiin jijjiiramuun sarara dhiyeessii irra socho\'uu fida malee sararicha hin siqsu (shift hin ta\'u).\n' +
      '- C soba: Teeknooloojiin sarara dhiyeessii guutuu siqsa (shift fida).\n' +
      '- D soba: Meeshaalee gadi-aanoof (inferior goods) galii dabaluun fedhii waan hir\'isuuf sararichi gara bitaatti siqa malee gara mirgaatti miti.\n' +
      'Kanaafuu, deebiin sirriin A dha.'
  },
  {
    id: 'econ-2016-mid-q16',
    courseId: 'econ-1011',
    courseCode: 'Econ 1011',
    year: '2016 Midterm',
    examType: 'midterm',
    questionType: 'multiple_choice',
    difficulty: 'easy',
    topic: 'Scope of Microeconomics vs Macroeconomics',
    points: 1,
    question: 'Which one of the following statements is not true about economics?',
    options: [
      'A. Different economists define economics from different perspectives. Thus, there is no mutual consensus about its definition',
      'B. Adam Smith is known as the father of economics',
      'C. Economics is a social science which deals with efficient allocation of scarce resources to satisfy unlimited human want',
      'D. Microeconomics deals with the aggregative behaviours of all decision making units in certain economy'
    ],
    correctAnswer: 3,
    hint: 'Does microeconomics study individual units or aggregate whole-economy indicators?',
    explanation: 'Analysis of options:\n' +
      '- Options A, B, and C are all factual and correct descriptions of economics.\n' +
      '- Statement D is NOT TRUE because studying the aggregate (economy-wide) behavior of all decision-making units, aggregate price levels (inflation), national output (GDP), and overall unemployment is the subject matter of MACROECONOMICS, not microeconomics. Microeconomics examines individual economic units, such as a single consumer, single household, or single business firm.\n\n' +
      'Therefore, Option D is the statement that is not true.',
    explanationAmharic: 'የአማራጮች ትንተና፡\n' +
      '- አማራጮች A, B, እና C ስለ ኢኮኖሚክስ ትክክለኛ መግለጫዎች ናቸው።\n' +
      '- አማራጭ D ግን ሀሰት ነው ምክንያቱም አጠቃላይ የኢኮኖሚውን ውሳኔ ሰጪ አካላት አጠቃላይ ባህሪ (aggregative behaviors)፣ አገራዊ ምርትን፣ የዋጋ ግሽበትን እና ስራ አጥነትን የሚያጠናው ማክሮ ኢኮኖሚክስ (Macroeconomics) እንጂ ማይክሮ ኢኮኖሚክስ አይደለም። ማይክሮ ኢኮኖሚክስ የሚያጠናው የግለሰብ ሸማቾችን፣ ቤተሰቦችን እና ነጠላ ድርጅቶችን ነው።\n' +
      'ጥያቄው ትክክል ያልሆነውን ለዩ ስለሚል መልሱ D ነው።',
    explanationAfaanOromo: 'Xiinxala filannoowwanii:\n' +
      '- Filannoowwan A, B, fi C waa\'ee diinagdee ilaalchisee dhugaadha.\n' +
      '- Filannoon D garuu soba: Amala walitti qabamaa (aggregative behavior) fi diinagdee waliigalaa kan qoratu Maakiroo-diinagdeedha (Macroeconomics) malee Maayikiroo-diinagdee miti. Maayikiroon kan qoratu kutaa diinagdee dhuunfaa (fayyadamaa dhuunfaa, dhaabbata dhuunfaa) dha.\n' +
      'Kanaafuu, hima soba ta\'eef deebiin sirriin D dha.'
  }
];
