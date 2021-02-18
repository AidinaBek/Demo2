package Pages;

import Utils.ConfigNM;
import Utils.NMDriver;
import com.codeborne.selenide.Condition;
import com.codeborne.selenide.Selenide;
import com.codeborne.selenide.SelenideElement;
import com.codeborne.selenide.WebDriverRunner;
import org.openqa.selenium.By;

import java.util.Set;

import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.refresh;

public class loginPage {

    private SelenideElement login = $(By.xpath("//input[@id='user-name']"));
    private SelenideElement password = $(By.xpath("//input[@id='password']"));
    private SelenideElement loginButton = $(By.xpath("//input[@id='login-button']"));

    public SelenideElement getLogin() {
        return login;
    }

    public SelenideElement getPassword() {
        return password;
    }

    public SelenideElement getLoginButton() {
        return loginButton;
    }

    public void openLoginPage() throws InterruptedException {
        try {
            WebDriverRunner.setWebDriver(NMDriver.getNMDriver());
            NMDriver.getNMDriver().get(ConfigNM.getValue("browser"));
        } catch (Exception e) {
            refresh();
            WebDriverRunner.setWebDriver(NMDriver.getNMDriver());
            NMDriver.getNMDriver().get(ConfigNM.getValue("browser"));
        }
    }

    public void navigateToProductsPage() throws InterruptedException {
        openLoginPage();
        try {
            getLogin().waitUntil(Condition.exist, 10000).waitUntil(Condition.visible, 10000).setValue(ConfigNM.getValue("login"));
            getPassword().waitUntil(Condition.exist, 10000).waitUntil(Condition.visible, 10000).setValue(ConfigNM.getValue("password"));
        } catch (Exception e) {
            refresh();
            getLogin().waitUntil(Condition.exist, 10000).waitUntil(Condition.visible, 10000).setValue(ConfigNM.getValue("login"));
            getPassword().waitUntil(Condition.exist, 10000).waitUntil(Condition.visible, 10000).setValue(ConfigNM.getValue("password"));
        }

        try {
            String mainWindow = NMDriver.getNMDriver().getWindowHandle();
            getLoginButton().waitUntil(Condition.exist, 10000).waitUntil(Condition.visible, 10000).click();
            Set<String> allWindowHandles = NMDriver.getNMDriver().getWindowHandles();
            for (String handle : allWindowHandles) {
                if (!mainWindow.equals(handle)) {
                    NMDriver.getNMDriver().switchTo().window(handle);
                }
            }
        } catch (Exception e) {
            refresh();
            getLoginButton().waitUntil(Condition.exist, 10000).waitUntil(Condition.visible, 10000).click();
        }


    }
}
