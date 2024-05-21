---
title: Color Effects in After Effects

---

# Color Effects in After Effects

I'm going to start with this tutorial:

<iframe width="560" height="315" src="https://www.youtube.com/embed/YwBMOIJdbFw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

but below are the written steps for anyone who wants to follow along:

## The Steps

We are going to use After Effects to adjust the color of our video. If you're following along with the video, I recommend skimmming through the beginning until 8:00 (he just shows the results of what you can do with color correction before this)

Open up footage, set Resolution factor to half for smooth preview. 

Add an **adjustment layer**, which will adjust everything underneath it based on whatever effects you add to it. It has the same effect as adding effects to the video directly, but allows for extra flexibility (toggling on and off, masking, etc.)

Add an **adjustment layer** by:

    Right click on timeline > New > Adjustment layer 

## Brightness & Contrast

    Effects and Presets > Color Correction > Brightness & Contrast

Drag the effect to your adjustment layer. Look to the top left panel named *Effects Control Tab*. Everytime you apply an effect, you will be able to adjust its parameters here.

While brightness and contrast both affect the luminosity of pixels, **brightness** increases or decreases the luminosity of _all_ pixels while **contrast** emphasizes the differences in luminosity and makes lighter areas brighter and darker areas darker.

Change the **contrast** from 0 to 20.

This helps the video pop out a bit more. If you'd like to see how a new effect has changed the look of your composition, toggle _fx_ at the top left corner of the effect (this turns the effect on/off).

## Black & White

    Effects and Presets > Color Correction > Black & White

You can create a new adjustment layer or apply this effect onto the one we already have. For the tutorial, we add this effect onto the same layer.

I don't recommend changing the Reds, Yellows, Greens, etc. because it makes the footage look a bit fuzzy.

However, you don't need to stick with black & white! Using **tint color** you can manually choose a color or use the dropper to sample a color from your original video (temporarily turn off the effect via _fx_). Then, checkbox **tint** and turn your effect back on.

Now your video, instead of being black and white, will have the color of the tint you selected!

    Tint Color > Select Color > Checkbox Tint
    
## Adding Tones

    Effects and Presets > Color Correction > CC Toner

For this tutorial, we add this effect onto the same layer with the plain black & white preset.

There are three tones: duotone, tritone, and pentatone. The first of which only affects highlights and shadows (2). The second brings in midtones (3). The latter incorporates brights and darktones (5).

You can play around with the colors to create all sorts of combinations. Tritone is best for simplicity. Highlights are typically brightest and shadows are darkest, so changing highlights to a dark color or shadows to a bright color will have an inverted color effect on your video. If you come across a bad color combination, you can always undo with Cmd + Z  or Ctrl + Z.

I personally loved Shadows (A31919), Midtones (C55FD5), and Highlights (F77E7E).

## Combining Effects: Vintage
We are going to combine a couple of new effects to create a vintage look on our video. Do this on a new adjustment layer. Make sure it doesn't overlap with other adjustments layers unless you want their effects to combine over your video.

    Effects and Presets > Color Correction > Vibrance
    
While saturation and vibrance both affect color intensity, **saturation** increases the intensity of all colors while **vibrance** more specifically increases the intensity of dull colors.

Change **vibrance** to around 80.

    Effects and Presets > Color Correction > Color Balance

Depending on what you change, background video static that wasn't noticable before might pop out. While that might look desirable for certain looks (such as this one) you won't want it all the time, so play around with the different tones until you get something you like.

Change **Midtone Red Balance** to 100.

    Effects and Presets > Color Correction > Photo Filter
    
You can choose from a variety of different filters and **density** of which it's applied. While lower densities are more subtle for color correction, higher densitites can be used for intense color washes. This evens out the colors so that they don't stick out. **Preserve Luminosity** preserves the apparent original brightness of the video by lightening or darkening the colors.

Select **Warming Filter (85)** and set **density** to 60. Checkbox **Preserve Luminosity.**

## Combining Effects: Adding Colored Tint
Now we're going to try a more graphic look by applying contrast and the tint effect to a new adjustment layer.

    Effects and Presets > Color Correction > Brightness and Contrast
    
To avoid a grayish look to your tint, increasing the **contrast** can help bring out your colored tint. Try toggling this effect after applying the tint in the next step to see if it looks better!

Change **Contrast** to around 50.

    
    Effects and Presets > Color Correction > Tint 

Manipulate the color of the tint by adjusting under the *Effects Control Tab*. Changing the color of **Map Black To** will change the darker tones of the footage into the color of your choice. Changing of the color of **Map White To** will change the color of the whiter tones of the image into the color of your choice.

Changing both simultaneously can achieve a unique and specific blend of colors to tint the overall footage. I suggest sticking with darker colors for Map Black To and lighter colors for Map White To, unless you are going for an inverted look. **Swap Colors** can fix this so you don't have to go through the hassle of manually fixing the colors.

Change **Map Black To** Navy Blue and **Map White To** Bright Red.

For further customization, apply a curve effect to the tint:

    Effects and Presets > Color Correction > Curves
    
The curve effect allows you to simulataneously change the Red, Green, and Blue tonal values of the footage through the RGB channel. However, you can also change the channel to an individual color (Red, Green, or Blue). **Auto** automatically adjusts the curve for you while **Smooth** slowly brings the curve back to its original linear state little by little. 

You can always reset the specific curve by clicking **reset** under smooth, or reset all curves under that effect by clicking **reset** next to the effect name. Play around with adjusting the curve to achieve a tint you're happy with.

## Adding a Fade Transition between Different Tints

You can fade the tints from one color to another through the use of keyframes. 

First, add a keyframe to the very beginning of the tint adjustment layer to determine the starting color of the tint. To add tge first keyframe on a single adjustment layer:

    Select the adjustment layer you want to add a keyframe to > Effects > Tint > 
    Click on the stopwatch icon next to "Map Black To" and "Map White To"
    
Now that the first keyframe is created, find the point in the timeline in which you want the effect to end. Create another keyframe at this point by simply changing the *Map Black To* or *Map White To* color to whatever you want the final color to be. In doing so, you will have established both the starting and ending tint colors for that adjustment layer.

If you play the clip, you will see that the color of the first tint naturally fades into the color of the ending tint for the duration of the clip. 




## Links and References

- The After Effects Manual's page on [color-correction effects](https://helpx.adobe.com/after-effects/using/color-correction-effects.html), including Tint if you scroll far down the page
- 









## Template stuff not part for the tutorial ; heading level 2

### heading level 3

- this is a list
- element 2
- element 3

[here is the word you'll click](https://www.apple.com/)

![iPhone image](https://media.wired.com/photos/5d803f5dc891950008ce3447/master/pass/iphone-11_6175-Edit.jpg)

