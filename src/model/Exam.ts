export default class Exams{
    examName:string;
    examDate:string;
    examTime:string;
    examHall:string;
    duration:string;

    constructor(examName:string,examDate:string,examTime:string,examHall:string,duration:string) {
        this.examName=examName;
        this.examDate=examDate;
        this.examTime=examTime;
        this.examHall=examHall;
        this.duration=duration;
    }
}