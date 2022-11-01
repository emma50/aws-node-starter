const AWS = require('aws-sdk')

'use strict';

module.exports.hello = async (event, context) => {

  const lambda = new AWS.Lambda().listFunctions()
  console.log(lambda)

  function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  sleep(4000)

  return 'Another Hello World'
};
