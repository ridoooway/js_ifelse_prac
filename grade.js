

function calculationgrades(scores) {
    let grades;
    if(scores >=90 && scores <=100 ) {
        grades ='A';
    }
    else if (scores >= 80 && scores <= 89){
        grades = 'B';
    }
    else if(scores >=70 && scores <= 79){
        grades='C';
    }
    else if(scores >= 60 && scores <= 69) {
        grades = 'D';
    }
    else if(scores >= 0 && scores <= 59){
        grades = 'F';
    }
    else{
        return 'invalid score. please enter a score between 0 and 100';
    }
    return `the grade for a score of ${scores} is: ${grades}`;
}

let studentScores = 1000;
console.log(calculationgrades(studentScores));