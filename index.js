let wave=document.querySelector('.wave')
let names=document.querySelector('.name')
let name1=document.querySelector('.name1')
let aim=document.querySelector('.aim')
let title=document.querySelector('.title')

let waveText="Hey, there 👋"
let nameText="I'm"
let nameText1=" Abi chhetri"
let aimText="A Frontend Developer || Aspiring Software Engineer"
let titleText="I specialize in creating modern, responsive, and user-friendly websites."

let i=0;
let isDeleting=false

 
function typeWriter(){

    if (!isDeleting) {
        // Typing
        wave.textContent = waveText.substring(0, i);
        i++;
        if (i > waveText.length) {
          isDeleting = true;
          setTimeout(typeWriter, 4000); // wait before deleting
          return;
        }
      } 
    else {
        // Deleting
        wave.textContent = waveText.substring(0, i);
        i--;
        if (i < 0) {
          isDeleting = false;
          i = 0;
          setTimeout(typeWriter, 100); // wait before typing again
          return;
        }
    }

    setTimeout(typeWriter,100) 
  }
    
typeWriter()


j=0;
function typeWriter2(){
  if(j<nameText.length){
    names.textContent += nameText.charAt(j)
    j++
  }
  setTimeout(typeWriter2,100)
}

typeWriter2()

let nameAnm=setInterval(()=>{
  k=0;
  function typeWriter3(){
    if(k<nameText1.length){
      name1.textContent +=nameText1.charAt(k)
      k++
    }
    setTimeout(typeWriter3,100)
  }

  typeWriter3()
  clearInterval(nameAnm)
},400)


let aimAnm= setInterval(()=>{
  l=0

  function typeWriter4(){
    if(l<aimText.length){
      aim.textContent += aimText.charAt(l)
      l++
    }
    setTimeout(typeWriter4,100)
  }
  typeWriter4()
  clearInterval(aimAnm)
},1700)

let animTitle=setInterval(()=>{
  let l=0;
  function typeWriter5(){
    if(l<titleText.length){
      title.textContent += titleText.charAt(l);
      l++
    }
    
    setTimeout(typeWriter5,100)
  }

  typeWriter5()
  clearInterval(animTitle)
},7000)
    
let ham=document.querySelector('.ham')
let close=document.querySelector('.cls')
let navigation=document.querySelector('#navigation')


ham.addEventListener('click',(e)=>{
  navigation.classList.add('navigation')
  navigation.removeAttribute('id')
})

function handleClick(){
  navigation.id='navigation'
  navigation.removeAttribute('class');
}

