
import { checkBasketItemsTotal, checkBasketPriceTotal, goToBasket, verifyOnBasketPage } from '../steps/cart';
import { visitHP } from '../steps/home';
import { addAccessories, clickAddToCartCta, clickNoCoverage, verifyItemInStock } from '../steps/product';
import { clickOnFirstCard, verifyHeaderValueOnCard, verifyOnResultsPage } from '../steps/results';
import { acceptCookieBanner, pageScreenshot, typeInSearch } from '../steps/shared';

describe('Basic user journey tests', () => {
    it('@p1 Navigating from homepage to checkout with an ipad purchase and adding two accessories', () => {
        visitHP();
        acceptCookieBanner();
        typeInSearch('ipad air 64gb space grey');
        verifyOnResultsPage();
        verifyHeaderValueOnCard();
        clickOnFirstCard();
        verifyItemInStock();
        addAccessories('1', 'Apple Pencil');
        addAccessories('3', 'AirPods Pro');
        clickAddToCartCta();
        clickNoCoverage();
        goToBasket();
        verifyOnBasketPage();
        checkBasketItemsTotal();
        checkBasketPriceTotal();
        pageScreenshot();
    });
});
