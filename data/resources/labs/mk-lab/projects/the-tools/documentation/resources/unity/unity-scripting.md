
# UNITY NOTES
started 20190909 at 1:01:36.868 pm = 1568048496868.

## OUTLINE
list of elements:
- C# intro
- two



## KEY MOVES



## LINKS

- codecademy [C# tutorial](https://www.codecademy.com/learn/learn-c-sharp)
-



## MK SCRIPTING TUTORIAL PROSE




## UNITY SCRIPTING INTRO

Again--just the very basics.  This is a collection of some of the “moves” that might help you as a storyteller or game designer in Unity.  Most frequently, these are ways of determining how your environment will change in response to user activity or the passage of time.  While the world you construct is not, when conceived of as a whole, a linear narrative, there are going to be some linear micro-narratives that get triggered when certain conditions are met--like when you touch a box a video then plays, or when you jump you go up in the air and then fall, or if you arrive at a certain spot on the map you “level up.”  These conditionally triggered micro-narratives have this basic structure:


####     if ( some condition is met )


####     {


####         something happens


####     }

The game you’re building is made up of thousands and thousands of these little structures--most of which are “under the hood” and often pretty basic, low-level, and repetitive, so Unity hides them from you in a black box to let you focus on building your gameworld. But from time to time you will need to create some of these conditional micro-narratives yourself, and that’s where C# scripting[^1] comes in.

So, this probably goes without saying in TDM, but it should be clear that just as a theatrical script offers directors and actors and stagehands the set of instructions to follow to bring a play to life, so too does your collection of C# scripts offer the computer the instructions that will bring your VR world to life.


### BASIC MECHANICS

These are things you’ll have to do again and again and again.  All of this can be found at this website: [https://docs.unity3d.com/ScriptReference](https://docs.unity3d.com/ScriptReference).


### THE BASIC ELEMENTS



*   Variables
    *   public and private
    *   String
    *   Int
    *   Bool
    *   float
*   Functions Start() and Update()
*   Conditionals


### TRIGGERS



*   Everything in the Start()function executes when the scene launches
*   Everything in the Update() function executes once each frame.
    *   You can check to see if a key is pressed, for instance like so:

        ```
        public class KeyCodeExample : MonoBehaviour
        {
            void Update()
            {
                if (Input.GetKeyDown(KeyCode.Space))
                {
                    Debug.Log("Space key was pressed.");
                }
               if (Input.GetKeyUp(KeyCode.Space))
                {
                    Debug.Log("Space key was released.");
                }
            }
        }
        ```


*   Physics & Colliders (`OnTriggerEnter, OnTriggerExit`)


```
private void OnTriggerEnter(Collider other)
    {
       Debug.Log("entered");
    }
private void OnTriggerExit(Collider other)
    {
       Debug.Log("exited");
    }
```



### ACTIONS



*   Debug.Log("hello") will log a string to the console.
*   Play

    ```
    private AudioSource audio;
    audio.Play();
    ```
*   Scene change

```
  // at the top
  using UnityEngine.SceneManagement;

// then later to load scene 1 (or any other)
SceneManager.LoadScene(1);
```


### DETECT PLAYER CROSSING COLLIDER BOUNDARY


private void OnTriggerEnter(Collider other)
{
    if (other.CompareTag("Player"))
   {
       // do something, like . . .             
   }
}


<!-- Footnotes themselves at the bottom. -->
## Notes

[^1]:
     There is clearly something thought-provoking in the fact that word “script” refers both to [the set of instructions we’ll be typing up for the computer to follow](https://en.wikipedia.org/wiki/Scripting_language) with our C# code to bring our story to life, AND that it refers to to the set of instructions we give to the set of people who bring a theatrical production to life.
