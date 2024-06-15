// assemble this information using a single function that takes an id parameter and returns a Promise that resolves to an object containing specific data

import { central, db1, db2, db3, vault } from "./databases.js";

async function getUserData(id) {
  if (id < 1 && id > 10) return "Invalid input";
  if (typeof id !== "number") return "Invalid input";
  const newObj = {};
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3,
  };

  const vaultValue = await Promise.resolve(vault(id));

  const returnedValue = await Promise.resolve(central(id))
  .then((database)=> dbs[database](id))
  .then((companyInfo)=> companyInfo)

  console.log(returnedValue)

  return vaultValue
  

}

console.log(await getUserData(1));
