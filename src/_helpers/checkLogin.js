export function CheckLogin() {
    let user = JSON.parse(localStorage.getItem('user'));
    console.log(user)

    if (user && user.authdata)
        return { 'Authorization': user.authdata }
    else
        return {}
}