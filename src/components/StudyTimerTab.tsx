import React, { useState, useEffect } from 'react';
import {
  Timer,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  Plus,
  Trash2,
  Flame,
  ListTodo,
  Sparkles,
  Volume2
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const StudyTimerTab: React.FC = () => {
  const { tasks, addTask, toggleTask, deleteTask, courses } = useApp();

  // Timer modes: 25 min study, 5 min short break, 15 min long break
  const MODES = {
    pomodoro: { label: 'Study Sprint', seconds: 25 * 60 },
    shortBreak: { label: 'Short Break', seconds: 5 * 60 },
    longBreak: { label: 'Deep Rest', seconds: 15 * 60 }
  };

  const [currentMode, setCurrentMode] = useState<keyof typeof MODES>('pomodoro');
  const [timeLeft, setTimeLeft] = useState<number>(MODES.pomodoro.seconds);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [completedSessions, setCompletedSessions] = useState<number>(() => {
    return parseInt(localStorage.getItem('freshman_pomodoro_count') || '0', 10);
  });

  // Task form state
  const [newTitle, setNewTitle] = useState('');
  const [newCourse, setNewCourse] = useState(courses[0]?.code || 'Math 1011');
  const [newPriority, setNewPriority] = useState<'low' | 'medium' | 'high'>('medium');

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setIsRunning(false);
            playTone();
            if (currentMode === 'pomodoro') {
              const nextCount = completedSessions + 1;
              setCompletedSessions(nextCount);
              try {
                localStorage.setItem('freshman_pomodoro_count', nextCount.toString());
              } catch (e) {
                console.warn('Unable to store pomodoro count:', e);
              }
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, currentMode, completedSessions]);

  const playTone = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
      gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.4);
    } catch {
      // Audio context may be restricted before user gesture
    }
  };

  const handleSwitchMode = (mode: keyof typeof MODES) => {
    setIsRunning(false);
    setCurrentMode(mode);
    setTimeLeft(MODES[mode].seconds);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(MODES[currentMode].seconds);
  };

  const handleCreateTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    addTask(newTitle.trim(), newCourse, newPriority);
    setNewTitle('');
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  const totalSeconds = MODES[currentMode].seconds;
  const progressPercent = ((totalSeconds - timeLeft) / totalSeconds) * 100;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Left 6 Cols: Focus Timer */}
      <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-2xs flex flex-col justify-between space-y-6">
        <div>
          {/* Header & Streak */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Timer className="w-5 h-5 text-blue-600" />
              <h2 className="text-base font-bold text-slate-900">Study Sprint Timer</h2>
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-xl border border-amber-200">
              <Flame className="w-4 h-4 fill-amber-500" />
              <span>{completedSessions} Sprints Completed</span>
            </div>
          </div>

          {/* Mode Switchers */}
          <div className="flex items-center justify-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl mt-6">
            {(Object.keys(MODES) as (keyof typeof MODES)[]).map((mode) => (
              <button
                key={mode}
                onClick={() => handleSwitchMode(mode)}
                className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition capitalize ${
                  currentMode === mode
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {MODES[mode].label}
              </button>
            ))}
          </div>

          {/* Big Circular Clock Display */}
          <div className="my-8 flex flex-col items-center justify-center">
            <div className="text-6xl sm:text-7xl font-black tracking-tighter text-slate-900 font-mono">
              {formattedTime}
            </div>
            <span className="text-xs font-semibold text-slate-400 mt-2 uppercase tracking-wider">
              {MODES[currentMode].label} in progress
            </span>

            {/* Progress line */}
            <div className="w-48 h-1.5 bg-slate-100 rounded-full mt-4 overflow-hidden">
              <div
                className="h-full bg-blue-600 transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => setIsRunning(!isRunning)}
              className={`px-8 py-3 rounded-2xl text-xs font-bold flex items-center gap-2 shadow-sm transition active:scale-95 ${
                isRunning
                  ? 'bg-amber-600 hover:bg-amber-700 text-white'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              {isRunning ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white" />}
              <span>{isRunning ? 'Pause Sprint' : 'Start Focus'}</span>
            </button>

            <button
              onClick={handleReset}
              className="p-3 rounded-2xl border border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition"
              title="Reset Timer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 leading-relaxed">
          <strong className="text-slate-900 block mb-0.5">The Pomodoro Secret:</strong>
          25 minutes of undistracted study followed by 5 minutes of rest keeps your prefrontal cortex energized for complex Calculus and Physics problem solving.
        </div>
      </div>

      {/* Right 6 Cols: Daily Freshman Study Tasks Checklist */}
      <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-2xs space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ListTodo className="w-5 h-5 text-blue-600" />
            <h2 className="text-base font-bold text-slate-900">Daily Study Objectives</h2>
          </div>
          <span className="text-xs text-slate-500">
            {tasks.filter((t) => t.completed).length}/{tasks.length} Done
          </span>
        </div>

        {/* Add Task Form */}
        <form onSubmit={handleCreateTask} className="space-y-3">
          <div className="flex gap-2">
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="E.g. Solve Applied Math Chapter 2 exercise set..."
              className="flex-1 px-3.5 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shrink-0 transition"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <select
              value={newCourse}
              onChange={(e) => setNewCourse(e.target.value)}
              className="p-1.5 px-2.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 text-xs focus:outline-hidden"
            >
              {courses.map((c) => (
                <option key={c.id} value={c.code}>
                  {c.code}
                </option>
              ))}
            </select>

            <select
              value={newPriority}
              onChange={(e) => setNewPriority(e.target.value as any)}
              className="p-1.5 px-2.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 text-xs focus:outline-hidden"
            >
              <option value="low">Low Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="high">High Priority</option>
            </select>
          </div>
        </form>

        {/* Tasks List */}
        <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`p-3 rounded-xl border flex items-center justify-between gap-3 text-xs transition ${
                task.completed
                  ? 'bg-slate-50/60 border-slate-200 opacity-60'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <button
                  onClick={() => toggleTask(task.id)}
                  className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition ${
                    task.completed
                      ? 'bg-blue-600 border-blue-600 text-white'
                      : 'border-slate-300 hover:border-blue-500'
                  }`}
                >
                  {task.completed && <CheckCircle2 className="w-3.5 h-3.5" />}
                </button>

                <div className="truncate">
                  <span
                    className={`font-medium text-slate-800 block truncate ${
                      task.completed ? 'line-through text-slate-400' : ''
                    }`}
                  >
                    {task.title}
                  </span>
                  <div className="flex items-center gap-2 mt-0.5 text-[10px]">
                    <span className="font-mono text-blue-600 font-bold">{task.courseCode}</span>
                    <span
                      className={`font-semibold capitalize ${
                        task.priority === 'high'
                          ? 'text-red-600'
                          : task.priority === 'medium'
                          ? 'text-amber-600'
                          : 'text-slate-400'
                      }`}
                    >
                      • {task.priority}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => deleteTask(task.id)}
                className="p-1 text-slate-300 hover:text-red-500 transition shrink-0"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}

          {tasks.length === 0 && (
            <div className="p-8 text-center text-slate-400 text-xs">
              No tasks added for today. Add your study goals above!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
