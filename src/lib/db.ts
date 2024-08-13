import mongoose, { Connection } from "mongoose";
import { exit } from "process";

// Declaring a variable to store the cached database connection
let cachedConnection: Connection | null = null;

async function dBConnect(): Promise<void> {
  // check if connection already exists
  if (cachedConnection) {
    console.log("Connection already exists");
    return;
  }

  try {
    const dB = await mongoose.connect(process.env.MONGO_URI || "", {});
    const cachedConnection = dB.connection;
    console.log("Database connected");
  } catch (error) {
    console.log(error);
    // exit the process
    exit(1);
  }
}
