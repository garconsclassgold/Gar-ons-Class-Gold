
import React, { useState, useEffect } from 'react';

const WHATSAPP_LINK = "https://wa.me/5582987553087";
const CHEF_ANDREIA_INSTA = "https://www.instagram.com/chefandreiaferreira/";

const testimonials = [
  { text: "Equipe extremamente profissional, atendimento impecável!", author: "Mariana S." },
  { text: "Os garçons foram educados, rápidos e muito organizados.", author: "João Pedro" },
  { text: "Meu evento ficou ainda mais elegante com a Class Gold.", author: "Ana Clara" },
  { text: "Pontualidade e excelência do começo ao fim.", author: "Ricardo M." },
  { text: "Recomendo de olhos fechados, serviço de alto padrão.", author: "Beatriz" },
  { text: "Atendimento diferenciado, realmente classe gold.", author: "Felipe G." }
];

const GoldWave: React.FC = () => (
  <div className="w-full overflow-hidden bg-black">
    <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
      <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
      </defs>
      <g className="parallax">
        <use href="#gentle-wave" x="48" y="0" fill="rgba(212, 175, 55, 0.3)" />
        <use href="#gentle-wave" x="48" y="3" fill="rgba(212, 175, 55, 0.5)" />
        <use href="#gentle-wave" x="48" y="5" fill="rgba(212, 175, 55, 0.2)" />
        <use href="#gentle-wave" x="48" y="7" fill="#D4AF37" />
      </g>
    </svg>
  </div>
);

const Confetti: React.FC = () => {
  const [glitters, setGlitters] = useState<{ id: number; left: string; delay: string; duration: string }[]>([]);
  
  useEffect(() => {
    const newGlitters = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${4 + Math.random() * 6}s`
    }));
    setGlitters(newGlitters);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {glitters.map(g => (
        <div 
          key={g.id} 
          className="glitter" 
          style={{ 
            left: g.left, 
            animation: `confetti-fall ${g.duration} linear infinite`, 
            animationDelay: g.delay 
          }} 
        />
      ))}
    </div>
  );
};

const App: React.FC = () => {
  const [formData, setFormData] = useState({ nome: '', tipo: '', data: '', convidados: '', local: '' });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Gostaria de solicitar um orçamento:%0A*Nome:* ${formData.nome}%0A*Evento:* ${formData.tipo}%0A*Data:* ${formData.data}%0A*Convidados:* ${formData.convidados}%0A*Local:* ${formData.local}`;
    window.open(`${WHATSAPP_LINK}?text=${msg}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-yellow-600/30">
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-card py-4 px-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="font-serif text-xl md:text-2xl font-black gold-text-gradient tracking-tighter">GARÇONS CLASS GOLD</span>
          <nav className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-[0.3em]">
            <a href="#inicio" className="hover:text-yellow-500 transition-colors">Início</a>
            <a href="#sobrenos" className="hover:text-yellow-500 transition-colors">A Equipe</a>
            <a href="#parceria" className="hover:text-yellow-500 transition-colors">Gastronomia</a>
            <a href="#elogios" className="hover:text-yellow-500 transition-colors">Vips</a>
            <a href="#orcamento" className="bg-yellow-600 text-black px-5 py-2 rounded font-black hover:brightness-110 transition-all">Orçamento</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-50 scale-105" 
            alt="Drink de Luxo"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/80"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full mb-8 shadow-[0_0_15px_rgba(234,179,8,0.5)]"></div>
          <h1 className="font-serif text-5xl md:text-8xl font-black mb-6 gold-text-gradient leading-tight tracking-tight">
            Garçons Class Gold
          </h1>
          <p className="text-lg md:text-2xl text-slate-300 font-light italic mb-10 leading-relaxed max-w-2xl mx-auto">
            “Excelência, elegância e atendimento de alto padrão para o seu evento.”
          </p>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 bg-gradient-to-r from-yellow-700 to-yellow-500 text-black font-black uppercase tracking-widest rounded-full shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:scale-105 transition-all active:scale-95"
          >
            Começar agora
          </a>
        </div>
        <div className="absolute bottom-0 left-0 w-full z-20">
          <GoldWave />
        </div>
      </section>

      {/* Sobre Nós */}
      <section id="sobrenos" className="py-32 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
               <div className="h-[2px] w-12 bg-yellow-500"></div>
               <span className="uppercase tracking-[0.5em] text-yellow-500 font-bold text-xs">A Arte de Servir</span>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold leading-tight uppercase">Equipe <span className="gold-text-gradient">Class Gold</span></h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Na <strong>Garçons Class Gold</strong>, cada evento é treated como uma obra-prima. Nossa missão é oferecer mais do que um serviço de mesa; entregamos uma experiência de luxo onde a discrição e a agilidade caminham juntas.
              <br/><br/>
              Composta por profissionais rigorosamente selecionados e treinados nos mais altos padrões de etiqueta, nossa equipe é especialista em antecipar as necessidades dos convidados, garantindo que o fluxo do seu evento seja perfeito e ininterrupto.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              Seja em um casamento clássico, uma formatura vibrante ou um evento corporativo de grande porte, a postura impecável e o compromisso com a satisfação total são a nossa assinatura. Quando a excelência é o requisito, a Class Gold é a resposta.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 relative">
            <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=600" className="rounded-2xl border border-white/10 shadow-2xl translate-y-10" alt="Garçom Profissional" />
            <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600" className="rounded-2xl border border-white/10 shadow-2xl" alt="Atendimento" />
            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=600" className="rounded-2xl border border-white/10 shadow-2xl col-span-2 mt-6 h-56 object-cover" alt="Sofisticação" />
          </div>
        </div>
      </section>

      {/* Buffet Andreia Ferreira */}
      <section id="parceria" className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto glass-card p-12 md:p-24 rounded-[4rem] border-yellow-500/20">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="text-yellow-500 font-bold uppercase tracking-[0.4em] text-xs block mb-8">Recomendação VIP</span>
              <h2 className="font-serif text-4xl md:text-7xl font-bold mb-8 italic leading-none">Buffet Chef <span className="gold-text-gradient uppercase">Andreia Ferreira</span></h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-12">
                A experiência Class Gold alcança sua plenitude quando aliada à gastronomia de elite da <strong>Chef Andreia Ferreira</strong>. Especialista em criar menus memoráveis, a Chef transforma ingredientes selecionados em pratos que são verdadeiras celebrações ao paladar.
                <br/><br/>
                Sua cozinha harmoniza perfeitamente com nosso estilo de atendimento: sofisticado, atento e inesquecível. Recomendamos o Buffet da Chef Andreia para quem busca o ápice da gastronomia e apresentação em seus eventos.
              </p>
              <a href={CHEF_ANDREIA_INSTA} target="_blank" className="inline-flex items-center gap-4 px-10 py-5 border-2 border-yellow-500 text-yellow-500 font-bold rounded-2xl hover:bg-yellow-500 hover:text-black transition-all group">
                Explorar Menu no Instagram 
                <i className="fab fa-instagram text-2xl group-hover:scale-110 transition-transform"></i>
              </a>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-6">
               <img src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=400" className="rounded-3xl border border-white/10 shadow-2xl hover:scale-105 transition-transform" alt="Gastronomia 1" />
               <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=400" className="rounded-3xl border border-white/10 shadow-2xl mt-12 hover:scale-105 transition-transform" alt="Gastronomia 2" />
               <img src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=400" className="rounded-3xl border border-white/10 shadow-2xl hover:scale-105 transition-transform" alt="Gastronomia 3" />
               <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=400" className="rounded-3xl border border-white/10 shadow-2xl mt-12 hover:scale-105 transition-transform" alt="Gastronomia 4" />
            </div>
          </div>
        </div>
      </section>

      {/* Elogios */}
      <section id="elogios" className="py-32 px-6 bg-zinc-950 relative overflow-hidden">
        <Confetti />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-20 uppercase tracking-tighter">Vozes de Quem Viveu o <span className="gold-text-gradient">Ouro</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.map((t, idx) => (
              <div key={idx} className="glass-card p-12 rounded-[3rem] text-left hover:border-yellow-500/50 transition-all group">
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star text-yellow-500 text-sm shadow-[0_0_10px_rgba(234,179,8,0.3)]"></i>
                  ))}
                </div>
                <p className="text-slate-300 italic mb-10 leading-relaxed font-light text-lg">“{t.text}”</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-700 to-yellow-500 flex items-center justify-center font-black text-black text-xs">CG</div>
                  <span className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">{t.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Orçamento */}
      <section id="orcamento" className="py-32 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-8 uppercase">Orçamento <span className="gold-text-gradient">Premium</span></h2>
          <p className="text-slate-500 italic mb-16 text-lg">Garanta a melhor equipe do estado. Receba sua proposta exclusiva em minutos.</p>
          
          <div className="glass-card p-10 md:p-20 rounded-[4rem] border-yellow-500/20 glow-gold relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
            <form onSubmit={handleFormSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="text-left space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-black text-yellow-600 ml-4">Nome Completo</label>
                  <input required placeholder="Como podemos te chamar?" value={formData.nome} onChange={e => setFormData({...formData, nome: e.target.value})} className="w-full bg-white/5 border-b border-white/10 p-4 outline-none focus:border-yellow-500 transition-colors text-white placeholder:text-white/20" />
                </div>
                <div className="text-left space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-black text-yellow-600 ml-4">Estilo do Evento</label>
                  <select required value={formData.tipo} onChange={e => setFormData({...formData, tipo: e.target.value})} className="w-full bg-transparent border-b border-white/10 p-4 outline-none focus:border-yellow-500 transition-colors text-white/80">
                    <option value="" className="bg-black">Selecione...</option>
                    <option value="Casamento" className="bg-black">Casamento de Luxo</option>
                    <option value="Formatura" className="bg-black">Formatura</option>
                    <option value="Corporativo" className="bg-black">Evento Empresarial</option>
                    <option value="Aniversário" className="bg-black">Aniversário / 15 Anos</option>
                  </select>
                </div>
                <div className="text-left space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-black text-yellow-600 ml-4">Data Planejada</label>
                  <input required type="date" value={formData.data} onChange={e => setFormData({...formData, data: e.target.value})} className="w-full bg-transparent border-b border-white/10 p-4 outline-none focus:border-yellow-500 transition-colors text-white/80" />
                </div>
                <div className="text-left space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-black text-yellow-600 ml-4">Volume de Convidados</label>
                  <input required type="number" placeholder="Quantidade estimada" value={formData.convidados} onChange={e => setFormData({...formData, convidados: e.target.value})} className="w-full bg-white/5 border-b border-white/10 p-4 outline-none focus:border-yellow-500 transition-colors text-white placeholder:text-white/20" />
                </div>
              </div>
              <div className="text-left space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-black text-yellow-600 ml-4">Localização</label>
                <input required placeholder="Onde será a celebração?" value={formData.local} onChange={e => setFormData({...formData, local: e.target.value})} className="w-full bg-white/5 border-b border-white/10 p-4 outline-none focus:border-yellow-500 transition-colors text-white placeholder:text-white/20" />
              </div>
              <button type="submit" className="w-full py-8 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-black uppercase tracking-[0.3em] rounded-3xl hover:brightness-110 transition-all shadow-[0_15px_40px_rgba(212,175,55,0.3)] active:scale-95">
                Solicitar via WhatsApp <i className="fab fa-whatsapp ml-3 text-xl"></i>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-black border-t border-white/5 text-center px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16 mb-20">
          <div className="text-left">
            <span className="font-serif text-3xl md:text-4xl font-black gold-text-gradient block mb-3 tracking-tighter">GARÇONS CLASS GOLD</span>
            <p className="text-slate-600 text-[11px] uppercase tracking-[0.5em] font-black italic">Excelência e Elegância Incomparáveis</p>
          </div>
          <div className="flex gap-8">
            <a href="https://www.instagram.com/garconsvip.gold/" target="_blank" className="w-16 h-16 rounded-full border border-yellow-500/20 flex items-center justify-center text-yellow-500 hover:bg-yellow-500 hover:text-black hover:border-transparent transition-all shadow-lg">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href={WHATSAPP_LINK} target="_blank" className="w-16 h-16 rounded-full border border-yellow-500/20 flex items-center justify-center text-yellow-500 hover:bg-yellow-500 hover:text-black hover:border-transparent transition-all shadow-lg">
              <i className="fab fa-whatsapp text-2xl"></i>
            </a>
          </div>
        </div>
        <div className="text-[10px] text-slate-800 uppercase tracking-[0.6em] font-black border-t border-white/5 pt-12">
          &copy; {new Date().getFullYear()} Garçons Class Gold – Excelência que brilha.
        </div>
      </footer>
    </div>
  );
};

export default App;
