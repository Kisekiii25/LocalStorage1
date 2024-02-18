// DOM Elements
const studentForm = document.getElementById('studentForm');
const studentsContainer = document.querySelector('.students');
const nameInput = studentForm['name'];
const ageInput = studentForm['age'];
const rollInput = studentForm['roll'];

/*
{
    name: '',
    age: numer,
    roll: number
}
*/

const students = JSON.parse(localStorage.getItem("Student")) || [];

// function
const addstudent = (name, age, roll) => {
    students.push({
        name,
        age,
        roll
    })

    localStorage.setItem("Student", JSON.stringify(students));

    return {name, age, roll};
}

const createStudentElement = ({name, age, roll}) => {
    //Create Element
    const studentDiv = document.createElement('div');
    const studentName = document.createElement('h2');
    const studentAge = document.createElement('p');
    const studentRoll = document.createElement('p');

    //Fill the content
    studentName.innerHTML = "Student name : " + name;
    studentAge.innerHTML = "Student age : " + age;
    studentRoll.innerHTML = "Student roll : " + roll;

    // Add to the DOM
    studentDiv.append(studentName, studentAge, studentRoll);
    studentsContainer.append(studentDiv);

    studentsContainer.style.display = students === 0 ? "none" : "flex";

}

studentsContainer.style.display = students === 0 ? "none" : "flex";

students.forEach(createStudentElement)

studentForm.onsubmit = (e) =>{
    e.preventDefault(); // to not reload the page when submit

    const newStudent = addstudent(
        nameInput.value,
        ageInput.value,
        rollInput.value
    );

    createStudentElement(newStudent)
    //To set the input null when submit
    nameInput.value = "";
    ageInput.value = "";
    rollInput.value = "";
};