import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Clock, Instagram, ExternalLink, Scissors, CreditCard, DollarSign, Zap, Star, MessageCircle, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";

/**
 * DESIGN: Barba de Urso - Urbano, Funk e Classe
 * - Fundo escuro (#0A0A0A) com gradiente
 * - Paleta: Preto + Branco + Dourado/Marrom
 * - Vibe: Favela, Juventude, Funk com elegância
 * - O Urso é o destaque visual
 */

// Hook para detectar quando elemento entra na viewport
function useInView(ref: React.RefObject<HTMLDivElement | null>) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [ref]);

  return isInView;
}

export default function Home() {
  const [showMap, setShowMap] = useState(false);

  const galeryRef = useRef<HTMLDivElement>(null);
  const catalogRef = useRef<HTMLDivElement>(null);
  const donoRef = useRef<HTMLDivElement>(null);
  const depoRef = useRef<HTMLDivElement>(null);
  const whyRef = useRef<HTMLDivElement>(null);
  const pagamentoRef = useRef<HTMLDivElement>(null);
  const contatoRef = useRef<HTMLDivElement>(null);

  const galeryInView = useInView(galeryRef);
  const catalogInView = useInView(catalogRef);
  const donoInView = useInView(donoRef);
  const depoInView = useInView(depoRef);
  const whyInView = useInView(whyRef);
  const pagamentoInView = useInView(pagamentoRef);
  const contatoInView = useInView(contatoRef);

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

  const galeria = [
    { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663560035963/ivKCHtyhbsoXaVap9saFu3/barba3_f880113a.png", titulo: "Acabamento Perfeito" },
    { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663560035963/ivKCHtyhbsoXaVap9saFu3/corte2_bfd648bc.png", titulo: "Corte Clássico" },
    { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663560035963/ivKCHtyhbsoXaVap9saFu3/trabalho2_e483237d.png", titulo: "Estilo Urbano" },
  ];

  const depoimentos = [
    {
      nome: "João Silva",
      texto: "Melhor barbearia de BH! Profissionais top demais, ambiente massa e o atendimento é de verdade.",
      stars: 5
    },
    {
      nome: "Carlos Santos",
      texto: "Barba de Urso é referência! Qualidade premium com preço justo. Voltei mais 10 vezes!",
      stars: 5
    },
    {
      nome: "Marcus Oliveira",
      texto: "Lugar com personalidade, barbeiros que entendem de corte. Recomendo demais!",
      stars: 5
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A] text-white relative" style={{
      backgroundImage: `
        radial-gradient(circle at 20% 50%, rgba(212, 165, 116, 0.05) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(212, 165, 116, 0.03) 0%, transparent 50%),
        radial-gradient(circle at 40% 20%, rgba(107, 79, 58, 0.04) 0%, transparent 50%)
      `
    }}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0A0A0A]/95 backdrop-blur border-b border-[#D4A574]/20">
        <div className="container flex items-center justify-between py-4">
          <div>
            <h1 className="text-2xl font-black text-white">BARBA DE URSO</h1>
            <p className="text-xs text-[#D4A574] font-bold">BARBEARIA PREMIUM</p>
          </div>

          <a href="https://sites.appbarber.com.br/barbeariaursodocorte-z02c" target="_blank" rel="noopener noreferrer" className="btn-primary">
            AGENDAR
          </a>
        </div>
      </header>

      {/* Botão WhatsApp Flutuante */}
      <a 
        href="https://wa.me/5531992901332?text=Oi%20Barba%20de%20Urso!%20Gostaria%20de%20agendar%20um%20horário"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A574] rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="mb-8">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663560035963/ivKCHtyhbsoXaVap9saFu3/logo-4k_b21d9d2f.jpg" 
                alt="Urso" 
                className="w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-2xl" 
              />
            </div>

            <h2 className="text-5xl md:text-7xl font-black mb-6 text-white leading-tight">
              CORTE NA <span className="text-[#D4A574]">RISCA</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-semibold">
              A Barba de Urso é onde a favela encontra a classe.
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

      {/* Galeria de Trabalhos */}
      <section ref={galeryRef} className={`section-lg transition-all duration-1000 ${galeryInView ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
              GALERIA DE <span className="text-[#D4A574]">TRABALHOS</span>
            </h2>
            <div className="w-20 h-1 bg-[#D4A574]"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {galeria.map((item, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-lg card-urban p-0 h-64">
                <img 
                  src={item.url} 
                  alt={item.titulo}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <h3 className="text-lg font-black text-white">{item.titulo}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catálogo Completo */}
      <section ref={catalogRef} id="servicos" className={`section-lg bg-[#000000]/50 transition-all duration-1000 ${catalogInView ? 'opacity-100' : 'opacity-0'}`}>
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
      {/* Conheça o Dono */}
      <section ref={donoRef} className={`section-lg transition-all duration-1000 ${donoInView ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
                CONHEÇA O <span className="text-[#D4A574]">DONO</span>
              </h2>
              <div className="w-20 h-1 bg-[#D4A574] mb-8"></div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed font-semibold">
                Fundador da Barba de Urso, um empreendedor que acredita em qualidade. Desde 2023
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Cada cliente é uma oportunidade de mostrar o mais puro profissionalismo. Barba de Urso é mais que uma barbearia.
              </p>
              <a href="https://www.instagram.com/ursodepaiva/" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
                SIGA NO INSTAGRAM <Instagram className="w-4 h-4" />
              </a>
            </div>
            <div>
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663560035963/ivKCHtyhbsoXaVap9saFu3/ursoimg_a2b0dbb8.png"
                alt="Dono da Barba de Urso"
                className="w-full rounded-lg card-urban p-0 overflow-hidden"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section ref={depoRef} className={`section-lg bg-[#000000]/50 transition-all duration-1000 ${depoInView ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
              O QUE NOSSOS <span className="text-[#D4A574]">CLIENTES</span> DIZEM
            </h2>
            <div className="w-20 h-1 bg-[#D4A574]"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {depoimentos.map((dep, idx) => (
              <div key={idx} className="card-urban">
                <div className="mb-4">
                  <h3 className="font-black text-white mb-2">{dep.nome}</h3>
                  <div className="flex gap-1">
                    {[...Array(dep.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4A574] text-[#D4A574]" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 italic">"{dep.texto}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que Barba de Urso */}
      <section ref={whyRef} className={`section-lg transition-all duration-1000 ${whyInView ? 'opacity-100' : 'opacity-0'}`}>
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
      <section ref={pagamentoRef} className={`section-lg bg-[#000000]/50 transition-all duration-1000 ${pagamentoInView ? 'opacity-100' : 'opacity-0'}`}>
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

      {/* Contato Section com Mapa */}
      <section ref={contatoRef} className={`section-lg transition-all duration-1000 ${contatoInView ? 'opacity-100' : 'opacity-0'}`}>
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
              <p className="text-gray-400 mb-4">
                Rua José Isidoro Miranda, 1<br />
                Maria Goretti - Belo Horizonte/MG
              </p>
              <button 
                onClick={() => setShowMap(!showMap)}
                className="btn-secondary text-sm w-full"
              >
                {showMap ? "Fechar Mapa" : "Ver Mapa"}
              </button>
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

          {/* Mapa Interativo */}
          {showMap && (
            <div className="mb-12 card-urban p-0 overflow-hidden relative">
              <button
                onClick={() => setShowMap(false)}
                className="absolute top-4 right-4 z-10 bg-[#D4A574] text-[#0A0A0A] p-2 rounded-full hover:bg-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <iframe
                width="100%"
                height="400"
                style={{ border: 0 } as React.CSSProperties}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.8547484821316!2d-43.92450!3d-19.85250!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa3d5a1c1c1c1c1c1%3A0x1c1c1c1c1c1c1c1c!2sRua%20Jos%C3%A9%20Isidoro%20Miranda%2C%201%20-%20Maria%20Goretti%2C%20Belo%20Horizonte%20-%20MG!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              ></iframe>
            </div>
          )}

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
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663560035963/ivKCHtyhbsoXaVap9saFu3/logo-4k_b21d9d2f.jpg" 
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
