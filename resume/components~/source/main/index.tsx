import * as React from 'react';
import { MainSection } from './MainSection';
import { DatedExperience, DatedExperienceInput } from './DatedExperience';
import { SimpleExperienceInput, SimpleExperience } from './SimpleExperience';

const EXPERIENCES: DatedExperienceInput[] = [
    {
        start: new Date("8/24/2022"), end: new Date(),
        jobTitle: "Tech Lead / Senior Software Engineer",
        jobLocation: "Bellevue",
        employerName: "Flexport",
        teams: [
            {
                teamName: "Edge Services",
                technologies: ["TypeScript", "Rust", "GraphQL", "Node.js", "Envoy", "K8s", "AWS CloudMap", "Datadog"],
                contributions: [
                    "Architected unified API Gateway for Flexport. Lead team of 4 engineers to develop this",
                    "Championed operational excellence on the federated GraphQL team. Reduced client latency by 50%; improved client reliability from three 9s to four 9s.",
                    "Got cross company consensus on new dynamic service discovery standard using AWS CloudMap. This merged three competing standards at the company.",
                    "Brokered convergence of the two major competeing service infra frameworks at the company."
                ]
            },
            {
                teamName: "Frontend Infra",
                technologies: ["TypeScript", "GraphQL", "Next.js", "AWS ECS", "K8s", "Terraform", "Datadog"],
                contributions: [
                    "Architected microfrontends framework for Flexport. Lead team of 7 engineers to create this and successfully collaborated with my EM and skip EM to onboard three separate orgs",
                    "Convinced company to adopt PNPM as a JS dependency manager, TypeScript rather than Flow"
                ]
            }
        ]
    },
    {
        start: new Date("9/20/2021"), end: new Date("2/1/2022"),
        jobTitle: "Tech Lead / Senior Software Engineer",
        employerName: "Hulu",
        teams: [
            {
                teamName: "Flex",
                technologies: ["TypeScript", "GraphQL", "Node.js", "Express", "Spinnaker"],
                contributions: [
                    "Lobbied Hulu, Disney clients to adopt our Flex microservice; it vends cross-platform UI as data, allowing generic platform code and rapid experimentation by configuration",
                    "Architected migration of Flex from a RESTful API to GraphQL subgraph for the new company-wide federated GraphQL service created as part of the Hulu, Disney+ unification effort",
                    "Forged partnership w/ similar Disney team. We took over UI as data API, they i18n as a service"
                ]
            }
        ]
    },
    {
        start: new Date("9/25/2017"), end: new Date("9/15/2021"),
        jobTitle: "Software Development Engineer II",
        employerName: "Amazon",
        jobLocation: "Seattle",
        teams: [
            {
                teamName: "Fire TV",
                technologies: ["Java", "Kotlin", "Docker", "AWS", "DynamoDB"],
                contributions: [
                    "Designed, implemented microservice responsible for ingestion of IMDB movies and shows catalog"
                ]
            },
            {
                teamName: "Last Mile Identity",
                technologies: ["Java", "AWS", "Cognito", "Coral (RPC)", "Lambda"],
                contributions: [
                    "Extended OAuth microservice to support AuthN of various user types",
                    "Maintained role-based AuthZ (RBAC) microservice and guided system redesign"
                ]
            },
            {
                teamName: "Last Mile Account Management",
                technologies: ["Java", "AWS", "Coral (RPC)", "Elasticsearch", "React"],
                contributions: [
                    "Designed and implemented microservices as part of legacy monolith rearchitecture",
                    "Created hybrid web-app views in React"
                ]
            },
            {
                teamName: "Last Mile Risk and Compliance",
                technologies: ["Java", "AWS", "Angular", "mTLS", "Coral (RPC)", "SQL"],
                contributions: [
                    "Integrated background check microservice with external vendor REST APIs",
                    "Microservices for in-app facial recognition of package deliverers (en-route ID check)",
                    "Created data warehousing pipelines from AWS Dynamo DB tables to AWS Redshift",
                    "Automated code deployment (CI/CD pipeline building)"
                ]
            },
            {
                teamName: "Payments Experience",
                technologies: ["Scala", "Java", "jQuery", "SCSS", "Coral (RPC)"],
                contributions: [
                    "Designed and implemented one-time-password verification for payment screens",
                    "Integrated with away teams' authentication services",
                ]
            }
        ]
    },
    {
        start: new Date("8/01/2016"), end: new Date("9/22/2017"),
        jobTitle: "Lead Software Engineer",
        employerName: "Leasera",
        jobLocation: "Seattle",
        teams: [
            {
                technologies: ["TypeScript", "GraphQL", "React", "React Native", "Ruby on Rails", "Jenkins", "AWS", "MySQL"],
                contributions: [
                    "Built Ruby on Rails ERB / jQuery views then later migrated these to React + GraphQL",
                    "Designed MySQL schema. Optimized DB migrations, SQL transactions, ORM code",
                    "Maintained server infrastructure; configured EC2, Jenkins, Nginx, MySQL, Redis",
                    "Created mobile application using React Native, Redux, and Apollo GraphQL",
                    "Integrated 3rd-party APIs such as Stripe, Zillow, TransUnion, Twilio, Mailgun, etc.",
                    "Lead team in goal planning and managing delivery timelines. Reported sprint progress to CEO"
                ]
            }
        ]
    },
    {
        start: new Date('8/15/2014'), end: new Date('6/24/2016'),
        jobTitle: 'Junior Software Engineer',
        employerName: "ThruHealth",
        jobLocation: "Bellevue",
        teams: [
            {
                technologies: ["PHP", "Laravel", "Java", "SCSS", "jQuery", "C#", "Angular"],
                contributions: [
                    'Created company marketing website and blog with CSS, jQuery, and PHP',
                    'Constructed web crawlers to pull online health-care data ontologies using C#',
                    'Wrote utilities to parse and normalize HL7 electronic health records using Java',
                    'Created mobile applications using Ionic 1.0'
                ]
            }
        ]
    },
    /*{
        start: new Date('8/12/2014'), end: new Date('6/20/2015'),
        jobTitle: 'Web Development Contractor',
        employerName: "NSD",
        jobLocation: "Kenmore, WA",
        teams: [
            {
                technologies: ["Laravel PHP", "CSS", "MySQL", "AWS"],
                contributions: [
                    `Built web app to survey Inglemoor High School's International Baccalaureate (IB) students on education quality then generated report for IB department and Northshore School District (NSD).`
                ]
            }
        ]
    }*/
];

const OPEN_SOURCE: SimpleExperienceInput[] = [
    /*{
        title: 'Apollo GraphQL Subscriptions',
        description: 'Authored the generic GraphQL subscription AsyncIterator for Apollo in TypeScript. Used implicitly by many existing open-source Apollo GraphQL subscription implementations (Redis, PostgreSQL, Kafka, RabbitMQ, etc.).',
        link: {
            text: "https://github.com/apollographql/graphql-subscriptions/pull/78",
            href: 'https://github.com/apollographql/graphql-subscriptions/pull/78'
        }
    },
    {
        title: "TypeScript Monorepo",
        description: "Tool for automating maintenance of typescript Yarn v2 monorepos (ie. Skoville); it generates tsconfig.json project-references and package.json based on config templates re-used between packages.",
        link: {
            text: "https://www.npmjs.com/package/@isomorphic-typescript/ts-monorepo",
            href: "https://www.npmjs.com/package/@isomorphic-typescript/ts-monorepo"
        }
    },
    {
        title: "Skoville",
        description: "Webpack-dev-server alternative built using TypeScript and GraphQL. Enables webpack HMR for web, node.js, and react native. Broken into several npm packages allowing users to customize networking and JS runtimes.",
        link: {
            text: "https://github.com/skoville/webpack-hot-module-replacement",
            href: 'https://github.com/skoville/webpack-hot-module-replacement'
        }
    },
    {
        title: "ts-isomorphic-gql",
        description: "A GraphQL library which allows completely type-safe querying from the front-end and schema resolution on the back-end natively in TypeScript without requiring code gen or extra IDE extensions",
        link: {
            text: "https://github.com/isomorphic-typescript/ts-isomorphic-gql",
            href: "https://github.com/isomorphic-typescript/ts-isomorphic-gql"
        }
    },*/
];

const SIDE_HUSTLE: DatedExperienceInput[] = [
    /*{
        start: new Date("1/1/2022"), end: new Date("5/5/2022"),
        jobTitle: "Co-Founder, CTO",
        employerName: "Space Bums",
        teams: [
            {
                technologies: ["React", "Node.js", "TypeScript", "Nx", "Solana", "Rust", "GCP", "Next.js"],
                contributions: [
                    "Acted as lead architect, TPM, PM, hiring manager to assemble team of 4 software engineers",
                    "Sold 10,000 space-themed Solana-based NFTs for $1.5m to over 6,000 customers",
                    "Lead dev team in shipping online web 3 DAO voting NFT staking platform for NFT holders"
                ]
            }
        ]
    },
    {
        start: new Date("5/15/2017"), end: new Date("9/23/2017"),
        jobTitle: "Co-Founder, CEO, CTO",
        employerName: "ConsiderEat",
        jobLocation: "Seattle",
        teams: [
            {
                technologies: ["React", "React Native", "Apollo GraphQL"],
                contributions: [
                    "Co-founded a short-lived start up with college classmates that allows restaurants to sell leftover food for a discount price before closing time using an app."
                ]
            }
        ]
    },*/
];

export const MainContent: React.FC = () => <>
    <MainSection>
        {
            EXPERIENCES.map((experience, index) => <div key={index}>
                <DatedExperience {...experience} />
            </div>)
        }
    </MainSection>
    {OPEN_SOURCE.length > 0 && <MainSection header="Notable Open Source Contributions">
        {
            OPEN_SOURCE.map((contribution, index) => <div key={index}>
                <SimpleExperience {...contribution} />
            </div>)
        }
    </MainSection>}
    {SIDE_HUSTLE.length > 0 && <MainSection header="Entrepreneurship">
        {
            SIDE_HUSTLE.map((sideHustle, index) => <div key={index}>
                <DatedExperience {...sideHustle} />
            </div>)
        }
    </MainSection>}
</>;