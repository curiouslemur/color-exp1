export const generateSessionID = () => {
    const d = new Date();
    // const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    // return month[d.getMonth()] + d.getDate() + "-" + d.getHours() + d.getMinutes() + "-" + d.getSeconds() + d.getMilliseconds()
    let m = d.getMonth() + 1
    return "2024" + m + d.getDate() + "-" + d.getHours() + d.getMinutes() + "-" + d.getSeconds() + d.getMilliseconds()
}

export const onClickStart = (navigate, nextUrl) => {
    navigate(nextUrl)
}
