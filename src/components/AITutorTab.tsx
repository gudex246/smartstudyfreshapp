import React, { useState } from 'react';
import { Bot, Sparkles, Send, BookOpen, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { cleanSymbols } from '../utils/textUtils';

export const AITutorTab: React.FC = () => {
  const { setActiveTab } = useApp();

  const [chatMessages, setChatMessages] = useState<{ role: 'assistant' | 'user'; text: string; time: string }[]>([
    {
      role: 'assistant',
      text: cleanSymbols(`Greetings! I am your Smart Study AI Tutor, calibrated for Ethiopian University freshman coursework.

I can assist you with your core semester courses:
1. Mathematics for Natural Science (Limits, Derivatives, Integrals, Vectors in 3D)
2. Geography of Ethiopia and the Horn (Rift valley evolution, drainage basins, agro-ecological zones)
3. Psychology and Life Skills (Atkinson-Shiffrin memory, operant conditioning, stress coping)
4. Communicative English 1 (Skimming and scanning strategies, transitional signposts, sentence errors)
5. General Physics (Kinematics, 2D projectile motion, Newton laws, work-energy conservation)
6. Critical Thinking and Logic (Categorical syllogisms, fallacy detection, deductive validity)

Select a recommended topic below or type any academic problem to begin!`),
      time: 'Just now'
    }
  ]);

  const [inputQuery, setInputQuery] = useState('');
  const [isThinking, setIsThinking] = useState(false);

  const samplePrompts = [
    {
      label: 'Mathematics: 3D Perpendicular Vectors',
      query: 'Explain how to determine whether two vectors in 3D space are perpendicular using the dot product.'
    },
    {
      label: 'Geography: Rift Valley Formation',
      query: 'Explain the Cenozoic geological events that formed the Great East African Rift Valley in Ethiopia.'
    },
    {
      label: 'Psychology: Memory Chunks & Capacity',
      query: 'Explain the Atkinson-Shiffrin memory model and Miller 7 plus or minus 2 capacity limit.'
    },
    {
      label: 'English: Skimming vs Scanning',
      query: 'What is the exact distinction between skimming and scanning for university reading exams?'
    }
  ];

  const handleSendMessage = (customText?: string) => {
    const textToSend = customText || inputQuery.trim();
    if (!textToSend || isThinking) return;

    if (!customText) setInputQuery('');

    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setChatMessages((prev) => [...prev, { role: 'user', text: textToSend, time: now }]);
    setIsThinking(true);

    setTimeout(() => {
      let reply = '';
      const lower = textToSend.toLowerCase();

      if (lower.includes('vector') || lower.includes('perpendicular') || lower.includes('dot product')) {
        reply = `Vectors in 3D: Dot Product and Orthogonality

1. Definition: The dot product of two vectors u = (u1, u2, u3) and v = (v1, v2, v3) is calculated by multiplying corresponding components and adding the results:
u dot v = (u1)(v1) + (u2)(v2) + (u3)(v3) = |u| |v| cos(theta).

2. Perpendicularity Criterion: Two non-zero vectors are perpendicular (orthogonal) if and only if their dot product equals 0. This is because cos(90 degrees) = 0.

3. Example: If u = (2, -1, 3) and v = (1, 4, k), then (2)(1) + (-1)(4) + (3)(k) = 2 - 4 + 3k = -2 + 3k = 0. Solving for k yields k = 2/3.

Exam Advice: Always multiply matching components systematically and set the entire scalar sum to zero.`;
      } else if (
        lower.includes('converse') ||
        lower.includes('inverse') ||
        lower.includes('contrapositive') ||
        lower.includes('tautology') ||
        lower.includes('power set') ||
        lower.includes('glb') ||
        lower.includes('lub') ||
        lower.includes('gcf') ||
        lower.includes('lcm') ||
        lower.includes('well-ordering') ||
        lower.includes('repeating decimal') ||
        lower.includes('math 1011') ||
        lower.includes('2014') ||
        lower.includes('2016')
      ) {
        reply = `Mathematics for Natural Science (Math 1011) - Core Midterm Principles (2014 & 2016 E.C.)

1. Conditional Equivalences & Contrapositive:
- Original: p => q
- Converse: q => p
- Inverse: ~p => ~q
- Contrapositive: ~q => ~p
Key Rule: A conditional statement is logically equivalent to its contrapositive (~q => ~p).
Example: "If it is not raining and not windy, then I will go running"
- p = (~R ∧ ~W), q = G
- Contrapositive: ~G => ~(~R ∧ ~W) ≡ ~G => (R ∨ W): "If I do not go running, then it is raining or it is windy."

2. Set Partitions & Cardinality:
- For sets A and B: n(A) = n(A \\ B) + n(A ∩ B).
- If n(A \\ B) = 4 and n(A) = 7, then n(A ∩ B) = 7 - 4 = 3 (never add them together).

3. Power Sets & Proper Subsets:
- A set with n elements has 2^n total subsets and 2^n - 1 proper subsets.
- For A = {x ∈ R : x² = x} = {0, 1} (n = 2 elements):
  - Total subsets = 2² = 4: { ∅, {0}, {1}, {0, 1} }
  - Proper subsets: { ∅, {0}, {1} } (all subsets strictly excluding A itself).
- ∅ ∈ P(A) is True; A ∈ P(A) is True; ∅ ⊆ P(A) is True; but A ⊆ P(A) is generally False!

4. Least Upper Bound (lub) & Greatest Lower Bound (glb):
- For S = {x ∈ R : |x - 2| < 3}:
  - -3 < x - 2 < 3 => -1 < x < 5 => S = (-1, 5)
  - lub(S) = supremum = 5
  - glb(S) = infimum = -1

5. Converting Repeating Decimals to Fractions:
- For x = 0.01252525... (25 repeating):
  - 100x = 1.252525...
  - 10,000x = 125.252525...
  - Subtract: 9900x = 124 => x = 124/9900 = 31/2475.

6. LCM and GCF Definitions:
- c = LCM(a, b): Any common multiple n of a and b satisfies c ≤ n.
- d = GCF(a, b): Any common divisor m of a and b satisfies m ≤ d.`;
      } else if (lower.includes('rift') || lower.includes('geography') || lower.includes('cenozoic') || lower.includes('basin')) {
        reply = `Geological Evolution of the Ethiopian Rift Valley

1. Era of Formation: The Great East African Rift Valley system in Ethiopia formed during the Cenozoic era, primarily through tectonic and volcanic activities during the Tertiary and Quaternary periods.

2. Process of Formation:
Step 1: Massive crustal uplifting occurred over the mantle plume (the Arabo-Ethiopian swell).
Step 2: Tension and pulling forces led to crustal fracturing and faulting.
Step 3: Down-faulting of massive crustal blocks created the central graben (Rift Valley floor), flanked by steep escarpments on both sides.
Step 4: Substantial volcanic eruptions covered the plateau and valley with basaltic trap series and ignimbrites.

3. Key Features Today:
The Ethiopian Rift divides the country into the Northwestern and Southeastern highlands. It also hosts major inland endorheic lakes such as Lake Ziway, Langano, Abijata, Shalla, Hawassa, Abaya, and Chamo.`;
      } else if (lower.includes('memory') || lower.includes('psychology') || lower.includes('atkinson') || lower.includes('conditioning') || lower.includes('skinner')) {
        reply = `Human Memory Systems and Cognitive Psychology

1. Atkinson-Shiffrin Multi-Store Model:
Sensory Memory: Holds incoming environmental sensory information for a fraction of a second up to 3 seconds.
Short-Term Working Memory: Holds conscious information temporarily. George Miller established its capacity at 7 plus or minus 2 chunks, with a duration of 15 to 30 seconds unless maintained through active rehearsal.
Long-Term Memory: Has virtually limitless storage capacity and potentially lifetime duration.

2. Operant Conditioning Fundamentals (B.F. Skinner):
Reinforcement always increases or strengthens the target behavior.
Positive Reinforcement: Adding a desirable stimulus (e.g. praising good study habits).
Negative Reinforcement: Removing an aversive stimulus (e.g. turning off a loud buzzer once a task is completed).
Punishment always decreases or weakens the target behavior.`;
      } else if (lower.includes('skimming') || lower.includes('scanning') || lower.includes('english') || lower.includes('reading') || lower.includes('fragment')) {
        reply = `Academic Reading Techniques: Skimming vs Scanning

1. Skimming:
Purpose: To quickly obtain the overall gist, main argument, and broad structural overview of a passage.
Method: Reading titles, introductory paragraphs, first and last sentences of body paragraphs, and concluding summaries.
When to use: Previewing textbook chapters or articles before comprehensive study.

2. Scanning:
Purpose: To locate a specific piece of information without reading the surrounding text.
Method: Moving eyes quickly across the page searching specifically for key words, names, figures, dates, or formulas.
When to use: Answering targeted factual questions in reading comprehension exams.

3. Sentence Fragments in English Exams:
A dependent adverbial clause starting with subordinators like Because, Although, or Since cannot stand alone without an attached independent clause. Always ensure a subject and finite verb exist in a complete thought.`;
      } else if (lower.includes('physics') || lower.includes('projectile') || lower.includes('incline') || lower.includes('newton')) {
        reply = `General Physics: Mechanics and Motion

1. Projectile Motion Independence:
Horizontal motion travels at constant speed with zero horizontal acceleration (neglecting air friction): x = vx times t.
Vertical motion is governed by downward gravitational acceleration g: y = (vy0)t - 0.5 g t squared.
Horizontal and vertical motions occur simultaneously and are completely independent of each other.

2. Inclined Plane Dynamics:
The component of gravity pulling an object down a frictionless ramp inclined at angle theta is mg sin(theta).
The normal force exerted by the ramp surface is mg cos(theta).
By Newton second law, the resulting acceleration down the ramp is a = g sin(theta), independent of the object mass.`;
      } else {
        reply = `Concept Breakdown and Study Strategy

To achieve top marks on this topic:
1. Master the official definitions and conceptual foundations.
2. Break down problems systematically into givens, unknown variables, and applicable governing formulas.
3. Eliminate clearly flawed multiple-choice options before calculating or selecting your answer.
4. Practice past university midterm and final exam questions under timed conditions in the Questions Tab.

Let me know if you would like a step-by-step example or a direct explanation of any related question.`;
      }

      const replyTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setChatMessages((prev) => [...prev, { role: 'assistant', text: cleanSymbols(reply), time: replyTime }]);
      setIsThinking(false);
    }, 500);
  };

  return (
    <div className="space-y-6 text-slate-200">
      {/* Header banner */}
      <div className="bg-[#0f172a]/95 border border-[#1e293b] rounded-2xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-white">Smart Study AI Tutor</h1>
              <span className="bg-emerald-950/80 text-emerald-400 border border-emerald-700/60 px-2 py-0.5 rounded-full text-[10px] font-bold">
                Online • Active
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400">
              Interactive academic assistant for university freshman problem solving.
            </p>
          </div>
        </div>

        <button
          onClick={() => setActiveTab('questions')}
          className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-sm shrink-0 self-start md:self-auto"
        >
          <span>Practice Question Bank</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Suggested Quick Topics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {samplePrompts.map((p, idx) => (
          <button
            key={idx}
            onClick={() => handleSendMessage(p.query)}
            className="p-3.5 rounded-xl bg-[#0f172a] border border-[#1e293b] hover:border-indigo-500/60 text-left transition group space-y-1"
          >
            <div className="text-xs font-bold text-indigo-400 group-hover:text-indigo-300 flex items-center justify-between">
              <span>{p.label}</span>
              <Sparkles className="w-3 h-3 text-indigo-400" />
            </div>
            <p className="text-[11px] text-slate-400 line-clamp-2">
              {p.query}
            </p>
          </button>
        ))}
      </div>

      {/* Chat Conversation Card */}
      <div className="bg-[#0f172a]/95 border border-[#1e293b] rounded-2xl flex flex-col h-[560px] shadow-xl overflow-hidden">
        {/* Messages List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 text-xs sm:text-sm">
          {chatMessages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex gap-3 ${
                msg.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {msg.role === 'assistant' && (
                <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
              )}
              <div
                className={`p-4 rounded-2xl max-w-[85%] sm:max-w-[75%] leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-indigo-600 text-white rounded-br-none shadow-md'
                    : 'bg-[#0a0f1d] border border-[#1e293b] text-slate-200 rounded-bl-none shadow-sm'
                }`}
              >
                <div className="whitespace-pre-line prose prose-invert max-w-none text-xs sm:text-sm">
                  {msg.text}
                </div>
                <div className="text-[10px] text-slate-400 mt-2 text-right">
                  {msg.time}
                </div>
              </div>
            </div>
          ))}

          {isThinking && (
            <div className="flex items-center gap-2 text-indigo-400 text-xs p-3">
              <div className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce" />
              <div className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce delay-100" />
              <div className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce delay-200" />
              <span>Smart Study AI Tutor is analyzing solution...</span>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="p-3 sm:p-4 bg-[#0a0f1d] border-t border-[#1e293b] flex items-center gap-2">
          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your question or paste an exam problem (e.g. 'Solve limit of sin(3x)/5x')..."
            className="flex-1 bg-[#0f172a] border border-[#1e293b] text-xs sm:text-sm rounded-xl px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={!inputQuery.trim() || isThinking}
            className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-bold disabled:opacity-40 transition flex items-center gap-1.5 shadow-sm"
          >
            <span>Ask</span>
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
