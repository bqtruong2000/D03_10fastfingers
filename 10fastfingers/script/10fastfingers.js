let thoi_gian = 10;
let diem = 0;
let dang_choi;
let dem_so_cau_dung = 0;

const chu_duoc_nhap = document.querySelector("#chu_duoc_nhap");
const chu_hien_tai = document.querySelector("#chu_hien_tai");
const diem_hien_thi = document.querySelector("#diem");
const thoi_gian_hien_thi = document.querySelector("#giay");
const thong_bao = document.querySelector("#thong_bao");

const chu = [
  "hat",
  "river",
  "lucky",
  "statue",
  "generate",
  "stubborn",
  "cocktail",
  "runaway",
  "joke",
  "developer",
  "establishment",
  "hero",
  "javascript",
  "nutrition",
  "revolver",
  "echo",
  "siblings",
  "investigate",
  "horrendous",
  "symptom",
  "laughter",
  "magic",
  "master",
  "space",
  "definition",
  "animal",
  "between",
  "new",
  "each",
  "sound",
  "never",
  "left",
  "something",
  "readlly",
  "all",
  "house",
  "men",
  "at",
  "then",
  "tree",
  "quick",
  "we",
  "thought",
  "often",
  "with",
  "enough",
  "only",
  "head",
  "foot",
  "large",
  "away",
  "word",
  "and",
  "made",
  "follow",
  "small",
  "his",
  "her",
  "he",
  "she",
  "we",
  "they",
  "them",
  "their",
  "us",
];
const loi_khen = [
  "Good Job!",
  "Well Done!",
  "Excellent!",
  "Amazing!",
  "You are a genius!",
  "Wonderful!",
];
const loi_dong_vien = [
  "That was a nice try!",
  "You've almost got it",
  "Don't give up!",
  "Come on, you can do it!",
  "Oops, Please try again!",
  "Give it your best shot!",
];
function hien_thi_chu(chu) {
  const chu_ngau_nhien = Math.floor(Math.random() * chu.length);
  chu_hien_tai.innerHTML = chu[chu_ngau_nhien];
}
function hien_thi_chu_khi_lam_dung() {
  const loi_khen_ngau_nhien = Math.floor(Math.random() * loi_khen.length);
  thong_bao.innerHTML = loi_khen[loi_khen_ngau_nhien];
}
function hien_thi_chu_khi_lam_sai() {
  const loi_dong_vien_ngau_nhien = Math.floor(
    Math.random() * loi_dong_vien.length
  );
  thong_bao.innerHTML = loi_dong_vien[loi_dong_vien_ngau_nhien];
}

window.addEventListener("load", chay_ham);

function dem_nguoc() {
  if (thoi_gian > 0) {
    thoi_gian--;
  } else if (thoi_gian == 0) {
    dang_choi = false;
  }
  thoi_gian_hien_thi.innerHTML = thoi_gian;
}

function so_sanh_chu() {
  if (so_sanh_tu()) {
    dang_choi = true;
    thoi_gian += 2;
    hien_thi_chu(chu);
    chu_duoc_nhap.value = "";
    diem++;
  }
  diem_hien_thi.innerHTML = diem;
}
function so_sanh_tu() {
  if (chu_duoc_nhap.value === chu_hien_tai.innerHTML) {
    hien_thi_chu_khi_lam_dung();
    dem_so_cau_dung++;
    return true;
  } else if (chu_duoc_nhap.value.length === chu_hien_tai.innerHTML.length) {
    hien_thi_chu_khi_lam_sai();
    chu_duoc_nhap.value = "";
    return false;
  } else {
    thong_bao.innerHTML = "";
    return false;
  }
}

function chay_ham() {
  hien_thi_chu(chu);
  chu_duoc_nhap.addEventListener("input", so_sanh_chu);
  setInterval(dem_nguoc, 1000);
  setInterval(kiem_tra_chu, 50);
}
function kiem_tra_chu() {
  if (!dang_choi && thoi_gian === 0) {
    thong_bao.innerHTML = "Game Over!";
    diem = 0;
  }
}
