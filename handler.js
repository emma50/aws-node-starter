const AWS = require('aws-sdk')

'use strict';

module.exports.hello = async (event, context) => {

  console.log(process.env.FIRSTNAME)
  
  function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  sleep(4000)

  return 'Another Hello World'
};
