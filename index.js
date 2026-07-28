"use strict";
import { jsonn } from "./data/morse.js";

const nhap = document.querySelector("#nhap");
const xuat = document.querySelector("#xuat");
const giaima = document.querySelector("#giaima");
const mahoa = document.querySelector("#mahoa");

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

// function StringToMang(str) {
//   let str1 = str.trim().toLowerCase();
//   str1 = str1.replace(/\s/, " ");
//   let mang = str1.split(" ");
//   return mang;
// }

mahoa.addEventListener("click", (e) => {
  e.preventDefault();
  const dataNhap = nhap.value + "";
  console.log("dataNhap: ", dataNhap);
  const dataXuat = maHoa(dataNhap);
  console.log("dataXuat: ", dataXuat);
  xuat.value = dataXuat;
});

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

giaima.addEventListener("click", (e) => {
  e.preventDefault();
  const dataNhap = nhap.value + "";
  console.log("dataNhap: ", dataNhap);
  const dataXuat = giaiMa(dataNhap);
  console.log("dataXuat: ", dataXuat);
  xuat.value = dataXuat;
});
