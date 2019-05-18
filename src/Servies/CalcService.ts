import { BehaviorSubject, Observable } from 'rxjs';

class CalcServiece {

    private restul: BehaviorSubject<string> = new BehaviorSubject("");
    private operaion: BehaviorSubject<string> = new BehaviorSubject("");
    private actions = new Map<string, (sign: string) => void>()


    constructor() {
        this.setActions();
    }

    private setActions() {
        let basic = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", ".", "x","/"];

        basic.forEach(numb => {
            this.actions.set(numb, (sign) => {
                this.operaion.next(this.operaion.getValue() + sign)
            })

        })

        this.actions.set("DEL", this.backSpace.bind(this))
        this.actions.set("DELLong", this.clearAll.bind(this))
        this.actions.set("=", this.calc.bind(this))

    }

    private calc() {
        try {
            let value = this.operaion.getValue();
            value = value.replace("x", "*")
            let result = eval(value);
            console.log(result)
            this.restul.next(result + "");
            this.operaion.next(result + "")
        } catch{
            this.restul.next("invalid synax")
        }
    }

    private clearAll() {
        this.restul.next("");
        this.operaion.next("");
    }

    public backSpace() {
        let value = this.operaion.getValue();
        this.operaion.next(value.substr(0, value.length - 1))
    }


    getResult(): Observable<string> {
        return this.restul.asObservable();
    }
    getOperation(): Observable<string> {
        return this.operaion.asObservable();
    }

    public passButton(sign: string) {
        if (this.actions.has(sign)) {
            // @ts-ignore
            this.actions.get(sign)(sign)
        };
    }

}

export default new CalcServiece()