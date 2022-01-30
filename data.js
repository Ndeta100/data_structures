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






