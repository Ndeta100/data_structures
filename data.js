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









console.log(strings)