export default (req, res) => {
  const projects = [
    {
      title: `Artworks London Inventory`,
      txt: `<p>
                Artworks London was an arts services business I co-founded back in 2012. At the core of the business was a <strong> <a href="https://en.wikipedia.org/wiki/MEAN_(solution_stack)" target="_blank">MEAN</a> </strong> cloud based inventory system that supported artists, galleries and collectors operating internatioanlly in the commercial artworld.
            </p>`,
      btn: {
        active: true,
        txt: `Learn more about the application`,
        url: `https://artworkslondon.com`,
      },
      img: {
        active: true,
        path: `al-graphic.png`,
        width: `100%`,
      },
    },
    {
      title: `Boilerplate API`,
      txt: `<p>
                Built with <strong>Node</strong>, <strong>Express</strong>, <strong>Prisma</strong>, <strong>MySQL</strong>, <strong>Jest</strong> and <strong>Typescript</strong>, the Boilerplate API is a kick starter for future projects. It handles basic server side user authentication and authorisation.
            </p>`,
      btn: {
        active: true,
        txt: `View the source code on GitHub`,
        url: `https://github.com/smnmtchll/API_Boilerplate_v1.0`,
      },
      img: {
        active: true,
        path: `api-snippet.png`,
        width: `100%`,
      },
    },
    {
      title: `Artworks Bidder`,
      txt: `<p>
                Created using the <strong>Ionic Framework</strong> and distributed through the Apple App Store, Artworks Bidder was a tool for auction attendees. It accurately calculated the total price they would have to pay after the addition of <a href="https://en.wikipedia.org/wiki/Buyer%27s_premium" target="_blank">buyers premium</a> based on the increasing hammer price in a live auction.
            </p>
            <p>
                The app was widely adopted by the contemporary commercial art sector with over 1500 downloads. It was removed from the App Store when Artworks London ceased trading.
            </p>`,
      btn: {
        active: false,
      },
      img: {
        active: true,
        path: `bidder-phone.png`,
        width: `70%`,
      },
    },
    {
      title: `Invoice Tracker`,
      txt: `<p>
                Among other things, I'm currently working on a basic invoice creation and tracking system for my wife's craft business. I'm working with <strong>React</strong> and <strong>NextJS</strong>, building out the backend from my Boilerplate API template.
            </p>`,
      btn: {
        active: true,
        txt: `Visit the macramé website`,
        url: `http://by-me.london`,
      },
      img: {
        active: true,
        path: `macrame.png`,
        width: `100%`,
      },
    },
    {
      title: `Portfolio Site`,
      txt: `<p>
                smnmtchll.com was built using <strong><a href="https://nextjs.org/" target="_blank">NextJS</a></strong> and <strong> <a href="https://react-bootstrap.github.io/" target="_blank"> React-Bootstrap</a></strong>. The full code base is available to view on <a href="https://github.com/smnmtchll/smnmtchll_portfolio" target="_blank">GitHub</a>.
            </p>`,
      btn: {
        active: true,
        txt: `View the source code`,
        url: `https://github.com/smnmtchll/smnmtchll_portfolio`,
      },
      img: {
        active: false,
      },
    },
  ];
  res.end(JSON.stringify(projects));
};
