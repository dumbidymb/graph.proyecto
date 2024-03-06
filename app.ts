import express, { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { readFileSync } from 'fs';
import { join } from 'path';
import resolvers from './src/graphql/resolvers';
import { createContext } from './src/presentation/middleware/auth.middleware';
import dotenv from 'dotenv';
dotenv.config();

const app: Application = express();

// Lee el contenido del archivo typesDefs.graphql.ts en la carpeta 'presentation/types'
const typesDefsPath = join(__dirname, 'proyecto','src', 'presentation', 'types', 'typesDefs.graphql.ts');

// Utiliza ts-node para cargar directamente el archivo TypeScript
const typesDefs = require('ts-node').register().loadFile(typesDefsPath);

const schema = makeExecutableSchema({
  typeDefs: typesDefs,
  resolvers: resolvers as any,
});

const server = new ApolloServer({
  schema,
  context: createContext,
});

server.applyMiddleware({ app } as any);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Servidor Apollo en http://localhost:${PORT}/graphql`);
});
