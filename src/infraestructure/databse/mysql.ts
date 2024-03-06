import { createConnection } from 'typeorm';
import dotenv from 'dotenv';
dotenv.config();


createConnection({
    type: 'mysql',
    host: process.env.DB_HOST ,
    port: parseInt(process.env.DB_PORT || '3306'),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [
      // Importa las entidades aquí
    ],
    synchronize: true,
    logging: true,
  })
    .then(() => console.log('Conexión a la base de datos establecida'))
    .catch((error) => console.error('Error al conectar a la base de datos:', error));