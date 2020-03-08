import * as React from 'react';
import { MainSection } from './MainSection';
import { DatedExperience, DatedExperienceInput } from './DatedExperience';
import { SimpleExperienceInput, SimpleExperience } from './SimpleExperience';

const EXPERIENCES: DatedExperienceInput[] = [
    {
        start: "01/07/2019", end: "Present",
        name: "Software Development Engineer (L4)",
        subheadings: [
            "Amazon.com, Inc.",
            "Seattle, WA",
            ["Java", "AWS", "React", "Angular", "mTLS"].join(", ")
        ],
        contributions: [
            "Integrated Background Check microservice with vendor REST API",
            "Created data warehousing pipelines from AWS Dynamo DB tables to AWS Redshift",
            "Enabled in-app facial recognition of package deliverers (live ID check during shift)",
            "Rotated as on-call once every 1.5 months, resolving numerous high-sev events",
            "Refactored monolithic services into AWS Lambda-based microservices"
        ]
    },
    {
        start: "09/25/2017", end: "12/15/2017",
        name: "Software Development Engineer Intern",
        subheadings: [
            "Amazon.com, Inc.",
            "Seattle, WA",
            ["Scala", "Java", "jQuery", "SCSS"].join(", ")
        ],
        contributions: [
            "Developed and documented one-time-password verification for payment screens.",
            "Integrated with internal authentication services using Scala and Java APIs.",
            "Added customer phone number view to meet last-minute requirements change."
        ]
    },
    {
        start: "08/01/2016", end: "09/22/2017",
        name: "Lead Software Engineer",
        subheadings: [
            "Leasera, LLC",
            "Seattle, WA",
            ["TypeScript", "GraphQL", "React", "RoR", "Jenkins", "AWS"].join(", ")
        ],
        contributions: [
            "Maintained views written in SCSS, Bootstrap, jQuery, and Ruby on Rails ERB.",
            "Created new views as React components using Redux and Apollo GraphQL.",
            "Designed MySQL schema. Optimized DB migrations, SQL transactions, ORM code.",
            "Maintained server infrastructure; configured EC2, Jenkins, Nginx, MySQL, Redis.",
            "Wrote mobile application using React Native, Redux, and Apollo GraphQL.",
            "Integrated 3rd-party APIs such as Stripe, Zillow, TransUnion, Twilio, Mailgun, etc.",
            "Lead team in goal setting and deadline planning. Reported sprint progress to CEO."
        ]
    },
    {
        start: '08/15/2014', end: '06/24/2016',
        name: 'Junior Software Engineer',
        subheadings: [
            "ThruHealth, LLC",
            "Bellevue, WA",
            ["Laravel", "Java", "SCSS", "jQuery", "C#", "Angular"].join(", ")
        ],
        contributions: [
            'Created company marketing website and blog with CSS, jQuery, and PHP.',
            'Constructed web crawlers to pull online health-care data ontologies using C#.',
            'Wrote utilities to parse and normalize HL7 electronic health records using Java.',
            'Created mobile applications using Ionic 1.0.'
        ]
    }
];

const OPEN_SOURCE: SimpleExperienceInput[] = [
    {
        title: "Skoville",
        description: "Webpack-dev-server alternative I created using TypeScript and GraphQL to enable webpack HMR for both web and node.js. Broken into several npm packages to allow plug-n-play of networking implementation.",
        link: {
            text: "github.com/skoville/webpack-hot-module-replacement",
            href: 'https://github.com/skoville/webpack-hot-module-replacement'
        }
    },
    {
        title: "TypeScript Monorepo",
        description: "Lerna alternative I built to manage Skoville; it auto-generates tsconfig.json with project references.",
        link: {
            text: "@isomorphic-typescript/ts-monorepo NPM package",
            href: "https://www.npmjs.com/package/@isomorphic-typescript/ts-monorepo"
        }
    },
    /*
    {
        title: "Isomorphic TS GraphQL",
        description: "A project I'm planning to start; a TypeGraphQL alternative where the schema is written in TypeScript and shared between server and client. Client is auto-generated, while server code implements the interfaces"
    },
    */
    {
        title: 'Apollo GraphQL Subscriptions',
        description: 'Authored the generic TypeScript subscription utility for Apollo GraphQL repo used by all Apollo GraphQL subscription implementations (Redis, AWS SNS, Postgres, etc.).',
        link: {
            text: "github.com/apollographql/graphql-subscriptions/pull/78",
            href: 'https://github.com/apollographql/graphql-subscriptions/pull/78'
        }
    }
];

const SIDE_HUSTLE: DatedExperienceInput[] = [
    {
        start: "05/15/2017", end: "09/23/2017",
        name: "ConsiderEat",
        subheadings: [
            "ConsiderEat",
            "Seattle, WA",
            ["React Native", "Apollo GraphQL"].join(", ")
        ],
        contributions: [
            "A short-lived start-up I co-founded with college classmates that allows restaurants to sell leftover food for a discount price over an app before closing time"
        ]
    },
    {
        start: '8/12/2014', end: '6/20/2015',
        name: 'International Baccalaureate (IB) Surveys',
        subheadings: [
            "Northshore School District",
            "Bothell, WA",
            "Laravel, CSS"
        ],
        contributions: [
            `Website I created for my high school’s IB department to survey students on education quality and generate reports for school's IB department heads.`
        ]
    }
];

export const MainContent: React.FC = () => <>
    <MainSection header="Industry Experience">
        {
            EXPERIENCES.map((experience, index) => <div key={index}>
                <DatedExperience {...experience} />
            </div>)
        }
    </MainSection>
    <MainSection header="Open Source Contribution">
        {
            OPEN_SOURCE.map((contribution, index) => <div key={index}>
                <SimpleExperience {...contribution} />
            </div>)
        }
    </MainSection>
    <MainSection header="Self-Employment">
        {
            SIDE_HUSTLE.map((sideHustle, index) => <div key={index}>
                <DatedExperience {...sideHustle} />
            </div>)
        }
    </MainSection>
</>;