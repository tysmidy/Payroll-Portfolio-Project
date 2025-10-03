TO RUN APPLICATION:
________________________

npm run dev (work does all so i thought i'd chante it up)
go to localhost:5173

9/6/25 - got design/arch in place. Make logic for program. Tomorrow will input what I have and build it out further. MAKE SURE TO MAKE A TICKET FOR THIS

9/8/25 got basic file structure & logic in first commit. Had to go back and install some dependicies for Mongo and express. 9/8/25 Have an issue with tax strat, key is resulting in a TS error. Need to build out data mapping and pass those rates into ts -got this fixed. Had to require it. Testing sucks so may see if I can turn alot of this into JS. Unsure on why I chose TS... Next steps: -have to build out data mappings -see about actually getting a DB up so we can pass data in and out of logic

9/9/25 -Created very crude data mapping and DB collection. Not sure if I should wait to plan it out or do it now.. -Was having issues with everthing running, had to get all my ts configs and packages good. -Now because of root - package.json, TS will actually complile and run Next steps : think I need to get an interface up so you can actually pass data in. From there I can test on basic logic and start building some stuff out.

9/9/25 to run application - npm run dev -Had to fix further issues with packages installed so I could test a front end. -Going to get interface built out some so I can try and mess with the data base/touch some of the logic (determine what someones tax rate should be, think I need to get the logic to prompt this, as the logic is there, but no trigger to actually touch that code.) Can also add console logic if I just want to test...

9/10

Built out basic interface for testing
installed more dependencies
may have a problem with actually connecting to DB (look at past notes to fix)
fixed fedrate data model
9/11

got DB connected (WSL was not registering it, had to create rule in windows defender)

messed around with debugging but realized that i'm trying to hardcode things i'm going to change later..

goint to start working on entering in rates/hours to get gross, move on from there to crazy logic

note, look for inspo for interfaces

9/12

light day, worked on refactoring my HTML based off of one time card, if I want muti later I'll have to refactor it

9/13-9/23

Didn't document much since I was taking in so much information. I had to refactor the front end using react so I could more eaisly tie in my already built out logic.
After this I had to actually redo my logic on the backed because it was flawed. Routes wern't tied into the frontend, they we're everywhere, i was telling it to display data that didn't exist, etc. 
The issue I'm facing now is that i refactored by logic to not take in the employee id and the rate in the database to ensure there correct and doing the gross calculation off of that
Next step: refactor the code to include read logic. After I confirm this works I can start working on other logic until this interface is done and can move on to building other parts of the system.

9/23
fix CRUD logic on gross pay

9/23 - 9/27
    Added logic for taxes and reactored to where both could be displayed in the front end
    may need to go update a "Pay table" in the DB for future to go store gross calculation, and stuff for net 

9/27 - 10/3

Started work on timecards, created layout of UI and made the first data model

10/3

Settled on a model, got that and crud logic built out for it.
Next steps, get helper and then controller in place for timecards