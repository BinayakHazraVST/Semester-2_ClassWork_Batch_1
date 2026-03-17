import React from 'react'

const ArrayMethod = () => {
    //callback Function
    // function inner(){
    //     console.log("inner");
    // }


    // function outer(innerRef){
    //     console.log("outer");
    //     innerRef()
    // }

    // outer(inner);

    //map function
    // let arr=[1,2,3,4];
    // function map(arr, cb){
    //     let newArr=[];
    //     for (let i=0;i<arr.length;i++){
    //         let newVal=cb(arr[i]);
    //         newArr.push(newVal);
    //     }

    //     return newArr;
    // }

    // const sq=(val)=>{
    //     return val*val;
    // }
    
    // console.log(map(arr,sq));


    //Using map 

    // let arr=[1,2,3,4];
    // let newArray=arr.map((num)=>{
    //     return num*num;
    // })

    // console.log(newArray);

    //Polyfill for filter
    let arr=[1,2,3,4]

    function filterItems(arr, cb){
        let newArr=[]
        for(let i=0;i<arr.length;i++){
            let newVal=cb(arr[i]);
            if(newVal){
                newArr.push(arr[i]);
            }
        }

        return newArr;
    }

    const isEven=(val)=>{
        if(val%2==0){
            return true;
        }else{
            return false;
        }
    }

    const ans=filterItems(arr,isEven);
    console.log(ans);
    
  return (
    <>
    
    </>
  )
}

export default ArrayMethod
