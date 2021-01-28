const request = require('request')

const getUser = {
  getUserById: function (id) {
    const reqString = `https://jsonplaceholder.typicode.com/todos/${id}`
    return new Promise((resolve, reject) => {
      request.get(reqString, (err, res, body) => {
        if (err) {
          return reject(err)
        }
        resolve(JSON.parse(body))
      })
    })
  }
}


// getUser.getUserById(1)

module.exports = getUser
