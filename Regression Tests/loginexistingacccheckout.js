import {Selector} from 'testcafe';

const blouse = Selector('.product-name[title="Blouse"]');
const proceedToCheckout = Selector('.btn.btn-default.button.button-medium[title="Proceed to checkout"]');
const proceedToCheckout2 = Selector('.cart_navigation .button.btn.btn-default.button-medium[title="Proceed to checkout"]');
const submit = Selector('#SubmitLogin')

fixture `Loging from checkout with an existing account`
    .page `http://automationpractice.com/index.php`;
test(`loging from checkout`, async t=>{
    await t.typeText('#search_query_top','blouse' )
    await t.pressKey('enter')
    await t.expect(blouse.count).eql(1);
    await t.click(Selector('.product-name[title="Blouse"]').parent().parent().find('.ajax_add_to_cart_button'));
    await t.click(proceedToCheckout);
    await t.click(proceedToCheckout2);
    await t.typeText('#email','testnewacc001@mailinator.com')
    await t.typeText('#passwd','12345')
    await t.click(submit)
});