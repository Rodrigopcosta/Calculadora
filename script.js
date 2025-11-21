// Calculator State
let currentValue = "0"
let previousValue = ""
let operation = null
let shouldResetScreen = false
let isScientificMode = false
const calculationHistory = []

// DOM Elements
const resultDisplay = document.getElementById("result")
const expressionDisplay = document.getElementById("expression")
const historyDisplay = document.getElementById("history")
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

  // Button clicks - attach to all .btn but prioritize operator class
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
  const button = e.target.closest(".btn") || e.target
  if (!button) return

  // If it's an operator button (has class 'operator'), handle operation first
  if (button.classList.contains("operator")) {
    const opValue = button.dataset.value
    if (opValue) {
      setOperation(opValue)
    }
    return
  }

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
  // If we just completed an operation and flagged to reset screen,
  // starting to type a number should replace the display.
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
  shouldResetScreen = false

  // Limpa também o histórico:
  calculationHistory.length = 0
  updateHistory()

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

// --------------------------------------------------------------
// 🔧 SET OPERATION (TRECHO ALTERADO PEDIDO POR VOCÊ)
// --------------------------------------------------------------
function setOperation(op) {
  // Se operador já existia e usuário ainda não digitou segundo número,
  // apenas trocamos o operador e mostramos no visor
  if (operation !== null && shouldResetScreen) {
    operation = op
    expressionDisplay.textContent = `${previousValue} ${getOperatorSymbol(op)}`
    currentValue = op
    updateDisplay()
    return
  }

  // Se já tinha operação e usuário digitou o segundo número → calcula antes
  if (operation !== null) {
    calculate()
  }

  previousValue = currentValue
  operation = op

  // Atualiza expressão acima
  expressionDisplay.textContent = `${previousValue} ${getOperatorSymbol(op)}`

  // MOSTRAR O OPERADOR NO VISOR
  currentValue = op
  updateDisplay()

  // O próximo número substitui o operador
  shouldResetScreen = true
}
// --------------------------------------------------------------


// Calculate Result
function calculate() {
  // If no operation or user hasn't typed the second number yet, do nothing
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

  // push to history
  const historyEntry = `${previousValue} ${getOperatorSymbol(operation)} ${currentValue} = ${formatResult(result)}`
  calculationHistory.push(historyEntry)
  if (calculationHistory.length > 10) calculationHistory.shift()
  updateHistory()

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
  if (isNaN(value)) return
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
    default:
      return
  }

  const historyEntry = `${op}(${currentValue}) = ${formatResult(result)}`
  calculationHistory.push(historyEntry)
  if (calculationHistory.length > 10) calculationHistory.shift()
  updateHistory()

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
  if (resultDisplay) {
    if (resultDisplay.tagName === "INPUT" || resultDisplay.tagName === "TEXTAREA") {
      resultDisplay.value = currentValue
    } else {
      resultDisplay.textContent = currentValue
    }
  }
}

function updateHistory() {
  if (!historyDisplay) return
  historyDisplay.textContent = calculationHistory.join(" | ")
}

// Keyboard Support
function setupKeyboardSupport() {
  document.addEventListener("keydown", (e) => {
    if (e.key >= "0" && e.key <= "9") {
      handleNumber(e.key)
    } else if (e.key === ".") {
      handleNumber(".")
    } else if (["+", "-", "*", "/"].includes(e.key)) {
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
