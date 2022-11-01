const AWS = require('aws-sdk')

'use strict';

module.exports.hello = async (event, context) => {
  console.log(context)
  console.log(event)

  const lambda = new AWS.Lambda().listFunctions()
  console.log(lambda, 'LAMBDA--------')
  console.log('Hello World')

  function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  sleep(4000)

  return 'Another Hello World'
};
