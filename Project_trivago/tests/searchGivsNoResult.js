
/* Created by Dilshad Ferdousi
Here I searched with a remote place, 'Khulna' with None radious, so that I can get a page with No result found text.*/

let searchWithLocation = require('../SectionsObjects/URL&Location');
let searchWithRadious = require('../SectionsObjects/redious');

describe('Searched with a remote place where no hotels nereby to check No result page. ',function()
{
    
    it('Search found no result', function()
    {
        searchWithLocation.getCurrentUrl();
        searchWithLocation.noHotelFound();
        searchWithRadious.getRediousNone();
        let bodyMessage =$('.Pill_variant-warn__3oQnf.Pill_pill__3NdI3');
        expect(bodyMessage.getText()).toEqual('Sorry, there aren’t any great deals for this trip type. For more results, try adjusting your preferences a bit.');       
    });
});