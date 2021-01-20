

// Creaded by Dilshad
let currencyChange =function()
{
    let currencyButton =$('[data-qa="button-currency"]');
    let currency =$$('.ControlSelectItem_label__IbRcQ');
    let currencyOptions =$$('[data-qa="button-currency"] .IconLabel_truncateLabel__PDMe-');
    let tileCurrencyIcon =$$('.Price_head__3LjMf');

    this.clickCurrencyButton =function()
    {
        currencyButton.click();
        browser.sleep(2000);
        
    }
    this.SelectFirstCurrencyEURO = function()
    {
        currency.get(0).click();
       // expect(currencyOptions.getText(0)).toEqual('EUR');
        browser.sleep(7000);
        //expect(tileCurrencyIcon.getText(0)).toEqual('€');

    }
    this.SelectSecondCurrencyGBP = function()
    {
        currency.get(1).click();
       // expect(currencyOptions.getText(1)).toEqual("GBP");
        browser.sleep(7000);
        //expect(tileCurrencyIcon.getText(1)).toEqual("£");

    }
    this.SelectThirdCurrencyUSD = function()
    {
        currency.get(2).click();
        //expect(currencyOptions.getText(2)).toEqual('USD');
        browser.sleep(7000);
        //expect(tileCurrencyIcon.getText(2)).toEqual('$');

    }
    this.Select4thCurrency = function()
    {
        currency.get(3).click();
       // expect(currencyOptions.getText(3)).toEqual('AED');
        browser.sleep(7000);
        //expect(tileCurrencyIcon.getText(3)).toEqual('AED');

    }
}
module.exports =new currencyChange();