import { StaticImageData } from 'next/image';
import { ComponentType } from 'react';

// Load images:
import IMG_9130 from '../public/pictures/IMG_9130.jpg';
import IMG_9140 from '../public/pictures/IMG_9140.jpg';
import IMG_9271 from '../public/pictures/IMG_9271.jpg';
import IMG_9277 from '../public/pictures/IMG_9277.jpg';
import IMG_9362 from '../public/pictures/IMG_9362.jpg';
import IMG_9371 from '../public/pictures/IMG_9371.jpg';
import IMG_9374 from '../public/pictures/IMG_9374.jpg';
import IMG_9396 from '../public/pictures/IMG_9396.jpg';
import IMG_9442 from '../public/pictures/IMG_9442.jpg';
import IMG_9449 from '../public/pictures/IMG_9449.jpg';
import IMG_9486 from '../public/pictures/IMG_9486.jpg';
import IMG_9562 from '../public/pictures/IMG_9562.jpg';
import IMG_20220401_160238 from '../public/pictures/20220401_160238.jpg';
import IMG_20220404_0132 from '../public/pictures/20220404_0132.jpg';
import IMG_20220404_0138 from '../public/pictures/20220404_0138.jpg';
import IMG_20220405_155455 from '../public/pictures/20220405_155455.jpg';
import IMG_20220405_160007 from '../public/pictures/20220405_160007.jpg';
import IMG_0164 from '../public/pictures/IMG_0164.jpg';
import IMG_20220406_095302 from '../public/pictures/20220406_095302.jpg';
import IMG_Presentation_GpeCOVID from '../public/pictures/Presentation_GpeCOVID.jpg';
import IMG_0188 from '../public/pictures/IMG_0188.jpg';
import IMG_0185 from '../public/pictures/IMG_0185.jpg';
import IMG_20220405_155535 from '../public/pictures/20220405_155535.jpg';

import Spectacles from '../components/stories/Spectacles';
import Covid from '../components/stories/Covid';
import Politique from '../components/stories/Politique';
import Genome from '../components/stories/Genome';

export const BASE_PATH = require('../next.config').basePath;

export interface Author {
  name: string;
  org?: string;
}
export interface Image {
  path: string;
  alt: string;
  credit: string;
  creditPath?: string;
}
export interface StoryType {
  id: string;
  path: string;
  color: string;
  title: string;
  description: string;
  image: Image;
  authors: Author[];
}
export const STORIES: StoryType[] = [
  {
    id: 'politique',
    path: BASE_PATH + '/stories/politique',
    color: '#2a7799',
    title: 'Structuration des communautés politiques',
    description:
      'Étudier les transformations au fil du temps des communautés politiques de soutien aux candidats à l’élection présidentielle en particulier des communautés de soutien à Jean-Luc Mélenchon',
    image: {
      path: BASE_PATH + '/pictures/illustrationGpeCommunautesPol.jpg',
      alt: '',
      credit: '@ Caroline Maufroid, Sciences\u00A0Po',
    },
    authors: [
      { name: 'Fabienne Greffet', org: 'IRENEE, Univ. Lorraine' },
      { name: 'Sara Aubry', org: 'BnF' },
      { name: 'Cyril Heude', org: 'DRIS, Sciences\u00A0Po' },
      { name: 'Robin de Mourat', org: 'médialab, Sciences\u00A0Po' },
      { name: 'Benjamin Ooghe-Tabanou', org: 'médialab, Sciences\u00A0Po' },
    ],
  },
  {
    id: 'spectacles',
    path: BASE_PATH + '/stories/spectacles',
    color: '#ff9591',
    title: 'Cartographie de la critique en ligne des arts du spectacle',
    description:
      'Recherche exploratoire à partir de Hyphe et des archives du web de la Bnf via une collecte ciblée',
    image: {
      path: BASE_PATH + '/pictures/illustrationGpeCritiqueSpectacle.jpg',
      alt: '',
      credit: '@ Caroline Maufroid, Sciences\u00A0Po',
    },
    authors: [
      { name: 'Béatrice Mazoyer', org: 'médialab, Sciences\u00A0Po' },
      { name: 'Guillaume Plique', org: 'médialab, Sciences\u00A0Po' },
      { name: 'Antoine De Sacy', org: 'BnF, Huma-Num' },
      { name: 'Cristina Tosetto', org: 'Université Sorbonne Nouvelle' },
      { name: 'Clara Wiatrowski', org: 'BnF' },
    ],
  },
  {
    id: 'covid',
    path: BASE_PATH + '/stories/covid',
    color: '#cf4d27',
    title: 'Vers une cartographie de la crise de la Covid-19',
    description: 'Positionnement des acteurs du web par rapport aux institutions',
    image: {
      path: BASE_PATH + '/pictures/illustrationGpeCovid.jpg',
      alt: '',
      credit: '@ Caroline Maufroid, Sciences\u00A0Po',
    },
    authors: [
      { name: 'Leslie Bellony', org: 'BnF' },
      { name: 'Guillaume Brioudes', org: 'médialab, Sciences\u00A0Po' },
      { name: 'Isabelle Degrange', org: 'BnF' },
      { name: 'Alexandre Faye' },
      { name: 'Alexis Jacomy', org: 'OuestWare' },
      { name: 'Kevin Locoh-Donou', org: 'BnF' },
      { name: 'Caroline Sala', org: 'Univ. Strasbourg' },
    ],
  },
  {
    id: 'genome',
    path: BASE_PATH + '/stories/genome',
    color: '#325a6e',
    title:
      'Caractériser les représentations politiques du vivant “génomique” dans les archives du web français',
    description:
      'Constitution d’un corpus autour des représentations politiques du vivant entre 2000 et 2004',
    image: {
      path: BASE_PATH + '/pictures/illustrationGpeGenome.jpg',
      alt: '',
      credit: '@ Caroline Maufroid, Sciences\u00A0Po',
    },
    authors: [
      { name: ' Dorothée Benhamou-Suesser', org: 'BnF' },
      { name: 'Paul Girard', org: 'OuestWare' },
      { name: 'Guillaume Levrier', org: 'CEVIPOF, Sciences\u00A0Po' },
      { name: 'Jennifer Morival', org: 'Université de Lille' },
      { name: 'Zeynep Pehlivan', org: 'INA' },
    ],
  },
];
export const STORIES_INDICES: Record<string, number> = STORIES.reduce(
  (iter, story, i) => ({ ...iter, [story.id]: i }),
  {}
);

export const STORY_COMPONENTS: Record<string, ComponentType> = {
  spectacles: Spectacles,
  covid: Covid,
  politique: Politique,
  genome: Genome,
};

export const NAV_PAGES = [
  { id: 'home', path: BASE_PATH + '/', label: 'Accueil' },
  { id: 'context', path: BASE_PATH + '/contexte', label: 'Contexte' },
  { id: 'stories', path: BASE_PATH + '/stories', label: 'Stories' },
  { id: 'method', path: BASE_PATH + '/methodo', label: 'Méthodologie' },
  { id: 'making-of', path: BASE_PATH + '/making-of', label: 'Making-of' },
] as const;

export const FOOTER_PAGES = [
  { id: 'credits', path: BASE_PATH + '/credits', label: 'Crédits' },
  { id: 'legals', path: BASE_PATH + '/mentions-legales', label: 'Mentions légales' },
] as const;

export type FooterPage = typeof FOOTER_PAGES[number]['id'];

export type NavPage = typeof NAV_PAGES[number]['id'];

export type Page = NavPage | FooterPage;

export const PICTURES = (
  [
    [
      'IMG_9130',
      '/pictures/IMG_9130.jpg',
      'Le groupe "Communautés politiques" travaille dans une salle du BnF DataLab',
      'Caroline Maufroid/ Sciences Po',
      IMG_9130,
    ],
    [
      'IMG_9140',
      '/pictures/IMG_9140.jpg',
      'Le groupe "Genôme" travaille dans une salle du BnF DataLab',
      'Caroline Maufroid/ Sciences Po',
      IMG_9140,
    ],
    [
      'IMG_9271',
      '/pictures/IMG_9271.jpg',
      "Recherche d'un site web dans l'application Archives de l'internet",
      'Caroline Maufroid/ Sciences Po',
      IMG_9271,
    ],
    [
      'IMG_9277',
      '/pictures/IMG_9277.jpg',
      'Le groupe "Genôme" travaille dans une salle du BnF DataLab',
      'Caroline Maufroid/ Sciences Po',
      IMG_9277,
    ],
    [
      'IMG_9362',
      '/pictures/IMG_9362.jpg',
      'Le groupe "COVID" travaille dans une salle du BnF DataLab',
      'Caroline Maufroid/ Sciences Po',
      IMG_9362,
    ],
    [
      'IMG_9371',
      '/pictures/IMG_9371.jpg',
      'Les groupes "Théâtre" et "COVID" travaillent au sein du BnF DataLab',
      'Caroline Maufroid/ Sciences Po',
      IMG_9371,
    ],
    [
      'IMG_9374',
      '/pictures/IMG_9374.jpg',
      'Le groupe "Communautés politiques" travaille dans une salle du BnF DataLab',
      'Caroline Maufroid/ Sciences Po',
      IMG_9374,
    ],
    [
      'IMG_9396',
      '/pictures/IMG_9396.jpg',
      'Recherche dans l\'index SolR par le groupe "Genôme"',
      'Caroline Maufroid/ Sciences Po',
      IMG_9396,
    ],
    [
      'IMG_9442',
      '/pictures/IMG_9442.jpg',
      'Fabienne Greffet commente une visualisation des données obtenues grâce aux crawls effectués via Hyphe',
      'Caroline Maufroid/ Sciences Po',
      IMG_9442,
    ],
    [
      'IMG_9449',
      '/pictures/IMG_9449.jpg',
      'Idées de visualisations de données',
      'Caroline Maufroid/ Sciences Po',
      IMG_9449,
    ],
    [
      'IMG_9486',
      '/pictures/IMG_9486.jpg',
      'Béatrice Mazoyer commente une visualisation des données réalisée par le groupe "Théâtre"',
      'Caroline Maufroid/ Sciences Po',
      IMG_9486,
    ],
    [
      'IMG_9562',
      '/pictures/IMG_9562.jpg',
      'Le groupe "Genôme" présente les résultats obtenus lors de la restitution finale du DataSprint ResPaDon',
      'Caroline Maufroid/ Sciences Po',
      IMG_9562,
    ],
    [
      '20220401_160238',
      '/pictures/20220401_160238.jpg',
      'Préparation des kit de bienvenue pour les participants au DataSprint ResPaDon',
      'Sciences Po',
      IMG_20220401_160238,
    ],
    [
      '20220404_0132',
      '/pictures/20220404_0132.jpg',
      'Formation à Hyphe donnée par Benjamin Ooghe-Tabanou le premier jour du DataSprint ResPaDon',
      'Sciences Po',
      IMG_20220404_0132,
    ],
    [
      '20220404_0138',
      '/pictures/20220404_0138.jpg',
      'Formation aux archives du web donnée par Sara Aubry et Dorothée Benhamou-Suesser le premier jour du DataSprint ResPaDon',
      'Sciences Po',
      IMG_20220404_0138,
    ],
    [
      '20220405_155455',
      '/pictures/20220405_155455.jpg',
      'Premier jour de travail du groupe "Communautés politiques"',
      'Sciences Po',
      IMG_20220405_155455,
    ],
    [
      '20220405_160007',
      '/pictures/20220405_160007.jpg',
      'Tags dans Hyphe et collecte dans les archives du web de la BnF',
      'Sciences Po',
      IMG_20220405_160007,
    ],
    [
      'IMG_0164',
      '/pictures/IMG_0164.jpg',
      'Fabienne Greffet analyse une visualisation de données ',
      'Sciences Po',
      IMG_0164,
    ],
    [
      '20220406_095302',
      '/pictures/20220406_095302.jpg',
      'Le groupe "Genôme" en train de réaliser des visualisation de données',
      'Sciences Po',
      IMG_20220406_095302,
    ],
    [
      'Presentation_GpeCOVID',
      '/pictures/Presentation_GpeCOVID.jpg',
      'Alexandre Faye présente l\'avancement du groupe "COVID" lors du bilan à mi-parcours',
      'Sciences Po',
      IMG_Presentation_GpeCOVID,
    ],
    [
      'IMG_0188',
      '/pictures/IMG_0188.jpg',
      'Le groupe "COVID" en train de coder',
      'Sciences Po',
      IMG_0188,
    ],
    [
      'IMG_0185',
      '/pictures/IMG_0185.jpg',
      'Le groupe "Théâtre" en train de visualiser des données',
      'Sciences Po',
      IMG_0185,
    ],
    [
      '20220405_155535',
      '/pictures/20220405_155535.jpg',
      'Le groupe "Théâtre" en train de sélectionner des données',
      'Sciences Po',
      IMG_20220405_155535,
    ],
  ] as [string, string, string, string, StaticImageData][]
).map((row) => ({
  id: row[0],
  src: BASE_PATH + row[1],
  alt: row[2],
  author: row[3],
  image: row[4],
}));
