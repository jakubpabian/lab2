const collections = [
   
    {},
    15,
    "hello@test.pl",
    null,
     ['aaa', 'bbb', 5],
    'admin@gmail.com',
    undefined,
    'a34@yahoo.com',
    '321@a',
     '321.pl'
    ];
 
const filter = (array) => {
    let result = [];
    array.map(item=>{
        mailRegex.test(item) ? result.push(item): null;
    })
    console.log(result);
}
filter(collections);