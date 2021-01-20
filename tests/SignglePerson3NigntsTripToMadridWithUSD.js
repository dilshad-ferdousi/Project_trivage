/* Created by Dilshad Ferdousi
 Scenario: An user came to the portal and selected : 
location-Madrid, radious-100km, stay dates-next 14 days, for 3 nights, guest-1, room-1 and currency- USD.
Then he picked 4th item from the page. In the modal he browses the gallery by clicking next and 
previous and clicks Deal button.*/

let searchWithLocation = require ('../SectionsObjects/URL&Location');
let searchWithRadious = require('../SectionsObjects/redious');
let searchWithStayDates = require ('../SectionsObjects/stayDates');
let searchWithAdultGuest = require('../SectionsObjects/gustsAdult');
let OpenAnIteamModalFromTheList = require('../SectionsObjects/modalContent');
let currencyChange =require('../SectionsObjects/currencyChange');
const { iteratee } = require('lodash');

describe('Scenario 1 - An user came to the portal and selected location-London, radious-100km, stay dates-next 14 days, guest-1, room-1 and currency- British Pound. Then he picked 4th item from the page. In the modal he browses the gallery by clicking next an previous and clicks Deal button.', function()
{
    it('User goes to the portal',function(){
        searchWithLocation.getCurrentUrl();
        
    });
    it('Search with Madrid as location',function(){
        searchWithLocation.findLocationInMadrid();
    });
    it('Set radious 100 miles',function()
    {
        searchWithRadious.getRadious100km();
    });
    it('Set stay dates for next 14 days and for 3 nights', function()
    {
        searchWithStayDates.stayDatesFor1stOption();
        searchWithStayDates.nightIncrease();
        searchWithStayDates.ApplyChoice();
    });
    it('Set guest- 1 person', function()
    {
        searchWithAdultGuest.guestCountDecrese();
        searchWithAdultGuest.applyChoice();
    });
    it('Currency selects USD', function()
    {
        currencyChange.clickCurrencyButton();
        currencyChange.SelectThirdCurrencyUSD();
    });
    it('Check hotel details', function()
    {
        OpenAnIteamModalFromTheList.clickAnItemFromTheTilePage();
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

