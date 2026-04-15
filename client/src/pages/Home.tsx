import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Clock, Instagram, Facebook, Scissors, Droplet, Eye, ExternalLink } from "lucide-react";

/**
 * DESIGN PHILOSOPHY: Brutalism Contemporâneo
 * - Tipografia ousada e assertiva (Playfair Display para títulos)
 * - Paleta: Preto profundo (#0D0D0D) + Marrom amadeirado (#6B4F3A) + Amarelo dourado (#F2C94C)
 * - Layouts assimétricos com espaço estratégico
 * - Linhas diagonais e elementos geométricos como separadores
 * - Animações deliberadas e transições suaves
 */

export default function Home() {
  const services = [
    { name: "Corte", price: "R$ 35,00", time: "40 min", icon: Scissors },
    { name: "Barba", price: "R$ 25,00", time: "20 min", icon: Droplet },
    { name: "Corte & Barba", price: "R$ 60,00", time: "50 min", icon: Scissors },
    { name: "Sobrancelha", price: "R$ 10,00", time: "10 min", icon: Eye },
    { name: "Corte Infantil", price: "R$ 40,00", time: "50 min", icon: Scissors },
    { name: "Pigmentação", price: "R$ 25,00", time: "15 min", icon: Droplet },
  ];

  const differentials = [
    { title: "PROFISSIONAIS EXPERIENTES", description: "Barbeiros com anos de experiência e dedicação ao ofício." },
    { title: "QUALIDADE PREMIUM", description: "Serviços impecáveis com atenção aos detalhes." },
    { title: "AMBIENTE ACOLHEDOR", description: "Espaço confortável e bem estruturado." },
    { title: "ATENDIMENTO DIFERENCIADO", description: "Foco total na sua satisfação e experiência." },
  ];

  const hours = [
    { day: "Segunda", time: "12:00 - 19:00" },
    { day: "Terça", time: "09:00 - 19:00" },
    { day: "Quarta", time: "09:00 - 19:00" },
    { day: "Quinta", time: "09:00 - 20:00" },
    { day: "Sexta", time: "08:00 - 20:00" },
    { day: "Sábado", time: "08:00 - 18:00" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-background border-b-2 border-primary">
        <div className="container flex items-center justify-between py-4 md:py-6">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-primary flex items-center justify-center border-2 border-accent">
              <span className="text-2xl">🐻</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg md:text-xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>URSO</h1>
              <p className="text-xs text-muted-foreground font-semibold">DO CORTE</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-8">
            <a href="#sobre" className="text-sm font-semibold hover:text-accent transition-colors duration-300">SOBRE</a>
            <a href="#servicos" className="text-sm font-semibold hover:text-accent transition-colors duration-300">SERVIÇOS</a>
            <a href="#diferenciais" className="text-sm font-semibold hover:text-accent transition-colors duration-300">DIFERENCIAIS</a>
            <a href="#contato" className="text-sm font-semibold hover:text-accent transition-colors duration-300">CONTATO</a>
          </nav>

          <a href="https://sites.appbarber.com.br/barbeariaursodocorte-z02c" target="_blank" rel="noopener noreferrer" className="btn-primary">
            AGENDAR
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663560035963/ivKCHtyhbsoXaVap9saFu3/hero-barbershop-JawHVStnbVr3i7bksufCSu.webp"
            alt="Barbearia Urso do Corte"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="container relative z-10 py-20">
          <div className="max-w-2xl">
            <div className="mb-6 animate-fade-in-up">
              <div className="w-1 h-20 bg-accent mb-6"></div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in-up" style={{ fontFamily: "'Playfair Display', serif", animationDelay: "0.1s" }}>
              BARBA, CABELO E ESTILO
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Experiência premium em cortes modernos, barba impecável e cuidados com estilo. Venha conhecer a força do Urso do Corte.
            </p>

            <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <a href="https://sites.appbarber.com.br/barbeariaursodocorte-z02c" target="_blank" rel="noopener noreferrer" className="btn-primary">
                AGENDAR AGORA
              </a>
              <a href="#sobre" className="btn-secondary">
                CONHEÇA MAIS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="section-lg bg-card border-t-4 border-primary">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                SOBRE O URSO
              </h2>
              <div className="w-1 h-16 bg-accent mb-8"></div>
              
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                A Barbearia Urso do Corte é sinônimo de qualidade, tradição e modernidade. Desde 2023, atendemos clientes que buscam mais que um simples corte - buscam uma experiência.
              </p>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Nossos profissionais são especializados em cortes modernos, barba impecável e cuidados com estilo. Cada cliente é único, e cada serviço é executado com precisão e dedicação.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-accent flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Ambiente Premium</h3>
                    <p className="text-gray-400">Espaço confortável, climatizado e bem estruturado</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-accent flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Profissionais Experientes</h3>
                    <p className="text-gray-400">Barbeiros dedicados e sempre atualizados</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-accent flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Qualidade Garantida</h3>
                    <p className="text-gray-400">Serviços impecáveis e atenção aos detalhes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663560035963/ivKCHtyhbsoXaVap9saFu3/barber-action-76RNcdgVbZqvA7Gw4WzyAk.webp"
                alt="Profissional em ação"
                className="w-full h-auto border-4 border-primary"
              />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 border-4 border-accent opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="section-lg bg-background">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              NOSSOS SERVIÇOS
            </h2>
            <div className="w-1 h-16 bg-accent"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="bg-card border-2 border-primary p-6 hover:border-accent transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg">{service.name}</h3>
                      <p className="text-sm text-muted-foreground">{service.time}</p>
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-accent">{service.price}</p>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 p-8 bg-card border-4 border-accent">
            <p className="text-center text-lg text-gray-300 mb-6">
              Temos diversos combos promocionais e pacotes especiais disponíveis no AppBarber
            </p>
            <div className="flex justify-center">
              <a href="https://sites.appbarber.com.br/barbeariaursodocorte-z02c" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
                VER TODOS OS SERVIÇOS <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section id="diferenciais" className="section-lg bg-card border-t-4 border-primary">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              POR QUE ESCOLHER O URSO
            </h2>
            <div className="w-1 h-16 bg-accent"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {differentials.map((diff, index) => (
              <div key={index} className="border-l-4 border-accent pl-6 py-4">
                <h3 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {diff.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {diff.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-background p-8 border-2 border-primary">
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>COMODIDADES</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent"></span>
                  Wi-fi de alta velocidade
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent"></span>
                  Estacionamento disponível
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent"></span>
                  Acessibilidade completa
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent"></span>
                  Atende crianças
                </li>
              </ul>
            </div>

            <div className="bg-background p-8 border-2 border-accent">
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>FORMAS DE PAGAMENTO</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent"></span>
                  Dinheiro
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent"></span>
                  Cartão de Crédito
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent"></span>
                  Cartão de Débito
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent"></span>
                  Pix
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria Section */}
      <section className="section-lg bg-background">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              GALERIA
            </h2>
            <div className="w-1 h-16 bg-accent"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663560035963/ivKCHtyhbsoXaVap9saFu3/hero-barbershop-JawHVStnbVr3i7bksufCSu.webp"
              alt="Trabalho 1"
              className="w-full h-64 object-cover border-2 border-primary hover:border-accent transition-all duration-300"
            />
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663560035963/ivKCHtyhbsoXaVap9saFu3/barbershop-interior-74X9mXch4y23rKLTWKtZKo.webp"
              alt="Trabalho 2"
              className="w-full h-64 object-cover border-2 border-primary hover:border-accent transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="section-lg bg-card border-t-4 border-primary">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                LOCALIZAÇÃO E HORÁRIOS
              </h2>
              <div className="w-1 h-16 bg-accent mb-8"></div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Endereço</h3>
                    <p className="text-gray-400">
                      Rua José Isidoro Miranda, 1<br />
                      Maria Goretti - Belo Horizonte/MG<br />
                      CEP: 31930-540
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Contato</h3>
                    <a href="tel:+5531992901332" className="text-gray-400 hover:text-accent transition-colors">
                      (31) 99290-1332
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-3">Horário de Atendimento</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-400">
                      {hours.map((h, i) => (
                        <div key={i} className="flex justify-between">
                          <span className="font-semibold">{h.day}:</span>
                          <span>{h.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <a href="https://www.instagram.com/ursodocorte._" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-primary flex items-center justify-center hover:bg-accent transition-colors duration-300">
                  <Instagram className="w-6 h-6 text-accent hover:text-primary" />
                </a>
                <a href="https://sites.appbarber.com.br/barbeariaursodocorte-z02c" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-primary flex items-center justify-center hover:bg-accent transition-colors duration-300">
                  <ExternalLink className="w-6 h-6 text-accent hover:text-primary" />
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="bg-background p-8 border-4 border-accent">
                <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  AGENDE SEU HORÁRIO
                </h3>
                <p className="text-gray-400 mb-8">
                  Faça seu agendamento de forma prática e rápida através do AppBarber. Escolha o serviço, horário e profissional de sua preferência.
                </p>
                <a href="https://sites.appbarber.com.br/barbeariaursodocorte-z02c" target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center inline-block">
                  AGENDAR AGORA
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t-2 border-primary py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🐻</span>
              <p className="text-sm text-gray-500">© 2024 Barbearia Urso do Corte. Todos os direitos reservados.</p>
            </div>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="https://www.instagram.com/ursodocorte._" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                Instagram
              </a>
              <a href="tel:+5531992901332" className="hover:text-accent transition-colors">
                Contato
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
