---
title: work-mk-virtual-galleries-blender

---

# work-mk-virtual-galleries-blender

### 14 December 2021

So. Early this week I working at laying out the current truss in Blender.

![alt text](https://files.slack.com/files-pri/T02MA9F7340-F02RPD2CZ89/truss-sample.jpg?pub_secret=d4181e0b8a)

And this is actually taking a bit of time, which made me realize that I should combine the project with my contribution to the [Virtual Galleries](https://hackmd.io/bHDTyoIbQim66bFp1HcLyw) project.

So in this chunk of work I'm going to try to model as many elements of the LL as I can, and I'm going to try to combine them in a virtual gallery or two that we might actually use this year.

### 19 December 2021

One thing I've been meaning to do is to figure out how close to the C4D sweep NURBS you can get in geometry nodes.

And this led me to think that it might be useful to use the following tutorial to make some whimsical curved-truss.

<iframe width="560" height="315" src="https://www.youtube.com/embed/BxlZdFs0cVE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

first let's just extrude a simple tube:
1. add a curve (nurbs, curve, or bezier) and create the basic contour of your shape
2. add a circle or other 2D mesh to serve as the cross section
3. in geometry nodes, convert any meshes to curves and then run both the "track" mesh and the cross-section to a `curve to mesh` node.
4. add a `set material` node if you want to give it a material

![alt text](https://files.slack.com/files-pri/T02MA9F7340-F02R7MPABU5/pink-tube-test-001.jpg?pub_secret=239b8e977a)

Then let's create a .05m tube, and then in edit mode create three more of them in a 2x2 grid with about 25cm between each tube. If you do it all in edit mode, it will remain one shape (don't duplicate the shapes in object mode for this one). 

*note: I should try this again in geometry nodes, creating the 2x2 grid from a single primitive--maybe itself a node*

![alt text](https://files.slack.com/files-pri/T02MA9F7340-F02R3V53PAA/aluminum-tube-test-001.jpg?pub_secret=fcf19abf6e)

if you're having difficulty getting the pipes to twist just right, select the "track" curve, then go into edit mode and change the 'tilt' of individual points as discussed [here](https://www.youtube.com/watch?v=c7FmZQaQ568).

Now let's add the diagonal elements of the truss.

First let's just get the hang of instancing objects along the curve.

Add a `Curve to Points` node and connect your "track" curve to the `Curve` input. Then connect the `Points` output to a new `Instance on Points` node (into the `Points` input). Then create an object, any object, add it to the nodes setup and run its `Geometry` output into the `Instance` input of `Instance on Points`. 

The node setup should look something like this:

![alt text](https://files.slack.com/files-pri/T02MA9F7340-F02R42HB1SA/screen_shot_2021-12-19_at_12.36.51_pm.png?pub_secret=aefb9a30da)

and the result should look something like this:

![alt text](https://files.slack.com/files-pri/T02MA9F7340-F02R7QA3QMB/aluminum-tube-test-003.jpg?pub_secret=78ba254895)

You may well need to fine-tune your cube or other shape to get it to be positioned correctly. You can do this by moving the object in object mode and then Applying the transformations, but it's usually much easier to move into edit mode and move things around there. 

Note that we have run the `Rotation` output of the `Curve to Points` into the `Rotation` input of `Instance on Points`. If we didn't do this the scene would look more like this: 

![alt text](https://files.slack.com/files-pri/T02MA9F7340-F02RANDHQFL/aluminum-tube-test-004.jpg?pub_secret=bd7198e52f)

Which may be what you want . . . but at least now you know how to achieve both effects.

Now let's try to figure out how to add diagonal elements. It is relatively easy to add one diagonal element each .5m along the curve:

hmm.

not much luck so far. Have been able to do one diagonal element, even if a little janky:

![alt text](https://files.slack.com/files-pri/T02MA9F7340-F02QW7JU2F9/aluminum-tube-test-005.jpg?pub_secret=6ea8829ae7)

But we're having a hard time instancing based on index. Here is the first ridiculous error of many I'm sure:

![alt text](https://files.slack.com/files-pri/T02MA9F7340-F02RPF512MP/aluminum-tube-test-006.jpg?pub_secret=8f36f10b31)

But we have to do *something* that's instance-specific, because we need to add differently rotated elements depending on the instance (and sometimes completely different elements depending on the instance).

We'll have to do a much deeper dive into all of this, starting with these three:
* [lighting pavillion in geonodes](https://www.youtube.com/watch?v=VoxYbGMtXRE)
* [geonodes curve endpoint alignment](https://www.youtube.com/watch?v=FIZM5fytvDk)
* and then MAYBE this [procedural rope bridge tutorial](https://www.youtube.com/watch?v=9Y_lMMsFeXg&t=154s) which is now getting a little old (and the nodes don't match)


### working with index and the modulo operator

Let's start by seeing if the index node and the modulo operator can give us something like conditional logic. So far we're able to achieve some of the basic mechanics we may need to use. But rotation is still challenging. One wishes true conditional logic were possible? is it?

In any case, scaling by index:

![alt text](https://files.slack.com/files-pri/T02MA9F7340-F02QWNV5487/plain-geo-nodes-tes-001.jpg?pub_secret=14fca4aaba)

And then using modulo operator to apply growing scales in clusters of 5:

![alt text](https://files.slack.com/files-pri/T02MA9F7340-F02R8DHAFHT/plain-geo-nodes-tes-002.jpg?pub_secret=99949095b6)

Tomorrow we'll have to work a bit at the Vector math modules to figure the rotation thing out.



### 20 December 2021

today we'll probably work more on other projects, so let's just work through this video on `Align Euler to Vector`

<iframe width="560" height="315" src="https://www.youtube.com/embed/0E1K9j9zoik" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

I think we can try for a simpler explanation once we understand this :)

#### play with aligning to vectors

*(Now that we know how it works, this is how we might help someone learn)*

The quickest way to gain an intuition about all of this is to create a circle of cones, as in the video. But then take some time to process how all the parts of the `Align Euler to Vector` work together.
* make sure that you have the spreadsheet open and can see the rotation of the points
* start with the `Z` axis selected, because your original cone model is pointing along the Z axis, so to see any effects on the clones, this is the axis you want to align or "point" in the direction of the vector
* then start varying the other properties. start with `(0, 0, 1)` (which is the default?) . . . this will point things straight up.
* now try `(1, 0, 0)`, then `(0, 1, 0)`. You should start to get the sense that the cones point (or align their Z axis) in the direction that you've given the `1` in your vector. The `Rotation` property for the points in your spreadsheet will be `(0.000, 1.571, 0.000)` for `(1, 0, 0)`. Is this what you expect? If not, why not? Why might this be happening? The value in your `Align` node is where you're *pointing*, but for this to happen, the rotation is happening in a different axis (so to point along the x axis, you need to rotate 90 degrees = 1.571 or π/2 radians around the *y* axis)
* now try mixing them, first just giving a `1` to two of the axes. You should see the vectors pointing halfway between the two. In the setup below, we have the cones pointing halfway between the Y and Z axes:
    ![alt text](https://files.slack.com/files-pri/T02MA9F7340-F02RDV7UDPU/screen_shot_2021-12-20_at_10.51.22_am.png?pub_secret=4abf38e055)
    ![alt text](https://files.slack.com/files-pri/T02MA9F7340-F02R79FNXJA/screen_shot_2021-12-20_at_10.49.55_am.png?pub_secret=0f77acbae8)
* but now try adding the third vector. Are you seeing what you expect? Remember that the cone is going to point towards the imaginary point at the coordinates you type in (that's the direction of the vector).
* then, to get them all pointed outwards, you'll need to factor in the normal, like so
    ![alt text](https://files.slack.com/files-pri/T02MA9F7340-F02RE2T653L/screen_shot_2021-12-20_at_11.08.39_am.png?pub_secret=8704db00f6)
    ![alt text](https://files.slack.com/files-pri/T02MA9F7340-F02RGBHHYDS/screen_shot_2021-12-20_at_11.08.49_am.png?pub_secret=4e5b763180)

the next step in the tutorial involves positioning cones on cube faces using the `Capture Attribute` node

![alt text](https://files.slack.com/files-pri/T02MA9F7340-F02QZQBVC07/screen_shot_2021-12-20_at_12.12.43_pm.png?pub_secret=f496599417)
![alt text](https://files.slack.com/files-pri/T02MA9F7340-F02RBF1DSRK/screen_shot_2021-12-20_at_12.12.58_pm.png?pub_secret=2ef8dd9862)

But let's skip doing a deep dive into this one in order to move on to the next stage in the tutorial, which is way more appropriate for what we're up to.

#### aligning and rotating cones along a spiral or other complex spline

actually not sure he has this figured out. So we're going to wait on that.

#### aligning objects to empty

![alt text](https://files.slack.com/files-pri/T02MA9F7340-F02RCL8D7E1/screen_shot_2021-12-20_at_4.48.53_pm.png?pub_secret=06a179c47b)

![alt text](https://files.slack.com/files-pri/T02MA9F7340-F02S5AC5WFJ/screen_shot_2021-12-20_at_4.49.20_pm.png?pub_secret=5dbc880d84)

this went ok.

And perhaps there's a way of drawing a curve from a known point on one post to a known point on another (then using a `Curve to Mesh` node to sweep 2cm circle down that line) . . . maybe?

In any case---done for the day, and am somewhat pessimistic about being able to do this entire thing in geometry nodes right now.


### 20211224

took a couple of days off but then worked a bit with Z on art projects today:

![alt text](https://files.slack.com/files-pri/T02MA9F7340-F02RXLWP5JN/snowmen-20211224-001.jpg?pub_secret=bae27dd2a7)

![alt text](https://files.slack.com/files-pri/T02MA9F7340-F02RUPA7TQD/snowmen-20211224-02-02.jpg?pub_secret=89bff2fa4a)

here's a better camera angle in regular mode:

![alt text](https://files.slack.com/files-pri/T02MA9F7340-F02RXSW7A75/snowmen-20211224-02-07.jpg?pub_secret=276af093bc)

and in comic book mode:

![alt text](https://files.slack.com/files-pri/T02MA9F7340-F02S052BXPW/snowmen-20211224-02-08.jpg?pub_secret=968cae50d2)

and as holiday card:

![alt text](https://files.slack.com/files-pri/T02MA9F7340-F02SMJL9T7S/snowmen-20211224-02-09.jpg?pub_secret=91ea7b68c3)



key for aligning cylinders on sphere (eyes on head, etc.)
* snapping on
* select "Align Rotation to Target"
* select "Project Individual Elements"


### 20211226

* command + J to join (compare and contrast with parenting)
* voxel size on remesh in sculptmode
* node wrangler with pbr



## next
* Perhaps we can launch a [microproject-blender-explanation-rig](/X8-TYg1KRoaoNJkVxedokQ) project?
* holiday gallery?
    * [blender christmas tree tutorial](https://www.youtube.com/watch?v=uJCmdcaZih4)
    * [blender snowman tutorial for 3.0](https://www.youtube.com/watch?v=Qjg6R0dA8ng)
    * idea for activity:
        1. create the placeholder gallery
        2. run a Blender snowman tutorial
        3. everyone submits their snowmen to a channel
        4. the **ll-studio-bot** grabs those files and appends their (properly named) objects to a master file, then renders out a still immediately and an animation later (could we auto-rig them? even with a single vertical to wiggle a bit side to side?)
