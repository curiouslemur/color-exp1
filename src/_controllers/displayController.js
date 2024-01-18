export const onChangeSelect = (e, val, navigate, nextUrl) => {
    // add grayScale: value to demography    
    document.body.classList.remove('display-body')
    navigate(nextUrl)
}
