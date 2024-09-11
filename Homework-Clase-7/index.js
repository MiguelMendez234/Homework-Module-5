import express from 'express'
import students from './students.json' assert {type: 'json'};
import fs from 'fs'

const port = 3002;
const app = express();

// const students = [
//     { id: 1, name: 'Alice', age: 20, major: 'Computer Science' },
//     { id: 2, name: 'Bob', age: 22, major: 'Mathematics' },
//     { id: 3, name: 'Charlie', age: 21, major: 'Physics' }
// ];

// Este get muestra los estudiantes
app.get('/students', (req, res)=>{
    res.send(students)
});

app.get('/students/:id', (req, res)=>{
    const id = req.params.id;
    const result = students.find((student)=> student.id === parseInt(id))
    if(result) res.send(result)
    else{
    res.status(404);
    res.send('Student not found')
    }
});

app.delete('/students/:id', (req,res)=>{
    const id = req.params.id;
    const result = students.findIndex((student)=>student.id === parseInt(id))
    if(result !== -1){
        students.splice(result, 1)
        res.send(`Se ha eliminado el estudiante con el id ${id}`)
    }else{
        res.status(404);
        res.send('Student not found')
    }
})



app.listen(port)