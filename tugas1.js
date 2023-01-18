let kelasAdduha = ['Rudi','Dandi','Radit','Bunga','Raisa','Nurul','Sarah']

let Nurul = {
    Nama : 'Nurul',
    Alamat : 'Bekasi',
    Usia : 16,
    jenisKelamin : 'Perempuan'
};




// destructuring array
const [siswa1, siswa2, siswa3, siswa4, siswa5, siswa6, siswa7] = kelasAdduha;
console.log(siswa4);

// const [siswa1, , siswa3, , , siswa6, siswa7] = kelasAdduha;
// console.log(siswa1, siswa3, siswa6, siswa7);

// const [siswa1, ...allSiswa] = kelasAdduha;
// console.log(siswa1,allSiswa);


// destructuring object
const {Nama, Alamat, Usia, jenisKelamin} = Nurul;
console.log('Nama saya ' + Nama + ' Berusia ' + Usia + ' tahun ');


// destructuring function
function dataSiswa({Nama, Alamat, Usia, jenisKelamin}){
    console.log(Nama, Alamat, Usia, jenisKelamin);
}

dataSiswa(Nurul);

// destructuring alias
const{Nama: N, Alamat: A} = Nurul;
console.log(N);


// destructuring default values
// const {Nama, Alamat, Usia, jenisKelamin, Email="Nurul123@gmail.com"} = Nurul;
// console.log('Nama saya ' + Nama + ' Berusia ' + Usia + ' tahun ');
