const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    }, 
    conteudo: {
        type: Sequelize.TEXT
    }
})

Postagem.create({
    titulo: "Um titulo qualquer",
    conteudo: "Um conteudo qualquer"
})

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

// Usuario.sync({force: true})

Usuario.create({
    nome: "Everaldo",
    sobrenome: "Santos",
    idade: 35,
    email: "everaldo@email.com"
})
