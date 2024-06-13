
let number = document.querySelectorAll('.number')

console.log(number)

let arr = Array.from(number)
let i = 0

arr.map((item)=> {
    let i = 0
    let count = ()=> {
        i++

        if(i == item.dataset.count){
            clearInterval(stop)
        }
         item.innerHTML = i
         console.log(i)
    }
    let stop = setInterval(()=>{
        count()
    } ,1000/item.dataset.count)
    
})
