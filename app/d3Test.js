"use strict";
/**
 * Created by conviva on 10/2/16.
 */
var d3 = require('d3');
var D3Test = (function () {
    function D3Test() {
        this.x = 0;
        this.y = 0;
        this.w = 250;
        this.h = 300;
        this.t = .5;
        this.delta = .01;
        this.padding = 10;
        this.points = [{ x: 10, y: 250 }, { x: 0, y: 0 }, { x: 100, y: 0 }, { x: 200, y: 250 }, { x: 225, y: 125 }];
        this.bezier = {};
        this.line = d3.svg.line().x(this.x).y(this.y);
        this.n = 4;
        this.stroke = d3.scale.category20b();
        this.orders = d3.range(2, this.n + 2);
        this.vis = d3.select("#vis").selectAll("svg")
            .data(this.orders)
            .enter().append("svg")
            .attr("width", this.w + 2 * this.padding)
            .attr("height", this.h + 2 * this.padding)
            .append("g")
            .attr("transform", "translate(" + this.padding + "," + this.padding + ")");
    }
    return D3Test;
}());
//# sourceMappingURL=d3Test.js.map