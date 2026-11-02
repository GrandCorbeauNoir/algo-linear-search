function linearSearch(searchTerm, arr) {

      for(let i = 0; i < arr.length; i++){
           if(searchTerm === arr[i]){
            return arr.indexOf(arr[i])
           }
     }
  return undefined;
}

function globalLinearSearch(searchTerm, arr) {
  
  let indexes = []
         
      for(let i = 0; i < arr.length; i++){
           
           if(arr[i] === searchTerm ){
              indexes.push(i)
           }
     }
return indexes;
}

module.exports = { linearSearch, globalLinearSearch  };


 