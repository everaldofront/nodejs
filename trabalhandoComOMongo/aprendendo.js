const mongoose = require("mongoose")

// Configurando o mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/aprendendo").then(() => {
    useMongoClient: true
    console.log("MongoDB Conectado...")
}).catch((err) => {
    console.log("Houve um erro ao se conectar ao mongoDB: "+err)
})

// Model - Usuários

const { Schema } = mongoose;
const UsuarioSchema = new Schema({

    nome: {
        type: String,
        require: true
    },
    nsobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    pais: {
        type: String
    }
});

// Collection
const Usuario = mongoose.model('usuarios', UsuarioSchema);

Usuario.find({}).exec((error, usuario) => {
    if (error) {
        return console.error(error);
    }
    if (usuario.length > 0) {
        return console.log(usuario);
    }
    new Usuario({
        nome: "Everaldo",
        sobrenome: "Santos",
        idade: 30,
        email: "everaldo@mail.com",
        pais: "Brasil"
    }).save().then(() => {
        console.log("Usuário cadastrado com sucesso!")
        console.log(usuario);
    }).catch((err) => {
        console.log("Houve um erro ao registrar o usuário: "+err)
    });
});
