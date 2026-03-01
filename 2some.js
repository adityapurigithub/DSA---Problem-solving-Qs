function twoSum(arr,target){
   const map=new Map();
   map.set(arr[0],0);
   for(let i=1;i<arr.length;i++){
       if(map.has(target-arr[i])){
           console.log('2some found @->',map.get(target-arr[i]),i);
           return;
       }
       map.set(arr[i],i);
   }
   console.log('No 2some found!!')
}

twoSum([1,5,6,22,7,9],31);
