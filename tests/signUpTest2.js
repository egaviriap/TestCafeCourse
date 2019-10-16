import { Selector } from 'testcafe';
import SignupPage from '../pages/sign-up-step.page'

const signupPage = new SignupPage()

fixture `Sign up test`
    .page `http://automationpractice.com/index.php`

    test('Sign up test', async t =>{
        await t
        .click(signupPage.signInButton)
        .typeText(signupPage.emailSignUp,signupPage.emailSignUpTxt)
        .click(signupPage.SubmitCreate)
        .takeScreenshot()
        .click(signupPage.gender)
        .typeText(signupPage.FirstName,'Esneider')
        .typeText(signupPage.LastName,'Gav')
        .typeText(signupPage.passwordNewUser,'Esneider1234*')
        .click(signupPage.day)
        .click(Selector('option').filter('[value="14"]'))
        .click(signupPage.month)
        .click(signupPage.month.find('option').withText('September'))
        //.expect(month.value).eql('August')
        .click(signupPage.year)
        .click(Selector('option').filter('[value="1986"]'))
        .typeText(signupPage.CompanyAddress,'RealPage')
        .typeText(signupPage.Address,'Address1')
        .typeText(signupPage.Address2,'Address2')
        .typeText(signupPage.city,'Medellin')
        .click(signupPage.state)
        .click(signupPage.state.find('option').withText('Alabama'))
        //.expect(state.value).eql('Alabama')
        .typeText(signupPage.postcode,'00057')
        .click(signupPage.country)
        .click(signupPage.country.find('option').withText('United States'))
        //.expect(country.value).eql('United States')
        .typeText(signupPage.mobile,'5555555123')
        .typeText(signupPage.addressAlias,'test3')
        .takeScreenshot()
        .click(signupPage.register)
        .takeScreenshot()
       
        .click(signupPage.SignOut)
        await t
        .typeText(signupPage.email,signupPage.emailSignUpTxt)
        .typeText(signupPage.password,'Esneider1234*')
        .click(signupPage.SubmitLogin)
        .takeScreenshot();
    
    })