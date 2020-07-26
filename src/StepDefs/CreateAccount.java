package StepDefs;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CreateAccount {
	
	WebDriver driver;
	
	@Given("^user is in the Home page$")
	public void user_is_in_the_Home_page() throws InterruptedException  {
		
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Aqdas\\Desktop\\Chromed\\chromedriver.exe");
		driver= new ChromeDriver();
		Thread.sleep(2000);
		driver.manage().window().maximize();
		driver.navigate().to("");
	    
	}

	@Given("^user clicks Create An Account button$")
	public void user_clicks_Create_An_Account_button()  {
	    
	}

	@Given("^user enters First Name$")
	public void user_enters_First_Name()  {
	    
	}

	@Given("^user enters Last Name$")
	public void user_enters_Last_Name()  {
	    
	}

	@When("^user enters Email Address$")
	public void user_enters_Email_Address()  {
	    
	}

	@When("^user enters Password$")
	public void user_enters_Password()  {
	    
	}

	@When("^user confirms password$")
	public void user_confirms_password()  {
	    
	}

	@When("^user enters Phone Number$")
	public void user_enters_Phone_Number()  {
	   
	}

	@When("^user click Google image$")
	public void user_click_Google_image()  {
	    
	}

	@Then("^user closes the page$")
	public void user_closes_the_page()  {


	}

	
	
	
     }
