// utility function area

function getInputField(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  if (inputFieldValueString === "" || inputFieldValueString === null) {
    return "";
  }
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = "";
  return inputFieldValue;
}

function getTextElement(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValue = textElement.innerText;
  return textElementValue;
}

let counter = 0;

function setElement(Name, Area) {
  counter++;
  const tableContainer = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${counter}.</td>
    <td>${Name} </td>
    <td>${Area}<span>cm<sup>2</sup></span></td>
    <td><button>Convert to m<sup>2</sup></button></td>
    `;
  tableContainer.appendChild(tr);
}

function inputValidation(inputA, inputB) {
  if (inputA === "" || inputB === "") {
    alert("Please put an input then click!!!");
    return false;
  } else if (isNaN(inputA) || isNaN(inputB)) {
    alert("Please provide a valid number, not text!!!");
    return false;
  } else if (inputA < 0 || inputB < 0) {
    alert("Please provide a positive number!!!");
    return false;
  } else {
    return true;
  }
}

function triangleRhombusPentagonArea(a, b) {
  const area = 0.5 * a * b;
  return area.toFixed(2);
}

function rectangleParallelogramArea(a, b) {
  const area = a * b;
  return area.toFixed(2);
}

function ellipseArea(a, b) {
  const area = 3.1416 * a * b;
  return area.toFixed(2);
}

// event handling area

document.getElementById("btn-blog").addEventListener("click", function () {
  window.location.href = "answers.html";
});

document
  .getElementById("calculate-triangle")
  .addEventListener("click", function () {
    const triangleB = getInputField("triangle-b");
    const triangleH = getInputField("triangle-h");
    const triangleTitle = getTextElement("triangle");
    const isValid = inputValidation(triangleB, triangleH);
    if (!isValid) {
      return;
    }
    const triangleArea = triangleRhombusPentagonArea(triangleB, triangleH);
    setElement(triangleTitle, triangleArea);
  });

document
  .getElementById("calculate-rectangle")
  .addEventListener("click", function () {
    const rectangleW = getInputField("rectangle-w");
    const rectangleL = getInputField("rectangle-l");
    const rectangleTitle = getTextElement("rectangle");
    const isValid = inputValidation(rectangleW, rectangleL);
    if (!isValid) {
      return;
    }
    const rectangleArea = rectangleParallelogramArea(rectangleW, rectangleL);
    setElement(rectangleTitle, rectangleArea);
  });

document
  .getElementById("calculate-parallelogram")
  .addEventListener("click", function () {
    const parallelogramB = getInputField("parallelogram-b");
    const parallelogramL = getInputField("parallelogram-h");
    const parallelogramTitle = getTextElement("parallelogram");
    const isValid = inputValidation(parallelogramB, parallelogramL);
    if (!isValid) {
      return;
    }

    const parallelogramArea = rectangleParallelogramArea(
      parallelogramB,
      parallelogramL
    );

    setElement(parallelogramTitle, parallelogramArea);
  });

document
  .getElementById("calculate-rhombus")
  .addEventListener("click", function () {
    const rhombusD1 = getInputField("rhombus-d1");
    const rhombusD2 = getInputField("rhombus-d2");
    const rhombusTitle = getTextElement("rhombus");
    const isValid = inputValidation(rhombusD1, rhombusD2);
    if (!isValid) {
      return;
    }
    const rhombusArea = triangleRhombusPentagonArea(rhombusD1, rhombusD2);
    setElement(rhombusTitle, rhombusArea);
  });

document
  .getElementById("calculate-pentagon")
  .addEventListener("click", function () {
    const pentagonP = getInputField("pentagon-p");
    const pentagonB = getInputField("pentagon-b");
    const pentagonTitle = getTextElement("pentagon");
    const isValid = inputValidation(pentagonP, pentagonB);
    if (!isValid) {
      return;
    }
    const pentagonArea = triangleRhombusPentagonArea(pentagonP, pentagonB);
    setElement(pentagonTitle, pentagonArea);
  });

document
  .getElementById("calculate-ellipse")
  .addEventListener("click", function () {
    const ellipseA = getInputField("ellipse-a");
    const ellipseB = getInputField("ellipse-b");
    const ellipseTitle = getTextElement("ellipse");
    const isValid = inputValidation(ellipseA, ellipseB);
    if (!isValid) {
      return;
    }
    const ellipseArea = triangleRhombusPentagonArea(ellipseA, ellipseB);
    setElement(ellipseTitle, ellipseArea);
  });
