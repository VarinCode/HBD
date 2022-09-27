// install: npm i -g typescript
// run terminal: ts-node hbd-script.ts
// compile: tsc hbd-script.ts

const date:Date = new Date();
interface Datedata { 
    ObjectDay: Array<string>;
    ObjectMonth: Array<string>;
    day: number;
    month: number;
    year: number;
    Abbreviated_day: CallableFunction;
    Full_day: CallableFunction;
    time: CallableFunction;
}
interface Person {
    Name: string;
    LastName: string;
    NickName: string;
    cognomen: string
}
interface HBDDATA {
    Owner: Person;
    ObjectDate: Datedata;
}
class HBD implements HBDDATA {
    public Owner: Person;
    public ObjectDate: Datedata;
        public constructor(HandleEvent:ErrorConstructor = Error){
            this.Owner = {
                Name:'name', // ชื่อ
                LastName:'lastname', // นามสกุล
                NickName:'nickname', // ชื่อเล่น
                cognomen: ''// ฉายา
            }
            this.ObjectDate = { 
                ObjectDay: ["วันอาทิตย์" , "วันจันทร์" , "วันอังคาร" , "วันพุธ" , "วันพฤหัสบดี" , "วันศุกร์" , "วันเสาร์"],
                ObjectMonth: ["เดือนมกราคม", "เดือนกุมภาพันธ์" , "เดือนมีนาคม" , "เดือนเมษายน" , "เดือนพฤษภาคม" , 
                            "เดือนมิถุนายน" , "เดือนกรกฎาคม" , "เดือนสิงหาคม" , "เดือนกันยายน" , "เดือนตุลาคม" , 
                            "เดือนพฤศจิกายน" , "เดือนธันวาคม"],
                day:date.getDate(),
                month:date.getMonth() + 1,
                year:date.getFullYear() + 543,
                async time(current_time:string){ 
                    try {
                        return String(current_time = "-> " + date.toTimeString())
                    } catch {
                        throw HandleEvent
                    }
                },
                    async Abbreviated_day(parameter:any){
                        parameter = `-> ${this.day}/${this.month}/${this.year}`// ส่งวันที่แบบสั้น 
                            if((typeof this.day) === (typeof this.month) && (typeof this.year)) {
                                return parameter
                            } else {
                                throw HandleEvent
                            }   
                    },
                    async Full_day(parameter:any){ 
                        parameter = `-> ${this.ObjectDay[date.getDay()]} ที่ ${this.month} ${this.ObjectMonth[this.month]} ปีพศ. ${this.year}`;
                            try {
                                return parameter
                            } catch {
                                throw HandleEvent
                        }
                    }
                }
            }
        public Reset = (): void => console.clear() 
        public Play_music = async (Ref:string= 'https://www.joox.com/th/single/OjbNHD+3Pz0uogSWPBW4Dg==') => { 
            const lyric:Array<string>= [
                                    "\n-------------------------------------", 
                                    "\tHappy birthday to you" , "\tHappy birthday to you", 
                                    "\tHappy birthday" , "\tHappy birthday", 
                                    "\tHappy birthday to you" , "\tHappy birthday to you" , 
                                    "\tHappy birthday to you" , "\tHappy birthday"        , 
                                    "\tHappy birthday" , "\tHappy birthday to you" , 
                                    "\tHappy birthday to you" , "\tHappy birthday to you" , 
                                    "\tHappy birthday" ,"\tHappy birthday", 
                                    "-------------------------------------\n" 
                                ]
            for(let index in lyric){
                console.log(lyric[index])
            }}
        public Birthday_wishess = async () => { //อวยพรวันเกิด
            const wishes:(string|number)[] = [
                `Happy birthday to you🎁🎉✨🎈` , // 1
                `- 😃 ${this.Owner.Name} ${this.Owner.LastName}` , // 2
                `- ....` , // 3
                `- .....` ] // 4
            return wishes.map((res:ThisType<string|number>) => console.info(res))
        }
    }

const HAPPY_BIRTHDAY:HBD = new HBD(); 
    (async function process(){ 
        await HAPPY_BIRTHDAY.ObjectDate.Full_day()
            .then((result:PromiseFulfilledResult<StringConstructor>) => console.log(result))
            .catch((reason:PromiseRejectedResult) => console.error(reason));
        await HAPPY_BIRTHDAY.ObjectDate.Abbreviated_day()
            .then((result:PromiseFulfilledResult<StringConstructor|NumberConstructor>) => console.log(result))
            .catch((reason:PromiseRejectedResult) => console.error(reason));
        await HAPPY_BIRTHDAY.ObjectDate.time()
            .then((result:PromiseFulfilledResult<StringConstructor|NumberConstructor>) => console.log(result))
            .catch((reason:PromiseRejectedResult) => console.error(reason));
        await HAPPY_BIRTHDAY.Play_music();
        await HAPPY_BIRTHDAY.Birthday_wishess();
    })().finally(() => setTimeout(HAPPY_BIRTHDAY.Reset,8000));
