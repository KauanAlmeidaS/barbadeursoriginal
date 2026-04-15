import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Clock, Instagram, ExternalLink, Scissors } from "lucide-react";

/**
 * DESIGN: Landing Page Simples e Intuitiva
 * - Paleta: Preto (#000000) + Branco (#FFFFFF) + Marrom (#6B4F3A)
 * - Tipografia clara e legível
 * - Layout direto e focado em conversão
 * - Fácil navegação
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663560035963/ivKCHtyhbsoXaVap9saFu3/logo-urso_cfd1fe49.png" 
              alt="Logo Barba de Urso" 
              className="w-12 h-12 object-contain" 
            />
            <div>
              <h1 className="text-xl font-bold">BARBA DE URSO</h1>
              <p className="text-xs text-gray-600">Barbearia Premium</p>
            </div>
          </div>

          <a href="https://sites.appbarber.com.br/barbeariaursodocorte-z02c" target="_blank" rel="noopener noreferrer" className="btn-primary">
            AGENDAR
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Cortes Modernos e Barba Impecável
            </h2>
            
            <p className="text-lg text-gray-700 mb-8">
              Bem-vindo à Barba de Urso, onde qualidade, tradição e estilo se encontram. Oferecemos os melhores serviços de barbearia em Belo Horizonte.
            </p>

            <div className="flex gap-4">
              <a href="https://sites.appbarber.com.br/barbeariaursodocorte-z02c" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
                AGENDAR AGORA
              </a>
              <a href="#servicos" className="btn-secondary">
                CONHEÇA NOSSOS SERVIÇOS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="section-lg bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Nossos Serviços</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <Scissors className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Corte</h3>
              <p className="text-gray-600 mb-4">Cortes modernos e clássicos com precisão</p>
              <p className="text-2xl font-bold text-primary">R$ 35,00</p>
            </Card>

            <Card className="p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <Scissors className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Barba</h3>
              <p className="text-gray-600 mb-4">Barba impecável e bem cuidada</p>
              <p className="text-2xl font-bold text-primary">R$ 25,00</p>
            </Card>

            <Card className="p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <Scissors className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Corte & Barba</h3>
              <p className="text-gray-600 mb-4">Combo completo para o visual perfeito</p>
              <p className="text-2xl font-bold text-primary">R$ 60,00</p>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">Temos diversos combos e pacotes especiais disponíveis</p>
            <a href="https://sites.appbarber.com.br/barbeariaursodocorte-z02c" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
              VER TODOS OS SERVIÇOS <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Por que escolher */}
      <section className="section-lg bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Por que escolher a Barba de Urso?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Profissionais Experientes</h3>
                <p className="text-gray-600">Barbeiros dedicados e sempre atualizados com as tendências</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Qualidade Premium</h3>
                <p className="text-gray-600">Serviços impecáveis com atenção aos detalhes</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Ambiente Acolhedor</h3>
                <p className="text-gray-600">Espaço confortável, climatizado e bem estruturado</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Atendimento Diferenciado</h3>
                <p className="text-gray-600">Foco total na sua satisfação e experiência</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section className="section-lg bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Entre em Contato</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Localização</h3>
              <p className="text-gray-600">
                Rua José Isidoro Miranda, 1<br />
                Maria Goretti - Belo Horizonte/MG
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Telefone</h3>
              <a href="tel:+5531992901332" className="text-gray-600 hover:text-primary transition-colors">
                (31) 99290-1332
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Horários</h3>
              <p className="text-gray-600 text-sm">
                Seg-Sex: 09:00 - 20:00<br />
                Sábado: 08:00 - 18:00
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Agende seu Horário</h3>
            <p className="text-gray-600 mb-6">
              Faça seu agendamento de forma prática e rápida através do AppBarber
            </p>
            <a href="https://sites.appbarber.com.br/barbeariaursodocorte-z02c" target="_blank" rel="noopener noreferrer" className="btn-primary">
              AGENDAR AGORA
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663560035963/ivKCHtyhbsoXaVap9saFu3/logo-urso_cfd1fe49.png" 
                alt="Logo Barba de Urso" 
                className="w-8 h-8 object-contain" 
              />
              <p className="text-sm">© 2024 Barba de Urso. Todos os direitos reservados.</p>
            </div>
            
            <div className="flex gap-6">
              <a href="https://www.instagram.com/barbadeursoriginal/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="tel:+5531992901332" className="hover:text-primary transition-colors">
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
