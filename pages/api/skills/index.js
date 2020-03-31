export default (req, res) => {
  const skills = [
    {
      id: 1,
      name: 'Node',
      url: 'https://nodejs.org/',
    },
    {
      id: 2,
      name: 'Express',
      url: 'https://expressjs.com/',
    },
    {
      id: 3,
      name: 'MySQL',
      url: 'https://www.mysql.com/',
    },
    {
      id: 4,
      name: 'MongoDB',
      url: 'https://www.mongodb.com/',
    },
    {
      id: 5,
      name: 'Prisma',
      url: 'https://www.prisma.io/',
    },
    {
      id: 6,
      name: 'Javascript',
      url: 'https://en.wikipedia.org/wiki/JavaScript',
    },
    {
      id: 7,
      name: 'TypeScript',
      url: 'https://www.typescriptlang.org/',
    },
    {
      id: 8,
      name: 'React',
      url: 'https://reactjs.org/',
    },
    {
      id: 9,
      name: 'NextJS',
      url: 'https://reactjs.org/',
    },
    {
      id: 10,
      name: 'Vue',
      url: 'https://vuejs.org/',
    },
    {
      id: 11,
      name: 'Docker',
      url: 'https://www.docker.com/',
    },
    {
      id: 12,
      name: 'Jenkins',
      url: 'https://jenkins.io/',
    },
    {
      id: 13,
      name: 'Jest',
      url: 'https://jestjs.io/',
    },
    {
      id: 24,
      name: 'Git',
      url: 'https://github.com/smnmtchll/',
    },
  ];
  res.end(JSON.stringify(skills));
};
