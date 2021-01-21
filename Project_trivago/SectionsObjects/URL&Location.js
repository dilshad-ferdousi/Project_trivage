

let searchWithLocation = function()
{
    let CurrentUrl = 'https://discover.trivago.co.uk/';
    let location = $('[data-qa="button-inspiration-destination"]');
    let removeLocation = $('.DestinationControl_iconClear__WXmHX');
    let whereToTextInput =$('.ControlButton_isActive__3PbAK [type="search"]');
    let whereToPickedFromTheList  =$$('[data-qa="destination-item"]');
    let locationNameHeading =$('.Header_header__2TGyh .Header_distance__2cEOq');
    let searchElement = $$('[data-qa="item-list-tile"] li');
    let title =$('h1.Hero_title__2RJKM');
   
this.getCurrentUrl = function()
{
    browser.get(CurrentUrl);
        browser.sleep(10000);
    expect(title.getText()).toEqual('Your next holiday destination is closer than you think.');
}
    this.returnURL= function()
    {
        return CurrentUrl;
    } 
this.findLocationInLondon = function()
    {
        location.click();
            browser.sleep(1000);
        removeLocation.click();
            browser.sleep(1000);
        whereToTextInput.sendKeys('London');
            browser.sleep(5000);
    }   
this.findLocationInMadrid = function()
{
    location.click();
        browser.sleep(1000);
    removeLocation.click();
        browser.sleep(1000);
    whereToTextInput.sendKeys('Madrid');
        browser.sleep(5000);
}

this.findLocationInParis = function()
{
    location.click();
        browser.sleep(1000);
    removeLocation.click();
        browser.sleep(1000);
    whereToTextInput.sendKeys('Paris');
        browser.sleep(5000);
}
this.getLocationPickedFromTheList =function()
{
    location.click();
        browser.sleep(1000);
    removeLocation.click();
        browser.sleep(1000);
    whereToTextInput.sendKeys('T');
        browser.sleep(5000);
    whereToPickedFromTheList.get(0).click();
        browser.sleep(5000);
    expect(locationNameHeading.getText()).toContain('T');
    
}

this.noHotelFound =function()
{
    location.click();
        browser.sleep(1000);
    removeLocation.click();
        browser.sleep(1000);
    whereToTextInput.sendKeys('Khulna');
    browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(5000);
        
}
this.searchedElementCount = function()
{
    searchElement.get();
    return searchElement;
}
}
module.exports = new searchWithLocation();
