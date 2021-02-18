package Utils;

import org.openqa.selenium.WebDriver;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class ConfigNM {

    private static Properties properties = new Properties();

    static {

        String path = "resources.properties";

        try {
            FileInputStream file = new FileInputStream(path);
            properties = new Properties();
            properties.load(file);
            file.close();

        }catch (IOException e){
            e.printStackTrace();
        }
    }


    public static String getValue(String keyword){

        return properties.getProperty(keyword);


    }

}
