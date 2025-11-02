import React, { useState } from "react";

//this will be the form used for the base interface of Time

interface TimecardFormTypes {
  onSubmit:(
        employeeId: string,
    //status: string,
    workWeek: string,
    workDay: string,
    //clockIn: number,
    //lunchOut: number,
    //lunchIn: number,
    //clockOut: number,
    totalHours: number
  ) => any
};

const TimeInterface: React.FC<TimecardFormTypes> = ({onSubmit}) => {
    const [employeeId, setEmployeeId] = useState("");
    //will most likely have to change this back to use numvber
    const [workWeek, setWorkWeek] = useState<string>("");
    const [totalHours, setTotalHours] = useState<number>(0);

    //make all other fields null until DB fetches data?
   var dayOfTheWeek: any
   dayOfTheWeek = ["Mon" , "Tues", "Wends"]
   
/*    forEach(dayOfTheWeek => {
    dayOfTheWeek = ["Mon" , "Tues", "Wends" ]
    return dayOfTheWeek;
   }); */

   //const status = "active";
   const workDay = dayOfTheWeek;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(employeeId, workWeek, workDay, totalHours  );
         
    };

    return (

        <div>
            <div id="top-div">
                <h1>Timecards</h1>
                <br/>
                <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded shadow">
                    
                    <label>
                    Work week:
                    <input type="string"
                           value={workWeek} 
                           onChange={(e) => setWorkWeek(String(e.target.value))}/>
                    </label>

                    <label>
                        Employee ID:

                        <input
                        type="text"
                        value={employeeId}
                        onChange={(e) => setEmployeeId(e.target.value)}></input>
                    </label>

                    <label>
                        Hours Worked: 
                        <input type="number"
                        value={totalHours}
                        onChange={(e) => setTotalHours(Number(e.target.value))} />
                    </label>

                    <button type="submit"> Submit Time </button>

                </form>
            </div>
        </div>
    )

}

export default TimeInterface;




function forEach(arg0: (dayOfTheWeek: any) => any) {
    throw new Error("Function not implemented.");
}
/*var workDay = ["Monday" , "Tuesday" , "Wendsday" , "Thursday" , "Friday" , "Saturday" , "Sunday" ];

workDay.forEach(function(element: any) {
    return workDay[element]
}); 


return (
    <div>
        <div id="top-div">

        </div>



    </div>
) */