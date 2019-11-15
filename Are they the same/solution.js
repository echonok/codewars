function comp(arr1, arr2){
  if (arr2 === null) {
    return false;
  };
  let objArr = {};
  for (let i = 0; i < arr2.length; ++i) {
    if (!objArr[arr2[i]]) {
      objArr[arr2[i]] = 1;
    } else {
      objArr[arr2[i]] = objArr[arr2[i]]+1;
    }
  };
  const newArr1 = arr1.map(current => Math.pow(current, 2));
  const allinall = newArr1.map(current => {
    if (!objArr[current]) {
      objArr[current] = 0;
    };
    objArr[current] = objArr[current] - 1;
  });
  for (let propertyobjArr in objArr) {
    if ((objArr[propertyobjArr]) < 0) {
      return false;
    };
  }
  return true;
}
