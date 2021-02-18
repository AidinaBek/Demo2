$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Demo.feature");
formatter.feature({
  "name": "Demo",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Demo"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Me,as an Authenticated guest is on the Products page",
  "keyword": "Given "
});
formatter.match({
  "location": "globalStepDef.me_as_an_Authenticated_guest_is_on_the_Products_page()"
});
formatter.result({
  "error_message": "java.lang.IllegalStateException: No webdriver is bound to current thread: 1. You need to call open(url) first.\n\tat com.codeborne.selenide.impl.WebDriverThreadLocalContainer.getWebDriver(WebDriverThreadLocalContainer.java:95)\n\tat com.codeborne.selenide.WebDriverRunner.getWebDriver(WebDriverRunner.java:73)\n\tat com.codeborne.selenide.impl.StaticDriver.getWebDriver(StaticDriver.java:37)\n\tat com.codeborne.selenide.drivercommands.Navigator.refresh(Navigator.java:174)\n\tat com.codeborne.selenide.SelenideDriver.refresh(SelenideDriver.java:117)\n\tat com.codeborne.selenide.Selenide.refresh(Selenide.java:199)\n\tat Pages.loginPage.openLoginPage(loginPage.java:39)\n\tat Pages.loginPage.navigateToProductsPage(loginPage.java:46)\n\tat StepsDef.globalStepDef.me_as_an_Authenticated_guest_is_on_the_Products_page(globalStepDef.java:39)\n\tat ✽.Me,as an Authenticated guest is on the Products page(src/test/resources/Demo.feature:4)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Place items to shopping cart",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Demo"
    }
  ]
});
formatter.step({
  "name": "I verify Items exist on the page",
  "keyword": "Given "
});
formatter.match({
  "location": "globalStepDef.i_verify_Items_exist_on_the_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I sorts items from the lowest to the highest price",
  "keyword": "Then "
});
formatter.match({
  "location": "globalStepDef.i_sorts_items_from_the_lowest_to_the_highest_price()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Add items to shopping cart",
  "keyword": "And "
});
formatter.match({
  "location": "globalStepDef.i_Add_items_to_shopping_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on the shopping cart",
  "keyword": "And "
});
formatter.match({
  "location": "globalStepDef.i_click_on_the_shopping_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify picked items in the shopping cart",
  "keyword": "And "
});
formatter.match({
  "location": "globalStepDef.i_verify_picked_items_in_the_shopping_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Me,as an Authenticated guest is on the Products page",
  "keyword": "Given "
});
formatter.match({
  "location": "globalStepDef.me_as_an_Authenticated_guest_is_on_the_Products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Remove item from the shopping cart",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Demo"
    }
  ]
});
formatter.step({
  "name": "I view the shopping cart",
  "keyword": "Given "
});
formatter.match({
  "location": "globalStepDef.i_view_the_shopping_cart()"
});
formatter.result({
  "error_message": "Element not found {By.xpath: //div[@class\u003d\u0027subheader\u0027]}\nExpected: exist\nScreenshot: file:/Users/ranakhamraeva/IdeaProjects/Demo/build/reports/tests/1613667724112.0.png\nPage source: file:/Users/ranakhamraeva/IdeaProjects/Demo/build/reports/tests/1613667724112.0.html\nTimeout: 4 s.\nCaused by: NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027subheader\u0027]\"}\n\tat com.codeborne.selenide.impl.WebElementSource.createElementNotFoundError(WebElementSource.java:37)\n\tat com.codeborne.selenide.impl.ElementFinder.createElementNotFoundError(ElementFinder.java:100)\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:131)\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:65)\n\tat com.sun.proxy.$Proxy14.innerText(Unknown Source)\n\tat StepsDef.globalStepDef.i_view_the_shopping_cart(globalStepDef.java:119)\n\tat ✽.I view the shopping cart(src/test/resources/Demo.feature:14)\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027subheader\u0027]\"}\n  (Session info: chrome\u003d88.0.4324.150)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Ranas-MacBook-Pro.local\u0027, ip: \u00272601:246:5500:1868:e80b:a30:facf:cd6a%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.150, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: /var/folders/pj/3mcw5vhs0qx...}, goog:chromeOptions: {debuggerAddress: localhost:65242}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 72607f84bf176ad64da5ffb8741d4e9a\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027subheader\u0027]}\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat com.codeborne.selenide.impl.WebElementSelector.findElement(WebElementSelector.java:30)\n\tat com.codeborne.selenide.impl.ElementFinder.getWebElement(ElementFinder.java:74)\n\tat com.codeborne.selenide.commands.GetInnerText.execute(GetInnerText.java:11)\n\tat com.codeborne.selenide.commands.GetInnerText.execute(GetInnerText.java:8)\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:145)\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:99)\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:65)\n\tat com.sun.proxy.$Proxy14.innerText(Unknown Source)\n\tat StepsDef.globalStepDef.i_view_the_shopping_cart(globalStepDef.java:119)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\n",
  "status": "failed"
});
formatter.step({
  "name": "I remove item from the shopping cart",
  "keyword": "When "
});
formatter.match({
  "location": "globalStepDef.i_remove_item_from_the_shopping_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify removed item is not exist in the shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "globalStepDef.i_verify_removed_item_is_not_exist_in_the_shopping_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on the Continue shopping button",
  "keyword": "And "
});
formatter.match({
  "location": "globalStepDef.i_click_on_the_Continue_shopping_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I view the Products page",
  "keyword": "Then "
});
formatter.match({
  "location": "globalStepDef.i_view_the_Products_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Checkout item",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I Add an item to shopping cart",
  "keyword": "Given "
});
formatter.step({
  "name": "I click on the shopping cart",
  "keyword": "When "
});
formatter.step({
  "name": "I verify picked items in the shopping cart",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on the Checkout button",
  "keyword": "And "
});
formatter.step({
  "name": "I enter first name \"\u003cfirst name\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "I enter last name \"\u003clast name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter zip code \"\u003czip code\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click on the Continue button",
  "keyword": "And "
});
formatter.step({
  "name": "I verify picked items on the Checkout page",
  "keyword": "Then "
});
formatter.step({
  "name": "I verify total price",
  "keyword": "And "
});
formatter.step({
  "name": "I click on the Finish button",
  "keyword": "Then "
});
formatter.step({
  "name": "I view the Order Confirmation page",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "first name",
        "last name",
        "zip code"
      ]
    },
    {
      "cells": [
        "Dina",
        "Murat",
        "60062"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Me,as an Authenticated guest is on the Products page",
  "keyword": "Given "
});
formatter.match({
  "location": "globalStepDef.me_as_an_Authenticated_guest_is_on_the_Products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Checkout item",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Demo"
    }
  ]
});
formatter.step({
  "name": "I Add an item to shopping cart",
  "keyword": "Given "
});
formatter.match({
  "location": "globalStepDef.i_Add_an_item_to_shopping_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the shopping cart",
  "keyword": "When "
});
formatter.match({
  "location": "globalStepDef.i_click_on_the_shopping_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify picked items in the shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "globalStepDef.i_verify_picked_items_in_the_shopping_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Checkout button",
  "keyword": "And "
});
formatter.match({
  "location": "globalStepDef.i_click_on_the_Checkout_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter first name \"Dina\"",
  "keyword": "Then "
});
formatter.match({
  "location": "globalStepDef.i_enter_first_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter last name \"Murat\"",
  "keyword": "And "
});
formatter.match({
  "location": "globalStepDef.i_enter_last_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter zip code \"60062\"",
  "keyword": "And "
});
formatter.match({
  "location": "globalStepDef.i_enter_zip_code(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Continue button",
  "keyword": "And "
});
formatter.match({
  "location": "globalStepDef.i_click_on_the_Continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify picked items on the Checkout page",
  "keyword": "Then "
});
formatter.match({
  "location": "globalStepDef.i_verify_picked_items_on_the_Checkout_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify total price",
  "keyword": "And "
});
formatter.match({
  "location": "globalStepDef.i_verify_total_price()"
});
formatter.result({
  "error_message": "java.lang.NumberFormatException: For input string: \"Item total: 49.99\"\n\tat java.base/java.lang.NumberFormatException.forInputString(NumberFormatException.java:68)\n\tat java.base/java.lang.Integer.parseInt(Integer.java:658)\n\tat java.base/java.lang.Integer.valueOf(Integer.java:989)\n\tat StepsDef.globalStepDef.i_verify_total_price(globalStepDef.java:226)\n\tat ✽.I verify total price(src/test/resources/Demo.feature:30)\n",
  "status": "failed"
});
formatter.step({
  "name": "I click on the Finish button",
  "keyword": "Then "
});
formatter.match({
  "location": "globalStepDef.i_click_on_the_Finish_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I view the Order Confirmation page",
  "keyword": "And "
});
formatter.match({
  "location": "globalStepDef.i_view_the_Order_Confirmation_page()"
});
formatter.result({
  "status": "skipped"
});
});