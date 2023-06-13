//* TODO - DHONDT SEÇİM SİSTEMİ

//* Dhondt sistemine göre 1. milletvekilini en yüksek oyu olan parti çıkarır. 1 parti çıkaran millet vekilinin sayısı 2'ye (1+1) bölünür ve bundan sonraki kıyaslamalarda bu şekilde kabul edilir. 2. milletvekilini çıkaran parti yine ilk parti olursa bu sefer bu sefer oy sayısı 3'e (2+1) bölünür ve bundan sonraki kıyaslamalarda bu şekilde kabul edilir. Ör: a partisi 5 millet vekili çıkardıysa, b partisi 3 millet vekili çıkardıysa a partisinin oyu 6'ya (5+1), b partisinin oyu 4'e (3+1) bölünür. Daha yüksek olan millet vekilini çıkarır.


//* Kullanıcıdan değer isteyerek yapmak isteyenler için yazdığım kısmı yoruma aldım. Alttaki default degerler kısmını yoruma alıp kullanıcıdan değer ister kısmını yorumdan çıkarabilirsiniz


// * Kullanıcıdan deger ister baslangic

const il = prompt("Hangi sehirdeki secim bilgilerini istiyorsunuz?");
const milletVekiliSayisi = +prompt("Kac tane milletvekili olsun?");
const secmenSayisi = +prompt("Ne kadar secmen olsun?");
const oyKullananSecmen = +prompt("Seçmenlerin kaç tanesi oy kullansin?");
const katilimYuzdesi = oyKullananSecmen*100/secmenSayisi;
const gecerliOy = +prompt("Kullanilan oylarin kac tanesi gecerli olsun");
const gecerliOyYuzdesi = gecerliOy*100/oyKullananSecmen;

const aParti = prompt("İlk Partinin ismini sonuna parti ekleyerek yaziniz");
const bParti = prompt("İkinci Partinin ismini sonuna parti ekleyerek yaziniz");
const cParti = prompt("Üçüncü Partinin ismini sonuna parti ekleyerek yaziniz");
const dParti = prompt("Dördüncü Partinin ismini sonuna parti ekleyerek yaziniz");;
const eParti = prompt("Beşinci Partinin ismini sonuna parti ekleyerek yaziniz");


const aPartiOyYuzdesi = +prompt("Oylarin yüzde kaci A partisinin olsun");
const bPartiOyYuzdesi = +prompt("Oylarin yüzde kaci B partisinin olsun");
const cPartiOyYuzdesi = +prompt("Oylarin yüzde kaci C partisinin olsun");
const dPartiOyYuzdesi = +prompt("Oylarin yüzde kaci D partisinin olsun");
const ePartiOyYuzdesi = +prompt("Oylarin yüzde kaci E partisinin olsun");

let aPartiOySayisi = Math.trunc(gecerliOy*aPartiOyYuzdesi/100);
let bPartiOySayisi = Math.trunc(gecerliOy*bPartiOyYuzdesi/100);
let cPartiOySayisi = Math.trunc(gecerliOy*cPartiOyYuzdesi/100);
let dPartiOySayisi = Math.trunc(gecerliOy*dPartiOyYuzdesi/100);
let ePartiOySayisi = Math.trunc(gecerliOy*ePartiOyYuzdesi/100);


// * Kullanıcıdan değer ister bitiş

//* Default degerler baslangic
//? Default değer olarak 2015 Hatay Genel Seçimlerinin verileri kullanılmıştır

// const il = "Hatay";
// const secmenSayisi =987001;
// const milletVekiliSayisi = 10;
// const oyKullananSecmen = 845099;
// const katilimYuzdesi = oyKullananSecmen*100/secmenSayisi;
// const gecerliOy = 827926;
// const gecerliOyYuzdesi = gecerliOy*100/oyKullananSecmen;

// const aParti = "A Partisi";
// const bParti = "B Partisi";
// const cParti = "C Partisi";
// const dParti = "D Partisi";
// const eParti = "E Partisi";

// let aPartiOySayisi = 312887;
// let bPartiOySayisi = 300769;
// let cPartiOySayisi = 116062;
// let dPartiOySayisi = 54456;
// let ePartiOySayisi = 13430;

// const aPartiOyYuzdesi = aPartiOySayisi*100/gecerliOy;
// const bPartiOyYuzdesi = bPartiOySayisi*100/gecerliOy;
// const cPartiOyYuzdesi = cPartiOySayisi*100/gecerliOy;
// const dPartiOyYuzdesi = dPartiOySayisi*100/gecerliOy;
// const ePartiOyYuzdesi = ePartiOySayisi*100/gecerliOy;

//* Default değerler son

let aPartiMvSayisi = 0;
let bPartiMvSayisi = 0;
let cPartiMvSayisi = 0;
let dPartiMvSayisi = 0;
let ePartiMvSayisi = 0;

let aPartiGecerliOySayisi = aPartiOySayisi;
let bPartiGecerliOySayisi = bPartiOySayisi;
let cPartiGecerliOySayisi = cPartiOySayisi;
let dPartiGecerliOySayisi = dPartiOySayisi;
let ePartiGecerliOySayisi = ePartiOySayisi;

let enYuksekOyuAlanParti = aParti;
let detayliMvBilgisi  ="";
let kacOyla = 0;

for (let i = 1; i <= milletVekiliSayisi; i++) {
    enYuksekOyuAlanParti=Math.max(aPartiOySayisi,bPartiOySayisi,cPartiOySayisi,dPartiOySayisi,ePartiOySayisi);
    if (enYuksekOyuAlanParti == aPartiOySayisi) {
        aPartiMvSayisi++;
        kacOyla = aPartiOySayisi;
        aPartiOySayisi = aPartiGecerliOySayisi/(aPartiMvSayisi+1);
        enYuksekOyuAlanParti = aParti;
    }
    if (enYuksekOyuAlanParti == bPartiOySayisi) {
        bPartiMvSayisi++;
        kacOyla = bPartiOySayisi;
        bPartiOySayisi = bPartiGecerliOySayisi/(bPartiMvSayisi+1);
        enYuksekOyuAlanParti = bParti;
    }
    if (enYuksekOyuAlanParti == cPartiOySayisi) {
        cPartiMvSayisi++;
        kacOyla = cPartiOySayisi;
        cPartiOySayisi = cPartiGecerliOySayisi/(cPartiMvSayisi+1);
                enYuksekOyuAlanParti = cParti;
    }
    if (enYuksekOyuAlanParti == dPartiOySayisi) {
        dPartiMvSayisi++;
        kacOyla = dPartiOySayisi;
        dPartiOySayisi = dPartiGecerliOySayisi/(dPartiMvSayisi+1);
        enYuksekOyuAlanParti = dParti;
    }
    if (enYuksekOyuAlanParti == ePartiGecerliOySayisi) {
        ePartiMvSayisi++;
        kacOyla = aPartiOySayisi;
        ePartiOySayisi = ePartiOySayisi/(bPartiMvSayisi+1);
        enYuksekOyuAlanParti = eParti;
    }
    detayliMvBilgisi += `${i}. millet vekili ${enYuksekOyuAlanParti}nden secildi\n`;
}
console.log("Gümüş TV Secim Özel Programine Hosgeldiniz. \nSecim sonuclari su sekildedir : ");
console.log(`${aParti}, ${il} ilinden  ${aPartiMvSayisi} millet vekili cikarmayi basardi`);
console.log(`${bParti}, ${il} ilinden  ${bPartiMvSayisi} millet vekili cikarmayi basardi`);
console.log(`${cParti}, ${il} ilinden  ${cPartiMvSayisi} millet vekili cikarmayi basardi`);
console.log(`${dParti}, ${il} ilinden  ${dPartiMvSayisi} millet vekili cikarmayi basardi`);
console.log(`${eParti}, ${il} ilinden  ${ePartiMvSayisi} millet vekili cikarmayi basardi`);

console.log("**********");
console.log("Secimle sonuclariyla ilgili detayli istatistiksel bilgiler asagida verilmektedir. ");

console.log(`${il} ilinde ${secmenSayisi} secmen bulunmaktadir.`);
console.log(`${il} ilinden ${milletVekiliSayisi} millet vekili secilmektedir.`);
console.log(`${il} ilinde ${oyKullananSecmen} secmen sandiga gitmistir.`);
console.log(`${il} ilinde % ${katilimYuzdesi.toFixed(1)} oraninda secimlere katilim gerceklesmstir. `);
console.log(`${il} ilinde kullanilan oylarin %${gecerliOyYuzdesi.toFixed(1)}'i gecerli kabul edilmistir. \nOylarin % ${100-gecerliOyYuzdesi.toFixed(1)}'i gecersiz sayilmistir.`);
console.log(`Kullanilan oylardan sadece ${gecerliOy} oy gecerli kabul edilmistir.`);
console.log("*****");
console.log(`${aParti}, ${il} ilinde oylarin % ${aPartiOyYuzdesi.toFixed(1)}'ini ${Math.trunc(aPartiGecerliOySayisi)} oy almistir`);
console.log(`${bParti}, ${il} ilinde oylarin % ${bPartiOyYuzdesi.toFixed(1)}'ini ${Math.trunc(bPartiGecerliOySayisi)} oy almistir`);
console.log(`${cParti}, ${il} ilinde oylarin % ${cPartiOyYuzdesi.toFixed(1)}'ini ${Math.trunc(cPartiGecerliOySayisi)} oy almistir`);
console.log(`${dParti}, ${il} ilinde oylarin % ${dPartiOyYuzdesi.toFixed(1)}'ini ${Math.trunc(dPartiGecerliOySayisi)} oy almistir`);
console.log(`${eParti}, ${il} ilinde oylarin % ${ePartiOyYuzdesi.toFixed(1)}'ini ${Math.trunc(ePartiGecerliOySayisi)} oy almistir`);

console.log("***");


console.log(detayliMvBilgisi);