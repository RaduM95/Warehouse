import {Selector} from 'testcafe';

const submit = Selector('#SubmitLogin')

fixture `Login with existing account`
    .page `http://automationpractice.com/index.php`;
test(`login with existing account`, async t=>{
    await t.click(Selector('.login[title="Log in to your customer account"]'));
    await t.typeText('#email','testnewacc001@mailinator.com')
    await t.typeText('#passwd','12345')
    await t.click(submit)

});