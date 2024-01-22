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
    setSliderValue, setShowComponent,
    setCannotNext,
    setProgressBlock, progressBlock,
    navigate, nextUrl) => {
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
        // } else if (progressBlock < conceptList.length - 1) {
    } else if (progressBlock < conceptList.length - 16) {
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