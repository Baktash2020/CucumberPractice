package PageObjectsModels;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class CreateAccountP {
	
	WebDriver driver;
	
	public CreateAccountP (WebDriver x){
		
		driver = x; 
			
	}
	
	public WebElement getFirstName() {
		WebElement firstName = driver.findElement(By.name(""));
		return firstName;
		
	}
	
	public WebElement getLastName() {
		WebElement lastName = driver.findElement(By.name(""));
		return lastName;
		
	}
	
	public WebElement getEmail() {
		WebElement Email = driver.findElement(By.name(""));
		return Email;
		
	}
	
	public WebElement getpassword() {
		WebElement Password = driver.findElement(By.name(""));
		return Password;
		
	}
	
	public WebElement getconfirmPassword() {
		WebElement ConfirmPassword = driver.findElement(By.name(""));
		return ConfirmPassword;
		
	}
	
	public WebElement getphonenumber() {
		WebElement PhoneNumber = driver.findElement(By.name(""));
		return PhoneNumber;
		
	}
	
	public WebElement getgoogleimage() {
		WebElement GoogleImage = driver.findElement(By.name(""));
		return GoogleImage;
		
	}
	
	
}
