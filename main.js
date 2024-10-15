import { renderCards }  from "./scripts/ui.js";

//dataya her yerde erisebilmek icin global degiskene tanimlandi
let data;

//* menü verilerini json dosyasından çeken fonk.
async function fetchMenu() {
    //* api'dan verileri al
    const res = await fetch("./db.json");
  
    //* json verisini js formatına çevir
    data = await res.json();
  }



//sayfanin yuklenme olayini izle
window.addEventListener("DOMContentLoaded",()=>{
    //verileri ceken fonksiyonu calistir
   fetchMenu()
   // fonksiyon basarili oldugu zaman kartlari ekrana basan fonksiyonu calistir
   .then(() => renderCards(data.menu) );
   
   
});

// Butonlara tiklanma olayini izleme 

const inputs = document.querySelectorAll("#buttons input");
//inputlar dizisini don 
inputs.forEach((input) =>{
  //her bir elemanin secilme olayini izle
  input.addEventListener("change", ()=>{
    //secilen kategori
    const selected = input.id;

    //eger secili kategori "all" ise bütün menuleri getir
    if(selected==="all"){
      renderCards(data.menu);
    }

    else {
    //menu elemanlarindan secilen kategoriye ait olanlari filtrele
    const filtered = data.menu.filter (i => i.category === selected)


    // filtrelenen datayi ekrana bas
    renderCards(filtered);}

  });
});



