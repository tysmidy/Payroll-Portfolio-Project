import mongoose, { Date, Document, Double, Model } from "mongoose";
import { getEmployeesByStatus } from './employees'

//name out types that will be in schema
export interface Timecard {
    employeeId: string;
    workWeek: Date; 
    payType: string;
    hours: {

        mon: {
            clockInTime: EpochTimeStamp;
	        lunchIn : EpochTimeStamp;
	        lunchOut: EpochTimeStamp;
	        clockOutTime: EpochTimeStamp;
	        monTotalHours : number  
        };

        tues: {
            clockInTime: EpochTimeStamp;
	        lunchIn : EpochTimeStamp;
	        lunchOut: EpochTimeStamp;
	        clockOutTime: EpochTimeStamp;
	        tuesTotalHours: number;
        };

        wens: {
            clockInTime: EpochTimeStamp;
	        lunchIn : EpochTimeStamp;
	        lunchOut: EpochTimeStamp;
	        clockOutTime: EpochTimeStamp;
            wensTotalHours: number;
        };

        thurs: {
            clockInTime: EpochTimeStamp;
	        lunchIn : EpochTimeStamp;
	        lunchOut: EpochTimeStamp;
	        clockOutTime: EpochTimeStamp;
            thursTotalHours: number;
        };

        fri: {
            clockInTime: EpochTimeStamp;
	        lunchIn : EpochTimeStamp;
	        lunchOut: EpochTimeStamp;
	        clockOutTime: EpochTimeStamp;
            friTotalHours: number;
        };

        sat : {
            clockInTime: EpochTimeStamp;
	        lunchIn : EpochTimeStamp;
	        lunchOut: EpochTimeStamp;
	        clockOutTime: EpochTimeStamp;
            satTotalHours: number;
    };

    sun : {
        clockInTime: EpochTimeStamp;
	    lunchIn : EpochTimeStamp;
	    lunchOut: EpochTimeStamp;
	    clockOutTime: EpochTimeStamp;
        sunTotalHours: number;
    };

    totalHours: number;
   };
};

//Extend Document (what Mongoose actually returns)
export interface TimecardDocument extends Timecard, Document {};

//Define the actual schema
const TimecardSchema = new mongoose.Schema<TimecardDocument>({
    employeeId: {type: String, required: true},
    workWeek: {type: Date, required: true},
    payType: {type: String, required: true},
    hours: {

        mon: {
            clockInTime: {type: Number},
	        lunchIn : {type: Number},
	        lunchOut: {type: Number},
	        clockOutTime: {type: Number},
	        monTotalHours : {type: Number},  
        },

        tues: {
            clockInTime: {type: Number},
	        lunchIn : {type: Number},
	        lunchOut: {type: Number},
	        clockOutTime: {type: Number},
	        tuesTotalHours: {type: Number},
        },

        wens: {
            clockInTime: {type: Number},
	        lunchIn : {type: Number},
	        lunchOut: {type: Number},
	        clockOutTime: {type: Number},
            wensTotalHours: {type: Number},
        },

        thurs: {
            clockInTime: {type: Number},
	        lunchIn : {type: Number},
	        lunchOut: {type: Number},
	        clockOutTime: {type: Number},
            thursTotalHours: {type: Number},
        },

        fri: {
            clockInTime: {type: Number},
	        lunchIn : {type: Number},
	        lunchOut: {type: Number},
	        clockOutTime: {type: Number},
            friTotalHours: {type: Number},
        },

        sat : {
            clockInTime: {type: Number},
	        lunchIn : {type: Number},
	        lunchOut: {type: Number},
	        clockOutTime: {type: Number},
            satTotalHours: {type: Number},
    },

    sun : {
        clockInTime: {type: Number},
	    lunchIn : {type: Number},
	    lunchOut: {type: Number},
	    clockOutTime: {type: Number},
        sunTotalHours: {type: Number},
    },

    totalHours: {type: Number},
   }

})

//declare model typing
export const TimecardModel: Model<TimecardDocument> =
    mongoose.models.Timecard || mongoose.model<TimecardDocument>("timecards", TimecardSchema);

//build out CRUD exports

//get all
export const getTimecards = () => TimecardModel.find().exec();

//get by ee id
export const getTimecardById = async (
    employeeId: string
): Promise<TimecardDocument | any> => {
    return TimecardModel.findOne({employeeId}).exec();
};

//get by date entered
export const getTimecardsByDate = async (
    workWeek: Date
): Promise<TimecardDocument | any> => {
    return TimecardModel.find({workWeek}).exec();
};

//create timecard
export const createTimecard = (values: Record<string, any>) =>
    new TimecardModel(values).save().then((timecard) => timecard.toObject());

//delete a timecard
export const deleteTimecardById = (id: string) => TimecardModel.findOneAndDelete({_id: id});

//update a timecard
export const updateTimecardById = (id: string, values: Record<string, any>) => TimecardModel.findByIdAndUpdate({ _id: id});