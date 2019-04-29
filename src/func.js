export const redirectTo = ({type,avatar}) => {
    var url = type==='genius'?'/genius':'/boss'
    if(!avatar){
        url += 'info'
    }
    return url
}
