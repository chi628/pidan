if(document.getElementById('gift')) {
    document.getElementById('gift').addEventListener('click',() => {
        document.getElementById('gift').classList.add('open')
        document.getElementById('balloons').classList.add('show')

        setTimeout(() => {
            document.getElementById('balloons').classList.remove('show')
        }, 6000);

        setTimeout(() => {
            if (choice === 'boy') {
                document.getElementById('ans').innerHTML='答錯啦！我是小公主啦！'
            }

            document.getElementById('ans').classList.add('show')
        }, 5000);
    })
}
let choice = localStorage.getItem('choice') || ''
document.getElementById('choice-boy') && document.getElementById('choice-boy').addEventListener('click',()=>{
    localStorage.setItem('choice','boy')
    choice = 'boy'
    document.getElementById('choice-boy').style.borderColor = '#1d3557'

    document.getElementById('choice-girl').style.borderColor = ''
})

document.getElementById('choice-girl') && document.getElementById('choice-girl').addEventListener('click',()=>{
    localStorage.setItem('choice','girl')
    choice = 'girl'
    document.getElementById('choice-boy').style.borderColor = ''

    document.getElementById('choice-girl').style.borderColor = '#b5838d'
})

const container = document.querySelector('.container')
container.style.setProperty('height', `${window.innerHeight}px`)