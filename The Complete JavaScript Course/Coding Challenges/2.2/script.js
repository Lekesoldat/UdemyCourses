var years = [1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005];

var emptyArr = new Array(0);


function printFullAge(yearList) {
    var emptyArr = new Array();

    for (i = 0; i < yearList.length; i++) {
        emptyArr.push(2018 - yearList[i] >= 18);
    }

    return emptyArr;
}

console.log(printFullAge(years));