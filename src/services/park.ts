import db from "../configs/db";

const findPark = async (id: Number) => {
  try {
    const res = await db.query(`select * from parks where id=${id}`);
    return res;
  } catch (error) {
    throw error;
  }
};

const findParks = async () => {
  try {
    const res = await db.query("select * from parks order by id asc");
    return res;
  } catch (error) {
    throw error;
  }
};

const savePark = async (id: Number) => {};

const updatePark = async (id: Number) => {};

const deletePark = async (id: Number) => {
  try {
    const res = await db.query(`delete from parks where id=${id}`);
    return res;
  } catch (error) {
    throw error;
  }
};

export { findPark, findParks, savePark, updatePark, deletePark };
