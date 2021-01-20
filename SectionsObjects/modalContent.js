// creaded By Dilshad

let modalContents = function()
{
    let selectAnItem = $$('a.Tile_link__3kTDO');
    let crossButton =$('[data-qa="gallery-close"]');
    let nextImage = $('.Image_arrowNext__3LVrr');
    let previousImage =$('.Image_arrowPrev__2F1n1');
    let imageFromGallery =$$('span.Thumb_image__3ya9c');
    let viewDeal =$('.IconLabel_justify-center__1_f0R');

    
    this.clickAnItemFromTheTilePage =function()
    {
        selectAnItem.get(3).click();
        browser.sleep(7000);
        
    }
    this.clickAnItemFromTheTilePage2 =function()
    {
        selectAnItem.get(5).click();
        browser.sleep(7000);
        
    }

    this.exitModal =function()
    {
        crossButton.click()
        browser.sleep(5000);
    }
    this.BrowseThumbnailGullary =function()
    {
        
        imageFromGallery.get(0).click();
        browser.sleep(4000);
        imageFromGallery.get(1).click();
        browser.sleep(4000);
        imageFromGallery.get(2).click();
        browser.sleep(4000);
        imageFromGallery.get(3).click();
        browser.sleep(4000);;
        imageFromGallery.get(4).click();
        browser.sleep(4000);
        imageFromGallery.get(5).click();
        browser.sleep(4000);
        
    }
    this.clickPreviousImageVisible = function()
    {
        previousImage.click();
        browser.sleep(3000);
    }
    this.clickNextImageVisible = function()
    {
        nextImage.click()
        browser.sleep(3000);
    }
    this.ClickOnViewDeal =function()
    {
        viewDeal.click();
        browser.sleep(2000);
    }
}
module.exports = new modalContents();