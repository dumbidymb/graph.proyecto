import { createConnection } from 'typeorm';

createConnection({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306'),
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'actors',
  entities: [
   
  ],
  synchronize: true,
  logging: true,
})
  .then(() => console.log('Conexión a la base de datos establecida'))
  .catch((error) => console.error('Error al conectar a la base de datos:', error));