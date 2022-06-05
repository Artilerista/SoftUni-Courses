function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const input = JSON.parse(document.querySelector('textarea').value);
      let bestAvgSalary = 0;
      let bestRest = '';
      let object = {};

      for (const line of input) {
         let tokens = line.split(' - ');
         let restaurant = tokens[0];
         let staff = tokens[1].split(', ');

         for (let worker of staff) {

            let token = worker.split(' ');
            let name = token[0];
            let salary = Number(token[1]);

            if (object.hasOwnProperty(restaurant) === false) {
               object[restaurant] = {};
            }

            object[restaurant][name] = salary;

         }

      }
      for (const [restaurant, obj] of Object.entries(object)) {
         let staff = Object.values(obj);
         let totalSalary = 0;
         let avgSalary = 0;
         for (const salary of staff) {
            totalSalary += salary;
         }
         avgSalary = totalSalary / staff.length;
         if (avgSalary > bestAvgSalary) {
            bestAvgSalary = avgSalary;
            bestRest = restaurant;
         }
      }

      let sorted = Object.entries(object[bestRest]).sort((a, b) => b[1] - a[1]);

      let bestSalary = sorted[0][1];

      document.querySelector('#bestRestaurant p').textContent = (`Name: ${bestRest} Average Salary: ${bestAvgSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`);
      let list = [];
      
      for (const [name, salary] of sorted) {
         list.push((`Name: ${name} With Salary: ${salary}`));
      }
      document.querySelector('#workers p').textContent = list.join(' ');
   }
}