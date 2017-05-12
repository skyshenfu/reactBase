import * as types from '../constants/types'
//只是一个例子，reducer是一个将state和action合成一个新的state（store快照）的处理方式
const initState=
    {
        isRefreshing:false,
        isLoadMore:false,
        hasMore:false,
        imgs:[]
    };
let simpleReducer=(state=initState,action)=>{
    switch(action.type){
        case types.ARTICLE_MORE:
            return Object.assign({},state,{
                isLoadMore:true,
                })
        case types.ARTICLE_REFRESH:
            return Object.assign({},state,{
                isRefreshing:true
            })
        case types.ARTICLE_REFRESHED:
            return Object.assign({},state,{
                isRefreshing:false,
                //imgs数组取值来源于执行完reducer操作的store快照（即内存中simpleReducer里面的保存值）
                imgs:action.imgs
            }); 
        case types.ARTICLE_NORMAL:
           return  initState;
        default:
           return  initState;
         
    }
}
export default simpleReducer;