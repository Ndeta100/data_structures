// what is a data structure
// IT IS A COLLECTIONS OF VALUES
 

// INSERTION
//DELETION
//TRAVERSAL
//SEARCHING
//SORTING
//MERGING
//ACCESS

// ARRAYS INTRODUCTION
//arrays arranges items sequencially
const strings=['a','b','c','d']
strings[2]

//push
strings.push('e') // O(1)
//pop
strings.pop()
strings.pop() //O(1)


// unshift
strings.unshift('o') //O(n)

// splice
strings.splice(2,0, 'alien') //O(n)
console.log(strings)
//BUILDING AN ARRAY
class MyArray{
    constructor(){
        this.length=0 //initial length
        this.data={}
    }

    get(index){
        return this.data[index]
    }
    push(item){
        this.data[this.length]=item
        this.length++
        return this.length
    }
    pop(){
         const lastItem=this.data[this.length-1]
         delete this.data[this.length-1]
         this.length--
         return lastItem
    }
    delete(index){
      const item=this.data[index]
      this.shiftItem(index)
    }
    shiftItem(index){
      for(let i=index; i<this.length-1; i++){
          this.data[index]=this.data[i+1]
      }
     delete this.data[this.length-1]
     this.length--
    }
}

const newArray=new MyArray()
newArray.push('hi')
newArray.push('you')
newArray.push('0')
newArray.pop()
console.log(newArray)

// Create a function that reverse a string:
//'Hi My name is ndeta  in reverse order
function reverse(str){
  //check input
  if(!str || str.length<2 || typeof str !=='string')  return 'that not good'
  const backwards=[]
  const totalItem=str.length-1
  for(let i=totalItem; i>=0; i--){
    backwards.push(str[i])
  }
  console.log(backwards)
  return backwards.join('')
}
reverse('Hi My name is ndeta ')

// Another solution
function reverse2(str){
    return str.split('').reverse().join()
}

// Another solution
 const reverse3=str=>str.split('').join()


//  [0,1,2,3,4,5,30,4,56,7] git this array to be merge sorted

function mergeSortedArrays(array1, array2){
    const mergedArray=[]
    let array1Item=array1[0]
    let array2Item=array2[0]
    let i=1
    let j=1
    //check inputs
if(array1.length===0){
    return array2
}
if(array2.length===0){
    return array1
}

while(array1Item || array2Item){
    console.log(array2Item, array1Item)
    if(!array2Item||array1Item<array2Item){
        mergedArray.push(array1Item)
        array1Item=array1[i]
        i++
    }else{
        mergedArray.push(array2Item)
        array2Item=array2[j]
        j++
    }
}
    return mergedArray
}
console.log(mergeSortedArrays([1,2,3,4,5], [30,4,56,7]))

// HASH TABLES
let user={
    age:54,
    name:'ndeta',
    magic:true,
    scream:function(){
        console.log('ahhhhhhhh')
    }
}
user.age //0(1)
user.spell='abrak da aba' //0(1)
user.scream() //0(1)

// Implementing a hash table
class HashTable{
    constructor(size){
        this.data=new Array(size)
    }
    _hash(key){
      let hash=0
      for(let i=0; i<key.length; i++){
          hash=(hash+key.charCodeAt(i) *i) %this.data.length
      }
      return hash
    }
    set(key,value){
        let address=this._hash(key)
        if(!this.data[address]){
            this.data[address]=[]
        }
        this.data[address].push([key, value])
       return this.data
    }

    get(key){
        let address=this._hash(key)
       const currentBucket=this.data[address]
       console.log(currentBucket)
       if(currentBucket){
         for(let i=0; i<currentBucket.length; i++){
           if(currentBucket[i][0]===key){
             return currentBucket[i][1]
           }
         }
         return undefined
       }
    }
    
}

const myHashTable=new HashTable(50)
myHashTable.set('grape', 10000)
// myHashTable.get('grapes')


