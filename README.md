# React-CodeScreen-Stadiums-Example
Simple example CodeScreen React assessment that involves querying a REST endpoint that returns information about different Soccer stadiums.

The CodeScreen Soccer Stadiums API is a service that contains one endpoint,<br>
GET https://app.codescreen.dev/api/assessments/stadiums, which returns the details of soccer stadiums in a given country. <br>The country is passed in as a query parameter called `country` in the endpoint URL.

For authentication, you need to send your API token in the `Authorization HTTP header` using the [Bearer authentication scheme](https://tools.ietf.org/html/draft-ietf-oauth-v2-bearer-20#section-2.1). Your API token is `8c5996d5-fb89-46c9-8821-7063cfbc18b1`.

When you send an `HTTP GET` request to the endpoint, the response will be a `200 OK`, which includes a body containing a list of stadium data in `JSON` format. 
<br><br>
An example response is the following:

     [
       {
         "name": "Wembley Stadium",
         "country": "England",
         "capacity": 90000
       },
       {
         "name": "Emirates Stadium",
         "country": "England",
         "capacity": 60260
       }
     ]
     
     
## The Task

The candidate is required to implement the `getStadiumData()` method in `src/components/stadiums/StadiumsService.js`.

The stadium data for each country should then be displayed on the homepage of the app.

The unit tests in `src/components/stadiums/StadiumsService.test.js` and `src/app/services/stadiums/StadiumsService.hidden.test.js` should all pass if the `getStadiumData()` method has been implemented correctly.

The tests that are visible to the candidate are located in `src/components/stadiums/StadiumsService.test.js` and `cypress/integration/Stadiums.spec.js`.

The tests are not visible to the candidate are located in `src/app/services/stadiums/StadiumsService.hidden.test.js` and `cypress/integration/Stadiums.hidden.spec.js`.

The `package.json` file may only be updated to add any dependencies required for your solution. The current dependency versions cannot be modified.
