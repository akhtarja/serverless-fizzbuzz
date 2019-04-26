'use strict';

const parseUrlParams = (event) => {
  const min = parseInt(event.queryStringParameters.min, 10);
  const max = parseInt(event.queryStringParameters.max, 10);

  return Object.assign(event, { min, max });
};

const isMultiple = (multiple, multiplier) => multiple % multiplier === 0;

const fizzbuzzify = (event) => {
  let fizzbuzzed = [];
  let fizzbuzzHelper = '';

  for (let index = event.min; index <= event.max; index++) {
    fizzbuzzHelper = '';
    if (isMultiple(index, 3)) fizzbuzzHelper += 'fizz';
    if (isMultiple(index, 5)) fizzbuzzHelper += (fizzbuzzHelper.length === 0 ? 'buzz' : ' buzz');
    if (fizzbuzzHelper.length === 0) fizzbuzzHelper += index;
    fizzbuzzed.push(fizzbuzzHelper);
  }

  return Object.assign(event, { fizzbuzzed });
};

module.exports.fizzbuzz = async (event, context) => {
  event = fizzbuzzify(parseUrlParams(event));

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'success',
      min: event.min,
      max: event.max,
      fizzbuzzed: event.fizzbuzzed
    }),
  };
};
