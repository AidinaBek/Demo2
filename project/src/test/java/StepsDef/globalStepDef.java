package StepsDef;

import Pages.*;
import Utils.ConfigNM;
import Utils.NMDriver;
import com.codeborne.selenide.Condition;
import com.codeborne.selenide.SelenideElement;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.asserts.SoftAssert;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Locale;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static com.codeborne.selenide.Selenide.*;


public class globalStepDef {

    loginPage loginPage = new loginPage();
    productsPage productsPage = new productsPage();
    shoppingCart cart = new shoppingCart();
    checkoutPage checkoutPage = new checkoutPage();
    checkoutOverviewPage checkoutOverviewPage = new checkoutOverviewPage();
    SoftAssert softAssert = new SoftAssert();

    @Given("Me,as an Authenticated guest is on the Products page")
    public void me_as_an_Authenticated_guest_is_on_the_Products_page() throws InterruptedException {
        loginPage.navigateToProductsPage();
    }

    @Given("I verify Items exist on the page")
    public void i_verify_Items_exist_on_the_page() {
        for (SelenideElement element : productsPage.getAllItems()) {
            element.waitUntil(Condition.visible, 10000).shouldBe(Condition.visible);
        }

    }

    @Then("I sorts items from the lowest to the highest price")
    public void i_sorts_items_from_the_lowest_to_the_highest_price() {

        SelenideElement dropDown = $(By.xpath("//select[@class='product_sort_container']"));
        dropDown.waitUntil(Condition.exist, 50000).waitUntil(Condition.visible, 10000).click();
        dropDown.selectOptionByValue(ConfigNM.getValue("dropDownValue"));

        List<Double> prices = new ArrayList<>();

        for (SelenideElement price : productsPage.getAllPrices()) {
            if (price.innerText().contains("$")) {
                prices = (List<Double>) BigDecimal.valueOf(Double.parseDouble(price.innerText().replace("$", "").trim()));
            }

            Collections.sort(prices);

            for (int i = 0; i < prices.size(); i++) {
                if (prices.get(i) < prices.get(i + 1)) {
                    softAssert.assertTrue(true);
                } else {
                    break;
                }
            }
        }

    }

    @Then("I Add items to shopping cart")
    public void i_Add_items_to_shopping_cart() throws InterruptedException {

        for (int i = 0; i < productsPage.getAddToCart().size(); i++) {

            WebDriverWait wait = new WebDriverWait(NMDriver.getNMDriver(), 20);
            wait.until(ExpectedConditions.elementToBeClickable(productsPage.getAddToCart().get(i))).click();

        }
    }

    @Then("I click on the shopping cart")
    public void i_click_on_the_shopping_cart() {
        try {
            productsPage.getShoppingCart().waitUntil(Condition.visible, 10000).click();
        } catch (Exception e) {
            refresh();
            productsPage.getShoppingCart().waitUntil(Condition.visible, 10000).click();
        }
    }

    @Then("I verify picked items in the shopping cart")
    public void i_verify_picked_items_in_the_shopping_cart() {

        List<String> items = new ArrayList<>();
        List<String> itemsFromTheShoppingCart = new ArrayList<>();

        for (SelenideElement element : productsPage.getAllItems()) {
            items.add(element.innerText().toLowerCase().trim());
        }
        for (SelenideElement element : cart.getItems()) {
            itemsFromTheShoppingCart.add(element.innerText().toLowerCase().trim());
        }

        Collections.sort(items);
        Collections.sort(itemsFromTheShoppingCart);

        softAssert.assertEquals(items, itemsFromTheShoppingCart);
    }

    @Given("I view the shopping cart")
    public void i_view_the_shopping_cart() {
        String actualValue = cart.getShoppingCartLogo().innerText().trim().toLowerCase();
        String expectedValue = ConfigNM.getValue("logo").trim().toLowerCase();
        softAssert.assertEquals(actualValue, expectedValue);
    }

    @When("I remove item from the shopping cart")
    public void i_remove_item_from_the_shopping_cart() {

        cart.getRemoveButton().waitUntil(Condition.visible, 10000).click();
    }

    @Then("I verify removed item is not exist in the shopping cart")
    public void i_verify_removed_item_is_not_exist_in_the_shopping_cart() {

        String actualRemovedItem = cart.getRemovedItem().innerText().toLowerCase().trim();
        String expectedItem = ConfigNM.getValue("removedItem").toLowerCase().trim();

        softAssert.assertEquals(actualRemovedItem, expectedItem);

    }

    @Then("I click on the Continue shopping button")
    public void i_click_on_the_Continue_shopping_button() {

        cart.getContinueShoppingButton().waitUntil(Condition.visible, 10000).click();
    }

    @Then("I view the Products page")
    public void i_view_the_Products_page() throws InterruptedException {

        String actualTitle = NMDriver.getNMDriver().getTitle().toLowerCase(Locale.ROOT).trim();
        String expectedTitle = ConfigNM.getValue("productsPage").toLowerCase().trim();
        softAssert.assertEquals(actualTitle, expectedTitle);
    }

    @Given("I Add an item to shopping cart")
    public void i_Add_an_item_to_shopping_cart() {

        productsPage.getNewItem().waitUntil(Condition.visible, 10000).click();
    }


    @Then("I click on the Checkout button")
    public void i_click_on_the_Checkout_button() {

        cart.getCheckoutButton().waitUntil(Condition.visible, 10000).click();
    }

    @Then("I enter first name {string}")
    public void i_enter_first_name(String firstName) throws InterruptedException {
        Pattern pattern = Pattern.compile("[A-Z][a-z]*");
        Matcher matcher = pattern.matcher(firstName);
        if (matcher.matches()) {
            checkoutPage.getFirstName().waitUntil(Condition.visible, 10000).setValue(firstName);
        } else {
            throw new RuntimeException("First name does not match with the requirements");
        }
    }

    @Then("I enter last name {string}")
    public void i_enter_last_name(String lastName) throws InterruptedException {

        Pattern pattern = Pattern.compile("[A-Z][a-z]*");
        Matcher matcher = pattern.matcher(lastName);
        if (matcher.matches()) {
            checkoutPage.getLastName().waitUntil(Condition.visible, 10000).setValue(lastName);
        } else {
            throw new RuntimeException("Last name does not match with the requirements");
        }
    }

    @Then("I enter zip code {string}")
    public void i_enter_zip_code(String zipCode) {

        Pattern pattern = Pattern.compile("^\\d{5}(?:[-\\s]\\d{4})?$");
        Matcher matcher = pattern.matcher(zipCode);
        if (matcher.matches()) {
            checkoutPage.getZipCode().waitUntil(Condition.visible, 10000).setValue(zipCode);
        } else {
            throw new RuntimeException("Zip Code does not match with the requirements");
        }
    }


    @Then("I click on the Continue button")
    public void i_click_on_the_Continue_button() {

        checkoutPage.getContinueButton().waitUntil(Condition.visible, 10000).click();

    }

    @Then("I verify picked items on the Checkout page")
    public void i_verify_picked_items_on_the_Checkout_page() {

        for (SelenideElement element : checkoutOverviewPage.getVerifiedItems()) {
            element.waitUntil(Condition.visible, 10000).shouldBe(Condition.visible);
        }
    }

    @Then("I verify total price")
    public void i_verify_total_price() {

        List<SelenideElement> checkoutPrices = $$(By.xpath("//div[@class='inventory_item_price']"));
        int totalSumOfShoppingCart = 0;
        int totalSumAtTheCheckoutPage = 0;
        int itemTotal = Integer.valueOf(checkoutOverviewPage.getItemTotal().innerText().replace("$", ""));
        for (int i = 0; i < checkoutPrices.size(); i++) {
            if (checkoutPrices.get(i).innerText().contains("$")) {
                checkoutPrices.get(i).innerText().replace("$", "");
                totalSumOfShoppingCart = totalSumOfShoppingCart + Integer.valueOf(checkoutPrices.get(i).innerText());
            }

        }
        for (int i = 0; i < cart.getPrices().size(); i++) {
            if (cart.getPrices().get(i).innerText().contains("$")) {
                cart.getPrices().get(i).innerText().replace("$", "");
                totalSumAtTheCheckoutPage = totalSumAtTheCheckoutPage + Integer.valueOf(cart.getPrices().get(i).innerText());
            }
            softAssert.assertEquals(itemTotal, totalSumOfShoppingCart, totalSumAtTheCheckoutPage);
        }

    }

    @Then("I click on the Finish button")
    public void i_click_on_the_Finish_button() {
        checkoutOverviewPage.getFinishButton().waitUntil(Condition.visible, 10000).click();
    }

    @Then("I view the Order Confirmation page")
    public void i_view_the_Order_Confirmation_page() {
        checkoutOverviewPage.getOrderConfirmation().waitUntil(Condition.exist, 10000).shouldBe(Condition.exist);
    }

}
