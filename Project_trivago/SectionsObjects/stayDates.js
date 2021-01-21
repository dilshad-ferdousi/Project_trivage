
let searchWithStayDates = function()
{
    let stayDates = $('.SearchForm_stay__21GWP [data-qa="button-inspiration-stay"]');
    let stayDateOptions = $$('.ControlButton_control__rcRs3 .ControlSelectItem_icon__3sDda');
    let nightsInput =$('[data-qa="stay-input-value"]');
    let nightPlus = $('[data-qa="stay-input-plus"]');
    let nightMinus = $('[data-qa="stay-input-minus"]');
    let nightsApply = $('[data-qa="apply-stay"]'); 

//-----Common methods-----
    this.ApplyChoice = function()
    {
        nightsApply.click();
            browser.sleep(1000);
    }
//-------Stay Dates methods--------
 
    this.stayDatesFor1stOption=function()
    {
        stayDates.click();
            browser.sleep(500);
        stayDateOptions.get(1).click();
            browser.sleep(500);
        stayDateOptions.get(2).click();
            browser.sleep(500);
        stayDateOptions.get(3).click();
            browser.sleep(500);
    }
    this.StayDatesFor2ndOption =function()
    {
        stayDates.click();
            browser.sleep(500);
        stayDateOptions.get(0).click();
            browser.sleep(500);
        stayDateOptions.get(2).click();
            browser.sleep(500);
        stayDateOptions.get(3).click();
            browser.sleep(500);
    }   
    this.StayDatesFor3rdOption =function()
    {
        stayDates.click();
            browser.sleep(500);
        stayDateOptions.get(0).click();
            browser.sleep(500);
        stayDateOptions.get(1).click();
            browser.sleep(500);
        stayDateOptions.get(3).click();
            browser.sleep(500);
    } 
    this.StayDatesFor4thOption =function()
    {
        stayDates.click();
            browser.sleep(500);
        stayDateOptions.get(0).click();
            browser.sleep(500);
        stayDateOptions.get(1).click();
            browser.sleep(500);
        stayDateOptions.get(2).click();
            browser.sleep(500);
    }
    this.nightIncrease =function()
    {
        nightPlus.click();
        browser.sleep(500);
    }
    this.nightDecrease =function()
    {
        nightMinus.click();
        browser.sleep(500);
    }
    this.nightNumberInput =function()
    {
        nightsInput.clear();
        nightsInput.sendKeys('2');
            browser.sleep(1000);
        
    }
           
}
module.exports =new searchWithStayDates()