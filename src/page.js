function createBtn(id, text){
    const btn = document.createElement('button');
    btn.setAttribute('id', id);
    btn.innerHTML = text;
    return btn;
}

function loadPage() {
    console.log("loadPage initialized");

    const content = document.querySelector("#content")

    function createNav(){
        const nav = document.createElement('div');
        nav.setAttribute("id", "nav");

        const homebtn = createBtn('home', 'Home');
        const menubtn = createBtn('menu', 'Menu');
        const aboutbtn = createBtn('about', 'About');

        nav.appendChild(homebtn);
        nav.appendChild(menubtn);
        nav.appendChild(aboutbtn);

        return nav;
    }
        
    function createHeader(){
        const header = document.createElement('div');
        header.setAttribute("id", "header");

        header.innerHTML = "<h1>Alto Italia</h1>"
        return header;
    }

    function pageContent(){
        const pagecontent = document.createElement('div');
        pagecontent.setAttribute("id", "pagecontent");

        pagecontent.innerHTML = "";

        return pagecontent;
    }


    //adds our above sections to the content div container
    content.appendChild(createNav());
    content.appendChild(createHeader());
    content.appendChild(pageContent());


}

export {loadPage};