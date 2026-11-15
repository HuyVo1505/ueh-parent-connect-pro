import React, { useState } from 'react';
import { useAuth } from './context/AuthContext';
import { LoginPage } from './components/LoginPage';
import { Header } from './components/Header';
import { NoticeBar } from './components/NoticeBar';
import { TabNav } from './components/TabNav';
import { TabBasicInfo } from './components/tabs/TabBasicInfo';
import { TabParentCare } from './components/tabs/TabParentCare';
import { TabUniversityLife, ArticleItem } from './components/tabs/TabUniversityLife';
import { ChatWidget } from './components/chat/ChatWidget';
import { ArticleModal } from './components/modals/ArticleModal';
import { ContactModal } from './components/modals/ContactModal';
import { TabId } from './types';

export const App: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const [activeTab, setActiveTab] = useState<TabId>(0);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [contactTarget, setContactTarget] = useState<'daotao' | 'cvht' | 'ctsv' | null>(null);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-ueh-primary border-t-transparent rounded-full animate-spin" />
          <div className="text-sm font-semibold text-slate-600">Đang khởi tạo UEH Parent Connect...</div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <Header />
      <NoticeBar />
      <TabNav activeTab={activeTab} onSelectTab={setActiveTab} />

      {/* Main Content Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {activeTab === 0 && <TabBasicInfo />}
        {activeTab === 1 && (
          <TabParentCare
            onOpenChat={() => setIsChatOpen(true)}
            onOpenContactModal={(target) => setContactTarget(target)}
          />
        )}
        {activeTab === 2 && (
          <TabUniversityLife onOpenArticle={(article) => setSelectedArticle(article)} />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 space-y-1">
          <p className="font-semibold text-slate-700">
            Đại học Kinh tế Thành phố Hồ Chí Minh (UEH) – Cổng Thông Tin Phụ Huynh UEH Parent Connect
          </p>
          <p>Triết lý giáo dục: "Đồng hành định hướng, không giám sát chi li – Tôn trọng sự tự chủ của người học"</p>
          <p className="text-[11px] text-slate-400">© 2026 UEH University. All rights reserved.</p>
        </div>
      </footer>

      {/* Interactive AI Chatbot Widget */}
      <ChatWidget
        isOpen={isChatOpen}
        onToggle={() => setIsChatOpen((prev) => !prev)}
      />

      {/* Modals */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <ContactModal
        target={contactTarget}
        onClose={() => setContactTarget(null)}
      />
    </div>
  );
};

export default App;
