import MyImage from './table.jpg';
function loadHome() {

   const content = document.getElementById('pagecontent');
   content.classList.add('flex');
   content.innerHTML = '';

    function createImage(){
        const homeimage = document.createElement('div');
        homeimage.setAttribute("id", "homeimage");

        return homeimage;
    }

    function createSubtext(){
        const subtext = document.createElement('div')
        subtext.setAttribute("id", "subtext");

        subtext.innerHTML = "<h2>Comfort Italian Cuising in Denver, Colorado</h2>"
        return subtext;
    }

    //adds our above sections to the content div container
    content.appendChild(createImage());
    content.appendChild(createSubtext());

}

export {loadHome};