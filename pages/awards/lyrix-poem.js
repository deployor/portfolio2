import {useState} from 'react';
import {motion} from 'framer-motion';
import {FaArrowLeft, FaAward, FaLanguage, FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';
import Link from 'next/link';
import Head from 'next/head';

export default function LyrixPoem() {
    const [language, setLanguage] = useState('de');

    const content = {
        de: {
            title: "Lyrix Januar 2024",
            poemTitle: "Gefangen in Zeilen und Erwartungen",
            poem: `Man sagt, er sei fleißig, intelligent und immer bereit zu lernen,
nach Noten zu streben, die doch so oft trügen.
Doch wer bin ich wirklich, fernab des Zwangs?
Ein Echo, ein Ruf, ein Sehnen, das leise in der Dunkelheit spricht.

Lehrer, Eltern, die Welt, sie rufen laut:
Erfüll die Erwartungen, sei das Bild unserer Träume.
Doch in mir wächst ein Nein, ein Sturm, ein verzweifelter Schrei,
ich möchte nicht nur ein Schatten in einem Leben sein, das nicht meines wird

Ich träume von einem Ort, wo Lernen Flügel verleiht,
wo Schule nicht Prüfung, sondern ein Tanz der Ideen ist.
Wo ich sein darf, wer ich bin, ohne Maske, ohne Furcht, ohne Zwang, ohne die Furcht zu scheitern,
wo Identität nicht Rolle, sondern mein wahres Selbst ist.

So rufe ich Nein, zu Rollen, die mich erdrücken,
zu Klischees, die binden, zu Erwartungen, die mich zersplittern.
Ich will lernen, ich will fliegen, auf den Strängen meiner Träume,
die Welt erblicken mit meinen Augen, mit einem Herzen, das nicht resigniert.

Aber die Mauern sind hoch, die Tore fest verschlossen,
meine Flügel sind lädiert, meine Träume beinahe entschwunden.
In den Hallen der Verzweiflung hallt mein stummer Ruf,
ein Nein, das verhallt, in der Leere dieser endlosen Nacht.

So rufe ich Nein, ein Nein, das ungehört verweht,
ein Nein, das verfliegt, wie Laub im Herbstwind.
Ich bin mehr als eine Zahl, mehr als ein Name auf Papier,
ich bin ein Mensch, dessen Leben nach Freiheit schreit.

Leid will ich nicht mehr spüren,
will aufhören, mich ständig zu rühren.
Mein Herz ist erschöpft, mein Geist ist leer,
ich sehne mich nach Frieden, und nichts mehr.

Doch tief in mir, da glimmt ein Funke Licht,
es flüstert sanft: „Gib dich nicht auf!“
Mit jedem Atemzug, den ich nehme, spüre ich die Kraft,
die mich hält, und mich leitet, in die Ferne.

Und so lasse ich los, entlasse die Sorgen im Wind,
finde den Anker, der mich hält, so wie ich bin.
Ich bin mehr als ein Echo, mehr als ein Ruf in der Nacht,
ich bin der, der leise hofft, dass er bald erwacht.`
        },
        en: {
            title: "Lyrix January 2024",
            poemTitle: "Trapped in Lines and Expectations",
            poem: `They say he is diligent, intelligent, always eager to learn,
to strive for grades that so often deceive.
But who am I truly, far from compulsion’s grip?
An echo, a call, a yearning, softly speaking in the dark.

Teachers, parents, the world—they call out loudly:
Fulfill expectations, be the image of our dreams.
But within me grows a "no," a storm, a desperate cry,
I don’t want to be just a shadow in a life that will never be mine.

I dream of a place where learning gives wings,
where school is not exams, but a dance of ideas.
Where I may be who I am, without masks, without fear, without constraint, without the dread of failure,
where identity is not a role but my true self.

So I cry "no" to roles that crush me,
to clichés that bind, to expectations that shatter me.
I want to learn, I want to fly, on the strings of my dreams,
to see the world through my eyes, with a heart that does not surrender.

But the walls are high, the gates firmly locked,
my wings are tattered, my dreams almost vanished.
In the halls of despair, my silent cry echoes,
a "no" that fades away in the void of this endless night.

So I cry "no," a "no" that vanishes unheard,
a "no" that drifts away, like leaves in the autumn wind.
I am more than a number, more than a name on paper,
I am a human being, whose life cries out for freedom.

I no longer want to feel pain,
I want to stop the endless motion.
My heart is exhausted, my spirit drained,
I yearn for peace, and nothing more.

But deep within me, a spark of light still glows,
it whispers gently: "Don’t give up!"
With every breath I take, I feel the strength
that holds me and guides me toward the horizon.

And so I let go, releasing my worries to the wind,
I find the anchor that holds me, just as I am.
I am more than an echo, more than a cry in the night,
I am the one who quietly hopes to awaken soon.`
        }
    };

    return (
        <>
            <Head>
                <title>Lyrix Winning Poem | Deployor</title>
            </Head>
            <div className="min-h-screen bg-gray-900 text-white">
                <div className="container mx-auto px-4 py-12">
                    <div className="max-w-4xl mx-auto">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-8">
                            <Link href="/" className="text-purple-400 hover:text-purple-300 flex items-center gap-2">
                                <FaArrowLeft/> Back to Portfolio
                            </Link>
                            <button
                                onClick={() => setLanguage(language === 'de' ? 'en' : 'de')}
                                className="flex items-center gap-2 bg-purple-800 px-4 py-2 rounded-lg hover:bg-purple-700"
                            >
                                <FaLanguage size={20}/>
                                {language === 'de' ? 'English' : 'Deutsch'}
                            </button>
                        </div>

                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            className="text-center mb-12"
                        >
                            <div className="flex justify-center mb-4">
                                <FaAward className="text-purple-400 text-5xl"/>
                            </div>
                            <h1 className="text-4xl font-bold mb-4">{content[language].title}</h1>
                            <p className="text-purple-400 text-lg mb-4">By Tom Daamen</p>
                            <div className="bg-purple-800 h-1 w-24 mx-auto rounded-full"/>
                        </motion.div>

                        {/* Poem Title Section - New */}
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.1}}
                            className="text-center mb-8"
                        >
                            <h2 className="text-3xl font-semibold text-purple-400 italic">
                                "{content[language].poemTitle}"
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.2}}
                            className="relative"
                        >
                            <FaQuoteLeft className="text-purple-800 opacity-20 text-6xl absolute -left-8 -top-8"/>
                            <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
                                <p className="whitespace-pre-line text-lg leading-relaxed">
                                    {content[language].poem}
                                </p>
                            </div>
                            <FaQuoteRight className="text-purple-800 opacity-20 text-6xl absolute -right-8 -bottom-8"/>
                        </motion.div>

                        {/* Footer */}
                        <div className="mt-12 text-center">
                            <a
                                href="https://bundeswettbewerb-lyrix.de/wettbewerb_10-14/?jahr=2024&monat=01&alter=10-14&categorie=gewinner_10-14&detail=35000"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300"
                            >
                                Visit Lyrix Competition
                                <motion.span
                                    animate={{x: [0, 5, 0]}}
                                    transition={{repeat: Infinity, duration: 1.5}}
                                >
                                    →
                                </motion.span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
