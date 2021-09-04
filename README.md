# SDET_Test


**Test Time: 60 Mins**
**Instructions**

1. Install and set up Cypress in your machine.
2. Automate the below scenario and check in your code to the same GitHub repository once completed.
3. Use any Programming language of your preference.


**Question:**
Automate all the test cases falls under “Add to cart journey of an Apple iPad and few other accessories” on amazon


**Note:** Below is the steps that will guide you through the journey and any necessary configurations. No Validations are included in the steps.

1. Go to https://www.amazon.co.uk.
2. Search for iPad
3. Only select the authentic Space Grey iPad with 64 GB configuration sold by the apple store.
4. Add to cart the above configuration item to Cart if in stock, else select any In Stock iPad into the Cart (it can be of any colour).
5. Add below accessories in the same order –
	 Apple Pencil
	 Apple Air Pods Pro
6. Check the Basket total and total items count.


# Cypress - UI tests

- This repository contains UI tests against production environment for Amazon UK website
- The tests included are :
	* Functional user journey test

## How to run tests?
	`npm run headless`
	`npm run headed`
	`npm run open`
	- In Open mode click the test which should open UI test runner and then execute test step by step
	- Screenshot of the expected result at the end of journey being stored in screenshots folder
## Why Cypress?

        `https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell`

## Tech Stack to use:

- Cypress as framework [Cypress](https://www.cypress.io)
- Current Cypress Version 8.2.0 [Changelog](https://docs.cypress.io/guides/references/changelog.html#8-2-0)
- Chai as assertion library built in Cypress - [Chai](https://docs.cypress.io/guides/references/assertions.html#Chai)
- Mochawesome Reporting with HTML and added screenshots for failed tests
  [Mochawesome](https://docs.cypress.io/guides/tooling/reporters.html#Custom-reporter)

## What should be added ?

- deployment folder
- jenkins folder
- docker (dockerignore, docker-compose.yml, dockerfile etc.)
- eslint (eslintignore, eslintrc)
- gitignore
- npmrc
- browserstack.json (for cross browser if needed)
- cypress.json (Generates with cypress installation)
- jsconfig.json
- package-lock.json and package.json (Could be generated with cypress installations)
- reporter-config.json (This can be created for junit trend report)



