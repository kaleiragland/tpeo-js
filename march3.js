// Week 2 Homework
function sumOfSquareAreas(a, b) {
    return a**2 + b**2;
}
console.log(sumOfSquareAreas(1,4));
console.log(sumOfSquareAreas(3,9));
console.log(sumOfSquareAreas(5,6));

function gradeCalculator(homeworkAvg, quizAvg, examAvg) {
    return (homeworkAvg * 0.10) + (quizAvg * 0.15) + (examAvg * 0.75);
}
console.log(gradeCalculator(100,100,100));
console.log(gradeCalculator(0,100,100));
console.log(gradeCalculator(80,90,75));