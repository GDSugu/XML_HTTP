var request = new XMLHttpRequest();
request.open('Get','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json');
request.send();
request.onload = function(){
 var data = JSON.parse(request.response);
//  console.log(data)  
 
//  for(let i=0;i<data.length;i++){
     
    
//     console.log(data[i].name + "," +  data[i].region+ "," + data[i].subregion+ "," + data[i].population)
   
//  }
let res = data.map((ele)=> ele.population )

 let s1 = res.reduce((acc,ele)=> acc+ele)
console.log(s1)
};

