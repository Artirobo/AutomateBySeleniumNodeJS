
var webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until;

var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();
  driver.get("https://www.google.com/");

  

  driver.findElement(By.name("q")).sendKeys("Querry ");
  driver.findElement(By.name('btnK')).click();


    
  //driver.quit();
