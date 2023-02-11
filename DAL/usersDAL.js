import { execSqlQuery } from '../db/db.js'

export const login = async ({ email, password }) => {
  const q = `select id, firstName, lastName, email from web.users where email = '${email}' and password = '${password}'`;
  try {
    const response = await execSqlQuery(q);
    console.log(response);
      return response[0];
  } catch (error) {
    throw new Error('User does not exist for given credentials');
  }
}

export const signUp = async ({ firstName, lastName, email, password }) => {
  const q = `insert into web.users (firstName, lastName, email, password) values ('${firstName}', '${lastName}', '${email}', '${password}')`;
  try {
    const response = await execSqlQuery(q);
    return response;
  } catch (error) {
    throw new Error("Email already exists");
  }
}