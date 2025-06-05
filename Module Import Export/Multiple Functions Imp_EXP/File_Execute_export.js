

let addcallfunc=(a,b)=>{

    return a+b;

}

let mulcallfunc=(x,y)=>{

    return  x*y;
}

let divcallfucn=(s,b)=>{

    return s/b;

}

let subtraction=(d,t)=>{
    return d-t;
}

//!This is Wrong 
// module.exports=addcallfunc();
// module.exports=mulcallfunc(); 

let PI=3.14;
//?This is Correct
module.exports={
    addcallfunc,
    mulcallfunc,
    divcallfucn,
    subtraction,
    PI,
    name:"Rishabh"
}


//? Correct second method 
// module.exports.addcallfunc=addcallfunc;
// module.exports.mulcallfunc=mulcallfunc;
