// assemble this information using a single function that takes an id parameter and returns a Promise that resolves to an object containing specific data

import { central, db1, db2, db3, vault } from "./databases.js";

// const returnedValue = await Promise.resolve(vault(1));
// console.log(returnedValue)

async function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3,
  };
  const returnedValue = await Promise.resolve(vault(1));
  console.log(returnedValue);
  //added if statements that will immediately return when the id is not a number and when the id is outside of the range currently available
  if (id < 1 && id > 10) return "Invalid input";
  if (typeof id !== Number) return "Invalid input";
  
}

console.log(await getUserData(true));
