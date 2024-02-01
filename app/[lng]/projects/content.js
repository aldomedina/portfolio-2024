const featuredProjects = [
  {
    id: 'wargames',
    title: 'wargames',
    url: '/videos/wargames.mp4',
    imageUrl: '/img/wargames-fallback.webp',
    ratio: 1.88,
    route: '/projects/wargames',
    body: 'Wargames is a participatory Generative Art project where Wargames token holders are able to interact with an algorithm and co-create outputs that will belong to the Wargames Generative Collection. In addition, token holders will be able to create their own collections.',
    blurDataUrl:
      'data:image/webp;base64,UklGRo4DAABXRUJQVlA4WAoAAAAgAAAAQgEAqwAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggoAEAANAWAJ0BKkMBrAA/OZzCXq8qpiUgKQngJwlpbt+0CZ829v2c+QBP9DZItJXa/K1mYkcbw/KpdPy1DtN/1EZGPccuGIs+rJVUlkgz7USN5ABLfiN2lQF0LpmE5HZAJDEJ/g3y7eI3Fwr88CYx8jEVXZlhwoOkOrURZeO4hoHiVUnLjUA91bO/T7UyBM3BusOiESFhiIxS7v+x58XVwhoBuFFz1v2j8/b+/br+WVSoU+seT1S8SQsyLw5ry0/AypKAAP7uCzZL3wI/zoq1BGk8u/hQcXQZioytC1TVsqKUpGiMa7vlCzFPDlKDYuxQzv1CcpjorzchbU4g0DXeNeDFNwXMOhx2HOVIVQmRJls55RhQ6BsNLy3XM71iyBfNcgo/ugWNzNcbpGfcBSmFdtacS7vfeIPqqWIFfqigC4kWzJyw2TgKsP+B3HLwiqkfQX+j9w2xnuY0VdLghE+Oak+sF3Oz/Csc/0FbgyyS5UsUZIIb1K3Rc+zwqRRDdipzoOaU0f+5WVSPLjftLVOKIM8oGcma6s3Qomr0vEdx/vgMAAAA',
  },
  {
    id: 'alumni-vis',
    title: 'alumni vis',
    url: '/videos/alumni.mp4',
    imageUrl: '/img/alumni-fallback.webp',
    ratio: 0.968,
    route: '/projects/uai-alumni-vis',
    body: "Design and Development of a data visualization and analysis tool for the Adolfo Ibáñez University's Design Faculty ALUMNI survey, designed to graphically display information and enable data disaggregation and correlation, facilitating detailed and comprehensive analysis.",
    blurDataUrl:
      'data:image/webp;base64,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',
  },
  {
    id: 'solids',
    title: 'solids',
    url: '/videos/solids-ui-compressed.mp4',
    imageUrl: '/img/solids-fallback.webp',
    ratio: 1.6,
    route: '/projects/solids',
    body: 'Website for the —decentralised— commercialisation of Solids, a generative architecture project created by FAR',
    blurDataUrl:
      'data:image/webp;base64,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',
  },
  {
    id: 'teapot',
    title: 'UTAH’S ODISSEY',
    url: '/videos/teapot-5-comp.mp4',
    imageUrl: '/img/teapot-fallback.webp',
    ratio: 1,
    route: '/projects/solids',
    blurDataUrl:
      'data:image/webp;base64,UklGRl4CAABXRUJQVlA4WAoAAAAgAAAAJQAAJQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggcAAAAFAEAJ0BKiYAJgA+7XCsU7+mLbCjjAPwHYlAGHR5iKABiJpPD/wzu9pD3YAA/uXcTBTbmov3RpTUPkk6nlrYUA9L1eSR9hDpZs8Tg5K3A/NZFl9LgBjGvtz3P4fy8baeAFEJed2FMJKa1mZKa+wAAAA=',
  },
]

const otherProjects = [
  {
    id: 'Quasars',
    name: 'QUASARS',
    endClient: 'QUANTUM ART',
    workingFor: 'FINE DIGITAL',
    roles: 'FRONT-END/DESIGNER',
    year: 2022,
    tools: ['React.js', 'Three.js', 'R3F', 'Sass', 'Web3.js', 'Typescript'],
    body: 'Design and development of an interactive digital space (Metaverse) for the exhibition of various digital artworks and photographs offered in auction by the company.',
  },
  {
    id: 'fine',
    name: 'FINE DIGITAL',
    endClient: 'FINE DIGITAL',
    workingFor: 'FINE DIGITAL',
    roles: 'FULL-STACK/DESIGNER',
    year: 2021,
    tools: ['Next.js', 'Three.js', 'Sass', 'Web3.js', 'Typescript', 'Sanity.io'],
    body: 'pending',
  },
  {
    id: 'TEGRA118',
    name: 'TEGRA118',
    body: 'Cloud marketplace for asset managers and traders. It provides them with portfolio management and trading capabilities. The platform provides a dynamic subdomain service for each entity and specific layouts for each user role.',
    endClient: 'jigsaw.xyz',
    workingFor: 'StudioGraphene',
    roles: 'FRONT-END',
    year: 2021,
    web: 'https://www.tegra118.com/',
    tools: ['React.js', 'Redux', 'Typescript', 'AWS Cognito', 'Styled Components', 'Material UI', 'Cypress', 'Jest'],
  },
  {
    id: 'Winnibook',
    name: 'WINNIBOOK',
    workingFor: 'independent',
    body: 'Manitoba’s (Canada) directory of local businesses. It seeks to increase local business visibility through an online directory and blog posts about them, powered by a custom search engine',
    endClient: 'WINNIBOOK',
    roles: 'FRONT-END/DESIGNER',
    year: 2021,
    tools: ['Next.js', 'Tailwind CSS', 'GraphQL'],
  },
  {
    id: 'HELLOSOLO',
    name: 'HELLOSOLO',
    body: 'Platform that allows users to browse and purchase tickets to dating events. Users who attend can then match with other users and start communicating through the platform. Organisations can create accounts to host and manage their own events.',
    endClient: 'hellosolo',
    workingFor: 'StudioGraphene',
    roles: 'FRONT-END',
    year: 2020,
    tools: ['Nuxt.js', 'Vue.js', 'Sass', 'Stripe'],
    web: 'https://www.hatch.global/',
  },
  {
    id: 'Hatch',
    name: 'HATCH AND CREATE',
    body: 'Web application for developing and managing design cases for various products that are sold internally through Hatch, Shopify or Etsy platform. It also has a community section that it’s handled through drupal.',
    endClient: 'Fine Digital',
    workingFor: 'StudioGraphene',
    roles: 'FRONT-END',
    year: 2020,
    tools: ['React.js', 'Sass', 'Redux', 'Stripe'],
    web: 'https://www.hatch.global/',
  },
  {
    id: 'GOLEARN',
    name: 'GOLEARN',
    body: 'AI intervention and assessment platform to help improve the English literacy and learning outcomes of students. It provides a diverse range of exercises, follow up tools and a class based system for teachers and schools.',
    endClient: 'Golearn',
    workingFor: 'StudioGraphene',
    roles: 'FRONT-END',
    year: 2020,
    tools: ['React.js', 'Sass', 'Redux'],
    web: 'https://portal.golearn.guru/login',
  },
  {
    id: 'Extrai',
    name: 'EXTRAI',
    body: 'Design of the visual identity for the EXTRAI Art Festival in Lousal, Portugal, in collaboration with a collective of freelance designers. My role involved creating graphic pieces, developing the website, and producing interactive 3D graphics.',
    endClient: 'Extrai Art Festival',
    workingFor: 'Independent',
    roles: 'FRONT-END/DESIGNER',
    year: 2019,
    tools: ['Gatsby.js', 'Styled Components'],
    web: 'https://www.hatch.global/',
  },
  {
    id: 'Post-ism',
    name: 'POST-ISM',
    body: 'Website for the Post-ism design exhibition, featuring projects developed during the course of the Master’s Degree in Communication Design (Fine Arts, ULisboa), addressing contemporary methods of communication, production, and dissemination of knowledge.',
    endClient: 'Extrai Art Festival',
    workingFor: 'Independent',
    roles: 'FRONT-END/DESIGNER',
    year: 2019,
    tools: ['Vanilla js', 'Three.js'],
    web: 'https://post-ism.fbaul-dcnm.pt/',
  },
]

export { featuredProjects, otherProjects }
