export const isProlificUser = () => {
    let dem = JSON.parse(sessionStorage.getItem('demography'))
    console.log(dem, dem.prolificID.length)
    if (dem.prolificID.length > 0) { return true } else { return false }
}