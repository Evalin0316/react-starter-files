// 每個檔案只能一個預設匯出
export default{
    myName: '卡斯柏',
    fn(){
        console.log('我是小福')
    }
}

// 具名匯出：每個檔案能有多個具名匯出

export const myName = '小福';

export function fn(){
    console.log('我是小福~')
}

