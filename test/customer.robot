*** Settings ***
Resource        basePage.robot    

Test Setup      Start Session 
Test Teardown   End Session

*** Test Cases ***
Validate Customer Form
    [Tags]                         validate_customer_form
    Go To                          ${url}/customer/new    
    Click Element                  css:button[type=submit]

    Sleep    1s
    Element Text Should Be    css:.name-error    Name is required.
    Element Text Should Be    css:.docnumber-error    Document Number is required.
    Element Text Should Be    css:.email-error    Email is required.
    Fill Customer Form                 Jo     518752    joe.doetest.com 
    
    Sleep    1s
    Element Text Should Be    css:.name-error    Name min length is 3.
    Element Text Should Be    css:.docnumber-error    Document Number should have 14 characters
    Element Text Should Be    css:.email-error    The input must be a valid email.

    Go To                           ${url}/customer
    Sleep    1s
    Page Should Contain Element  css:.title

     
Create Customer Successfully
    [tags]                          add_customer_success
    Go To                           ${url}/customer/new
    Fill Customer Form                 Joe Doe     51875281000167    joe.doe@test.com 
    Go To Customer List

*** Keywords ***
Fill Customer Form
     [Arguments]                     ${name}       ${documentNumber}    ${email} 
     Input Text                      css:input[name=name]        ${name}
     Input Text                      css:input[name=documentNumber]        ${documentNumber}
     Input Text                      css:input[name=email]        ${email}
     Click Element                   css:button[type=submit]

Go To Customer List
    [Arguments]   
    Sleep    3s
    Element Text Should Be    css:div[class=message-body]    Customer created successfully!