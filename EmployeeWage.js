console.log("Welcome to Employee Wage Problem \n")
//UC1 Ability to check Employees is present or absent.
console.log("UC1 Checking employee is present or absent ");
const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random()*10)%3;
{
    if(empCheck == IS_ABSENT)
    {
        console.log("Employee is absent");
    }
    else 
    {
        console.log("Employee is present");
    }
}

//UC2 Ability to Calculate Daily Employee Wage based on part time or full time work.
{
console.log("UC2 Calculating wage for employee");
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS =4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
let empHours = 0;
let empCheck = Math.floor(Math.random()*10)%3;
switch(empCheck)
{
    case IS_PART_TIME:
    console.log("Employee is working part time");
    empHours=PART_TIME_HOURS;
    break;
    case IS_FULL_TIME:
    console.log("Employee is working full time");
    empHours = FULL_TIME_HOURS;
    break;
    default:
    empHours =0;
    break;
}
let empWage = empHours*WAGE_PER_HOUR;
console.log("Employee wage: " + empWage);
}
//UC3 Refactor the UC2 Code to write a function to get work hours.
  console.log("UC3 Refactor the Code to write a function to get work hours");
  const IS_PART_TIME = 1;
  const IS_FULL_TIME = 2;
  const PART_TIME_HOURS =4;
  const FULL_TIME_HOURS = 8;
  const WAGE_PER_HOUR = 20;
  function getWorkingHrs(empCheck)
  {
      switch (empCheck) 
      {
          case IS_PART_TIME:
              return PART_TIME_HOURS;          
          case IS_FULL_TIME:
              return FULL_TIME_HOURS;
          default:       
              return 0;
      }
  }
  
  let empWage = WAGE_PER_HOUR*getWorkingHrs(empCheck);
  console.log("Employee wage: " + empWage);

  //UC4 Calculating total emp wage for a month assuming 20 working day in a month.
  console.log("UC4 Calculating total emp wage for a month assuming 20 working day in a month")
  const NUM_OF_WORKING_DAYS =20;
  let empHours=0;
  for(let day =0; day<NUM_OF_WORKING_DAYS; day++)
  {
        let empCheck = Math.floor(Math.random()*10)%3;
        empHours += getWorkingHrs(empCheck);
  }
  empWage = WAGE_PER_HOUR*empHours;
  console.log("Total working hours in mmonth: "+empHours+"\nTotal monthly employee wage : " + empWage);

 //UC5- Calculating wages till number of working days or total working hours per month
   const MAX_HRS_IN_MONTH=100;
   const MAX_DAYS=10
   let totalWorkingHrs=0;
   let totalDays=1;
    //creating new array
   let empWageArray=new Array();
     //UC6- Calculating wages till number of working days or total working hours per month
   function GetDailyWage(empHrs)
   {
       return empHrs*WAGE_PER_HR;
   }
   while(totalWorkingHrs<MAX_HRS_IN_MONTH && totalDays<MAX_DAYS)
   {
       let empCheck=Math.floor(Math.random(10)*10)%3;
       let empHrs=getWorkingHrs(empCheck);
       empWageArray.push(GetDailyWage(empHrs));
       totalWorkingHrs+=empHrs;
       totalDays++;
   }
   let totalWages=totalWorkingHrs*WAGE_PER_HR;
   console.log("UC5: While loop: TotalEmpWage:"+totalWages);
   console.log("UC6: Array Concept: TotalEmpWage:"+totalWages);

   for(let wage of empWageArray)
   {
       console.log(wage);
   }
   //UC 7A using for each helper method to find totalEmpWage
   let totalWage=0;
   function sum(DailyWage)
   {
       totalWage+=DailyWage;
   }
   empWageArray.forEach(sum);
   console.log("UC-7A-using foreach helper method "+totalWage);

   //UC 7A usingreduce helper method to find totalEmpWage
   function getTotalWage(total, DailyWage)
   {
       return total+DailyWage;
   }
   console.log("UC-7A-using reduce helper method "+empWageArray.reduce(getTotalWage,0));

   //UC 7B using map help function - storing day and also daily wage in map
   let dailyCount=0;
   function mapForEmpWage(DailyWage)
   {
       dailyCount++;
       return dailyCount+"="+DailyWage;
   }
   let mapResult=empWageArray.map(mapForEmpWage);
   console.log("UC 7B using map help function- storing day and also daily wage");
   console.log(mapResult);

   //UC 7C using filter function- display fulltime employee wage
   function mapForEmp(DailyWage)
   {
       return DailyWage.includes("160");
   }
   let fullTimeMap=mapResult.filter(mapForEmp);
   console.log("UC 7C using filter function- display full time employee wage ");
   console.log(fullTimeMap);

   //UC 7D using find function- looking for first occurance of fulltime employee result
   console.log("UC 7D using find function- looking for first occurance of fulltime employee result");
   console.log(fullTimeMap.find(mapForEmp))

   //UC 7E using every helper function- checking whether all elements are fulltime or not 
   console.log("UC 7D every helper function- checking whether all elements are fulltime or not");
   console.log(fullTimeMap.every(mapForEmp));

   //UC 7F using some helper function- checking whether parttime element present or not
   function mapForPartTimeEmp(DailyWage)
   {
       return DailyWage.includes("80");
   }
   console.log("UC 7F using some helper function- checking whether parttime element present or not");
   console.log(mapResult.some(mapForPartTimeEmp));

   //UC 7G using reduce helper function- finding out number of working days
   let numberOfDays=0;
   function findNumbnerOfDays(numberOfDays, DailyWage)
   {
       if(DailyWage>0)
       return numberOfDays++;

       return numberOfDays;
   }
   console.log("UC 7G using reduce helper function- finding out number of working days")
   let result=empWageArray.reduce(findNumbnerOfDays);
   console.log(result);
  //UC8 Store the Day and the Daily Wage along with the Total Wage using map.
  console.log("UC 8\nContents of the map:")
  console.log(empDailyWageMap);
  console.log("Total wage using emp wage map: "+Array.from(empDailyWageMap.values()).reduce(totalWages));
  
  // UC9 Using the Daily Wage Map and Daily Hour Map perform following operations using Arrow Functions:
  // 9.a Calculating total Wage and total hours worked. 
   console.log("UC9.a Calculating total Wage and total hours worked.");
   totalWage = empDailyWageArray.filter(empWage=>empWage>0).reduce(totalWages,0);
   function calculateTotalHrs(totalHr,dailyHr) 
    {
        return totalHr+dailyHr;
    }
   totalHr = Array.from(empDailyHourMap.values()).reduce(calculateTotalHrs,0);
   console.log("Using arrow functions,Total wage: "+totalWage+",Total hours: "+totalHr);
   //9.b Show the full workings days, part working days and no working days.
    console.log("UC9.b Show the full workings days, part working days and no working days");
     let fullWorkingDaysArr=new Array();
    let halfWorkingDaysArr=new Array();
    let nonWorkingDaysArr=new Array();
     empDailyHourMap.forEach((value,key,map)=>{
       if(value==8)
       fullWorkingDaysArr.push(key);
       else if(value==4)
       halfWorkingDaysArr.push(key);
        else
       nonWorkingDaysArr.push(key);
   })
    console.log("Full working days: "+fullWorkingDaysArr);
    console.log("Half working days: "+halfWorkingDaysArr);
    console.log("Non working days: "+nonWorkingDaysArr);
    // UC10 Ability to store the Day, Hours Worked and Wage Earned in a single object.   
console.log("UC 10\nShowing daily hours worked and wage alongwith day using object "+empDayWageHourArr.toString());
//printing each property using foreach
empDayWageHourArr.forEach(x=>{
    console.log(x.dayNumber+" => "+x.dailyHr+" => "+x.dailyWage);
});
// UC11 Perform following Object operations using Arrow Functions:
// 11.a Calc total Wage and total hours worked.
console.log("UC11.a Calc total Wage and total hours worked:")
totalWage = empDayWageHourArr.filter(dayWageHour=>dayWageHour.dailyWage>0).reduce((totalWage,dayWageHour)=>totalWage+=dayWageHour.dailyWage,0);
totalHrs = empDayWageHourArr.filter(dayWageHour=>dayWageHour.dailyHr>0).reduce((totalHrs,dayWageHour)=>totalHrs+=dayWageHour.dailyHr,0);
console.log("Total wage: "+totalWage+",Total work hours: "+totalHrs);
// 11.b Show the full workings days using foreach
console.log("UC11.b Show the full workings days using foreach:")
console.log("Printing the full working days:")
empDayWageHourArr.filter(dayWageHour=>dayWageHour.dailyHr==8).forEach(dayWageHour=>process.stdout.write(dayWageHour.toString()));
// 11.c Show Part working days using map() by reducing to String Array
console.log("\nUC11.c Show Part working days using map() by reducing to String Array:")
let partTimeWorkingDaysArr = empDayWageHourArr.filter(dayWageHour=>dayWageHour.dailyHr==4).map(dayWageHour=>dayWageHour.toString());
console.log("Printing the part time working days:\n"+partTimeWorkingDaysArr);
// 11.d No working days only using map() function
console.log("\nUC 11D:")
let noWorkingDaysArr = empDayWageHourArr.filter(dayWageHour=>dayWageHour.dailyHr==0).map(dayWageHour=>dayWageHour.toString());
console.log("Printing the no working days:\n"+noWorkingDaysArr);


  
    