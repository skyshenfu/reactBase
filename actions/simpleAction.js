import * as types from '../constants/types'
import NetUtil from '../utils/NetUtils'
export let fetchBanner=()=>{
    let REUQEST_URL = 'http://www.all-help.com/mobile/article/getAdvListByCid.json';
    return dispatch=>{
        dispatch(init());
        fetch(REUQEST_URL,{
        method: 'POST',
        headers:{
            'Accept': 'application/xml',
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        body:"classid=1"
    }).then(response => response.json())
      .then(jsonresponse=>{dispatch(Refreshed(jsonresponse))})
      .catch((error) => {
        console.error(error);
      });
    }

}

function Refreshed(data){
    console.log(JSON.stringify(data))
    return {
        type:types.ARTICLE_REFRESHED,
        imgs:data.data.dataList
    }
}
export let init=()=>{
    return{
        type:types.ARTICLE_NORMAL
    }
}