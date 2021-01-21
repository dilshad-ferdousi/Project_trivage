/* Created by Dilshad
In this scenario A family with 4 members(2 adults, 2 children) searching for a hotel within 100 miles radis in Paris, France. 
the trip is 5 for 5 nights and they will need 2 rooms.*/

let searchWithLocation = require ('../SectionsObjects/URL&Location');
let searchWithRadious = require ('../SectionsObjects/redious');
let searchWithStayDates = require ('../SectionsObjects/stayDates');
let searchChildrenGuest = require ('../SectionsObjects/guestChildren');
let searchForRooms = require ('../SectionsObjects/roomSelection');
let OpenAnIteamModalFromTheList = require('../SectionsObjects/modalContent');


describe('Scenario 2: 4 persons(2 adult & 2 child) 5 days trip to Paris in March, needs 2 rooms', function(){

    
    it('Go to the portal', function()
    {
        searchWithLocation.getCurrentUrl();
        expect(searchWithLocation.returnURL()).toContain('https://discover.trivago.co.uk/');
        browser.sleep(1000);
        
        //let title =$('h1.Hero_title__2RJKM');
        //expect(title.getText()).toEqual('Your next holiday destination is closer than you think.');
    });

    it('Search Location with Paris ', function()
    {
        searchWithLocation.findLocationInParis();
    });

    it('Search Radious within 100 km ', function()
    {
        searchWithRadious.getRadious100km();
    });

    it('Search Stay Dates in March',function()
    {
        searchWithStayDates.StayDatesFor3rdOption();
        searchWithStayDates.nightIncrease();
        searchWithStayDates.nightIncrease();
        searchWithStayDates.nightIncrease();
    });
    it('2 Rooms will be needed', function()
    {
        searchForRooms.menuClickForRooms();
        searchForRooms.roomsIncrese();
        searchForRooms.applyChoice();
            
    });    
       
    it('2 children will be staying', function()
    {
        searchChildrenGuest.goToGuestMenu();
        searchChildrenGuest.childrenIncrease();
        searchChildrenGuest.childrenIncrease();
        browser.sleep(1000);    
        searchChildrenGuest.getChildrenAgeFromDropDown(0,5);
        searchChildrenGuest.getChildrenAgeFromDropDown(1,8);
            

     });
     it('Check hotel details', function()
     {
         OpenAnIteamModalFromTheList.clickAnItemFromTheTilePage();
         OpenAnIteamModalFromTheList.clickNextImageVisible();
         OpenAnIteamModalFromTheList.clickNextImageVisible();
         OpenAnIteamModalFromTheList.clickNextImageVisible();
         OpenAnIteamModalFromTheList.clickNextImageVisible();
         OpenAnIteamModalFromTheList.exitModal();
     });

     it('Check another hotel details', function()
     {
         OpenAnIteamModalFromTheList.clickAnItemFromTheTilePage2();
         OpenAnIteamModalFromTheList.BrowseThumbnailGullary();
         OpenAnIteamModalFromTheList.clickNextImageVisible();
         OpenAnIteamModalFromTheList.clickNextImageVisible();
         OpenAnIteamModalFromTheList.clickNextImageVisible();
         OpenAnIteamModalFromTheList.clickNextImageVisible();
     });
     

     it('Click View Deal', function()
     {
         OpenAnIteamModalFromTheList.ClickOnViewDeal();
         
     }); 
    
});