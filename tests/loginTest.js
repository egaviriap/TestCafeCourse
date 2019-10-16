import { Selector } from 'testcafe';

const signInButton      = Selector('.login')
const email             = Selector('#email')
const password          = Selector('#passwd')
const emailText         = String('testcafeClass@test.com')
const passwdText        = String('Test@1234')
const SubmitLogin       = Selector('#SubmitLogin')


fixture `Sign in test`
    .page `http://automationpractice.com/index.php`

test.skip('New Test 1', async t => {
    await t
        
        .click(signInButton)
        .typeText(email,emailText)
        .typeText(password,passwdText)
        .click(SubmitLogin)
        .takeScreenshot();
});