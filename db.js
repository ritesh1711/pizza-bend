const mongoose = require("mongoose");


const mongoURL = "mongodb+srv://ritesh098765:Ritesh1711@cluster0.nzfc00z.mongodb.net/pizza21";


mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true ,});

const db = mongoose.connection;


db.on('connected', () => {
    console.log('Connected to MongoDB successfully');
});


db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

module.exports = mongoose;
