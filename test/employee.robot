*** Settings ***
Resource        basePage.robot    

Test Setup      Start Session 
Test Teardown   End Session

*** Test Cases ***
Validate Employee Form
    [Tags]                         validate_employee_form
    Go To                          ${url}/employee/new    
    Click Element                  css:button[type=submit]

    Sleep    1s
    Element Text Should Be    css:.name-error    Name is required.
    Element Text Should Be    css:.docnumber-error    Document Number is required.
    Element Text Should Be    css:.email-error    Email is required.
    Element Text Should Be    css:.birthdate-error    Birth Date is required.
    Element Text Should Be    css:.gender-error    Gender is required.
    
    Input Text                      css:input[name=name]        Jo
    Input Text                      css:input[name=documentNumber]          518752
    Input Text                      css:input[name=email]    joe.doetest.com    
    Click Element                   css:button[type=submit]
    
    Sleep    1s
    Element Text Should Be    css:.name-error    Name min length is 3.
    Element Text Should Be    css:.docnumber-error    Document Number should have 14 characters
    Element Text Should Be    css:.email-error    The input must be a valid email.
    Element Text Should Be    css:.birthdate-error    Birth Date is required.
    Element Text Should Be    css:.gender-error    Gender is required.

    Sleep    1s
    Page Should Contain Element  css:.title

Create Employee Successfully
    [tags]                          add_employee_success
    Go To                           ${url}/employee/new
    Fill Employee Form                 Joe Doe     42083371844    joe.doe@test.com    10/02/1994    1
    Go To Employee List

*** Keywords ***
Fill Employee Form
    [Arguments]                     ${name}       ${documentNumber}    ${email}    ${birthDate}    ${gender}

    Input Text                      css:input[name=name]        ${name}
    Input Text                      css:input[name=documentNumber]          ${documentNumber}
    Input Text                      css:input[name=email]    ${email}
    Input Text                      css:input[name=birthDate]    ${birthDate}
    Select From List By Index       css:select[name=gender]    ${gender}
    Click Element                   css:button[type=submit]

Go To Employee List
    [Arguments]    
    Sleep    3s
    Element Text Should Be    css:div[class=message-body]    Employee created successfully!
    