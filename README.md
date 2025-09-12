9/6/25 - got design/arch in place. Make logic for program. Tomorrow will input what I have and build it out further. MAKE SURE TO MAKE A TICKET FOR THIS

9/8/25 got basic file structure & logic in first commit. Had to go back and install some dependicies for Mongo and express.
9/8/25 Have an issue with tax strat, key is resulting in a TS error. Need to build out data mapping and pass those rates into ts
    -got this fixed. Had to require it. Testing sucks so may see if I can turn alot of this into JS. Unsure on why I chose TS...
Next steps:
-have to build out data mappings
-see about actually getting a DB up so we can pass data in and out of logic  

9/9/25
    -Created very crude data mapping and DB collection. Not sure if I should wait to plan it out or do it now..
    -Was having issues with everthing running, had to get all my ts configs and packages good.
    -Now because of root - package.json, TS will actually complile and run
    Next steps : think I need to get an interface up so you can actually pass data in. From there I can test on basic logic and start building some stuff out.

9/9/25
 to run application - npm run dev
 -Had to fix further issues with packages installed so I could test a front end. 
 -Going to get interface built out some so I can try and mess with the data base/touch some of the logic (determine what someones tax rate should be, think I need to get the logic to prompt this, as the logic is there, but no trigger to actually touch that code.) Can also add console logic if I just want to test...

 9/10 
- Built out basic interface for testing
- installed more dependencies
- may have a problem with actually connecting to DB (look at past notes to fix)
- fixed fedrate data model

9/11
- got DB connected (WSL was not registering it, had to create rule in windows defender)
- messed around with debugging but realized that i'm trying to hardcode things i'm going to change later..
- goint to start working on entering in rates/hours to get gross, move on from there to crazy logic

- note, look for inspo for interfaces
