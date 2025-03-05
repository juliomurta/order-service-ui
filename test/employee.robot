*** Settings ***
Resource        basePage.robot    

Test Setup      Start Session 
Test Teardown   End Session

*** Test Cases ***

Validate List Employees Layout
    [Tags]            employee_list

    Go To             ${url}/employees
    
    Sleep    1s
    Page Should Contain Element  css:.employee-title

    Page Should Contain Element  css:.new-employee-button
    Element Text Should Be       css:.new-employee-button    Create New

    Page Should Contain Element  css:.menu-list    

    Page Should Contain Element  css:.employee-search-form
    Page Should Contain Element  css:.docnumber-field
    Page Should Contain Element  css:.name-field    
    Page Should Contain Element  css:.gender-field
    Page Should Contain Element  css:.date-from-field
    Page Should Contain Element  css:.date-to-field
    Page Should Contain Element  css:.search-employee-button
    
    Page Should Contain Element  css:.employee-table

    Page Should Contain Element  css:.id-table-column
    Element Text Should Be       css:.id-table-column    Id ▲

    Page Should Contain Element  css:.name-table-column
    Element Text Should Be       css:.name-table-column    Name ▲

    Page Should Contain Element  css:.docnumber-table-column
    Element Text Should Be       css:.docnumber-table-column    Document Number ▲

    Page Should Contain Element  css:.edit-button
    Element Text Should Be       css:.edit-button    Edit

    Page Should Contain Element  css:.remove-button
    Element Text Should Be       css:.remove-button    Remove

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

    Go To                           ${url}/employee
    Sleep    1s
    Page Should Contain Element  css:.title

Create Employee Successfully
    [tags]                          add_employee_success
    Go To                           ${url}/employee/new
    Fill Employee Form                 Joe Doe     42083371844    joe.doe@test.com    10/02/1994    1
    Go To Employee List

Remove Employee Successfully
    [Tags]                         remove_employee_success
    Go To                          ${url}/employees
    Sleep                          1s            

    ${remove_username} =    Get Text   css:body > app-root > div > div:nth-child(2) > app-employees > table > tbody > tr:nth-child(1) > td:nth-child(2)
    Click Element                  css:body > app-root > div > div:nth-child(2) > app-employees > table > tbody > tr:nth-child(1) > td:nth-child(4) > button.button.remove-button.is-danger.is-light
    
    Element Text Should Be         css:.modal-card-body    Are you sure you want to remove the employee ${remove_username} ?
    Click Element                  css:body > app-root > div > div:nth-child(2) > app-employees > div > div.modal-card > footer > button:nth-child(2)

    Click Element                  css:body > app-root > div > div:nth-child(2) > app-employees > table > tbody > tr:nth-child(1) > td:nth-child(4) > button.button.remove-button.is-danger.is-light
    Element Text Should Be         css:.modal-card-body    Are you sure you want to remove the employee ${remove_username} ?
    Click Element                  css:body > app-root > div > div:nth-child(2) > app-employees > div > div.modal-card > footer > button.button.is-danger    

    Sleep                          1s
    Element Text Should Be         css:div[class=message-body]    The employee ${remove_username} was removed successfully!


Paginate Employee List
    [Tags]                         paginate_employee_list
    Go To                          ${url}/employees
    Sleep                          1s    
    ${size_before_pagination} =    Get Element Count    css:body > app-root > div > div:nth-child(2) > app-employees > table > tbody > tr    
    Click Element    css:.employee-showmore-button    
    Sleep                          3s    
    ${size_after_pagination} =     Get Element Count    css:body > app-root > div > div:nth-child(2) > app-employees > table > tbody > tr
    Should Not Be Equal As Integers    ${size_before_pagination}    ${size_after_pagination}
    Should Be True    ${size_after_pagination} > ${size_before_pagination}

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

     