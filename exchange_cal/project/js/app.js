let from = document.getElementById('from');
let to = document.getElementById('to');
let input = document.getElementById('input');
let calc = document.getElementById('calc');
let result = document.getElementById('result');
let recordList = document.getElementById('recordList');

// rate က from to selector ကိုဖမ်းတာ
// value ဆိုတာက data.rates[rate]ကို ပြော တန်ဖိုး
function createOption(rate,name,value){
    let option = document.createElement('option');
    let text = document.createTextNode(name);
    option.appendChild(text);
    option.setAttribute('value',toNum(value));
    rate.appendChild(option);
}
function toNum(value){
    return Number(value.replace(",",""));
}
for(rate in data.rates){
    // rate က name တွေကိုဖော်ပြတာ 
    createOption(from,rate,data.rates[rate]);
    createOption(to,rate,data.rates[rate]);
    // from ထဲကို rate ဆိုတဲ့ name တွေထည့်
    // console.log(rate,data.rates[rate]);
}
function row(x){
    let empty = document.getElementById
    ('empty');
    if(empty){
        empty.remove();
    }

    let tr = document.createElement('tr');
    x.map(function(el){
        let td = document.createElement('td');
        let text = document.createTextNode(el);
        td.appendChild(text);
        tr.appendChild(td);
    })
    recordList.appendChild(tr);
}
function store(){
    localStorage.setItem('record',recordList.innerHTML);
}
calc.addEventListener('submit',function(e){
    e.preventDefault()
    // get state
    let x = input.value;
    let y = from.value;
    let z = to.value;
    
    // console.log(x,y,z);
    
    // process
    let first = x*y;
    // console.log(first);
    let second = first/z;
    let resultNum = second.toFixed(2);
    let fromText = x+from.options[from.selectedIndex].innerText;
    let toText = to.options[to.selectedIndex].innerText;
    // console.log(second.toFixed(2));
    let date = new Date().toLocaleDateString();
    let arr = [date,fromText,toText,resultNum];
    row(arr);
    store();

    // set state 
    result.innerHTML = resultNum;
    input.value ="";
    input.focus();
    from.value="";
    to.value="1";
});
(function(){
    if(localStorage.getItem('record')){
        recordList.innerHTML=localStorage.getItem('record')
    }else{
        recordList.innerHTML=`<tr id="empty"><td colspan=4>There is no result.</td></tr>`
    }
})()
function test(){
    console.log(from.options[from.selectedIndex].innerText)
}
// ======= change mode ------
function changeMode(){
    document.body.classList.toggle("night-mode");
    document.getElementById('modeIcon').classList.toggle('fa-sun')
}

