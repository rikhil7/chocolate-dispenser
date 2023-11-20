var chocolates = [
  'green',
  'green',
  'green',
  'silver',
  'blue',
  'crimson',
  'purple',
  'red',
  'crimson',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'silver',
  'crimson',
  'purple',
  'silver',
  'silver',
  'red',
  'green',
  'red',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'silver',
  'crimson',
  'pink',
  'silver',
  'blue',
  'pink',
  'crimson',
  'crimson',
  'crimson',
  'red',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'crimson',
  'silver',
  'purple',
  'purple',
  'purple',
  'red',
  'purple',
  'red',
  'blue',
  'silver',
  'green',
  'crimson',
  'silver',
  'blue',
  'crimson',
  'purple',
  'green',
  'pink',
  'green',
  'red',
  'silver',
  'crimson',
  'blue',
  'green',
  'red',
  'red',
  'pink',
  'blue',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'blue',
  'red',
  'purple',
  'silver',
  'blue',
  'pink',
  'silver',
  'crimson',
  'silver',
  'blue',
  'purple',
  'purple',
  'green',
  'blue',
  'blue',
  'red',
  'red',
  'silver',
  'purple',
  'silver',
  'crimson',
];

// x and y ==> can take any of the values from the below list-
// [ green, red, purple, blue, crimson, silver, pink ]
// z ==> can take a number from 0<=a<=100

//Progression 1: Add z chocolates of x color
function addChocolates(chocolates, color, count){
  if (count<=0){
    return 'Number cannot be zero/negative'
  }
  else{
    for(let i=0;i<count;i++){
      chocolates.unshift(color)
    }
    return chocolates
  }
}
//Progression 2: Remove z chocolates from the top the dispenser
let removedChocolates = []
let numOfChocolates
function removeChocolates(chocolates,count){
  removedChocolates = []
  console.log(chocolates,count)
  numOfChocolates = chocolates.length
  if (count<=0){
    return "Number cannot be zero/negative"
  }else if (count>numOfChocolates){
    return "Insufficient chocolates in the dispenser"
  }else{
    for (let i=0;i<count;i++){
      removedChocolates.push(chocolates.shift())
      console.log(removedChocolates)
    }
    // console.log(removedChocolates)
    return removedChocolates
  }
}
//Progression 3: Dispense z chocolates
let dispensedChocolates = []
function dispenseChocolates(chocolates,count){
  dispensedChocolates = []
  numOfChocolates = chocolates.length
  if (count<=0){
    return "Number cannot be zero/negative"
  }else if(count>numOfChocolates){
    return "Insufficient chocolates in the dispenser"
  }else{
    for (let i=0;i<count;i++){
      dispensedChocolates.push(chocolates.pop())
    }
    return dispensedChocolates
  }
}
//Progression 4: Dispense z chocolates of x color
let colorSpecificChocolatesArray = []
let colorDispensedChocolates = []
function dispenseChocolatesOfColor(chocolates, count, color){
  numOfChocolates = chocolates.length
  colorSpecificChocolatesArray = []
  colorDispensedChocolates = []
  console.log(chocolates,count,color)
  chocolates.forEach((el)=>{
    if (el==color){
      colorSpecificChocolatesArray.push(el)
    }
  })
  // console.log(colorSpecificChocolatesArray)
  if (count<=0){
    return "Number cannot be zero/negative"
  }else if (count>colorSpecificChocolatesArray.length){
    return "Insufficient chocolates in the dispenser"
  }else{
    // console.log(colorSpecificChocolatesArray)
    for(let i = numOfChocolates-1; i>=0; i--){
      // console.log(i)
      if (chocolates[i]==color){
        colorDispensedChocolates.push(chocolates.pop(chocolates[i]))
        console.log(colorDispensedChocolates)
      }
    }
    // console.log(colorDispensedChocolates)
    return colorDispensedChocolates
  }
}
//Progression 5: Display z chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
let colorCount
let countArray = []
let colorArray = ["green", "silver", "blue", "crimson", "purple", "red", "pink"]
function noOfChocolates(chocolates){
  countArray = []
  colorArray.forEach((el)=>{
    colorCount = 0
    chocolates.forEach((e)=>{
      if (el==e){
        colorCount++
      }
    })
    if (colorCount>0){
      countArray.push(colorCount)
    }
  })
  return countArray
}
//Progression 6: Sort chocolates based on count in each color. Return array of colors
let countObject = {}
let sortedObjectArray = []
let sortedColors
function sortChocolateBasedOnCount(chocolates){
  sortedColors = []
  countObject = {}
  sortedObjectArray = {}
  colorArray.forEach((el)=>{
    colorCount = 0
    chocolates.forEach((e)=>{
      if (el==e){
        colorCount++
      }
    })
    if (colorCount>0){
      countObject[`${el}`] = `${colorCount}`
    }
  })
  // console.log(countObject)
  sortedObjectArray = Object.entries(countObject).sort().sort((a, b) => b[1] - a[1])
  // console.log(sortedObjectArray)
  sortedObjectArray.forEach((el)=>{
    for(let i=0; i<(el[1]);i++){
      sortedColors.push(el[0])
      // console.log(sortedColors)
    }
  })
  // console.log(sortedColors)
  return sortedColors
}
//Progression 7: Change z chocolates of x color to y color
let check = 0
let newChocolates
function changeChocolateColor(chocolates,number, color, finalColor){
  // console.log(number)
  if (number<=0){
    return "Number cannot be zero/negative"
  }
  if (color==finalColor){
    return "Can't replace the same chocolates"
  }
  newChocolates = []
  check = 0
  console.log(chocolates)
  chocolates.forEach((el,i)=>{
    // console.log(i)
    if (check<=number){
      if (el==color){
        chocolates[i]=finalColor
        check++
      }
    }
  })
  // console.log(newChocolates)
  return chocolates
}

//Progression 8: Change all chocolates of x color to y color and return [countOfChangedColor, chocolates]
let finalColorCount = 0
function changeChocolateColorAllOfxCount(chocolates,color, finalColor){
  finalColorCount=0
  if (color==finalColor){
    return "Can't replace the same chocolates"
  }
  chocolates.forEach((el,i)=>{
    if (el==color){
      chocolates[i]=finalColor
    }
  })
  chocolates.forEach((el)=>{
    if (el==finalColor){
      finalColorCount++
    }
  })
  return [finalColorCount,chocolates]
}

//Challenge 1: Remove one chocolate of x color from the top
function removeChocolateOfColor(chocolates,color){
  for (let i = 0; i<chocolates.length; i++){
    if (chocolates[i]==color){
      chocolates.splice(i,1)
      break
    }
  }
  return chocolates
}
//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
let countMap = {}
function dispenseRainbowChocolates(chocolates){
  chocolates.forEach((currChoco)=>{
    countMap[currChoco]=(countMap[currChoco] || 0)+1
  })
  let countOfEachChocolate = Object.values(countMap)
  let total = 0
  // console.log(countOfEachChocolate)
  countOfEachChocolate.forEach((count)=>{
    if(count>=3){
      total += Math.floor(count/3)
    }
  })
  // console.log(total)
  return total
}