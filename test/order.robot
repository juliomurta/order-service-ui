*** Settings ***
Resource        basePage.robot    

Test Setup      Start Session 
Test Teardown   End Session


*** Test Cases ***
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

    