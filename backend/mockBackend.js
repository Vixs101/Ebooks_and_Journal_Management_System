import express from "express";

const app = express();
const port = 5000; //port number




// hardcoded student data
const students = [
    {
        id: 'hashed_student_id_1', faculty:'Science', department: 'Computer Science'
    },
    {
        id: 'hashed_student_id_2', faculty:'Health Science', department: 'Medical laboratory Science'
    },
    {
        id: 'hashed_student_id_3', faculty:'Education', department: 'Computer Science Education'
    },
    {
        id: 'hashed_student_id_4', faculty:'Arts', department: 'English'
    },
    {
        id: 'hashed_student_id_5', faculty:'Law', department: 'Criminal Law'
    }
];

app.post('/signin', (req, res) => {
    const {studentId, faculty, department} = req.body;

    // simulating a validation call
    const validationDelay = 10000; //delay for validation
    setTimeout(() => {
        //finding students by hashed id
        const foundStudent = students.find(student => student.id === studentId);

        if (foundStudent && foundStudent.faculty === faculty && foundStudent.department === department) {
            // generate a custom token
            const randomId = Math.random().toString(36).substring(2, 15);
            const token = `${randomId}.${studentId}.${faculty}.${department}`;

            res.json({token});
        } else {
            res.status(401).send('Invalid Credentials');
            console.log(res);
        }
    }, validationDelay).catch(err => {
        console.error('Error during validation:', err);
        res.status(500).send('Internal Server Error');
    });
});

app.listen(port, () => console.log(`Mock backend listening on port ${port}`));