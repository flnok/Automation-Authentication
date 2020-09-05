Feature: Sign Up API
  As an user of Atalink
  I want to sign up an account on the Website

  Scenario: Sign Up
    Given I visit SignUpAPI page
    When I fill information and send
    Then I get http code successfully

  Scenario: Get Verified Code
    Given I visit SignUpAPI page
    When I request to get code
    Then I success to get verified code

  Scenario: Verify Code
    Given I visit SignUpAPI page
    When I request to verify code
    Then I success to verify code