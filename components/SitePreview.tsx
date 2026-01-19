
import React from 'react';
import { SiteConfig } from '../types';

interface SitePreviewProps {
  config: SiteConfig;
}

export const SitePreview: React.FC<SitePreviewProps> = ({ config }) => {
  const primaryBg = { backgroundColor: config.primaryColor };
  const primaryText = { color: config.primaryColor };
  const primaryBorder = { borderColor: config.primaryColor };
  const secondaryBg = { backgroundColor: config.secondaryColor };

  return (
    <div className="w-full bg-white shadow-2xl rounded-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Dynamic Header */}
      <nav className="p-6 flex justify-between items-center border-b border-slate-100">
        <span className="text-2xl font-black tracking-tighter" style={primaryText}>
          {config.companyName.toUpperCase()}
        </span>
        <div className="hidden md:flex gap-6 font-medium text-slate-600">
          <a href="#about" className="hover:opacity-70">Sobre</a>
          <a href="#features" className="hover:opacity-70">Serviços</a>
          <a href="#contact" className="hover:opacity-70">Contato</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6 text-center" style={{ background: `linear-gradient(135deg, ${config.primaryColor}10, ${config.secondaryColor}20)` }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            {config.heroTitle}
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            {config.heroSubtitle}
          </p>
          <button 
            className="px-10 py-4 rounded-xl text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform"
            style={primaryBg}
          >
            {config.ctaText}
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Nossos Diferenciais</h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={primaryBg}></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {config.features.map((feature, idx) => (
            <div key={idx} className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:border-indigo-200 transition-colors group">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform" style={secondaryBg}>
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="inline-block px-4 py-1 rounded-full mb-6 text-sm font-bold uppercase tracking-wider" style={primaryBg}>
              Quem Somos
            </div>
            <h2 className="text-4xl font-bold mb-8 leading-tight">Ajudando você a alcançar seus objetivos</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              {config.aboutText}
            </p>
          </div>
          <div className="flex-1 w-full aspect-video rounded-3xl overflow-hidden bg-slate-800 shadow-2xl relative">
             <img src="https://picsum.photos/800/600" alt="Workplace" className="object-cover w-full h-full opacity-60" />
             <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-20 h-20 rounded-full border-4 border-white flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                 <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-white border-b-[15px] border-b-transparent ml-2"></div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {config.testimonials.map((t, idx) => (
            <div key={idx} className="p-10 rounded-3xl border-2 border-slate-50 italic relative">
              <span className="text-6xl absolute top-4 left-4 opacity-10" style={primaryText}>&ldquo;</span>
              <p className="text-lg text-slate-700 mb-8 relative z-10">{t.quote}</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200"></div>
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto glass-card p-10 rounded-3xl shadow-xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Vamos conversar?</h2>
            <p className="text-slate-500">Envie uma mensagem e retornaremos em breve para o e-mail {config.contactEmail}.</p>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Nome" className="w-full p-4 rounded-xl border-2 border-slate-100 focus:outline-none" style={{ focusBorderColor: config.primaryColor }} />
              <input type="email" placeholder="E-mail" className="w-full p-4 rounded-xl border-2 border-slate-100 focus:outline-none" />
            </div>
            <textarea placeholder="Sua mensagem" rows={4} className="w-full p-4 rounded-xl border-2 border-slate-100 focus:outline-none"></textarea>
            <button className="w-full py-4 rounded-xl text-white font-bold text-lg shadow-lg" style={primaryBg}>
              Enviar Mensagem
            </button>
          </form>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="p-8 text-center text-slate-400 border-t border-slate-100">
        <p>&copy; 2024 {config.companyName}. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};
