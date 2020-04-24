import { connect } from "mongoose";

const mongoUrl =
  "mongodb+srv://darshana:darshana@cluster0-dmsfc.azure.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;
