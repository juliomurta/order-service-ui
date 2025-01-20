*** Settings ***
Resource        basePage.robot    

Test Setup      Start Session 
Test Teardown   End Session


*** Test Cases ***
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

    