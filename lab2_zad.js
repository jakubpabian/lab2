const user = {
    name: 'Jakub',
    surname: 'Pabian',
    allGrades:[{
        subjestName: 'Name1',
        grades:[5,4,3,5,2],
        weight: 3
    },
{
    subjestName: 'Name2',
        grades:[3,3,5,2],
        weight: 1
},
{
    subjestName: 'Name3',
        grades:[4,3,3,5],
        weight: 5
},
],
printData: function(){
    console.log(`Name: ${this.name} Last name: ${this.surname}`);
 
},
calculateAvg: function(){
    let result = 0;
    this.allGrades.map((item)=>{
        console.log(_.meanBy(item.grades, this.weight));
 
    })
    console.log(result);
}
}
user.calculateAvg();