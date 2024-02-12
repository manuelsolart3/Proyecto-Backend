import mongoose, { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

const usuarioSchema = new mongoose.Schema({

  numero_identificacion: {
     type: Number,
     required: true,
 },
 nombre_usuario: {
         type: String,
         required: true,
    },
    apellido: {
        type: String,
        required: true,
     },
     telefono: {
        type: Number,
        required: true,
     },
     fecha_nacimiento:{
        type: String,
        require: true,
     },
     ciudad_residencia:{
        type: String,
        required: false,
     },
     correo: {
        type: String,
        required:true,
        unique: true,
     },
     contraseña:{
        type: String,
        required: true,
     },
    tipo_perfil: String,
    docente: [
        {
            ref: 'docente',
            type: Schema.Types.ObjectId,
        }
    ]
   },
   {
    timestamps: false,
    versionKey: false,
  });
   
usuarioSchema.methods.encryptContrasena = async (contrasena) => {
    return bcrypt.hash(contrasena, 10);
  };


const Usuarios = mongoose.model('usuarios', usuarioSchema);


export default Usuarios;