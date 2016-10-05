/**
 * Created by conviva on 10/2/16.
 */
import * as d3 from 'd3';

class D3Test {
    x: number = 0;
    y: number = 0;
    w: number = 250;
    h: number = 300;
    t: number = .5;
    delta: number = .01;
    padding: number = 10;
    points: any = [{x: 10, y: 250}, {x: 0, y: 0}, {x: 100, y: 0}, {x: 200, y: 250}, {x: 225, y: 125}];
    bezier: any = {};
    line: any = d3.svg.line().x(this.x).y(this.y);
    n: number = 4;
    stroke: any = d3.scale.category20b();
    orders: any = d3.range(2, this.n + 2);
    vis: any;

    constructor() {
        this.vis = d3.select("#vis").selectAll("svg")
            .data(this.orders)
            .enter().append("svg")
            .attr("width", this.w + 2 * this.padding)
            .attr("height", this.h + 2 * this.padding)
            .append("g")
            .attr("transform", "translate(" + this.padding + "," + this.padding + ")");
    }


 /*   getLevels(d, t_) {
        if (arguments.length < 2)
            t_ = t;
        var x = [points.slice(0, d)];

        for (var i=1; i<d; i++) {
            x.push(interpolate(x[x.length-1], t_));
        }
        return x;
    }

    interpolate(d, p) {
        if (arguments.length < 2) p = this.t;
        var r = [];
        for (var i=1; i<d.length; i++) {
            var d0 = d[i-1], d1 = d[i];
            r.push({x: d0.x + (d1.x - d0.x) * p, y: d0.y + (d1.y - d0.y) * p});
        }
        return r;
    }

    update() {
        var interpolation = this.vis.selectAll("g")
            .data(function (d) {
                return this.getLevels(d, this.t);
            });
        interpolation.enter().append("g")
            .style("fill", colour)
            .style("stroke", colour);

        var circle = interpolation.selectAll("circle")
            .data(Object);
        circle.enter().append("circle")
            .attr("r", 4);
        circle
            .attr("cx", this.x)
            .attr("cy", this.y);

        var path = interpolation.selectAll("path")
            .data(function (d) {
                return [d];
            });
        path.enter().append("path")
            .attr("class", "line")
            .attr("d", this.line);
        path.attr("d", this.line);

        var curve = this.vis.selectAll("path.curve")
            .data(getCurve);
        curve.enter().append("path")
            .attr("class", "curve");
        curve.attr("d", this.line);

        this.vis.selectAll("text.controltext")
            .attr("x", this.x)
            .attr("y", this.y);
        this.vis.selectAll("text.t")
            .text("t=" + this.t.toFixed(2));
    }
*/
}
