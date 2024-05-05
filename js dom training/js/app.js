const students = [
    'Simonas',
    'Lukas',
    'Martynas',
    'Daiva',
    'Gintare',
    'Nerijus',
    'Ugnius',
    'Danielius',
    'Tomas',
    'Nojus'
];

const randomStudents = [];
for(let i=0; i<10; i++){
    randomStudents.push(
        students[Math.floor(Math.random() * students.length)]
    )
};

console.log(randomStudents);

for(let i=0;i<students.length;i++){
    console.log(`${i+1}.${students[i]}`) //isvedam i console sunumeruotus vardaus
}


for(let i=0;i<students.length;i++){
    let li = document.createElement('li');
    li.textContent = `${i+1}.${students[i]}`;
    document.querySelector('ul').appendChild(li) // isvedam i html puslapi sunumeruotus vardus
    if(students[i].length>6){
        li.style.color = 'red';
    } else{
        li.style.color = 'blue';
    }  
}


let newStudents = [];

for(let i=0;i<students.length;i++){
    // let studentName = students[i];
    // let newStudentName = studentName[0] + studentName[studentName.length-1];
    newStudents.push(students[i][0] + students[i][students[i].length-1]); //arba sitas variantas
}

let string = newStudents.join('');
let h1 = document.createElement('h1');
h1.textContent = string;
document.querySelector('ul').appendChild(h1)