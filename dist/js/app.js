let my_name = document.getElementById('my_name')
let btn= document.getElementById('btn-1')
let go_up = document.getElementById('go-up')
go_up.addEventListener('click',()=>{
    window.scroll(0,0)
})
window.addEventListener('scroll',()=>{
    let rect1 = btn.getBoundingClientRect()
    let rect2 = my_name.getBoundingClientRect()
    let name = document.getElementById('name')
    name.getBoundingClientRect().y <0 ? go_up.classList.add('show') :go_up.classList.remove('show')


})
let icons = [...document.getElementsByTagName('i') ]
let side = document.getElementById('side')
let mouse = document.getElementById('mouse')

icons.forEach(icon => {
        icon.addEventListener('mouseover',()=>{
            mouse.classList.add('grow')
        })
        icon.addEventListener('mouseleave',()=>{
            mouse.classList.remove('grow')
        })
});

window.addEventListener('mousemove',(e)=>{
    let x = e.pageX
    let y = e.pageY
    mouse.style.top=y+'px'
    mouse.style.left=x+'px'
})

