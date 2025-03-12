const data = '{"name":"Niloy" , "roll": 2107117 , "Dept":"CSE","cars":["Ford","BMW","Ferrari","Rolce Royce"]}';
const myarray='["Ford","BMW","Ferrari","Rolce Royce"]';

function Parse() {

    const obj = JSON.parse(data);
    console.log(obj);

}

function arrayParse(){
    const array= JSON.parse(myarray);
    console.log(array);
    // array.pop();
    // console.log(array);
}