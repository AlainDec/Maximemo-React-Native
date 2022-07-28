import { TTab, TTabContent } from '../types';

export const tabsData: TTab[] = [
    {
        id: 1,
        title: "Mes mémos",
        color: 0,
        actif: true,
        data: [
            {
                id: "a11",
                title: "premier titre",
                content: "et le contenu",
            }
        ],
    },
    {
        id: 2,
        title: "Projets jeux Unity",
        color: 1,
        actif: false,
    },
    {
        id: 3,
        title: "Outils SEO",
        color: 2,
        actif: false,
        data: [
            {
                id: "a31",
                title: "SEO 1",
                content: "Contenu pour le SEO 1",
            },
            {
                id: "a32",
                title: "SEO 2",
                content: "Contenu pour le SEO 2",
            },
            {
                id: "a33",
                title: "SEO 3",
                content: "Contenu pour le SEO 3",
            },
            {
                id: "a34",
                title: "SEO 4",
                content: "Contenu pour le SEO 4",
            },
        ],
    },
    {
        id: 4,
        title: "ReactJS",
        color: 0,
        actif: false,
    },
    {
        id: 5,
        title: "Un très long titre pour voir",
        color: 3,
        actif: false,
    },
    {
        id: 6,
        title: "Découvertes WEB",
        color: 4,
        actif: false,
    },
    {
        id: 7,
        title: "React Native",
        color: 0,
        actif: false,
    },
    {
        id: 8,
        title: "JS",
        color: 5,
        actif: false,
    },
];