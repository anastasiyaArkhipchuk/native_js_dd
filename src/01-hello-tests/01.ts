
export function sum(a: number, b:number) {
return a+b;
}
export function mult(a: number, b:number) {
    return a * b;
}
 export function splitIntoWords (sentense:String) {
     return sentense.toLowerCase().split(" ")
         .filter(w => w !== "" && w!=="-")
         .map(w => w
             .replace("!","")
             .replace(".","")
             .replace(",",""))
 }