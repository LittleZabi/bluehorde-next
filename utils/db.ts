import mongoose from "mongoose";
interface ConnectionsType {
  isConnected: boolean | any;
}
const connection: ConnectionsType = {
  isConnected: false,
};
async function connect() {
  if (connection.isConnected) {
    console.log("already connected");
    return 1;
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log("use prev connection");
      return 1;
    }
    await mongoose.disconnect();
  }
  const db = await mongoose.connect(process.env.MONGODB_URI);
  console.log("new connection");
  connection.isConnected = db.connections[0].readyState;
}
async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === "production") {
      await mongoose.disconnect();
      connection.isConnected = false;
    }
  }
}
const db = { connect, disconnect };
export default db;
