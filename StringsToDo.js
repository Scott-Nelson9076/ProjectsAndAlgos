function removeBlanks(string) {
    var newStrng = ""
    for (var i = 0; i < string.length; i++){
        if (string[i] != " "){
            newStrng += string[i]
        }
    }
    return newStrng
}

console.log(removeBlanks("Hi Im Scotty"))

function getDigits(string){
    var finalNum = ""
    for (var i = 0; i < string.length; i++){
        if(isNaN(string[i]) === false){
            finalNum += string[i]
        }
    }
    var finalNum2 = Number(finalNum)
    return finalNum2
}

console.log(getDigits("abc8c0d1ngd0j0!8"))

function acronyms(string){
    var acronym = ""
    var stringArr = string.split(" ")
    for (word in stringArr){
        if (stringArr[word].length != 0){
            var temp = stringArr[word][0]
            acronym += temp.toUpperCase()
        }
    }
    return acronym
}

console.log(acronyms("Live from New York, it's Saturday Night!"))

function countNonSpaces(string){
    var count = 0
    for (var i = 0; i < string.length; i++){
        if (string[i] != " "){
            count ++
        }
    }
    return count
}

console.log(countNonSpaces("Honey pie, you are driving me crazy"))
console.log(countNonSpaces("Hello world !"))

function removeShorterString(stringArr, num){
    var newStringArr = []
    for (var i = stringArr.length -1 ; i >= 0; i--){
        if (stringArr[i].length >= num){
            newStringArr = [stringArr[i], ...newStringArr]
        }
    }
    return newStringArr
}

console.log(removeShorterString(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4))
console.log(removeShorterString(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3))