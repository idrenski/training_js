/**
 * Created by idrenski on 11/6/2015.
 */
/* ****************************************************************************************** */
/* Exercise 2 OO JavaScript */

/* Constructor */
function SequenceClass() {
    this.currentPosition = 0;
}

/* Class */
SequenceClass.prototype = {
    sequence: [],
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

    if (this.currentPos < this.length) {
        this.currentPos = this.currentPos + 1;
        return this.sequence[this.currentPos];
    }
    else
        return null;
};

SequenceClass.prototype.current = function () {

    return this.sequence[this.currentPos];
};

/* Functions which use Instances of SequenceClass*/
function ArraySeq(arr) {
    var myArrayObj = new SequenceClass();
    myArrayObj.sequence = arr;

    return myArrayObj;
}


function RangeSeq(b, e) {
    var myRangeSeq = new SequenceClass();

    for (var i = b; i <= e; i++)
        myRangeSeq.sequence.push(i);

    return myRangeSeq;
}

function logFive(SequenceObj) {

    do {
        console.log(SequenceObj.current());
        SequenceObj.next();
        if (SequenceObj.currentPos >= 5)
            break;
    }
    while (SequenceObj.currentPos < SequenceObj.length);

}
logFive(new ArraySeq([1, 2]));
logFive(new RangeSeq(100, 1000));


/*function ArraySeqV(arr) {
 var myArrayObj = new SequenceClass();

 myArrayObj.sequence = arr;

 /!* next line is for debug *!/
 console.log('arrayLength-', myArrayObj.length, 'currentValue-', myArrayObj.current(), 'nextTwoValues-', myArrayObj.next(), myArrayObj.next());

 return myArrayObj.sequence;
 }


 function RangeSeqV(b, e) {
 var myRangeSeq = new SequenceClass();

 for (var i = b; i <= e; i++)
 myRangeSeq.sequence.push(i);

 /!* next two lines are for debug *!/
 myRangeSeq.next();
 console.log('arrayLength-', myRangeSeq.length, 'currentValue-', myRangeSeq.current(), 'nextTwoValues-', myRangeSeq.next(), myRangeSeq.next());

 return myRangeSeq.sequence;
 }

 console.log(new ArraySeqV([1, 2]));
 console.log(new RangeSeqV(111, 122));
 */

