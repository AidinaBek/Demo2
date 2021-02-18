package Utils;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.util.concurrent.TimeUnit;

public class NMDriver {

    private static WebDriver driver;

    public static WebDriver getNMDriver() throws InterruptedException {

        if (driver != null) {
            return driver;
        }

        String browser = ConfigNM.getValue("browser");

        switch (browser ){
            case "CHROME":
                WebDriverManager.chromedriver().setup();
                driver = new ChromeDriver();
            case "FIREFOX":
                WebDriverManager.firefoxdriver().setup();
                driver = new FirefoxDriver();
             break;
            default:
                WebDriverManager.chromedriver().setup();
                ChromeOptions options = new ChromeOptions();
                options.addArguments("disable-infobars");
                options.addArguments("start-maximized");
                driver =new ChromeDriver();
                throw new IllegalStateException("Unexpected value: " + browser);
        }
        driver.manage().window().maximize();
        driver.manage().timeouts().pageLoadTimeout(12, TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);

        return driver;
    }

    public static void quitDriver(){
        if(driver != null){
            driver.close();
            driver =null;
        }
    }


}
