export default class ExamPayment {
    studentName: string;
    studentId: string;
    examName: string;
    amount: number;
    paymentDate: string;

    constructor(studentName: string, studentId: string, examName: string, amount: number, paymentDate: string) {
        this.studentName = studentName;
        this.studentId = studentId;
        this.examName = examName;
        this.amount = amount;
        this.paymentDate = paymentDate;
    }
}