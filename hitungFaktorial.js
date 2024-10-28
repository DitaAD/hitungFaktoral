// Dita Annisa Diningtyas | Kelas Front End | Hari 11 

//fungsi rekursif untuk hitung faktorial
function faktorial(n) {
    if (n < 0){
        return -1; //kembali ke -1 kalo bilangan negatif
    }else if(n === 0){
        return 1; 
    }else{
        return n * faktorial(n - 1); //mengitung rekursif
    }
}

//fungsi untuk mengambil input dan menampilkan hasil faktorial
function hitungFaktorial() {
    const numberInput = document.getElementById("number").value;
    const number = parseInt(numberInput);

    //memvalidasi input bilangan bulat positif
    if (isNaN(number) || number < 0) {
        document.getElementById("result").innerText = "Tolong input bilangan bulat positif.";
        return;
    }

    //menghitung faktorial
    const result = faktorial(number);

    //menampilkan hasil
    document.getElementById("result").innerText = `Hasil Faktorial dari ${number} adalah ${result}`;
}