# Serverless Express test

Requires docker and/or AWS CLI credentials and Serverless framework.

Application runs locally using docker to create Express app and Mongo database.

Can be deployed, via Serverless, to AWS using Lambda and DynamoDB.

Express app exposes one endpoint that logs requests to database.

## Install

```npm i```

## Run locally

```docker-compose -f docker-compose.yml up```

Then visit http://localhost:3000/log-test. Endpoint logs the request to db and outputs all logs.

## Run on AWS

```sls deploy```

The output from this will give you the endpoint URL. Append 'log-test' to the endpoint and test as above.

To remove run ```sls remove```

## Links

- https://serverless.com/
- https://aws.amazon.com/cli/