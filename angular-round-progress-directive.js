/*!
 * AngularJS Round Progress Directive
 *
 * Copyright 2013 Stephane Begaudeau
 * Released under the MIT license
 */
(function (angular) {
    angular.module("angular.directives-round-progress", [])
    .directive("angRoundProgress", directive);

    directive.$inject = [];
    function directive() {
        return {
            link: linkFn,
            replace: true,
            template: "<canvas></canvas>",
            scope: {
                roundProgressModel: "="
            }
        }
    }

    function linkFn(scope, iElem, iAttr) {
        var outerCircleWidth = iAttr.roundProgressOuterCircleWidth || "20",
            innerCircleWidth = iAttr.roundProgressInnerCircleWidth || "5",

            outerCircleBackgroundColor = iAttr.roundProgressOuterCircleBackgroundColor || "#505769",
            outerCircleForegroundColor = iAttr.roundProgressOuterCircleForegroundColor || "#12eeb9",

            innerCircleColor = iAttr.roundProgressInnerCircleColor || "#505769",
            labelColor = iAttr.roundProgressLabelColor || "#12eeb9",

            outerCircleRadius = iAttr.roundProgressOuterCircleRadius || "100",
            innerCircleRadius = iAttr.roundProgressInnerCircleRadius || "70",

            labelFont = iAttr.roundProgressLabelFont || "50pt Calibri",

            width = iAttr.width,
            height = iAttr.height;

        scope.$watch("roundProgressModel", function (newValue, oldValue) {
            // Create the content of the canvas
            var ctx = iElem[0].getContext("2d");
            ctx.clearRect(0, 0, width, height);

            // The "background" circle
            var x = width / 2;
            var y = height / 2;
            ctx.beginPath();
            ctx.arc(x, y, parseInt(outerCircleRadius), 0, Math.PI * 2, false);
            ctx.lineWidth = parseInt(outerCircleWidth);
            ctx.strokeStyle = outerCircleBackgroundColor;
            ctx.stroke();

            // The inner circle
            ctx.beginPath();
            ctx.arc(x, y, parseInt(innerCircleRadius), 0, Math.PI * 2, false);
            ctx.lineWidth = parseInt(innerCircleWidth);
            ctx.strokeStyle = innerCircleColor;
            ctx.stroke();

            // The inner number
            ctx.font = labelFont;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillStyle = labelColor;
            ctx.fillText(newValue.label, x, y);

            // The "foreground" circle
            var startAngle = -(Math.PI / 2);
            var endAngle = ((Math.PI * 2) * newValue.percentage) - (Math.PI / 2);
            var anticlockwise = false;
            ctx.beginPath();
            ctx.arc(x, y, parseInt(outerCircleRadius), startAngle, endAngle, anticlockwise);
            ctx.lineWidth = parseInt(outerCircleWidth);
            ctx.strokeStyle = outerCircleForegroundColor;
            ctx.stroke();
        }, true);
    }


})(window.angular);
