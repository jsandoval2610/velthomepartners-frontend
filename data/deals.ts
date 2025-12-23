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

export type MapProperty = {
  title: string
  lat: number
  lng: number
  location?: string
}

// Representative deals shown on cards. Keep lean to avoid overwhelming the grid.
export const deals: Deal[] = [
  {
    title: 'Town & Country',
    location: 'Michigan',
    year: '2020',
    assetType: 'MHC',
    imgSrc: '/images/investments/tc.jpg',
    imgAlt: 'Town & Country community',
    lat: 42.255961,
    lng: -83.5412227,
  },
  {
    title: 'Clearfork',
    location: 'Ohio',
    year: '2020',
    assetType: 'MHC',
    imgSrc: '/images/investments/Clearfork.jpg',
    imgAlt: 'Clearfork community',
    lat: 40.6058713,
    lng: -82.4651991,
  },
  {
    title: 'Huron',
    location: 'Michigan',
    year: '2021',
    assetType: 'MHC',
    imgSrc: '/images/investments/Huron.jpg',
    imgAlt: 'Huron community',
    lat: 43.7864547,
    lng: -82.8918886,
  },
  {
    title: 'Riversbend',
    location: 'Michigan',
    year: '2021',
    assetType: 'MHC',
    imgSrc: '/images/investments/Riversbend.jpg',
    imgAlt: 'Riversbend community',
    lat: 45.858536,
    lng: -88.0816865,
  },
  {
    title: 'Camelot',
    location: 'Ohio',
    year: '2021',
    assetType: 'MHC',
    imgSrc: '/images/investments/Camelot.jpg',
    imgAlt: 'Camelot community',
    lat: 40.1,
    lng: -83.0,
  },
  {
    title: 'Wildwood',
    location: 'Illinois',
    year: '2019',
    assetType: 'MHC',
    imgSrc: '/images/investments/Wildwood.jpeg',
    imgAlt: 'Wildwood community',
    lat: 37.6830687,
    lng: -89.1789934,
  },
]

// Full property coordinate set used for the map.
export const mapProperties: MapProperty[] = [
  { title: 'Riversbend', location: 'MI', lat: 45.858536, lng: -88.0816865 },
  { title: 'Huron', location: 'MI', lat: 43.7864547, lng: -82.8918886 },
  { title: 'Edgewood', location: 'OH', lat: 39.9036254, lng: -83.8865536 },
  { title: 'Bellevue', location: 'MI', lat: 42.4194729, lng: -85.0082365 },
  { title: 'Valley View', location: 'MO', lat: 39.9625753, lng: -91.4135164 },
  { title: 'Camelot South', location: 'OH', lat: 41.5222621, lng: -84.0030595 },
  { title: 'Bronson', location: 'MI', lat: 41.8665692, lng: -85.1971864 },
  { title: 'Wildwood', location: 'IL', lat: 37.6830687, lng: -89.1789934 },
  { title: 'Gaslight', location: 'IL', lat: 40.7020287, lng: -90.0095243 },
  { title: 'Pleasant Valley', location: 'MI', lat: 42.9829371, lng: -84.1520051 },
  { title: 'Werner', location: 'PA', lat: 40.5376378, lng: -79.8359703 },
  { title: 'Twin Meadows', location: 'MI', lat: 42.9705604, lng: -83.6903861 },
  { title: 'Clearfork', location: 'OH', lat: 40.6058713, lng: -82.4651991 },
  { title: 'Town & Country', location: 'MI', lat: 42.255961, lng: -83.5412227 },
  { title: 'Oak Forest', location: 'MI', lat: 42.3246185, lng: -85.1317392 },
  { title: 'Whispering Pines', location: 'MI', lat: 43.6239101, lng: -84.3792178 },
  { title: 'Keokuk', location: 'IA', lat: 40.4276978, lng: -91.4450352 },
  { title: 'Hummingbird', location: 'IL', lat: 41.3297425, lng: -89.3221669 },
  { title: 'Providential Crossing', location: 'IL', lat: 41.2905677, lng: -89.3671467 },
  { title: 'Sugarcreek', location: 'IL', lat: 40.7789941, lng: -87.7601486 },
  { title: 'Watch-E-Kee', location: 'IL', lat: 40.7725572, lng: -87.6693319 },
  { title: 'FMC', location: 'IL', lat: 42.223733, lng: -89.0759216 },
  { title: 'Malvern', location: 'OH', lat: 40.6898698, lng: -81.1961594 },
  { title: 'Poplar', location: 'OH', lat: 41.1422002, lng: -83.414407 },
  { title: 'West Manor', location: 'OH', lat: 40.7934138, lng: -81.4375436 },
  { title: 'Sunny Acres', location: 'OH', lat: 40.7935215, lng: -81.4555052 },
  { title: 'Sun Valley', location: 'OH', lat: 40.7913659, lng: -81.4822222 },
  { title: 'Eastwood', location: 'OH', lat: 40.2142586, lng: -84.6312373 },
]
