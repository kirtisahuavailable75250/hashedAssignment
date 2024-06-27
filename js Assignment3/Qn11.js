const input = [
    {
        student1: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student2: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student3: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    }
];

const output = input.map((studentObj) => {
    const studentKey = Object.keys(studentObj)[0]; 
    const scores = Object.values(studentObj[studentKey]); 

    let sum = 0;
    for (let score of scores) {
        sum += score;
    }

    const average = sum / scores.length; 
    return { [studentKey]: { average } }; 
});

console.log(output);
