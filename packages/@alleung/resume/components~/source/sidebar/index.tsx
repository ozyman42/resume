import * as React from 'react';
import { SidebarSection } from './SidebarSection';
import { KeyValue } from './KeyValue';
import { SkillList } from './SkillList';

export const Sidebar: React.FC = () => <div>
    <SidebarSection header="Me">
        <KeyValue k="Phone" v="(425) 471-8377"/>
        <KeyValue k="Email" v="alex.l.leung@gmail.com" link="mailto:alex.l.leung@gmail.com"/>
        <KeyValue k="Location" v="Seattle, WA 98105"/>
        <KeyValue k="GitHub" v="https://github.com/AlexLeung" link="https://github.com/AlexLeung" />
        <KeyValue k="LinkedIn" v="https://linkedin.com/in/alex-l-leung" link="https://linkedin.com/in/alex-l-leung" />
    </SidebarSection>
    <SidebarSection header="Maintainability">
        <SkillList skills={['Functional Programming', 'DRY', 'Design Patterns', 'SOLID', 'Service Oriented Architecture']} />
    </SidebarSection>
    <SidebarSection header="Front-End">
        <SkillList skills={['React', 'React Native', 'ReactXP', 'Vue', 'Electron', 'MobX', 'Redux', 'Ionic', 'Angular', 'jQuery', 'HTML5', 'SCSS', 'Webpack', 'Web Workers']} />
    </SidebarSection>
    <SidebarSection header="Server-Side">
        <SkillList skills={['Node.js', 'Deno', 'Kafka', 'PostgreSQL', 'SQLite', 'Neo4j', 'RethinkDB', 'Redis', 'DynamoDB', 'Serverless (Lambdas)']} />
    </SidebarSection>
    <SidebarSection header="Languages">
        <SkillList skills={['TypeScript', 'Java', 'Kotlin', 'Scala', 'Rust', 'Golang', 'Haskell', 'Python', 'C#', 'C', 'C++', 'VB', 'Ruby', 'PHP', 'SQL']} />
    </SidebarSection>
    <SidebarSection header="Dev-Ops">
        <SkillList skills={['AWS', 'Jenkins', 'Pulumi', 'Kubernetes', 'IaC', 'CDK', 'Terraform', 'Docker', 'Linux', 'Nginx', 'Apache', 'Prometheus']} />
    </SidebarSection>
    <SidebarSection header="Protocols">
        <SkillList skills={['gRPC', 'GraphQL', 'REST', 'TLS']} />
    </SidebarSection>
    <SidebarSection header="GraphQL">
        <SkillList skills={['TypeGraphQL', 'Apollo', 'Hasura', 'Join Monster', 'Prisma']} />
    </SidebarSection>
</div>;