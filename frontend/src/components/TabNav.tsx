import React from 'react';
import { TabId } from '../types';

interface TabNavProps {
  activeTab: TabId;
  onSelectTab: (tab: TabId) => void;
}

export const TabNav: React.FC<TabNavProps> = ({ activeTab, onSelectTab }) => {
  const tabs = [
    { id: 0 as TabId, num: '1', label: 'Thông tin cơ bản' },
    { id: 1 as TabId, num: '2', label: 'Chăm sóc phụ huynh' },
    { id: 2 as TabId, num: '3', label: 'Thấu hiểu môi trường ĐH' },
  ];

  return (
    <div className="bg-white border-b border-slate-200 px-4 sm:px-8 shadow-sm">
      <div className="max-w-7xl mx-auto flex gap-1 sm:gap-2 overflow-x-auto">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              className={`py-3.5 sm:py-4 px-3 sm:px-6 font-semibold text-xs sm:text-sm flex items-center gap-2 border-b-2 transition-colors whitespace-nowrap ${
                isActive
                  ? 'border-ueh-primary text-ueh-dark bg-teal-50/40'
                  : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50'
              }`}
            >
              <span
                className={`w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center transition-colors ${
                  isActive
                    ? 'bg-ueh-primary text-white'
                    : 'bg-slate-200 text-slate-600'
                }`}
              >
                {tab.num}
              </span>
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
