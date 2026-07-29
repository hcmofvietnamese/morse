"use strict";
import { jsonn } from "./data/morse.js";
import { mangChuCai } from "./data/banchucai.js";

const nhap = document.querySelector("#nhap");
const xuat = document.querySelector("#xuat");
const giaima = document.querySelector("#giaima");
const mahoa = document.querySelector("#mahoa");
const key = document.querySelector("#key");

function maHoa(str) {
  let tt = [],
    str1 = [...str];
  str1.forEach((x) => {
    jsonn.forEach((y) => {
      if (x == y.dich) tt.push(y.code);
    });
  });
  let tt1 = tt.join([" "]).replace(/\s+/gi, " ");
  return tt1;
}

function giaiMa(str) {
  let str1 = str.trim().toLowerCase();
  str1 = str1.replace(/\s+/gi, " ");
  let mang = str1.split(" ");
  let tt = [];
  mang.forEach((x) => {
    jsonn.forEach((y) => {
      if (x == y.code) tt.push(y.dich);
    });
  });
  let tt1 = tt.join([""]).replace(/\s+/gi, " ");
  return tt1;
}

function sulyTruot(key1) {
  // const key2 = [...key1];
  const key3 = key1.split("=");
  const a = key3[0],
    b = key3[1];
  let banchucai1 = [...mangChuCai],
    banchucai2 = [];
  const index_a = banchucai1.indexOf(a),
    index_b = banchucai1.indexOf(b);
  let chSo = index_b + 1;
  while (chSo != index_b) {
    if (chSo == index_b + 1) banchucai2.push(banchucai1[index_b]);
    banchucai2.push(banchucai1[chSo]);
    chSo = chSo + 1;
    if (chSo >= banchucai1.length) chSo = 0;
  }
  return banchucai2;
}

mahoa.addEventListener("click", (e) => {
  e.preventDefault();
  const keyy = key.value.trim().replace(/\s+/gi, "");
  const dataNhap = nhap.value + "";
  const dataNhap1 = [...dataNhap];
  const mangtruot = sulyTruot(keyy);
  console.log("mangtruoc", mangtruot);
  let result = [];
  dataNhap1.forEach((x, t) => {
    mangtruot.forEach((y, tt) => {
      mangChuCai.forEach((z, ttt) => {
        if (tt == ttt && x == z) result.push(y);
      });
    });
  });
  const result1 = result.join([" "]);
  const dataXuat = maHoa(result1);
  xuat.value = dataXuat;
});

giaima.addEventListener("click", (e) => {
  e.preventDefault();
  const keyy = key.value.trim().replace(/\s+/gi, "");
  const dataNhap = nhap.value + "";
  const dataXuat = giaiMa(dataNhap);
  const dataXuat1 = [...dataXuat];
  const mangtruot = sulyTruot(keyy);
  console.log("mangtruoc", mangtruot);
  let result = [];
  dataXuat1.forEach((x, t) => {
    mangtruot.forEach((y, tt) => {
      mangChuCai.forEach((z, ttt) => {
        if (tt == ttt && x == y) result.push(z);
      });
    });
  });
  const result1 = result.join([" "]);
  const result2 = result1.replace(/\s+/gi, "");
  console.log("dataXuat: ", dataXuat);
  xuat.value = result2;
});
