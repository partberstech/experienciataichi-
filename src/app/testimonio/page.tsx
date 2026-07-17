import { Metadata } from "next";
import { ArrowLeft, Play, Calendar, Clock, User, Quote } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Testimonio",
  description: "Testimonio completo de Mauricio Ochoa: cómo el Tai Chi le devolvió la vida después de un diagnóstico de enfermedad catastrófica.",
};

const speakers = {
  Mauricio: { name: "Mauricio Ochoa", role: "Instructor de Tai Chi / Testimonio", color: "brand", initials: "MO" },
  Daniel: { name: "Daniel Berniel", role: "Instructor de Tai Chi / Terapeuta", color: "emerald", initials: "DB" },
  Luis: { name: "Maestro Luis", role: "Entrevistador", color: "amber", initials: "ML" },
};

const transcript = [
  { speaker: "Luis", text: "Bienvenidos a Teicharlas con Luis. El día de hoy quiero compartirles testimonios de personas que reciben beneficios en su salud por la práctica del Tai Chi y Qigong. Tengo como invitado a Mauricio Ochoa, quien nos va a compartir su testimonio, y también a Daniel Berniel, quien ha sido parte de esta historia." },
  { speaker: "Mauricio", text: "Quisiera comentar la experiencia que me tocó vivir y junto con Daniel, mi guía. El año 2022 tuve una operación donde me extrajeron tres vértebras cervicales y quedaron dos hernias. Antes de eso ejercía mis labores profesionales sin problema, fui deportista muchos años en mi juventud, practiqué la disciplina del remo, incluso llegué a ser seleccionado de mi país. Tenía muchas actividades deportivas, muchos proyectos, mucha ilusión de control, mucho estrés y mucha confusión emocional." },
  { speaker: "Mauricio", text: "El año 2022 de un día desperté y se me durmió este dedo, así de simple. Sentí algunos síntomas extraños como pérdida de sensibilidad, poca fortaleza en las extremidades. Pero en abril, cerca de abril, se aceleraron los síntomas de manera agresiva. Es como que las vértebras se hubiesen aplastado desde los pies de la cabeza y quedé en una posición de casi 90 grados en dos semanas." },
  { speaker: "Mauricio", text: "Las manos se me pusieron muy rígidas, no podía estirar los dedos y no tuve más fuerza desde la mitad de mi cuerpo. Me llegué a una operación de urgencia. Los médicos me explicaron que era una operación para salvar la vida. Ya estaban las vértebras C3, C4, C5 y C6 muy comprometidas con una espasticidad gigante — convulsiones de los músculos involuntarias — y con un dolor atroz." },
  { speaker: "Mauricio", text: "Los médicos me explicaron que no sabían muy bien por qué ocurrió eso, pero sí era una necesidad urgente de extraerme las vértebras, poder descomprimir la médula, lo que más se pudiera. Y me explicaron que había muchas posibilidades de quedar parapléjico por la complejidad de la operación." },
  { speaker: "Mauricio", text: "En ese minuto recuerdo haber estado pasando situaciones emocionales muy difíciles. Fue un sentimiento extraño, como que viene el sentimiento de supervivencia. Y cuando me dieron esa noticia ocurrió un momento de negación. Creo que el deporte me hizo muy bien en mi momento de juventud, y la negación era: 'No, no me voy a morir, imposible.' De un día para otro quedé inválido con la mitad del cuerpo." },
  { speaker: "Mauricio", text: "Desperté de la operación y agradecí. No sabía a quién agradecer, tenía mucha escepticidad con todas las religiones. Quedé erguido de pie, entonces dije: 'Oh, me sané.' Y los médicos me explican que duró cerca de ocho horas la operación y me salvaron la vida, pero no se podía hacer nada más respecto a lo que ya había ocurrido. Las células y las neuronas murieron, no se podían recuperar." },
  { speaker: "Mauricio", text: "Los síntomas fueron muy agresivos. Yo tenía espasticidad — hidrotonios involuntarios muy fuertes. Me quedaba el corazón cerca de unas 180 pulsaciones, con la cabeza muy roja, la presión se me iba. Duraba 40 segundos, después me desvanecía, quedaba con una sensación de hormigueo. Y eso duraba un minuto. Los días, los minutos, y no paraba. Un día, y una semana, y un mes. En esas condiciones no había vida." },
  { speaker: "Mauricio", text: "Quería un día, pero estaba contento que estaba. Muchos días no me podía levantar. Entendí que el dolor es invalidante cuando uno no se puede levantar. Pero seguía agradecido que estaba vivo, y venían preguntas. Dije: '¿Me voy a recuperar?' Tenía certeza que me iba a recuperar. Los síntomas me causaron problemas emocionales muy fuertes y tenía que saber elegir bien mis batallas." },
  { speaker: "Mauricio", text: "En ese minuto era aprender a caminar, volver a pararme, volver a salir de la cama. El problema del frío, el problema de la alimentación, el problema de externos generaban que mi sistema nervioso se complicara. Se podía caer una aguja y yo me podía morir. El sistema nervioso estaba sumamente alterado." },
  { speaker: "Mauricio", text: "Comencé a entender que el estar presente me ayudaba mucho, porque si no me caía, me paré y sentía la gracia de sentir mi planta en los pies. Y dije: 'Cuánto tiempo estuve sin sentir la planta de mis pies.' El presente me ayudó." },
  { speaker: "Mauricio", text: "Un amigo me dice: 'Deberías practicar Tai Chi.' ¿Y qué es el Tai Chi? Son movimientos lentos, no sé bien de qué se trata, solamente a lo mejor te puede servir. No tenía idea de lo que era el Tai Chi, las artes marciales, el simbolismo y toda la escepticidad con cosas que no son medibles." },
  { speaker: "Mauricio", text: "Un día me aparece un mensaje de una amiga que vio un afiche rebuscado, y llamé a la persona y me dio una cita. Esta persona me recibió con dos muletas, con una cinta para poder estirar mis dedos, una órtesis tobillo-pie, parecía como que anduviera con armaduras, lleno de accesorios." },
  { speaker: "Daniel", text: "Y Daniel me dice: 'Mauricio, no te sirven las armaduras, tienes que sacarte todas las armaduras.'" },
  { speaker: "Daniel", text: "Déjame contar cómo te vi llegar. Mauricio, dos bastones avanzando con gran dificultad, con esta parte de la pierna rígida con la pieza para poder apoyar y caminar. Y yo veo y digo: 'Bueno, si tiene la pieza rígida, si está con los bastones, nunca el cuerpo va a recibir el esfuerzo que le va a hacer desarrollar la fuerza, la estabilidad de poder pararse.' Sácate todo, deja los bastones fuera." },
  { speaker: "Mauricio", text: "Cuando me saco mis armaduras y voy a hablar desde el punto de vista emocional, porque creo que el Tai Chi me enseñó que el trabajo interno, desde el corazón, me generó un concepto de vida distinto, y este concepto de vida es el que hoy día me tiene totalmente independiente. Sacarme estas armaduras me trajo eliminar una zona de confort. Como dice el Quijote de la Mancha: 'Más vale el salto que mata, que el ruego de hombres buenos.'" },
  { speaker: "Mauricio", text: "Lo más sencillo, lo más fácil, lo más simple, lo más suave, flexible — no lo entiendo. No tengo algo como para darle una lógica. Hoy día yo puedo contar esto como medalla de oro, y muchas personas me dicen: '¡Qué fácil!' Pero yo hoy día me tengo que preocupar de tal y tal cosa." },
  { speaker: "Mauricio", text: "Yo decía: 'Además de preocuparme de eso, lo único que quería era un día. Quería un día para poderme levantar, para tener las preocupaciones.' Todos los incomodidades, todos los problemas que yo tenía, hoy día los veo como los puedo aprovechar y cuánto tiempo desaproveché de mi vida. Nunca más me voy a desaprovechar nada." },
  { speaker: "Mauricio", text: "Fue bonito sacar la armadura. Fue bonito entender la muerte simbólica. Fue bonito darme cuenta que en mi mente estoy y todo lo que ha pasado es un despertar de todo lo que he hecho, cómo ha sido mi vida, a qué punto estoy llegando. Es como una resurrección." },
  { speaker: "Mauricio", text: "Cuando me di cuenta que podía conseguir más cosas en mi mente que los problemas, que el dolor, que las penas, dije: 'Hay más cosas.' Y cómo fue eso: a través de la meditación y el movimiento. En los minutos que yo hacía ejercicio, lograba estar concentrado y le daba un espacio a mi mente de nada, de nada. Y no tenía eso cuando hacía deporte. Qué rico volver a encontrar la nada." },
  { speaker: "Mauricio", text: "Asocié un ejemplo que lo conversamos muy lindo: existe un emperador — corazón, un general — mente, y un cuerpo — soldado. Mi mente general nunca le dejó espacio a la sabiduría, no le dio espacio al corazón, ni tampoco le dio espacio a esta nada, porque no había. Estaba mucho cerebro, mucho general, no había dónde enfocarse." },
  { speaker: "Mauricio", text: "Con este espacio vacío, ¿qué conseguí? Placeres, gozos, éxtasis, emociones elevadas, sentimientos elevados. Y fue tanto lo que disfrutaba con este espacio vacío que el dolor físico seguía existiendo, el problema químico sigue estando. Sin darme cuenta, mis horarios de medicamentos para el dolor se me fueron corriendo de manera involuntaria." },
  { speaker: "Mauricio", text: "Me di cuenta que todas estas gozos, conversaciones, me llevaban a mi mente y me sacaban este dolor. Una persona que tiene depresión, este discurso le entra por aquí y le va a salir por acá. Pero logra esta persona decir: 'Respira conmigo, mueve tu cuello y siente esto.' Dos minutos. Ya no tuvo esta mente y hubo dos minutos que consiguió más cosas." },
  { speaker: "Daniel", text: "Hay una cosa importante que pasó y tiene que ver con la rigidez mental. Cuando uno tiene todas sus certezas puestas y no hay espacio para que entre nada nuevo. Y ahí es poner en valor la crisis, porque Mauricio venía con su vida, estaba muy rígido, en un paradigma de exigencia, de competencia, venía de ser deportista de alto rendimiento. Tuvo que tener una muerte simbólica para que se le rompan sus certezas y pueda abrirse a una nueva forma de vivir." },
  { speaker: "Daniel", text: "En esa nueva forma de vivir, entrenando a través de lo corporal, de pararse bien, el cuerpo puede tener una seguridad interna que permite que lo emocional empiece a procesarse por sí solo. Esa es la magia que tiene el vacío que aparece en los textos del Tao. Cuando logramos conectar con este espacio donde se suspende el diálogo mental, hay toda una serie de procesos subconscientes y corporales que generan regulación." },
  { speaker: "Mauricio", text: "Mi cuerpo tenía la información muy mala que le traía el general. Mi cuerpo explotó. La naturaleza me dijo: 'Mauricio, tú te vas a morir con ese concepto de vida que llevas, así que te voy a empujar.' Trajo unos ramillazos. Pero al empujar la naturaleza me di cuenta que había una barrera muy grande con una ilusión de control muy fuerte. Dejé a mi cerebro un poquito al lado y que mi emperador decidiera." },
  { speaker: "Mauricio", text: "Él no me enseñó, no me transmitió palabras, solamente me dio los ejercicios. Y yo le explicaba a Daniel: 'Mira, con este ejercicio encontré la relación de la transformación.' Ahora no me puedo negar a la transformación. Si el universo es tan grande, no puede ser que me entregue solamente esta posibilidad de vida. Todo se transforma y yo negarme a la transformación es negarme a la existencia propiamente tal." },
  { speaker: "Mauricio", text: "Otro ejercicio muy bonito fue el árbol. Daniel, mira, este ejercicio me está trayendo esta relación en el contexto externo. Estoy tomando mejores decisiones, pero muy suave y muy flexible. Me costó entenderlo y también me costó mucho entender la flexibilidad. Cada vez que siento más sensibilidad y creo tener mejor conocimiento de mi cuerpo, tengo mayor sensibilidad y me doy cuenta de cositas que me faltan y digo: 'Vuelve para atrás.'" },
  { speaker: "Mauricio", text: "Mi mente, mi esencia, no está preparada para ser tan flexible. Mis decisiones aún no lo pueden ser. Me voy a hacer daño si hago decisiones muy flexibles, porque pasé mucho tiempo en este cascarón. El sentir, el volver a creer, el sentir que todo es transformación, el abrirse — eso fue con el tiempo." },
  { speaker: "Mauricio", text: "Hoy día tengo la certeza absoluta de las energías, y además le sumo un ingrediente más grande: la esperanza. Yo no la conocía. La esperanza mía es que mi cuerpo, mi mente realmente vayan en armonía con este discurso, que yo lo sienta. Está bonito, es lógica, es real, la naturaleza no me está mintiendo. Encontré la realidad versus la ilusión." },
  { speaker: "Mauricio", text: "Efectivamente, eliminamos la espasticidad, eliminamos la rigidez, casi un 90% diría yo. Mejoró mi estado de ánimo y logré que mi sistema nervioso central hoy día esté mucho más alineado que cuando yo podía correr. Antes podía correr, hoy día puedo volar. Si me piden eso, no, entre volar y correr prefiero volar." },
  { speaker: "Daniel", text: "Fui haciendo un diagnóstico de cómo está su capacidad de pararse, de balanceo, hice todo un mapeo. Proyectaba un plan a largo plazo, pero estaba todo el rato revisándolo con lo que tenía hoy día. Cuando logramos conectar con este espacio donde se suspende el diálogo mental, hay una serie de procesos subconscientes y corporales que generan regulación." },
  { speaker: "Daniel", text: "El trabajo es todo el rato: le doy un poquito y estamos con esto. Calma. Quédate en el presente, no te vayas a lo que viene después. Esa ha sido una estructura, una perspectiva a mantener todo el rato. No voy a apurarte. Ponemos atención y hacemos el trabajo sobre la ansiedad propia para no querer apurar el proceso del otro y darle espacio." },
  { speaker: "Mauricio", text: "La forma de ver la vida no es la única que hemos aprendido. Hay que dar la posibilidad de reconocer otras formas de ver la vida y darse la oportunidad de experimentar. El universo nos entrega muchas más cosas. Yo descubrí muchas más cosas y se puede descubrir." },
  { speaker: "Mauricio", text: "Lo que para usted ha sido formar muchos guías y maestros, lo que usted hizo con Daniel y conmigo me cambiaron la vida. No es un día más en la oficina lo que ustedes están haciendo. Es un valor tan grande que hoy día estoy de verdad muy agradecido." },
  { speaker: "Mauricio", text: "Si las personas tienen angustia, depresión, el cuerpo probablemente es un traje prestado, probablemente yo me pueda caer y quede inválido, porque ya el resultado no me importa. El proceso ha sido tan hermoso, el presente es tan lindo que cualquier futuro no es lo más importante. Lo más importante para mí hoy día ha sido el proceso, y con eso me quedo." },
];

export default function TestimonioPage() {
  return (
    <>
      {/* Hero */}
      <section className="section bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white">
        <div className="container mx-auto px-4 py-20">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-brand-400 transition-colors mb-8">
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
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>2024</span></div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>54:28</span></div>
              <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Mauricio Ochoa & Daniel Berniel</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="section bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl mb-8">
              <iframe
                src="https://www.youtube.com/embed/zBndyeonf_s"
                title="Testimonio Mauricio Ochoa - Le dijeron que podía quedar parapléjico"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {Object.entries(speakers).map(([, s]) => (
                <div key={s.name} className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm ${
                  s.color === "brand" ? "bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300" :
                  s.color === "emerald" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300" :
                  "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300"
                }`}>
                  <span className="font-medium">{s.name}</span>
                  <span className="opacity-60">— {s.role}</span>
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
                const s = speakers[entry.speaker as keyof typeof speakers];
                return (
                  <div key={i} className={`flex gap-4 ${entry.speaker === "Mauricio" ? "" : "ml-8"}`}>
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                      s.color === "brand" ? "bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300" :
                      s.color === "emerald" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300" :
                      "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300"
                    }`}>
                      {s.initials}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-sm font-medium ${
                          s.color === "brand" ? "text-brand-600 dark:text-brand-400" :
                          s.color === "emerald" ? "text-emerald-600 dark:text-emerald-400" :
                          "text-amber-600 dark:text-amber-400"
                        }`}>{s.name}</span>
                        <span className="text-xs text-neutral-400">— {s.role}</span>
                      </div>
                      <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">{entry.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Key quotes */}
            <div className="mt-16 space-y-6">
              <h3 className="font-heading font-semibold text-neutral-900 dark:text-neutral-100 text-xl">Frases destacadas</h3>
              {[
                { text: "Me saco mis armaduras... y me entrego completamente a este camino sin saber que me encontraría.", author: "Mauricio" },
                { text: "El dolor emocional es muy fuerte, y tenía que vencer, saber elegir bien mis batallas.", author: "Mauricio" },
                { text: "Existen más cosas que el dolor en mi mente.", author: "Mauricio" },
                { text: "La serenidad entrega poderes ilimitados que pueden transformar cualquier estado emocional.", author: "Mauricio" },
                { text: "Antes podía correr, hoy día puedo volar. Entre volar y correr, prefiero volar.", author: "Mauricio" },
                { text: "El resultado no me importa. El proceso ha sido tan hermoso, el presente es tan lindo.", author: "Mauricio" },
                { text: "No es un día más en la oficina lo que ustedes están haciendo. Me cambiaron la vida.", author: "Mauricio" },
              ].map((q, i) => (
                <blockquote key={i} className="p-4 bg-white dark:bg-neutral-800 border-l-4 border-brand-600 rounded-r-xl">
                  <p className="text-neutral-700 dark:text-neutral-300 italic">&ldquo;{q.text}&rdquo;</p>
                  <footer className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">— {q.author}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-neutral-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl mb-6">¿Quieres vivir tu propia transformación?</h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto mb-8">
            La historia de Mauricio es testimonio de lo que es posible. El primer paso es una conversación.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild><Link href="/contacto">Agenda tu sesión</Link></Button>
            <Button variant="outline" size="lg" asChild><Link href="/camino">Conoce la historia completa</Link></Button>
          </div>
        </div>
      </section>
    </>
  );
}