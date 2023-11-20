const form = document.getElementById('my-form');
form.addEventListener('submit', saveData);

function saveData(e){
    e.preventDefault();
    let expenseAmount = document.querySelector('#expense-amount').value;
    let expenseDescription = document.querySelector('#expense-description').value;
    let expenseCategory = document.querySelector('#expense-category').value;

    let my_obj = {
        "amount": expenseAmount,
        "description": expenseDescription,
        "category": expenseCategory
    
    };
    
    my_objSerialized = JSON.stringify(my_obj);
    localStorage.setItem(expenseAmount, my_objSerialized);

    let details = expenseAmount+' - '+expenseDescription+' - '+expenseCategory+' ';
    const li = document.createElement('li')
    const deleteBtn = document.createElement('input')
    const editBtn = document.createElement('input')

    deleteBtn.type = 'button';
    deleteBtn.value = 'Delete Expense'

    editBtn.type = 'button';
    editBtn.value = 'Edit Expense';


    li.innerText = details;
    var ul = document.getElementById('user-list');
    ul.appendChild(li);
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);

    deleteBtn.addEventListener('click', removeData);
    function removeData(e){
        e.preventDefault();
        deleteBtn.parentElement.innerText = ' ';
        li.style.listStyle='none';
        localStorage.removeItem(expenseAmount);
    };

    editBtn.addEventListener('click', editData);
    function editData(e){
        e.preventDefault();
        document.getElementById('expense-amount').value = expenseAmount;
        document.getElementById('expense-description').value = expenseDescription;
        document.getElementById('expense-category').value = expenseCategory;
        editBtn.parentElement.innerText = ' ';
        li.style.listStyle='none';
        localStorage.removeItem(expenseAmount);
    };



    document.getElementById('expense-amount').value = null;
    document.getElementById('expense-description').value = null;
    document.getElementById('expense-category').value = null;

    
 }