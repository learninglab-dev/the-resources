# AFTER EFFECTS MOVES

a list of ideas to tackle

## INTRODUCTION TO CREATING A VIDEO ESSAY

* Framing the Content
* Color Pallet
* Visual Vocabulary

## COMPARING AND CONTRASTING

* split screens
* 

## SHOWING CHANGE OVER TIME

## SHOWING DETAILS AND CONTEXTS

## SHOWING PATTERNS AND REPETITIONS


_________

// Below is forked from another working doc, to be ported above

## After Effects -- Popular Moves


#### Motion



*   [Whip Pans  ](https://www.youtube.com/watch?v=6QYkq82bC_Q&list=PLn_T6l_0VhIOohRHIZougu3jcaTkCmLlx&index=34&t=0s)
*   Drifts 
*   [Speed Ramping ](https://youtu.be/4O5Fxnp1JiM)
*   [Motion Tracking/Mocha](https://borisfx.com/support/documentation/mocha/quick-start-guide/)
*   [Camera Tracking](https://www.youtube.com/watch?v=PqFskLSlToY)


#### Stacking Effects 



*   Distortions 
    *   [Pixelation Transition ](https://www.google.com/search?sxsrf=ALeKk02V2htUOJGQmXol3pM3nsucG3PinA%3A1603219558448&ei=ZjCPX5vjGqSLytMP_YaaoAQ&q=after+effects+pixelation&oq=after+effects+pixelation&gs_lcp=CgZwc3ktYWIQAzIECCMQJzIFCAAQyQMyBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjoECAAQR1CYrQFYmK0BYJawAWgAcAJ4AIABPogBPpIBATGYAQCgAQGqAQdnd3Mtd2l6yAEIwAEB&sclient=psy-ab&ved=0ahUKEwibrpyi6sPsAhWkhXIEHX2DBkQQ4dUDCA0&uact=5#kpvalbx=_ijCPX5KsOuCpytMPot-3gAw14)
    *   [8 Bit](https://www.youtube.com/watch?v=CZ7osGm4s_Q)
    *   [Fractal and Turbulent Noise](https://www.youtube.com/watch?v=3QOUmiHxA7c)
*   Color Corrections  
    *   Greenscreen
        *   [Keylight](https://www.premiumbeat.com/blog/after-effects-green-screen/)
        *   [Luma Key](https://www.youtube.com/watch?v=rQIN4he4wcI)
    *   [Double Exposures](https://www.youtube.com/watch?v=PZ_3zDCWTu8)


#### Generators 



*   [Sound Waves](https://www.youtube.com/watch?v=JULvPhhc_0o)
*   Particle generations
    *   [Snow](https://www.youtube.com/watch?v=9uwNW59KVkg)
    *   [Rain](https://www.youtube.com/watch?v=i7ZCbtLd01Q&app=desktop)
    *   [Smoke](https://www.rocketstock.com/blog/5-ways-to-create-smoke-in-after-effects/)


#### Camera animation 



*   3D Motion
*   Rotating Scenes
*   Flybys
*   Rotobrush
    *   [and Rotobrush 2!](https://www.youtube.com/watch?v=1nYs9RjxiFk&feature=youtu.be)(in AE 2020)


#### Text/Title animation



*   [Block Quote Animation](https://www.youtube.com/watch?v=KkgmCGJ4FJU)
*   [Font Animation](https://www.youtube.com/watch?v=cKD3B-IecwU)


#### Popular expressions



*   [Interpolation Expressions](https://www.youtube.com/watch?v=OTivs6mMzpU)
*   Wiggle
    *   This expression will randomly move your layer on the x and y axis if it’s a 2D layer.
        *   wiggle( frequency , amount );
*   loopOut
    *   The Loop expression is probably to most used after effects expression, it allows you to repeat your animation
        *   loopOut("cycle");
*   Inertial bounce
    *   The bounce expression is very useful to make your animations and titles look dynamic with a nice elastic movement, just make 2 keyframes position and past the code below.
        *   n = 0;

        if (numKeys > 0){


        n = nearestKey(time).index;


        if (key(n).time > time){


        n–;


        }


        }


        if (n == 0){


        t = 0;


        }else{


        t = time – key(n).time;


        }


        if (n > 0){


        v = velocityAtTime(key(n).time – thisComp.frameDuration/10);


        amp = .05;


        freq = 4.0;


        decay = 2.0;


        value + v*amp*Math.sin(freq*t*2*Math.PI)/Math.exp(decay*t);


        }else{


        value;


        }

*   Time
    *   Time expression is good for constant animation, the higher the number next to “time” below the faster your animation will be.
        *   time*150
*   to Comp
    *   This is a perfect and easy way to create cool dynamic motion in 3D space with 2D layers.
        *   layer = thisComp.layer(“Null 1”)

        layer.toComp([0,0,0])

*   Fade
    *   The automatic fade expression is useful when you don’t want to bother a create keyframes for a fade animation.
        *   transition = 20;       

        if (marker.numKeys&lt;2){


        tSecs = transition / ( 1 / thisComp.frameDuration); 


        linear(time, inPoint, inPoint + tSecs, 0, 100)


         - linear(time, outPoint - tSecs, outPoint, 0, 100)


        }else{


            linear(time, inPoint, marker.key(1).time, 0, 100) 


        - linear(time, marker.key(2).time, outPoint, 0, 100)


        }

*   Motion Trail
    *   As you can see below with this motion trail expression you can get some pretty interesting animation of layers trailing  .
        *   //Apply to position

        delay = 5; //number of frames to delay


        d = delay*thisComp.frameDuration*(index - 1);


        thisComp.layer(1).position.valueAtTime(time - d)

        *   //Apply to Opacity

        opacityFactor = .75;


        Math.pow(opacityFactor,index - 1)*100

*   Squash/Stretch
    *   This bouncing squash and stretch expression should make your animation a bit more alive by adding a proportional scale to your shapes or images.
        *   maxDev = 13; // max deviation in pixels

        spd = 30; //speed of oscillation


        decay = 1.0; //how fast it slows down


        t = time - inPoint;


        x = scale[0] + maxDev*Math.sin(spd*t)/Math.exp(decay*t);


        y = scale[0]*scale[1]/x;


        [x,y]

*   Rotation
    *   Here is another After Effects rotation expression, no keyframes needed to make a simple 360 rotation on a layer.

        veloc = 360; //360 Degree Rotation per Second


        r = rotation + (time - inPoint) *veloc;


        [r]

*   Blink
    *   The blinking expression becomes super handy when you don’t want to repeat a bunch of opacity keyframes over and over or want to animate a cursor quickly.
        *   blinkSpeed=15;

        n= Math.sin(time*blinkSpeed);


        if(n&lt;0) 0 else 100;
