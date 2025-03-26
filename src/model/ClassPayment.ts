export default class ClassPayment{
    studentName: string;
    studentId: string;
    className: string;
    amount: number;
    paymentDate: string;

    constructor(studentName: string, studentId: string, className: string, amount: number, paymentDate: string) {
        this.studentName = studentName;
        this.studentId = studentId;
        this.className = className;
        this.amount = amount;
        this.paymentDate = paymentDate;
    }
}