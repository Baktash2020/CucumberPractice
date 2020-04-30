package PageObjectsModels;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class JoinP {
	
	
    WebDriver driver;
	
	public JoinP (WebDriver x){
		
		driver = x; 
			
	}
	
	public WebElement getFirstName() {
		WebElement firstName = driver.findElement(By.name("firstName"));
		return firstName;
		
	}
	
	public WebElement getlastName() {
		WebElement lastName = driver.findElement(By.name("lastName"));
		return lastName;
		
	}
	
	public WebElement getcountry() {
		WebElement Country = driver.findElement(By.xpath("//*/form/div[4]/div/div[2]"));
		return Country;
		
	}
	
	public WebElement getzipcode() {
		WebElement Zipcode = driver.findElement(By.name("postalCode"));
		return Zipcode;
		
	}
	
	public WebElement getEmail() {
		WebElement firstName = driver.findElement(By.name("email"));
		return firstName;
		
	}
	
	public WebElement getpassword() {
		WebElement firstName = driver.findElement(By.name("password"));
		return firstName;
		
	}
	
	public WebElement getConfirmPassword() {
		WebElement firstName = driver.findElement(By.name("confirmPassword"));
		return firstName;
		
	}
	

}
