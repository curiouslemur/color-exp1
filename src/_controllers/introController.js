
import * as d3 from 'd3'
import { colorCoord } from '../stimuli/colors'

export const addGridColorPatches = (divId, pW, spacing) => {
    d3.select(divId).selectAll("*").remove()
    let colors = colorCoord.slice(0, -1) // remove the last entry which is the coordinates for the background color

    let patchW = pW, patchH = patchW
    let nrow = 4

    var svg = d3.select(divId).append('svg')
        .attr('width', (pW + spacing) * 10)
        .attr('height', (patchH + spacing) * nrow + 2 * spacing)

    // console.log(colors)

    const rect = svg.selectAll('rect').data(colors)
        .enter()
        .append('rect')
        .attr('id', d => d.code)
        .attr("width", patchW)
        .attr("height", patchH)
        .attr('x', (d, i) => Math.floor(i / nrow) * (patchW + spacing))
        .attr('y', (d, i) => (i % nrow) * (patchH + spacing) + 10)
        .attr('fill', (d) => d3.lab(d.L, d.a, d.b))
    // .on('click', (d) => console.log(d))

    return rect
}

export const addGridColorPatchesTuto = (divId, pW, spacing) => {
    const rect = addGridColorPatches(divId, pW, spacing)
    rect.on('mouseover', function () {
        let strokeColor = d3.select(this).attr('fill')
        d3.select(this).attr("stroke", strokeColor)
            .attr("stroke-width", 5)
    }).on('mouseout', function () {
        let strokeColor = d3.select(this).attr('fill')
        d3.select(this).attr("stroke-width", 0)
    }).on('click', () => { alert('clicked a patch') })
}


export const getConceptList = (lang) => {
    switch (lang) {
        case "en":
        default:

    }
}

export const onClickStart = (navigate, nextUrl) => {
    navigate(nextUrl)
}

