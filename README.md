## How to use
Ini terbagi atas 2 bagian, bagian permanent dan bagian non-permanent
Bagian permanent itu untuk data-data yang tidak sering diubah seperti nama ketua dan nipnya
Bagian non permanent itu untuk data-data yang sering berubah seperti nama penerima sertifikat

![alt text](https://cdn.donmai.us/original/ba/55/__komeiji_koishi_kaenbyou_rin_and_kaenbyou_rin_touhou_and_2_more_drawn_by_kanpa_campagne_9__ba55096b5d28748d4c201d3bbcfe53c1.png)

#### Bagian Permanent
Untuk bagian permanen, perlu melakukan edit langsung dalam file `variabel.js`. Cukup dengan mengedit 4 baris pertama saja, hiraukan baris yang lainnya.
```javascript
let nomorSurat = '[NOMOR SURAT]' 
let namaPemberi = '[NAMA PEMBERI SERTIFIKAT]' 
let nipPemberi = '[NIP PEMBERI SERTIFIKAT]' 
let identifikator = '[NOMOR IDENTIFIKATOR]' 

```
Cukup dengan mengganti `'[Nilai Default]'` menjadi `'Nilai baru'`
Contoh `'[NOMOR SURAT]'` menjadi `'SDM-MM.03.03-25'`
Perhatikan bahwa kurung kotaknya hilang, tapi tidak dengan tanda petiknya

#### Bagian Non Permanent
Untuk bagian ini cukup mudah, tampilkan terlebih dahulu halman index.html ke dalam web browser.
Kemudian tinggal menekan tombol `[Edit Penerima Sertifikat]` di halaman yang tampil.
Lalu isi form dengan data yang diperlukan


#### Print
Tinggal menekan print pada form yang muncul ketika `[Edit Penerima Sertifikat]`