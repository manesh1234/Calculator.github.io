/* THIS IS ONLY FOR VALIDATING INPUT ALL THE LOGICS ARE IN HTML INLINE JAVASCRIPT  */

var el = document.querySelector('#inp');
function validation(e){
    if(e.key=='Enter'){
        e.preventDefault(); 
        var val = el.value;
        let ans,t="";   
        for(var i=0;i<val.length;i++){
            if(val[i]!='+'){
                t += val[i];
                console.log(t);
            }
            if(val[i]=='+'){
                var r = parseInt(t);
                console.log(typeof(r));
                ans += r;
                console.log(ans);
                t = "";
            }
        }
        console.log(typeof(ans));
        console.log(ans);
        console.log(typeof(t));

        el.innerHTML = el.value;
        return true;
    }
    if(e.key>=0 && e.key<=9){
        return true;
    }
    else if(e.key=='%' ||  e.key=='/' || e.key=='*' || e.key=='-' || e.key=='+'){
        return true;
    }
    else{
        return false;
    }
}

