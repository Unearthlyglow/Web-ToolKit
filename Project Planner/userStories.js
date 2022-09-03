User Stories:

        1. Describe what a user WANTS the software to do.

        2. Don't include technical specs

        3. Test stories, by confirming they work for other solutions

        4. write in the language of the user NOT the system

        5. Test stories, by checking they are understandable to all



        ORGANIZE THIS NEXT:
        Ch 231: How to Plan a Web Project -
        1. User Stories: Description of the app's functionality from the user's perspective. All user stories put together describe the entire application.
        Common Format: "As a [type of user:user, admin etc..], I want [an action: the WHAT?] so that [a benefit: The Why?].
        
        2. Features:
        See SS.
        
        3. Flowchart: What we build.
        See SS.
        
        4. Architecture:HOW we will build
        See SS.
        
        Ch 232: That ole statement: "Know your location BLOCK or ALLOW"
        if (navigator.geolocation)
          navigator.geolocation.getCurrentPosition(
            function (position) {
              const { latitude } = position.coords;
              const { longitude } = position.coords;
              console.log(position, latitude, longitude);
            },
            function () {
              alert("Could not get your location, this comes up IF you choose block");
            }
          );
        
        CH 233: The order of js files matter, use defer to have them in order. Further INFO NEEDED
        
        Local Storage API, CH 242:
        Not advised for storing data, this will slow down your application. Can be found on the browser, bring up the console and click the Application tab. Then you'll find a section for Storage and you'll need to click on Local Storage.
        _setLocalStorage() {
          localStorage.setItem('workouts', JSON.stringify(this.#workouts));
        } 
        the 'workouts' is the key and the JSON.stringify(this.#workouts) is the value. 