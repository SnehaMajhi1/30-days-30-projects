let items = [];
let grandTotal = 0;

function addItem() {
  const name = document.getElementById("itemName").value;
  const qty = parseFloat(document.getElementById("itemQty").value);
  const price = parseFloat(document.getElementById("itemPrice").value);

  if (!name || qty <= 0 || price <= 0) {
    alert("Please enter valid item details");
    return;
  }

  const total = qty * price;

  items.push({ name, qty, price, total });
  updateTable();

  document.getElementById("itemName").value = "";
  document.getElementById("itemQty").value = "";
  document.getElementById("itemPrice").value = "";
}

function updateTable() {
  const tbody = document.getElementById("invoiceItems");
  tbody.innerHTML = "";
  grandTotal = 0;

  items.forEach((item, index) => {
    grandTotal += item.total;

    tbody.innerHTML += `
      <tr>
        <td>${item.name}</td>
        <td>${item.qty}</td>
        <td>₹${item.price}</td>
        <td>₹${item.total}</td>
        <td><button onclick="removeItem(${index})">Remove</button></td>
      </tr>
    `;
  });

  document.getElementById("grandTotal").innerText = grandTotal;
}

function removeItem(index) {
  items.splice(index, 1);
  updateTable();
}

function printInvoice() {
  window.print();
}
