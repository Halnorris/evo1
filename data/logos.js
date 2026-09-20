// Client, framework and accreditation logos.
// src: null means the file is still to come. The logo strip then shows the name in a
// neutral tile with a TBC tag, so nothing breaks. Drop the file into /public and set src.

export const clientLogos = [
  { name: 'B&D Reside', src: '/images/logos/clients/bd-reside.png', width: 260, height: 124 },
  { name: 'IDS', src: '/images/logos/clients/ids.png', width: 200, height: 104 },
  // TBC item 16: clean file to follow (the current logo shows a ghosted duplicate).
  { name: 'Thames Reach', src: null, tbc: 'clean logo file to follow' },
  { name: 'Soho Housing', src: null, tbc: 'clean logo file to follow' },
  { name: 'LRM', src: null, tbc: 'clean logo file to follow' },
  { name: 'British Land', src: '/images/logos/clients/british-land.png', width: 189, height: 95 },
  // README3: use the files already on the current site. Download them and set src:
  //   https://evo-pm.com/media/pftjv3d0/evo_capital_grey.png   -> /public/images/logos/clients/capital.png
  //   https://evo-pm.com/media/qjvn1ttc/evo_resonance_grey.png -> /public/images/logos/clients/resonance.png
  { name: 'Capital', src: null, tbc: 'copy logo file from current site' },
  { name: 'Resonance', src: null, tbc: 'copy logo file from current site' },
  // The Storm logo has been removed on purpose (brief HOME-04). Do not add it back.
];

export const frameworkLogos = [
  { name: 'G-Cloud supplier', src: '/images/logos/accreditations/g-cloud.png', width: 600, height: 179 },
  { name: 'Crown Commercial Service supplier', src: '/images/logos/accreditations/crown-commercial-service.png', width: 600, height: 247 },
  // TBC item 13: keep only if EVO confirms these are current. Set show: true to display.
  { name: 'South East Consortium', src: null, tbc: 'still current?', show: true },
  { name: 'Procurement for Housing', src: null, tbc: 'still current?', show: true },
];

export const accreditationLogos = [
  { name: 'ISO 9001, 14001 and 45001', src: '/images/logos/accreditations/iso-9001-14001-45001.png', width: 500, height: 205 },
  { name: 'ISO 27001', src: '/images/logos/accreditations/iso-27001.png', width: 600, height: 391 },
  { name: 'Constructionline Gold member', src: '/images/logos/accreditations/constructionline-gold.png', width: 270, height: 179 },
  { name: 'Acclaim Accreditation', src: '/images/logos/accreditations/acclaim.png', width: 357, height: 121 },
  { name: 'Property Redress Scheme', src: '/images/logos/accreditations/prs.webp', width: 600, height: 170 },
  { name: 'Cyber Essentials', src: null, tbc: 'logo file to follow' },
  { name: 'Living Wage Employer', src: null, tbc: 'logo file to follow' },
];
