Needs to be responsive to multiple screen sizes

The answer to the problem is always a multiple of 9 which is why the mind reader works

results should be 0-99 for the page 5

When building this, remember we are not building 6 different pages. We are building one page whose elements are modified for the functionality of the page.

This is an html page.

go/refresh button needs to be round

buttons will use clickhandlers or eventlisteners to setState and then render a new page

we want 1 conatiner that we add and remove the elements based on the state of the page as a whole. (page 1-6) Carousel???

## Smac (specific, methodical and consistent) List
1. Understand the problems
    - Navigation (how to go from one page to the next)
    - changing text from page to page
    - additional button after first page
    - reset button always goes back to first page
    - Mapping the numbers to a symbol
    - 2nd to last page, the next button turns into a reveal button
    - The text at the top and the subtext change with every page
2. Break the issue into smaller parts
3. wireframes/atomic design
    - atoms: paragraphs, h1 tags, 
    - molecules: nav items (go/refresh button, next button)
    - organisms: Nav itself
    - templates: large text, next button, small text, refresh button
4. state?
    - data structures: arrays to determine what page we are on (?), strings for text
    - algorithms
5. Pseudocoding - procedural, functional, object oriented
    - have an array with the strings of text that you want given the page that you are on. [0,1,2,3,4,5]
    - array of objects with key value pairs
    - for loop to loop through the array?
    - remainder operator to get integers divisible by 9 to have the same symbol
    - 0-99 page will be a scroll
    - eventlistener to make the buttons work
    - create an object for the entire page (mindReader) and have the data in your arrays pull the correct data according to the state of your mindReader object

## HTML and Bootstrap

Create a container, row and column for the UI.

Create two separate buttons, one rectangular and one circular

Rectangular button only appears on pages 2-5

Circular button on all pages

Create h1 tags for the primary text and maybe a p element for the secondary text?

h1 element on all pages

p element on pages 2-6

Apply Bootstrap CSS to my html elements to get the container looking like a page.

## Javascript

initialize a variable that tells us what page we are on

initialize 2 arrays with strings we want for the text in the elements on the pages

for loop to create the range of integers that equal symbols on page 5???

create a function that changes the page according to button clicks

create a function that takes us back to page 1 if refresh button is clicked

create a function that changes the strings on the page according to what page we are on at the moment

