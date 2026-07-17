import { Metadata } from "next";
import { ArrowLeft, Play, Volume2, Clock, Calendar, User, Quote } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Testimonio",
  description: "Testimonio completo de Mauricio Ochoa: cómo el Tai Chi le devolvió la vida después de un diagnóstico de enfermedad catastrófica.",
};

const transcript = [
  {
    speaker: "Mauricio",
    text: "Quisiera comentar un poquito la experiencia que me tocó vivir y junto con Daniel, mi guía. En el año 2022 tuve una operación donde me extrajeron tres vértebras cervicales y quedaron dos hernias. Antes de eso yo ejercía mis labores profesionales sin problema, fui deportista muchos años en mi juventud, practiqué la disciplina del remo, incluso llegué a ser seleccionado en mi país.",
  },
  {
    speaker: "Mauricio",
    text: "Tenía muchas actividades deportivas, muchos proyectos, mucha ilusión de control, mucho estrés y mucha confusión emocional. Pero eso quizás lo vine a ver después.",
  },
  {
    speaker: "Mauricio",
    text: "El año 2022 de un día desperté y se me durmió este dedo, así de simple. Sentí algunos síntomas extraños como pérdida de sensibilidad, poca fortaleza en las extremidades. Pero en abril, cerca de abril, esto comenzó un par de semanas antes, se aceleraron los síntomas de manera agresiva, es como que las vértebras se hubiesen aplastado desde los pies de la cabeza y quedé en una posición de casi 90 grados en dos semanas.",
  },
  {
    speaker: "Mauricio",
    text: "Las manos se me pusieron muy rígidas, no podía estirar los dedos y no tuve más fuerza desde la mitad de mi cuerpo. Me llegué a una operación de urgencia, los médicos me explicaron que era una operación para salvar la vida, ya estaban las vértebras C3, C4, C5 y C6 muy comprometidas con una espasticidad gigante, que son convulsiones de los músculos involuntarias y con un dolor atroz.",
  },
  {
    speaker: "Mauricio",
    text: "Los médicos al explicarme que no sabía muy bien por qué ocurrió eso, pero sí era una necesidad urgente de extraerme las vértebras, poder descomprimir la médula, lo que más se pudiera, y me explicaron que había muchas posibilidades de quedar parapléjico por la complejidad de la operación.",
  },
  {
    speaker: "Mauricio",
    text: "En ese minuto recuerdo haber estado pasando situaciones emocionales muy difíciles, entonces fue un sentimiento extraño, como que viene el sentimiento de supervivencia, y cuando me dieron esa noticia ocurrió un momento de negación. Desperté de la operación y agradecí, no sabía a quién agradecer, tenía mucha escepticidad con todas las religiones.",
  },
  {
    speaker: "Mauricio",
    text: "Entonces era extraño el despertar y quedé erguido de pie, entonces dije, oh, me sané, y los médicos me explican que fue algo bastante difícil, duró cerca de ocho horas la operación y me salvaron la vida, pero no se podía hacer nada más respecto a lo que ya había ocurrido, las células y las neuronas murieron.",
  },
  {
    speaker: "Mauricio",
    text: "Los síntomas fueron muy agresivos, demasiado. Yo tenía una espasticidad que eran hidrotonios involuntarios, pero muy fuertes, y me quedaba el corazón cerca de unas 180 pulsaciones, 170, quedaba con la cabeza muy roja, la presión se me iba, duraba 40 segundos, después como que me desvanecía.",
  },
  {
    speaker: "Mauricio",
    text: "Y eso duraba un minuto, y los días, los minutos, y no paraba, y un día, y una semana, y un mes, en esas condiciones, no había vida. Quería un día, pero estaba contento que estaba. Muchos días no me podía levantar, entendí que el dolor es invalidante.",
  },
  {
    speaker: "Mauricio",
    text: "Y venían preguntas, dije, me voy a recuperar, tenía certeza que me iba a desvanecer, el dolor emocional es muy fuerte, y tenía que vencer, saber elegir bien mis batallas. En ese minuto era aprender a caminar, volver a pararme, volver a salir de la cama.",
  },
  {
    speaker: "Mauricio",
    text: "El problema del frío, el problema de la alimentación, el problema de externos, generaban que mi sistema nervioso se complicara. Se podía caer una aguja y yo me podía morir, el sistema nervioso estaba sumamente alterado.",
  },
  {
    speaker: "Mauricio",
    text: "Un amigo me dice, deberías practicar Tai Chi, ¿y qué es el Tai Chi? Son movimientos lentos, no sé bien de qué se trata, solamente a lo mejor te puede servir. No tenía idea de lo que era el Tai Chi, las artes marciales, el simbolismo y toda la escepticidad con cosas que no son medibles.",
  },
  {
    speaker: "Mauricio",
    text: "Así que un día X, me aparece un mensaje de una amiga que vio un afiche rebuscado, y llamé a la persona y me dio una cita. Esta persona me recibió con dos muletas, con una cinta para poder estirar mis dedos, una órtesis tobillo-pie, parecía como que anduviera con armaduras, lleno de accesorios.",
  },
  {
    speaker: "Daniel",
    text: "Y Daniel me dice, Mauricio no te sirven las armaduras, tienes que sacarte todas las armaduras.",
  },
  {
    speaker: "Daniel",
    text: "Si tienes la pieza rígida, si está con los bastones, nunca el cuerpo va a recibir el esfuerzo que le va a hacer desarrollar la fuerza, la estabilidad de poder pararse. Entonces salí completamente sin ninguna ayuda. Sácate todo, deja los bastones fuera.",
  },
  {
    speaker: "Mauricio",
    text: "Cuando me saco mis armaduras, y voy a hablar desde el punto de vista emocional, porque creo que el Tai Chi me enseñó, una pequeña reflexión con el tiempo, que el trabajo interno, desde el corazón, me generó un concepto de vida distinto, y este concepto de vida es el que hoy día me tiene totalmente independiente.",
  },
  {
    speaker: "Mauricio",
    text: "Sacarme estas armaduras me trajo eliminar una zona de confort. Como dice el Quijote de la Mancha: 'Más vale el salto que mata, que el ruego de hombres buenos.' ¿Cómo logro sacarme esta armadura si yo no sé cómo sacarla?",
  },
  {
    speaker: "Mauricio",
    text: "Cuando me di cuenta que podía conseguir más cosas en mi mente, que los problemas, que el dolor, que las penas, dije, hay más cosas. Y ¿cómo fue eso? A través de la meditación y el movimiento. En los minutos que yo hacía ejercicio, ya sea con Daniel o solo, lograba estar concentrado y le daba un espacio a mi mente, de nada, de nada.",
  },
  {
    speaker: "Mauricio",
    text: "Y no tenía eso cuando hacía deporte. Y dije, qué rico volver a encontrar la nada, y ahí puedo ocupar algo. Y me di cuenta de que con esa nada podía buscar y poderme enfocar en algo, y si me podía enfocar me había salido bien.",
  },
  {
    speaker: "Mauricio",
    text: "Asocié un ejemplo: existe un emperador, corazón, un general, mente, y un cuerpo, soldado. Mi mente general nunca le dejó espacio a la sabiduría, no le dio espacio al corazón, ni tampoco le dio espacio a esta nada, porque no había. Estaba mucho cerebro, mucho general, no había dónde enfocarse.",
  },
  {
    speaker: "Mauricio",
    text: "Con este espacio vacío, ¿qué conseguí? Placeres, gozos, éxtasis, emociones elevadas, sentimientos elevados, y fue tanto lo que disfrutaba con este espacio vacío que el dolor físico seguía existiendo. El problema químico sigue estando, pero mis horarios de medicamentos se me fueron corriendo de manera involuntaria.",
  },
  {
    speaker: "Mauricio",
    text: "Hoy día yo puedo contar esto, como medalla de oro, y muchas personas me dicen, ¡qué fácil! Pero yo hoy día me tengo que preocupar de tal y tal cosa. Yo decía, pero yo además de preocuparme de eso, lo único que quería era un día. Quería un día para poderme levantar, para tener las preocupaciones.",
  },
  {
    speaker: "Mauricio",
    text: "Nunca más me voy a desaprovechar nada. ¿Cómo lo hago? Fue bonito sacar la armadura, fue bonito entender la muerte simbólica, fue bonito darme cuenta que en mi mente estoy y todo lo que ha pasado, es un despertar de todo lo que he hecho, cómo ha sido mi vida, a qué punto estoy llegando. Y dices, es como una resurrección.",
  },
  {
    speaker: "Mauricio",
    text: "Hoy día puedo decir con certeza absoluta: las energías existen. Mi cuerpo, mi mente realmente vayan en armonía con este discurso, que yo lo sienta. Está bonito, es lógica, es real, la naturaleza no me está mintiendo. Encontré la realidad versus la ilusión.",
  },
  {
    speaker: "Mauricio",
    text: "Efectivamente, eliminamos la espasticidad, eliminamos la rigidez, casi un 90% diría yo. Mejoró mi estado de ánimo y logré que mi sistema nervioso central hoy día esté mucho más alineado que cuando yo podía correr. Antes podía correr, hoy día puedo volar. Si me piden eso, no, entre volar y correr prefiero volar.",
  },
];

const speakers = {
  Mauricio: {
    name: "Mauricio Ochoa",
    role: "Instructor de Tai Chi / Testimonio",
    color: "brand",
  },
  Daniel: {
    name: "Daniel Berniel",
    role: "Instructor de Tai Chi / Terapeuta",
    color: "emerald",
  },
  "Luis": {
    name: "Maestro Luis",
    role: "Entrevistador",
    color: "amber",
  },
};

export default function TestimonioPage() {
  return (
    <>
      {/* Hero */}
      <section className="section bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white">
        <div className="container mx-auto px-4 py-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-brand-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-600/20 border border-brand-600/30 text-brand-300 text-sm font-medium mb-6">
              <Play className="w-4 h-4" />
              <span>Testimonio en video</span>
            </div>

            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
              &ldquo;Le dijeron que podía quedar parapléjico&rdquo;
            </h1>

            <p className="text-lg text-neutral-300 leading-relaxed mb-8">
              Testimonio completo de Mauricio Ochoa y Daniel Berniel en el programa
              &ldquo;Teicharlas con Luis&rdquo;. Una historia de crisis, transformación y renacimiento
              a través del Tai Chi.
            </p>

            <div className="flex items-center gap-6 text-sm text-neutral-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>~30 minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Mauricio Ochoa & Daniel Berniel</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Embed Placeholder */}
      <section className="section bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-neutral-100 dark:bg-neutral-900 rounded-2xl flex items-center justify-center mb-8 border border-neutral-200 dark:border-neutral-800">
              <div className="text-center">
                <Play className="w-16 h-16 text-neutral-400 mx-auto mb-4" />
                <p className="text-neutral-500 dark:text-neutral-400">
                  Video del testimonio — Próximamente
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {Object.entries(speakers).map(([key, speaker]) => (
                <div key={key} className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm ${
                  speaker.color === "brand" ? "bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300" :
                  speaker.color === "emerald" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300" :
                  "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300"
                }`}>
                  <span className="font-medium">{speaker.name}</span>
                  <span className="opacity-60">— {speaker.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transcript */}
      <section className="section bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-neutral-900 dark:text-neutral-50 text-2xl mb-8">
              Transcripción completa
            </h2>

            <div className="space-y-6">
              {transcript.map((entry, i) => {
                const speaker = speakers[entry.speaker as keyof typeof speakers];
                return (
                  <div key={i} className={`flex gap-4 ${
                    entry.speaker === "Mauricio" ? "" : "ml-8"
                  }`}>
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                      speaker?.color === "brand" ? "bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300" :
                      speaker?.color === "emerald" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300" :
                      "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300"
                    }`}>
                      {entry.speaker === "Mauricio" ? "MO" :
                       entry.speaker === "Daniel" ? "DB" : "ML"}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-sm font-medium ${
                          speaker?.color === "brand" ? "text-brand-600 dark:text-brand-400" :
                          speaker?.color === "emerald" ? "text-emerald-600 dark:text-emerald-400" :
                          "text-amber-600 dark:text-amber-400"
                        }`}>
                          {speaker?.name}
                        </span>
                        <span className="text-xs text-neutral-400">— {speaker?.role}</span>
                      </div>
                      <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                        {entry.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Key quotes */}
            <div className="mt-16 space-y-6">
              <h3 className="font-heading font-semibold text-neutral-900 dark:text-neutral-100 text-xl">
                Frases destacadas
              </h3>

              {[
                "Me saco mis armaduras... y me entrego completamente a este camino sin saber que me encontraría.",
                "El dolor emocional es muy fuerte, y tenía que vencer, saber elegir bien mis batallas.",
                "Existen más cosas que el dolor en mi mente.",
                "La serenidad entrega poderes ilimitados que pueden transformar cualquier estado emocional.",
                "Antes podía correr, hoy día puedo volar.",
              ].map((quote, i) => (
                <blockquote key={i} className="p-4 bg-white dark:bg-neutral-800 border-l-4 border-brand-600 rounded-r-xl">
                  <p className="text-neutral-700 dark:text-neutral-300 italic">
                    &ldquo;{quote}&rdquo;
                  </p>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-neutral-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl mb-6">
            ¿Quieres vivir tu propia transformación?
          </h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto mb-8">
            La historia de Mauricio es testimonio de lo que es posible.
            El primer paso es una conversación.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contacto">
                Agenda tu sesión
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/camino">
                Conoce la historia completa
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}