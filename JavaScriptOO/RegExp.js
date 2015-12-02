/**
 * Created by idrenski on 11/19/2015.
 */
/*
 var re1 = new RegExp("abc");
 var re2 = /abc/;

 console.log(re2.test('abcabc'));

 console.log(/[0123456789]/.test("in 1992"));

 var dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
 console.log(dateTime.test("30-1-2003 8:45"));

 var cartoonCrying = /boo+(hoo+)+/i;
 console.log(cartoonCrying.test("Boohoooohooboohoooboo"));

 var match = /\d+/.exec("one two 100");
 console.log(match, [match[0], match.index, match.input].join());

 var quotedText = /'([^']*)'/;
 console.log(quotedText.exec("she said 'hello'"));

 console.log(new Date(2013, 11, 19).getTime());

 console.log(new Date().toJSON());
 console.log(new Date().toISOString());
 console.log(new Date().toUTCString());
 var dMask = /(\w+ \w+ \d{2} \d{4})/;
 var dValue =  Date(); //"Thu Jan 30 2003 00:00:00 GMT+0100 (CET)";
 console.log('source prop', dMask.source);
 console.log(dMask.test(dValue),
 dMask.exec(dValue),
 dValue.replace(/(\w+ \w+ \d{2} \d{4})/, "$4 $2 $3 $1")
 );
 console.log(dValue.replace(/(\w+) (\w+) (\d{2}) (\d{4})/g, "$4-$2-$3, $1"));


 //match loop
 var input = "A string with 3 numbers in it... 42 and 88.";
 var number = /\b(\d+)\b/g;
 var match;
 while (match = number.exec(input))
 {console.log(match);
 //console.log("Found", match[1], "at", match.index);
 }*/

function verify(regexp, yes, no) {
    // Ignore unfinished exercises
    if (regexp.source == "...") return;
    yes.forEach(function (s) {
        if (!regexp.test(s))
            console.log("Failure to match '" + s + "'");
    });
    no.forEach(function (s) {
        if (regexp.test(s))
            console.log("Unexpected match for '" + s + "'");
    });
}


verify(/ ca/,
    ["my car", "bad cats"],
    ["camper", "high art"]);

verify(/.p?op./,
    ["pop culture", "mad props"],
    ["plop"]);

verify(/ferr[^u]/,
    ["ferret", "ferry", "ferrari"],
    ["ferrum", "transfer A"]);

verify(/ de|us /,
    ["how delicious", "spacious room"],
    ["ruinous", "consciousness"]);

verify(/\w{7}/,
    ["hottentottententen"],
    ["no", "hotten totten tenten"]);