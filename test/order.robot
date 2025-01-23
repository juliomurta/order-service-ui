*** Settings ***
Resource        basePage.robot    

Test Setup      Start Session 
Test Teardown   End Session

*** Test Cases ***

Validate List Orders Layout
    [Tags]                         order_list

    Go To                          ${url}/orders

    Sleep    1s
    Page Should Contain Element  css:.order-title

    Page Should Contain Element  css:.new-order-button
    Element Text Should Be       css:.new-order-button    Create New

    Page Should Contain Element  css:.menu-list    

    Page Should Contain Element  css:.order-search-form
    Page Should Contain Element  css:.customer-field
    Page Should Contain Element  css:.employee-field
    Page Should Contain Element  css:.search-order-button

    Page Should Contain Element  css:.order-table

    Page Should Contain Element  css:.id-table-column
    Element Text Should Be       css:.id-table-column    Id ▲

    Page Should Contain Element  css:.customer-table-column
    Element Text Should Be       css:.customer-table-column    Customer ▲

    Page Should Contain Element  css:.employee-table-column
    Element Text Should Be       css:.employee-table-column    Employee ▲
    
    Page Should Contain Element  css:.date-table-column
    Element Text Should Be       css:.date-table-column    Date ▲
    
    Page Should Contain Element  css:.start-table-column
    Element Text Should Be       css:.start-table-column    Start ▲
    
    Page Should Contain Element  css:.finish-table-column
    Element Text Should Be       css:.finish-table-column    Finish ▲

    Page Should Contain Element  css:.edit-button
    Element Text Should Be       css:.edit-button    Edit

    Page Should Contain Element  css:.remove-button
    Element Text Should Be       css:.remove-button    Remove

Validate Order Form
    [Tags]                         validate_order_form
    Go To                          ${url}/order/new    
    Click Element                  css:button[type=submit]

    Sleep    1s
    Element Text Should Be    css:.customer-error    Customer is required.
    Element Text Should Be    css:.employee-error    Employee is required.
    Element Text Should Be    css:.date-error    Date is required.
    Element Text Should Be    css:.start-error    Start is required.
    Element Text Should Be    css:.finish-error    Finish is required.
    Element Text Should Be    css:.description-error    A description of the service order is required.
    
    Go To                           ${url}/order
    Sleep    1s
    Page Should Contain Element  css:.title


Create Order Successfully
    [tags]                          add_order_success
    Go To                           ${url}/order/new    
    Fill Order Form                 1     1    20/01/2024   09:00   17:0  ${lorem_ipsum}
    Go To Order List


Remove Order Successfully
    [Tags]                         remove_order_success
    Go To                          ${url}/orders
    Sleep                          1s            

    Click Element                  css:body > app-root > div > div:nth-child(2) > app-orders > table > tbody > tr:nth-child(1) > td:nth-child(7) > button.button.remove-button.is-danger.is-light
    Element Text Should Be         css:.modal-card-body    Are you sure you want to remove the service order 1 ?
    Click Element                  css:body > app-root > div > div:nth-child(2) > app-orders > div > div.modal-card > footer > button:nth-child(2)

    Click Element                  css:body > app-root > div > div:nth-child(2) > app-orders > table > tbody > tr:nth-child(1) > td:nth-child(7) > button.button.remove-button.is-danger.is-light
    Element Text Should Be         css:.modal-card-body    Are you sure you want to remove the service order 1 ?
    Click Element                  css:body > app-root > div > div:nth-child(2) > app-orders > div > div.modal-card > footer > button.button.is-danger    

    Sleep                          1s
    Element Text Should Be         css:div[class=message-body]    The service order 1 was removed successfully!

*** Keywords ***
Fill Order Form
    [Arguments]                     ${customer}       ${employee}    ${date}   ${start}   ${finish}   ${description}     
    Select From List By Index       css:select[name=customer]    ${customer}
    Select From List By Index       css:select[name=employee]    ${employee}    
    Input Text                      css:input[name=date]    ${date}    
    Input Text                      css:input[name=start]    ${start}    
    Input Text                      css:input[name=finish]    ${finish}    
    Input Text                      css:textarea[name=description]    ${description}
    Click Element                   css:button[type=submit]

Go To Order List
    [Arguments]   
    Sleep    3s
    Element Text Should Be    css:div[class=message-body]    Service order created successfully!

    