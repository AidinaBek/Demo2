package Pages;

import com.codeborne.selenide.SelenideElement;
import org.openqa.selenium.By;

import java.util.List;

import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.$$;

public class shoppingCart {

    private List<SelenideElement> items = $$(By.xpath("//div[@class='inventory_item_name']"));
    private SelenideElement shoppingCartLogo = $(By.xpath("//div[@class='subheader']"));
    private SelenideElement removeButton = $(By.xpath("(//button[contains(text(),'REMOVE')])[1]"));
    private SelenideElement continueShoppingButton = $(By.xpath("//a[contains(text(),'Continue Shopping')]"));
    private SelenideElement checkoutButton = $(By.xpath("//a[contains(text(),'CHECKOUT')]"));
    private SelenideElement removedItem = $(By.xpath("(//div[@class='inventory_item_name'])[1]"));
    private List<SelenideElement> prices = $$(By.xpath("//div[@class='inventory_item_price']"));

    public List<SelenideElement> getPrices() {
        return prices;
    }

    public SelenideElement getRemovedItem() {
        return removedItem;
    }

    public SelenideElement getCheckoutButton() {
        return checkoutButton;
    }

    public SelenideElement getContinueShoppingButton() {
        return continueShoppingButton;
    }

    public SelenideElement getRemoveButton() {
        return removeButton;
    }

    public SelenideElement getShoppingCartLogo() {
        return shoppingCartLogo;
    }

    public List<SelenideElement> getItems() {
        return items;
    }
}
