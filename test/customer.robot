*** Settings ***
Resource        basePage.robot    

Test Setup      Start Session 
Test Teardown   End Session

*** Test Cases ***
Validate List Customers Layout
    [Tags]                         customer_list

    Go To                          ${url}/customers

    Sleep    1s
    Page Should Contain Element  css:.customer-title

    Page Should Contain Element  css:.new-customer-button
    Element Text Should Be       css:.new-customer-button    Create New

    Page Should Contain Element  css:.menu-list    

    Page Should Contain Element  css:.customer-search-form
    Page Should Contain Element  css:.docnumber-field
    Page Should Contain Element  css:.name-field
    Page Should Contain Element  css:.search-customer-button

    Page Should Contain Element  css:.customer-table

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

Create Customer Successfully
    [tags]                          add_customer_success
    Go To                           ${url}/customers
    Click Element                   css:button.new-customer-button
    Fill Customer Form                 Joe Doe     51875281000167    joe.doe@test.com 
    Go To Customer List

Remove Customer Successfully
    [Tags]                         remove_customer_success
    Go To                          ${url}/customers
    Sleep                          3s            

    ${remove_username} =    Get Text   css:body > app-root > div > div:nth-child(2) > app-customers > table > tbody > tr:nth-child(1) > td:nth-child(2)
    Click Element                  css:body > app-root > div > div:nth-child(2) > app-customers > table > tbody > tr:nth-child(1) > td:nth-child(4) > button.button.remove-button.is-danger.is-light

    Element Text Should Be         css:.modal-card-body    Are you sure you want to remove the customer ${remove_username} ?
    Click Element                  css:body > app-root > div > div:nth-child(2) > app-customers > div > div.modal-card > footer > button:nth-child(2)

    Click Element                  css:body > app-root > div > div:nth-child(2) > app-customers > table > tbody > tr:nth-child(1) > td:nth-child(4) > button.button.remove-button.is-danger.is-light
    Element Text Should Be         css:.modal-card-body    Are you sure you want to remove the customer ${remove_username} ?
    Click Element                  css:body > app-root > div > div:nth-child(2) > app-customers > div > div.modal-card > footer > button.button.is-danger    

    Sleep                          3s
    Element Text Should Be         css:div[class=message-body]    The customer ${remove_username} was removed successfully!

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