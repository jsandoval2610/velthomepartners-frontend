export type Deal = {
  title: string
  imgSrc: string
  imgAlt?: string
  location: string
  year: string
  assetType: string
  lat: number
  lng: number
}

// Coordinates are approximate; update with precise property locations when available.
export const deals: Deal[] = [
  {
    title: 'Town & Country',
    location: 'Michigan',
    year: '2020',
    assetType: 'MHC',
    imgSrc: '/images/investments/tc.jpg',
    imgAlt: 'Town & Country community',
    lat: 42.7325,
    lng: -84.5555,
  },
  {
    title: 'Clearfork',
    location: 'Ohio',
    year: '2020',
    assetType: 'MHC',
    imgSrc: '/images/investments/Clearfork.jpg',
    imgAlt: 'Clearfork community',
    lat: 40.4173,
    lng: -82.9071,
  },
  {
    title: 'Huron',
    location: 'Michigan',
    year: '2021',
    assetType: 'MHC',
    imgSrc: '/images/investments/Huron.jpg',
    imgAlt: 'Huron community',
    lat: 44.0000,
    lng: -83.1000,
  },
  {
    title: 'Riversbend',
    location: 'Michigan',
    year: '2021',
    assetType: 'MHC',
    imgSrc: '/images/investments/Riversbend.jpg',
    imgAlt: 'Riversbend community',
    lat: 42.7330,
    lng: -84.6200,
  },
  {
    title: 'Camelot',
    location: 'Ohio',
    year: '2021',
    assetType: 'MHC',
    imgSrc: '/images/investments/Camelot.jpg',
    imgAlt: 'Camelot community',
    lat: 40.1000,
    lng: -83.0000,
  },
  {
    title: 'Wildwood',
    location: 'Illinois',
    year: '2019',
    assetType: 'MHC',
    imgSrc: '/images/investments/Wildwood.jpeg',
    imgAlt: 'Wildwood community',
    lat: 42.2830,
    lng: -88.1000,
  },
]
