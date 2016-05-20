'use strict'

function DB (knex) {

  return {
    getAllUsers: getAllUsers,
    getUserById: getUserById,
    getUserByName: getUserByName,
    getAllTweets: getAllTweets,
    getTweetById: getTweetById,
    getTweetsByUserId: getTweetsByUserId
  }

  function getAllUsers () {
    return knex('users')
  }

  function getUserById (id) {
    return knex('users')
      where('id', id)
  }

  function getUserByName (name) {
    return knex('users')
      where('name', name)
  }

  function getAllTweets () {
    return knex('tweets')
  }

  function getTweetById (id) {
    return knex('tweets')
      where('id', id)
  }

  function getTweetsByUserId (userId) {
    return knex('tweets')
      where('user_id', userId)
  }

}

module.exports = DB
