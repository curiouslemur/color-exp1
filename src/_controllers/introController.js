
import * as d3 from 'd3'
import { colorCoord } from '../stimuli/colors'

export const addGridColorPatches = () => {

    d3.select("#grid-color-patches").selectAll("*").remove()
    let colors = colorCoord.slice(0, -1) // remove the last entry which is the coordinates for the background color

    let patchW = 50, patchH = patchW
    let nrow = 4, spacing = 10

    var svg = d3.select("#grid-color-patches").append('svg')
        .attr('width', '100%')
        .attr('height', (patchH + spacing) * nrow + 2 * spacing)

    // console.log(colors)

    svg.selectAll('rect').data(colors)
        .enter()
        .append('rect')
        .attr('id', d => d.code)
        .attr("width", patchW)
        .attr("height", patchH)
        .attr('x', (d, i) => Math.floor(i / nrow) * (patchW + spacing))
        .attr('y', (d, i) => (i % nrow) * (patchH + spacing))
        .attr('fill', (d) => d3.lab(d.L, d.a, d.b))
        .on('click', (d) => console.log(d))
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

