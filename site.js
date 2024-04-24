


function sbros(){
var giri = 0;
var belki = 0;
var ugle = 0;
var kalorii = 0;
}
setInterval(sbros, 10000);

function dobav(){
const modal = document.querySelector('#modal');
const btn = document.querySelector('#openModal');
const close = document.querySelector('.close');

modal.style.display = 'block';

btn.onclick = function () {

  modal.style.display = 'block';


};

close.onclick = function () {
  modal.style.display = 'none';

};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
}


function fast(e){

const modal = document.querySelector('#modal2');
const btn = document.getElementById(e);
const close = document.querySelector('.close2');
modal.style.display = 'block';
const btn2 = document.querySelector('.del');

const btn3 = document.getElementById('bebe');
btn3.onclick = function(){
var s = document.getElementById("message2").value
    var s1 = parseFloat(s);
    var s2 = localStorage.getItem(e);
    s2 = s2.split(',');
    var k = localStorage.getItem('kal');
    k = k.split(',');
    var belki = parseInt(s2[0]) * s1 + parseInt(k[0]);
    document.getElementById('zag').textContent='';


    var giri = parseInt(s2[1]) * s1 + parseInt(k[1]);
    var ugle = parseInt(s2[2]) * s1 + parseInt(k[2]);

    belki = Math.ceil(belki);
    giri = Math.ceil(giri);
    ugle = Math.ceil(ugle);
    kalori = (belki * 4) + (ugle * 4) + (giri * 9);

    document.getElementById('zag').append(`Белки: ${belki} Жиры: ${giri} Углеводы: ${ugle} Калории: ${kalori}`);
    localStorage.removeItem('kal');
    localStorage.setItem('kal', [belki, giri, ugle, kalori]);
    modal.style.display = 'none';
    var st = localStorage.getItem('grcalorii');
    st = st.split(',')
    if ((belki < parseInt(st[0]) && giri < parseInt(st[1]) && ugle < parseInt(st[2]))){
    alert('Дневной лимит превышен')
    }

};
btn2.onclick = function () {
  modal.style.display = 'none';
  btn.remove();
  localStorage.removeItem(e);
  modal.style.display = 'none';
 };
btn.onclick = function () {
  modal.style.display = 'block';

};

close.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

}





function startf(){

if ('grcalorii' in localStorage){

} else{
localStorage.setItem('grcalorii', [100000, 100000, 100000, 100000]);
}
if ('kal' in localStorage){

} else{
localStorage.setItem('kal', [0, 0, 0, 0]);
}
for(let i=0; i<localStorage.length; i++) {
  let key = localStorage.key(i);
  if (key === 'grcalorii'){
  } else if (key === 'kal'){
  var s = localStorage.getItem('kal');
  var s1 = s.split(',');

  var belki = parseInt(s1[0]);
  var giri = parseInt(s1[1]);
  var ugle = parseInt(s1[2]);
  var kalori = parseInt(s1[3]);

  document.getElementById('zag').textContent='';
  document.getElementById('zag').append(`Белки: ${belki} Жиры: ${giri} Углеводы: ${ugle} Калории: ${kalori}`);
  }else{
  const btn = document.createElement('button');
  btn.setAttribute('type', 'button');
    btn.setAttribute('onclick', 'fast(this.id)');
    btn.setAttribute('id', key);
    btn.classList.add('table1');

    btn.textContent = key;
    document.getElementById('table').appendChild(btn);
    const probel = document.createElement('br');
    document.getElementById('table').appendChild(probel);
}
}

}

function adder(){
    var s = document.getElementById("message").value
    let s1 = s.split(' ')

    if (s1[0] in localStorage){
    alert('Такой элемент уже есть');
}   else{

    localStorage.setItem(s1[0], [parseInt(s1[1]), parseInt(s1[2]), parseInt(s1[3])]);
    const btn = document.createElement('button');
    btn.setAttribute('type', 'button');
    btn.setAttribute('onclick', 'fast(this.id)');
    btn.setAttribute('id', s1[0]);
    btn.classList.add('table1');
    btn.textContent = s1[0];
    document.getElementById('table').appendChild(btn);
    const probel = document.createElement('br');


    }
    console.log(localStorage);

}
function fastdobav(){
    var s = document.getElementById("fasttext").value
    let s1 = s.split(' ');
    var k = localStorage.getItem('kal');
    k = k.split(',');
    var belki = parseInt(s1[0]) + parseInt(k[0]);
    document.getElementById('zag').textContent='';


    var giri = parseInt(s1[1]) + parseInt(k[1]);
    var ugle = parseInt(s1[2]) + parseInt(k[2]);
    var kalori = (belki * 4) + (ugle * 4) + (giri * 9);
    localStorage.removeItem('kal');
    document.getElementById('zag').append(`Белки: ${belki} Жиры: ${giri} Углеводы: ${ugle} Калории: ${kalori}`);
    localStorage.setItem('kal', [belki, giri, ugle, kalori]);
    var st = localStorage.getItem('grcalorii');
    st1 = st.split(',')
    let net = true;
    if ((belki > parseInt(st1[0]) || giri > parseInt(st1[1]) || ugle > parseInt(st1[2])) === net){
    alert('Дневной лимит превышен')
    }



}
function adder2(){
    var s = document.getElementById("message2").value

    var s2 = localStorage.getItem(e);
    s2 = s2.split(',');

    belki = parseInt(s2[0]) + belki;
    document.getElementById('zag').textContent='';


    giri = parseInt(s2[1]) + giri;
    ugle = parseInt(s2[2]) + ugle;
    kalori = (belki * 4) + (ugle * 4) + (giri * 9);

    document.getElementById('zag').append(`Белки: ${belki} Жиры: ${giri} Углеводы: ${ugle} Калории: ${kalori}`);
    localStorage.removeItem('kal');
    localStorage.setItem('kal', [belki, giri, ugle, kalori]);
    console.log(e);
    console.log(localStorage.getItem(e));

}

function dobavgranicu(){
var s = document.getElementById("granica").value
s1 = s.split(' ');
localStorage.removeItem('grcalorii');
localStorage.setItem('grcalorii', [s1[0], s1[1], s1[2], s1[3]])
}