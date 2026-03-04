function checkSID() {
	let sid = (document.getElementById("sid").value).trim();

	// ต้องยาว 10 ตัว และเป็นตัวเลข 0-9 เท่านั้น
	let sidPattern = /^[0-9]{10}$/;

	if (sidPattern.test(sid)) {
		return true;
	} else {
		return false;
	}
}

function checkCandiNo() {
	let candi = (document.getElementById("candi").value).trim();

	// ต้องเป็นตัวเลขจำนวนเต็ม 1 ถึง 10 เท่านั้น
	let candiPattern = /^(10|[1-9])$/;

	if (candiPattern.test(candi)) {
		return true;
	} else {
		return false;
	}
}

function validateForm(){
	if(!checkSID()){
		alert("Invalid value for Student ID! (Must be 10 digits)");
		document.getElementById("sid").focus();
		return false;
	}else{
		if(!checkCandiNo()){
			alert("Invalid value for Candidate No!! (Must be integer 1-10)");
			document.getElementById("candi").focus();
			return false;
		}else{
			alert("Your input data passes validation!!");
			return true;
		}
	}
}