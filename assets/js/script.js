let qr = new QRCode(document.getElementById("qrcode"), {
    text: "https://qrstuff.com",
    width: 199.12,
    height: 200,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});


// const button = document.getElementById('download-pdf');
// button.addEventListener('click', downloadPDF);

// function downloadPDF() {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', './../../New Text Document.pdf');
//   xhr.responseType = 'blob';
//   xhr.onload = () => {
//     if (xhr.status === 200) {
//       const blob = new Blob([xhr.response], { type: 'application/pdf' });
//       const url = URL.createObjectURL(blob);
//       const a = document.createElement('a');
//       a.href = url;
//       a.download = 'New Text Document.pdf';
//       a.click();
//       URL.revokeObjectURL(url);
//     }
//   };
//   xhr.send();
// }


