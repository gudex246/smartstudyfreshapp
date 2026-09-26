import React, { useState } from 'react';
import {
  Calculator,
  Plus,
  Trash2,
  Award,
  AlertTriangle,
  CheckCircle,
  HelpCircle,
  TrendingUp,
  RotateCcw
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { GPACourseItem } from '../types';
import { DEFAULT_GPA_COURSES } from '../data/initialData';

// Standard university 4.0 scale
const GRADE_POINTS: Record<string, number> = {
  'A+': 4.0,
  A: 4.0,
  'A-': 3.75,
  'B+': 3.5,
  B: 3.0,
  'B-': 2.75,
  'C+': 2.5,
  C: 2.0,
  'C-': 1.75,
  D: 1.0,
  F: 0.0
};

// Department placement target cutoffs
const DEPARTMENT_CUTOFFS = [
  { name: 'Doctor of Medicine (Pre-Med)', minCGPA: 3.65, stream: 'natural' },
  { name: 'Software Engineering / Computer Science', minCGPA: 3.55, stream: 'natural' },
  { name: 'Electrical & Computer Engineering', minCGPA: 3.35, stream: 'natural' },
  { name: 'Civil & Construction Engineering', minCGPA: 3.20, stream: 'natural' },
  { name: 'Pharmacy & Biomedical Science', minCGPA: 3.40, stream: 'natural' },
  { name: 'Accounting & Finance / Economics', minCGPA: 3.10, stream: 'social' },
  { name: 'School of Law (LL.B)', minCGPA: 3.30, stream: 'social' },
  { name: 'Management & Marketing', minCGPA: 2.80, stream: 'social' }
];

export const GPACalculatorTab: React.FC = () => {
  const { gpaCourses, updateGpaCourses, streamFilter } = useApp();

  const [activeSem, setActiveSem] = useState<1 | 2 | 'all'>('all');

  // Handle change of course grade or credit hours
  const handleGradeChange = (id: string, newGrade: string) => {
    updateGpaCourses(
      gpaCourses.map((c) => (c.id === id ? { ...c, grade: newGrade } : c))
    );
  };

  const handleCreditsChange = (id: string, newCredits: number) => {
    updateGpaCourses(
      gpaCourses.map((c) => (c.id === id ? { ...c, creditHours: Math.max(1, newCredits) } : c))
    );
  };

  const handleRemoveCourse = (id: string) => {
    updateGpaCourses(gpaCourses.filter((c) => c.id !== id));
  };

  const handleAddCourse = (semester: 1 | 2) => {
    const newCourse: GPACourseItem = {
      id: 'gpa-' + Date.now(),
      code: `Elective ${semester === 1 ? 'I' : 'II'}`,
      name: 'Custom University Course',
      creditHours: 3,
      grade: 'A',
      semester
    };
    updateGpaCourses([...gpaCourses, newCourse]);
  };

  const [resetFeedback, setResetFeedback] = useState(false);

  const handleResetToDefault = () => {
    updateGpaCourses(DEFAULT_GPA_COURSES);
    setResetFeedback(true);
    setTimeout(() => setResetFeedback(false), 3000);
  };

  // Computations
  const sem1Courses = gpaCourses.filter((c) => c.semester === 1);
  const sem2Courses = gpaCourses.filter((c) => c.semester === 2);

  const calculateGPA = (courseList: GPACourseItem[]) => {
    let totalPoints = 0;
    let totalCredits = 0;
    courseList.forEach((c) => {
      const pts = GRADE_POINTS[c.grade] ?? 0;
      totalPoints += pts * c.creditHours;
      totalCredits += c.creditHours;
    });
    if (totalCredits === 0) return 0;
    return Math.round((totalPoints / totalCredits) * 100) / 100;
  };

  const sem1GPA = calculateGPA(sem1Courses);
  const sem2GPA = calculateGPA(sem2Courses);
  const cumulativeCGPA = calculateGPA(gpaCourses);

  const totalCredits = gpaCourses.reduce((acc, c) => acc + c.creditHours, 0);

  // Determine Academic Standing
  const getAcademicStanding = (cgpa: number) => {
    if (cgpa >= 3.75) {
      return {
        label: "Very Great Distinction (Dean's List)",
        color: 'text-purple-700 bg-purple-100 border-purple-200',
        desc: 'Top academic echelon! Eligible for all university honors and unrestricted departmental choices.'
      };
    }
    if (cgpa >= 3.5) {
      return {
        label: 'Great Distinction',
        color: 'text-emerald-700 bg-emerald-100 border-emerald-200',
        desc: 'Exceptional performance. Qualifies for high-demand engineering and medicine programs.'
      };
    }
    if (cgpa >= 3.25) {
      return {
        label: 'Distinction Honor',
        color: 'text-blue-700 bg-blue-100 border-blue-200',
        desc: 'Strong competitive standing for most university streams.'
      };
    }
    if (cgpa >= 2.0) {
      return {
        label: 'Good Academic Standing',
        color: 'text-slate-700 bg-slate-100 border-slate-200',
        desc: 'Meets graduation minimum requirements; maintain consistency to safeguard stream choices.'
      };
    }
    if (cgpa >= 1.75) {
      return {
        label: 'Academic Warning Status',
        color: 'text-amber-800 bg-amber-100 border-amber-200',
        desc: 'CGPA is near warning threshold (< 2.0). Requires tutorial assistance and study syndicates.'
      };
    }
    return {
      label: 'Academic Dismissal Risk',
      color: 'text-red-700 bg-red-100 border-red-200',
      desc: 'Critical alert: University regulations require immediate remedial intervention.'
    };
  };

  const standing = getAcademicStanding(cumulativeCGPA);

  return (
    <div className="space-y-6">
      {/* Top Header Card with Dynamic CGPA Meter */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-2xs">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold">
              4.0 Scale Standard GPA Engine
            </span>
            <h1 className="text-2xl font-extrabold text-slate-900">
              Freshman GPA & CGPA Target Simulator
            </h1>
            <p className="text-xs text-slate-500 max-w-xl leading-relaxed">
              Input your anticipated or actual grades for Semester 1 and 2 courses. The engine automatically computes your cumulative grade point average and evaluates departmental placement thresholds.
            </p>
          </div>

          {/* Three Metric Pillars: Sem 1, Sem 2, Cumulative */}
          <div className="flex items-center gap-3 sm:gap-6 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
            <div className="text-center px-2">
              <span className="text-[11px] font-bold text-slate-500 block uppercase tracking-wider">
                Sem 1 GPA
              </span>
              <span className="text-2xl sm:text-3xl font-black text-slate-800">
                {sem1GPA.toFixed(2)}
              </span>
              <span className="text-[10px] text-slate-400 block">
                {sem1Courses.reduce((a, b) => a + b.creditHours, 0)} Cr
              </span>
            </div>

            <div className="h-10 w-px bg-slate-200" />

            <div className="text-center px-2">
              <span className="text-[11px] font-bold text-slate-500 block uppercase tracking-wider">
                Sem 2 GPA
              </span>
              <span className="text-2xl sm:text-3xl font-black text-slate-800">
                {sem2GPA.toFixed(2)}
              </span>
              <span className="text-[10px] text-slate-400 block">
                {sem2Courses.reduce((a, b) => a + b.creditHours, 0)} Cr
              </span>
            </div>

            <div className="h-10 w-px bg-slate-200" />

            <div className="text-center px-2">
              <span className="text-[11px] font-bold text-blue-600 block uppercase tracking-wider">
                Cumulative CGPA
              </span>
              <span className="text-2xl sm:text-3xl font-black text-blue-600">
                {cumulativeCGPA.toFixed(2)}
              </span>
              <span className="text-[10px] text-slate-400 block">{totalCredits} Total Cr</span>
            </div>
          </div>
        </div>

        {/* Academic Standing Status Banner */}
        <div className={`mt-6 p-4 rounded-xl border flex items-center justify-between gap-4 ${standing.color}`}>
          <div className="flex items-center gap-3">
            <Award className="w-5 h-5 shrink-0" />
            <div>
              <span className="text-xs font-bold uppercase tracking-wider block">
                Official Standing: {standing.label}
              </span>
              <span className="text-xs opacity-90">{standing.desc}</span>
            </div>
          </div>

          <button
            onClick={handleResetToDefault}
            className="hidden sm:flex items-center gap-1 text-[11px] font-semibold underline opacity-80 hover:opacity-100"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Defaults</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Course Grade Editor + Department Placement Predictor */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left 8 Cols: Editable Courses Table */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-6">
          {/* Semester Tabs */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
              {(['all', 1, 2] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveSem(tab)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold capitalize transition ${
                    activeSem === tab
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab === 'all' ? 'All Semesters' : `Semester ${tab}`}
                </button>
              ))}
            </div>

            <button
              onClick={() => handleAddCourse(activeSem === 2 ? 2 : 1)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 text-xs font-bold transition"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Custom Course</span>
            </button>
          </div>

          {/* Courses Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 uppercase tracking-wider text-[10px]">
                  <th className="pb-3 font-bold">Course Code & Name</th>
                  <th className="pb-3 font-bold text-center">Sem</th>
                  <th className="pb-3 font-bold text-center">Credit Hours</th>
                  <th className="pb-3 font-bold text-center">Anticipated Grade</th>
                  <th className="pb-3 font-bold text-center">Grade Points</th>
                  <th className="pb-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {gpaCourses
                  .filter((c) => activeSem === 'all' || c.semester === activeSem)
                  .map((course) => {
                    const pts = (GRADE_POINTS[course.grade] ?? 0) * course.creditHours;
                    return (
                      <tr key={course.id} className="hover:bg-slate-50/50 transition">
                        <td className="py-3">
                          <span className="font-mono font-bold text-blue-700 block">
                            {course.code}
                          </span>
                          <span className="text-slate-600 text-[11px] block">{course.name}</span>
                        </td>

                        <td className="py-3 text-center">
                          <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-semibold text-[10px]">
                            Sem {course.semester}
                          </span>
                        </td>

                        <td className="py-3 text-center">
                          <input
                            type="number"
                            min="1"
                            max="8"
                            value={course.creditHours}
                            onChange={(e) =>
                              handleCreditsChange(course.id, parseInt(e.target.value) || 1)
                            }
                            className="w-12 text-center p-1 rounded-lg border border-slate-200 bg-white font-mono font-bold focus:ring-1 focus:ring-blue-500 focus:outline-hidden"
                          />
                        </td>

                        <td className="py-3 text-center">
                          <select
                            value={course.grade}
                            onChange={(e) => handleGradeChange(course.id, e.target.value)}
                            className="p-1 px-2 rounded-lg border border-slate-200 bg-white font-bold text-slate-800 focus:ring-1 focus:ring-blue-500 focus:outline-hidden"
                          >
                            {Object.keys(GRADE_POINTS).map((g) => (
                              <option key={g} value={g}>
                                {g} ({GRADE_POINTS[g].toFixed(2)})
                              </option>
                            ))}
                          </select>
                        </td>

                        <td className="py-3 text-center font-mono font-bold text-slate-700">
                          {pts.toFixed(1)}
                        </td>

                        <td className="py-3 text-right">
                          <button
                            onClick={() => handleRemoveCourse(course.id)}
                            className="p-1 text-slate-400 hover:text-red-500 transition"
                            title="Remove course"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right 4 Cols: Department Placement Predictor */}
        <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-blue-600" />
            <h3 className="text-sm font-bold text-slate-900">
              Department Placement Eligibility
            </h3>
          </div>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            Based on historical freshman CGPA thresholds. A checkmark indicates your current simulated CGPA qualifies for this major.
          </p>

          <div className="space-y-3 pt-2">
            {DEPARTMENT_CUTOFFS.map((dept, i) => {
              const qualifies = cumulativeCGPA >= dept.minCGPA;
              return (
                <div
                  key={i}
                  className={`p-3 rounded-xl border text-xs flex items-center justify-between gap-3 transition ${
                    qualifies
                      ? 'bg-emerald-50/50 border-emerald-200 text-emerald-950'
                      : 'bg-slate-50 border-slate-200 text-slate-600 opacity-70'
                  }`}
                >
                  <div>
                    <span className="font-bold block leading-snug">{dept.name}</span>
                    <span className="text-[11px] text-slate-500 block">
                      Target CGPA: {dept.minCGPA.toFixed(2)}+
                    </span>
                  </div>

                  <span
                    className={`px-2 py-0.5 rounded-md text-[10px] font-bold shrink-0 flex items-center gap-1 ${
                      qualifies
                        ? 'bg-emerald-200 text-emerald-900'
                        : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {qualifies ? (
                      <>
                        <CheckCircle className="w-3 h-3" />
                        <span>Qualifies</span>
                      </>
                    ) : (
                      <span>Need +{(dept.minCGPA - cumulativeCGPA).toFixed(2)}</span>
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
