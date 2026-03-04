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
  
	// ต้องเป็นตัวเลข และมากกว่าหรือเท่ากับ 1
	if (isNaN(candi) || candi < 1) {
	  return false;
	} else {
	  return true;
	}
  }
  
  function validateForm(){
	  if(!checkSID()){
		alert("Invalid value for Student ID! (Must be 10 digits)");
		document.getElementById("sid").focus();
		return false;
	  }else{
		  if(!checkCandiNo()){
			alert("Invalid value for Candidate No!!");
			document.getElementById("candi").focus();
			return false;
		  }else{
			  alert("Your input data passes validation!!");
			  return true;
		  }
	  }
  }