import "reflect-metadata";
import './connection';
import { buildSchema } from "type-graphql"
import {ApolloServer} from 'apollo-server'
import CategoryResolver from "../graphql/category/CategoryResolver";
import VideoResolver from "../Video/VideoResolver";

async function bootstrap() {
    const schema = await buildSchema({
        resolvers: [CategoryResolver, VideoResolver],
    });

    const server = new ApolloServer({schema});

    server.listen({ port: 4100 }, () => console.log("Running") );
}

bootstrap();