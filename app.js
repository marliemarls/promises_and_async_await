// assemble this information using a single function that takes an id parameter and returns a Promise that resolves to an object containing specific data

import { central, db1, db2, db3, vault } from "./databases.js";

async function getUserData(id) {
  if (id < 1 && id > 10) return "Invalid input";
  if (typeof id !== "number") return "Invalid input";

  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3,
  };
  


}

console.log(getUserData(1));
