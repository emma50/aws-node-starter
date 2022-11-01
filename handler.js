'use strict';

module.exports.hello = async (event, context) => {
  console.log(context)
  console.log(event)
  console.log('Hello World')

  function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  sleep(4000)

  return 'Another Hello World'
};
