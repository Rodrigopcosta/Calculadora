// Calculator State
let currentValue = "0"
let previousValue = ""
let operation = null
let shouldResetScreen = false
let isScientificMode = false

// DOM Elements
const resultDisplay = document.getElementById("result")
const expressionDisplay = document.getElementById("expression")
const basicModeBtn = document.getElementById("basicMode")
const scientificModeBtn = document.getElementById("scientificMode")
const basicButtons = document.getElementById("basicButtons")
const scientificButtons = document.getElementById("scientificButtons")

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners()
  setupKeyboardSupport()
  updateDisplay()
})

// Setup Event Listeners
function setupEventListeners() {
  // Mode toggle
  basicModeBtn.addEventListener("click", () => switchMode("basic"))
  scientificModeBtn.addEventListener("click", () => switchMode("scientific"))

  // Button clicks
  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", handleButtonClick)
  })
}

// Switch Calculator Mode
function switchMode(mode) {
  if (mode === "basic") {
    isScientificMode = false
    basicModeBtn.classList.add("active")
    scientificModeBtn.classList.remove("active")
    basicButtons.style.display = "grid"
    scientificButtons.style.display = "none"
  } else {
    isScientificMode = true
    scientificModeBtn.classList.add("active")
    basicModeBtn.classList.remove("active")
    basicButtons.style.display = "none"
    scientificButtons.style.display = "grid"
  }
}

// Handle Button Clicks
function handleButtonClick(e) {
  const button = e.target
  const value = button.dataset.value
  const action = button.dataset.action

  if (value !== undefined) {
    handleNumber(value)
  } else if (action) {
    handleAction(action)
  }
}

// Handle Number Input
function handleNumber(num) {
  if (shouldResetScreen) {
    currentValue = ""
    shouldResetScreen = false
  }

  if (num === "." && currentValue.includes(".")) return
  if (currentValue === "0" && num !== ".") {
    currentValue = num
  } else {
    currentValue += num
  }

  updateDisplay()
}

// Handle Actions
function handleAction(action) {
  switch (action) {
    case "clear":
      clear()
      break
    case "delete":
      deleteLastChar()
      break
    case "percentage":
      percentage()
      break
    case "calculate":
      calculate()
      break
    case "sin":
      scientificOperation("sin")
      break
    case "cos":
      scientificOperation("cos")
      break
    case "tan":
      scientificOperation("tan")
      break
    case "log":
      scientificOperation("log")
      break
    case "ln":
      scientificOperation("ln")
      break
    case "sqrt":
      scientificOperation("sqrt")
      break
    case "pow":
      scientificOperation("pow")
      break
    case "exp":
      scientificOperation("exp")
      break
    case "pi":
      insertConstant(Math.PI)
      break
    case "e":
      insertConstant(Math.E)
      break
  }
}

// Clear Calculator
function clear() {
  currentValue = "0"
  previousValue = ""
  operation = null
  expressionDisplay.textContent = ""
  updateDisplay()
}

// Delete Last Character
function deleteLastChar() {
  if (currentValue.length === 1) {
    currentValue = "0"
  } else {
    currentValue = currentValue.slice(0, -1)
  }
  updateDisplay()
}

// Calculate Percentage
function percentage() {
  currentValue = (Number.parseFloat(currentValue) / 100).toString()
  updateDisplay()
}

// Set Operation
function setOperation(op) {
  if (operation !== null) {
    calculate()
  }
  previousValue = currentValue
  operation = op
  expressionDisplay.textContent = `${previousValue} ${getOperatorSymbol(op)}`
  shouldResetScreen = true
}

// Calculate Result
function calculate() {
  if (operation === null || shouldResetScreen) return

  const prev = Number.parseFloat(previousValue)
  const current = Number.parseFloat(currentValue)

  if (isNaN(prev) || isNaN(current)) return

  let result
  switch (operation) {
    case "+":
      result = prev + current
      break
    case "-":
      result = prev - current
      break
    case "*":
      result = prev * current
      break
    case "/":
      if (current === 0) {
        alert("Erro: Divisão por zero!")
        clear()
        return
      }
      result = prev / current
      break
    default:
      return
  }

  currentValue = formatResult(result)
  operation = null
  previousValue = ""
  expressionDisplay.textContent = ""
  shouldResetScreen = true
  updateDisplay()
}

// Scientific Operations
function scientificOperation(op) {
  const value = Number.parseFloat(currentValue)
  let result

  switch (op) {
    case "sin":
      result = Math.sin(value)
      break
    case "cos":
      result = Math.cos(value)
      break
    case "tan":
      result = Math.tan(value)
      break
    case "log":
      result = Math.log10(value)
      break
    case "ln":
      result = Math.log(value)
      break
    case "sqrt":
      result = Math.sqrt(value)
      break
    case "pow":
      result = Math.pow(value, 2)
      break
    case "exp":
      result = Math.exp(value)
      break
  }

  currentValue = formatResult(result)
  shouldResetScreen = true
  updateDisplay()
}

// Insert Constant
function insertConstant(value) {
  currentValue = formatResult(value)
  shouldResetScreen = true
  updateDisplay()
}

// Format Result
function formatResult(result) {
  if (result.toString().length > 12) {
    return result.toExponential(6)
  }
  return result.toString()
}

// Get Operator Symbol
function getOperatorSymbol(op) {
  const symbols = {
    "+": "+",
    "-": "−",
    "*": "×",
    "/": "÷",
  }
  return symbols[op] || op
}

// Update Display
function updateDisplay() {
  resultDisplay.value = currentValue
}

// Keyboard Support
function setupKeyboardSupport() {
  document.addEventListener("keydown", (e) => {
    if (e.key >= "0" && e.key <= "9") {
      handleNumber(e.key)
    } else if (e.key === ".") {
      handleNumber(".")
    } else if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
      setOperation(e.key)
    } else if (e.key === "Enter" || e.key === "=") {
      e.preventDefault()
      calculate()
    } else if (e.key === "Escape") {
      clear()
    } else if (e.key === "Backspace") {
      e.preventDefault()
      deleteLastChar()
    } else if (e.key === "%") {
      percentage()
    }
  })
}

// Delegate operator buttons to setOperation
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("operator")) {
    const value = e.target.dataset.value
    if (value) {
      setOperation(value)
    }
  }
})
