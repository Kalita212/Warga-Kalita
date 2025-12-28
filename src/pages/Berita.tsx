import React, { useState } from 'react';
import { Calendar, Tag, ArrowLeft } from 'lucide-react';
import { useRealtimeBerita } from '../hooks/useRealtime';
import type { Berita } from '../lib/supabase';

const Berita: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<any>(null);
  
  // Use realtime data
  const { data: beritaList, loading } = useRealtimeBerita();

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Memuat berita...</p>
        </div>
      </div>
    );
  }

  if (selectedNews) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <button
          onClick={() => setSelectedNews(null)}
          className="group flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 mb-8 font-bold transition-all"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Kembali ke Daftar Berita</span>
        </button>

        <article className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden animate-fadeIn">
          <div className="p-8 sm:p-12">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <span className={`px-5 py-2 rounded-xl text-sm font-bold shadow-md ${
                  selectedNews.type === 'berita'
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white'
                    : 'bg-gradient-to-r from-orange-500 to-red-600 text-white'
                }`}>
                  {selectedNews.type === 'berita' ? '📰 Berita' : '📢 Pengumuman'}
                </span>
                <div className="flex items-center space-x-2 text-gray-500">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">{new Date(selectedNews.published_at || selectedNews.date).toLocaleDateString('id-ID', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {selectedNews.title}
              </h1>
              {selectedNews.author && (
                <p className="text-gray-500 font-medium">Oleh {selectedNews.author}</p>
              )}
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-8"></div>

            <div className="prose prose-lg max-w-none">
              <div className="whitespace-pre-line text-gray-700 leading-relaxed text-lg">
                {selectedNews.content}
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header */}
      <div className="text-center mb-12 animate-fadeIn">
        <div className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full text-sm font-bold text-emerald-700 mb-4">
          📰 Info Terbaru
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Berita & Pengumuman
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Dapatkan informasi terkini mengenai kegiatan, pengumuman, dan perkembangan
          terbaru di lingkungan Cluster Kalita.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center mb-10">
        <div className="bg-white rounded-2xl p-1.5 shadow-lg border border-gray-100">
          <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold shadow-lg shadow-emerald-200 transition-all">
            Semua
          </button>
          <button className="px-8 py-3 rounded-xl text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 font-bold transition-all">
            Berita
          </button>
          <button className="px-8 py-3 rounded-xl text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 font-bold transition-all">
            Pengumuman
          </button>
        </div>
      </div>

      {/* News List */}
      <div className="space-y-6">
        {beritaList.map((berita: Berita, index: number) => (
          <article
            key={berita.id}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all duration-300 cursor-pointer border border-gray-100 hover:-translate-y-1 animate-fadeIn"
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={() => setSelectedNews(berita)}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div className="flex items-center space-x-4 mb-3 md:mb-0">
                <span className={`px-4 py-2 rounded-xl text-sm font-bold shadow-md ${
                  berita.type === 'berita'
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white'
                    : 'bg-gradient-to-r from-orange-500 to-red-600 text-white'
                }`}>
                  {berita.type === 'berita' ? '📰 Berita' : '📢 Pengumuman'}
                </span>
                <div className="flex items-center space-x-2 text-gray-500">
                  <Calendar className="w-5 h-5" />
                  <span className="text-sm font-medium">
                    {new Date(berita.published_at).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors leading-tight">
              {berita.title}
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              {berita.summary}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <span className="text-emerald-600 font-bold group-hover:text-emerald-700 flex items-center gap-2 transition-all">
                <span>Baca Selengkapnya</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
              <span className="text-sm text-gray-400 font-medium">Oleh {berita.author}</span>
            </div>
          </article>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-12">
        <button className="group bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-10 py-4 rounded-xl font-bold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg shadow-emerald-200 hover:shadow-2xl hover:scale-105">
          <span className="flex items-center gap-2">
            Muat Lebih Banyak
            <span className="group-hover:rotate-180 transition-transform">⟳</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Berita;