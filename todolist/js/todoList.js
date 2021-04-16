function addButtonElement () {

    let taskDOM = document.querySelector("#task");
    localStorage.setItem("task", taskDOM.value); //localStorage değer atama

    if (taskDOM.value === "" || taskDOM.value.replace(/^\s+|\s+$/g, "").length == 0  )  {
        $('.error').toast("show")
        
    }
    else{
        $('.success').toast("show")
        addItem(taskDOM.value);
        taskDOM.value = "";
    }
    
    let close = document.getElementsByClassName("close");
    console.log("getElementsByClassName close: ",close);
    /*cıktısı:  HTMLCollection(7) [button.close, button.close, span.close, span.close, span.close, span.close, span.close]
    0: button.close
    1: button.close
    2: span.close
    3: span.close
    4: span.close
    5: span.close
    6: span.close
    length: 7 
    */
    let close1 = document.querySelectorAll("span");
    console.log("querySelectorAll close1: ",close1);
    /*cıktısı:  NodeList(8) [span, span, span#liveToastBtn.button, span.close, span.close, span.close, span.close, span.close]
    */
   
    for (let i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
      };
    }

    
}


    // İnputa girilen değerleri listeye ekleme
    let listDOM = document.querySelector("#list");
    const  addItem = (inputaGirilen ) => {
    let liDOM = document.createElement("li");
    liDOM.innerHTML = `${inputaGirilen}<span class="close">×</span>`
    listDOM.appendChild(liDOM);
    } 


 //yapıldı işaretlenmesi kısmı
 let list = document.querySelector("ul");
 list.addEventListener("click",function (a) {
 console.log(a.target.className); 
 console.log("a.type :",a.type); //çıktı: click
 console.log("a.target.tagName: ",a.target.tagName );// çıktı: LI
   if (a.type === "click" ) {
     a.target.classList.toggle("checked");  // ul 
   }
   },false
 )


 

 