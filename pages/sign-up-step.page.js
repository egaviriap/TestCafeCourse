import { Selector, t} from 'testcafe'

class LoginPage{
    constructor(){
        this.signInButton      = Selector('.login')
        this.emailSignUp       = Selector('#email_create')
        this.emailSignUpTxt    = 'egaviria'+ Math.random(100)+'@automationtest.com'
        this.SubmitCreate      = Selector('#SubmitCreate')
        this.gender            = Selector('#id_gender1')
        this.FirstName         = Selector('#customer_firstname')
        this.LastName          = Selector('#customer_lastname')
        this.passwordNewUser   = Selector('#passwd')
        this.day               = Selector('#days')
        this.month               = Selector('#months')
        this.year               = Selector('#years')
        this.FirstNameAddress  = Selector('#firstname')
        this.LastNameAddress  = Selector('#lastname')
        this.CompanyAddress  = Selector('#company')
        this.Address           = Selector('#address1')
        this.Address2           = Selector('#address2')
        this.city           = Selector('#city')
        this.postcode           = Selector('#postcode')
        this.state             =Selector('#id_state')
        this.country           = Selector('#id_country')
        this.mobile           = Selector('#phone_mobile')
        this.addressAlias           = Selector('#alias')
        this.register          =Selector('#submitAccount')
        this.SignOut           =Selector('.logout')
        this.email             = Selector('#email')
        this.password          = Selector('#passwd')
        this.SubmitLogin       = Selector('#SubmitLogin')
    }

    async login(username,password){
        await t
        .typeText(this.user_login, username)
        .typeText(this.user_password, password)
        .pressKey('enter')
    }
}

export default LoginPage