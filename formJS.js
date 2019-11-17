// ***** Form Validation
const form = document.getElementById('studentInfoForm')
// Fields
const uid = document.getElementById('uid')
const birthYear = document.getElementById('birthYear')
const gradYear = document.getElementById('gradYear')
const cse = document.getElementById('cse')
const car = document.getElementById('car')
const mobileDevices = document.getElementById('mobileDevices')
const quote = document.getElementById('quote')
const quoteCite = document.getElementById('quoteCite')
// global variable
var invalidAlert = "";

// Validation
function formValidate() {
    valid = true;
    if (uidValidate() == true && birthYearValidate() == true && mobileDevicesValidate() == true
        && quoteValidate() == true && quoteCiteValidate() == true) {
        valid = true;
    } else {
        valid = false;
        alert(invalidAlert);
    }
    return valid;
}

// Validate each field below
function uidValidate() {
    // Make sure uid isn't empty
    if (document.getElementById('uid').value == "") {
        invalidAlert = "";
        invalidAlert += ("Please enter your uid.\n");
        return false;
    }
    // make sure uid is only 1 word >2 characters, of only numbers & letters
    if (/^[a-zA-Z0-9]*$/.test(document.getElementById('uid').value) && (document.getElementById('uid').value.length >= 2)) {
        return true;
    } else {
        invalidAlert = "";
        invalidAlert += ("Your uid may only be 1 word with 2 or more characters & containing only letters & numbers.\n");
        return false;
    }
}
function birthYearValidate() {
    if (/^\d+$/.test(document.getElementById('birthYear').value) && (document.getElementById('birthYear').value.length == 4)) {
        return true;
    } else {
        invalidAlert = "";
        invalidAlert += ("Please enter a valid birth year.\n");
        return false;
    }
}
function mobileDevicesValidate() {
    // You can only own between 1 and 20 mobile devices
    if ((document.getElementById('mobileDevices').value > 1)
        && (document.getElementById('mobileDevices').value < 20)) {
        return true;
    } else {
        invalidAlert = "";
        invalidAlert += ("Please enter a number between 1 and 20 for the amount of mobile devices you own.\n")
        return false;
    }
}
function quoteValidate() {
    // Make sure quote isn't empty
    if (document.getElementById('quote').value == "") {
        invalidAlert = "";
        invalidAlert += ("Please enter a quote.\n");
        return false;
    }
    // quote must contain at least 4 words and no characters other than a-zA-Z0-9 and . , - ' "
    if (/^[a-zA-Z0-9.,'"/ -]*$/.test(document.getElementById('quoteCite').value)) {
        // make sure it has at least 4 words
        var spaceCount = 0;
        for (var i = 0, j = 0; i < document.getElementById('quote').value.length; i++) {
            if (document.getElementById('quote').value[i] == ' ') {
                spaceCount++;
            }
        }
        if (spaceCount >= 3) {   // 4 words detected
            return true;
        } else {
            invalidAlert = "";
            invalidAlert += ("Your quote must include 4 or more words.\n");
            return false;
        }
    } else {
        invalidAlert = "";
        invalidAlert += ("Invalid characters in your quote.\n");
        return false;
    }

    return true;
}
function quoteCiteValidate() {
    // Make sure quoteCite isn't empty
    if (document.getElementById('quoteCite').value == "") {
        invalidAlert = "";
        invalidAlert += ("Please cite your quote.\n");
        return false;
    }
    // quoteCite must contain only a-zA-Z0-9 and . , - ' " / :
    if (/^[a-zA-Z0-9.,'"/:-]*$/.test(document.getElementById('quoteCite').value)) {
        return true;
    } else {
        return false;
    }
}

// Display Date & Time at the bottom
function showDateTime() {
    var d = new Date();
    document.getElementById('dateTime').innerHTML = d;
    var t = setTimeout(showDateTime, 500);
}
