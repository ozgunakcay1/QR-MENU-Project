//! ara yuze etki edecek butun fonksiyonlar bu dosyada tutulacaktir.

//Menu list divini cagir

const menuList= document.getElementById('menu-list');

//menu elemanlarini parametre olarak alip dizideki her bir eleman icin ekrana kart bas.
export const renderCards = (data) => {

    // data dizisindeki her bir nesne icin 1 tane kart htmli olusturulur
    const cardsHTML = data.map((item)=>`
        <a href="/detail.html?id=${item.id}" id="card" class="d-flex flex-column flex-md-row text-dark gap-3 text-decoration-none" >
            <img class="rounded shadow img-fluid" src="${item.img}">
            <div>
                 <div class="d-flex justify-content-between">
                     <h4>${item.title}</h4>
                     <p class="text-success fw-bold">${(item.price*30).toFixed(2)}₺</p>
                </div>
                 <p class="lead">${item.desc}</p>
            </div>
        </a>`

    ).join("")

    //olusturdugumuz kartlari menuList dibinin icine aktaralim
    menuList.innerHTML = cardsHTML


   
};


