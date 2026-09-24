import React, { useState } from 'react';
import {
  Bell,
  Calendar,
  AlertCircle,
  Tag,
  Search,
  CheckCircle,
  Filter
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Announcement } from '../types';

export const AnnouncementsTab: React.FC = () => {
  const { announcements } = useApp();
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [search, setSearch] = useState('');

  const filtered = announcements.filter((ann) => {
    const matchesCat = filterCategory === 'all' || ann.category === filterCategory;
    const matchesSearch =
      search.trim() === '' ||
      ann.title.toLowerCase().includes(search.toLowerCase()) ||
      ann.content.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const getPriorityBadge = (priority: Announcement['priority']) => {
    if (priority === 'urgent') {
      return (
        <span className="px-2.5 py-0.5 rounded-full bg-red-100 text-red-800 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
          <AlertCircle className="w-3 h-3" />
          <span>Urgent Notice</span>
        </span>
      );
    }
    if (priority === 'high') {
      return (
        <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-wider">
          High Priority
        </span>
      );
    }
    return (
      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-semibold uppercase tracking-wider">
        Notice
      </span>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-2xs">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold">
              Campus Bulletin
            </span>
            <h1 className="text-2xl font-bold text-slate-900 mt-1">
              Freshman Notices & Academic Deadlines
            </h1>
            <p className="text-xs text-slate-500">
              Official university registrar updates, exam schedules, and department placement timelines.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold">
              {announcements.length} Total Notices
            </span>
          </div>
        </div>

        {/* Filter controls */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
            {['all', 'academic', 'exam', 'registration', 'orientation'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold capitalize whitespace-nowrap transition ${
                  filterCategory === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search announcements..."
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:outline-hidden focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Notices List */}
      <div className="space-y-4">
        {filtered.map((ann) => (
          <div
            key={ann.id}
            className={`bg-white rounded-2xl border p-5 sm:p-6 shadow-2xs transition hover:shadow-xs space-y-3 ${
              ann.priority === 'urgent' ? 'border-red-200' : 'border-slate-200'
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                {getPriorityBadge(ann.priority)}
                <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md uppercase tracking-wider">
                  {ann.category}
                </span>
              </div>

              <div className="flex items-center gap-1 text-xs text-slate-400">
                <Calendar className="w-3.5 h-3.5" />
                <span>{ann.date}</span>
              </div>
            </div>

            <h2 className="text-base font-bold text-slate-900 leading-snug">
              {ann.title}
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {ann.content}
            </p>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 text-slate-400 text-xs">
            No notices match your current filters.
          </div>
        )}
      </div>
    </div>
  );
};
