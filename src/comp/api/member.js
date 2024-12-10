import api from '../ax/AxiosSetting'


export const memberIdCheck = (obj) => {
    return api.post('http://localhost:8080/api/member/findId', JSON.stringify(obj)
    , {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}