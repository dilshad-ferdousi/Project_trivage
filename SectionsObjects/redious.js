
let searchWithRadious = function()
{
    let redious = $('[data-qa="button-inspiration-distance"]');
    let allRadiousOption =$$('[data-qa=distance-option]');
    let noDataFound = $('.Pill_pill__3NdI3.Pill_variant-warn__3oQnf');

    
    this.getRediousNone =function()
    {
        redious.click();
            browser.sleep(500);
        allRadiousOption.get(0).click();
            browser.sleep(7000);
        
    }
    this.getRadious100km =function()
    {
        redious.click();
            browser.sleep(500);
        allRadiousOption.get(1).click();
            browser.sleep(7000);
        
    }
    this.getRadious150km =function()
    {
        redious.click();
            browser.sleep(500);
        allRadiousOption.get(2).click();
            browser.sleep(7000);
        
    }
    this.getRadious200km =function()
    {
        redious.click();
            browser.sleep(500);
        allRadiousOption.get(3).click();
            browser.sleep(7000);
        
    }


}
module.exports =new searchWithRadious()