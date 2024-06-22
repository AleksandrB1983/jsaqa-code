Feature: Search a course
    Scenario: Should search by text
        Given user is on "/navigation" page
        When user search by "тестировщик"
        Then user sees the course suggested "1C-программист: расширенный курс"
    Scenario: Successful reservation of two seats in the cinema hall
        Given user is on second "/client/index.php"
        When user click by button
        Then user sees title "Вы выбрали билеты"
    Scenario: Successful reservation of the first row of 8 seats in the cinema hall
        Given user is on second "/client/index.php"
        When user click by button
        Then user sees title "Вы выбрали билеты"
    Scenario: Unsuccessful reservation of 1 seat in the cinema hall
        Given user is on second "/client/index.php"
        When user click by button
        Then user sees title ""