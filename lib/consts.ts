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
import { StaticImageData } from 'next/image';

export const STORIES = [
  {
    id: 'spectacles',
    path: '/stories/spectacles',
    color: '#FF9591',
    title: 'Cartographie de la critique en ligne des arts du spectacle',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas tellus eget placerat condimentum. Fusce eget congue enim, nec maximus velit. Donec in ligula a libero posuere molestie ac et nibh. Maecenas porta fermentum consequat. Morbi vitae leo non dolor iaculis auctor eu nec metus. Ut commodo sapien vel pharetra rhoncus. Morbi pulvinar nibh non tristique commodo.',
    image: {
      path: 'https://picsum.photos/400/700',
      alt: '400x700 image placeholder',
      credit: '© Picsum.photos',
      creditPath: 'https://picsum.photos/',
    },
  },
  {
    id: 'covid',
    path: '/stories/covid',
    color: '#CF4D27',
    title: 'Crise de la COVID-19 : positionnement des acteurs du web par rapport aux institutions',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas tellus eget placerat condimentum. Fusce eget congue enim, nec maximus velit. Donec in ligula a libero posuere molestie ac et nibh. Maecenas porta fermentum consequat. Morbi vitae leo non dolor iaculis auctor eu nec metus. Ut commodo sapien vel pharetra rhoncus. Morbi pulvinar nibh non tristique commodo.',
    image: {
      path: 'https://picsum.photos/500/700',
      alt: '500x700 image placeholder',
      credit: '© Picsum.photos',
      creditPath: 'https://picsum.photos/',
    },
  },
  {
    id: 'politique',
    path: '/stories/politique',
    color: '#2A7799',
    title:
      'Structuration des communautés politiques autour des candidats aux élections présidentielles (exemple du candidat Jean-Luc Mélenchon)',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas tellus eget placerat condimentum. Fusce eget congue enim, nec maximus velit. Donec in ligula a libero posuere molestie ac et nibh. Maecenas porta fermentum consequat. Morbi vitae leo non dolor iaculis auctor eu nec metus. Ut commodo sapien vel pharetra rhoncus. Morbi pulvinar nibh non tristique commodo.',
    image: {
      path: 'https://picsum.photos/400/600',
      alt: '400x600 image placeholder',
      credit: '© Picsum.photos',
      creditPath: 'https://picsum.photos/',
    },
  },
  {
    id: 'genome',
    path: '/stories/genome',
    color: '#325A6E',
    title: 'La notion de « génome » dans les archives électorales BnF',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas tellus eget placerat condimentum. Fusce eget congue enim, nec maximus velit. Donec in ligula a libero posuere molestie ac et nibh. Maecenas porta fermentum consequat. Morbi vitae leo non dolor iaculis auctor eu nec metus. Ut commodo sapien vel pharetra rhoncus. Morbi pulvinar nibh non tristique commodo.',
    image: {
      path: 'https://picsum.photos/700/700',
      alt: '700x700 image placeholder',
      credit: '© Picsum.photos',
      creditPath: 'https://picsum.photos/',
    },
  },
] as const;

export const NAV_PAGES = [
  { id: 'home', path: '/', label: 'Accueil' },
  { id: 'context', path: '/context', label: 'Contexte' },
  { id: 'stories', path: '/stories', label: 'Stories' },
  { id: 'method', path: '/method', label: 'Méthodologie' },
  { id: 'making-of', path: '/making-of', label: 'Making-of' },
] as const;

export const FOOTER_PAGES = [
  { id: 'credits', path: '/credits', label: 'Crédits' },
  { id: 'legals', path: '/legals', label: 'Mentions légales' },
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
      'Le groupe "Théâtre" en train de séléctionner des données',
      'Sciences Po',
      IMG_20220405_155535,
    ],
  ] as [string, string, string, string, StaticImageData][]
).map((row) => ({
  id: row[0],
  src: row[1],
  alt: row[2],
  author: row[3],
  image: row[4],
}));
