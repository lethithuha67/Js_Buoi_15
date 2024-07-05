// Task 1: Calculate Admission Score
document.getElementById("calculate-admission-score").onclick = function () {
  let admissionScore = document.getElementById("input-admission-score").value;
  let area = document.getElementById("input-area").value;
  let priority = +document.getElementById("input-priority").value;
  let score1 = +document.getElementById("input-subject-1").value;
  let score2 = +document.getElementById("input-subject-2").value;
  let score3 = +document.getElementById("input-subject-3").value;
  let sumOfScore = score1 + score2 + score3;
  let output = document.getElementById("output-admission-score");

  if (area !== "X" && area !== "A" && area !== "B" && area !== "C") {
    document.getElementById("input-area").value = "";
    alert("Xin vui lòng nhập lại khu vực X, A, B, C");
    return;
  }

  if (priority > 3) {
    document.getElementById("input-priority").value = "";
    alert("Xin vui lòng nhập lại điểm ưu tiên trong khoảng 0, 1, 2, 3");
    return;
  }

  if (score1 > 10) {
    document.getElementById("input-subject-1").value = "";
    alert("Xin vui lòng nhập lại điểm môn 1 trong khoảng 0 -> 10");
    return;
  }

  if (score2 > 10) {
    document.getElementById("input-subject-2").value = "";
    alert("Xin vui lòng nhập lại điểm môn 2 trong khoảng 0 -> 10");
    return;
  }

  if (score3 > 10) {
    document.getElementById("input-subject-3").value = "";
    alert("Xin vui lòng nhập lại điểm môn 3 trong khoảng 0 -> 10");
    return;
  }

  if (priority === 1) {
    sumOfScore += 2.5;
  } else if (priority === 2) {
    sumOfScore += 1.5;
  } else if (priority === 3) {
    sumOfScore += 1;
  }

  if (area === "A") {
    sumOfScore += 2;
  } else if (area === "B") {
    sumOfScore += 1;
  } else if (area === "C") {
    sumOfScore += 0.5;
  }

  if (score1 === 0 || score2 === 0 || score3 === 0) {
    output.innerHTML = `Bạn đã gãy do có điểm 0`;
  } else if (sumOfScore >= admissionScore) {
    output.innerHTML = `Bạn đã đậu với số điểm ${sumOfScore} so với điểm chuẩn ${admissionScore}`;
  } else {
    output.innerHTML = `Bạn đã gãy với số điểm ${sumOfScore} so với điểm chuẩn ${admissionScore}`;
  }

  console.log(sumOfScore);
};

// Task 2: Calculate Electricity Bill
document.getElementById("calculate-electricity-bill").onclick = function () {
  let customerName = document.getElementById("input-customer-name").value;
  let kw = +document.getElementById("input-kw").value;
  let totalPrice = 0;
  let output = document.getElementById("output-electricity-bill");

  if (!isNaN(customerName)) {
    alert("Vui lòng nhập tên khách hàng");
    document.getElementById("input-customer-name").value = "";
    return;
  }

  if (kw <= 50) {
    totalPrice = kw * 500;
  } else if (kw <= 100) {
    totalPrice = 50 * 500 + (kw - 50) * 650;
  } else if (kw <= 200) {
    totalPrice = 50 * 500 + 50 * 650 + (kw - 100) * 850;
  } else if (kw <= 350) {
    totalPrice = 50 * 500 + 50 * 650 + 100 * 850 + (kw - 200) * 1100;
  } else {
    totalPrice =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kw - 350) * 1300;
  }

  output.innerHTML = `Tên khách hàng: ${customerName}<br>Tiền điện: ${totalPrice.toLocaleString()} VNĐ`;
};

// Task 3: Calculate Income Tax
document.getElementById("calculate-income-tax").onclick = function () {
  let employee = document.getElementById("input-employee-name").value;
  let totalIncome = +document.getElementById("input-total-income").value;
  let dependents = +document.getElementById("input-dependents").value * 1600000;
  let taxableIncome = totalIncome - 4000000 - dependents;
  let tax = 0;
  let output = document.getElementById("output-income-tax");

  if (!isNaN(employee)) {
    alert("Vui lòng nhập tên khách hàng");
    document.getElementById("input-employee-name").value = "";
    return;
  }

  if (taxableIncome <= 60000000) {
    tax = (taxableIncome * 5) / 100;
  } else if (taxableIncome <= 120000000) {
    tax = (taxableIncome * 10) / 100;
  } else if (taxableIncome <= 210000000) {
    tax = (taxableIncome * 15) / 100;
  } else if (taxableIncome <= 384000000) {
    tax = (taxableIncome * 20) / 100;
  } else if (taxableIncome <= 624000000) {
    tax = (taxableIncome * 25) / 100;
  } else if (taxableIncome <= 960000000) {
    tax = (taxableIncome * 30) / 100;
  } else {
    tax = (taxableIncome * 35) / 100;
  }

  output.innerHTML = `Tên khách hàng: ${employee}<br>Tiền Thuế: ${tax.toLocaleString()} VNĐ`;
};

// Task 4: Calculate Cable Bill
document.getElementById("calculate-cable-bill").onclick = function () {
  let cusID = document.getElementById("input-customer-id").value;
  let channels = +document.getElementById("input-premium-channels").value;
  let connects = +document.getElementById("input-connections").value;
  let processingFee, basicService, advanceChannel;
  let total = 0;
  let output = document.getElementById("output-cable-bill");

  if (document.getElementById("residential").checked) {
    processingFee = 4.5;
    basicService = 20.5;
    advanceChannel = 7.5;
    total = processingFee + basicService + advanceChannel * channels;
  } else if (document.getElementById("business").checked) {
    processingFee = 15;
    basicService = 75;
    advanceChannel = 50;
    if (connects <= 10) {
      total = processingFee + basicService + advanceChannel * channels;
    } else {
      total =
        processingFee +
        basicService +
        advanceChannel * channels +
        (connects - 10) * 5;
    }
  } else {
    alert("Vui lòng chọn loại khách hàng");
    return;
  }

  output.innerHTML = `Mã Khách Hàng: ${cusID}<br>Tiền Cáp: ${total.toLocaleString()} $`;
};

function showConnect() {
  document.getElementById("number-of-connections").classList.remove("d-none");
}

function hideConnect() {
  document.getElementById("number-of-connections").classList.add("d-none");
}
