import mongoose from "mongoose";


try {
   await  mongoose.connect(process.env.URI_MONGO)
    console.log('Base de datos conectada  🚀🚀🚀')
    
} catch (error) {
    console.log('error algo falló'+ error)
}

