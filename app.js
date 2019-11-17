const sequelize = require('./models').sequelize
sequelize.sync()

const { User } = require('./models')

// create
// User.create({
//     firstName : "김",
//     lastName : "기현",
// })

User.findAll({}).then(users => {
    console.log(JSON.parse(JSON.stringify(users)))
    // console.log(users)
})