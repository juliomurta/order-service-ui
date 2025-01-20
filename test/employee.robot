*** Settings ***
Resource        basePage.robot    

Test Setup      Start Session 
Test Teardown   End Session

*** Test Cases ***
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
    