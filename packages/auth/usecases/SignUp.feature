@SignUp
Feature: Sign Up
  As an user of Atalink
  I want to sign up an account on the Website


  Scenario: By Email Successfully
    Given I visit SignUp page
    When I sign up with the information as below:
      | first_name       | random           |
      | last_name        | random           |
      | birthday         | 30 tháng 4, 2000 |
      | gender           | Nam              |
      | email_or_phone   | random_email     |
      | password         | random           |
      | confirm_password | random           |
    Then I am notified Xác nhận tài khoản

  Scenario: By Phone Successfully
    Given I visit SignUp page
    When I sign up with the information as below:
      | first_name       | random            |
      | last_name        | random            |
      | birthday         | 01 tháng 12, 1994 |
      | gender           | Nữ               |
      | email_or_phone   | random_phone      |
      | password         | random            |
      | confirm_password | random            |
    Then I am notified Xác nhận tài khoản

  Scenario: Email Already Existed
    Given I visit SignUp page
    When I sign up with the information as below:
      | first_name       | random           |
      | last_name        | random           |
      | birthday         | 19 tháng 5, 1998 |
      | gender           | Khác             |
      | email_or_phone   | admin@atalink.vn |
      | password         | random           |
      | confirm_password | random           |
    Then I am notified Email này đã được đăng ký.


