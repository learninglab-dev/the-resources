// d3.select(".image")
//   .append("img")
//   .attr("src", "/images/p1.jpg")

var dataArray = [300, 40, 12, 78, 90, 100, 40, 20, 300];



var svg = d3.select("#graphic")
  .append("svg")
  .attr("width", window.innerWidth)
  .attr("height", window.innerHeight)

// svg.append("circle")
//   .attr("r", 950)
//   .attr("cx", 100)
//   .attr("cy", 0)
//   .attr("fill", "rgba(255, 0, 0, 0.7)")
//
// svg
//   .selectAll("circle")
//   .data(dataArray)
//   .enter()
//     .append("circle")
//     .attr("r", function(d, i){
//       return 10 + d/100
//     })
//     .attr("fill", "rgba(0, 50, 150, 0.3)")
//     .attr("cy", function(d, i){
//       return d + 200
//     })
//     .attr("cx", function(d, i){
//       return (50+i*20)
//     })


var path = d3.geoPath()

d3.json("geodata001.json").then(
  function(us){
    svg.selectAll("path")
      .data(topojson.feature(us, us.objects.counties).features)
      .enter()
      .append("path")
      .attr("d", path)
      .attr("stroke", "green")
    console.log(topojson.feature(us, us.objects.counties).features);
  }
)
