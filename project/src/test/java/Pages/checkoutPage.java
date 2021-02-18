package Pages;

import com.codeborne.selenide.SelenideElement;
import org.openqa.selenium.By;
import static com.codeborne.selenide.Selenide.$;

public class checkoutPage {

    private SelenideElement firstName = $(By.xpath("//input[@id='first-name']"));
    private SelenideElement lastName = $(By.xpath("//input[@id='last-name']"));
    private SelenideElement zipCode = $(By.xpath("//input[@id='postal-code']"));
    private SelenideElement continueButton = $(By.xpath("//input[@value='CONTINUE']"));

    public SelenideElement getFirstName() {
        return firstName;
    }

    public SelenideElement getLastName() {
        return lastName;
    }

    public SelenideElement getZipCode() {
        return zipCode;
    }

    public SelenideElement getContinueButton() {
        return continueButton;
    }
}
