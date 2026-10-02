function inputData(event) {
  event.preventDefault();

  let data1 = document.getElementById("note").value;
  let data2 = document.getElementById("label").value;

  let siswa = JSON.parse(localStorage.getItem("siswa")) || [];

  siswa.push({
    note: data1,
    label: data2,
  });

  localStorage.setItem("siswa", JSON.stringify(siswa));

  console.log(JSON.parse(localStorage.getItem("siswa")));

  tampilData();
}

// Tampilkan data
function tampilData() {
  let data = JSON.parse(localStorage.getItem("siswa")) || [];

  const ul = document.getElementById("data-tampil");

  ul.innerHTML = "";

  data.forEach((item, index) => {
    const li = document.createElement("li");

    li.textContent = `${item.note} - ${item.label} `;

    // Tombol Edit
    const tombolEdit = document.createElement("button");

    tombolEdit.textContent = "Edit";

    tombolEdit.type = "button";

    tombolEdit.onclick = function () {
      editData(index);
    };

    // Tombol Hapus
    const tombolHapus = document.createElement("button");

    tombolHapus.textContent = "Hapus";

    tombolHapus.type = "button";

    tombolHapus.onclick = function () {
      hapusData(index);
    };

    // Masukkan tombol ke li
    li.appendChild(tombolEdit);
    li.appendChild(tombolHapus);

    // Masukkan li ke ul
    ul.appendChild(li);
  });
}

// Edit data
function editData(index) {
  let data = JSON.parse(localStorage.getItem("siswa")) || [];

  let noteBaru = prompt("Edit nama:", data[index].note);

  if (noteBaru === null) {
    return;
  }

  data[index].note = noteBaru;

  localStorage.setItem("siswa", JSON.stringify(data));

  tampilData();
}

// Hapus satu data
function hapusData(index) {
  let data = JSON.parse(localStorage.getItem("siswa")) || [];

  data.splice(index, 1);

  localStorage.setItem("siswa", JSON.stringify(data));

  tampilData();
}
function hapusSemuaData() {
    localStorage.removeItem("siswa");
    tampilData();
}
// Tampilkan saat halaman dibuka
tampilData();
