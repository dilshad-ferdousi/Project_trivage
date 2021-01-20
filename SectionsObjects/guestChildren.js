
//Dilshad
let searchChildrenGuest =function()
{
let guests = $('[data-qa="button-inspiration-guest"]');
let childrenPlus = $('[data-qa="guests-children-input-plus"]');
let childrenMinus = $('[data-qa="guests-adults-input-minus"]');
let childrenAgeInputNumber = $('[data-qa="guests-children-input-value"]');

let childAgedropdownValue =$$('[data-qa="guest-selector-children-age"]');
let childGuestApply =$('[data-qa="apply-guests"]');
let childGuestReset = $('[data-qa="reset-guests"]');
//------common methods-------
this.goToGuestMenu =function()
{
    guests.click();
    browser.sleep(1000);
}
this.applyCondition =function()
{
  childGuestApply.click();
  browser.sleep(500);   
}
this.resetOption =function()
{
    childGuestReset.click();
    browser.sleep(500);
}

//----------Children Methods------------
this.childrenIncrease =function()
{
    childrenPlus.click();
    browser.sleep(500);
}
this.childrenDecrease = function()
{
    childrenMinus.click();
    browser.sleep(500);
}

this.ChildrenInputNumber =function()
{
    childrenAgeInputNumber.clear().sendKeys(2);
    childGuestApply.click();
    browser.sleep(500);
}

this.getChildrenAgeFromDropDown =function(child,age)
{
    $$("[class^='GuestSelector_ages__'] li").get(child).$("[class^='Select_container__'] option[value='" + age + "']").click();
}
}

module.exports = new searchChildrenGuest();