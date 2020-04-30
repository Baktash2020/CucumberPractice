package StepDefs;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import PageObjectsModels.JoinP;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class JoinMTwentytow {
     WebDriver driver; 
	
	JoinP JOP;
	
	
	@Given("^user is in the Join  (\\d+) page$")
	public void user_is_in_the_Join_page(int arg1) throws InterruptedException {
		
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Aqdas\\Desktop\\GoogleChrome\\chromedriver.exe");
		driver= new ChromeDriver();
		
		JOP = new JoinP (driver);
		Thread.sleep(2000);
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.navigate().to("https://www.marriott.com/loyalty/createAccount/createAccountPage1.mi");


	}

	@Given("^user enters \"([^\"]*)\" in the first name text box$")
	public void user_enters_in_the_first_name_text_box(String firstName)  {
		JOP.getFirstName().sendKeys(firstName);

	}

	@Given("^user enters \"([^\"]*)\" in the last name text box$")
	public void user_enters_in_the_last_name_text_box(String lastName)  {
		JOP.getlastName().sendKeys(lastName);

	}

	@When("^user select Country/Region \"([^\"]*)\"$")
	public void user_select_Country_Region(String arg1)  {
		JOP.getcountry().isSelected();

	}

	@When("^user enters \"([^\"]*)\" in zip/postalcode text box$")
	public void user_enters_in_zip_postalcode_text_box(String zipcode)  {
		JOP.getzipcode().sendKeys(zipcode);

		
	}

	@When("^user enters \"([^\"]*)\" in the email text box$")
	public void user_enters_in_the_email_text_box(String Email)  {
		JOP.getEmail().sendKeys(Email);

		
	}

	@When("^user enters \"([^\"]*)\" in password text box$")
	public void user_enters_in_password_text_box(String password)  {

		JOP.getpassword().sendKeys(password);
		
	}

	@When("^user confirms \"([^\"]*)\" in password text box$")
	public void user_confirms_in_password_text_box(String confirmPassword)  {
		JOP.getConfirmPassword().sendKeys(confirmPassword);

		
	}

	@Then("^user Close the Page$")
	public void user_Close_the_Page()  {
    driver.close();

		
	}
	

	@When("^user enters \"([^\"]*)\" in first name text box$")
	public void user_enters_in_first_name_text_box(String arg1)  {
		JOP.getFirstName().sendKeys(arg1);

	}

	@When("^user enters \"([^\"]*)\" in last name text box$")
	public void user_enters_in_last_name_text_box(String arg1)  {
		JOP.getlastName().sendKeys(arg1);

	}

	@When("^user enters \"([^\"]*)\" in email text box$")
	public void user_enters_in_email_text_box(String arg1)  {
		JOP.getEmail().sendKeys(arg1);

	}


	
	
	
	
	
	


	

}
