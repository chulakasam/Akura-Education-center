export default class Classes{
    id:number;
    className:string;
    teacherName:string;
    description: string;
    date:string;

    constructor(className:string,teacherName:string,description:string,date:string) {
        this.className = className;
        this.teacherName = teacherName;
        this.description = description;
        this.date = date;
    }
}