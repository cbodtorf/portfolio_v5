import React from "react";

import bamboo from "../../images/bamboo-juices-logo.png"
import bamboo_mockup from "../../images/bamboo_mockup.jpg"
import sneaker from "../../images/sneaker-logo.jpg"
import sneaker_mockup from "../../images/sneaker_mockup.jpg"
import fritz from "../../images/fritz-logo.png"
import fritz_mockup from "../../images/fritz_mockup.jpg"
import sPittman from "../../images/spittman-logo.png"
import sPittman_mockup from "../../images/spittman_mockup.jpg"
import gigis from "../../images/gigis-logo.png"
import gigis_mockup from "../../images/gigis_mockup.jpg"
import lesetta from "../../images/lesetta-logo.png"
import lesetta_mockup from "../../images/lesetta_mockup.jpg"
import raven from "../../images/raven-logo.png"
import raven_mockup from "../../images/raven_mockup.jpg"
import dash from "../../images/dash-logo.jpg"
import dash_mockup from "../../images/dash_mockup.jpg"


const ProjectData = [
  {
    name: "Bamboo Juices",
    img_src: { bamboo },
    tech: ["javascript","css3","sass","shopify","html5","react","rails","ruby","heroku"],
    url: "http://bamboojuices.com",
    description: <p>
      A Full-stack ecommerce project built on Shopify.<br />
      This project consisted of a custom Shopify embedded app for the site admin to manage local delivery and pickup. This was built using Ruby on Rails and React, and hosted on Heroku. <br/>
      Outside of the core Shopify functionality, we implemented Local Delivery and pickup logic including custom carrier calculated rates based on store cutoff times and blackout dates.
      We created an editor to for product level metafields in order to designate bundles, ingredients, and benefits.
      Custom integration with a 3rd party Subscription Service, including Server based routines to our custom data was always up to date. <br />
      Additional work included legacy site migration or customers, subscriptions, and orders, which involved custom SQL database querying and restructring.
    </p>,
    mockup_src: bamboo_mockup,
  },
  {
    name: "Sneaker",
    img_src: { sneaker },
    tech: ["javascript","css3","sass","shopify","html5"],
    url: "http://sneakerchs.com",
    description: <p>
      A Front-end redesign built on Shopify.<br />
      We have worked hand in hand with Sneaker for a while creating immersive marketing campaigns with custom landing pages. Strategies include integrations with Google analytics and Mailchimp. <br />
      In December 2017 Sneaker rebranded with <a href="http://www.jfletcherdesign.com/">Jay Fletcher</a> <br />
      We were commissioned to redesign the Sneaker website to match the branding.
    </p>,
    mockup_src: sneaker_mockup,
  },
  {
    name: "Raven Roxanne",
    img_src: { raven },
    tech: ["javascript","css3","sass","shopify","html5"],
    url: "https://ravenroxanne.com/pages/botanical-series-screen-prints",
    description: <p>
      A Front-end ecommerce project utilizing some fun anitmations. The artist was releasing a series of screen prints and we wanted to detail the process of
      deconstructing a painting into layers of color for the screen printer.
    </p>,
    mockup_src: raven_mockup,
  },
  {
    name: "Fritz Porter",
    img_src: { fritz },
    tech: ["javascript","css3","sass","shopify","html5"],
    url: "https://fritzporter.com",
    description: <p>
      Fritz Porter Design Collective contacted us to develop an ecommerce experience for them on Shopify. <br />
      The Front-end project focued on connecting interior designers and the products they require.
    </p>,
    mockup_src: fritz_mockup,
  },
  {
    name: "Dash",
    img_src: { dash },
    tech: ["javascript","css3","sass","shopify","react","rails","ruby","heroku"],
    url: "",
    description: <p>
      A Shopify Embedded Application built with Rails and React.
      It empowers our clients to extend the notion of online retail by allowing them to sell perishable food items in a timely manner.
      We have built a custom dashboard to organize orders by Shipment Date to ensure that order are being delivered on time.
      The software integrates with Shopify and Recharge.
    </p>,
    mockup_src: dash_mockup,
  },
  {
    name: "Sara Pittman",
    img_src: { sPittman },
    tech: ["javascript","css3","sass","shopify","html5"],
    url: "https://sarapittmanstudio.com/",
    description: <p>
      A Front-end ecommerce project. Some fun code was implemented to analyze images used throughout the site and create a color pallate displayed at the top of the site.
    </p>,
    mockup_src: sPittman_mockup,
  },
  {
    name: "Gigi's Cupcakes",
    img_src: { gigis },
    tech: ["javascript","css3","sass","shopify","html5","react","rails","ruby","heroku"],
    url: "",
    description: <p>
      A Front-end ecommerce project for a brick and mortor Patisserie franchise testing out nationwide shipping from their Headquarters.
      The site utilizes an optimized version of our delivery app Dash. A Custom Store locator was created calling in franchise data, and integrating with
      local delivery/pickup apps OLO and ToGoOrder.
    </p>,
    mockup_src: gigis_mockup,
  },
  {
    name: "Lesetta",
    img_src: { lesetta },
    tech: ["javascript","css3","sass","shopify","html5"],
    url: "https://www.lesetta.com/",
    description: <p>
      A Front-end project built for the curation of artisnal goods and accessories from across the globe.
      The informational site has a fun animation on the landing page, and was built to support the future prospects of eccommerce as the entity grows.
    </p>,
    mockup_src: lesetta_mockup,
  }
]

export default ProjectData
