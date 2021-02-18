package Pages;

import com.codeborne.selenide.SelenideElement;
import org.openqa.selenium.By;

import java.util.List;

import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.$$;

public class checkoutOverviewPage {

    private SelenideElement finishButton = $(By.xpath("//a[contains(text(),'FINISH')]"));
    private SelenideElement itemTotal = $(By.xpath("//div[@class='summary_subtotal_label']"));
    private SelenideElement orderConfirmation = $(By.xpath("//div[@id='checkout_complete_container']"));
    private List<SelenideElement> verifiedItems = $$(By.xpath("//div[@class='inventory_item_name']"));

    public List<SelenideElement> getVerifiedItems() {
        return verifiedItems;
    }

    public SelenideElement getOrderConfirmation() {
        return orderConfirmation;
    }

    public SelenideElement getFinishButton() {
        return finishButton;
    }

    public SelenideElement getItemTotal() {
        return itemTotal;
    }
}
