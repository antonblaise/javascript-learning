// From an array of names of all the people in a classroom,
// get all the names of the students only.

function getStudents (classroom) {
    // Destructuring 'hasTeachingAssistant' (boolean) and 'classList' from the 'classroom' object'
    let { hasTeachingAssistant, classList } = classroom;

    // declare these 3 variables
    let teacher, teachingAssistant, students;

    if (hasTeachingAssistant) {
        // Structuring the list
        // If hasTeachingAssistant === true, 
        // the first 2 names are the teacher and the teaching assistant respectively.
        [teacher, teachingAssistant, ...students] = classList;
        // teacher = array[0]
        // teachingAssistant = array[1]
        // students = array[2:]

    } else {
        // Otherwise, if hasTeachingAssistant === false, 
        // the first name is the teacher, and the rest are all students.
        [teacher, ...students] = classList;
        // teacher = array[0]
        // students = array[1:]
    }

    return students;

}

console.log(getStudents({
    hasTeachingAssistant: false,
    classList: ["Rashida", "John", "Roman", "Lisa", "Omair", "Lukas"]
}));