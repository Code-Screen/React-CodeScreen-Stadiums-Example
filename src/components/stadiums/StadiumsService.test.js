const StadiumsService = require('./StadiumsService').StadiumsService;
 
let stadiumsService = new StadiumsService();

const expectedData = [
    {
        'name': 'Camp Nou',
        'country': 'Spain',
        'capacity': 99354
    },
    {
        'name': 'Santiago Bernabeu',
        'country': 'Spain',
        'capacity': 81044
    },
    {
        'name': 'Wanda Metropolitano',
        'country': 'Spain',
        'capacity': 68456
    },
    {
        'name': 'Mestalla',
        'country': 'Spain',
        'capacity': 55000
    }
]

test('The stadium data for Spain is correct', () => {
    return stadiumsService.getStadiumData('Spain').then(data => {
        expect(data).toEqual(expectedData);
    });
 });