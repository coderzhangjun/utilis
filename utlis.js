// 返回2个数组的不同项
const compareArr = ( arr1 ,arr2 )=>{
    const diffArr = []
    arr1.forEach(item1 => {
        if(!arr2.includes(item1)){
            diffArr.push(item1)
        }
    });
    arr2.forEach(item2 => {
        if(!arr1.includes(item2)){
            diffArr.push(item2)
        }
    })
    return diffArr
}

const newArr =  compareArr([6,10,11,19],[3,4,5,9])
newArr.forEach(item=> console.log(item))
