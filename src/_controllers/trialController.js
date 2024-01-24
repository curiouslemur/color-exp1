import * as dao from '../_utils/firebase-config'

export const shuffle = (a) => { //Fisher-Yates shuffle
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i]; a[i] = a[j]; a[j] = x;
    } return a;
}

export const onClickNext = (
    setColorCodeList, colorCodeList, conceptList,
    setProgressColor, progressColor,
    setSliderValue, sliderValue,
    setShowComponent,
    setCannotNext, setCanPressEnter,
    setProgressBlock, progressBlock,
    navigate, nextUrl) => {

    setCanPressEnter(false)

    let dem = JSON.parse(sessionStorage.getItem('demography'))
    dem.progressBlock = progressBlock + 1
    dem.progressColor = progressColor + 1

    const record = {}
    const recordData = {
        ID: dem.sessionID,
        ans: sliderValue,
        color: colorCodeList[progressColor],
        concept: conceptList[progressBlock],
        progressBlock: progressBlock + 1,
        progressColor: progressColor + 1
    }

    const idx = (progressBlock * colorCodeList.length) + progressColor + 1
    record[idx] = recordData

    if (dem.countryResLen === '999') {
        dao.logData(dem.sessionID, record, dem.expLang, dem.expName, 1) // test == 1 : this is a test data
    } else {
        dao.logData(dem.sessionID, record, dem.expLang, dem.expName, 0) // test == 1 : this is NOT a test data
    }
    dao.logDem(dem.sessionID, dem, dem.expLang, dem.expName)

    sessionStorage.setItem("demography", JSON.stringify(dem))

    if (progressColor === 0 & progressBlock === 0) {
        alert("You can also press Enter to progress to the next trial")
    }
    if (progressColor < colorCodeList.length - 1) { // colorCodeLength = 37
        setProgressColor(progressColor + 1)
        setSliderValue(50)
        setCannotNext(true)
        // console.log("showing block: ", progressBlock + 1)
        // log values and color code
        setShowComponent(false)
    } else if (progressBlock < conceptList.length - 1) {
        // } else if (progressBlock < conceptList.length - 15) { // The - 15 here is only for testing purposes: to get to the outro page faster
        setProgressBlock(progressBlock + 1)
        setProgressColor(0)
        setColorCodeList(shuffle(colorCodeList))
        // log values
    } else {
        // log values
        document.body.classList.remove('trial-body');
        navigate(nextUrl)
    }

}