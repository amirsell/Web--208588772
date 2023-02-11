import dotenv from 'dotenv'
dotenv.config()

const { env } = process

export const generalConfig = {
  serviceName: env.SERVICE_NAME || 'pizza-backend',
  nodeEnv: env.NODE_ENV
}

export const serverConfig = {
  servicePort: env.PORT || 3000,
}

export const authConfig = {
  jwtSecret: env.JWT_SECRET || 'very-secret',
}

export const dbConfig = {
    host: env.DB_PG_HOST || "localhost",
    database: env.DB_PG_DATABASE || "web",
    user: env.DB_PG_USERNAME || "root",
    password: env.DB_PG_PASSWORD || "",
};
