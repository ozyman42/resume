import * as React from 'react';
const spelling = require('spelling');
const rawDictionary = require('spelling/dictionaries/en_US');

const dictionary = spelling(rawDictionary);

const additionalAllowedWords: string[] = [
    "—", '+',
    'contractor', 'report', 'microservice', 'workspace', 'runtime',
    'record', 'monorepo', 'dev', 'etc.', "into", "config", "CTO", 'per', 'discount', 'recognition', 'rearchitecture',
    // Proper nouns
    "LinkedIn", "Inglemoor", "Northshore", "Zillow", "Twilio", "Mailgun", "TransUnion",
    // Technologies
    'GraphQL', 'AWS', 'Redshift', 'gRPC', 'webpack', 'Skoville', "RPC", "RabbitMQ", "Redis", "PostgreSQL",
    "Redux", "Vue", "MobX", "jQuery", "HTML5", "JS", "SCSS", "C#", "PHP", "SQLite", "Neo4j", "C++", "Golang",
    "Haskell", "Deno", "Node.js", "MongoDB", "RethinkDB", "Pulumi", "Kubernetes", "Docker", "Nginx", "TLS", "mTLS",
    "TypeGraphQL", "Hasura", "Prisma", "Laravel", "CSS", "MySQL", "HL7", "HMR", "NPM", "package.json", "tsconfig.json",
    "Lerna", "AsyncIterator", "v2", "ReactXP", "ORM", "ERB", "EC2", "CI/CD", "Elasticsearch"
];
additionalAllowedWords.forEach(word => dictionary.insert(word));

function isValidWord(word: string) {
    word = word.split("(").join("").split(")").join("");

    if (word.includes("-")) {
        const pieces = word.split("-");
        for (const piece of pieces) {
            if (!isValidWord(piece)) {
                return false;
            }
        }
        return true;
    }

    function removeEndingCharIfEndsWith(...chars: string[]) {
        for (const char of chars) {
            if (word.endsWith(char)) word = word.substring(0, word.length - 1);
        }
    }
    removeEndingCharIfEndsWith(',', '.', ';');

    function lookupWithoutEnding(...endings: string[]) {
        for (const ending of [...endings, ""]) {
            if (word.endsWith(ending)) {
                if (dictionary.lookup(word.substring(0, word.length - ending.length)).found) {
                    return true;
                }
            }
        }
        return false;
    }
    if(lookupWithoutEnding("'s", "s", "d", "ed", 'ly', 'ing')) return true;

    if (word.endsWith("ies") && dictionary.lookup(word.substring(0, word.length - 3) + "y")) return true;
    if (word.endsWith("ing") && dictionary.lookup(word.substring(0, word.length - 3) + "e")) return true;

    return false;
}

isValidWord

export const Text: React.FC<{text: string, splitBy?: string}> = ({text, splitBy = " "}) =>
<>
    {
        text.split(splitBy)
            .map((word, index) =>
                isValidWord(word) ?
                (index > 0 ? splitBy : "") + word
                :
                <span style={{backgroundColor: 'yellow', color: 'black'}} key={index}>
                    {index > 0 ? <>&nbsp;</> : null}
                    {word}
                </span>
            )
            
    }
</>;