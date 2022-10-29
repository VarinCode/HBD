/*
    - setup: nodejs.org
    - install: npm i -g typescript
    - run terminal: ts-node hbd-script.ts
    - compile: tsc hbd-script.ts
    - warn!!! ไม่สามารถใช้งานร่วมกับ tsconfig.json ได้    
*/

const date:Date = new Date(); 
interface Datedata {
    ObjectDay: Array<string>;
    ObjectMonth: Array<string>;
    day: number;
    month: number;
    year: number;
    Short_date: CallableFunction;
    Current_date: CallableFunction;
    Current_time: CallableFunction;
}
interface Person {
    Name: string;
    LastName: string;
    NickName: string;
    Cognomen: undefined;
    Birth_year: number;
    Age: Function;
}
interface HBDDATA {
    Owner: Person;
    ObjectDate: Datedata;
    HandleEvent: any;
}

class HBD implements HBDDATA { 
    public Owner: Person; 
    public ObjectDate: Datedata;
    public HandleEvent: any;
        public constructor(HandleEvent:ErrorConstructor = Error){ 
            this.HandleEvent = HandleEvent
            this.Owner = { 
                Name:'....', 
                LastName:'.....', 
                NickName:'....',
                Cognomen: undefined,
                Birth_year: 2000,
                Age(age_cal:number , Buddhist_calendar:number , Christian_era:number):number{
                    Christian_era = date.getFullYear();
                    Buddhist_calendar = date.getFullYear() + 543;
                    (Buddhist_calendar > Christian_era) ? age_cal = Math.abs(this.Birth_year - Buddhist_calendar) : null;
                    return age_cal; 
                },
            }
            this.ObjectDate = { 
                ObjectDay: [ "วันอาทิตย์" , "วันจันทร์" , "วันอังคาร" , "วันพุธ" , "วันพฤหัสบดี" , "วันศุกร์" , "วันเสาร์" ], 
                ObjectMonth: [ 
                               "เดือนมกราคม" ,  "เดือนกุมภาพันธ์", 
                               "เดือนมีนาคม" ,   "เดือนเมษายน", 
                               "เดือนพฤษภาคม" , "เดือนมิถุนายน", 
                               "เดือนกรกฎาคม" ,  "เดือนสิงหาคม", 
                               "เดือนกันยายน",    "เดือนตุลาคม", 
                               "เดือนพฤศจิกายน" , "เดือนธันวาคม"
                            ],
                day:date.getDate(),
                month:date.getMonth() + 1,
                year:date.getFullYear() + 543,
                async Current_time(current_time:string):Promise<string|number> { 
                    current_time = ` ⌚ ${date.toTimeString()}`
                    try {
                        return Promise.resolve(String(current_time)); 
                    } catch {
                        throw Promise.reject(HandleEvent);
                    }
                },
                    async Short_date(parameter:string):Promise<string|number> {
                        parameter = ` ⌚ ${this.day}/${this.month}/${this.year}`
                            if((typeof this.day) === (typeof this.month) && (typeof this.year)) {
                                return Promise.resolve(String(parameter)); 
                            } else {
                                throw Promise.reject(HandleEvent);
                            }   
                    },
                    async Current_date(parameter:string):Promise<string|number> { 
                        parameter = ` 📅 ${this.ObjectDay[date.getDay()]} ที่ ${this.day} ${this.ObjectMonth[this.month]} ปีพศ. ${this.year}`;
                            try {
                                return Promise.resolve(String(parameter)); 
                            } catch(err:unknown){
                                throw Promise.resolve(HandleEvent);
                        }
                    }
                }
                this.ObjectDate.ObjectDay.forEach(Data_Day => Data_Day.trim());
                this.ObjectDate.ObjectMonth.forEach(Data_Month => Data_Month.trim());
            }
        public Re = ():void => console.clear(); 
        public Play_music = async ():Promise<void> => { 
            let Ref:string= 'https://www.chordzaa.com/chord/คอร์ด-เนื้อเพลง-HappyBirthdayToYou-แฮปปีเบิร์ดเดย์ทูยู.691.html';
            const lyric:Array<string> = [ // เนื้อเพลง 
                                            "\n♫ ━━━━━━━━━━━━━━━━━━━━━━━━━ ♫", 
                                            "\tHappy birthday to you", 
                                            "\tHappy birthday to you", 
                                            "\tHappy birthday", 
                                            "\tHappy birthday", 
                                            "\tHappy birthday to you", 
                                            "\n",
                                            "\tHappy birthday to you", 
                                            "\tHappy birthday to you", 
                                            "\tHappy birthday", 
                                            "\tHappy birthday",
                                            "\tHappy birthday to you...", 
                                            "♫ ━━━━━━━━━━━━━━━━━━━━━━━━━ ♫\n" 
                                        ]
            let index:string;
                for(index in lyric){
                    console.log(lyric[index]); 
                }};
        public Birthday_wishes = async ():Promise<string[]> => { 
            const wishes:string[] = [
                `(づ｡◕‿‿◕｡)づ  Happy birthday to you🎁🎉✨🎈`,
                `- 😃 ${this.Owner.Name} ${this.Owner.LastName}`, 
                `- ${this.Owner.NickName}`, 
                `- ${this.Owner.Age()} `, 
                `- .....`, 
                `- .....` 
            ];
            try {
                return wishes;
            } catch(err:unknown){
                throw Promise.resolve(err);
            }
        }
    }

const HAPPY_BIRTHDAY:HBD = new HBD(); 
    (async (): Promise<void> => { 
        await HAPPY_BIRTHDAY.ObjectDate.Current_date()
            .then((result:PromiseFulfilledResult<StringConstructor>) => console.log(result))
            .catch((reason:PromiseRejectedResult) => console.error(reason));
        await HAPPY_BIRTHDAY.ObjectDate.Short_date()
            .then((result:PromiseFulfilledResult<StringConstructor>) => console.log(result))
            .catch((reason:PromiseRejectedResult) => console.error(reason));
        await HAPPY_BIRTHDAY.ObjectDate.Current_time()
            .then((result:PromiseFulfilledResult<StringConstructor|NumberConstructor>) => console.log(result))
            .catch((reason:PromiseRejectedResult) => console.error(reason));
        await HAPPY_BIRTHDAY.Play_music();
        await HAPPY_BIRTHDAY.Birthday_wishes()
            .then((result:string[]) => { result.map((element:ThisType<string[]> , arr_length:number) => {console.log(element)})}) 
            .catch((reason:PromiseRejectedResult) => console.error(reason));
        setTimeout(HAPPY_BIRTHDAY.Re,10000); 
    })();
