var dataBarang = [];
var dataBarang2 = [];
var dataBarang3 = [];
var dataBarang4 = [];
var dataBarang5 = [];


function showBarang() {
  var listBarang = document.getElementById("id-barang");
  listBarang.innerHTML = "";
  

  for (let i = 0; i < dataBarang.length; i++) {
   var btnEdit = "<a onclick='editBarang(" + i + ")'><font color='green'> Edit </font></a>"
   
    var btnHapus = "<a href='' onclick='deleteBarang(" + i + ")'><font color='red'> Hapus </font></a>";

    listBarang.innerHTML += "<b>" + dataBarang[i] + " [" + btnEdit + " | " + btnHapus + "]</font></b>";
  }
}
    
function showBarang2() {
   var namaBarang = document.getElementById("nama-barang");
   namaBarang.innerHTML = "";
  
   for (let i = 0; i < dataBarang2.length; i++) {
     var btnEdit2 = "<a onclick='editBarang2(" + i + ")'><font color='green'> Edit </font></a>";
     
     var btnHapus2 = "<a href='' onclick='deleteBarang2(" + i + ")'><font color='red'> Hapus </font></a>";
     
     namaBarang.innerHTML += "<b></font>" + dataBarang2[i] + " [" + btnEdit2 + " | " + btnHapus2 + "]</font></b>";
}
}
function showBarang3() {
  var Harga = document.getElementById("harga-barang");
  Harga.innerHTML = "";

  for (let i = 0; i < dataBarang3.length; i++) {
    var btnEdit3 = "<a onclick='editBarang3(" + i + ")'><font color='green'> Edit </font> </a>";
    
    var btnHapus3 = "<a href='' onclick='deleteBarang(" + i + ")'><font color='red'> Hapus </font></a>";

    Harga.innerHTML += "<b>" + dataBarang3[i] + " [" + btnEdit3 + " | " + btnHapus3 + "]</font></b>";
    
  }
}
function showBarang4() {
  var Stok = document.getElementById("stok-barang");
  Stok.innerHTML = "";

  for (let i = 0; i < dataBarang4.length; i++) {
    var btnEdit4 = "<a onclick='editBarang4(" + i + ")'> <font color='green'>Edit </font></a>";
   
    var btnHapus = "<a href='' onclick='deleteBarang(" + i + ")'><font color='red'> Hapus </font></a>";

    Stok.innerHTML += "<b>" + dataBarang4[i] + " [" + btnEdit4 + " | " + btnHapus + "]</font></b>";

  }
}
function showBarang5() {
  var idSup = document.getElementById("ids-barang");
  idSup.innerHTML = "";

  for (let i = 0; i < dataBarang5.length; i++) {
    var btnEdit5 = "<a onclick='editBarang5(" + i + ")'><font color='green'> Edit </font></a>";
   
    var btnHapus = "<a href='' onclick='deleteBarang(" + i + ")'><font color='red'> Hapus </font></a>";

    idSup.innerHTML += "<b>" + dataBarang5[i] + " [" + btnEdit5 + " | " + btnHapus + "]</b>";

  }
}


function barang() {
  var alert =
    swal({

      title: "Berhasil Ditambahkan !",


      icon: "success",


    });

  var input = document.getElementById("id").value;
  

  dataBarang.push(input)



  showBarang();
}

function barang1() {
  var alert =
    swal({
  
      title: "Berhasil Menambahkan !",
  
  
      icon: "success",
  
  
    });
  
  var input2 = document.getElementById("nbarang").value;
  dataBarang2.push(input2)
  showBarang2();
}

function barang2() {
  var alert =
    swal({

      title: "Berhasil Menambahkan !",


      icon: "success",


    });

  var input3 = document.getElementById("hbarang").value;
  dataBarang3.push(input3)
  showBarang3();
}
function barang3() {
  var alert =
    swal({

      title: "Berhasil Menambahkan !",


      icon: "success",


    });

  var input4 = document.getElementById("sbarang").value;
  dataBarang4.push(input4)
  showBarang4();
}
function barang4() {
  var alert =
    swal({

      title: "Berhasil Menambahkan !",


      icon: "success",


    });

  var input5 = document.getElementById("ibarang").value;
  dataBarang5.push(input5)
  showBarang5();
}
function tbarang() {
  var alert =
    swal({

      title: "Semua Berhasil Ditambahkan!",


      icon: "success",

    });
  barang();
  barang1();
  barang2();
  barang3();
  barang4();
}


function editBarang(id) {
  var newBarang = prompt("Edit", dataBarang[id]);
  dataBarang[id] = newBarang;
  var alert =
    swal({
      title: "Berhasil Submit!",
      icon: "success",
    });
  showBarang();

}

function editBarang2(id) {
  var newBarang2 = prompt("Edit", dataBarang2[id]);
  dataBarang2[id] = newBarang2;
  var alert =
    swal({
      title: "Berhasil Submit!",
      icon: "success",
    });
  showBarang2();
}
function editBarang3(id) {
  var newBarang3 = prompt("Edit", dataBarang3[id]);
  dataBarang3[id] = newBarang3;
  var alert =
    swal({
      title: "Berhasil Submit!",
      icon: "success",
    });
  showBarang3();
}


function editBarang4(id) {
  var newBarang4 = prompt("Edit", dataBarang4[id]);
  dataBarang4[id] = newBarang4;
  var alert =
    swal({
      title: "Berhasil Submit!",
      icon: "success",
    });
  showBarang4();
}
function editBarang5(id) {
  var newBarang5 = prompt("Edit", dataBarang5[id]);
  dataBarang5[id] = newBarang5;
  var alert =
    swal({
      title: "Berhasil Submit!",
      icon: "success",
    });
  showBarang5();
}
function deleteBarang(id) {
  dataBarang.splice(id, 1);
  showBarang();
}
function deleteBarang2(id) {
  dataBarang2.splice(id, 1);
  showBarang2();
}

showBarang();