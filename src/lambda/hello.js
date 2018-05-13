/**
 *  This is a serverless function  which runs in AWS Lambda.
 *  It is built for use on Netlify so that building, versioning
 *  and deploying is easier than it might be otherwise.
 *
 *  No need to configure AWS, just include a file like this in
 *  your site, and deploy as you would any other site on Netlify.
 *
 *  https://www.netlify.com/docs/functions/
 */

'use strict';


// A standard Lambda function handler
export function handler(event, context, callback) {

  // who's there? Or is it the World?
  const  { name: name = "World" } = event.queryStringParameters;

  // Say hello
  callback(null, {
    statusCode: 200,
    headers: { "Content-Type": "text/html" },
    body: `<html>Hello from a serverless
      <a href="https://github.com/philhawksworth/hawksworx.com/blob/master/src/lambda/hello.js">function</a>,
      ${name}!</hml>`
  });

}
