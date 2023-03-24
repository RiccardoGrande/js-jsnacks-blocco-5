//Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine. 


const zuchiniArray = [

    {name: 'zuchini1', weight: 5 , length: 8 },
    {name: 'zuchini2', weight: 6 , length: 8 },
    {name: 'zuchini3', weight: 8 , length: 8 },
    {name: 'zuchini4', weight: 12 , length: 10 },
    {name: 'zuchini5', weight: 14 , length: 12 },
    {name: 'zuchini6', weight: 22 , length: 15 },
    {name: 'zuchini7', weight: 58 , length: 30 },
    {name: 'zuchini8', weight: 6 , length: 8 },
    {name: 'zuchini9', weight: 44 , length: 8 },
    {name: 'zuchini10', weight: 27 , length: 8 }
]

let add = 0;
for (let i = 0; i< zuchiniArray.length; i++)
{
  add += zuchiniArray[i].weight
}

console.log( "Sum of the array values is: ", add);