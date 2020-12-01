const db = require('./models')

db.user.create({
    firstName: 'swolepenguin',
    email:'test@test.com',
    Password: 'password'
}).then(function(user){
    console.log('Created:', user.name)
})

db.user.findAll().then(function(user){
    console.log('found:',user.firstName)
})