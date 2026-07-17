import { ArrowRight, Play, Calendar, Users, Award, Sparkles, Heart, Shield, TreePine } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section relative overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.15),transparent_50%)]" />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-600/20 border border-brand-600/30 text-brand-300 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              <span>Tai Chi Chuan Estilo Yang</span>
            </div>

            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-7xl mb-6 leading-tight">
              De la crisis cervical a la{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">
                serenidad
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Le dijeron que podía quedar parapléjico. Hoy, gracias al Tai Chi,
              eliminó la espasticidad, redujo sus medicamentos a la mitad y
              encontró un poder que no sabía que existía: la serenidad.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button size="xl" asChild>
                <Link href="/camino">
                  Conoce mi historia
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link href="/testimonio">
                  <Play className="w-5 h-5" />
                  Ver testimonio
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { value: "2008", label: "Diagnóstico", icon: Shield },
                { value: "2009", label: "Inicio Tai Chi", icon: TreePine },
                { value: "15+", label: "Años de práctica", icon: Award },
                { value: "50%", label: "Reducción medicamentos", icon: Heart },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-600/20 mb-2">
                    <stat.icon className="w-5 h-5 text-brand-400" />
                  </div>
                  <div className="font-heading font-bold text-2xl text-white">{stat.value}</div>
                  <div className="text-sm text-neutral-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="section bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-heading font-bold text-neutral-900 dark:text-neutral-50 text-3xl sm:text-4xl mb-6">
              El momento en que todo cambió
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              En 2008, Mauricio despertó con un dedo dormido. En semanas, las vértebras C3, C4 y C5
              se aplastaron. Los médicos dijeron: <em className="text-neutral-900 dark:text-neutral-100">&ldquo;Cirugía urgente o parálisis permanente.&rdquo;</em>
              La operación duró 8 horas. Le salvaron la vida, pero no pudieron recuperar las células muertas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Espasticidad severa",
                description: "Convulsiones involuntarias con pulso de 180 latidos. Duración: 40 segundos de agonía, repetidas cada 20-30 minutos.",
                icon: "⚡",
              },
              {
                title: "Dolor crónico",
                description: "Pregabalina 900mg/día, Tramadol 3 veces al día. Dosis máximas que ningún médico podía superar.",
                icon: "💊",
              },
              {
                title: "Pérdida de esperanza",
                description: "Los especialistas dictaminaron: no se puede operar, no se puede descomprimir, no se puede eliminar la espasticidad.",
                icon: "📋",
              },
            ].map((item, i) => (
              <Card key={i}>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-heading font-semibold text-neutral-900 dark:text-neutral-100 text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Metaphor - Emperor, General, Soldiers */}
      <section className="section bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-heading font-bold text-neutral-900 dark:text-neutral-50 text-3xl sm:text-4xl mb-6">
              El Emperador, el General y los Soldados
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl mx-auto">
              Un principio del Tao que transformó la vida de Mauricio:
              el Corazón gobierna, la Mente ejecuta, el Cuerpo obedece.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "El Emperador",
                subtitle: "Corazón",
                description: "Tiene la sabiduría. Cuando gobierna, todo fluye en armonía. Mauricio entendió que su mente había ocupado este espacio por años.",
                color: "brand",
                icon: "👑",
              },
              {
                title: "El General",
                subtitle: "Mente",
                description: "Ejecuta las órdenes, pero sin sabiduría. Ideas van y vienen. Cuando el General gobierna, solo hay resistencia y agotamiento.",
                color: "amber",
                icon: "⚔️",
              },
              {
                title: "Los Soldados",
                subtitle: "Cuerpo",
                description: "Siguen las órdenes. Si el General los manda a la guerra sin estrategia, el cuerpo explota. El cuerpo de Mauricio colapsó.",
                color: "emerald",
                icon: "🛡️",
              },
            ].map((item, i) => (
              <Card key={i} variant="elevated">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <div className={`text-sm font-medium mb-2 ${
                    item.color === "brand" ? "text-brand-600 dark:text-brand-400" :
                    item.color === "amber" ? "text-amber-600 dark:text-amber-400" :
                    "text-emerald-600 dark:text-emerald-400"
                  }`}>
                    {item.subtitle}
                  </div>
                  <h3 className="font-heading font-semibold text-neutral-900 dark:text-neutral-100 text-xl mb-3">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Journey */}
      <section className="section bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-neutral-900 dark:text-neutral-50 text-3xl sm:text-4xl mb-6">
                El camino de la transformación
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                &ldquo;Me saco mis armaduras... y me entrego completamente a este camino sin saber que me encontraría.&rdquo;
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "La muerte simbólica",
                  description: "Despertar de la operación. Agradecer no saber a quién. Sentir que venía el sentimiento de supervivencia. Una segunda oportunidad.",
                  icon: "🌅",
                },
                {
                  step: "02",
                  title: "Sacar las armaduras",
                  description: "Retirar las muletas, las órtesis, las cintas. Entender que la armadura estaba tan inmersa que ya no sentía. Salir de la zona de confort.",
                  icon: "🔓",
                },
                {
                  step: "03",
                  title: "El árbol: raíces firmes, ramas flexibles",
                  description: "Estar enraizado para tomar decisiones firmes como el tronco, pero con ramas flexibles que no se quiebran en la tormenta.",
                  icon: "🌳",
                },
                {
                  step: "04",
                  title: "El océano de posibilidades",
                  description: "Mis ideas son las olas del mar. Si las olas quieren golpear las rocas con fuerza, pero la masa del océano manda. Mi vida debe ir en armonía con la corriente.",
                  icon: "🌊",
                },
                {
                  step: "05",
                  title: "La serenidad como poder",
                  description: "Ya no busco la tranquilidad ni la felicidad. Apareció algo desconocido: el poder ilimitado que entrega la serenidad.",
                  icon: "✨",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-brand-600 dark:text-brand-400">
                        Paso {item.step}
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold text-neutral-900 dark:text-neutral-100 text-xl mb-2">
                      {item.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section bg-neutral-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-6">
              Los resultados hablan
            </h2>
            <p className="text-lg text-neutral-300 leading-relaxed">
              &ldquo;Antes podía correr, hoy día puedo volar.&rdquo;
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { value: "100%", label: "Espasticidad eliminada", description: "Sin cirugía adicional" },
              { value: "50%", label: "Reducción medicamentos", description: "De dosis máximas a la mitad" },
              { value: "15+", label: "Años de práctica", description: "Y contando" },
              { value: "∞", label: "Posibilidades", description: "Abiertas a todo" },
            ].map((stat, i) => (
              <Card key={i} variant="glass">
                <CardContent className="p-6 text-center">
                  <div className="font-heading font-bold text-3xl text-brand-400 mb-2">{stat.value}</div>
                  <div className="font-medium text-white mb-1">{stat.label}</div>
                  <div className="text-sm text-neutral-400">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="primary" asChild>
              <Link href="/contacto">
                Agenda tu sesión
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="section bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-xl sm:text-2xl text-neutral-700 dark:text-neutral-300 italic leading-relaxed mb-8">
              &ldquo;Uno encuentra su destino caminando por el sendero que trata de evitarlo.&rdquo;
              <footer className="text-sm text-neutral-500 dark:text-neutral-400 mt-4 not-italic">
                — Kung Fu Panda (literalmente lo que me ocurrió)
              </footer>
            </blockquote>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/camino">
                  Conoce la historia completa
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/practica">
                  Descubre la práctica
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}