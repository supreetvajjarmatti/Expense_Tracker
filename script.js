function addExpense() {
    const expenseName = document.getElementById('expenseName').value;
    const expenseAmount = parseFloat(document.getElementById('expenseAmount').value);

    if (!expenseName || isNaN(expenseAmount) || expenseAmount <= 0) {
      alert('Please enter valid expense details.');
      return;
    }

    const expenseList = document.getElementById('expenseList');
    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item');
    listItem.textContent = `${expenseName}: $${expenseAmount.toFixed(2)}`;
    expenseList.appendChild(listItem);

    const totalExpense = parseFloat(document.getElementById('totalExpense').textContent);
    document.getElementById('totalExpense').textContent = (totalExpense + expenseAmount).toFixed(2);

    document.getElementById('expenseName').value = '';
    document.getElementById('expenseAmount').value = '';
  }