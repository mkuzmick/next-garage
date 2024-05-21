---
title: 'Data Visualization Part 3: Coding Data'
tags: [tutorials, ' datavis']

---

---
tags: tutorials, datavis
---
# Data Visualization Part 3: Coding Data

This document is going to walk you through a basic D3 example. You're welcome to just read the document, but I definitely recommend opening the basic [CodePen](https://codepen.io/zanewolf/pen/YzxLOpN) here and coding along as you go. Playing around with the code yourself, seeing what changing this or that does to the final result, is one of the best ways to learn. 

[**CodePen**](https://codepen.io/zanewolf/pen/YzxLOpN)

*Also, the screenshot text appears small in this document, I definitely recommend zooming in on the page, hitting Ctrl + + a few times until you can see everything clearly. No need to ruin your eyes. :)*

# The Modern Webpage (in a paragraph)

Webpages have three distinct components, generally. The HTML document (a file that ends in .html) is the file that houses the content of the webpage - the name, the header, the paragraphs of content, the images. The CSS file (ends in .css) is the style sheet. It tells the HTML file what fonts to use for the headers, where to place the paragraphs on the screen (left, right, center), what size the fonts should be, etc. And then the Javascript files (end in .js) are the files that make things (like graphs and charts), the results of which are delivered to the HTML document to be included in the webpage. Coding an interactive data visualization for a webpage involes making these three types of files and coding them all to get along. 

## The HTML Document 

For a more thorough tutorial of HTML, please check out [W3school](https://www.w3schools.com/html/html_intro.asp) or [MDN Web Docus](https://developer.mozilla.org/en-US/docs/Web/HTML).

But one guiding principle I want you to remember is that tags (anything enclosed in <>) must always be paired. There is an `<html>` tag at the top of the document, and there is a closing tag `</html>` at the bottom. 

![](https://i.imgur.com/pOiakDW.png)


The `<head></head>` section of the document is where you do two things: include any metadata about the website (such as its title, which is the name of the page displayed in a browser tab). It is also where any stylesheets are imported. Stylesheets can either be external (we are referencing the bootstrap css file at line 10) or internal (we are pointing the code towards our own css file at line 11). The stylesheet should be imported at the top of the html file, in the head section, rather than at the end because the code wants to know how it should style things before making them. 
    
The `<body></body>` tags contain the contents of the html page - what you want to display. 
    
   
Some quick definitions: 
* div: think of a div like a box that contains content. You don't always need a div, but they are extremely helpful for partitioning content on a screen, giving select content styling (e.g. you want the header for one section of your page to be blue, but another to be green. In css, as we'll see later, if you define the header color to be blue, it'll change ALL the headers. However, if the headers are in different divs, then you can select the header in a specific div to have their own color), or telling javascript where to place the visualization you're going to make on the page. Otherwise, how will it know where the visualization goes? 
* class: this is essentially giving the div(s) a label. Class names can be used for multiple divs. All divs with the classname of "blue" can be styled in css to have text with the color blue. 
* id: Unlike classnames, IDs can only be used for a single div, as they are a unique identifier. They can also be used for styling purposes, but the styling will only affect the individual element with that ID. 
* h1: and tags h2, h3, h4, etc. are specific tags that code headers. 
* p: p tags encode generic text

![](https://i.imgur.com/PnbUbl1.png)




This next chunk of code in the html documents sets up several things. First, it opens the body tag. Then it defines a div, with class "container-fluid", that all the following content sits in. All of the classnames in this section are from the bootstrap style sheet, and are not defined in the local css file. 

Next, we have a div that contains our main header on the page, which is denoted by the `<h1></h1>` tags.


And at line 24, there is a div with the id "chart-area", and the div itself is empty. When the code runs, the chart made in the javascript file will be 'deposited' in this div. 

![](https://i.imgur.com/07jf9fS.png)

    
The remaining lines of code in the HMTL file are where necessary code files are imported. If you were coding this using local files and and an editing software (Atom, Visual Studio, Webstorm, Sublime Text, etc), then this is where you tell the HTML file to also look for the javascript files that are making the charts, or doing whatever calculations you need them to do. 

## Cascading Style Sheets (CSS)

CSS is where we can start styling our content. We'll keep this simple for now. 

Let's say that we want the background color of the header to be...purple? I used a [Color Picker](https://htmlcolorcodes.com/) to find the hex code for the color I wanted (#D133FF). Now, there are a couple of ways we can achieve this. 

1. I can specify the h1 tag to have the color. 

![](https://i.imgur.com/jfHya93.png)



If I want ALL my h1s to have this color, that works. (Try copying and pasting the entire div - is the duplicate also purple?) But what if I only want THIS h1 to be purple? Then I can specify two different ways. 

2. I can add a class, 'colorPurple' to the div.

![](https://i.imgur.com/46YE4kS.png)


When specifying something using a classname in CSS, the name needs to be preceded by a period (`.colorPurple`). This works pretty well, but if there were other items in this div besides the header, then all the text would turn purple. 

Where else could you put the classname colorPurple? Try it. If you duplicate the header line, in the same div, without the classname, is it also purple? 

3. Lastly, I could use an ID. After all, IDs are unique to exactly one element in the webpage, so this is perfect. 

![](https://i.imgur.com/JRHPLIw.png)

When selecting by ID in css, the selector should be preceded by a hash, #.




---


# D3

D3 stands for Data Driven Documents. 

> D3.js is a JavaScript library for manipulating documents based on data. D3 helps you bring data to life using HTML, SVG, and CSS. D3’s emphasis on web standards gives you the full capabilities of modern browsers without tying yourself to a proprietary framework, combining powerful visualization components and a data-driven approach to DOM manipulation.

Basically, you create an image (graph/chart/diagram/sketch/picture/table/etc.) using code, based on data. If the data changes or is added to, then the image changes to reflect the new data.

Here's some [information](https://d3js.org/) if you want to read up on it, but for now I'm just going to walk you through building a visualization step by step. 


### 1. In the JS panel, copy in the data. 

You can find the data variable commented out in the Appendix A section of this document. 

![](https://i.imgur.com/PE5I8NJ.png)

This data is the country name, city name, population, whether or not it is in the EU, and some X and Y coordinates. Having the coordinates already in the data will make our jobs slightly easier. 

Now, let's experiment with the console for a hot second, since it will soon be *your best friend*. The console is essentially a readout where you can print variables or elements of your code to inspect them. You've seen the variable Data, but what does it actually look like to the webpage? 


![](https://i.imgur.com/rKuwcmL.png)

> Don't see the console? Hit this button here and it should pop up on the right side of the editor:  
> ![](https://i.imgur.com/X1NIIZ5.png)


I can print the entire array object, all 250 lines of it to the console and manually check it out. I can also print the length of it. There are 31 cities in this data object. I can print just the first element of the object - the information about Belgium. And there are a couple of different ways I can access the information within the Belgium element, but both print the name of the country the same way. 

Btw, accessing the specific elements of the array object is called 'indexing', which you can read more about [here](https://i.imgur.com/4SZ55w4.png).

> P.S. JS is a linear language, which means 1 must come before 2, which comes before 3. I have to define data first before I can call on it. What happens if you reverse the order, and place the console.log() line before data=...? 

I can also type manually in the console:

![](https://i.imgur.com/yTSToQk.png)

But wait, what was that? `x[1]` pulled the "i" from "Hi There"? Not 'H'?? Javascript arrays are *zero-indexed*, meaning that counting starts from 0, not 1. If you want to get the very first element in an array, you actually have to pull the 0th element. So, going back, is Belgium the first element of the data object, or is it actually the second? What's the first? 



### 2. Print the number of cities. 

![](https://i.imgur.com/hzOXp0D.png)

`d3.select()` is how you tell the javascript code what to look for. Here, we are saying, "go find the h1 object in the html and grab it for me", and if it finds what we're looking for, we use `.append("h3")` to add an h3 element to it. We're going to give that newly appended h3 item the class of 'city-num', and the text will by "Number of Cities" + a number". 

> P.S. Keep in mind that selecting 'h1' works here because we only have one h1 item in our html document. If we had multiple h1 items, though, what else could we use and select by that would return only the h1 item we're interested in? 

![](https://i.imgur.com/B2sxFdU.png)

If we inspect the page (right click + 'Inspect' or Ctrl + Shift+ I on windows), then we can see that in the web's version of the html doc, there is now and h3 element in the 'header' div below the purpleHeader `<h1></h1>`. 

And I can use the class "city-num" given to this subtitle to make it colorful.

![](https://i.imgur.com/yxIOO79.png)

Or align it to the center instead of the left. 

![](https://i.imgur.com/6hF3g5k.png)

But if the length of the data object changes (either smaller or larger), then the subtitle will change, too. 

### 3. Add the SVG

SVG stands for Scalable Vector Graphic and for our d3 purposes, you can think of it as our whiteboard. 

![](https://i.imgur.com/nMuDx3C.png)

Let's go from left to right and break this new chunk of code down step by step. First, with `let svg`, we are telling javascript "let the variable name 'svg' equal whatever is on the other side of the equals sign". The reason why we didn't do this when we were selecting the h1 element at line 252 is because we aren't going to need that element again. But with the svg, we're going to need to be able to reference it to attach our drawing to. So basically we're saying, "Javascript, remember the name for the whiteboard is svg, we're going to need it again." 

Next, d3.select() grabs the element with the matching id of "chart-area" and appends the actual svg to it. Select can also grab something by a class name (in which case the hash would turn into a period, same as with css). 

Below that, we're going to give the svg the width and height attributes, so we know how big the whiteboard is. (I know how big to make it, but often finding the best size for your purposes is a matter of trial and error.) Attributes modify the selected item and need to be attached (i.e. having them on a new line is fine, as long as it's the line directly after it, and no empty lines separating the two. You *can* have everything in one line, like so: 

![](https://i.imgur.com/IkUaFUn.png)


This works if the code block is small enough, but having the attributes stacked makes things more legible, as things are separated out clearly and you don't have to scroll left/right to be able to see the entire thing (which becomes a huge pain with larger code blocks....like the one coming up). 

### 4. Drawing Some Data

Okay, this is going to seem like a lot but we'll walk through it, so don't freak out. 

![](https://i.imgur.com/pvz01iv.png)

Starting from the top: 
* **svg.selectAll('circle')**: grab the svg and select all the 'circle' elements. There's going to be a lot of them, so we're telling javascript to grab all of them, not just one. We're grabbing the circles here, even though they haven't been created yet. Why? Well, the whole point of d3 is that you can update the drawing with new data after the drawing has been made, right? Do you want to make new code to have to deal with the new data? Nah. When the new data comes in, you want the code to grab the *old* elements of the drawing the modify them (or add to them) to match the new data. The .selectAll() command will return nothing now, since nothing is drawn yet, but when there is, it'll work as desired. So, we're planning ahead by including this here and now. 
* **.data(data)**: Tells the svg where to look for the data, so it can connect the data to the visual elements. It will automatically step through the data object and go city by city through the rest of the code, connecting each city to a circle and giving it properties.
* **.enter()**: d3 works on a model called "enter, update, exit". If new cities are added to the data object after the visual is made, then d3 will compare the selected circles to the data and figure out which cities already have corresponding circles. It will then create new circles for the new cities in the data object ('enter'), add them to the svg whiteboard ('update'), and if any cities were removed from the dataset, erase them from the whiteboard ('exit'). (We'll get to the exit code in a bit.) So, again, including enter() here is setting up the code for the possibility of changing data. 
* **.append(circle)**: For each element in the data object, add a circle.
* **.attr("r", d=>(d.population > 1000000)? "8px": "4px")**: First, 'r' stands for radius, and is of course an element applicable to round visual elements. Rectangles, for example, have an x and y coordinate, where the upper left corner of the rectangle is drawn, and then a width and height attribute to tell d3 how big to draw the rectable from its starting corner. So, the shape attributes you need to include depend on the shape. Makes sense, right? `d=>...` is telling the code, we need to access attributes of the data element, here coded as `d`. It could be coded as `.attr("r", city => (city.population > 1000000) ? "8px": "4px")` and still work. `=>` is called an [arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) and is  equivalent to `function(d){return d.population > 1000000) ? "8px": "4px"}`, if you've seen that before (if not, just know there is more than one way to paint a cat). We are just passing the data element to a function so we can do something with it before telling the code what the radius of the circle should be. And what should the radius of the circle be? `d.population > 1000000)? "8px": "4px"` is an expression called a [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) and is equivalent to an if statement: "If the population of the city is larger than one million, then the radius should be 8 pixels. If NOT, then the radius should be 4 pixels." 
* ^ same for opacity (line 268), which controls how transparent the coloration of the circle is. 
* **.attr("cy", d=>(d.y))**: and the line below it with 'cx' are attributes determing where the center of the circle should be drawn. Fortunately for us, x and y were included in the data and we don't have to assign or calculate where the cities should be drawn. This time. ;) 
* **.attr("stroke", "black")**: Give the circles a line around the outside and make it black. Try changing the thickness of the line by adding the code: .attr("stroke-width", "2px") or however many pixels you want. 
* **.attr("fill", "deepskyblue")**: the filling color of the circles. Try changing it to the same color you used for the header. (P.S. remember to include the hash if you used a color like #17C4E7.) 

And this is what the code looks like when it's drawn: 

![](https://i.imgur.com/A7LbwGN.png)

And if we inspect the page again: 
![](https://i.imgur.com/A0rkfY9.png)
 We see, in the right hand column, that the div with id 'chart-area' has an svg object in it, and in the svg are a whole bunch of circle elements with the attributes given to each circle. Cool, right? 

Does the shape of the dots as a whole look familiar at all? 

Adding these onto a map isn't really a 'beginner-friendly' step, so for now the dots shall remain floating in space.

> PS: Toyko, Wellington (New Zealand), and New York aren't European countries, so placing them geographically isn't really possible with the window size. For now, they're just floating up in the left corner. If you want to place them elsewhere, try changing their x and y values in the data object itself. 
> 
> PPS: If you do try this and the positioning seems odd to you, it's because the upper left hand corner of the webpage is (0,0) and the the y axis grows positive downwards: 
> 
> ![](https://i.imgur.com/60hviwh.png)


### 5. Add some labels

But how do we know which dots are which? I can probably pick out a few by memory, but all of them?? Let's add some labels! 

![](https://i.imgur.com/zLkUx70.png)

The code is overall pretty similar. Take a moment and see if you can decipher it yourself. 

![](https://i.imgur.com/dsDVjBm.png)


For each element in data, attach a text object and the text of the object is the city name. If the population is larger than a million, display the name of the city. If not, hide the label by making it completely transparent. 

Also, line 287 includes the 'exit' part of the 'enter, update, exit' method of d3. Because the data isn't updating at the moment, it didn't matter that it wasn't included until now. If the data does ever update though, it'd definitely come in handy to remove any data that you no longer want to see! 




### 6. Change the Fill of the Circles

So, there was some other information included in the dataset: whether or not the cities were in the EU. Let's include that by changing the color of the circles! You're going to use another ternary operator and essentially say, "if the `d.eu` is true, the fill should be blue. If not, make the fill red."

Try making that change on your own first! The image containing the solution is commented out, but if you would like to see it, uncomment it in the Edit Console to reveal the answer!

<!-- It should look something like this! 
![](https://i.imgur.com/sXT30k7.png) 
You can also say `d=>d.eu === true ? ...`, which is the exact same thing as ^, just a bit more verbose.  -->

### 7. Print the Population On Click

So, right now, the size of the circles tells us the population, but it's binary! If the city has more than a million people, it's 8px, and if it has less, then it's 4px. 

Let's start by printing the actual population of the city to the console when the circle is clicked. 

![](https://i.imgur.com/QxQyYPX.png)


Here we use an old-fashioned function declaration rather than an arrow function because we are passing 2 elements (event - data from the clicking event, like which circle was clicked on specifically - and the specific city). Arrow functions only work with one element being passed. 

![](https://i.imgur.com/JJHDi9l.png)


That's cool and all - certainly useful when debugging - but what if we want the user to see the population as well. Should we have them open up the console log? Seems offly inconvenient, if you ask me. Let's make a tooltip (information about an item that pops up on the screen when the mouse passes over the item) instead. 

### 8. Make a Hover Tooltip

So, first thing's first, we need to define the tooltip object. 

![](https://i.imgur.com/ZNBwdme.png)

We're adding it to the same div as the svg whiteboard - makes sense, right? And we'll give it some attributes to make it stand out from the backdrop of circles. 

Now, what do we want to happen? When someone puts their mouse of a circle, we want the tooltip to pop up, hopefully not right over the circle itself, and tell us what city it is and what its population is. Here's how we do that: 

![](https://i.imgur.com/A2SO8Tc.png)





The .on("click") has changed to .on("mouseover"), which is what d3 calls the event where the mouse passes over the visual element. When the mouseover happens for each circle, make the tooltip visible and change the text to the corresponding city's name and population. Also, when the circle is hovered upon, we want to change the fill of the circle to pink, to show that we know that the user is hovering over this particular circle. 

And voila! 

![](https://i.imgur.com/l8Jodzy.png)


But wait! When we hover over multiple cities, they stay pink!! 

![](https://i.imgur.com/OKfBIom.png)

That's because we don't have any code dictating what should happen to the circles when the mouse *stops* hovering. Right now, hovering changes the fill to pink and that's that. But adding this code is easy enough. We can essentially copy and paste, and change the settings back to what they are when the circles are originally drawn.

![](https://i.imgur.com/dDxrbAZ.png)


Reset the tooltip to invisible if the city is no longer being selected, and reset the fill depending on the city's eu status. (D3 doesn't remember which city was colored which, so we have to copy/paste it here. HOWEVER, if the data had an object d.fill that was the city's color, or if the color was stored elsewhere in a variable, we wouldn't have to recalculate it - but modifying the data or calculating color scales is for the next class.)

# Conclusion 

And those are some d3 basics! Part two will deal with the volcano data from Data Viz part 1: Encoding Data, and we'll learn how to make axes and legends on a traditional chart! 





# Appendix A: Data

Copy everything between the commenting arrows. 

<!-- 
let data=[
 {
   "country": "Austria",
   "city": "Vienna",
   "population": 1826030,
   "x": 386,
   "y": 296,
   "eu": true
 },
 {
   "country": "Belgium",
   "city": "Brussels",
   "population": 166497,
   "x": 251,
   "y": 240,
   "eu": true
 },
 {
   "country": "Bulgaria",
   "city": "Sofia",
   "population": 1316557,
   "x": 482,
   "y": 385,
   "eu": true
 },
 {
   "country": "Croatia",
   "city": "Zagreb",
   "population": 795505,
   "x": 382,
   "y": 337,
   "eu": true
 },
 {
   "country": "Cyprus",
   "city": "Nicosia",
   "population": 200452,
   "x": 550,
   "y": 499,
   "eu": true
 },
 {
   "country": "Czech Republic",
   "city": "Prague",
   "population": 1259079,
   "x": 360,
   "y": 259,
   "eu": true
 },
 {
   "country": "Denmark",
   "city": "Copenhagen",
   "population": 583525,
   "x": 345,
   "y": 162,
   "eu": true
 },
 {
   "country": "Estonia",
   "city": "Tallinn",
   "population": 439286,
   "x": 462,
   "y": 89,
   "eu": true
 },
 {
   "country": "Finland",
   "city": "Helsinki",
   "population": 620031,
   "x": 458,
   "y": 71,
   "eu": true
 },
 {
   "country": "France",
   "city": "Paris",
   "population": 2241346,
   "x": 221,
   "y": 271,
   "eu": true
 },
 {
   "country": "Germany",
   "city": "Berlin",
   "population": 3469849,
   "x": 352,
   "y": 215,
   "eu": true
 },
 {
   "country": "Greece",
   "city": "Athens",
   "population": 664046,
   "x": 499,
   "y": 472,
   "eu": true
 },
 {
   "country": "Hungary",
   "city": "Budapest",
   "population": 1754000,
   "x": 419,
   "y": 305,
   "eu": true
 },
 {
   "country": "Ireland",
   "city": "Dublin",
   "population": 527612,
   "x": 147,
   "y": 169,
   "eu": true
 },
 {
   "country": "Italy",
   "city": "Rome",
   "population": 2872021,
   "x": 338,
   "y": 407,
   "eu": true
 },
 {
   "country": "Japan",
   "city": "Tokyo",
   "population": 9233460,
   "x": 25,
   "y": 50,
   "eu": false
 },
 {
   "country": "Latvia",
   "city": "Riga",
   "population": 643368,
   "x": 457,
   "y": 133,
   "eu": true
 },
 {
   "country": "Lithuania",
   "city": "Vilnius",
   "population": 532261,
   "x": 478,
   "y": 174,
   "eu": true
 },
 {
   "country": "Luxembourg",
   "city": "Luxembourg",
   "population": 107247,
   "x": 267,
   "y": 261,
   "eu": true
 },
 {
   "country": "Malta",
   "city": "Valletta",
   "population": 6444,
   "x": 362,
   "y": 518,
   "eu": true
 },
 {
   "country": "Netherlands",
   "city": "Amsterdam",
   "population": 809892,
   "x": 260,
   "y": 210,
   "eu": true
 },
 {
   "country": "New Zealand",
   "city": "Wellington",
   "population": 398300,
   "x": 50,
   "y": 50,
   "eu": false
 },
 {
   "country": "Poland",
   "city": "Warsaw",
   "population": 1735442,
   "x": 434,
   "y": 221,
   "eu": true
 },
 {
   "country": "Portugal",
   "city": "Lisbon",
   "population": 509312,
   "x": 30,
   "y": 408,
   "eu": true
 },
 {
   "country": "Romania",
   "city": "Bucharest",
   "population": 1883425,
   "x": 516,
   "y": 348,
   "eu": true
 },
 {
   "country": "Slovakia",
   "city": "Bratislava",
   "population": 491061,
   "x": 396,
   "y": 293,
   "eu": true
 },
 {
   "country": "Slovenia",
   "city": "Ljubljana",
   "population": 277554,
   "x": 364,
   "y": 333,
   "eu": true
 },
 {
   "country": "Spain",
   "city": "Madrid",
   "population": 3165235,
   "x": 104,
   "y": 401,
   "eu": true
 },
 {
   "country": "Sweden",
   "city": "Stockholm",
   "population": 911989,
   "x": 400,
   "y": 93,
   "eu": true
 },
 {
   "country": "United Kingdom",
   "city": "London",
   "population": 8538689,
   "x": 204,
   "y": 219,
   "eu": true
 },
 {
   "country": "USA",
   "city": "New York City",
   "population": 8406000,
   "x": 75,
   "y": 50,
   "eu": false
 }
]
-->

# Appendix B: Completed Codepen 

Here is my final version on the [tutorial](https://codepen.io/zanewolf/pen/gOxWxPm). You can open this up and copy/paste all the bits into your own codepen editor, or just play around with it if you simply read through the tutorial already. 

# Feedback Notes

- accessing the commented data in Appendix A must be done by opening the HackMD once you’re logged in; I had to go to the augmenting-space-lab section in HackMD to get it
- suggestion: change the “city.eu” copy so that users don’t think “city.eu” is the name of the data point, rather than “d.eu”
- could add have the JS code in a code snippet rather than an image to make it easier to copy-and-paste (if that’s something you want people to be able to do from a pedagogical perspective)
    - echoed, especially if there is a big time constraint
    - not having it copy/paste-able was a conscious choice I made, where the pros are that, by typing everything themselves, students might pay more attention to the code itself, rather than just the outcome of adding the code. Maybe, similar to writing vs typing physical notes, it might be easier to remember. The cons, of course, are that it introduces the potential for spelling mistakes (though experience debugging is also a pro...maybe?) and takes time. 
    - A good balance would be making some code copy/pastable, especially if it's repetitive like the attributes or similar to code they've already encountered
- appreciated the conversational writing style, as well as the leading questions and requests for the tutorial-taker to write their own code without knowing the solution first (mini-exercises)
