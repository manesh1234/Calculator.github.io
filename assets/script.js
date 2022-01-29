/* THIS IS ONLY FOR VALIDATING INPUT ALL THE LOGICS ARE IN HTML INLINE JAVASCRIPT  */

var input_element = document.querySelector('#inp');
function validation(e) {
    if (e.key == 'Enter') {
        e.preventDefault();
        var val = input_element.value;
        ans = eval(val);  // EVAL() function which is inbuilt function used to perform all arithmatic operations on given input 'string' and return output of 'int' result 
        input_element.value = ans;
        return true;
    }
    if (e.key >= 0 && e.key <= 9) {
        return true;
    }
    else if (e.key == '%' || e.key == '/' || e.key == '*' || e.key == '-' || e.key == '+') {
        return true;
    }
    else {
        return false;
    }
}

