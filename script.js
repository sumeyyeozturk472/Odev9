console.log("BU ÖDEV BİLGİSAYAR MÜHENDİSLİĞİ 2.SINIF SÜMEYYE ÖZTÜRK TARAFINDAN YAPILMIŞTIR.");

console.log("****************1.Soru********************");
function kareAl(sayi) {
    let sonuc = sayi * sayi;
    console.log(sayi + "'in karesi: " + sonuc);
    return sonuc;
}
kareAl(5);

function faktoriyel(sayi) {
    let carpim = 1;
    for (let i = 1; i <= sayi; i++) {
        carpim = carpim * i;
    }
    console.log(sayi + "! = " + carpim);
    return carpim;
}
faktoriyel(5);

function ciftMi(sayi) {
    let kontrol = (sayi % 2 === 0);
    console.log(sayi + " çift sayıdır: " + kontrol);
    return kontrol;
}
ciftMi(4);

console.log("****************2.Soru********************");

const toplama = (a, b) => a + b;
console.log("Toplam(8 , 12):", toplama(8, 12));

const carpma = (a, b) => a * b;
console.log("Çarpma(6 , 7):", carpma(6, 7));

const buyuklukKontrol = (sayi1, sayi2) => {
    if (sayi1 > sayi2) {
        return sayi1;
    } else {
        return sayi2;
    }
}

console.log("Büyüklük Kontrolü (15, 8):", buyuklukKontrol(15, 8));

console.log("****************3.Soru********************");

const sayilar = [3, 7, 12, 5, 8, 21, 4, 9, 15, 6];
console.log("Orijinal Dizi:", sayilar);

const ucKati = sayilar.map(sayi => sayi * 3);
console.log("3 Katı Alınan Dizi:", ucKati);

const ondanBuyukler = sayilar.filter(sayi => sayi > 10);
console.log("10'dan Büyük Sayılar:", ondanBuyukler);

const tekSayilar = sayilar.filter(sayi => sayi % 2 !== 0);
console.log("Tek Sayılar:", tekSayilar);

console.log("****************4.Soru********************");

const toplam = sayilar.reduce((toplam, sayi) => toplam + sayi, 0);
console.log("Tüm sayıların toplamı:", toplam);

const enBuyuk = sayilar.reduce((max, sayi) => {
    if (sayi > max) {
        return sayi;
    } else {
        return max;
    }
}, sayilar[0]);
console.log("En büyük sayı:", enBuyuk);

const enKucuk = sayilar.reduce((min, sayi) => {
    if (sayi < min) {
        return sayi;
    } else {
        return min;
    }
}, sayilar[0]);
console.log("En küçük sayı:", enKucuk);

console.log("****************5.Soru********************");

const kitap = {
    baslik: "Sefiller",
    yazar: "Victor Hugo",
    yil: 1862,
    sayfaSayisi: 1248
};

console.log("Kitap Nesnesi Özellikleri:");
for (let anahtar in kitap) {
    console.log(anahtar + ": " + kitap[anahtar]);
}

const ogrenci = {
    ad: "Ayşe",
    soyad: "Demir",
    numara: 2021001234,
    dersler: ["Matematik", "Fizik", "Programlama"]
};

const jsonString = JSON.stringify(ogrenci);
console.log("JSON String Hali:", jsonString);

const geriDonusen = JSON.parse(jsonString);
console.log("Öğrenci Adı:", geriDonusen.ad);

console.log("****************6.Soru********************");

class Kitap {
    constructor(baslik, yazar, yil, fiyat) {
        this.baslik = baslik;
        this.yazar = yazar;
        this.yil = yil;
        this.fiyat = fiyat;
    }

    bilgiVer() {
        return "Başlık: " + this.baslik + ", Yazar: " + this.yazar + ", Yıl: " + this.yil + ", Fiyat: " + this.fiyat + " TL";
    }

    fiyatGuncelle(yeniFiyat) {
        this.fiyat = yeniFiyat;
    }

    indirimUygula(yuzde) {
        let indirimMiktari = (this.fiyat * yuzde) / 100;
        this.fiyat = this.fiyat - indirimMiktari;
    }
}

const kitap1 = new Kitap("Suç ve Ceza", "Dostoyevski", 1866, 120);
const kitap2 = new Kitap("Yüzüklerin Efendisi", "J.R.R. Tolkien", 1954, 180);
const kitap3 = new Kitap("Hayvan Çiftliği", "George Orwell", 1945, 90);

console.log(kitap1.bilgiVer());
console.log(kitap2.bilgiVer());
console.log(kitap3.bilgiVer());

kitap1.indirimUygula(10);
kitap2.indirimUygula(10);
kitap3.indirimUygula(10);

console.log("Suç ve Ceza İndirimli Fiyatı:", kitap1.fiyat, "TL");
console.log("Yüzüklerin Efendisi İndirimli Fiyatı:", kitap2.fiyat, "TL");
console.log("Hayvan Çiftliği İndirimli Fiyatı:", kitap3.fiyat, "TL");

console.log("****************7.Soru********************");

for (let i = 1; i <= 5; i++) {
    let satir = "";
    for (let j = 1; j <= i; j++) {
        satir = satir + "* ";
    }
    console.log(satir.trim());
}

console.log("\n");

const numbers = [5, 12, 8, 23, 7, 31, 4, 19];
let sira = 0;
let bulunanSayi = null;

while (sira < numbers.length) {
    if (numbers[sira] > 20) {
        bulunanSayi = numbers[sira];
        break; 
    }
    sira++;
}

console.log("20'den büyük ilk sayı: " + bulunanSayi);
console.log("******************SON********************");