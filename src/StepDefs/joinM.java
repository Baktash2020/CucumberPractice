package StepDefs;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import PageObjectsModels.JoinP;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

   public class joinM {
	
	WebDriver driver; 
	
	JoinP JOP;
	
	@Given("^user is in the Join page$")
	public void user_is_in_the_Join_page() throws InterruptedException  {
		
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Aqdas\\Desktop\\GoogleChrome\\chromedriver.exe");
		driver= new ChromeDriver();
		
		JOP = new JoinP (driver);
		Thread.sleep(2000);
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.navigate().to("");
		
	}

	@Given("^user enters first name$")
	public void user_enters_first_name()  {
		JOP.getFirstName().sendKeys("Parigul");
		
	}

	@Given("^user enters last name$")
	public void user_enters_last_name()  {
		JOP.getlastName().sendKeys("Gulm");
		
	}

	@When("^user select country/region$")
	public void user_select_country_region() throws InterruptedException  {
		JOP.getcountry().isSelected();
		
		Thread.sleep(3000);
		
	}

	@When("^user enters zip/postalcode$")
	public void user_enters_zip_postalcode()  {
	    
		JOP.getzipcode().sendKeys("22191");
	}

	@When("^user enters email$")
	public void user_enters_email()  {
		JOP.getEmail().sendKeys("Parigul@hotmail.com");
		
	}

	@When("^user enters password$")
	public void user_enters_password()  {
		JOP.getpassword().sendKeys("123456789");
		
	    
	}

	@Then("^user close the page$")
	public void user_close_the_page() {
		driver.close();
	    
	}


}
