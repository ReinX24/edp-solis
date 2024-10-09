"use strict";

// Starting point for our jQuery code.
$(document).ready(function () {
	// Check for any errors
	$("#jquery-btn").click(function (e) {
		e.preventDefault();

		let errors = [];

		// Get the form data.
		const studentNumber = $("#student_number").val();
		const studentName = $("#student_name").val();
		const studentCourse = $("#course").val();

		const studentSubject = $("#subject").val();
		const studentGrade = $("#grade").val();

		// Check if any of the form inputs are empty, add error to array.
		if (!studentNumber) {
			errors.push("Student number cannot be empty!");
		}
		if (!studentName) {
			errors.push("Student name cannot be empty!");
		}
		if (!studentCourse) {
			errors.push("Student course cannot be empty!");
		}
		if (!studentSubject) {
			errors.push("Student subject cannot be empty!");
		}
		if (!studentGrade) {
			errors.push("Student grade cannot be empty!");
		}

		// If there are any validation errors, show error messages.
		if (errors.length !== 0) {
			let errorMsg = "";
			for (let error of errors) {
				errorMsg += error + "\n";
			}
			alert(errorMsg);
		} else {
            // If there are no errors, add the student data to the array.
			const tableRow = document.createElement("tr");

			const numberData = document.createElement("td");
			numberData.textContent = studentNumber;

			const nameData = document.createElement("td");
			nameData.textContent = studentName;

			const courseData = document.createElement("td");
			courseData.textContent = studentCourse;

			const subjectData = document.createElement("td");
			subjectData.textContent = studentSubject;

			const gradeData = document.createElement("td");
			gradeData.textContent = studentGrade;

			tableRow.append(numberData);
			tableRow.append(nameData);
			tableRow.append(courseData);
			tableRow.append(subjectData);
			tableRow.append(gradeData);

			$("#table-body").append(tableRow);

			// Reset field values after adding student data.
			$("#student_number").val("");
			$("#student_name").val("");
			$("#course").val("");
			$("#subject").val("");
			$("#grade").val("");
		}
	});
});
