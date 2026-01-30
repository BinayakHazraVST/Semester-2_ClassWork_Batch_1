let s=prompt("Enter number of items: ");
s=Number(s);
//normal function
function PleasePay(s){
    let tp=s*500.0;
    function discount(s){
        let discount=0.0;
        if(s>=10){
            discount=0.1;
        }
        return s*discount;
    }

    let dis=discount(s);
    let p_dis=tp-dis;

    function gst(p_dis){
        let gst=0.18;
        return gst*p_dis;
    }

    let g=gst(p_dis);
    let total=p_dis+g;

    console.log("total price: "+total);
}


//function expression

let PleasePayFE=function(s){
    let tp=s*500.0;
    let discount=function(s){
        let discount=0.0;
        if(s>=10){
            discount=0.1;
        }
        return s*discount;
    }

    let dis=discount(s);
    let p_dis=tp-dis;

    let gst=function (p_dis){
        let gst=0.18;
        return gst*p_dis;
    }

    let g=gst(p_dis);
    let total=p_dis+g;

    console.log("total price: "+total);
}

//Arrow function

let PleasePayAF=(s)=>{
    let tp=s*500.0;
    let discount=(s)=>{
        let discount=0.0;
        if(s>=10){
            discount=0.1;
        }
        return s*discount;
    }

    let dis=discount(s);
    let p_dis=tp-dis;

    let gst=(p_dis)=>{
        let gst=0.18;
        return gst*p_dis;
    }

    let g=gst(p_dis);
    let total=p_dis+g;

    console.log("total price: "+total);
}

//Immediately invoked function Expression

const run=(function PleasePay(s){
    let tp=s*500.0;
    const discount=(function discount(s){
        let discount=0.0;
        if(s>=10){
            discount=0.1;
        }
        return s*discount;
    })(100);

    let p_dis=tp-discount;

    const gst=(function gst(p_dis){
        let gst=0.18;
        return gst*p_dis;
    })(100);

    
    let total=p_dis+gst;

    console.log("total price: "+total);
})(100);


PleasePay(s);
PleasePayAF(s);
PleasePayFE(s);

console.log(run);