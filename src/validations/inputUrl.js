export const validator = (url)=>{
    let URL = url
    let regExp = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig
    let urlOk = regExp.test(url)
    console.log(urlOk)
    return urlOk
}