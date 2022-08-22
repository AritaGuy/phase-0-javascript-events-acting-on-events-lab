// Your code here
const dodger = document.getElementById('dodger')
dodger.style.backgroundColor = '#FF69B'
dodger.style.bottom = '0px'


function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace('px', '')
    const left = parseInt(leftNumbers, 10)

    if (left > 0){
        dodger.style.left = `${left -1}px`
    }
}
document.addEventListener('keydown',function (e){
    if (e.key === 'ArrowLeft'){
        moveDodgerLeft()
    }
    else if (e.key === 'ArrowRight'){
        moveDodgerRight()
    }
})

function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace('px', '')
    const left = parseInt(leftNumbers, 10)
    // const rightNumbers = dodger.style.right.replace('px', '')
    // const right = parseInt(rightNumbers, 10)
    if (left >= 0){
        dodger.style.left = `${left +1}px`
    }
}

