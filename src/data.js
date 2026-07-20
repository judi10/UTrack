// Source : Council of Ontario Universities, CUDO
// Effectifs internationaux à temps plein, automne 2019 à 2023
// https://cudo.ouac.on.ca

export const UNIVERSITIES = [
  'mcmaster',
  'queens',
  'ottawa',
  'waterloo',
  'western',
];

export const UNIV_NAMES = {
  mcmaster: { en: 'McMaster University', fr: 'Université McMaster' },
  queens:   { en: "Queen's University",  fr: "Université Queen's" },
  ottawa:   { en: 'University of Ottawa', fr: "Université d'Ottawa" },
  waterloo: { en: 'University of Waterloo', fr: 'Université de Waterloo' },
  western:  { en: 'Western University', fr: 'Université Western' },
};

export const UNIV_COLORS = {
  mcmaster: '#7A8FA6',
  queens:   '#9B8AA6',
  ottawa:   '#D4A017',
  waterloo: '#5C8A72',
  western:  '#B5654F',
};

export const YEARS = [2019, 2020, 2021, 2022, 2023];

export const LEVELS_DATA = {
  bachelor: {
    mcmaster: { 2019: 3637, 2020: 4282, 2021: 4686, 2022: 4686, 2023: 4406 },
    queens:   { 2019: 2328, 2020: 2275, 2021: 2341, 2022: 2260, 2023: 1974 },
    ottawa:   { 2019: 4570, 2020: 5447, 2021: 6188, 2022: 6285, 2023: 6216 },
    waterloo: { 2019: 6382, 2020: 6819, 2021: 6479, 2022: 6001, 2023: 5527 },
    western:  { 2019: 2763, 2020: 2822, 2021: 2761, 2022: 2593, 2023: 2398 },
  },
  master: {
    mcmaster: { 2019: 785, 2020: 611, 2021: 800, 2022: 952, 2023: 1075 },
    queens:   { 2019: 791, 2020: 658, 2021: 848, 2022: 835, 2023: 859 },
    ottawa:   { 2019: 1455, 2020: 1264, 2021: 1411, 2022: 1784, 2023: 1849 },
    waterloo: { 2019: 1079, 2020: 921, 2021: 1221, 2022: 1128, 2023: 1181 },
    western:  { 2019: 1022, 2020: 859, 2021: 1040, 2022: 1052, 2023: 1139 },
  },
  doctoral: {
    mcmaster: { 2019: 551, 2020: 579, 2021: 626, 2022: 665, 2023: 661 },
    queens:   { 2019: 413, 2020: 445, 2021: 526, 2022: 508, 2023: 539 },
    ottawa:   { 2019: 609, 2020: 715, 2021: 854, 2022: 954, 2023: 988 },
    waterloo: { 2019: 945, 2020: 941, 2021: 960, 2022: 926, 2023: 894 },
    western:  { 2019: 652, 2020: 682, 2021: 785, 2022: 859, 2023: 941 },
  },
};

export function getTotalByYear(univ) {
  return YEARS.map((y) =>
    LEVELS_DATA.bachelor[univ][y] +
    LEVELS_DATA.master[univ][y] +
    LEVELS_DATA.doctoral[univ][y]
  );
}

// Échelles fixes des axes Y : valeurs calculées à partir du
// maximum réel des données, arrondies vers le haut. Ces bornes
// restent identiques peu importe l'université ou l'année choisie,
// afin que l'échelle des graphiques ne varie jamais selon le choix.
export const LINE_Y_MAX = 10000;
export const BAR_Y_MAX = 7500;

export const T = {
  fr: {
    htmlLang: 'fr',
    langLabel: 'English',
    brand: 'UTrack',
    tagline: 'Étudiants internationaux dans 5 grandes universités ontariennes',
    description: 'Répartition par cycle d’études et tendances sur 5 ans',
    source: 'Source : CUDO (Council of Ontario Universities), QS World University Rankings 2026. Toronto exclue : valeurs aberrantes.',
    lineCardTitle: 'Évolution du nombre d’étudiants internationaux',
    lineCardDesc: 'Total tous cycles confondus, 2019 à 2023',
    lineSelectLabel: 'Université :',
    barCardTitle: 'Comparaison par cycle d’études',
    barCardDesc: 'Répartition des étudiants internationaux par université',
    barSelectLabel: 'Année :',
    yAxisLabel: "Nombre d'étudiants",
    levelBachelor: '1er cycle (Bachelor)',
    levelMaster: 'Maîtrise',
    levelDoctoral: 'Doctorat',
    footer: '© 2026 · Judicael Tokam',
    numberLocale: 'fr-CA',
  },
  en: {
    htmlLang: 'en',
    langLabel: 'Français',
    brand: 'UTrack',
    tagline: 'International Students in 5 Major Ontario Universities',
    description: 'Breakdown by level of study and trends over 5 years',
    source: 'Source: CUDO (Council of Ontario Universities), QS World University Rankings 2026. Toronto excluded: outlier values.',
    lineCardTitle: 'International Student Enrolment Over Time',
    lineCardDesc: 'Total across all levels, 2019 to 2023',
    lineSelectLabel: 'University:',
    barCardTitle: 'Comparison by Level of Study',
    barCardDesc: 'Breakdown of international students by university',
    barSelectLabel: 'Year:',
    yAxisLabel: 'Number of students',
    levelBachelor: "Bachelor's",
    levelMaster: "Master's",
    levelDoctoral: 'Doctoral',
    footer: '© 2026 · Judicael Tokam',
    numberLocale: 'en-CA',
  },
};