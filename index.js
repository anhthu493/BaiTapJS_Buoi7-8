let arr = [];
document.getElementById("addArray").onclick = function () {
  var number = document.getElementById("input").value * 1;
  arr.push(number);
  ShowArr();
};
function ShowArr() {
  document.getElementById("showArray").innerHTML =
    "các phần tử của mảng" + arr.join(", ");
}
function CN1(arr) {
  let tong = 0;
  for (let n = 0; n < arr.length; n++) {
    if (arr[n] > 0) {
      tong += arr[n];
    }
  }
  return tong;
}
document.getElementById("c1").onclick = function () {
  var chucNang1 = document.getElementById("showc1");
  chucNang1.innerHTML = CN1(arr);
};
function CN2(arr) {
  var soLuong = 0;
  for (let n = 0; n < arr.length; n++) {
    if (arr[n] > 0) {
      soLuong++;
    }
  }
  return soLuong;
}
document.getElementById("c2").onclick = function () {
  var chucNang2 = document.getElementById("showc2");
  chucNang2.innerHTML = CN2(arr);
};
function CN3(arr) {
  var soBeNhat = arr[0];

  for (let n = 1; n < arr.length; n++) {
    if (arr[n] < soBeNhat) {
      soBeNhat = arr[n];
    }
  }
  return soBeNhat;
}
document.getElementById("c3").onclick = function () {
  var chucNang2 = document.getElementById("showc3");
  chucNang2.innerHTML = CN3(arr);
};
function CN4(arr) {
  let soDuongBeNhat = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      if (soDuongBeNhat === -1 || arr[i] < soDuongBeNhat) {
        soDuongBeNhat = arr[i];
      }
    }
  }

  return soDuongBeNhat;
}
document.getElementById("c4").onclick = function () {
  var chucNang2 = document.getElementById("showc4");
  chucNang2.innerHTML = CN4(arr);
};
function CN5(arr) {
  for (let n = arr.length - 1; n >= 0; n--) {
    if (arr[n] % 2 === 0) {
      return arr[n];
    }
  }
  return "Không có số chẵn trong mảng";
}
document.getElementById("c5").onclick = function () {
  var chucNang2 = document.getElementById("showc5");
  chucNang2.innerHTML = CN5(arr);
};
function CN7(arr) {
  let mangSaoChep = [...arr];

  mangSaoChep.sort(function (a, b) {
    return a - b;
  });

  return mangSaoChep;
}
document.getElementById("c7").onclick = function () {
  var chucNang2 = document.getElementById("showc7");
  chucNang2.innerHTML = CN7(arr);
};
function CN8(arr) {
  function kiemTraSNT(so) {
    for (let i = 2; i <= Math.sqrt(so); i++) {
      if (so % i === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 0; i < arr.length; i++) {
    if (kiemTraSNT(arr[i])) {
      return arr[i];
    }
  }
  return -1;
}
function CN10(arr) {
  const demSoLuong = arr.reduce(
    function (acc, curr) {
      if (curr > 0) {
        acc.soDuong++;
      } else if (curr < 0) {
        acc.soAm++;
      }
      return acc;
    },
    { soDuong: 0, soAm: 0 }
  );

  if (demSoLuong.soDuong > demSoLuong.soAm) {
    return "Số dương nhiều hơn số âm trong mảng";
  } else if (demSoLuong.soDuong < demSoLuong.soAm) {
    return "Số âm nhiều hơn số dương trong mảng";
  } else {
    return "Số dương và số âm bằng nhau trong mảng";
  }
}
document.getElementById("c8").onclick = function () {
  var chucNang2 = document.getElementById("showc8");
  chucNang2.innerHTML = CN8(arr);
};
document.getElementById("c10").onclick = function () {
  var chucNang2 = document.getElementById("showc10");
  chucNang2.innerHTML = CN10(arr);
};
