//formsubmit
//1.form seç
//2.input bilgisini ul içine al
//3.form içinde ki bilgiyi sıfırla
//4.eğer forma bilgi girilmezse kullanıcıyı uyar.
let formDom=document.querySelector('#userForm') //formu aldım
formDom.addEventListener('submit',formSubmit); //form içindeki submit işlemini ele aldım.
const alertDom=document.querySelector('#alert')
const alertFunction=(title,message,className="warning")=> `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`
function formSubmit(event){ 
    event.preventDefault(); //butonun submit default işlemini engelledim
    console.log('işlem gerçekleşti');
    const USER_NAME=document.querySelector('#username');
    const SCORE=document.querySelector('#score');
    if (USER_NAME.value && SCORE.value) {
        addItem(USER_NAME.value, SCORE.value)
        USER_NAME.value=" ";
        SCORE.value="";
    }else{
       alertDom.innerHTML=alertFunction("Baslik Bilgisi","Eksik bilgi girdiniz!", "danger")
    }

    
}
let ulDom = document.querySelector('#userList');

const addItem = (userName, score)=>{
    let liDom=document.createElement('li');
    liDom.innerHTML =`
    ${userName}
    <span class="badge bg-primary rounded-pill">${score}</span>
    `
    liDom.classList.add("list-group-item", "d-flex", "justify-content-between","align-items-center")
    ulDom.append(liDom)

}