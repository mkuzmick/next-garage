---
title: Documenting the Unity Gallery Process
tags: [Siriana, 3d-lab, Chris]

---

###### tags: `Siriana` `3d-lab` `Chris`

# Documenting the Unity Gallery Process

## To Do Next:
Update/Figure out bugs in Game Manager
Get secondary node working (as a canvas pop-up perhaps?)
Figure out DOTween glitch or manually code in animations. 


## Step 1: Planning the Gallery
We knew we wanted a fully interactable gallery. On Chris's part, that meant building and modelling the 3D space, and on my part it meant scaffolding out what *exactly* we needed to be interactable in our 3d world. 

We needed to start with the basics: a physical strucuture that needed gravity, colliders, lights, and air mechanics so that art and a player could live inside of it. 

Once Chris shared his Blender model, I unpacked his asset, added mesh colliders to all of the individual pieces and formatted them specifically around the contours of the building. Now, we had a solid building-- hooray! BUT- be careful not to add a RigidBody modifier onto anything you want to act as furniture-- otherwise it will fall out of the sky. RigidBody adds additional mass. 

## Step 2. Making the Camera System

Most market comparable gallery softwares use an FPS (first person system) to have users navigate around their galleries. We wanted to design something similar. This meant I had to learn how to code a First Person Camera system. the Unity Asset Store does offer a basic first person camera complex, but after testing it, I foudn it frankly came with far more bells and whistles than I needed, and that the code associated with the movement and collision of that FPS was too complicated for me to interact with at my current coding level. So, I went the next best route and decided to code my own, beginner level FPS relying on the tutorials below. 


<iframe width="560" height="315" src="https://www.youtube.com/embed/f473C43s8nE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/_QajrabyTJc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


In essence, most FPS systems rely on a capsule collider as a reference for a camera position and a basic movement script with a public float for speed, drag, etc. to customize player movement. Luckily, our gallery doesn't need the same high flying effects as other games (scaling walls and doing flips) so our movement code remained fairly simple. 

Once I had coded our FPS system We had the basics of a small gallery ready to go. You can see an example of it here:



## Step 3. Test, Rinse, and Repeat
Naturally, building the FPS couldn't be as simple as a few clicks here and there-- I had to build the camera model several times to actually figure out the correct coding. My ChatGPT history was littered with the same question over and over again: "Can you find the syntax error in this code and correct it?" ChatGPT was an integral tool throughout this process. I would write the code based on the material I learned from my YouTube tutorials, build the appropriate gameobjects in Unity, and test the whole thing. When it (inevtiably) glitched, I would try to see where I went wrong, and turn to ChatGPT for answers when I had none. It's like a wonderful calculator on steriods when it comes to helping me improve my incredibly rudimentary coding skills. Eventually, I sorted out some camera shake, figured out why my movement script was interfering with my camera position, and was able to stop my camera from falling through the floor. 

When all that was finished, Chris and I were able to (after some extensive redditing on the subject) figure out how to extract additional textures from his Blender gallery. I imported a new Gallery Model and repeated all of the above steps with that gallery (adding colliders, creating an FPS) though with notably less bumps in the road this time. 

Step 4. Further Interactability
Beyond just walking around the gallery, your average user might want to be able to click on things! Go figure! So I decided I needed to learn a mechanic where a user could click on an object and be taken to said object in the frame. 
Luckily, YouTube does not dissapoint. I followed this 25-step series of tutorials on a point and click mechanic based around a concept called nodes that allows users to get from point A to point B quite smoothly. Check out the tutorial and my test of it below. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZrJrIjDx9rM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

![image alt][reference][image alt](https://drive.google.com/file/d/1hbekQXR9fRupjvcA0z3FiqBZEuMH9kXA/view?usp=sharing) "Video" =500X500
)[]

Before I incorporated this point and click mechanic into the gallery, however, I had to learn it! So I built a whole other scene where I could explore just the basics of that mechanic. 

Once I wanted to add it to the FPS in the gallery, however, that became a whole new endeavor. To integrate both teh node based camera controls used in the point and click codes and the FPS, I would need a script that todl the cameras where and when to switch between one another. Figuring that out has been a doozy, to say the least. 

