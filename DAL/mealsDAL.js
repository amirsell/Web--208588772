import { execSqlQuery } from '../db/db.js'

export const getMeals = async () => {
  const query = 'select * from meals'
  const totalQuery = 'select count(*) from meals';
  try {
    const meals = await execSqlQuery(query);
    const totalResult = await execSqlQuery(totalQuery);
    return { items: meals, total: Number(totalResult[0].count) }
  }
  catch (err) {
    throw new Error(err);
  }
}

export const getMealById = async id => {
  const q = `select * from meals where id = ${id}`;
  try {
    const response = await execSqlQuery(q);
    return response[0];
  } catch (err) {
    throw new Error(`Meal does not exist for id - ${id}`);
  }
}