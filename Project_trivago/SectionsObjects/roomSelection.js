let RoomsForGuests =function()
{
let roomsMenu =$('[data-qa="button-inspiration-guest"]');   
let roomsPlus =$('[data-qa="guests-rooms-input-plus"]');
let roomsMinus =$('[data-qa="guests-rooms-input-minus"]');
let roomsNumberInput = $('[data-qa="guests-rooms-input-value"]');

let roomsApply =$('[data-qa="apply-guests"]');
let reset = $('[data-qa="reset-guests"]');

//---------------common Methods-----------
    this.applyChoice = function()
    {
        roomsApply.click()
            browser.sleep(1000);
    }
    this.resetChoice =function()
    {
        reset.click();
        browser.sleep(1000);
    }
    //----------Rooms Methods------------
    this.menuClickForRooms = function()
    {
        roomsMenu.click();
        browser.sleep(1000);
    }
    
    this.roomsIncrese =function()
    {
            roomsPlus.click();
            browser.sleep(500);
    }
    this.roomsDecrese =function()
    {
        roomsMinus.click();
            browser.sleep(500);
    }
    this.roomsInpute =function()
    {
        roomsNumberInput.click();
            browser.sleep(500);
    }
}
module.exports =new RoomsForGuests()