// const mongoose=require("mongoose");
// const DB=process.env.DATABASE;
// mongoose.connect(DB).then(()=>console.log("Data base connected")).catch((error)=>console.log("error"+ error.message));
const mongoose = require("mongoose");

const connectDB = async() => {
	try {
		const conn = await mongoose.connect(process.env.DATABASE, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch(error) {
		console.log(`error: ${error.message}`);
		// console.log(error);
		process.exit();
	}
};

module.exports = connectDB;
