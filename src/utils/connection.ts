import mongoose from 'mongoose';

mongoose.connect(
    "mongodb+srv://dbvini:<2409>@cluster0.qdnio.mongodb.net/<dbvini>?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);