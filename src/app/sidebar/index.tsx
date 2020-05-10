import * as React from 'react';
import { SidebarSection } from './SidebarSection';
import { KeyValue } from './KeyValue';
import { SkillList } from './SkillList';

export const Sidebar: React.FC = () => <div>
    <SidebarSection header="Contact Info">
        <KeyValue k="Phone" v="(425) 471-8377"/>
        <KeyValue k="Email" v="alex.l.leung@gmail.com" link="mailto:alex.l.leung@gmail.com"/>
        <KeyValue k="Location" v="Seattle, WA 98103"/>
    </SidebarSection>
    <SidebarSection header="Public Profiles">
        <KeyValue k="GitHub" v="github.com/AlexLeung" link="https://github.com/AlexLeung" />
        <KeyValue k="LinkedIn" v="linkedin.com/in/alex-l-leung" link="https://linkedin.com/in/alex-l-leung" />
    </SidebarSection>
    <SidebarSection header="Computer Science">
        <SkillList skills={['Functional Programming', 'DRY', 'Design Patterns', 'SOLID', 'Service Oriented Architecture']} />
    </SidebarSection>
    <SidebarSection header="Front-End">
        <SkillList skills={['React', 'React Hooks', 'React Native', 'ReactXP', 'Vue', 'Electron', 'MobX', 'Redux', 'Angular', 'Ionic', 'jQuery', 'HTML5', 'SCSS']} />
    </SidebarSection>
    <SidebarSection header="Server-Side">
        <SkillList skills={['Node.js', 'Deno', 'Java', 'Scala', 'Rust', 'Golang', 'Haskell', 'Python', 'C#', 'C', 'C++', 'VB', 'Ruby', 'Laravel', 'PostreSQL', 'SQLite', 'Neo4j', 'MongoDB', 'RethinkDB', 'Redis', 'Kafka']} />
    </SidebarSection>
    <SidebarSection header="Full-Stack">
        <SkillList skills={['TypeScript', 'Webpack', 'Web Workers']} />
    </SidebarSection>
    <SidebarSection header="Dev-Ops">
        <SkillList skills={['Jenkins', 'Pulumi', 'Kubernetes', 'Infrastructure as Code', 'Docker', 'Linux', 'Nginx', 'Apache', 'Prometheus', 'AWS']} />
    </SidebarSection>
    <SidebarSection header="Protocols">
        <SkillList skills={['gRPC', 'GraphQL', 'REST', 'TLS']} />
    </SidebarSection>
    <SidebarSection header="GraphQL">
        <SkillList skills={['TypeGraphQL', 'Apollo', 'Hasura', 'Join Monster', 'Prisma']} />
    </SidebarSection>
</div>;