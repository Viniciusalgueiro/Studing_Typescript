import mongoose from 'mongoose';

mongoose.connect(
    "mongodb+srv://dbvini:<password>@cluster0.qdnio.mongodb.net/<dbtest>?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);