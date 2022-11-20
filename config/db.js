import mongoose from "mongoose";

const connectDB = async () => {
  console.log("MONGO CONNECT++++++++","mongodb+srv://new:qkMUKMeQuq2l3GFL@cluster0.dftrmtm.mongodb.net/test");
    const conn =await mongoose.connect(
"mongodb+srv://new:qkMUKMeQuq2l3GFL@cluster0.dftrmtm.mongodb.net/test" ,       {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          }
        )

console.log("host----",conn.connection.host);
}
export default connectDB;
