let doc = document
let body = document.body
let warp = body.children[0]
let hed = warp.children[0]
let div = hed.children[0]
let a = div.children[1]
let a1 = div.children[2]
let a2 = div.children[3]
let a3 = div.children[4]
let a4 = div.children[5]
let a5 = div.children[6]
let t = doc.querySelector('.hov')
let ema = doc.querySelector('.ema')
let ru = doc.querySelector('.img56')
let men = doc.querySelector('.menu1')

t.addEventListener('click', () => {
    warp.style.filter = 'blur(100px)'
    ema.style.display = 'flex'
})
ru.addEventListener('click', () => {
    warp.style.filter = 'blur(0px)'
    ema.style.display = 'none'
})


// hed.style.width = '1920px'
// hed.style.height ='100px'
// hed.style.display= 'flex'
// hed.style.alignItems = 'center'
// hed.style.justifyContent = 'center'



div.style.width = '90%'
div.style.height = '100px'
div.style.display = 'flex'
div.style.alignItems = 'center'
div.style.justifyContent = 'space-around'

a.style.fontSize = '100%'
a.style.color = 'white'
a.style.fontWeight = '400'

a1.style.fontSize = '100%'
a1.style.color = 'white'
a1.style.fontWeight = '400'

a2.style.fontSize = '100%'
a2.style.color = 'white'
a2.style.fontWeight = '400'

a3.style.fontSize = '100%'
a3.style.color = 'white'
a3.style.fontWeight = '400'

a4.style.fontSize = '100%'
a4.style.color = 'white'
a4.style.fontWeight = '400'

a5.style.fontSize = '100%'
a5.style.color = 'white'
a5.style.fontWeight = '400'




let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector(".burg");
let menuBtn1 = document.querySelector('.menu-btn1');
let g = doc.querySelector('.g1')
let g2 = doc.querySelector('.g2')
let g4 = doc.querySelector('.g4')
let g5 = doc.querySelector('.g5')
let g6 = doc.querySelector('.g6')


// menuBtn.addEventListener('click', () => {
//     menu.classList.toggle('active');
// })

// menuBtn.classList.toggle('active');
menuBtn1.addEventListener('click', () => {
    menu.classList.toggle('activ');
    men.classList.toggle('menu2')
    menuBtn1.classList.toggle('open')
    g.classList.toggle('g')
    g2.classList.toggle('g')
    g4.classList.toggle('g')
    g5.classList.toggle('g')
    g6.classList.toggle('g')
})



let op = doc.querySelector('.op1')
let op2 = doc.querySelector('.op2')
let op3 = doc.querySelector('.op3')
let op4 = doc.querySelector('.op4')
let u = 0


op.addEventListener('click', () => {
    // setInterval(function () {
    //     u = u + 1
    //     if (u <= 450) { op.innerHTML = u }
    //     else {
    //         op.innerHTML = 450
    //     }
    // }
    // )
}, 10);
let r = 0
op2.addEventListener('click', () => {
    
}, 1);

let f = 0
op3.addEventListener('click', () => {

    
}, 1000);
let w = 0
op4.addEventListener('click', () => {

    
}, 1000);

let mainElement = document.documentElement

let window_scroll_top = window.pageYOffset

console.log(window_scroll_top);

let p = doc.querySelector('.section8')

if (window_scroll_top >= p.offsetTop-200) {
    setInterval(function () {
        u = u + 1
        if (u <= 450) { op.innerHTML = u }
        else {
            op.innerHTML = 450
        }
    })
    setInterval(function () {
        r = r + 1
        if (r <= 2500) { op2.innerHTML = r }
        else {
            op2.innerHTML = 2500
        }
    }
    )
    setInterval(function () {
        f = f + 1
        if (f <= 10) { op3.innerHTML = f }
        else {
            op3.innerHTML = 10
        }
    }
    )
    setInterval(function () {
        w = w + 1
        if (w <= 365) { op4.innerHTML = w }
        else {
            op4.innerHTML = 365
        }
    }
    )
}
let block3 = doc.querySelector('.l1')
let poc_sec4 = doc.querySelector('.section2')
let block4 = doc.querySelector('.l2')
let poc_sec5 = doc.querySelector('.section11')
let block5 = doc.querySelector('.l3')
let poc_sec6 = doc.querySelector('.section9')
let block6 = doc.querySelector('.l4')
let poc_sec7 = doc.querySelector('.section10')
let block7 = doc.querySelector('.l5')
let poc_sec8 = doc.querySelector('.section13')
let block8 = doc.querySelector('.l7')
let poc_sec9 = doc.querySelector('.section1')

block3.addEventListener('click', jacor)
let rr = poc_sec4.offsetTop
console.log(rr);

function jacor(event) {
    event.preventDefault()
    window.scrollTo({
        top: rr,
        left: 0,
        behavior: 'smooth'
    })
}

block4.addEventListener('click', jaco)
let r2 = poc_sec5.offsetTop

function jaco(event) {
    event.preventDefault()
    window.scrollTo({
        top: r2,
        left: 0,
        behavior: 'smooth'
    })
}


block5.addEventListener('click', jac)
let r3 = poc_sec6.offsetTop

function jac(event) {
    event.preventDefault()
    window.scrollTo({
        top: r3,
        left: 0,
        behavior: 'smooth'
    })
}

block6.addEventListener('click', ja)
let r4 = poc_sec7.offsetTop

function ja(event) {
    event.preventDefault()
    window.scrollTo({
        top: r4,
        left: 0,
        behavior: 'smooth'
    })
}


block7.addEventListener('click', j)
let r5 = poc_sec8.offsetTop

function j(event) {
    event.preventDefault()
    window.scrollTo({
        top: r5,
        left: 0,
        behavior: 'smooth'
    })
}

block8.addEventListener('click', je)
let r6 = poc_sec9.offsetTop

function je(event) {
    event.preventDefault()
    window.scrollTo({
        top: r6,
        left: 0,
        behavior: 'smooth'
    })
}



let tex = doc.querySelector('.xaxa1')
console.log(poc_sec7.offsetTop);
console.log(tex);
    if(window_scroll_top >= poc_sec7.offsetTop){
    tex.classList.toggle('xaxa3')

    setTimeout(function () {
        tex.classList.remove('xaxa3')
    },10000)
}
let ld1 = doc.querySelector('.ld1')
let ld2 = doc.querySelector('.ld2')
let ld3 = doc.querySelector('.ld3')
let ld4 = doc.querySelector('.ld4')
let r11 = doc.querySelector('.r11')
let r21 = doc.querySelector('.r21')
let r31 = doc.querySelector('.r31')
let r41 = doc.querySelector('.r41')
let r51 = doc.querySelector('.r51')
let r61 = doc.querySelector('.r61')

ld2.addEventListener('click', () => {
    window.scrollTo
    r11.style.display = 'none'
    r21.style.display = 'none'
    r51.style.display = 'none'
    r31.style.display = 'block'
    r41.style.display = 'block'
    r61.style.display = 'block'
}, 1);
ld1.addEventListener('click', () => {
    window.scrollTo
    r11.style.display = 'block'
    r21.style.display = 'block'
    r51.style.display = 'block'
    r31.style.display = 'block'
    r41.style.display = 'block'
    r61.style.display = 'block'
}, 1);
ld3.addEventListener('click', () => {
    window.scrollTo
    r11.style.display = 'block'
    r21.style.display = 'none'
    r31.style.display = 'none'
    r41.style.display = 'none'
    r51.style.display = 'block'
    r61.style.display = 'none'
}, 1);
ld4.addEventListener('click', () => {
    window.scrollTo
    r11.style.display = 'none'
    r21.style.display = 'block'
    r31.style.display = 'none'
    r41.style.display = 'none'
    r51.style.display = 'none'
    r61.style.display = 'none'
}, 1);
