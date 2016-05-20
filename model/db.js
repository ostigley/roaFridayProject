'use strict'

module.exports = function (knex) {

  return {
    getAllUsers: getAllUsers,
    getUserById: getUserById,
    getUserByName: getUserByName,
    saveNewUser: saveNewUser,
    getAllTweets: getAllTweets,
    getTweetById: getTweetById,
    getTweetsByUserId: getTweetsByUserId,
    saveNewTweet: saveNewTweet
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

  function saveNewUser (user) {
    return knex('users')
      .insert(user)
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

  function saveNewTweet (tweet) {
    return knex('tweets')
      .insert(tweet)
  }

}
