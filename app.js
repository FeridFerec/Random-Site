let pborder = document.querySelectorAll('.pborder');


pborder.forEach(element => {
    element.addEventListener('mouseover', () => {
            // Bütün `.pbo` elementlərini seçirik
        let pboElements = element.querySelectorAll('.pbo');
            // Bütün `.border` elementlərini seçirik
        let borderElements = element.querySelectorAll('.border');
    
            // Hər bir `.pbo` elementi üçün rəng dəyişirik
        pboElements.forEach(pbo => {
                setTimeout(() => {
                    pbo.style.color = 'white';
                },600)
        });
            // Hər bir `.border` elementi üçün dəyişiklik tətbiq edirik
        borderElements.forEach(border => {
            setTimeout(() =>{
                border.style.backgroundColor = 'white';
                border.style.width = '51px';
            },600)
        });
    });
});
pborder.forEach(element => {
    element.addEventListener('mouseout', () => {
            // Bütün `.pbo` elementlərini seçirik
        let pboElements = element.querySelectorAll('.pbo');
            // Bütün `.border` elementlərini seçirik
        let borderElements = element.querySelectorAll('.border');
    
            // Hər bir `.pbo` elementi üçün rəng dəyişirik
        pboElements.forEach(pbo => {
            pbo.style.color = '';
        });
            // Hər bir `.border` elementi üçün dəyişiklik tətbiq edirik
        borderElements.forEach(border => {
            border.style.backgroundColor = '';
            border.style.width = '';
        });
    });
});
function checkSectionVisibility() {
    // Hər üç section üçün elementləri seçirik
    let pbo11 = document.querySelector('.pbo11');
    let border11 = document.querySelector('.border11');
    let pbo22 = document.querySelector('.pbo22');
    let border22 = document.querySelector('.border22');
    let pbo33 = document.querySelector('.pbo33');
    let border33 = document.querySelector('.border33');

    // Hər section üçün observer yaradırıq
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id; // Hedeflenen section id-ni alırıq

                // Hər section üçün fərqli əməliyyatlar
                if (sectionId === 'section1') {
                    pbo11.style.color = 'white';
                    border11.style.backgroundColor = 'white';
                    border11.style.width = '51px';
                    pbo22.style.color = '';
                    border22.style.backgroundColor = '';
                    border22.style.width = '';
                    pbo33.style.color = '';
                    border33.style.backgroundColor = '';
                    border33.style.width = '';
                } else if (sectionId === 'section2') {
                    pbo11.style.color = '';
                    border11.style.backgroundColor = '';
                    border11.style.width = '';
                    pbo22.style.color = 'white';
                    border22.style.backgroundColor = 'white';
                    border22.style.width = '51px';
                    pbo33.style.color = '';
                    border33.style.backgroundColor = '';
                    border33.style.width = '';
                } else if (sectionId === 'section3') {
                    pbo11.style.color = '';
                    border11.style.backgroundColor = '';
                    border11.style.width = '';
                    pbo22.style.color = '';
                    border22.style.backgroundColor = '';
                    border22.style.width = '';
                    pbo33.style.color = 'white';
                    border33.style.backgroundColor = 'white';
                    border33.style.width = '51px';
                }
            }
        });
    }, { threshold: 0.5 });

    // `section1`, `section2`, `section3` elementlərini izləyirik
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Sayfa yükləndikdə funksiyanı işə salırıq
window.addEventListener('load', checkSectionVisibility);





function checkBox(){
    let box1 = document.querySelector('.contaBox .box1');
    let box2 = document.querySelector('.contaBox .box2');
    let box3 = document.querySelector('.contaBox .box3');
    let box4 = document.querySelector('.contaBox .box4');
    let box5 = document.querySelector('.contaBox .box5');
    let box6 = document.querySelector('.contaBox .box6');
    let p1 = document.querySelector('.contaBox .box1 .rbox h2');
    let p11 = document.querySelector('.contaBox .box1 .rbox h2 i');
    let p2 = document.querySelector('.contaBox .box2 .rbox h2');
    let p22 = document.querySelector('.contaBox .box2 .rbox h2 i');
    let p3 = document.querySelector('.contaBox .box3 .rbox h2');
    let p33 = document.querySelector('.contaBox .box3 .rbox h2 i');
    let p4 = document.querySelector('.contaBox .box4 .rbox h2');
    let p44 = document.querySelector('.contaBox .box4 .rbox h2 i');
    let p5 = document.querySelector('.contaBox .box5 .rbox h2');
    let p55 = document.querySelector('.contaBox .box5 .rbox h2 i');
    let p6 = document.querySelector('.contaBox .box6 .rbox h2');
    let p66 = document.querySelector('.contaBox .box6 .rbox h2 i');
    box1.addEventListener('mouseover',()=> {
        box1.style.backgroundColor ='rgba(240, 240, 240, 0.05)';
        box1.style.borderRadius = '5px';
        p1.style.color = 'aqua';
        p11.style.marginLeft = '7px';
        box2.style.opacity = '30%';
        box3.style.opacity = '30%';
        box4.style.opacity = '30%';
        box5.style.opacity = '30%';
        box6.style.opacity = '30%';
    })
    box1.addEventListener('mouseout',()=> {
        box1.style.backgroundColor ='';
        box1.style.borderRadius = '';
        p1.style.color = '';
        p11.style.marginLeft = '';
        box2.style.opacity = '';
        box3.style.opacity = '';
        box4.style.opacity = '';
        box5.style.opacity = '';
        box6.style.opacity = '';
    })
    box2.addEventListener('mouseover',()=> {
        box2.style.backgroundColor ='rgba(240, 240, 240, 0.05)';
        box2.style.borderRadius = '5px';
        p2.style.color = 'aqua';
        p22.style.marginLeft = '7px';
        box1.style.opacity = '30%';
        box3.style.opacity = '30%';
        box4.style.opacity = '30%';
        box5.style.opacity = '30%';
        box6.style.opacity = '30%';
    })
    box2.addEventListener('mouseout',()=> {
        box2.style.backgroundColor ='';
        box2.style.borderRadius = '';
        p2.style.color = '';
        p22.style.marginLeft = '';
        box1.style.opacity = '';
        box3.style.opacity = '';
        box4.style.opacity = '';
        box5.style.opacity = '';
        box6.style.opacity = '';
    })
    box3.addEventListener('mouseover',()=> {
        box3.style.backgroundColor ='rgba(240, 240, 240, 0.05)';
        box3.style.borderRadius = '5px';
        p3.style.color = 'aqua';
        p33.style.marginLeft = '7px';
        box2.style.opacity = '30%';
        box1.style.opacity = '30%';
        box4.style.opacity = '30%';
        box5.style.opacity = '30%';
        box6.style.opacity = '30%';
    })
    box3.addEventListener('mouseout',()=> {
        box3.style.backgroundColor ='';
        box3.style.borderRadius = '';
        p3.style.color = '';
        p33.style.marginLeft = '';
        box2.style.opacity = '';
        box1.style.opacity = '';
        box4.style.opacity = '';
        box5.style.opacity = '';
        box6.style.opacity = '';
    })
    box4.addEventListener('mouseover',()=> {
        box4.style.backgroundColor ='rgba(240, 240, 240, 0.05)';
        box4.style.borderRadius = '5px';
        p4.style.color = 'aqua';
        p44.style.marginLeft = '7px';
        box2.style.opacity = '30%';
        box3.style.opacity = '30%';
        box1.style.opacity = '30%';
        box5.style.opacity = '30%';
        box6.style.opacity = '30%';
    })
    box4.addEventListener('mouseout',()=> {
        box4.style.backgroundColor ='';
        box4.style.borderRadius = '';
        p4.style.color = '';
        p44.style.marginLeft = '';
        box2.style.opacity = '';
        box3.style.opacity = '';
        box1.style.opacity = '';
        box5.style.opacity = '';
        box6.style.opacity = '';
    })
    box5.addEventListener('mouseover',()=> {
        box5.style.backgroundColor ='rgba(240, 240, 240, 0.05)';
        box5.style.borderRadius = '5px';
        p5.style.color = 'aqua';
        p55.style.marginLeft = '7px';
        box2.style.opacity = '30%';
        box3.style.opacity = '30%';
        box4.style.opacity = '30%';
        box1.style.opacity = '30%';
        box6.style.opacity = '30%';
    })
    box5.addEventListener('mouseout',()=> {
        box5.style.backgroundColor ='';
        box5.style.borderRadius = '';
        p5.style.color = '';
        p55.style.marginLeft = '';
        box2.style.opacity = '';
        box3.style.opacity = '';
        box4.style.opacity = '';
        box1.style.opacity = '';
        box6.style.opacity = '';
    })
    box6.addEventListener('mouseover',()=> {
        box6.style.backgroundColor ='rgba(240, 240, 240, 0.05)';
        box6.style.borderRadius = '5px';
        p6.style.color = 'aqua';
        p66.style.marginLeft = '7px';
        box2.style.opacity = '30%';
        box3.style.opacity = '30%';
        box4.style.opacity = '30%';
        box5.style.opacity = '30%';
        box1.style.opacity = '30%';
    })
    box6.addEventListener('mouseout',()=> {
        box6.style.backgroundColor ='';
        box6.style.borderRadius = '';
        p6.style.color = '';
        p66.style.marginLeft = '';
        box2.style.opacity = '';
        box3.style.opacity = '';
        box4.style.opacity = '';
        box5.style.opacity = '';
        box1.style.opacity = '';
    })
}  
checkBox()
/* https://brittanychiang.com/ */


function checkBox2(){
    let box1 = document.querySelector('.contaBoxSec3 .box1');
    let box2 = document.querySelector('.contaBoxSec3 .box2');
    let box3 = document.querySelector('.contaBoxSec3 .box3');
    let box4 = document.querySelector('.contaBoxSec3 .box4');

    box1.addEventListener('mouseover',()=> {
        box1.style.backgroundColor ='rgba(240, 240, 240, 0.05)';
        box1.style.borderRadius = '5px';
        box2.style.opacity = '30%';
        box3.style.opacity = '30%';
        box4.style.opacity = '30%';
    })
    box1.addEventListener('mouseout',()=> {
        box1.style.backgroundColor ='';
        box1.style.borderRadius = '';
        box2.style.opacity = '';
        box3.style.opacity = '';
        box4.style.opacity = '';

    })
    box2.addEventListener('mouseover',()=> {
        box2.style.backgroundColor ='rgba(240, 240, 240, 0.05)';
        box2.style.borderRadius = '5px';
        box1.style.opacity = '30%';
        box3.style.opacity = '30%';
        box4.style.opacity = '30%';
    })
    box2.addEventListener('mouseout',()=> {
        box2.style.backgroundColor ='';
        box2.style.borderRadius = '';
        box1.style.opacity = '';
        box3.style.opacity = '';
        box4.style.opacity = '';
    })
    box3.addEventListener('mouseover',()=> {
        box3.style.backgroundColor ='rgba(240, 240, 240, 0.05)';
        box3.style.borderRadius = '5px';
        box2.style.opacity = '30%';
        box1.style.opacity = '30%';
        box4.style.opacity = '30%';
    })
    box3.addEventListener('mouseout',()=> {
        box3.style.backgroundColor ='';
        box3.style.borderRadius = '';
        box2.style.opacity = '';
        box1.style.opacity = '';
        box4.style.opacity = '';
    })
    box4.addEventListener('mouseover',()=> {
        box4.style.backgroundColor ='rgba(240, 240, 240, 0.05)';
        box4.style.borderRadius = '5px';
        box2.style.opacity = '30%';
        box3.style.opacity = '30%';
        box1.style.opacity = '30%';
    })
    box4.addEventListener('mouseout',()=> {
        box4.style.backgroundColor ='';
        box4.style.borderRadius = '';
        box2.style.opacity = '';
        box3.style.opacity = '';
        box1.style.opacity = '';
    })
}
checkBox2();

function checkBox3() {
    let box1 = document.querySelector('.contaSec4box .box1');
    let box2 = document.querySelector('.contaSec4box .box2');
    let box3 = document.querySelector('.contaSec4box .box3');
    box1.addEventListener('mouseover',()=> {
        box1.style.backgroundColor ='rgba(240, 240, 240, 0.05)';
        box1.style.borderRadius = '5px';
        box2.style.opacity = '30%';
        box3.style.opacity = '30%';
    })
    box1.addEventListener('mouseout',()=> {
        box1.style.backgroundColor ='';
        box1.style.borderRadius = '';
        box2.style.opacity = '';
        box3.style.opacity = '';
    })
    box2.addEventListener('mouseover',()=> {
        box2.style.backgroundColor ='rgba(240, 240, 240, 0.05)';
        box2.style.borderRadius = '5px';
        box1.style.opacity = '30%';
        box3.style.opacity = '30%';
    })
    box2.addEventListener('mouseout',()=> {
        box2.style.backgroundColor ='';
        box2.style.borderRadius = '';
        box1.style.opacity = '';
        box3.style.opacity = '';
    })
    box3.addEventListener('mouseover',()=> {
        box3.style.backgroundColor ='rgba(240, 240, 240, 0.05)';
        box3.style.borderRadius = '5px';
        box2.style.opacity = '30%';
        box1.style.opacity = '30%';
    })
    box3.addEventListener('mouseout',()=> {
        box3.style.backgroundColor ='';
        box3.style.borderRadius = '';
        box2.style.opacity = '';
        box1.style.opacity = '';
    })
}
checkBox3();

