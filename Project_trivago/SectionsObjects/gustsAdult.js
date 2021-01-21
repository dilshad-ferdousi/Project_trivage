
let searchWithGusts =function()
{
    let guests = $('[data-qa="button-inspiration-guest"]');
    let adultPlus = $('[data-qa="guests-adults-input-plus"]');
    let adultminus = $('[data-qa="guests-adults-input-minus"]');
    let adultNumberInput =$('[data-qa="guests-adults-input-value"]');
    
    let GuestApply =$('[data-qa="apply-guests"]');
    let reset = $('[data-qa="reset-guests"]');

//---------------common Methods-----------
    this.applyChoice = function()
    {
        GuestApply.click()
            browser.sleep(1000);
    }
    this.resetChoice =function()
    {
        reset.click();
        browser.sleep(1000);
    }
//-------- Guest Section methods--------------
    this.guestCountIncrease =function()
    {
        guests.click();
            browser.sleep(500);
        adultPlus.click();
            browser.sleep(1000);
    }
    this.guestCountDecrese =function()
    {
        guests.click();
            browser.sleep(500);
        adultminus.click();
            browser.sleep(500);
    }
    this.guestCountNumberInput =function()
    {
        guests.click();
            browser.sleep(500);
        adultNumberInput.click();
            browser.sleep(500);
    }
    
}
module.exports =new searchWithGusts();