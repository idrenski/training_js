/**
 * Created by idrenski on 11/6/2015.
 */
/* ****************************************************************************************** */
/* Exercise 2 OO JavaScript */

/* Constructor */
function SequenceClass() {
    this.currentPosition = -1;
    this.sequence = [];
}

/* Class */
SequenceClass.prototype = {
    get length() {
        return this.sequence.length;
    },
    get currentPos() {
        return this.currentPosition;
    },
    set currentPos(val) {
        this.currentPosition = val;
    }
};

/* Interfaces */
SequenceClass.prototype.next = function () {

    this.currentPos++;
    if (this.currentPos < this.length) {
        return this.sequence[this.currentPos];
    }
};

/*SequenceClass.prototype.current = function () {

 return this.sequence[this.currentPos];
 };*/

/* Functions which use Instances of SequenceClass*/
function ArraySeq(arr) {
    var myArrayObj = new SequenceClass();

    var b = arr[0];
    var e = arr[arr.length - 1];

    for (var i = b; i <= e; i++)
        myArrayObj.sequence.push(i);

    return myArrayObj;
}

function RangeSeq(b, e) {
    var myRangeSeq = new SequenceClass();

    for (var i = b; i <= e; i++)
        myRangeSeq.sequence.push(i);

    return myRangeSeq;
}

function logFive(SequenceObj) {

    while (SequenceObj.currentPos < SequenceObj.length - 1 && SequenceObj.currentPos < 4)
        console.log(SequenceObj.next());

}
logFive(new ArraySeq([1, 3]));
logFive(new RangeSeq(100, 1000));



