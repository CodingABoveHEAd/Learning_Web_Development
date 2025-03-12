const obj = {
    name: "niloy",
    roll: 2107117,
    dept: "CSE",
    age: new Date()
};

const myarray = ["BMW", "Ford", "Lambourghini"];

function Stringify() {
    const myJson = JSON.stringify(obj);
    console.log( myJson);

}

function arrayStringify(){
    const array=JSON.stringify(myarray);
    console.log(array);
}