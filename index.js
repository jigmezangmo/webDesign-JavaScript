require('./style.css')
import img1 from './imgs/new_01.jpg'
import img2 from './imgs/new_02.jpg'
import img3 from './imgs/new_03.jpg'
import img4 from './imgs/new_04.jpg'
import img5 from './imgs/new_05.jpg'
import img6 from './imgs/new_06.jpg'
import img7 from './imgs/new_07.jpg'
import img8 from './imgs/new_08.jpg'

let paintings = [
    {
        id:1,
        name: 'Custome Made01',
        price: 1400,
        img: img1
    },
    {
        id:2,
        name: 'Custome Made02',
        price: 20000,
        img: img2
    },
    {
        id:3,
        name: 'Custome Made03',
        price: 11000,
        img: img3
    },
    {
        id:4,
        name: 'Custome Made04',
        price: 15000,
        img: img4
    },
    {
        id:5,
        name: 'Custome Made05',
        price: 20000,
        img: img5
    },
    {
        id:6,
        name: 'Custome Made06',
        price: 13000,
        img: img6
    },
    {
        id:7,
        name: 'Custome Made07',
        price: 16000,
        img: img7
    },
    {
        id:8,
        name: 'Custome Made08',
        price: 12000,
        img: img8
    }
];
//We have to attach function to window object because of webpack. Figure out why?
window.openModalVanilla = function(id){
    let painting = paintings.filter(painting => painting.id === id);
    console.log(painting[0])
    buildModal(painting[0]);
}

window.buildModal = function(painting){
    let modal = document.getElementById('modal');
    modal.innerHTML = `<img class="p-img" src="${painting.img}" alt="">
   <p class="modal-contents">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Esse quisquam tenetur doloribus ullam repudiandae itaque, 
        nisi eius tempore magni porro mollitia sapiente deserunt, 
        reiciendis quas magnam delectus praesentium sequi quia!</p>
        <button onclick="closeModal()" class="close-button">&times;</button>`;
        modal.classList.add('active')
        overlay.classList.add('active')
    
}


window.closeModal = function(){
    let modal = document.getElementById('modal');
    modal.classList.remove('active')
    overlay.classList.remove('active')
}
paintings.forEach((painting, index) => {
    let parentDiv = document.getElementById('container');
    let paintingDiv =  document.createElement('div');
    if (index === 4) {
        paintingDiv.classList.add("clear");
    }
    paintingDiv.classList.add("item");
    paintingDiv.innerHTML =`
    <ul>
        <li><img src=${painting.img}></li>
        <li class="product"><button  onclick="openModalVanilla(${painting.id})"> ${painting.name}</button></li>
        <li class="price">${painting.price}</li>
        <li class="cart">
            <button class="btn" onclick="toastMessage()">Show Message</button>
        <div id="toastbar">Successfully added to cart!</div></li>
    </ul>`

    function toastMessage(){
        let t = document.getElementById("toastbar");
        
    }
    parentDiv.appendChild(paintingDiv);
});



let $ = require( "jquery" );
            //   slide code--
            $(function(){
                slideImg();
                function slideImg(){
                    let $interval =setInterval(function(){
                        slide()
                    }, 3000);
                    function slide (){
                       $('.slide').animate({
                        left:'-100%'

                    },2000, "swing", function(){
                        $(this).css ({left:0});
                        $(this).append($('.slide img').eq(0));
                    });
                    }
                }
            });

            function myFunction() {
                let x = document.getElementById("toastbar");
                x.className = "show";
                setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
              }

// fader code --
// document.addEventListener("DOMContentLoaded", function() {
//     let fadeComplete = function(e) { stage.appendChild(arr[0]); };
//     let stage = document.getElementById("slider");
//     let arr = stage.getElementsByTagName("a");
//     for(let i=0; i < arr.length; i++) {
//         arr[i].addEventListener("animationed", fadeComplete, false);
//     }
// }, false);


