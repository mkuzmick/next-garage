---
title: 'Data Visualizaton Part 1: Encoding Data'
tags: [tutorials, ' datavis']

---

---
tags: tutorials, datavis
---

# Data Visualizaton Part 1: Encoding Data
Enoding data is the process of converting or translating raw data into understandable (and hopefully rememberable) images or symbols. But before we can start encoding, it's important that we go over some terminology. 

## Data Types

First, what type of data do you have? Some types of encoding methods work better for some data versus others, and looking at your data, understanding what it is comprised of, should always be the first step. There are several different types of data. 

* Qualitative/Categorical
    * Categorical data are often data that can't be counted or measured, but can be divided into categories. Geographical Location, Color, Age Groups, and Months are all examples of categorical data. Within categorical data, there are two subtypes: nominal and ordinal. The difference between the two is whether that is an inherent order to the data. Geographical location....does alphabetical make sense? Maybe, but that's a choice of ordering that you could impose upon the data. Color also doesn't really have an order to it. But Age Group and Months *do* have an inherent order to them. Sizing (small/medium/larger) and  Grades (A+/A/A-/B+/...) are both ordinal. 


* Quantitative/Numerical
    * In contrast to categorical data, quantitative or numerical data *can* be measured, and again there are two subtypes: Discrete and Continuous. If the numerical data are at the integer/whole number level, then the data are discrete. The number of planets in a solar system, the number of times you have had coffee this week/month/year. Continuous data, on the other hand, can have an infinite number of values. Take Grades from 0-100, or ambient temperatures of an area. With fractions, you have be dealing with a lot of potential values. Dates are often treated as discrete numerical data, while time is continuous.

![](https://i.imgur.com/jugBBbb.png)


There is some overlap between ordinal categorical data and discrete numerical. For example, measuring pain on a scale from 0 to 10 is technically discrete numerical data, but since you can't quantify the actual difference from one grade of pain to the other, this data should be treated as ordinal. It's also common practice to convert categorical data (e.g. Male/Female) into binary indicators (this is sometimes called 'one hot encoding', where 0 is Male and 1 is Female). Binary indicators are still categorical. 



---

### ACTIVITY 1 (Three Minutes)

Working with a partner, classify the different types of data present in this [spreadsheet](https://github.com/learninglab-dev/ll-basics-datasets/blob/main/volcano-events.csv). (Raw data [here](https://www.ngdc.noaa.gov/hazel/view/hazards/volcano/event-data?maxYear=2020&minYear=1990).) 

![](https://i.imgur.com/eyvNs7o.png)



---




## Visual Grammar 

### Marks and Channels

![](https://i.imgur.com/U7eE8eW.png)

Marks are points, lines, and areas. Channels are characteristics that you can give to the marks. A scatterplot uses points and positions to relate data (and lines for the axes), while a chloropleth map uses areas and color. 

![](https://i.imgur.com/sE1FZyD.png)
![](https://i.imgur.com/dYOEREq.png)


Data visualization, at its core, is converting raw data into an assortment of marks and channels. However, not all channels are created equally. Our visual perception picks up on some things more easily than others. We detect color quite quickly, but how reliably can we tell the difference in area betwen two squares? We can see easily that one is bigger, but can't guage quantitatively just how much bigger. For a chart with multiple lines, we can see that the slopes are different, but unless you have your protractor handy, can you say what the slopes actually are? It's important that you keep this in mind when picking channels to encode for your data. 

It's also possible to encode data redundantly. You can use both shape and color, for example, to encode the same information. 

![](https://i.imgur.com/uwujy3B.png)


---

### ACTIVITY 2: Encoding
![](https://i.imgur.com/4HSrViJ.png)
What marks and channels is the creator of this whimsical data vizualization using? 
(Here's the [legend](https://i.imgur.com/eQQKxg0.png) that accompanied it. This was a postcard sent as part of the [Dear Data](http://www.dear-data.com/theproject) project.


---



### C.R.A.P

In additition to Marks and Channels, there are four principles that can improve the layout of your design. 

![](https://i.imgur.com/c9eeUjc.png)

* Contrast: make elements stand out

![](https://i.imgur.com/QfIn2RP.png)


* Repetition: repeat visual elemtns to create strong unity

![](https://i.imgur.com/ygzwC0l.png)
Small multiples (having the same visualization repeated showing different aspects/facets of the data) is very common. 

* Alignment: place elements deliberately to show relationships

![](https://i.imgur.com/8OKUDe6.png)
(Plus small multiples)

* Proximity: place related items together

![](https://i.imgur.com/901CjwI.png)



### Gestalt Principles

![](https://i.imgur.com/edUGtgV.png)

These are patterns than transcend the visual encoding, things that the brain interprets without needing much higher thought. 


Simply by changing the **proximity** of the dots to each other, the brain perceives two very different groupings of dots. 

![](https://i.imgur.com/A9Cdo9S.png)


Same with **similarity**. 

![](https://i.imgur.com/1uJ0zSs.png)

**Enclosure** is stronger than both **proximity** and **similarity**. This picture includes both **proximity** and **similarity**, but the boxes supersede both of those to group the dots into two. 

![](https://i.imgur.com/bsiqHuf.png)

Here's an example with all three: using **proximity** to each other, we see that the bars are grouped into A, B, and C. Using color, we see that within the groups. we can directly compare **similar** red, yellow, blue, and gray bars. And by using **enclosure**, we can direct the reader's attention to a particular set of bars. 

![](https://i.imgur.com/tr7orn4.png)

**Connection** is another strong cue that supersedes **proximity** and **similarity**. 

![](https://i.imgur.com/TagkFUm.png)

**Continuity** is where the brain follows lines and curves. 

![](https://i.imgur.com/Az9s67O.png)


It's very easy for us to follow how the information flows from left to right in this image because of **continuity**. 

![](https://i.imgur.com/2qtWaTw.png)


And our brains are constantly interpreting light and dark spaces into shapes, and this design element of **closure** can be fun to play with. 

![](https://i.imgur.com/dppn31A.png)
![](https://i.imgur.com/2CcBYlu.png)



---

### ACTIVITY 3 (Three Minutes)

Grab some pen and paper! In two minutes, sketch 23 and 42 in as many different ways as you can think of. 


---


## Color Scales

The last thing we should talk about is color. Designing in grey scale can be a good way to make sure you're making a good visualization from the start - are the layout, spacing, and grouping on point? - but color can add another channel with which to encode new information, or it can simply be redundant and help make the visualization stand out more and be more fun. However, there are right and wrong ways to use color scales, particularly with maps. 

First, there are different types of color scales, and they are each suited for different types of data. 
![](https://i.imgur.com/WOr8My4.png)

**Sequential & Unclassed** is great for continuous numerical data (e.g. temperatures). **Sequential & Classed** is great for ordinal data (e.g. age groups). **Divering & Unclassed** is great for continous data that has a middle neutral point, rather than going from low to high. For example, instead of representing rainfall in an area (which could be **Sequential & Unclassed**), what if you visualized it as the Average Rainfall (white) and then difference in inches from that average (reversing the scale because I can: dark green being more than average and red being less than average). **Divering & Classed** works pretty much the same, but instead of continuous data you break it up into chunks. For example, with the rainfall example, instead of average rainfall and difference in inches, I did average rainfall and then plus/minus one and two standard deviations? And last but not least, **Categorical** color scales simply means picking a different color for each category. You want to avoid using colors that are too close together because then the brain might interpret them as being connected or sequential when they aren't. 

### A word about rainbow color scales.

Rainbow color scales are extremely fun and Nadieh Bremer has even said that all of her projects go through a mandatory Rainbow Phase (usually when she gets bored with grey scale and wants to look at something eyecatching for a bit). However, rainbow scales can be misleading or hard to interpret. Take the example below where the creator has used the rainbow color scale. Can you easily remember which color maps to which value? Is purple high or low? 

![](https://i.imgur.com/zuYnDVA.png)


Which color scale would be a better option? 

![](https://i.imgur.com/7F3JVQH.png)


Rainbow scales can be used categorically, but shouldn't be used continuously or discretely with ordinal data. 


### Accessibility

![](https://i.imgur.com/du0sJOz.png)

Lastly, it's important to keep in mind that when choosing color scales, not everyone sees colors equally. There are a lot of resources out there for choosing color paletters. [ColorBrewer](https://colorbrewer2.org/#type=sequential&scheme=YlGnBu&n=9) is one such resource, and they show you how certain palettes will appear on a map and let you choose only color-blind-friendly

![](https://i.imgur.com/6JnhYMl.png)

[Paletton](https://paletton.com/#uid=c002P0u3i0kleqtbzEKgVuIpcmGtdhZ) and [VizPalette](https://projects.susielu.com/viz-palette?colors=[%22#ffd700%22,%22#ffb14e%22,%22#fa8775%22,%22#ea5f94%22,%22#cd34b5%22,%22#9d02d7%22,%22#0000ff%22]&backgroundColor=%22white%22&fontColor=%22black%22&mode=%22achromatopsia%22) also let you choose a palette and then simulate how it'll look to color blind viewers. 

<!-- # In-Depth Example

Take a few minutes and go through this [dataviz example](https://whydocatsanddogs.com/)from Nadieh Bremer. Afterwards, we'll talk about: 

1. What is the narrative of the visualization? 
2. Who is the target audience? 
3. What question(s) does the visualization(s) answer? 
 -->


# The Map, Sketch, Decide Process

Now, you have a new dataset and you've been asked to deliver some preliminary dataviz ideas by the end of the day (rush job!). Map, Sketch, and Decide is a general process that helps you learn about your data, hone in one what you're interested in, and decide what to focus on for the next steps (rough drafts of the visualizations using a software). 

**1. Map**

In this phase, you are outlining the directions and goals of your project. 

* Who is your audience? Come up with at least three options and pick one target audience.
* Describe your target audience in more detail. What do they know? What are their interests? What visualization literacy do they have? At what level of detail will you present information to them? 
* What questions about your data will be interesting for your audience? Come up with a list of interesting questions that your audience may have about your data. The more, the better, but you should come up with at least ten questions. 
* What data do you have? Take a look at it in Excel or Google spreadsheet and give a brief description of each attribute and its data type (categorical, ordinal, or quantitative). It’s OK if you are not sure about the data type for some attributes - you can simply describe them (e.g., geographic location). 

**2. Sketch**

* Use paper and pen for your sketches. You can also use colored pencils and pens if you like, but it is not required. Remember, sketches are quick and do not need to be detailed or ‘beautiful.’ 
* Create at least 10 sketches that answer some or all of the questions you came up with during the ‘map’ phase. It is OK if you create more than one sketch per question, and it is also OK if you do not address all of the questions, as long as you address most of them. 
* As you are sketching, keep in mind what marks and channels you are using for each data type in your visualization. For each sketch, create a legend that describes the visual encodings of your data, similar to the Dear Data project. 
* Make sure you label each sketch with the question(s) it is answering. 

**3. Decide**

* Consider the story you want to tell
* Choose a subset of sketches that focus on the questions you want to answer in your narrative



---

### ACTIVITY 4 (Ten Minutes)

TODAY, we'll do an augmented version of these steps, for brevity. Using the volcano data you already examined in activity 1, break up into pairs and 

1. Create a list of 5-7 questions
2. Pick two questions each (DEPENDING ON TIME: ONE EACH?) and draw two visualizations for that question: a standard graph/chart, and a non-standard graph chart (a la the Dear Data Project). 

![](https://i.imgur.com/uvnQxTC.png)
[Zoomable Source](https://raw.githubusercontent.com/ft-interactive/chart-doctor/master/visual-vocabulary/poster.png)


---

### ACTIVITY 5 (Rest of the Time)

Repeat Activity 3 with SEAS data

![](https://i.imgur.com/Mqf3suY.png)




### Resources

[Fundamentals of Data Viz](https://clauswilke.com/dataviz/aesthetic-mapping.html)

# Outline 


1. Introduce the SEAS project 
2. Go through the document quickly and do activities 1 - 4
3. Activity 5
