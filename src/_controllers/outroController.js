export const isProlificUser = () => {
    let dem = JSON.parse(sessionStorage.getItem('demography'))
    console.log(dem, dem.prolificID)
    if (dem.prolificID) { return true } else { return false }
}