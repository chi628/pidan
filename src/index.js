if(document.getElementById('gift')) {
    document.getElementById('gift').addEventListener('click',() => {
        document.getElementById('gift').classList.add('open')
        document.getElementById('balloons').classList.add('show')

        setTimeout(() => {
            document.getElementById('balloons').classList.remove('show')
        }, 6000);

        setTimeout(() => {
            document.getElementById('ans').classList.add('show')
        }, 5000);
    })
}

const container = document.querySelector('.container')
container.style.setProperty('height', `${window.innerHeight}px`)