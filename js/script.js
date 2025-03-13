// Ini file javascript
console.log('ok');

function replaceName () {
  let name = prompt("Siapakah nama anda?", "");
  document.getElementById("name").innerHTML = name
}

replaceName()

function kirim() {
  // array nama bulan
  const bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "Desember"];

  // membuat waktu saat ini
  let date = new Date();
  let tanggal = date.getDate()+" "+(bulan[date.getMonth()])+" "+ date.getFullYear();
  let jam = date.getHours() +":"+ date.getMinutes();

  waktuIni = jam+", "+tanggal



  // mengambil data input fom
  let nama = document.forms["message-form"]["nama"].value;
  let ttl = document.forms["message-form"]["ttl"].value;
  let gender = document.forms["message-form"]["gender"].value;
  let pesan = document.forms["message-form"]["pesan"].value;


  // validasi form ke-2 | validasi form pertama memakai atribut required pada tag input form
  if( nama === "" || ttl === "" || gender === "" || pesan === "" ) {
    alert("Input form tidak boleh kosong!");
    return false;
  }


  // DOM element lalu diberi isi dari form
  document.getElementById("waktu").innerText = waktuIni;
  document.getElementById("nama2").innerText = nama;
  document.getElementById("ttl2").innerText = ttl;
  document.getElementById("gender2").innerText = gender;
  document.getElementById("pesan2").innerText = pesan;
}

// Banner
let bannerIndex = 0;
showBanner();

// Function to change banner
function nextBanner() {
  bannerIndex += 1;
  showBanner();
}

// Function to show banner
function showBanner () {
    const banners = document.getElementsByClassName('banner-img');
    console.log(banners);

    if (bannerIndex >= banners.length) {
      bannerIndex = 0;
  }

    // Loop through all banner elements
 for (let i = 0; i < banners.length; i++) {
  banners[i].style.display = 'none';
}
// Show first banner
banners[bannerIndex].style.display = 'block';
}

// Set interval to change banner
setInterval(nextBanner, 6000);
 

