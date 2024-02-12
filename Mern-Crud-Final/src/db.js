import mongoose from 'mongoose';


export const connectDB = async ()=> {
 try {
    await mongoose.connect('mongodb://127.0.0.1/script_V1');
    console.log('>>> DB is connected')
 } catch (error) {
    console.log(error); 
 };

    

};

// mongodb://127.0.0.1/mern-tasks