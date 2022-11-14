import mongoose from "mongoose";

const connectDB = async () => {
    const conn =await mongoose.connect(
      "mongodb://localhost:27017/live",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          }
        )

console.log("host----",conn.connection.host);
}
export default connectDB;
