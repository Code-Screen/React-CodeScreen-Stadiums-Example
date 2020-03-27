
class StadiumsService {

    /**
     * @param country the name of the country we are retrieving stadium info for.
     * @returns a list of data about stadiums in the given country.
     */
    getStadiumData(country) {
        //TODO Implement
    }

}

StadiumsService.stadiumsEndpointURL = 'https://app.codescreen.dev/api/assessments/stadiums';

// Your API key. Needed to successfully authenticate when calling the tweets endpoint.
// This needs to be included in the Authorization header in the request you send to the stadiums endpoint.
StadiumsService.apiKey = '8c5996d5-fb89-46c9-8821-7063cfbc18b1';

module.exports.StadiumsService = StadiumsService;
