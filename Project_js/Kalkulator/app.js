function insert(num){
    document.form.textarea.value = document.form.textarea.value + num;
}

function result(){
    var result = document.form.textarea.value;
    document.form.textarea.value = eval(result);
}

function clean(){
    document.form.textarea.value = '';
}

function back(){
    var hasil = document.form.textarea.value;
    document.form.textarea.value = hasil.substring(0, hasil.length-1);
}