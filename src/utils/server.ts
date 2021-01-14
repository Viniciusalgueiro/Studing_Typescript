import "reflect-metadata";
import './connection';
import { buildSchema } from "type-graphql"
import {ApolloServer} from 'apollo-server'

async function bootstrap() {
    const schema = await buildSchema({
        resolvers: [],
    });

    const server = new ApolloServer({schema});

    server.listen({ port: 4100 }, () => console.log("Running") );
}

bootstrap();