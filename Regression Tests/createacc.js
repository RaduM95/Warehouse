import {Selector} from 'testcafe';

const stateSelect = Selector('#id_state');
const stateOption = stateSelect.find('option');
const countrySelect = Selector('#id_country');
const countryOption = countrySelect.find('option');
const register = Selector('#submitAccount');

fixture `Create a new account`
    .page `http://automationpractice.com/index.php`;
test('Creating an account', async t=>{
    await t.click(Selector('.login[title="Log in to your customer account"]'));
    await t.typeText('#email_create','testnewacc008@mailinator.com')
    await t.click('#SubmitCreate')
    //Personal Information
    await t.typeText('input[name="customer_firstname"]','test')
    await t.typeText('input[name="customer_lastname"]','regression')
    await t.typeText('#passwd','12345')
    //Your address
    await t.typeText('#firstname','test')
    await t.typeText('#lastname','test')
    await t.typeText('#address1','2700 mission st')
    await t.typeText('#city', 'san francisco')
    await t.click(stateSelect)
    await t.click(stateOption.withText('California'))
    await t.expect(stateSelect.value).eql('5');
    await t.typeText('#postcode','94110')
    await t.click(countrySelect)
    await t.click(countryOption.withText('United States'))
    await t.expect(countrySelect.value).eql('21');
    await t.typeText('#phone_mobile','1312341256')
    await t.click('#alias').pressKey('ctrl+a delete').typeText('#alias','home')
    await t.click(register)

});