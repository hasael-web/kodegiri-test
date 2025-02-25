function terbilang(x) {
  if (x < 2000 || x > 9999)
    return "Angka harus lebih dari 2000 dan maksimal 9999";

  let satuan = [
    "",
    "Satu",
    "Dua",
    "Tiga",
    "Empat",
    "Lima",
    "Enam",
    "Tujuh",
    "Delapan",
    "Sembilan",
  ];
  let belasan = [
    "Sepuluh",
    "Sebelas",
    "Dua Belas",
    "Tiga Belas",
    "Empat Belas",
    "Lima Belas",
    "Enam Belas",
    "Tujuh Belas",
    "Delapan Belas",
    "Sembilan Belas",
  ];

  let ribuan = Math.floor(x / 1000);
  let ratusan = Math.floor((x % 1000) / 100);
  let puluhan = Math.floor((x % 100) / 10);
  let satuanAkhir = x % 10;

  let hasil = [];

  // Ribuan
  if (ribuan === 1) {
    hasil.push("Seribu");
  } else {
    hasil.push(satuan[ribuan] + " Ribu");
  }

  // Ratusan
  if (ratusan > 0) {
    if (ratusan === 1) {
      hasil.push("Seratus");
    } else {
      hasil.push(satuan[ratusan] + " Ratus");
    }
  }

  // Puluhan & Satuan
  if (puluhan === 1) {
    hasil.push(belasan[satuanAkhir]);
  } else {
    if (puluhan > 1) hasil.push(satuan[puluhan] + " Puluh");
    if (satuanAkhir > 0) hasil.push(satuan[satuanAkhir]);
  }

  return hasil.join(" ").trim();
}

console.log(terbilang(2234));
