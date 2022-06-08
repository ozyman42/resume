import * as React from 'react';
import { KeyValue } from './KeyValue';
import { SkillList } from './SkillList';
import { FaMobileAlt, FaEnvelope, FaGlobe, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MAIN_THEME_EMPHASIS_COLOR, MAIN_THEME_LEAST_EMPHASIS_COLOR, MAIN_THEME_LESS_EMPHASIS_COLOR, MIN_FONT_SIZE } from '../themes';
import { Text } from '../Text';

const Header: React.FC<{header: string;}> = props => 
<p style={{color: MAIN_THEME_EMPHASIS_COLOR, fontWeight: 'bold', textTransform: 'uppercase', fontSize: MIN_FONT_SIZE, margin: '20px 10px 10px 10px'}}><Text text={props.header} /></p>

const Interests: React.FC<{interests: string[]}> = props => 
<div style={{color: MAIN_THEME_LESS_EMPHASIS_COLOR, fontSize: MIN_FONT_SIZE}}>
    <ul style={{listStyle: 'disc inside', marginLeft: 10}}>
    {props.interests.map((interest, index) =>
        <li key={index} style={{padding: '2px 0'}}><Text text={interest} /></li>
    )}
    </ul>
</div>

export const Sidebar: React.FC = () => <div style={{padding: 5}}>
    <div style={{padding: '10px 10px 0 10px'}}>
        <KeyValue k={FaMobileAlt} v="(425) 471-8377"/>
        <KeyValue k={FaEnvelope} v="alex.l.leung@gmail.com" link="mailto:alex.l.leung@gmail.com"/>
        <KeyValue k={FaGlobe} v="Seattle, WA 98105"/>
        <KeyValue k={FaGithub} v="github.com/ozyman42" link="https://github.com/ozyman42" />
        <KeyValue k={FaLinkedin} v="linkedin.com/in/alex-l-leung" link="https://linkedin.com/in/alex-l-leung" />
    </div>
    <Header header="Technical Skills"/>
    <SkillList header="Maintainability" skills={['Functional Programming', 'DRY', 'Design Patterns', 'SOLID', 'Service Oriented Architecture']} />
    <SkillList header="Front-End" skills={['React', 'React Native', 'Vue', 'Electron', 'MobX', 'Redux', 'Zustand', 'Ionic', 'Angular', 'jQuery', 'HTML', 'SCSS', 'Tailwind', 'Webpack', 'Web Workers']} />
    <SkillList header="Server-Side" skills={['Node.js', 'Kafka', 'PostgreSQL', 'SQLite', 'Neo4j', 'Cockroach DB', 'Redis', 'DynamoDB', 'Serverless (ex. AWS Lambda)']} />
    <SkillList header="Languages" skills={['TypeScript', 'Java', 'Kotlin', 'Scala', 'Rust', 'Ruby', 'Solidity', 'Golang', 'Haskell', 'Python', 'C#', 'C', 'C++', 'VB', 'Ruby', 'PHP', 'SQL']} />
    <SkillList header="Dev Infrastructure" skills={['AWS', 'GCP', 'Jenkins', 'Pulumi', 'K8s', 'IaC', 'CDK', 'Terraform', 'Docker', 'Linux', 'Nginx', 'Apache', 'Prometheus', 'Spinnaker']} />
    <SkillList header="Protocols" skills={['gRPC', 'GraphQL', 'REST', 'TLS']} />
    <SkillList header="Crypto / AuthZN" skills={['OAuth2', 'Asymmetric Key Crypto', 'Digital Signatures']} />
    <SkillList header="Web 3" skills={['EVM (Solidity)', 'Solana']} />
    <Header header="Personal Interests"/>
    <Interests interests={["Macro Economics", "History", "Finance", "Web 3 / Smart Contracts", "Psychology"]} />
</div>;