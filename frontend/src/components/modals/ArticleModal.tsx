import React from 'react';
import { ArticleItem } from '../tabs/TabUniversityLife';

interface ArticleModalProps {
  article: ArticleItem | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 font-bold flex items-center justify-center transition"
          aria-label="Đóng"
        >
          ✕
        </button>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">{article.icon}</span>
          <span className="text-xs font-bold text-ueh-primary uppercase tracking-wider bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200">
            {article.category}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight mb-2">
          {article.title}
        </h3>

        <div className="text-xs text-slate-500 pb-4 mb-4 border-b border-slate-100">
          ✍️ {article.author}
        </div>

        <div className="text-sm text-slate-700 leading-relaxed space-y-4 whitespace-pre-line">
          {article.content}
        </div>

        <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs px-5 py-2.5 rounded-xl transition"
          >
            Đóng bài viết
          </button>
        </div>
      </div>
    </div>
  );
};
