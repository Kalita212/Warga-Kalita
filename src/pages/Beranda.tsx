import React from 'react';
import { ArrowRight, Calendar, Users, Newspaper } from 'lucide-react';

interface BerandaProps {
  onNavigate: (page: string) => void;
}

const Beranda: React.FC<BerandaProps> = ({ onNavigate }) => {
  const recentNews = [
    {
      id: 1,
      title: 'Pembayaran Iuran Bulan Januari 2025',
      date: '2025-01-15',
      summary: 'Reminder untuk warga yang belum melakukan pembayaran iuran bulanan Januari 2025. Batas waktu pembayaran hingga tanggal 20 Januari.',
      type: 'pengumuman'
    },
    {
      id: 2,
      title: 'Gotong Royong Bersih-Bersih Lingkungan',
      date: '2025-01-10',
      summary: 'Kegiatan gotong royong bersih-bersih lingkungan cluster akan dilaksanakan pada hari Minggu, 19 Januari 2025 pukul 07.00 WIB.',
      type: 'berita'
    },
    {
      id: 3,
      title: 'Rapat Bulanan Pengurus RT',
      date: '2025-01-08',
      summary: 'Rapat koordinasi bulanan pengurus RT akan dilaksanakan pada Sabtu, 25 Januari 2025 di Balai Pertemuan Cluster Kalita.',
      type: 'pengumuman'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600 rounded-3xl text-white p-8 sm:p-12 mb-12 shadow-2xl shadow-emerald-200 animate-fadeIn">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="relative max-w-4xl">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
            ✨ Website Resmi RT/RW Cluster Kalita
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance">
            Selamat Datang di Paguyuban Cluster Kalita
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl">
            Membangun kebersamaan dan harmoni dalam lingkungan RT/RW untuk menciptakan
            kehidupan yang lebih baik bagi seluruh warga.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('struktur')}
              className="group bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold hover:bg-emerald-50 transition-all duration-300 flex items-center space-x-2 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Lihat Pengurus</span>
            </button>
            <button
              onClick={() => onNavigate('kontak')}
              className="group border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Hubungi Kami
            </button>
          </div>
        </div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-10 -left-10 w-60 h-60 bg-cyan-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 border border-gray-100 animate-fadeIn">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform duration-300">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-4xl font-bold text-gray-900 mb-2">150+</h3>
          <p className="text-gray-600 font-medium">Kepala Keluarga</p>
        </div>

        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 border border-gray-100 animate-fadeIn animation-delay-200">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-200 group-hover:scale-110 transition-transform duration-300">
            <Calendar className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-4xl font-bold text-gray-900 mb-2">5+</h3>
          <p className="text-gray-600 font-medium">Tahun Berdiri</p>
        </div>

        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 border border-gray-100 animate-fadeIn animation-delay-400">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-200 group-hover:scale-110 transition-transform duration-300">
            <Newspaper className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-4xl font-bold text-gray-900 mb-2">25+</h3>
          <p className="text-gray-600 font-medium">Kegiatan per Tahun</p>
        </div>
      </div>

      {/* Sambutan */}
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-12 mb-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-30 -z-0"></div>
        <div className="relative z-10">
          <div className="flex items-center space-x-3 mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full"></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Sambutan Ketua RT</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6 font-medium">
              Assalamualaikum warahmatullahi wabarakatuh dan salam sejahtera untuk kita semua.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              Selamat datang di website resmi Paguyuban RT/RW Cluster Kalita. Melalui platform digital ini,
              kami berharap dapat memberikan informasi yang akurat dan terkini mengenai berbagai kegiatan,
              pengumuman, dan perkembangan yang terjadi di lingkungan kita.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              Paguyuban ini hadir sebagai wadah untuk memperkuat silaturahmi antar warga, meningkatkan
              partisipasi dalam kegiatan bersama, dan menciptakan lingkungan yang aman, nyaman, dan harmonis
              bagi seluruh keluarga di Cluster Kalita.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              Mari bersama-sama kita wujudkan Cluster Kalita yang bersih, indah, dan penuh kebersamaan.
            </p>
            <div className="bg-white rounded-2xl p-6 border-l-4 border-emerald-500 shadow-md">
              <p className="text-gray-600 font-medium mb-2">Hormat kami,</p>
              <p className="text-2xl font-bold text-emerald-600 mb-1">Budi Santoso</p>
              <p className="text-gray-500">Ketua RT Cluster Kalita</p>
            </div>
          </div>
        </div>
      </div>

      {/* Berita Terbaru */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-3">
            <div className="h-1 w-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full"></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Berita & Pengumuman Terbaru</h2>
          </div>
          <button
            onClick={() => onNavigate('berita')}
            className="group flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-bold transition-all duration-300"
          >
            <span>Lihat Semua</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentNews.map((news, index) => (
            <div
              key={news.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 hover:-translate-y-2 animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => onNavigate('berita')}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-4 py-1.5 rounded-full text-xs font-bold shadow-sm ${
                    news.type === 'berita'
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white'
                      : 'bg-gradient-to-r from-orange-500 to-red-600 text-white'
                  }`}>
                    {news.type === 'berita' ? 'Berita' : 'Pengumuman'}
                  </span>
                  <span className="text-sm text-gray-500 font-medium">
                    {new Date(news.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                  {news.title}
                </h3>
                <p className="text-gray-600 leading-relaxed line-clamp-3 text-sm">
                  {news.summary}
                </p>
                <div className="mt-4 flex items-center text-emerald-600 font-semibold text-sm group-hover:gap-2 transition-all">
                  <span>Baca selengkapnya</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Beranda;