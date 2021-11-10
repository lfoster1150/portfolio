const data = [
  {
    title: 'Combat League',
    image: 'https://i.imgur.com/G8J08mT.png?1',
    description:
      'A retro-styled web app interpretation of a futuristic football strategy board game.',
    fullDescription: [
      '- A retro-styled web app interpretation of a futuristic football strategy board game from my youth called "Battleball".',
      '- Originally created in four days using only HTML, CSS, and vanilla JavaScript.',
      '- The board and game pieces were created using a mixture of JavaScript HTML DOM elements and CSS.',
      '- Deployed using Surge.'
    ],
    note: `"Combat League" was my first full JavaScript project, and it allowed me to fully explore some base concepts of software development. Though the concept is simple, there are a lot of moving parts and intricacies that I'm proud of. The project especially forced me to practice the concept of Separation of Concerns to make the logic manageable and the code more DRY.`,
    modalImage: 'https://i.imgur.com/go9h9JD.png?1',
    icons: ['html', 'javascript', 'css'],
    github: 'https://github.com/lfoster1150/combat_league',
    deployed: 'https://combat-league.surge.sh/'
  },
  {
    title: 'Excelsior!',
    image: 'https://i.imgur.com/UvqIIwi.png?1',
    description:
      'A full-stack (MERN) web app to track all your must-read comics.',
    fullDescription: [
      '- A full-stack (MERN) web app to track all your must-read comics. This project was originally created in four days as part of the General Assembly SEI program.',
      '- Front-end created using React.js, with bootstrap for UI commptonents',
      '- Marvel comics API implemented to provide data and to make it easier for users to add comics.',
      '- Node.js and Express.js were used implement the back-end, with Mongoose.js used to interact with a MongoDB database.',
      '- The front-end was deployed on Heroku, while the back-end database was deployed using Atlas.'
    ],
    note: `As a huge fan of comics, "Excelsior!" was especially fun for me. It allowed me to delve deep into React, so I was able to strengthen my understanding of many React and general front-end concepts such as props and hooks. It also marks my first full-stack project, so it was the first time I was able to create a REST API completely from scratch. In the future I plan to add some sort of authentication as well as more functionality for the amazing Marvel API.`,
    modalImage: 'https://i.imgur.com/UvqIIwi.png?1',
    icons: ['mongodb', 'express', 'react', 'node'],
    github: 'https://github.com/lfoster1150/excelsior',
    deployed: 'https://safe-brushlands-20870.herokuapp.com/'
  },
  {
    title: 'PhotoPocket',
    image: 'https://i.imgur.com/xzjGtJp.png',
    description:
      'A collaborative full-stack (PERN) web app project for photographers to elegantly display their photos.',
    fullDescription: [
      '- A full-stack (PERN) web app project created in four days in collaboration with two other developers.',
      '- Front-end created using React.js, with bootstrap for UI commptonents',
      '- Node.js and Express.js were used implement the back-end, with Sequelize used to interact with a PostgreSQL database.',
      '- ',
      '- AWS S3 was implemented to allow users to upload their own photos.',
      '- Both the front-end and the back-end database were deployed on Heroku.'
    ],
    note: `While I'm very comfortable in team settings, "PhotoPocket" was my first software engineering collaborative project. At this point I was proficient with the full stack, so my impact can be seen on both the front and back ends. I'm most proud of the work we did on the back-end. Through pair coding we were able to knock out the back end in around a day, which gave us much more time in the following three days for front-end and Amazon S3 implementation.`,
    modalImage: 'https://i.imgur.com/dwZKXVn.png',
    icons: ['postgresql', 'express', 'react', 'node'],
    github: 'https://github.com/ItalloGama/PhotoPocket',
    deployed: 'https://arcane-tor-98786.herokuapp.com/'
  },
  {
    title: 'SportsVue',
    image: 'https://i.imgur.com/ljJIrlH.png?1',
    description:
      'A full-stack sports application to track your favorite teams and players.',
    fullDescription: [
      '- A full-stack sports application to track your favorite teams and players.',
      '- The front-end was created using Vue.js, with Vuex managing state, and Vuetify providing material components for the UI.',
      '- The back-end was created with Python/Flask, with SQLAlchemy used to interact with a PostgreSQL database.',
      '- Third-party soccer API used to bring in data for leagues, teams, players, and stats.',
      '- Vuex-cache was implemented in Vuex in order to prevent repeated API calls.',
      '- Vue-chartjs was used to easily and stylish display graphs for team statistics.'
    ],
    note: `As a massive sports fan, so "SportsVue" was a passion project for me. I had just learned Python in the previous week, so implementing a Flask back-end in around a day was a huge accomplishment. During the design process I also fell completely in love with Vue.js. Its modular structure helps keep the code clean. In the future I plan to add more graphs and player detail pages with player specific stats.`,
    modalImage: 'https://i.imgur.com/yaAdLF8.png',
    icons: ['postgresql', 'flask', 'sqlalchemy', 'vue'],
    github: 'https://github.com/lfoster1150/sports_vue',
    deployed: 'https://sports-vue.vercel.app/'
  }
]

export default data
