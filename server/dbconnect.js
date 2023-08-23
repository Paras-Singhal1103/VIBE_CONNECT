const mongoose = require("mongoose");

mongoose.set('strictQuery', true);
module.exports = async () => {
    const mongoUri =
    "mongodb+srv://parasSinghal:vvbfIxDdADmn8nhi@cluster0.pic2zte.mongodb.net/?retryWrites=true&w=majority";
    
    try {
        const connect = await mongoose.connect(mongoUri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
