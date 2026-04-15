import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Clock, Instagram, ExternalLink, Scissors, CreditCard, DollarSign, Zap } from "lucide-react";

/**
 * DESIGN: Barba de Urso - Urbano, Funk e Classe
 * - Fundo escuro (#0A0A0A) com gradiente
 * - Paleta: Preto + Branco + Dourado/Marrom
 * - Vibe: Favela, Juventude, Funk com elegância
 * - O Urso é o destaque visual
 */

export default function Home() {
  const servicos = [
    { nome: "Corte", preco: 35, tempo: "40 min" },
    { nome: "Barba", preco: 25, tempo: "20 min" },
    { nome: "Corte & Barba", preco: 60, tempo: "50 min" },
    { nome: "Sobrancelha", preco: 10, tempo: "10 min" },
    { nome: "Corte Infantil", preco: 40, tempo: "50 min" },
    { nome: "Pigmentação", preco: 25, tempo: "15 min" },
    { nome: "Barba Completa", preco: 45, tempo: "30 min" },
    { nome: "Hidratação Facial", preco: 30, tempo: "25 min" },
  ];

  const formasPagamento = [
    { nome: "Dinheiro", icon: DollarSign },
    { nome: "Cartão de Crédito", icon: CreditCard },
    { nome: "Cartão de Débito", icon: CreditCard },
    { nome: "Pix", icon: Zap },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0A0A0A]/95 backdrop-blur border-b border-[#D4A574]/20">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663560035963/ivKCHtyhbsoXaVap9saFu3/logo-urso_cfd1fe49.png" 
              alt="Logo Barba de Urso" 
              className="w-14 h-14 object-contain animate-pulse-glow" 
            />
            <div>
              <h1 className="text-2xl font-black text-white">BARBA DE URSO</h1>
              <p className="text-xs text-[#D4A574] font-bold">BARBEARIA PREMIUM</p>
            </div>
          </div>

          <a href="https://sites.appbarber.com.br/barbeariaursodocorte-z02c" target="_blank" rel="noopener noreferrer" className="btn-primary">
            AGENDAR
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A574] rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="mb-8">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663560035963/ivKCHtyhbsoXaVap9saFu3/logo-urso_cfd1fe49.png" 
                alt="Urso" 
                className="w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-2xl" 
              />
            </div>

            <h2 className="text-5xl md:text-7xl font-black mb-6 text-white leading-tight">
              CORTE COM <span className="text-[#D4A574]">FORÇA</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-semibold">
              Barba impecável, corte moderno e estilo que fala. A Barba de Urso é onde a favela encontra a classe.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://sites.appbarber.com.br/barbeariaursodocorte-z02c" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center justify-center gap-2">
                AGENDAR AGORA
              </a>
              <a href="#servicos" className="btn-secondary inline-flex items-center justify-center gap-2">
                VER CATÁLOGO
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Catálogo Completo */}
      <section id="servicos" className="section-lg">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
              CATÁLOGO <span className="text-[#D4A574]">COMPLETO</span>
            </h2>
            <div className="w-20 h-1 bg-[#D4A574]"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicos.map((servico, idx) => (
              <div key={idx} className="card-urban group">
                <div className="flex items-start justify-between mb-4">
                  <Scissors className="w-8 h-8 text-[#D4A574]" />
                  <span className="text-xs bg-[#D4A574]/20 text-[#D4A574] px-3 py-1 rounded-full font-bold">
                    {servico.tempo}
                  </span>
                </div>
                <h3 className="text-xl font-black mb-3 text-white">{servico.nome}</h3>
                <p className="text-4xl font-black text-[#D4A574]">
                  R$ {servico.preco}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6 text-lg">Combos e pacotes especiais disponíveis no AppBarber</p>
            <a href="https://sites.appbarber.com.br/barbeariaursodocorte-z02c" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
              VER TODOS OS SERVIÇOS <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Por que escolher */}
      <section className="section-lg bg-[#1A1A1A]/50">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
              POR QUE <span className="text-[#D4A574]">BARBA DE URSO</span>?
            </h2>
            <div className="w-20 h-1 bg-[#D4A574]"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-14 h-14 bg-[#D4A574] rounded-lg flex items-center justify-center flex-shrink-0 font-black text-[#0A0A0A]">
                ✓
              </div>
              <div>
                <h3 className="font-black text-xl mb-2 text-white">PROFISSIONAIS EXPERIENTES</h3>
                <p className="text-gray-400">Barbeiros que entendem de corte, barba e estilo de verdade</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-14 h-14 bg-[#D4A574] rounded-lg flex items-center justify-center flex-shrink-0 font-black text-[#0A0A0A]">
                ✓
              </div>
              <div>
                <h3 className="font-black text-xl mb-2 text-white">QUALIDADE PREMIUM</h3>
                <p className="text-gray-400">Serviços impecáveis com atenção aos detalhes que importam</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-14 h-14 bg-[#D4A574] rounded-lg flex items-center justify-center flex-shrink-0 font-black text-[#0A0A0A]">
                ✓
              </div>
              <div>
                <h3 className="font-black text-xl mb-2 text-white">AMBIENTE ACOLHEDOR</h3>
                <p className="text-gray-400">Espaço confortável onde você se sente em casa</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-14 h-14 bg-[#D4A574] rounded-lg flex items-center justify-center flex-shrink-0 font-black text-[#0A0A0A]">
                ✓
              </div>
              <div>
                <h3 className="font-black text-xl mb-2 text-white">ATENDIMENTO DIFERENCIADO</h3>
                <p className="text-gray-400">Foco total na sua satisfação e experiência</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formas de Pagamento */}
      <section className="section-lg">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
              FORMAS DE <span className="text-[#D4A574]">PAGAMENTO</span>
            </h2>
            <div className="w-20 h-1 bg-[#D4A574]"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {formasPagamento.map((forma, idx) => {
              const Icon = forma.icon;
              return (
                <div key={idx} className="card-urban text-center">
                  <Icon className="w-12 h-12 text-[#D4A574] mx-auto mb-4" />
                  <h3 className="font-black text-lg text-white">{forma.nome}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section className="section-lg bg-[#1A1A1A]/50">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
              ENTRE EM <span className="text-[#D4A574]">CONTATO</span>
            </h2>
            <div className="w-20 h-1 bg-[#D4A574]"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="card-urban text-center">
              <div className="w-16 h-16 bg-[#D4A574]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-[#D4A574]" />
              </div>
              <h3 className="font-black text-lg mb-2 text-white">LOCALIZAÇÃO</h3>
              <p className="text-gray-400">
                Rua José Isidoro Miranda, 1<br />
                Maria Goretti - Belo Horizonte/MG
              </p>
            </div>

            <div className="card-urban text-center">
              <div className="w-16 h-16 bg-[#D4A574]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-[#D4A574]" />
              </div>
              <h3 className="font-black text-lg mb-2 text-white">TELEFONE</h3>
              <a href="tel:+5531992901332" className="text-[#D4A574] hover:text-white transition-colors font-bold text-lg">
                (31) 99290-1332
              </a>
            </div>

            <div className="card-urban text-center">
              <div className="w-16 h-16 bg-[#D4A574]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-[#D4A574]" />
              </div>
              <h3 className="font-black text-lg mb-2 text-white">HORÁRIOS</h3>
              <p className="text-gray-400 text-sm font-semibold">
                Seg-Sex: 09:00 - 20:00<br />
                Sábado: 08:00 - 18:00
              </p>
            </div>
          </div>

          <div className="bg-[#D4A574]/10 border-2 border-[#D4A574] p-8 rounded-lg text-center">
            <h3 className="text-3xl font-black mb-4 text-white">AGENDE SEU HORÁRIO</h3>
            <p className="text-gray-300 mb-6 text-lg font-semibold">
              Faça seu agendamento de forma rápida e prática através do AppBarber
            </p>
            <a href="https://sites.appbarber.com.br/barbeariaursodocorte-z02c" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
              AGENDAR AGORA
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#000000] border-t border-[#D4A574]/20 py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663560035963/ivKCHtyhbsoXaVap9saFu3/logo-urso_cfd1fe49.png" 
                alt="Logo Barba de Urso" 
                className="w-8 h-8 object-contain" 
              />
              <p className="text-sm text-gray-400">© 2024 Barba de Urso. Todos os direitos reservados.</p>
            </div>
            
            <div className="flex gap-6">
              <a href="https://www.instagram.com/barbadeursoriginal/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4A574] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="tel:+5531992901332" className="hover:text-[#D4A574] transition-colors">
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
