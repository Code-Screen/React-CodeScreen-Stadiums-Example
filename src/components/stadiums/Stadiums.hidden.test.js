 const StadiumsService = require('./StadiumsService').StadiumsService;
 
 let stadiumsService = new StadiumsService();

const expectedData = [
    {
        'name': 'Wembley Stadium',
        'country': 'England',
        'capacity': 90000
    },
    {
        'name': 'Old Trafford',
        'country': 'England',
        'capacity': 74994
    },
    {
        'name': 'Emirates Stadium',
        'country': 'England',
        'capacity': 60260
    },
    {
        'name': 'Anfield',
        'country': 'England',
        'capacity': 54074
    }
]


test('The stadium data for England is correct', () => {
    return stadiumsService.getStadiumData('England').then(data => {
        expect(data).toEqual(expectedData);
    });
});