class UI {
    // help function to add DOM element
    addUIElement(name, classname = '' , textcontent = '', attributes = {}){
        // create element
        let element = document.createElement(name);
        // add css style class to element
        if (classname !== ''){
            element.className = classname
        }
        // add text content to element
        element.appendChild(document.createTextNode(textcontent))
        // add atributes to element
        if(Object.keys(attributes).length > 0){
            for(let key in attributes){
                element.setAttribute(key, attributes[key])
            }
        }
        return element
    }


    addBook(book){
        let tr = this.addUIElement('tr');
        for(let name in book){
            // create <td> element and add text value
            let td = this.addUIElement('td', '', book[name]);
            tr.appendChild(td);
        }
        let td = document.createElement('td');
        const link = this.addUIElement('a', '', 'X', {'href':'#'});
        td.appendChild(link);
        tr.appendChild(td);
        const bookList = document.querySelector('#book-list');
        bookList.appendChild(tr);
    }
}