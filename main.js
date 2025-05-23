let newIcon = document.querySelector('#menu-icon');
let navibar = document.querySelector('.navibar');
menuIcon.onclick = () => {
    menuIcon.classlist.toggle('fa-xmark');
    navibar.classlist.toggle('active');
}

let sections= document.querySelectorAll('sections');
let navilinks= document.querySelectorAll('header navi a');

window.onscroll=() =>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset && top<offset+height){
            navilinks.forEach.apply(links=>{
                links.classlist.remove('active');
                document.querySelector('header navi a[href*=' + id+']').classlist.add('active');
            });
            

        };
    });
    let header=document.querySelector('header');
    header.classlist.toggle('sticky',window.scrollY>100);
    menuIcon.classlist.remove('fa-xmark');
    navibar.classlist.remove('active');
};