import {Schema,model} from 'mongoose'


const Roles= new  Schema({
   rol:{
    type:String
   }
   });


  
export default model('Roles', Roles);
