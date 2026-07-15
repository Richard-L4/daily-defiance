export type Interest =
  | "Science & Tech"
  | "Sports"
  | "Arts & Literature"
  | "Business & Entrepreneurship"
  | "Politics & Leadership";

export type AgeRange = "Under 18" | "18-25" | "26-40" | "41+";

export type Lang = "en" | "es";

export interface Story {
  id: string;
  person: string;
  skeptic: string;
  lowExpectation: string;
  achievement: string;
  quote: string;
  interests: Interest[];
  ageAppeal: AgeRange[];
  theme: "dawn" | "ember" | "forest" | "ocean" | "violet";
}

export const STORIES_EN: Story[] = [
  {
    id: "einstein",
    person: "Albert Einstein",
    skeptic: "a headmaster",
    lowExpectation: "amount to anything",
    achievement: "reshape our understanding of space, time, and reality itself",
    quote: "It's not that I'm so smart, it's just that I stay with problems longer.",
    interests: ["Science & Tech"],
    ageAppeal: ["Under 18", "18-25", "26-40", "41+"],
    theme: "ocean",
  },
  {
    id: "disney",
    person: "Walt Disney",
    skeptic: "a newspaper editor",
    lowExpectation: "have any good ideas or imagination",
    achievement: "build the most beloved storytelling empire in history",
    quote: "All our dreams can come true, if we have the courage to pursue them.",
    interests: ["Arts & Literature", "Business & Entrepreneurship"],
    ageAppeal: ["Under 18", "18-25", "26-40", "41+"],
    theme: "dawn",
  },
  {
    id: "jordan",
    person: "Michael Jordan",
    skeptic: "his high-school varsity coach",
    lowExpectation: "be good enough to make the team",
    achievement: "win six NBA championships and redefine the sport",
    quote: "I've failed over and over and over again in my life. And that is why I succeed.",
    interests: ["Sports"],
    ageAppeal: ["Under 18", "18-25"],
    theme: "ember",
  },
  {
    id: "rowling",
    person: "J.K. Rowling",
    skeptic: "twelve publishers who rejected her manuscript",
    lowExpectation: "make a living writing children's books",
    achievement: "create a series that would sell over 500 million copies worldwide",
    quote: "It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all.",
    interests: ["Arts & Literature"],
    ageAppeal: ["Under 18", "18-25", "26-40", "41+"],
    theme: "violet",
  },
  {
    id: "jobs",
    person: "Steve Jobs",
    skeptic: "the board that fired him from the company he founded",
    lowExpectation: "come back or matter in tech again",
    achievement: "return to Apple and lead the most valuable company on earth",
    quote: "Your time is limited, so don't waste it living someone else's life.",
    interests: ["Business & Entrepreneurship", "Science & Tech"],
    ageAppeal: ["18-25", "26-40", "41+"],
    theme: "dawn",
  },
  {
    id: "oprah",
    person: "Oprah Winfrey",
    skeptic: "a TV producer",
    lowExpectation: "be fit for television",
    achievement: "become the most influential broadcaster of her generation",
    quote: "Turn your wounds into wisdom.",
    interests: ["Business & Entrepreneurship", "Arts & Literature"],
    ageAppeal: ["18-25", "26-40", "41+"],
    theme: "ember",
  },
  {
    id: "edison",
    person: "Thomas Edison",
    skeptic: "his teachers",
    lowExpectation: "learn anything — they called him 'addled'",
    achievement: "hold over 1,000 patents and light up the modern world",
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    interests: ["Science & Tech", "Business & Entrepreneurship"],
    ageAppeal: ["Under 18", "18-25", "26-40", "41+"],
    theme: "dawn",
  },
  {
    id: "lincoln",
    person: "Abraham Lincoln",
    skeptic: "voters who rejected him in eight elections",
    lowExpectation: "hold meaningful public office",
    achievement: "become President and end slavery in America",
    quote: "I am a slow walker, but I never walk back.",
    interests: ["Politics & Leadership"],
    ageAppeal: ["26-40", "41+"],
    theme: "forest",
  },
  {
    id: "spielberg",
    person: "Steven Spielberg",
    skeptic: "the USC film school that rejected him three times",
    lowExpectation: "be admitted, let alone succeed in film",
    achievement: "direct some of the highest-grossing and most iconic films ever made",
    quote: "I dream for a living.",
    interests: ["Arts & Literature"],
    ageAppeal: ["Under 18", "18-25", "26-40"],
    theme: "violet",
  },
  {
    id: "beethoven",
    person: "Ludwig van Beethoven",
    skeptic: "his music teacher",
    lowExpectation: "compose anything of value",
    achievement: "write symphonies that still move the world — while going deaf",
    quote: "Don't only practice your art, but force your way into its secrets.",
    interests: ["Arts & Literature"],
    ageAppeal: ["26-40", "41+"],
    theme: "violet",
  },
  {
    id: "brady",
    person: "Tom Brady",
    skeptic: "scouts who let 198 players get picked before him in the NFL draft",
    lowExpectation: "be more than a backup quarterback",
    achievement: "win seven Super Bowls and change the definition of longevity",
    quote: "You have to believe in your process. You have to believe in the things you're doing.",
    interests: ["Sports"],
    ageAppeal: ["18-25", "26-40", "41+"],
    theme: "ember",
  },
  {
    id: "curie",
    person: "Marie Curie",
    skeptic: "the academic establishment that barred women from universities",
    lowExpectation: "do serious scientific work",
    achievement: "win two Nobel Prizes in two different sciences — a feat still unmatched",
    quote: "Nothing in life is to be feared, it is only to be understood.",
    interests: ["Science & Tech"],
    ageAppeal: ["Under 18", "18-25", "26-40", "41+"],
    theme: "ocean",
  },
  {
    id: "sanders",
    person: "Colonel Harland Sanders",
    skeptic: "the 1,009 restaurants that rejected his chicken recipe",
    lowExpectation: "build a business from a fried chicken recipe at age 65",
    achievement: "franchise KFC into a global brand",
    quote: "I made a resolve then that I was going to amount to something if I could.",
    interests: ["Business & Entrepreneurship"],
    ageAppeal: ["41+"],
    theme: "ember",
  },
  {
    id: "ali",
    person: "Muhammad Ali",
    skeptic: "sportswriters who wrote him off after his title was stripped",
    lowExpectation: "box at the top level again",
    achievement: "reclaim the heavyweight title and become an icon far beyond sport",
    quote: "Don't count the days, make the days count.",
    interests: ["Sports", "Politics & Leadership"],
    ageAppeal: ["18-25", "26-40", "41+"],
    theme: "ember",
  },
  {
    id: "angelou",
    person: "Maya Angelou",
    skeptic: "a childhood so traumatic she stopped speaking for five years",
    lowExpectation: "find her voice",
    achievement: "become one of the most celebrated poets and memoirists of the century",
    quote: "You may encounter many defeats, but you must not be defeated.",
    interests: ["Arts & Literature", "Politics & Leadership"],
    ageAppeal: ["Under 18", "18-25", "26-40", "41+"],
    theme: "violet",
  },
  {
    id: "musk",
    person: "Elon Musk",
    skeptic: "aerospace veterans who said a private rocket company would bankrupt him",
    lowExpectation: "land a reusable rocket, let alone build a viable space company",
    achievement: "make orbital-class rockets land themselves and reshape the space industry",
    quote: "When something is important enough, you do it even if the odds are not in your favor.",
    interests: ["Science & Tech", "Business & Entrepreneurship"],
    ageAppeal: ["Under 18", "18-25", "26-40"],
    theme: "ocean",
  },
  {
    id: "churchill",
    person: "Winston Churchill",
    skeptic: "teachers who ranked him at the bottom of his class",
    lowExpectation: "master academics or lead anything of consequence",
    achievement: "lead Britain through its darkest hour and win the Nobel Prize in Literature",
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    interests: ["Politics & Leadership"],
    ageAppeal: ["26-40", "41+"],
    theme: "forest",
  },
  {
    id: "vangogh",
    person: "Vincent van Gogh",
    skeptic: "a public that bought only one of his paintings in his lifetime",
    lowExpectation: "be recognized as an artist",
    achievement: "become one of the most influential painters in Western history",
    quote: "I would rather die of passion than of boredom.",
    interests: ["Arts & Literature"],
    ageAppeal: ["18-25", "26-40", "41+"],
    theme: "dawn",
  },
  {
    id: "hawking",
    person: "Stephen Hawking",
    skeptic: "doctors who gave him two years to live at age 21",
    lowExpectation: "finish his PhD or live a productive life",
    achievement: "revolutionize cosmology and live another 55 years doing it",
    quote: "Look up at the stars and not down at your feet. Try to make sense of what you see.",
    interests: ["Science & Tech"],
    ageAppeal: ["Under 18", "18-25", "26-40", "41+"],
    theme: "ocean",
  },
  {
    id: "kobe",
    person: "Kobe Bryant",
    skeptic: "critics who said a kid straight out of high school couldn't compete in the NBA",
    lowExpectation: "handle the professional level",
    achievement: "win five championships and define an era of basketball with obsessive craft",
    quote: "Great things come from hard work and perseverance. No excuses.",
    interests: ["Sports"],
    ageAppeal: ["Under 18", "18-25"],
    theme: "ember",
  },
];

export const ALL_INTERESTS: Interest[] = [
  "Science & Tech",
  "Sports",
  "Arts & Literature",
  "Business & Entrepreneurship",
  "Politics & Leadership",
];

export const ALL_AGE_RANGES: AgeRange[] = ["Under 18", "18-25", "26-40", "41+"];

export function formatStory(s: Story): string {
  return `${s.person}, who was told by ${s.skeptic} that "you'll never ${s.lowExpectation}", went on to ${s.achievement}. Their advice: "${s.quote}"`;
}

// Deterministic daily pick based on date + profile.
function hashString(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function pickStory(
  dateKey: string,
  interests: Interest[],
  age: AgeRange | null,
  excludeId?: string,
  lang: Lang = "en",
): Story {
  const deck = lang === "es" ? STORIES_ES : STORIES_EN;
  const scored = deck.filter((s) => s.id !== excludeId).map((s) => {
    let score = 1;
    if (interests.length) {
      const matches = s.interests.filter((i) => interests.includes(i)).length;
      score += matches * 3;
    }
    if (age && s.ageAppeal.includes(age)) score += 2;
    return { s, score };
  });
  const max = Math.max(...scored.map((x) => x.score));
  const top = scored.filter((x) => x.score === max).map((x) => x.s);
  const idx = hashString(dateKey + "|" + interests.join(",") + "|" + (age ?? "")) % top.length;
  return top[idx];
}

export function getStories(lang: Lang): Story[] {
  return lang === "es" ? STORIES_ES : STORIES_EN;
}

export function findStory(id: string, lang: Lang): Story | undefined {
  return getStories(lang).find((s) => s.id === id);
}

// Spanish deck — culturally relevant figures & dichos, not machine translations.
export const STORIES_ES: Story[] = [
  {
    id: "cervantes",
    person: "Miguel de Cervantes",
    skeptic: "los acreedores que lo encarcelaron y los críticos de su época",
    lowExpectation: "escribirás nada que perdure",
    achievement: "escribir Don Quijote, la obra fundacional de la novela moderna",
    quote: "El que lee mucho y anda mucho, ve mucho y sabe mucho.",
    interests: ["Arts & Literature"],
    ageAppeal: ["18-25", "26-40", "41+"],
    theme: "dawn",
  },
  {
    id: "frida",
    person: "Frida Kahlo",
    skeptic: "los médicos que dijeron que no volvería a caminar tras el accidente",
    lowExpectation: "podrás pintar ni vivir una vida plena",
    achievement: "convertirse en un ícono universal del arte y de la identidad latinoamericana",
    quote: "Pies, ¿para qué los quiero si tengo alas para volar?",
    interests: ["Arts & Literature", "Politics & Leadership"],
    ageAppeal: ["Under 18", "18-25", "26-40", "41+"],
    theme: "violet",
  },
  {
    id: "garciamarquez",
    person: "Gabriel García Márquez",
    skeptic: "las editoriales que rechazaron su manuscrito una y otra vez",
    lowExpectation: "vivirás de escribir novelas",
    achievement: "ganar el Premio Nobel y definir el realismo mágico para el mundo entero",
    quote: "La vida no es la que uno vivió, sino la que uno recuerda y cómo la recuerda para contarla.",
    interests: ["Arts & Literature"],
    ageAppeal: ["18-25", "26-40", "41+"],
    theme: "forest",
  },
  {
    id: "messi",
    person: "Lionel Messi",
    skeptic: "los médicos que le diagnosticaron un déficit de hormona del crecimiento a los 11 años",
    lowExpectation: "tendrás el cuerpo para competir en el fútbol profesional",
    achievement: "ganar ocho Balones de Oro y levantar la Copa del Mundo con Argentina",
    quote: "Empecé haciendo lo que era necesario, después lo que era posible, y de repente me encontré haciendo lo imposible.",
    interests: ["Sports"],
    ageAppeal: ["Under 18", "18-25", "26-40"],
    theme: "ocean",
  },
  {
    id: "shakira",
    person: "Shakira",
    skeptic: "una maestra de coro que le dijo que su voz sonaba como la de una cabra",
    lowExpectation: "podrás cantar en un escenario",
    achievement: "vender más de 80 millones de discos y llevar la música latina al mundo entero",
    quote: "Los sueños son gratis, pero cumplirlos requiere trabajo.",
    interests: ["Arts & Literature", "Business & Entrepreneurship"],
    ageAppeal: ["Under 18", "18-25", "26-40"],
    theme: "ember",
  },
  {
    id: "picasso",
    person: "Pablo Picasso",
    skeptic: "un maestro de primaria que lo consideraba incapaz de aprender lo básico",
    lowExpectation: "aprenderás a leer, escribir o concentrarte",
    achievement: "reinventar el arte del siglo XX y cofundar el cubismo",
    quote: "La inspiración existe, pero tiene que encontrarte trabajando.",
    interests: ["Arts & Literature"],
    ageAppeal: ["18-25", "26-40", "41+"],
    theme: "dawn",
  },
  {
    id: "sotomayor",
    person: "Sonia Sotomayor",
    skeptic: "quienes creían que una niña puertorriqueña del Bronx no llegaría lejos",
    lowExpectation: "romperás el techo de tu barrio",
    achievement: "convertirse en la primera jueza latina de la Corte Suprema de EE. UU.",
    quote: "Hasta que no valores lo que eres, no valorarás el tiempo que se te ha dado.",
    interests: ["Politics & Leadership"],
    ageAppeal: ["18-25", "26-40", "41+"],
    theme: "forest",
  },
  {
    id: "isabelallende",
    person: "Isabel Allende",
    skeptic: "los que le dijeron que ya era demasiado tarde para empezar a escribir a los 40",
    lowExpectation: "publicarás una novela que alguien lea",
    achievement: "vender más de 75 millones de libros traducidos a más de 40 idiomas",
    quote: "No hay nada como una gran pasión para poner en marcha la vida.",
    interests: ["Arts & Literature"],
    ageAppeal: ["26-40", "41+"],
    theme: "violet",
  },
  {
    id: "nadal",
    person: "Rafael Nadal",
    skeptic: "los expertos que aseguraban que sus lesiones acabarían con su carrera antes de tiempo",
    lowExpectation: "volverás a ganar un Grand Slam",
    achievement: "ganar 22 títulos de Grand Slam y convertirse en leyenda de la tierra batida",
    quote: "El éxito consiste en mantenerse por encima de cualquier situación, buena o mala.",
    interests: ["Sports"],
    ageAppeal: ["Under 18", "18-25", "26-40", "41+"],
    theme: "ember",
  },
  {
    id: "neruda",
    person: "Pablo Neruda",
    skeptic: "su padre, que rechazó su vocación literaria y quería otra vida para él",
    lowExpectation: "vivirás de la poesía",
    achievement: "ganar el Premio Nobel de Literatura y ser leído en cada rincón del mundo hispano",
    quote: "Podrán cortar todas las flores, pero no podrán detener la primavera.",
    interests: ["Arts & Literature", "Politics & Leadership"],
    ageAppeal: ["18-25", "26-40", "41+"],
    theme: "forest",
  },
  {
    id: "penelope",
    person: "Penélope Cruz",
    skeptic: "quienes decían que una actriz española no triunfaría en Hollywood",
    lowExpectation: "trabajarás en cine internacional",
    achievement: "convertirse en la primera actriz española en ganar un Óscar",
    quote: "Si dejas de soñar, dejas de vivir.",
    interests: ["Arts & Literature"],
    ageAppeal: ["18-25", "26-40", "41+"],
    theme: "violet",
  },
  {
    id: "carlosslim",
    person: "Carlos Slim",
    skeptic: "los analistas que se rieron cuando compró una telefónica en crisis",
    lowExpectation: "harás dinero con una empresa estatal en quiebra",
    achievement: "construir un imperio y llegar a ser el hombre más rico del mundo",
    quote: "El mejor legado que uno puede dejarles a los hijos no es la fortuna, sino la educación.",
    interests: ["Business & Entrepreneurship"],
    ageAppeal: ["26-40", "41+"],
    theme: "dawn",
  },
  {
    id: "bachelet",
    person: "Michelle Bachelet",
    skeptic: "la dictadura que la exilió y torturó a su familia",
    lowExpectation: "regresarás a tu país ni tendrás voz política",
    achievement: "convertirse en la primera mujer presidenta de Chile, dos veces",
    quote: "La democracia no se defiende sola: hay que cuidarla todos los días.",
    interests: ["Politics & Leadership"],
    ageAppeal: ["26-40", "41+"],
    theme: "forest",
  },
  {
    id: "borges",
    person: "Jorge Luis Borges",
    skeptic: "una ceguera progresiva que le arrebató la lectura y la escritura a mano",
    lowExpectation: "seguirás siendo un escritor mientras pierdes la vista",
    achievement: "convertirse en uno de los autores más influyentes de la literatura universal",
    quote: "Uno no es lo que es por lo que escribe, sino por lo que ha leído.",
    interests: ["Arts & Literature"],
    ageAppeal: ["26-40", "41+"],
    theme: "ocean",
  },
  {
    id: "delbosque",
    person: "Vicente del Bosque",
    skeptic: "una prensa que lo consideraba demasiado tranquilo para dirigir a las grandes estrellas",
    lowExpectation: "podrás manejar egos ni ganar títulos importantes",
    achievement: "llevar a España a ganar el Mundial y la Eurocopa consecutivos",
    quote: "El trabajo constante y la humildad terminan por imponerse.",
    interests: ["Sports"],
    ageAppeal: ["26-40", "41+"],
    theme: "forest",
  },
  {
    id: "rigoberta",
    person: "Rigoberta Menchú",
    skeptic: "un sistema que silenciaba a las mujeres indígenas de Guatemala",
    lowExpectation: "serás escuchada más allá de tu comunidad",
    achievement: "ganar el Premio Nobel de la Paz y defender los derechos indígenas ante el mundo",
    quote: "La paz no es solamente la ausencia de la guerra; mientras haya pobreza, no habrá paz.",
    interests: ["Politics & Leadership"],
    ageAppeal: ["18-25", "26-40", "41+"],
    theme: "forest",
  },
  {
    id: "ochoa",
    person: "Ellen Ochoa",
    skeptic: "una escuela que le dijo que ingeniería no era carrera para mujeres",
    lowExpectation: "trabajarás en ciencia dura",
    achievement: "convertirse en la primera mujer latina astronauta y dirigir el Centro Espacial Johnson",
    quote: "No dejes que nadie te diga que no puedes hacer algo — ni siquiera tú misma.",
    interests: ["Science & Tech"],
    ageAppeal: ["Under 18", "18-25", "26-40"],
    theme: "ocean",
  },
  {
    id: "goya",
    person: "Francisco de Goya",
    skeptic: "una enfermedad que lo dejó completamente sordo a los 46 años",
    lowExpectation: "volverás a pintar con la misma fuerza",
    achievement: "crear su obra más audaz y moderna después de perder el oído",
    quote: "El sueño de la razón produce monstruos.",
    interests: ["Arts & Literature"],
    ageAppeal: ["26-40", "41+"],
    theme: "ember",
  },
  {
    id: "cuaron",
    person: "Alfonso Cuarón",
    skeptic: "una industria que dudaba de un director mexicano dirigiendo cine de gran presupuesto",
    lowExpectation: "harás cine que compita en Hollywood",
    achievement: "ganar el Óscar a Mejor Director dos veces y abrir puertas al cine latinoamericano",
    quote: "El cine es un espejo por el que a veces caminamos.",
    interests: ["Arts & Literature"],
    ageAppeal: ["18-25", "26-40", "41+"],
    theme: "violet",
  },
  {
    id: "celia",
    person: "Celia Cruz",
    skeptic: "un exilio que la separó para siempre de su Cuba natal",
    lowExpectation: "seguirás cantando lejos de casa",
    achievement: "convertirse en la Reina de la Salsa y símbolo mundial de la música latina",
    quote: "La vida es un carnaval, y las penas se van cantando.",
    interests: ["Arts & Literature"],
    ageAppeal: ["18-25", "26-40", "41+"],
    theme: "ember",
  },
];

export function todayKey(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}