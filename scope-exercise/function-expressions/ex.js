

function printRecords(recordIds) {
	let result = [];

  /*Searching inside students and find the id that match*/
  /*An alternative is to use includes for recordIds */
  for(let student in studentRecords)
   {
      for(let ids in recordIds)
      {
      
      if(recordIds[ids] == studentRecords[student].id)
            result.push(studentRecords[student]);
     }
     
      }
      /*overwrite the sort array function to sort 2 object by property( name) */
    result.sort(function sort(a,b)
    {
      const nameA = a.name;
      const nameB = b.name;
      let comparatie = 0;
      if(nameA>nameB)
      {
        comparatie = 1;
      }
      else if (nameA<nameB)
      {
        comparatie = -1
      }
      return comparatie;
    })
    /* Iterate throw the result array printing result as expected in condition */
    for (let data in result)
    {
      function paidOrNot()
      {
        if (!!result[data].paid)
      {
        return 'Paid';
      }
      else
      {
       return 'Not Paid';
      }
      }
      console.log(`${result[data].name} (${result[data].id}) ${paidOrNot()}` )
      
    }
}

function paidStudentsToEnroll() {
//store the currenterroled student
let result  =currentEnrollment;
  for(let student in studentRecords)
  {
  //add students that paid but are not enrolled
  if((!!studentRecords[student].paid == true) && (!!currentEnrollment.includes(studentRecords[student].id) == false))
   
    {
   result.push(studentRecords[student].id)
      
    }
  }
  //call the previous function
  printRecords(result)
}

function remindUnpaid(recordIds) {
  let h = [];
	for(let student in studentRecords)
    {  
      for(var ids in recordIds)
        {
          if(recordIds[ids] == studentRecords[student].id)
          {
            if(studentRecords[student].paid == false)
              h.push(studentRecords[student].id);
          }
        }
    }
    printRecords(h);
}


// ********************************
/* same exercises but with arrow function (made by Kyle Simpson)*/
var getStudentFromId = studentId => studentRecords.find(record => record.id == studentId);

var printRecords = recordIds =>
	recordIds.map(getStudentFromId)
		.sort(
			(record1,record2) => record1.name < record2.name ? -1 : record1.name > record2.name ? 1 : 0
		)
		.forEach(record =>
			console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`)
		);

var paidStudentsToEnroll = () =>
	[ ...currentEnrollment,
		...(
			studentRecords.filter(record => (record.paid && !currentEnrollment.includes(record.id)))
			.map(record => record.id)
		)
	];

var remindUnpaid = recordIds =>
	printRecords(
		recordIds.filter(studentId => !getStudentFromId(studentId).paid)
	);


var currentEnrollment = [ 410, 105, 664, 375 ];

var studentRecords = [
	{ id: 313, name: "Frank", paid: true, },
	{ id: 410, name: "Suzy", paid: true, },
	{ id: 709, name: "Brian", paid: false, },
	{ id: 105, name: "Henry", paid: false, },
	{ id: 502, name: "Mary", paid: true, },
	{ id: 664, name: "Bob", paid: false, },
	{ id: 250, name: "Peter", paid: true, },
	{ id: 375, name: "Sarah", paid: true, },
	{ id: 867, name: "Greg", paid: false, },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
