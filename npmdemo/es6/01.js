var input=[1,2,3]
input = input.map(item =>item+1)
console.log(input)

export function getList(){
    console.log("getlist1")
}
export function save(){
    console.log("save1")
}

export default{
    getlist1(){
        console.log('getlist11')
    },
    save1(){
        console.log('save11')
    }
}