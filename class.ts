// install: npm i -g typescript
// run terminal: ts-node script.ts
// compile: tsc script.ts
const date:Date = new Date();
interface Datedata { // ประกาศ type property ใน object
    ObjectDay:Array<string>;
    ObjectMonth:Array<string>;
    day:number;
    month:number;
    year:number;
    abbreviated_day:CallableFunction;
    full_day:CallableFunction;
}
class HBD {
    Name:string // ชื่อ
    LastName:string // นามสกุล
    NickName:string // ชื่อเล่น
    ObjectDate:Datedata
    public constructor(){
        this.Name = ''
        this.LastName = ''
        this.NickName = ''
        this.ObjectDate = { // รายละเอียดวัน
            ObjectDay:["วันอาทิตย์" , "วันจันทร์" , "วันอังคาร" , "วันพุธ" , "วันพฤหัสบดี" , "วันศุกร์" , "วันเสาร์"],
            ObjectMonth:["เดือนมกราคม","เดือนกุมภาพันธ์","เดือนมีนาคม","เดือนเมษายน", "เดือนพฤษภาคม","เดือนมิถุนายน","เดือนกรกฎาคม",
            "เดือนสิงหาคม","เดือนกันยายน","เดือนตุลาคม","เดือนพฤศจิกายน","เดือนธันวาคม"],
            day:date.getDate(),
            month:date.getMonth() + 1,
            year:date.getFullYear() + 543,
            abbreviated_day:function(parameter:string){ 
                if((typeof this.day) === (typeof this.month) && (typeof this.year)){
                    console.log(parameter = `-> ${this.day}/${this.month}/${this.year}`) // ส่งวันที่แบบสั้น
                }
            },full_day:function(parameter:string){ 
                parameter = `-> ${this.ObjectDay[date.getDay()]} ที่ ${this.month} ${this.ObjectMonth[this.month]} ปีพศ. ${this.year}`
                try {
                    console.log(parameter)
                } catch {
                    console.error(Error)
                }
            }
        }
    }
        public play_music = async () => { // เนื้อเพลง
            let Lyrics:string[]= ["-------------------------------------","\tHappy birthday to you" , "\tHappy birthday to you" , "\tHappy birthday" , "\tHappy birthday" , 
                        "\tHappy birthday to you" , "\tHappy birthday to you" , "\tHappy birthday to you" , "\tHappy birthday" ,
                        "\tHappy birthday" ,  "\tHappy birthday to you" , "\tHappy birthday to you" , "\tHappy birthday to you" ,
                        "\tHappy birthday" ,"\tHappy birthday" , "-------------------------------------\n"]
            // Ref: https://www.joox.com/th/single/OjbNHD+3Pz0uogSWPBW4Dg==
            for(let index in Lyrics){
                console.log(Lyrics[index])
        }}
        public birthday_wishess = async () => { //อวยพรวันเกิด
            let wishes:(string|number)[] = [`Happy birthday to you🎁🎉✨🎈` , `😃 ${this.Name} ${this.LastName}` , `....` , `.....` ]
            return wishes.forEach(sd => console.log(sd))
        }    
}
const HAPPY_BIRTHDAY_TO_YOU = new HBD();
(async function(){ // เรียกใช้งาน method function ทั้งหมด
    await HAPPY_BIRTHDAY_TO_YOU.ObjectDate.full_day();
    await HAPPY_BIRTHDAY_TO_YOU.ObjectDate.abbreviated_day();
    await HAPPY_BIRTHDAY_TO_YOU.play_music();
    await HAPPY_BIRTHDAY_TO_YOU.birthday_wishess();
})();
