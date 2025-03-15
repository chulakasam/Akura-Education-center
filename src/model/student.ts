export default class Students {


    studentName: string;
    nic:number;
    dob:string;
    address:string;
    email:string;
    mobilePhone:number;
    guardianphone:number;

    constructor(studentName: string, nic: number, dob: string, address: string, email: string, mobileNo: number, guardianphone: number) {

            this.studentName = studentName;
            this.nic=nic;
            this.dob = dob;
            this.address = address;
            this.email = email;
            this.mobilePhone=mobileNo;
            this.guardianphone=guardianphone;
    }
}