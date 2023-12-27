//the show refers to the plus icon. was named according to it's function as it is used to show the answer.
const show1=document.querySelector(".show1");
const show2=document.querySelector(".show2");
const show3=document.querySelector(".show3");
const show4=document.querySelector(".show4");
//the hide refers to the minus icon as it is used to hide the answer.
const hide1=document.querySelector(".hide1");
const hide2=document.querySelector(".hide2");
const hide3=document.querySelector(".hide3");
const hide4=document.querySelector(".hide4");
//the answer number corresponds to its question number.
const ans1=document.querySelector(".answer1");
const ans2=document.querySelector(".answer2");
const ans3=document.querySelector(".answer3");
const ans4=document.querySelector(".answer4");

// for question-1
show1.addEventListener('click',(e)=>{
    show1.style.display='none';
    hide1.style.display='inline';
    showHideAnswer1();
});
hide1.addEventListener('click',(e)=>{
    hide1.style.display="none";
    show1.style.display='block';
    showHideAnswer1();
});
function showHideAnswer1(){
    if(show1.style.display==='block'){
        ans1.style.display='none';
    }else{
        ans1.style.display='block';
    }
};

//for question-2
show2.addEventListener('click',(e)=>{
    show2.style.display='none';
    hide2.style.display='inline';
    showHideAnswer2();
});
hide2.addEventListener('click',(e)=>{
    hide2.style.display="none";
    show2.style.display='block';
    showHideAnswer2();
});
function showHideAnswer2(){
    if(show2.style.display==='block'){
        ans2.style.display='none';
    }else{
        ans2.style.display='block';
    }
};

//for question-3
show3.addEventListener('click',(e)=>{
    show3.style.display='none';
    hide3.style.display='inline';
    showHideAnswer3();
});
hide3.addEventListener('click',(e)=>{
    hide3.style.display="none";
    show3.style.display='block';
    showHideAnswer3();
});
function showHideAnswer3(){
    if(show3.style.display==='block'){
        ans3.style.display='none';
    }else{
        ans3.style.display='block';
    }
};

//for question-4
show4.addEventListener('click',(e)=>{
    show4.style.display='none';
    hide4.style.display='inline';
    showHideAnswer4();
});
hide4.addEventListener('click',(e)=>{
    hide4.style.display="none";
    show4.style.display='block';
    showHideAnswer4();
});
function showHideAnswer4(){
    if(show4.style.display==='block'){
        ans4.style.display='none';
    }else{
        ans4.style.display='block';
    }
};