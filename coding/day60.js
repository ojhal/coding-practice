const nums1 = [1,2,2,1]
const nums2 = [2,2]

const interSectArr = nums1.filter((currEle)=>{
  return nums2.includes(currEle)
})
console.log([...new Set(interSectArr)])
//leetcode Q3