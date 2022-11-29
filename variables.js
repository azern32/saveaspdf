let nomorSurat = '[NOMOR SURAT]' // edit nomor surat, hilangkan kurung kotaknya, contoh => 'SDM-MM.03.03-25'
let namaPemberi = '[NAMA PEMBERI SERTIFIKAT]' // edit nama pemberi sertifikat, hilangkan kurung kotaknya , contoh => 'Asep Akbar'
let nipPemberi = '[NIP PEMBERI SERTIFIKAT]' // edit nip pemberi sertifikat, hilangkan kurung kotaknya , contoh => '19661 69 69 69 69'
let identifikator = '[NOMOR IDENTIFIKATOR]' // edit identifikator sertifikat, hilangkan kurung kotaknya , contoh => 'asdww4twwgg674547tkb'


// Abaikan apa yang ada di bawah sini //

let setNomorSurat =(string)=>{
  return $('[name=nomor_surat_span]').text(string)
}

let setNamaPenerima =(string)=>{
  namaPenerima = $('#nama_penerima').text(string)
  return $('#nama_penerima').text(string)
}

let setNamaEvent =(string)=>{
  return $('#nama_event').text(string)
}

let setDurasiEvent =(number)=>{
  return $('#jumlah_jam').text(number)
}

let setNamaPemberi =(string)=>{
  return $('#nama_pemberi').text(string)
}

let setNIPPemberi =(string)=>{
  return $('#nip_pemberi').text(string)
}

let setIdentifikator =(string)=>{
  return $('#identifikator').text(string)
}

let setTanggalEvent = (date)=>{
  let d = new Date(date)
  let monthArr = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']
  let tanggal = {'tanggal': d.getDate(), 'bulan':monthArr[d.getMonth()], 'tahun':d.getFullYear()}

  $("[name='tahun_event']").text(tanggal.tahun);
  $("[name='bulan_event']").text(tanggal.bulan);
  $("[name='tanggal_event']").text(tanggal.tanggal);
}

let setTanggalSertifikat = (date)=>{
  let d = new Date(date)
  let monthArr = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']
  let tanggal = {'tanggal': d.getDate(), 'bulan':monthArr[d.getMonth()], 'tahun':d.getFullYear()}

  $("#tanggal_sertifikat").text(`${tanggal.tanggal} ${tanggal.bulan} ${tanggal.tahun}`);
}



// Jangan diabaikan apa yang ada dibawah sini //
setNomorSurat(nomorSurat)
setNamaPemberi(namaPemberi)
setNIPPemberi(nipPemberi)
setIdentifikator(identifikator)


$('#tanggal_event_form').change(()=>{
  setTanggalEvent($('#tanggal_event_form').val())
})

$('#nama_penerima_form').change(()=>{
  setNamaPenerima($('#nama_penerima_form').val())
})

$('#nama_event_form').change(()=>{
  setNamaEvent($('#nama_event_form').val())
})

$('#jumlah_jam_form').change(()=>{
  setDurasiEvent($('#jumlah_jam_form').val())
})