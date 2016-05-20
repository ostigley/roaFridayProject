'use strict'

const DB = require('./db')

module.exports = function (knex) {

  const db = DB(knex)

  return {
    login: login,
    saveNewUser: saveNewUser,
    saveNewTweet: saveNewTweet,
    getAllTweets: db.getAllTweets,
    getTweetsByUserId: db.getTweetsByUserId
  }

  function login (name, password) {
    return db.getUserByName(name)
      .then(checkUser)
      .then(checkPassword)

    function checkUser (rows) {
      if (!rows || !rows.length || rows.length === 0) {
        throw new Error('No such user name.')
      }
      return rows[0]
    }

    function checkPassword (user) {
      if (!password || password !== user.password) {
        throw new Error('Incorrect password.')
      }
      return user
    }
  }

  function saveNewUser (user) {
    if (!user || !user.name) {
      throw new Error('Invalid user name')
    } else if (!user.password) {
      throw new Error('Invalid password.')
    }

    return db.getUserByName(user.name)
      .then(checkForExistingUser)
      .then(db.saveNewUser)

    function checkForExistingUser (rows) {
      if (rows && rows.length > 0) {
        throw new Error('User name already in use.')
      }
      return user
    }
  }

  function saveNewTweet (tweet) {
    if (!tweet || !tweet.tweet) {
      throw new Error('Invalid or empty tweet.')
    } else if (!tweet.user_id) {
      throw new Error('No assigned user/author for tweet.')
    }

    return db.saveNewTweet(tweet)
  }

}
