// install: npm i -g typescript
// run terminal: ts-node script.ts
// compile: tsc 01-test.ts

var $date:Date = new Date();
var Name:string = '' // ชื่อ
var LastName:string = '' // นามสกุล
var NickName:string = '' // ชื่อเล่น
var ObjectDate:any = {
    ObjectDay: ["วันอาทิตย์", "วันจันทร์", "วันอังคาร", "วันพุธ", "วันพฤหัสบดี", "วันศุกร์", "วันเสาร์"],
    ObjectMonth: ["เดือนมกราคม", "เดือนกุมภาพันธ์", "เดือนมีนาคม", "เดือนเมษายน", "เดือนพฤษภาคม", "เดือนมิถุนายน", "เดือนกรกฎาคม",
        "เดือนสิงหาคม", "เดือนกันยายน", "เดือนตุลาคม", "เดือนพฤศจิกายน", "เดือนธันวาคม"],
    day: $date.getDate(),
    month: $date.getMonth() + 1,
    year: $date.getFullYear() + 543,
    abbreviated_day: function (parameter: string) {
        if ((typeof this.day) === (typeof this.month) && (typeof this.year)) {
            console.log(parameter = `-> ${this.day}/${this.month}/${this.year}`); // ส่งวันที่แบบสั้น
        }
    },full_day: function (parameter: string) {
        parameter = `-> ${this.ObjectDay[$date.getDay()]} ที่ ${this.month} ${this.ObjectMonth[this.month]} ปีพศ. ${this.year}`;
        try {
            console.log(parameter);
        } catch {
            console.error(Error);
        }
    }
} 
let play_music = async () => { // เนื้อเพลง
    let Lyrics:string[]= ["-------------------------------------","\tHappy birthday to you" , "\tHappy birthday to you" , "\tHappy birthday" , "\tHappy birthday" , 
                "\tHappy birthday to you" , "\tHappy birthday to you" , "\tHappy birthday to you" , "\tHappy birthday" ,
                "\tHappy birthday" ,  "\tHappy birthday to you" , "\tHappy birthday to you" , "\tHappy birthday to you" ,
                "\tHappy birthday" ,"\tHappy birthday" , "-------------------------------------\n"]
    // Ref: https://www.joox.com/th/single/OjbNHD+3Pz0uogSWPBW4Dg==
    for(let index in Lyrics){
        console.log(Lyrics[index])
    }
}; let birthday_wishess = async () => { //อวยพรวันเกิด
    let wishes:(string|number)[] = [`Happy birthday to you🎁🎉✨🎈` , `😃 ${Name} ${LastName}` , `....` , `.....` ]
    return wishes.forEach(sd => console.log(sd))
}
// เรียกใช้งาน function ทั้งหมด
(async function(){
    await ObjectDate.full_day();
    await ObjectDate.abbreviated_day();
    await play_music();
    await birthday_wishess()
})();