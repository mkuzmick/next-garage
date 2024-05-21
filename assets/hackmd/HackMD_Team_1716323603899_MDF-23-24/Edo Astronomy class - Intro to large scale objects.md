---
title: Edo Astronomy class - Intro to large scale objects
tags: [Alexia]

---

**Intro**: Professor Edo Berger wants to create a new introductory class for undergraduates on large scale objects. Pr Edo Berger work with time-domain astrophysics to do research on astronomical objects including supernovae, gamma-ray bursts, tidal disruption events, gravitational wave events, and magnetic activity in sub-stellar objects (brown dwarfs and exoplanets). 

**The class**: 
- Aimed for undergraduates at Harvard
- Will includes large scale object like galxies, black holes etc.
- Will also talk about graviational waves

**My role**: To come up with ideas as well as designing homeworks, observational labs (telescope) and final assigments. 

The **challenge** here is that large scale object are hard to conceptually understand. Those objects are far away, can't be observed with the material present on campus. 

**Key words**: large scales structure (scale of galaxies and larger); compact objects - black holes, neutron stars, white dwarfs -; gravitational waves; general relativity; binary-star systems/interaction?; mass transfer; pulsar; 


#### Personal notes for feasible topics and projects: 
- Understand Newton's and Einstein's theories of gravity, space, and time, the similarities and differences between them
- Introduction to General Relativity and investigation of Dark Matter and Dark Energy
- Understand the interplay between gravity, pressure, and nuclear energy generation in governing the life cycle of stars (the death of stars: white dwarfs, neutron stars and pulsars, and black holes), and of how and why the deaths of massive stars are expected to lead to the formation of black holes
- Understand the ways that new observatories and new space missions currently under development might lead to deeper understanding of black holes : through newspaper, instrumentation paper or seminar kinda lecture
- Understand what gravitational waves are, how they are produced, what are the main astrophysical and cosmological sources. Related project could be : 
    1) How to model them, using analytical and numerical relativity: discussing the numerical solutions of linear systems, differential equations, partial differential equations and the foundations for numerical relativity.
    2) Seminar kinda lecture with paper reading: How gravitational waves, i.e new astronomical messengers, are detected and how they can probe strong gravity and reveal the properties of the most extreme astrophysical objects in the universe
- A project on gravitational wave: Gravitational wave measurements face challenges because interference from noise affects the detectors. To extract valuable scientific insights, thorough statistical analysis is crucial. A multiple weeks project could covers essential statistical concepts for interpreting gravitational wave observations, addressing significance, uncertainty in parameter estimates, and implications for the source population. A similar class project is offered in : https://imprs-gw-lectures.aei.mpg.de/2021-making-sense-of-data/ 
- I am wondering if those topics: Galaxy Redshifts, The Expanding Universe, Cosmological Redshifts, The Hubble Relation, Relating Redshift and Distance, Galaxy Distance Indicators, Size and Age of the Universe, The Hubble Constant, Galaxy Clustering and cluster of galaxies as well as Big Bang, Inflation; aren't discussed in Astro 17. 
- Another possible content could be  energetic form of light, from a few milliseconds to several minutes which relates to Edo research in time-domain astrophysics. Some lecture will introduce the different sources. A project could be a multiple week research with final presentation for which students will develop a deeper understanding of one of the source. 

**Notes from 18th January 2024** 
Course focused big scale in Univers: Galaxies - new development - new york times 
Data are accessible - James webb data are easy to download >> Getting involved 
Telescope Lab section >> Favorite object to look for 
Simple python notebook 
Visualisation assigment explainatory video of concepts pretty small 

**Notes from 24th January 2024** 
Reflextion about using a telescope and contrast with other objects to observed 
Small pieces of visuals & moves/tips >> methaphore and analogies >> challenges thet faces >> get intuitions 
Make some micro-assigments ~2h and 5 of them and then chose 2 from those 
Rapid prototype here 
Puzzles > interaction / time / expand  >>> Objects or concepts that are are to visualized (through analogy)
Unpacked a paper or journalist piece >> and see how it is connected and how scientific paper works 
Get JWST data and create a python notebook >> and then create a 3D model
With JWST data we can generate an image OR sound

---
tags from Dani's notes:
---

## ideas
* using telescope to see large-scale objects
    * galaxies?
* plot image from James Webb data related to large-scale things
* connecting all of this to colab
* connecting blender to colab
    * not sure if this would be something students would do?
* what's necessary in the assignment
    * need them to understand at a conceptual level (not necessarily in the physics)
    * science journalist's ability to articulate what's happening (rather than the math)
* not just about the thing you see but reflecting on the nature of observation
    * comparing and contrasting that to other ways of capturing data (like gravitational wave detector)
* linking what they observe to making the image and comparing those processes together
* shorter instances of explanation worked in
    * tiktok or instagram-size insight
    * chunking it so students can understand and undertake a capstone
* some kind of oral/visual presentation that gives them experience of performing that would be important to the capstone
    * need for metaphors when you're talking about something beyond human scale - coming up with analogies that help people grasp it and gain intuition of it
    * how to represent something that happened temporally or at some huge distance from us - these puzzles that are core to astronomy
    * things that are tough to visualize or that are tough to grasp but that visualize would help it make sense to students

## to do
* alexia pitch the idea of doing rapid protoyoping to edo and allyson next week. get their ok on 4-5 short things. 
* alexia ask edo for a single bullet point for what he wants to talk about during a particular class
    * get some kind of list from him so alexia knows the content
    * even if we just get one class's content and can work on that
    * and imagine 5 different assignments that could align with that class for that week
* then, if she gets the okay, alexia tries making some of these things to see how long it takes and get feedback from edo
    * short micro assignments/things a student could do in 2 hours and then students do them over the term and remix a few of them for their final project 
        * maybe blender animation
        * science explainer video
        * unpack a journalistic piece about a scientific article (what science in the news is about)
        * etc.
* get Webb telescope data and connecting it to blender or some visualization tool
    * using python/notebook

---

### Generate images from the James Webb Space Telescope (JWST)

**Download raw JWST Data**
*Notes*: 
- Data can be big ~60Go >> will need to use MAST
- We'll need to unzip all the files
- 2 different folder at the end. 1 with 4 folders in it, while the other one 3 >> we want all of them in the same big folder (some folder will not matter because of the amount of noise the data has)
- We'll need the Siril software
- Support Video: 
    - https://www.youtube.com/watch?v=YFRCHWNqCpc
    - https://www.youtube.com/watch?v=evqXcRR0k5w

**Create the image**
- Support Video: 
    - https://www.youtube.com/watch?v=hkdf-LhldPU
    - https://www.youtube.com/watch?v=DVuonz26P0w
    - https://www.youtube.com/watch?v=TibmrYJEgVA (siril + GIMP)


### Steps
- Going on MAST website
- Search through mission on advanced search
- Target names are the observed objects
- !!! Download with the disk icon if you want it on your desktop !!! Files are heavy 
- To show the data there is multiple options: software (pixInsight) or free online tools > siril or sao ds9 >> I ended up dowloading siril.org on my mac 
- Open the folder and a bunch of images will show up. Usually you'll have to delete most, even all, the images except the last one. The reason is because they all have a lot of noise, that can be noticeable from darker lines. To conclude, only the last image opened is the image that will be keep and used. 
- auto stretch the data
- the image is black and white = 1 filter 
- more filter is needed and for that we need to download them. And here are all the filter possible:

![image](https://hackmd.io/_uploads/rJwoDeJc6.png)

- This will bring more images, that we will need to match with there corresponding filters. 
- We can actually do some preview in order to help for matching the images before combining them 
- Finaly let's strech the image a bit 
- Finally, save the images that will combine the images and show the different filters 
- Now that the image is done, we can play with the colors, opacities and saturation 

Personal challenges while creating the image: 
- Siril is a free software that apparently has difficulties with files that are not compiled yet and well combined (i.e all the filter on top of each other on the right place)
- Siril alway can only open "fit" files _ not called "fits" >> so we need to rename

### My first image (took me ~2h) 

**Before** : 
![alt text](https://files.slack.com/files-pri/T0HTW3H0V-F06G5P6H8LT/screen_shot_2024-01-29_at_4.53.12_pm.png?pub_secret=be6c8d66d8)

**After** : 
![alt text](https://files.slack.com/files-pri/T0HTW3H0V-F06FRA9J12B/combined_image.png?pub_secret=636e4fc424)

### Using the Telescope to observe large scale object 

The Science center host a telescope. The Clay Telescope is located on the roof of the Science Center. It is a 16" (0.4 m) engineered telescope. Here is the website of the telescope: https://astrolab.fas.harvard.edu/claytelescope.html

![Clay_Telescope_2_sm](https://hackmd.io/_uploads/B1SDnPZsT.jpg)


A 16-inch telescope is a relatively large instrument, and with it, you can observe a wide variety of astronomical objects, including galaxies, nebulae, star clusters, planets and more. 
Notes: Visibility depends on various factors such as light pollution, atmospheric conditions, and the time of year. 

**Examples of astronomical objects** that you can observe with a 16-inch telescope from Boston:

- **Galaxies**:
    - Andromeda Galaxy (M31): The closest spiral galaxy to the Milky Way.
    - Triangulum Galaxy (M33): Another nearby spiral galaxy.
    - Whirlpool Galaxy (M51): A classic spiral galaxy undergoing a gravitational interaction.
- **Nebulae**:
    - Orion Nebula (M42): A bright and easily visible emission nebula in the constellation Orion.
    - Lagoon Nebula (M8): A large and colorful emission nebula in Sagittarius.
    - Trifid Nebula (M20): A combination of emission and reflection nebula in Sagittarius.
- **Star Clusters**:
    - Hercules Cluster (M13): A globular cluster in the constellation Hercules.
    - Pleiades (M45): An open star cluster in Taurus.
    - Beehive Cluster (M44): Another open cluster in the constellation Cancer.


*Assigment Idea*: To chose a category (Galaxies, Nebulae, Star Cluster) and look for the differences between each and why. That could result in a 1 page writing. 

### Unpacking a scientific paper 

That assigment could focus on a scientific paper or a recent newspaper publication. 



### Short explanatory video 

Youtube: 
- https://www.youtube.com/watch?v=4GbWfNHtHRg
- https://www.youtube.com/watch?v=YHS9g72npqA

**Assignment Description:**

- Objective:
The goal of this assignment is to engage undergraduate students in the captivating world of conceptual astronomy by creating a concise and visually engaging ~3 minute video. Rather than relying on complex 3D or 2D models, students will utilize the resources available at the Bok Center - Learning Lab, specifically an overhead camera, to draw and employ cards to explain a selected astronomy concept. This creative approach aims to enhance both their understanding of the subject matter and their communication skills.

This assignment encourages students to think creatively, develop effective communication skills, and deepen their understanding of astronomy concepts in an accessible and engaging manner.

#### Instructions:

- Select a Concept:
Choose a conceptual astronomy topic that interests you. It could range from celestial mechanics, stellar evolution, or bigger objects..

- Script Development:
Develop a script outlining the key points you wish to convey in your video. Focus on simplifying complex ideas to make them accessible to a broader audience.

- Visualization Techniques:
Familiarize yourself with the equipment available in the Bok Center - Learning Lab, especially the overhead camera. Experiment with drawing techniques and the use of cards to effectively illustrate your chosen astronomy concept.

- Practice Runs:
Conduct practice runs to refine your drawing and explanation skills. Ensure that your visuals are clear, and your voice recording is articulate.

- Filming Process:
Utilize the overhead camera to capture your drawing process and create a visually appealing representation of your chosen astronomy concept. Use cards strategically to enhance the narrative.

- Voice Recording:
Record a separate audio narration that complements your visual content. Speak clearly and at a moderate pace to ensure your audience can follow the explanation.

- Video Editing:
Edit the recorded video and audio to create a seamless and engaging ~3 minute final product. Ensure that the visuals and voiceover work together cohesively to convey the astronomy concept effectively.

- Submission:
Submit your final video along with your script. Be prepared to discuss your creative choices and the effectiveness of your visualizations during a class presentation.


#### Assessment Criteria:

- Clarity and Accuracy: How well the astronomy concept is explained and understood.
- Creativity: Innovative use of drawing and card techniques to enhance engagement.
- Presentation Skills: Quality of voice recording, pace, and overall delivery.
- Script Quality: The effectiveness of the script in simplifying complex ideas.
- Technical Proficiency: Skillful use of the overhead camera and video editing tools.


![alt text](https://files.slack.com/files-pri/T0HTW3H0V-F06J4AB2CRF/screen_shot_2024-02-07_at_4.47.29_pm.png?pub_secret=755668f2fd)

![alt text](https://files.slack.com/files-pri/T0HTW3H0V-F06HNNZK1QV/screen_shot_2024-02-07_at_4.48.16_pm.png?pub_secret=77da59d481)


![alt text](https://files.slack.com/files-pri/T0HTW3H0V-F06HB8UAWT1/screenrecording2024-02-07at5.13.04pm-ezgif.com-speed.gif?pub_secret=2412aeb272)

Full video link: https://drive.google.com/file/d/11ewNOwvUXJVuaCwznCCNZ5Gk8GNCX-O9/view?usp=share_link


### Meeting with Edo and Allyson _ February 9th 

learning telescope _ how to operate the telescope _ we can do spectra on the clay : stars and then resolution spectra 
collecting data with clay 
james webb colect 
structure / objects 
more conceptual -- idea behind -- what can you learn 
short video 
presentation 
group of students
black hole _ orbit of binary _ calculate the mass _ invisible mass of object 
track a supernovae and track it through the semester 
Hubble data _ robotic telescope 
write proposal ? 
Syllabus of topics (for Edo to do) & we can give ideas as well 

### Notes of meeting on May 13th 
Dave Charbonneau is on sabatical in Fall 2024 - Spring 2025 so no one teaches Astro 1. 
Astro 1 - 1st half is solar system focus. Lecture is 1h15. 
Adding supernovae, dynamic universe. Create a set of module. Keep in the same structure. Labs: imaging galaxy, nebulae, solar lab, spectro lab. 
Using JWST data : build upon the skills throught a 3 weeks lab + a little part in an assignment. 
Measure size of a disk. Get a spectra of a galaxy and identify the lines and measure the redshifts. Long list of lines and see what works to measure redshifts. 
Use the telescope in arizona to get a project. 

### Notes of meeting on May 21th 
Bringing larger scale to Astro 1 with cosmology to add to the course 
How to come up with this topics?: doing a lab with our facility or with data like JWST? 
Classifying galaxies on the last lab of Astro 1. 
Galaxie clusters - hard in an hour 
Idea: Take an image of a supernovae but we don't see the evolution
Neat to get an image on a diagram and calibrating 
Look at a supervoae and then look at it 3 weeks laters
When to use James Webb? Measuring redshift of galaxie / list of possible lines / write the notebook / walk through calculation / what is the equation / what did you do 
Distance ladder : lab of pset ? Light curve for andromeda and measure distance >> Lab to work with data set / MEasuare pariod and distance from parallex 
Supernovae remanants image : measure size and see how old 
AGN / talk about gravitational waves 