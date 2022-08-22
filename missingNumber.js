var missingNum = function(nums){
    var indexSum = nums.length;
    var sum = 0;
    for(var i=0;i<nums.length;i++){
        sum = sum + nums[i];
        indexSum = indexSum+i;
    }
    return indexSum-sum;
   };

   console.log(missingNum([3,0,1,]));