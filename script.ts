interface Student {
    name: string,
    grades: number[]
}

type Grade = "A" | "B" | "C" | "D" | "F";

function getAverage<T extends number>(arr: T[]): number{
    if (arr.length === 0){
        return 0;
    }
    const sum = arr.reduce((acc, val) => acc + val, 0);
    return sum / arr.length;
}

function getLetterGrade(score: number): Grade {
    if  (score >= 90){
        return "A";
    } else if (score >= 80){
        return "B";
    } else if (score >= 70){
        return "C";
    } else if (score >= 60){
        return "D";
    }else {return "F"};
    
}

function printReport(student: Student): void {
    const average = getAverage(student.grades);
    const grade = getLetterGrade(average);

    const fornattedAverage = average.toFixed(2);

    console.log(`${student.name}'s average: ${fornattedAverage}, Grade: ${grade}`);
}

const students: Student[] = [
    { name: "Adnan", grades: [72,56,74]},
    { name: "Farhan", grades: [62,76,84]},
]

for (const s of students){
    printReport(s);
}