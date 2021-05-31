
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
    
    