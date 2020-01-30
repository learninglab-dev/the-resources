// https://observablehq.com/@mkuzmick/logarithms@3262
import define1 from "./e93997d5089d7165@2224.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# Logarithms`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`How does the frequency of a sine wave relate to the pitch we hear?

Let's investigate.`
)});
  main.variable(observer()).define(["md","tex","ShowAndPlayInline"], function(md,tex,ShowAndPlayInline){return(
md`

Let's start with a frequency of ${tex `350`}, and listen to what happens if we increase it by 15:

_A frequency of 300, then 315:_ ${ShowAndPlayInline((t) => Math.sin(t * (300 + (15*Math.floor(t/6 * 1)))), 1.9, 30, 100)}

Sounds good! We heard a change in the second half - it got higher. What if we keep adding 15?

_Starting with 300 and repeatedly adding 15:_ ${ShowAndPlayInline((t) => Math.sin(t * (300 + (15*Math.floor(t/6 * 2)))), 5, 30, 100)}

That's interesting - the pitch didn't sound like it was going up at a constant rate. It almost seemed to slow down towards the end. Listen to the first two notes and the last two notes - for both of these pairs, the second note in the pair doesn't sound like it's the same distance from the first:

| 300 vs 315 | 475 vs 490|
| -- | --- | 
|${ShowAndPlayInline((t) => Math.sin(t * (300 + (15*Math.floor(t/6 * 1)))), 1.9, 30, 100)} | ${ShowAndPlayInline((t) => Math.sin(t * (475 + (15*Math.floor(t/6 * 1)))), 1.9, 30, 100)}

What's going on? Even though the frequencies have the same +10 difference, they don't sound the same distance apart. In fact, if you go higher, the exact same +10 difference barely makes a difference to our ears!

${tex `900\text{ vs }915`} ${ShowAndPlayInline((t) => Math.sin(t * (900 + (15*Math.floor(t/6 * 1)))), 1.9, 30, 100)}
`
)});
  main.variable(observer()).define(["md","tex","ShowAndPlayInline"], function(md,tex,ShowAndPlayInline){return(
md`
## What's going on

So how do you make an interval between two pitches still sound the same to our brains, even at higher frequencies? Here's how: instead of adding repeatedly, you _multiply_ repeatedly:

${tex`300 \text{, then } 300 \cdot 1.1 \text{, then   } 300 \cdot1.1 \cdot 1.1`} ${ShowAndPlayInline((t) => Math.sin(t * 300 * (1.1**Math.ceil(t/6))), 2.8, 30, 100)}

Here, listen to what happens if you multiply repeatedly:

${tex`300 \cdot 1.1^n`} ${ShowAndPlayInline((t) => Math.sin(t * 300 * (1.1**Math.ceil(t/6*2))), 3.8, 30, 100)}
_(Compare how this sounds to the repeated addition above!)_

In other words, our ears hear _multiplying_ a frequency as _adding_ the same constant pitch.

`
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `

## Logarithms

Logarithms are how we describe that relationship - they're functions that convert multiplication to addition. More specifically, ${tex `\log(x)`} counts how many multiples of one number (called the "base") you need to multiply together to get x. For example, ${tex `\log_3(81)`} is the number of 3s you need to multiply together to get 81 - and since ${tex`3*3*3*3 = 81`}, that means ${tex `\log_3(81)=4`}.

In essence, we're solving this equation for x:

${tex`3^x = 81`}

And logarithms can be used to rewrite that same equation as:

${tex`\log_3(81) = x`}

(By the way, see the ${tex`${3}`} at the bottom of the word ${tex`\log`} in ${tex`\log_{${3}}(x)`}? That's the _base_ of this logarithm, because it's on the bottom of the equation ${tex`${3}^x`}. To say "${tex`\log_{${3}}(32)`}" out loud, say "log base ${3} of 32".) 

The takeaway: ${tex`\log_{${3}}(c)`} is equivalent to "find the value of x in ${tex`${3}^x = c`}".


`
)});
  main.variable(observer()).define(["md","tex","round"], function(md,tex,round){return(
md`
## Other interesting logarithm properties

You may secretly be used to taking logs base 10 in disguise - asking "how many digits are there in 10,000" is the same as finding ${tex`\log_{10}(10000)`}! However, logarithms will smoothly handle numbers like 482 that aren't powers of 10 by returning a real number, (${tex`\log_{10}(482) = ${round(Math.log10(482))}`}), while digit-counting doesn't (999 and 100 both have 3 digits).

Also,  ${tex`\log_x(1) = 0`} no matter what the base x is, because ${tex`x^0 = 1`} no matter the number x. 

For a similar reason, ${tex`\log_x(0)`} is undefined. If it existed (and we could say ${tex`\log_x(0) = n`}), then by undoing the logarithm with exponentiation we'd find ${tex`x^n = 0`}. That's impossible, because you can't get zero by multiplying together non-zero numbers like ${tex`x`}. (What about if ${tex`x=0`}? What goes wrong there?) 

${tex`x^n`} can, however, get _close_ to zero by using lower and lower negative numbers, (think ${tex`x^{-9}, x^{-999}, x^{-99999}...`}), and that's why as ${tex`x \rightarrow 0`} the graph of ${tex`\log(x)`} approaches ${tex`-\infty`}.

You may also have heard of logarithms as the inverse of exponentiation, since ${tex`\log_3(x)`} is the inverse of ${tex`3^x`}. In other words, they undo each other: ${tex`3^{(\log_3({x}))} = \log_3(3^x) = x`}.
`
)});
  main.variable(observer()).define(["md","tex","round","freq"], function(md,tex,round,freq){return(
md`

## So how do you use them in music?

First of all, to go up an octave, you multiply the frequency of a note by two. If you hear a wave of a certain frequency, the pitch of a note you hear is ${tex`\log_2({\text{that note's frequency}})`}! That's important enough to repeat:

${tex.block `\text{pitch} = \log_2({\text{frequency}})`}

Back to our original problem. Why did we hear _multiplying_ by 1.1 as increasing in pitch by the same amount, instead of adding? Take the log and find out:

| Frequency | Pitch = ${tex`\log_2({\text{frequency}})`} | difference in ${tex`\log_2({\text{frequency}})`} from prev note
| ------ | ---------- | 
| ${round(freq)} | ${round(Math.log(freq)/Math.log(2))} |
| ${tex`${freq} \cdot 1.1 = ${round(freq * 1.1)}`} | ${round(Math.log(freq * 1.1)/Math.log(2))} | +${round(Math.log(freq * 1.1)/Math.log(2)-Math.log(freq * 1.1**0)/Math.log(2))}
| ${tex`${freq} \cdot 1.1^2 = ${round(freq * 1.1**2)}`} | ${round(Math.log(freq * 1.1**2)/Math.log(2))} | +${round(Math.log(freq * 1.1**2)/Math.log(2)-Math.log(freq * 1.1**1)/Math.log(2))}
| ${tex`${freq} \cdot 1.1^2 = ${round(freq * 1.1**3)}`} | ${round(Math.log(freq * 1.1**3)/Math.log(2))}| +${round(Math.log(freq * 1.1**3)/Math.log(2)-Math.log(freq * 1.1**2)/Math.log(2))}
| ${tex`${freq} \cdot 1.1^2 = ${round(freq * 1.1**4)}`} | ${round(Math.log(freq * 1.1**4)/Math.log(2))}| +${round(Math.log(freq * 1.1**4)/Math.log(2)-Math.log(freq * 1.1**3)/Math.log(2))}

${`<br />`}There it is: multiplying by 1.1 increases the pitch by the same amount each time. And logarithms do indeed convert multiplication to addition - that special value of ${tex`+${round(Math.log(1.1)/Math.log(2)) }`} is just ${tex`\log_2(1.1)`}! 

(Why? Let's do out the math and convert the pitches back to frequency. To do that, we can undo the ${tex`\log_2`} using ${tex`2^x`}. If our starting pitch is ${tex`x`} (with frequency ${tex`2^x`}), then adding the same ${tex`+${round(Math.log(1.1)/Math.log(2)) }`} to that pitch will make a new note, with frequency ${tex`2^{x + ${round(Math.log(freq * 1.1**4)/Math.log(2)-Math.log(freq * 1.1**3)/Math.log(2))}} = 2^x \cdot 2^{${round(Math.log(freq * 1.1**4)/Math.log(2)-Math.log(freq * 1.1**3)/Math.log(2))}} = 2^x \cdot 1.1`} - the same multiple of 1.1 we've been using all along! 

What about when we repeatedly added 15 to the frequency? What happened then?

| Frequency | Pitch = ${tex`\log_2({\text{frequency}})`} | difference in ${tex`\log_2({\text{frequency}})`} from prev note
| ------ | ---------- | 
| ${round(freq)} | ${round(Math.log(freq)/Math.log(2))} |
| ${tex`${freq} +15 = ${round(freq + 15)}`} | ${round(Math.log(freq + 15)/Math.log(2))} | +${round(Math.log(freq +15)/Math.log(2)-Math.log(freq +15*0)/Math.log(2))}
| ${tex`${freq} +15*2 = ${round(freq +15*2)}`} | ${round(Math.log(freq +  15*2)/Math.log(2))} | +${round(Math.log(freq +15*2)/Math.log(2)-Math.log(freq +15*1)/Math.log(2))}
| ${tex`${freq} +15*3 = ${round(freq +15*3)}`} | ${round(Math.log(freq +  15*3)/Math.log(2))}| +${round(Math.log(freq +15*3)/Math.log(2)-Math.log(freq +15*2)/Math.log(2))}
| ${tex`${freq} +15*4 = ${round(freq +15*4)}`} | ${round(Math.log(freq + 15*4)/Math.log(2))}| +${round(Math.log(freq + 15*4)/Math.log(2)-Math.log(freq + 15*3)/Math.log(2))}

${`<br />`}No wonder repeated addition eventually stopped sounding like the pitch was increasing - once you get big enough the +15 isn't enough to require that much more multiplication by two.
`
)});
  main.variable(observer("viewof freq")).define("viewof freq", ["slider"], function(slider){return(
slider({
  min: 110, 
  max: 440, 
  step: 1, 
  value: 300, 
  title: 'Starting frequency for tables above', 
  description: 'Drag to change the starting frequency in the tables above. Use this to play around with logs, and see how everything changes!'
})
)});
  main.variable(observer("freq")).define("freq", ["Generators", "viewof freq"], (G, _) => G.input(_));
  main.variable(observer()).define(["md","tex","makeEqualTemperamentTable","playEquallyTemperedScaleInline"], function(md,tex,makeEqualTemperamentTable,playEquallyTemperedScaleInline){return(
md`

# Equal Temperament

Our modern musical system is constructed using logarithms! Let's go through how to build one.

Modern music uses a system called equal temperament, which is a system where every pitch sounds the same distance away from the next pitch in the series - or in other words, they're spaced evenly. Starting from some frequency ${tex`f`}, going up an octave means multiplying f by ${tex`2`} to get ${tex`2f`}. To divide an octave into 12 pieces, we need to find 12 frequencies that are all the same multiplier apart, and where the last frequency is ${tex`2f`}.

Logarithms make the problem a lot easier! Remember - logarithms turn multiplying into adding. Say we start with frequency f. Since pitch is ${tex`\log_2{(x)}`}, the note one octave above ${tex`f`} is ${tex`\log_2{(2f)} = \log_2(f)+1`}. It's so easy to divide an interval of +1 into 12 pieces that the the answer is already in this sentence: division! Just add ${tex`\frac{1}{12}`}, and doing that 12 times will indeed result in ${tex`\log_2(f)+1`}.

Using this, we can find the pitches easily: the next pitch after ${tex`f`} will have a pitch of ${tex`\frac{1}{12} + \log_2(f)`}, the next ${tex`\frac{2}{12} + \log_2(f)`}, and so on until ${tex`\frac{12}{12} + \log_2(f)`}. And then all you need to do is undo the logarithm using ${tex`2^x`}, and you have the exact frequencies of notes in equal temperament!

${makeEqualTemperamentTable(12, 512)}

Play every note in this scale: ${playEquallyTemperedScaleInline(12)}
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`

## Make your own equal temperament!

Once you understand logarithms, it's easy to make an equally tempered scale with a different number of pitches: just change how you divide your interval of +1. Play around with this slider and make your own scale!

`
)});
  main.variable(observer("viewof numDivisions")).define("viewof numDivisions", ["slider"], function(slider){return(
slider({
  min: 2, 
  max: 31, 
  step: 1, 
  value: 5, 
  title: 'Notes to divide an octave into', 
  description: 'Drag to change the number of notes in your scale, which will divide an octave into that many pieces!'
})
)});
  main.variable(observer("numDivisions")).define("numDivisions", ["Generators", "viewof numDivisions"], (G, _) => G.input(_));
  main.variable(observer()).define(["md","numDivisions","makeEqualTemperamentTable","playEquallyTemperedScaleInline"], function(md,numDivisions,makeEqualTemperamentTable,playEquallyTemperedScaleInline){return(
md`

## The frequencies in a ${numDivisions}-tone, equally tempered, musical system:

${makeEqualTemperamentTable(numDivisions, 512)}

Play every note in this scale: ${playEquallyTemperedScaleInline(numDivisions)}
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`${`<br /><br /><br />`}`
)});
  main.variable(observer("playEquallyTemperedScaleInline")).define("playEquallyTemperedScaleInline", ["ShowAndPlayInline"], function(ShowAndPlayInline){return(
function playEquallyTemperedScaleInline(numNotesInScale){
 let startFreq = 300
 let notesPerSecond = 2
  
 let multiplier = Math.pow(2, 1/numNotesInScale);
  
 return ShowAndPlayInline((t) => Math.sin(t * startFreq * (multiplier**Math.ceil(t / 2 / Math.PI * notesPerSecond ))), ((numNotesInScale)/notesPerSecond + 1/notesPerSecond), 30, 100)
}
)});
  main.variable(observer("makeEqualTemperamentTable")).define("makeEqualTemperamentTable", ["tex","round"], function(tex,round){return(
function makeEqualTemperamentTable(divisions=12, startFreq = 300){
  /* a template string with HTML subdivisions in it can't be concatenated to another string, because it will come out as [object HTMLElement] when the plus sign coerces it into a string. To work around this and successfully return MD from a function, I need to call .outerHTML on every tex element.
  
  This could all be avoided if there was a way of concatenating format strings.*/
  
  function joian(a,b){
    a.appendChild(b);
  }
  
  let string = `| Frequency | Pitch = ${tex`\log_2({\text{frequency}})`.outerHTML} | difference in ${tex`\log_2({\text{frequency}})`.outerHTML} from first note 
| --------- | ---------- |
`
  
  let logMultiplier = (1/divisions);

  for(var i=0;i<=divisions;i++){
      let freq = startFreq * (2**(i/divisions));
      string += `| ${round(freq)} | ${round(Math.log2(freq))} |`;
      if(i > 0){
        string += `+${tex`\frac{${i}}{${divisions}} `.outerHTML} (${round(logMultiplier*i)})`;
      }
      string += `\n`
  }
  return string;
}
)});
  main.variable(observer("ctx")).define("ctx", function(){return(
new (window.AudioContext || window.webkitAudioContext)()
)});
  main.variable(observer("Draw")).define("Draw", ["width","DOM"], function(width,DOM){return(
function Draw(genFn, height = 120, color = 'blue', w = width, fudgeScale = 0.5) {
  const drawingCtx = DOM.context2d(w, height);
  // Draw a middle line.
  drawingCtx.strokeStyle = 'gainsboro';
  drawingCtx.beginPath();
  drawingCtx.moveTo(0, height / 2);
  drawingCtx.lineTo(w, height / 2);
  drawingCtx.stroke();
  // Draw the waveform.
  drawingCtx.strokeStyle = color;
  drawingCtx.beginPath();
  const values = [];
  let max = 1;
  for (let i = 0; i < w; i++) {
    const value = genFn(i / width * fudgeScale);
    if (Math.abs(value) > max) max = Math.abs(value);
    values.push(value);
  }
  for (let i = 0; i < w; i++) {
    const value = values[i] / max;
    const y = height - Math.floor((value / 2 + 0.5) * height * 0.9 + height * 0.05);
    if (i == 0) {
      drawingCtx.moveTo(i, y);
    } else {
      drawingCtx.lineTo(i, y);
    }
  }
  drawingCtx.stroke();
  return drawingCtx.canvas;
}
)});
  main.variable(observer("toSound")).define("toSound", function(){return(
(f) => ((t) => t===0 ? 0 : f(t * 2 * Math.PI))
)});
  main.variable(observer("Play")).define("Play", ["SoundBuffer"], function(SoundBuffer){return(
function Play(genFn, duration = 1) {
  return new SoundBuffer(genFn, duration).gui();
}
)});
  main.variable(observer("Play8Bit")).define("Play8Bit", ["ctx","Play"], function(ctx,Play){return(
function Play8Bit(genFn, duration = 1) {
  const fn = (t) => {
    const step = Math.floor(t * ctx.sampleRate);
    let value = genFn(step) | 0;
    // Constrain to 8-bits.
    value = value % 256;
    if (value < 0) value += 256;
    // Convert result to real between -1 and 1.
    value = ((value / 256) - 0.5) * 2;
    return value;
  }
  return Play(fn, duration);
}
)});
  main.variable(observer("GenerateTex")).define("GenerateTex", ["tex"], function(tex){return(
function GenerateTex(prefix, generatorFn, iterations, suffix) {
  let equation = prefix;
  for (let i = 0; i < iterations; i++) equation += generatorFn(i);
  equation += suffix;
  const div = document.createElement('div');
  div.style.overflowX = 'scroll';
  div.style.overflowY = 'hidden';
  div.appendChild(tex`${equation}`);
  return div;
}
)});
  main.variable(observer("Title")).define("Title", function(){return(
function Title(title, elem) {
  const div = document.createElement('div');
  const titleElem = document.createElement('div');
  titleElem.style.marginTop = '5px';
  titleElem.style.fontSize = '0.9em';
  titleElem.style.fontStyle = 'italic';
  titleElem.appendChild(document.createTextNode(title));
  div.appendChild(titleElem);
  div.appendChild(elem);
  return div;
}
)});
  main.variable(observer("sum")).define("sum", function(){return(
function sum(start, end, fn) {
  let total = 0;
  for (let i = start; i <= end; i++) {
    total += fn(i);
  }
  return total;
}
)});
  main.variable(observer("SoundBuffer")).define("SoundBuffer", ["ctx","DOM","html","width"], function(ctx,DOM,html,width){return(
class SoundBuffer {
  constructor(genFn, duration = 1) {
    this.duration = duration;
    // Create an audio buffer.
    this.audioBuffer = ctx.createBuffer(1, ctx.sampleRate * this.duration, ctx.sampleRate);
    this.buffer = this.audioBuffer.getChannelData(0);
    let max = 0;
    for (let i = 0; i < this.audioBuffer.length; i++) {
      const value = genFn(i / ctx.sampleRate);
      this.buffer[i] = value;
      if (Math.abs(value) > max) max = Math.abs(value);
    }
    for (let i = 0; i < this.audioBuffer.length; i++) {
      this.buffer[i] = this.buffer[i] / max;
    }
  }
  play(maxVol = 0.3) {
    this.stop();
    this.source = ctx.createBufferSource();
    this.source.buffer = this.audioBuffer;
    const gain = ctx.createGain();
    gain.gain.value = maxVol;
    this.source.connect(gain);
    gain.connect(ctx.destination);
    this.source.start();    
  }
  stop() {
    if (this.source) this.source.stop();
  }
  draw(height = 50, width = width, color = 'blue') {
    const drawingCtx = DOM.context2d(width, height);
    // Draw the middle line.
    drawingCtx.strokeStyle = 'gainsboro';
    drawingCtx.beginPath();
    drawingCtx.moveTo(0, height / 2);
    drawingCtx.lineTo(width, height / 2);
    drawingCtx.stroke();
    // Draw the waveform.
    drawingCtx.strokeStyle = color;
    drawingCtx.beginPath();
    for (let i = 0; i < width; i++) {
      const value = this.buffer[Math.floor(i / width * this.audioBuffer.length)];
      const y = height - Math.floor((value / 2 + 0.5) * height * 0.9 + height * 0.05);
      if (i == 0) {
        drawingCtx.moveTo(i, y);
      } else {
        drawingCtx.lineTo(i, y);
      }
    }
    drawingCtx.stroke();
    return drawingCtx.canvas;
  }
  gui() {
    const ui = html`<style>
      .sound-player {
        border: solid 1px gainsboro;
        background: #f5f5f5;
        font-family: sans-serif;
        color: #6f6f6f;
        font-size: 0.8em;
      }

      .sound-pane {
        display: none;
        height: 50px;
        background: white;
        margin: 8px;
        border: solid 1px gainsboro;
        position: relative;7
      }

      .icons {
        margin: 0 8px 8px 8px;
      }

	  .icons .button {
         cursor: pointer;
         border: solid 1px transparent;
      }

      .icons .button:hover {
         border: solid 1px gainsboro;
      }

      .cursor {
        background: red;
        width: 2px;
        height: 100%;
        position: absolute;
      }
    </style>
    <div class="sound-player">
      <div class="sound-pane">
        <span class="cursor" style="display: none;"></span>
	  </div>
      <div class="icons">
        <span class="button play-button">▶</span>
        <span class="button stop-button">◼</span>&nbsp;&nbsp;
        <span class="duration">${this.duration} s</span>
      </div>
    </div>`;
    const cursor = ui.querySelector('.cursor');
    let interval = null;
    const resetInterval = () => {
      if (interval != null) {
        clearInterval(interval);
        interval = null;
      }
    };
    const soundPlayer = ui.querySelector('.sound-player');
    ui.querySelector('.sound-pane').appendChild(this.draw(46, width - 20));
    ui.querySelector('.play-button').onclick = () => {
      cursor.style.left = '0';
      this.play();
      cursor.style.display = 'block';
      const playTime = Date.now();
      resetInterval();
      interval = setInterval(() => {
        if (!document.contains(soundPlayer)) {
          resetInterval();
          this.stop();
        }
        let progress = (Date.now() - playTime) / this.duration / 1000;
        if (progress < 0) progress = 0;
        if (progress > 1) {
          progress = 1;
          resetInterval();
          this.stop();
          cursor.style.display = 'none';
        }
        cursor.style.left = `${Math.floor(progress * (width - 20))}px`;
      }, 20);
    };
    ui.querySelector('.stop-button').onclick = () => {
      resetInterval();
      this.stop();
      cursor.style.display = 'none';
    };
    return ui;
  }
}
)});
  main.variable(observer("ShowAndPlayInline")).define("ShowAndPlayInline", ["SoundBufferInline"], function(SoundBufferInline){return(
function ShowAndPlayInline(genFn, duration, height, width){
  return new SoundBufferInline(genFn,duration, height, width).gui();  
}
)});
  main.variable(observer("SoundBufferInline")).define("SoundBufferInline", ["ctx","toSound","Draw","html","width"], function(ctx,toSound,Draw,html,width){return(
class SoundBufferInline {
  constructor(genFn, duration = 1, height = 50, width=100) {
    this.width = width;
    this.height = height;
    this.duration = duration;
    // Create an audio buffer.
    this.audioBuffer = ctx.createBuffer(1, ctx.sampleRate * this.duration, ctx.sampleRate);
    this.buffer = this.audioBuffer.getChannelData(0);
    let max = 0;
    for (let i = 0; i < this.audioBuffer.length; i++) {
      const value = toSound(genFn)(i / ctx.sampleRate);
      this.buffer[i] = value;
      if (Math.abs(value) > max) max = Math.abs(value);
    }
    for (let i = 0; i < this.audioBuffer.length; i++) {
      this.buffer[i] = this.buffer[i] / max;
    }
    this.genFn = genFn;
  }
  play(maxVol = 0.3) {
    this.stop();
    this.source = ctx.createBufferSource();
    this.source.buffer = this.audioBuffer;
    const gain = ctx.createGain();
    gain.gain.value = maxVol;
    this.source.connect(gain);
    gain.connect(ctx.destination);
    this.source.start();    
  }
  stop() {
    if (this.source) this.source.stop();
  }
  draw(color = 'red') {
    return Draw(this.genFn, this.height, color, this.width);
  }
  gui() {
    const ui = html`<style>
      .inlinesound-player {
        font-family: sans-serif;
        color: #6f6f6f;
        font-size: 0.8em;
        display: inline-block;
      }

      .inlinesound-pane {
        margin: 8px;
        position: relative;
        display: inline-block;
      }

      .inlineicons {
        margin: 0 0.5em 0.5em 0.5em;
        paadding: 0 1em 1em 1em;
        font-size: 2em;
        height:100%;
      }

	    .inlineicons .inlinebutton {
         border: solid 1px transparent;
      }

      .inlineicons .inlinebutton:hover {
         color: black;
      }

      .cursor {
        background: red;
        width: 2px;
        height: 100%;
        position: absolute;
      }
    </style>
    <span class="inlinesound-player">
      <span class="inlineicons">
        <span class="inlinebutton inlineplay-button">▶</span>
        <span class="inlinebutton inlinestop-button">◼</span>
      </span>
      <span class="inlinesound-pane">
        <span class="inlinecursor" style="display: none;"></span>
      </span>
    </span>`;
    const cursor = ui.querySelector('.inlinecursor');
    let interval = null;
    const resetInterval = () => {
      if (interval != null) {
        clearInterval(interval);
        interval = null;
      }
    };
    const soundPlayer = ui.querySelector('.inlinesound-player');
    ui.querySelector('.inlinesound-pane').appendChild(this.draw());
    ui.querySelector('.inlineplay-button').onclick = () => {
      cursor.style.left = '0';
      this.play();
      //cursor.style.display = 'block'; //this messes up for some reason
      const playTime = Date.now();
      resetInterval();
      interval = setInterval(() => {
        if (!document.contains(soundPlayer)) {
          resetInterval();
          this.stop();
        }
        let progress = (Date.now() - playTime) / this.duration / 1000;
        if (progress < 0) progress = 0;
        if (progress > 1) {
          progress = 1;
          resetInterval();
          this.stop();
          cursor.style.display = 'none';
        }
        cursor.style.left = `${Math.floor(progress * (width - 20))}px`;
      }, 20);
    };
    ui.querySelector('.inlinestop-button').onclick = () => {
      resetInterval();
      this.stop();
      cursor.style.display = 'none';
    };
    return ui;
  }
}
)});
  const child1 = runtime.module(define1);
  main.import("slider", child1);
  main.variable(observer("waveString")).define("waveString", function(){return(
function waveString(freq, phase, amp){
 var str = "\\sin("+freq + "t"
 if(amp != 1){
   str = `${Math.round(amp*100)/100}` + str 
 }
 if(phase != 0){
   str += " + "+`${Math.round(phase/Math.PI*100)/100}π` 
 }
 return str + ")";
}
)});
  main.variable(observer("display")).define("display", ["width","d3","DOM","Generators"], function(width,d3,DOM,Generators){return(
function display(angle) {
  let height = 400;
  
  const radius = Math.min(width, height) / 2 - 20,
        arcOffset = Math.PI / 2,
        arcGen = d3.arc()
          .innerRadius(0)
          .outerRadius(radius - 3)
          .startAngle(arcOffset);
  
  const svg = d3.select(DOM.svg(width, height))
    .attr('viewBox',`-${width / 2} -${height / 2} ${width} ${height}`);
  
  const axis = svg.append('g')
    .attr('transform', `scale(1, -1)`);
  
  const arc = axis.append("path")
    .attr("fill", '#f2f4f6');

  const ticks = axis.append('g')
    .selectAll('g')
      .data(d3.range(0, 360, 1))
    .enter().append('g')
      .attr('transform', d => `rotate(${d}) scale(1, -1)`)
      .append('line')
        .attr('x2', radius);
  
  axis.append('g')
    .attr('text-anchor', 'middle')
    .attr("font-size", 10)
    .attr("font-family", "sans-serif")
    .selectAll('g')
      .data(d3.range(0, 360, 30))
    .enter().append('g')
      .attr('transform', d => `rotate(${d - 90}) translate(0, ${radius}) scale(1, -1)`)
      .append('text')
        .attr("dy", d => d > 180 ? 16 : -6)
        .attr('transform', d => `rotate(${d > 180 ? 180 : 0})`)
        .text(d => `${d}°`);
  
  axis.append('circle')
    .attr('r', 2)
    .attr('fill', 'black'); 
  
  axis.append('circle')
    .attr('r', radius)
    .attr("cursor", "move")
    .attr('fill', 'transparent')
    .call(d3.drag()
          .on('drag', drag));
  
  const degText = svg.append('text')
        .attr('text-anchor', 'middle')
        .attr("dy", -50)
        .attr('transform', 'scale(2,2)')
        .text(``);
 
  const radText = svg.append('text')
        .attr('text-anchor', 'middle')
        .attr("dy", -25)
        .attr('transform', 'scale(2,2)')
        .text(``);
  
  function drag() {
    const x = -d3.event.x;
    const y = -d3.event.y;
    angle.rad = Math.atan2(y, x) + Math.PI;
  }
  
  function update() {
    const degrees = Math.round(angle.deg);

    ticks
      .attr('x1', tick => tick === degrees ? radius - 20 : tick % 30 ? radius - 3 : radius - 10)
      .attr('stroke', tick => tick === degrees || tick === 0 && degrees > 359.5 ? 'red' : 'black');
    
    arc.attr('d', arcGen.endAngle(deg2rad(degrees) + arcOffset));
    let radAngle = deg2rad(degrees)
    degText.text(`${degrees}°`);
    radText.text(`${((x) => x === 1 ? '' : x)(twoDecimalPlaces(radAngle/Math.PI))}π (${twoDecimalPlaces(radAngle)}) rad)`);
  }
  
  function twoDecimalPlaces(x){
   return Math.round(x*100)/100; 
  }
  
  function deg2rad(deg) {
  return deg * Math.PI / 180;
  }
  
  function rad2deg(rad) {
  return rad * 180 / Math.PI;
  }
  
  update();
  
  angle.addEventListener("input", update);
  
  return Generators.disposable(svg.node(), () => {
    angle.removeEventListener("input", update);
  });
}
)});
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require('d3')
)});
  main.variable(observer("round")).define("round", function(){return(
function round(n, digits=3){
  return Math.round(n * (10**digits)) / (10**digits);
}
)});
  main.variable(observer("equationAndBtn")).define("equationAndBtn", ["tex","round","ShowAndPlayInline"], function(tex,round,ShowAndPlayInline){return(
function equationAndBtn(freq, multiplier=10){
  //return `${tex `\sin(${freq})`}${ShowAndPlayInline((t) => Math.sin(t * freq*multiplier), 1, 30, 100) }`
  
  const span = document.createElement('span');
  span.appendChild(tex `\sin(${round(freq, 2)})`)
  span.appendChild( ShowAndPlayInline((t) => Math.sin(t * freq*multiplier), 1, 30, 100))
  return span;//
}
)});
  return main;
}
