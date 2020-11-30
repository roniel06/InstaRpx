interface ITest<T>{
    data: T
}

interface IData<T>{
    name:string
    email: T
}

type UserState = ITest<IData<string>>


