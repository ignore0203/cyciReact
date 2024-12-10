import api from '../ax/axiosSetting'

/**
 * 아이템 리슷트
 * @param {} param 
 * @returns 
 */
export const itemList = (param) => {

    return api.get('/item/all', {
        params: param
    });
}

/**
 * 추천 아이템
 * @param {*} obj 
 * @returns 
 */
export const itemGood = (obj) => {
    return api.get('/item/good', {
        params: obj
    });
}

export const boartList = (obj) => {
    return api.get('/board/list',  {
        params: obj
    });
}

export const boartRegist = (obj) => {
    return api.post('/board/regist', JSON.stringify(obj));
}

export const boartFind = (obj) => {
    console.log(obj)
    return api.get('/board/find',  {
        params: obj
    });
}

export const boartRemove = (obj) => {
    console.log(obj)
    return api.post('/board/remove', JSON.stringify(obj));
}

export const boartGood = (obj) => {
    console.log(obj)
    return api.post('/board/good', JSON.stringify(obj));
}

export const boartModify = (obj) => {
    console.log(obj)
    return api.post('/board/modify', JSON.stringify(obj));
}   




