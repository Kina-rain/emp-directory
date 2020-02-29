const express = require("express");

const app = express();

app.get("/api/employees", (req, res) => {
    const employees = [
        {id: 1, firstName: "John", lastName: "Doe", title: "Manager", salary: 50000, manager: "", department: "Development"},
        {id: 2, firstName: "Jane", lastName: "Snow", title: "QA Tester", salary: 60000, manager: "John Doe", department: "Development"},
        {id: 3, firstName: "Sam", lastName: "Smith", title: "Software Engineer", salary: 80000, manager: "John Doe", department: "Development"}
    ];

    res.json(employees);
});
    
const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

