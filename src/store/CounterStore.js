import { observable, action, makeObservable, computed } from "mobx";

class CounterStore {

    // mobx 6 version 에서 decorator 사용시 constructor에 makeObservable(this); 정의
    constructor() {
        makeObservable(this);
    }

    @observable
    _count = 5;

    // observable 변수를 추출하는 get 함수는 캐시를 사용할 수 있는 @computed 사용
    @computed
    get count() {
        return this._count;
    }

    // observable 변수 변경할 경우 반드시 @action으로 처리 
    @action
    increment() {
        this._count++;
        console.log(this._count);
    }

    // observable 변수 변경할 경우 반드시 @action으로 처리 
    @action
    decrement() {
        this._count--;
        console.log(this._count);
    }

}

// 객체 생성 후 export
export default new CounterStore();