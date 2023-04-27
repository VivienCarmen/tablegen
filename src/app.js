const tbody = document.querySelector("#tbody");
const saveButton = document.querySelector("#savebutton");
const gyumolcsok = [
    { id: 1, name: 'szilva', quantity: 35, price: 8 },
    { id: 2, name: 'alma', quantity: 45, price: 8.3 },
    { id: 3, name: 'körte', quantity: 25, price: 9.5 },
    { id: 4, name: 'barack', quantity: 37, price: 12 }
  ];


function generateTbody() {
    gyumolcsok.forEach((gyumolcs) => {
        let tr = document.createElement('tr');
        let tdName = document.createElement('td');
        let tdQuantity = document.createElement('td');
        let tdPrice = document.createElement('td');

        tdName.textContent = gyumolcs.name;
        tdQuantity.textContent = gyumolcs.quantity;
        tdPrice.textContent = gyumolcs.price;

        tbody.append(tr);
        tr.append(tdName);
        tr.append(tdQuantity);
        tr.append(tdPrice);        
        tr.append(generateTdDelete(gyumolcs.id));
    });
}
generateTbody();

function generateTdDelete(id) {
    let td = document.createElement('td');
    let button = document.createElement('button');
    button.textContent = "Törlés";
    button.classList = "btn btn-warning";
    button.addEventListener('click', () => {
        console.log(id);
        let index = 0;
        let count = 0;
        gyumolcsok.forEach((gy) => {
            if(gy.id == id) {
                index = count;
            }
            count++;
        });
        console.log(index);
        gyumolcsok.splice(index, 1);
        tbody.textContent = "";
        generateTbody();
    });
    td.append(button);
    return td;
}

saveButton.addEventListener('click', () => {
    console.log('mkodik');

})
