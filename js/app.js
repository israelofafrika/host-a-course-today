const customerName = document.getElementById("name")
const course = document.getElementById("course")
const author = document.getElementById("author")
const submitBtn = document.querySelector(".thisButton")
const loader = document.querySelector(".loading")
const warningMsg = document.querySelector('.feedback')


let index =  0

const fetchImage = ()=>{
    let images = ["./img/cust-0.jpg",
                "./img/cust-1.jpg",
                "./img/cust-2.jpg",
                "./img/cust-3.jpg",
                "./img/cust-4.jpg",
                "./img/cust-5.jpg"]



if(index==0){
    index++
    
}
else if (index> 0 && index<=4){
    index++
    
    }
    else {
        index=0  
       }
return images[index]
}


const fetchCustName = ()=>{
    return customerName.value
}

const fetchCourse = ()=>{
    return course.value 
}

const fetchAuthor = ()=>{
    value =author.value
    return value }



const submitFn = ()=>{

    // console.log(fetchAuthor())
    // console.log(fetchCourse())
    // console.log(fetchCustName())
    if (fetchCustName() ==""|| fetchCourse()== "" || fetchAuthor() == ""){
    validate()
    setTimeout(()=>{alert("ERROR; All fields must be filled. Please Refresh")},900)
    setTimeout(removeValidate, 700)
    }
    else if(fetchAuthor().length>150){
        
        //show loader 
        const loaderFn= ()=>{
            loader.style.display = "block"
        }
    
        loaderFn()
        //remove loader 
        setTimeout(() => {
            loader.style.display = "none"
    }, 500);

    // alert user 
    setTimeout(alert("Description cannot exceed 75 characters"), 600)
      


    }

    else {
        //show loader
        const loaderFn= ()=>{
            loader.style.display = "block"
        }
    
        loaderFn()

        //remove loader 
        setTimeout(() => {
            loader.style.display = "none"
        }, 300);

        //build the card 
        setTimeout( ()=>{
            const cardContainer = document.querySelector(".customer-list")
         cardContainer.insertAdjacentHTML("afterbegin",`<div class="col-11 mx-auto col-md-6 my-3 col-lg-4"><div class="card text-left">
         <img src="${fetchImage()}" class="card-img-top" alt=undefined>
         <div class="card-body">
            <h6 class="text-capitalize "><span class="badge badge-warning mr-2">Facilitator :</span><span id="customer-name">${fetchCustName()}</span></h6>
            <h6 class="text-capitalize my-3"><span class="badge badge-success mr-2">Course :</span><span id="customer-course">${fetchCourse()}</span></h6>
            <h6 class="text-capitalize"><span class="badge badge-danger mr-2">Description :</span><span id="course-author">${fetchAuthor()}</span></h6>
         </div>
        </div>
     </div>`)}, 200);

        

        } 


}

// BLOCK OF CODE FOR FEEDBACK WARNING//////
function validate (){
    
    if(fetchCustName()== ""|| fetchCourse == ""|| fetchAuthor == "")
    warningMsg.classList.add('showItem', 'alert-danger');
    warningMsg.innerHTML += `<p> All fields required.</p>`}
    

   


function removeValidate(){
warningMsg.style.display = "none"
}




// END OF CODE BLOCK FOR FEEDBACK WARNING//////


//// MODAL MODAL MODAL 


// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal


   btn.addEventListener(("click"), ()=>{
      modal.style.display = "block";
     return
    },
    ()=>{
       document.querySelector("remove").style.display= "none"
    })
    


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//TIDY UP MODAL 
const tidyUp =()=>{

    modal.style.display = "none";

    setTimeout(()=>{if (true){
        customerName.value = ''
        course.value = ''
        author.value = ''
    }}, 300)

    
    return


}


//MODAL END....................

submitBtn.addEventListener("click",submitFn)
submitBtn.addEventListener("click",tidyUp)

