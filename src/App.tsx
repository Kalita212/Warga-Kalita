import React, { useState } from 'react';
import { Home, Users, Newspaper, DollarSign, ImageIcon, Phone, Menu, X } from 'lucide-react';
import Header from './components/Header';
import RealtimeStatus from './components/RealtimeStatus';
import LiveChat from './components/LiveChat';
import NotificationPanel from './components/NotificationPanel';
import Beranda from './pages/Beranda';
import Struktur from './pages/Struktur';
import Berita from './pages/Berita';
import DataWarga from './pages/DataWarga';
import Iuran from './pages/Iuran';
import Galeri from './pages/Galeri';
import Kontak from './pages/Kontak';

function App() {
  const [currentPage, setCurrentPage] = useState('beranda');

  const renderPage = () => {
    switch (currentPage) {
      case 'beranda':
        return <Beranda onNavigate={setCurrentPage} />;
      case 'struktur':
        return <Struktur />;
      case 'berita':
        return <Berita />;
      case 'data-warga':
        return <DataWarga />;
      case 'iuran':
        return <Iuran />;
      case 'galeri':
        return <Galeri />;
      case 'kontak':
        return <Kontak />;
      default:
        return <Beranda onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="pb-16">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white py-12 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Paguyuban Cluster Kalita</h3>
            </div>
            <p className="text-gray-300 mb-6 text-lg max-w-2xl mx-auto">
              Membangun kebersamaan dan harmoni dalam lingkungan RT/RW untuk kehidupan yang lebih baik
            </p>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto mb-6"></div>
            <p className="text-sm text-gray-400">
              © 2025 Paguyuban Cluster Kalita. All rights reserved.
            </p>
          </div>
        </div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-10 -left-10 w-60 h-60 bg-teal-500/10 rounded-full blur-3xl"></div>
      </footer>

      {/* Realtime Components */}
      <RealtimeStatus />
      <NotificationPanel />
      <LiveChat />
    </div>
  );
}

export default App;