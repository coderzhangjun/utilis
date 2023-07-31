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

/**
 * 返回一个新数组，包含两个输入数组中相同的元素，或者在指定属性上相等的对象。
 * 如果未指定属性（key），则函数将查找完全相同的元素。
 * 如果指定了属性（key），则函数将查找具有相同值的指定属性的对象。
 *
 * @param {Array} array1 - 第一个数组
 * @param {Array} array2 - 第二个数组
 * @param {String} [key] - 对象的属性名，用于比较两个数组中的对象
 * @returns {Array} 包含两个输入数组中相同元素或属性相同的对象的新数组
 */
function findCommonElements(array1, array2, key) {
    // 参数验证
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
      throw new Error("The first two inputs must be arrays!");
    }
  
    if (key && typeof key !== "string") {
      throw new Error("Key must be a string!");
    }
  
    // 准备工作
    let map = new Map();
    let getKey = item => item;
    if (key) {
      getKey = item => item && typeof item === "object" ? item[key] : null;
    }
  
    let smallerArray = array1.length < array2.length ? array1 : array2;
    let largerArray = array1.length >= array2.length ? array1 : array2;
  
    // 构建Map
    smallerArray.forEach((item) => {
      if (key ? item && typeof item === "object" && key in item : true) {
        map.set(getKey(item), item);
      }
    });
  
    // 过滤数组
    return largerArray.filter(
      (item) =>
        (key ? item && typeof item === "object" && key in item : true) &&
        map.has(getKey(item))
    );
  }

const newArr =  compareArr([6,10,11,19],[3,4,5,9])
newArr.forEach(item=> console.log(item))

