import * as React from 'react';
import { MainSection } from './MainSection';
import { DatedExperience, DatedExperienceInput } from './DatedExperience';
import { SimpleExperienceInput, SimpleExperience } from './SimpleExperience';

const EXPERIENCES: DatedExperienceInput[] = [
    {
        start: '8/15/2014', end: '6/24/2016',
        name: 'Junior Software Engineer',
        subheadings: [
            "ThruHealth, LLC",
            "Bellevue, WA"
        ],
        contributions: [
            'Authored and maintained marketing website and blog with CSS, jQuery, and PHP.',
            'Developed multiple views using CSS, Bootstrap, jQuery, and Laravel Blade.',
            'Constructed web crawlers to pull online health-care data ontologies using C#.',
            'Wrote utilities to parse and normalize HL7 electronic health records using Java.',
            'Created mobile applications using Ionic 1.0.'
        ]
    }
];

const OPEN_SOURCE: SimpleExperienceInput[] = [
    {
        title: "Skoville",
        description: "Webpack-dev-server alternative I created to enable webpack hot-module-replacement for both web and node.js applications. Written in TypeScript and GraphQL. Broken into multiple packages to allow plug-and-play of networking implementation",
        link: {
            text: "github.com/skoville/webpack-hot-module-replacement",
            href: 'https://github.com/skoville/webpack-hot-module-replacement'
        }
    },
    {
        title: "TypeScript Monorepo",
        description: "Lerna alternative I built which integrates auto-generates tsconfig.json files with TypeScript project references enabled. Built this to manage Skoville.",
        link: {
            text: "@isomorphic-typescript/ts-monorepo NPM package",
            href: "https://www.npmjs.com/package/@isomorphic-typescript/ts-monorepo"
        }
    },
    {
        title: "Isomorphic TS GraphQL",
        description: "A project I'm planning to start; a TypeGraphQL alternative where the schema is written in TypeScript and shared between server and client. Client is auto-generated, while server code implements the interfaces"
    },
    {
        title: 'Apollo GraphQL Subscriptions',
        description: 'Authored the generic TypeScript subscription implementation to Apollo GraphQL repo used by all Apollo GraphQL subscription implementations (Redis, AWS SNS, Postgres, etc.).',
        link: {
            text: "github.com/apollographql/graphql-subscriptions/pull/78",
            href: 'https://github.com/apollographql/graphql-subscriptions/pull/78'
        }
    }
];

const SIDE_HUSTLE: DatedExperienceInput[] = [
    {
        start: '8/12/2014', end: '6/20/2015',
        name: 'IB Surveys',
        subheadings: [],
        contributions: [
            `A website I created for my high school’s International Baccalaureate (IB) program to survey students on education quality and generate reports for school staff. Built using CSS and Laravel.`
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
    <MainSection header="Side-Hustle">
        {
            SIDE_HUSTLE.map((sideHustle, index) => <div key={index}>
                <DatedExperience {...sideHustle} />
            </div>)
        }
    </MainSection>
</>;