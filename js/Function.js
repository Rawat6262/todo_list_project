const list = [];
aa();
document.querySelector('.button_class').addEventListener('click', () => {
    clik();
})

function aa() {
    let aar = '';
    list.forEach(function(value, index) {
        let name = value.name;
        let duedate = value.duedate;
        let html = `<div>${name}</div>
        <div>${duedate}</div>
        <button class="htmlbutton" onclick="list.splice(${index},1),aa()">Delete</button>`;

        aar += html;
    })
    document.querySelector('.box').innerHTML = aar;
}

function clik() {
    let list2 = document.querySelector('.input_class');
    let list3 = list2.value;
    let dd = document.querySelector('.dates')
    let dd2 = dd.value;
    list.push({
        name: list3,
        duedate: dd2
    })
    dd.value = '';
    list2.value = '';
    aa();
}