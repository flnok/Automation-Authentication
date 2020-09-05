@SignIn
Feature: Sign In
  As an user of Atalink
  I want to sign in to the Website

  Scenario: Incorrect
    Given I visit SignIn page
    When I login with the credential information as below:
      | username | admin@atalink.vn      |
      | password | daykhongphailamatkhau |
    Then I am notified Email hoặc mật khẩu không đúng. Vui lòng thử lại.

  Scenario: Successfully
    Given I visit SignIn page
    When I login with the credential information as below:
      | username | clonetantlbb@gmail.com |
      | password | 123QWEasd?!            |
    Then I may see /my-profile


