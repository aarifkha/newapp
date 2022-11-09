import mongoose from "mongoose";

const connectDB = async () => {
    const conn =await mongoose.connect(
      "mongodb+srv://prod:JY0oarzslIFW4kE5@cluster0.dftrmtm.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          }
        )

console.log("host----",conn.connection.host);
}
export default connectDB;
