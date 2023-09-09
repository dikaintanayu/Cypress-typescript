import { LoginPage } from "./pages/login_pages"
import { DashboardPage } from "./pages/dashboard_pages"
import { ProductPage } from "./pages/product_detail_pages"
import { CartPage } from "./pages/cart_pages"


let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let productPage = new ProductPage()
let cartPage = new CartPage()
const URL = 'https://www.saucedemo.com/'

it('Successfully checkout', () => {
    loginPage.login(URL, 'standard_user', 'secret_sauce')
    dashboardPage.sauceLabsBackpack()
    productPage.addCart()
    productPage.goToCart()
    cartPage.checkout()
    cartPage.fillCheckoutInformation('dika', 'intan', '1122')
    cartPage.continue()
    cartPage.finish()
    cartPage.assertCheckoutSuccess()
})

it('Failed checkout - FirstName Empty', () => {
    loginPage.login(URL, 'standard_user', 'secret_sauce')
    dashboardPage.sauceLabsBackpack()
    productPage.addCart()
    productPage.goToCart()
    cartPage.checkout()
    cartPage.fillCheckoutInformation('{backspace}', 'intan', '1122')
    cartPage.continue()
    cartPage.assertFirstNameEmptyError()
})