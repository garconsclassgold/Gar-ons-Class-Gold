
import React, { useState, useEffect } from 'react';

const WHATSAPP_NUMBER = "558297553087";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const CHEF_ANDREIA_INSTA = "https://www.instagram.com/chefandreiaferreira/";

const testimonials = [
  "Equipe extremamente profissional, atendimento impecável!",
  "Os garçons foram educados, rápidos e muito organizados.",
  "Meu evento ficou ainda mais elegante com a Class Gold.",
  "Pontualidade e excelência do começo ao fim.",
  "Recomendo de olhos fechados, serviço de alto padrão.",
  "Atendimento diferenciado, realmente classe gold.",
  "Todos os convidados elogiaram os garçons.",
  "Muito organizados e bem apresentados.",
  "Profissionalismo que faz a diferença.",
  "Equipe educada e muito atenciosa.",
  "O melhor serviço de garçons que já contratei.",
  "Tranquilidade total durante o evento.",
  "Elegância e respeito com todos.",
  "Preço justo e serviço impecável.",
  "Com certeza contratarei novamente."
];

const GoldWave: React.FC = () => (
  <div className="w-full overflow-hidden">
    <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
      <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
      </defs>
      <g className="parallax">
        <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(212, 175, 55, 0.7)" />
        <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(212, 175, 55, 0.5)" />
        <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(212, 175, 55, 0.3)" />
        <use xlinkHref="#gentle-wave" x="48" y="7" fill="#D4AF37" />
      </g>
    </svg>
  </div>
);

const App: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    tipoEvento: '',
    data: '',
    convidados: '',
    local: ''
  });
  const [isAdVisible, setIsAdVisible] = useState(false);
  const [isAdClosed, setIsAdClosed] = useState(false);
  const [isBotOpen, setIsBotOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isAdClosed) setIsAdVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isAdClosed]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailInfo = formData.email ? `*E-mail:* ${formData.email}%0A` : '';
    const message = `Olá! Gostaria de um orçamento para meu evento.%0A%0A` +
      `*Nome:* ${formData.nome}%0A` +
      emailInfo +
      `*Evento:* ${formData.tipoEvento}%0A` +
      `*Data:* ${formData.data}%0A` +
      `*Convidados:* ${formData.convidados}%0A` +
      `*Local:* ${formData.local}`;
    
    window.open(`${WHATSAPP_LINK}?text=${message}`, '_blank');
  };

  const closeAd = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAdVisible(false);
    setIsAdClosed(true);
  };

  return (
    <div className="min-h-screen bg-black selection:bg-gold selection:text-black relative overflow-x-hidden">
      
      {/* EFEITO DE LUZES (SPOTLIGHTS) */}
      <div className="spotlight spotlight-1"></div>
      <div className="spotlight spotlight-2"></div>
      <div className="spotlight spotlight-3"></div>

      {/* ANÚNCIO FLUTUANTE PREMIUM */}
      {isAdVisible && (
        <div 
          onClick={() => window.open(WHATSAPP_LINK, '_blank')}
          className="fixed bottom-24 right-6 z-[200] w-[280px] md:w-[320px] bg-gold p-5 rounded-2xl shadow-2xl cursor-pointer ad-pulse animate-slide-up border-2 border-black/10 group"
        >
          <button 
            onClick={closeAd}
            className="absolute -top-3 -right-3 w-8 h-8 bg-black text-gold rounded-full flex items-center justify-center border-2 border-gold shadow-lg hover:bg-zinc-800 transition-colors z-10"
          >
            <i className="fas fa-times text-xs"></i>
          </button>
          
          <div className="flex flex-col gap-1">
            <span className="text-black/60 font-black text-[10px] uppercase tracking-widest block">
              🔥 Promoção Especial 🔥
            </span>
            <h3 className="text-black font-serif text-2xl font-black leading-none mb-2">
              RESERVE AGORA
            </h3>
            <p className="text-black/80 text-xs font-medium leading-tight mb-4">
              Garanta a melhor equipe de garçons para seu evento com condições exclusivas hoje!
            </p>
            <div className="flex items-center justify-between bg-black/10 p-3 rounded-xl border border-black/5 group-hover:bg-black/20 transition-all">
              <span className="text-black font-black text-[10px] uppercase tracking-tighter">
                Fale conosco no WhatsApp
              </span>
              <i className="fab fa-whatsapp text-black text-xl"></i>
            </div>
          </div>
        </div>
      )}

      {/* GOLDIZINHO BOT */}
      <div className="fixed bottom-6 right-6 z-[210] flex flex-col items-end gap-4">
        {isBotOpen && (
          <div className="w-72 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gold/20 mb-2 animate-slide-up">
            <div className="bg-black p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 gold-gradient rounded-full flex items-center justify-center text-xl shadow-lg">
                  🤖
                </div>
                <div>
                  <h4 className="text-gold font-black text-xs tracking-widest">GOLDIZINHO</h4>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    <span className="text-[8px] text-white/60 uppercase font-black">Online</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsBotOpen(false)} className="text-white/40 hover:text-white transition-colors">
                <i className="fas fa-times text-xs"></i>
              </button>
            </div>
            <div className="p-6 bg-slate-50">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 text-slate-700 text-sm mb-6 leading-relaxed">
                Olá! Sou o <span className="text-gold font-bold">Goldizinho</span> 🤖 <br /><br />
                Posso ajudar você com um orçamento personalizado agora mesmo?
              </div>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-green-500 hover:bg-green-600 text-white text-center rounded-2xl font-black text-xs tracking-widest transition-all shadow-xl shadow-green-200 active:scale-95"
              >
                <i className="fab fa-whatsapp mr-2 text-sm"></i>
                FALAR COM IA
              </a>
            </div>
          </div>
        )}
        
        <button 
          onClick={() => setIsBotOpen(!isBotOpen)}
          className="w-16 h-16 gold-gradient rounded-full shadow-[0_10px_30px_rgba(212,175,55,0.4)] flex items-center justify-center text-3xl animate-float border-4 border-black group relative"
        >
          <span className="group-hover:scale-110 transition-transform">🤖</span>
          {!isBotOpen && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-black flex items-center justify-center text-[10px] font-black text-white">1</div>
          )}
        </button>
      </div>

      {/* ONDAS DOURADAS LATERAIS */}
      <div className="fixed top-0 left-0 h-full w-24 md:w-40 z-0 hidden lg:block side-wave-left overflow-hidden pointer-events-none">
        <svg viewBox="0 0 100 1000" preserveAspectRatio="none" className="h-full w-full">
          <defs>
            <linearGradient id="goldShimmerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="50%" stopColor="#FFF" className="shimmer-effect" />
              <stop offset="100%" stopColor="#D4AF37" />
            </linearGradient>
            <linearGradient id="goldBaseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#B8860B" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#8B4513" />
            </linearGradient>
          </defs>
          <path d="M0,0 Q60,250 15,500 T0,1000 L0,1000 L0,0 Z" fill="url(#goldBaseGrad)" opacity="0.8" />
          <path d="M0,0 Q80,250 20,500 T0,1000 L0,1000 L0,0 Z" fill="url(#goldShimmerGrad)" opacity="0.4" />
        </svg>
      </div>
      
      <div className="fixed top-0 right-0 h-full w-24 md:w-40 z-0 hidden lg:block side-wave-right overflow-hidden pointer-events-none">
        <svg viewBox="0 0 100 1000" preserveAspectRatio="none" className="h-full w-full rotate-180">
          <path d="M0,0 Q60,250 15,500 T0,1000 L0,1000 L0,0 Z" fill="url(#goldBaseGrad)" opacity="0.8" />
          <path d="M0,0 Q80,250 20,500 T0,1000 L0,1000 L0,0 Z" fill="url(#goldShimmerGrad)" opacity="0.4" />
        </svg>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-gold/20 py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="font-serif text-2xl font-black gold-text-gradient tracking-tighter cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              CLASS GOLD
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm tracking-widest uppercase text-white/80">
            <a href="#inicio" className="hover:text-gold transition-colors focus:text-gold">Início</a>
            <a href="#sobrenos" className="hover:text-gold transition-colors focus:text-gold">Sobre Nós</a>
            <a href="#parceria" className="hover:text-gold transition-colors focus:text-gold">Parceria</a>
            <a href="#elogios" className="hover:text-gold transition-colors focus:text-gold">Elogios</a>
            <a href="#orcamento" className="bg-gold text-black px-5 py-2 rounded font-bold hover:brightness-110 transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              Orçamento
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-50" 
            alt="Drinks de luxo"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-8 glow-gold"></div>
          <h2 className="font-serif text-6xl md:text-8xl font-black mb-6 leading-none gold-text-gradient animate-in fade-in zoom-in duration-1000">
            Garçons Class Gold
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 font-light tracking-wide italic max-w-2xl mx-auto leading-relaxed">
            “Excelência, elegância e atendimento de alto padrão para o seu evento.”
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-gold text-black font-black rounded-full shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.7)] transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-sm"
            >
              Começar agora
            </a>
          </div>
        </div>
        
        {/* Wave Divider at Bottom of Hero */}
        <div className="absolute bottom-0 left-0 w-full z-20">
          <GoldWave />
        </div>
      </section>

      {/* About Section */}
      <section id="sobrenos" className="py-24 px-6 bg-zinc-950 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="flex items-center gap-4">
               <div className="w-12 h-[2px] bg-gold"></div>
               <span className="uppercase tracking-[0.4em] text-gold font-bold text-xs">Nossa História</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight uppercase">Sobre <span className="gold-text-gradient">Nós</span></h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              Somos a equipe <strong className="text-white">Garçons Class Gold</strong>, especializados em eventos sociais, festas particulares, casamentos, aniversários e eventos corporativos. Nosso diferencial é a atenção aos detalhes e o treinamento constante de nossa equipe para proporcionar o melhor serviço possível.
            </p>
            <div className="p-6 border-l-2 border-gold bg-white/5 rounded-r-xl italic text-slate-300">
              "Nosso compromisso é oferecer um atendimento profissional, educado e elegante, garantindo excelência do início ao fim."
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl"></div>
            <div className="relative p-3 border border-gold/20 rounded-3xl overflow-hidden group glow-gold">
              <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1000" 
                className="rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-1000 w-full object-cover aspect-[4/3] shadow-2xl" 
                alt="Serviço Premium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section id="parceria" className="py-24 px-6 bg-black relative border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card p-8 md:p-16 rounded-[3rem] border-gold/30 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
            <div className="flex-1 z-10">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-gold/10 rounded-full border border-gold/20 mb-6">
                <span className="text-gold text-xs font-black uppercase tracking-widest">Parceria de Elite</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 italic">Buffet Chef<br/><span className="gold-text-gradient uppercase tracking-tighter">Andreia Ferreira</span></h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Recomendamos o Buffet da <strong className="text-white">Chef Andreia Ferreira</strong> para harmonizar perfeitamente com nosso atendimento Gold. Sabor e elegância em cada detalhe.
              </p>
              <a 
                href={CHEF_ANDREIA_INSTA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-gold text-gold font-bold rounded-xl hover:bg-gold hover:text-black transition-all group"
              >
                <i className="fab fa-instagram text-xl"></i>
                Ver Cardápio Oficial
              </a>
            </div>
            <div className="flex-1 w-full z-10 grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=400" className="rounded-2xl border border-gold/20 glow-gold" alt="Buffet 1" />
              <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=400" className="rounded-2xl border border-gold/20 mt-8" alt="Buffet 2" />
            </div>
          </div>
        </div>
      </section>

      {/* Elogios Section */}
      <section id="elogios" className="py-24 px-6 bg-zinc-950 relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 italic uppercase">Elogios</h2>
          <p className="text-gold tracking-[0.3em] uppercase text-sm font-bold mb-16">O que dizem sobre nosso padrão gold</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {testimonials.map((quote, idx) => (
              <div key={idx} className="glass-card p-8 rounded-3xl border-t-2 border-gold/30 hover:border-gold transition-all duration-500">
                <p className="text-slate-300 italic mb-8 leading-relaxed font-light">“{quote}”</p>
                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full gold-gradient p-[1px]">
                    <div className="w-full h-full bg-zinc-900 rounded-full flex items-center justify-center text-gold text-[10px] font-black">CG</div>
                  </div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-widest">Cliente Vip</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Orçamento Section */}
      <section id="orcamento" className="py-24 px-6 bg-black relative border-t border-white/5">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 uppercase">Orçamento</h2>
          <p className="text-slate-400 italic mb-12">Receba uma proposta VIP em minutos para seu grande dia.</p>
          
          <div className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-gold/20 glow-gold shadow-2xl">
            <form onSubmit={handleFormSubmit} className="space-y-8 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase text-gold font-bold tracking-widest ml-1">Seu Nome *</label>
                  <input required name="nome" value={formData.nome} onChange={handleInputChange} placeholder="Nome completo" className="w-full bg-white/5 border-b border-white/20 p-4 focus:outline-none focus:border-gold text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase text-gold font-bold tracking-widest ml-1">E-mail (Opcional)</label>
                  <input name="email" value={formData.email} onChange={handleInputChange} placeholder="exemplo@email.com" className="w-full bg-white/5 border-b border-white/20 p-4 focus:outline-none focus:border-gold text-white" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase text-gold font-bold tracking-widest ml-1">Tipo de Evento *</label>
                  <select required name="tipoEvento" value={formData.tipoEvento} onChange={handleInputChange} className="w-full bg-zinc-900 border-b border-white/20 p-4 focus:outline-none focus:border-gold text-white appearance-none">
                      <option value="">Selecione...</option>
                      <option value="Casamento">Casamento</option>
                      <option value="Formatura">Formatura</option>
                      <option value="Aniversário">Aniversário</option>
                      <option value="Empresarial">Empresarial</option>
                      <option value="Particular">Particular</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase text-gold font-bold tracking-widest ml-1">Data do Evento *</label>
                  <input required type="date" name="data" value={formData.data} onChange={handleInputChange} className="w-full bg-white/5 border-b border-white/20 p-4 focus:outline-none focus:border-gold text-white" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase text-gold font-bold tracking-widest ml-1">Nº de Convidados *</label>
                  <input required type="number" name="convidados" value={formData.convidados} onChange={handleInputChange} placeholder="Ex: 150" className="w-full bg-white/5 border-b border-white/20 p-4 focus:outline-none focus:border-gold text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase text-gold font-bold tracking-widest ml-1">Local (Cidade/Bairro) *</label>
                  <input required name="local" value={formData.local} onChange={handleInputChange} placeholder="Onde será o evento?" className="w-full bg-white/5 border-b border-white/20 p-4 focus:outline-none focus:border-gold text-white" />
                </div>
              </div>

              <button type="submit" className="w-full py-6 bg-gold text-black font-black text-sm tracking-[0.2em] rounded-2xl hover:scale-[1.02] shadow-xl uppercase transition-all flex items-center justify-center gap-3">
                <i className="fab fa-whatsapp text-lg"></i>
                Solicitar Orçamento no WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-black border-t border-white/5 text-center px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
          <div className="text-left">
            <span className="font-serif text-3xl font-black gold-text-gradient block mb-2">Class Gold</span>
            <p className="text-slate-500 text-xs tracking-widest font-bold uppercase">Excelência em Atendimento</p>
          </div>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/garconsvip.gold/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all"><i className="fab fa-instagram"></i></a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>
        <p className="text-[10px] text-slate-600 uppercase tracking-widest font-bold">© Garçons Class Gold – O Padrão Ouro de Atendimento</p>
      </footer>

    </div>
  );
};

export default App;
