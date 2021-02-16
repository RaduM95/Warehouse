import {Selector} from 'testcafe';

const dress = Selector('.product-name[title="Printed Summer Dress"]');
const discount = Selector('.price-percent-reduction');
const proceedToCheckout = Selector('.btn.btn-default.button.button-medium[title="Proceed to checkout"]');
const proceedToCheckout2 = Selector('.cart_navigation .button.btn.btn-default.button-medium[title="Proceed to checkout"]');
const submit = Selector('#SubmitLogin')
const proceedToCheckout3 = Selector('.button.btn.btn-default.button-medium[name="processAddress"]');
const proceedToCheckout4 = Selector('.button.btn.btn-default.standard-checkout.button-medium[name="processCarrier"]');
const proceedToCheckout5 = Selector('.button.btn.btn-default.button-medium[type="submit"]');


fixture `Placing an order with a discounted product`
    .page `http://automationpractice.com/index.php`;

test(`order discounted product`, async t=> {

    await t.typeText('#search_query_top','dress')
    await t.pressKey('enter')
    await t.expect(discount.exists).ok();
    await t.click(Selector('.product-name[title="Printed Summer Dress"]').parent().parent().parent().find('.ajax_add_to_cart_button'));
    await t.click(proceedToCheckout);
    await t.click(proceedToCheckout2);
    await t.typeText('#email','testnewacc001@mailinator.com')
    await t.typeText('#passwd','12345')
    await t.click(submit)
    await t.click(proceedToCheckout3)
    await t.click('#cgv')
    await t.click(proceedToCheckout4)
    await t.click(Selector('.bankwire[title="Pay by bank wire"]'))
    await t.click(proceedToCheckout5)
});