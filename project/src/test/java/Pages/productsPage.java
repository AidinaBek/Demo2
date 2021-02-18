package Pages;

import com.codeborne.selenide.SelenideElement;
import org.openqa.selenium.By;

import java.util.ArrayList;
import java.util.List;

import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.$$;

public class productsPage {

    private List<SelenideElement> allPrices = $$(By.xpath("//div[contains(@class,'inventory_item_price')]"));
    private List<SelenideElement> addToCart = $$(By.xpath("//button[contains(text(),'ADD TO CART')]"));
    private List<SelenideElement> allItems = $$(By.xpath("//div[@class='inventory_item_name']"));
    private SelenideElement shoppingCart = $(By.xpath("//a[@href='./cart.html']"));
    private SelenideElement newItem = $(By.xpath("(//button[contains(@class,'btn_primary btn_inventory')])[4]"));

    public SelenideElement getNewItem() {
        return newItem;
    }

    public SelenideElement getShoppingCart() {
        return shoppingCart;
    }

    public List<SelenideElement> getAllItems() {
        return allItems;
    }

    public List<SelenideElement> getAddToCart() {
        return addToCart;
    }

    public List<SelenideElement> getAllPrices() {
        return allPrices;
    }

}
