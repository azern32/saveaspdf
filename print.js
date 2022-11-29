var element = $('#toPrint')[0];
var d = new Date
var opt = {
  margin: 8,
  filename: `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}-${identifikator}.pdf`,
  image: { type: 'jpeg', quality: 0.98 },
  html2canvas: { scale: 2 },
  jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }
};

function print() {
  html2pdf().set(opt).from(element).save();  
}


