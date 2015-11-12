/**
 * Created by idrenski on 11/11/2015.
 */
var plan =
       ["############################",
        "#      #    #      o      ##",
        "#                          #",
        "#          #####           #",
        "##         #   #    ##     #",
        "###           ##     #     #",
        "#           ###      #     #",
        "#   ####                   #",
        "#   ##       o             #",
        "# o  #         o       ### #",
        "#    #                     #",
        "############################"];

/*
function changeWallChar(element, index, array) {
    //console.log('a[' + index + '] = ' + element.replace(/#/g, '*'));
    array[index] = element.replace(/#/g, '*');
}*/

function replaceChars(map) {

    map.forEach(function (element, index, array) {
        //console.log('a[' + index + '] = ' + element.replace(/#/g, '*'));

        // replace all occurrences in the string. It can be enhanced with RegExp.
        array[index] = element.replace(/#/g, '$').replace(/o/g, 'O');
    });

    return map;
}

console.log(plan);
console.log(replaceChars(plan));
