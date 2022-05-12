//Agrgar elementeo a la lista

let form = document.getElementById('formAgregado')
let lista = document.getElementById('items')
let filtro = document.getElementById('filtro')
 
form.addEventListener('submit', agregarItem)
function agregarItem(e){
    e.preventDefault()
    let newItem = document.getElementById('item').value

    let li = document.createElement('li')
    li.className = 'list-group-item'
    li.appendChild(document.createTextNode(newItem))

    let botonDel = document.createElement('button')
    botonDel.className = 'btn btn-danger btn-sm float-right eliminar'
    botonDel.appendChild(document.createTextNode('X'))
    li.appendChild(botonDel)

    lista.appendChild(li)
}

//Eliminar elemento de lista

lista.addEventListener('click', eliminarItem)

function eliminarItem(e){
     if(e.target.classList.contains('eliminar')){
         if(confirm('Seguro que desea eliminar elemento?')){
             let li = e.target.parentElement
             lista.removeChild(li)
        }
    }
}

//Buscar elemento 

filtro.addEventListener('keyup', filtrarItems)

function filtrarItems(e){
    let texto = e.target.value.toLowerCase()
    let items = lista.getElementsByTagName('li')

    Array.from(items).forEach(function(item){
        let itemNombre = item.firstChild.textContent
        if(itemNombre.toLocaleLowerCase().indexOf(texto) != -1){
            item.style.display = 'block'
        }else{
            item.style.display = 'none'
        }
    })
}