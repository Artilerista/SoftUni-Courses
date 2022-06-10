function filterEmployees(json, criteria) {
  let counter = 0;
  let array = JSON.parse(json);
  for (i = 0; i < array.length; i++) {
    let obj = array[i];
    if (criteria !== 'all') {
      let [key, value] = criteria.split('-');
      if (obj[key] === value) {
        console.log(`${counter}. ${obj.first_name} ${obj.last_name} - ${obj.email}`);
        counter++;
      }
    } else {
      console.log(`${counter}. ${obj.first_name} ${obj.last_name} - ${obj.email}`);
      counter++
    }
  };

}
filterEmployees(`[{
  "id": "1",
  "first_name": "Kaylee",
  "last_name": "Johnson",
  "email": "k0@cnn.com",
  "gender": "Female"
}, {
  "id": "2",
  "first_name": "Kizzee",
  "last_name": "Johnson",
  "email": "kjost1@forbes.com",
  "gender": "Female"
}, {
  "id": "3",
  "first_name": "Evanne",
  "last_name": "Maldin",
  "email": "emaldin2@hostgator.com",
  "gender": "Male"
}, {
  "id": "4",
  "first_name": "Evanne",
  "last_name": "Johnson",
  "email": "ev2@hostgator.com",
  "gender": "Male"
}]`,
  'last_name-Johnson'

)