import { execSqlQuery } from '../db/db.js'

export const createOrder = async ({ userId, list }) => {
  console.log(userId);
  console.log(list);
  
  const query =
    `insert into orders (userId, list) values ('${userId}', '${JSON.stringify(list)}')`;
  console.log(query);
  const createdOrder = await execSqlQuery(query);
  return createdOrder;
}

export const getOrdersByUserId = async userId => {
  const query = `select * from orders where userId = ${userId}`;
  const totalQuery = `select count(*) from orders where userId = ${userId}`;

  const ordersOfUser = await execSqlQuery(query);
  const totalResult = await execSqlQuery(totalQuery);
  return { items: ordersOfUser, total: Number(totalResult[0].count) }
}
