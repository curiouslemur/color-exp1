export const onChangeSelect = (e, val, navigate, nextUrl) => {
    document.body.classList.remove('display-body')
    navigate(nextUrl)
}
