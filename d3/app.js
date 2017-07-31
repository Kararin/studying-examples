document.addEventListener('DOMContentLoaded', () => {
    var data = [123, 333, 122, 33, 73, 23],
        width = 100,
        height = 300;

        svgBarChart(width, height);
});

const simpleP = () => {
    var p = d3.select("body")
    .selectAll("p")
    .data([4, 8, 15, 16, 23, 42])
        .text(function(d) { return "I’m number " + d + "!"; });

    p.enter().append('p')
        .text(d => d);

    p.exit().remove();
}

const simpleBarChart = (data) => {
    let w = scale(data);

    d3.select('.chart')
      .selectAll('div')
      .data(data)
      .enter()
      .append('div')
      .style('width', d => `${w(d)}px`)
      .text(d => d)
};

const scale = (data, width) => {
    return d3.scaleLinear()
             .domain([0, d3.max(data)])
             .range([0, width]);
}

const svgBarChart = (width, height) => {
    var chart = d3.select(".chart")
                  .attr("width", width);

    function type(d) {
        d.value = +d.value; // coerce to number
        return d;
    }

    d3.tsv("data.tsv", type, (error, data) => {
        let y = d3.scaleLinear()
                  .range([height, 0])
                  .domain([0, d3.max(data, d => d.value)]);


        chart.attr("height", height * data.length);

        let barWidth = width / data.length;
        var bar = chart.selectAll("g")
            .data(data)
            .enter().append("g")
            .attr("transform", (d, i) => `translate(${i * barWidth}, 0)`);

        bar.append("rect")
            .attr('y', d => y(d.value))
            .attr("width", d => barWidth -1)
            .attr("height", d => height - y(d.value));

        bar.append("text")
            .attr("x", barWidth / 2)
            .attr("y", d => y(d.value) + 3)
            .attr("dy", ".75em")
            .text(d => d.value);
    });
}
