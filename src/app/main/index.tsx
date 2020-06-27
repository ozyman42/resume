import * as React from 'react';
import { MainSection } from './MainSection';
import { DatedExperience, DatedExperienceInput } from './DatedExperience';
import { SimpleExperienceInput, SimpleExperience } from './SimpleExperience';

const EXPERIENCES: DatedExperienceInput[] = [
    {
        start: "9/25/2017", end: "Present",
        jobTitle: "Software Development Engineer",
        employerName: "Amazon.com",
        jobLocation: "Seattle, WA",
        teams: [
            {
                teamName: "Flex Account Management Team",
                technologies: ["Java", "AWS", "React", "Coral (RPC)", "Elasticsearch"],
                contributions: [
                    "Designed, implemented microservices in rearchitecture of legacy monoliths",
                    "Created hybrid web-app views in React"
                ]
            },
            {
                teamName: "Flex Risk Compliance Team",
                technologies: ["Java", "AWS", "Angular", "mTLS", "Coral (RPC)", "SQL"],
                contributions: [
                    "Integrated background check microservice with external vendor REST APIs",
                    "Microservices for in-app facial recognition of package deliverers (en-route ID check)",
                    "Created data warehousing pipelines from AWS Dynamo DB tables to AWS Redshift",
                    "Rotated as on-call once per month, resolving numerous high-severity events",
                    "Automated code deployment (CI/CD pipeline building)"
                ]
            },
            {
                teamName: "Payments Experience Team",
                technologies: ["Scala", "Java", "jQuery", "SCSS", "Coral (RPC)"],
                contributions: [
                    "Developed and documented one-time-password verification for payment screens.",
                    "Integrated with internal authentication services using Scala and Java APIs.",
                ]
            }
        ]
    },
    {
        start: "8/01/2016", end: "9/22/2017",
        jobTitle: "Lead Software Engineer",
        employerName: "Leasera.com",
        jobLocation: "Seattle, WA",
        teams: [
            {
                teamName: "core team",
                technologies: ["TypeScript", "GraphQL", "React", "Ruby on Rails", "Jenkins", "AWS", "MySQL"],
                contributions: [
                    "Maintained views written in SCSS, Bootstrap, jQuery, and Ruby on Rails ERB.",
                    "Created new views as React components using Redux and Apollo GraphQL.",
                    "Designed MySQL schema. Optimized DB migrations, SQL transactions, ORM code.",
                    "Maintained server infrastructure; configured EC2, Jenkins, Nginx, MySQL, Redis.",
                    "Created mobile application using React Native, Redux, and Apollo GraphQL.",
                    "Integrated 3rd-party APIs such as Stripe, Zillow, TransUnion, Twilio, Mailgun, etc.",
                    "Lead team in goal setting and deadline planning. Reported sprint progress to CEO."
                ]
            }
        ]
    },
    {
        start: '8/15/2014', end: '6/24/2016',
        jobTitle: 'Junior Software Engineer',
        employerName: "ThruHealth, LLC",
        jobLocation: "Bellevue, WA",
        teams: [
            {
                teamName: 'core team',
                technologies: ["Laravel", "Java", "SCSS", "jQuery", "C#", "Angular"],
                contributions: [
                    'Created company marketing website and blog with CSS, jQuery, and PHP.',
                    'Constructed web crawlers to pull online health-care data ontologies using C#.',
                    'Wrote utilities to parse and normalize HL7 electronic health records using Java.',
                    'Created mobile applications using Ionic 1.0.'
                ]
            }
        ]
    }
];

const OPEN_SOURCE: SimpleExperienceInput[] = [
    {
        title: 'Apollo GraphQL Subscriptions',
        description: 'Authored the generic GraphQL subscription AsyncIterator for Apollo in TypeScript. Used implicitly by many existing open-source Apollo GraphQL subscription implementations (Redis, PostgreSQL, Kafka, RabbitMQ, etc.).',
        link: {
            text: "https://github.com/apollographql/graphql-subscriptions/pull/78",
            href: 'https://github.com/apollographql/graphql-subscriptions/pull/78'
        }
    },
    {
        title: "Skoville",
        description: "Webpack-dev-server alternative I am actively developing using TypeScript and gRPC. Enables webpack HMR for web and node.js. Broken into several npm packages allowing users to customize networking and JS runtimes.",
        link: {
            text: "https://github.com/skoville/webpack-hot-module-replacement",
            href: 'https://github.com/skoville/webpack-hot-module-replacement'
        }
    },
    {
        title: "TypeScript Monorepo",
        description: "Lerna alternative I built for TypeScript monorepos (ex. Skoville); it generates tsconfig.json project-references and package.json based on config templates re-used between packages. Extends Yarn v2 (Berry) workspaces.",
        link: {
            text: "https://www.npmjs.com/package/@isomorphic-typescript/ts-monorepo",
            href: "https://www.npmjs.com/package/@isomorphic-typescript/ts-monorepo"
        }
    },
    /*
    {
        title: "Isomorphic TS GraphQL",
        description: "A project I'm planning to start; a TypeGraphQL alternative where the schema is written in TypeScript and shared between server and client. Client is auto-generated, while server code implements the interfaces"
    },
    */
];

const SIDE_HUSTLE: DatedExperienceInput[] = [
    {
        start: "5/15/2017", end: "9/23/2017",
        jobTitle: "Co-Founder, CEO, CTO",
        employerName: "ConsiderEat",
        jobLocation: "Seattle, WA",
        teams: [
            {
                teamName: "core team",
                technologies: ["React", "React Native", "Apollo GraphQL"],
                contributions: [
                    "Co-founded a short-lived start up with college classmates that allows restaurants to sell leftover food for a discount price before closing time using an app."
                ]
            }
        ]
    },
    {
        start: '8/12/2014', end: '6/20/2015',
        jobTitle: 'Web Development Contractor',
        employerName: "NSD",
        jobLocation: "Kenmore, WA",
        teams: [
            {
                teamName: "core team",
                technologies: ["Laravel PHP", "CSS", "MySQL", "AWS"],
                contributions: [
                    `Built website for Inglemoor High School's International Baccalaureate department as a Northshore School District contractor to survey students on education quality and generate reports for department and district leadership.`
                ]
            }
        ]
    }
];

export const MainContent: React.FC = () => <>
    <MainSection header="Employment">
        {
            EXPERIENCES.map((experience, index) => <div key={index}>
                <DatedExperience {...experience} />
            </div>)
        }
    </MainSection>
    <MainSection header="Open Source">
        {
            OPEN_SOURCE.map((contribution, index) => <div key={index}>
                <SimpleExperience {...contribution} />
            </div>)
        }
    </MainSection>
    <MainSection header="Entrepreneurship">
        {
            SIDE_HUSTLE.map((sideHustle, index) => <div key={index}>
                <DatedExperience {...sideHustle} />
            </div>)
        }
    </MainSection>
</>;