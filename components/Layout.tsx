
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 glass-card px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 w-8 h-8 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">S</span>
            </div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
              SparkSite AI
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-slate-600 hover:text-indigo-600 transition-colors">Como funciona</a>
            <a href="#" className="text-slate-600 hover:text-indigo-600 transition-colors">Templates</a>
            <button className="bg-indigo-600 text-white px-5 py-2 rounded-full font-medium hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
              Criar Site
            </button>
          </nav>
        </div>
      </header>
      <main className="flex-grow pt-24">
        {children}
      </main>
      <footer className="bg-slate-900 text-slate-400 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-white text-xl font-bold mb-4">SparkSite AI</h2>
            <p className="max-w-sm">
              Empoderando empreendedores a criarem sua presença online de forma rápida, inteligente e profissional.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Produto</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Gerador AI</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hospedagem</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Domínios</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-slate-800 mt-12 pt-8 flex justify-between items-center">
          <p>&copy; 2024 SparkSite AI. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <span className="w-8 h-8 rounded-full bg-slate-800"></span>
            <span className="w-8 h-8 rounded-full bg-slate-800"></span>
          </div>
        </div>
      </footer>
    </div>
  );
};
