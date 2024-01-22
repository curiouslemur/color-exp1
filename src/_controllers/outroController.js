export const isProlificUser = () => {
    let dem = JSON.parse(sessionStorage.getItem('demography'))
    if (dem.prolificID.length > 0) { return true } else { return false }
}