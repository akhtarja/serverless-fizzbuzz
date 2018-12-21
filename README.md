# Fizzbuzz as a Service

This is a Serverless application for AWS that takes numbers across a range, applies "fizz buzz" (https://en.wikipedia.org/wiki/Fizz_buzz) to them, and returns the results as an array. This is implemented as a REST API expecting a GET call at the `/fizzbuzz` endpoint.

## Requirements
This application requires the following:
1. node and npm (`brew install node`)
2. Serverless (`npm install --global serverless`)
3. An AWS local credential file with a `[default]` profile with valid AWS API keys

## Deployment
1. Clone this repo
2. `npm install`
3. `serverless deploy`
4. The serverless deployment output will show an API URL once complete. Use the API by browsing to `(url)/fizzbuzz?min=[min]&max=[max]`. The API results will be visible as a JSON string in the browser.
5. To see running logs of the application execution, invoke `serverless logs --function fizzbuzz --tail`