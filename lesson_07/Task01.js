'use strict'
{
    const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов','Смирнов', 'Попов', 'Соколов'];
    const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

    const filter = (students, failStudents) => {
        const studentsAll = students;
        const failExemsStud = failStudents;
        const goodStudents = [];
        
        for(let i = 0; i < studentsAll.length; i++) {
            if(failExemsStud.includes(studentsAll[i]) === false) {
                goodStudents.push(studentsAll[i]);
            }
        }
        return goodStudents;
    }

    console.log(filter(allStudents, failedStudents));

}
