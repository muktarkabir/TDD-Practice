# TDD-Practice
## Test-Driven Development Practice (JavaScript + Jest)

This project focuses on learning and applying **Test-Driven Development (TDD)** principles using the **Jest** testing framework. It includes a series of small utility functions built and validated through tests.

---

## Objectives

- Learn how to use the **Jest** testing framework  
- Understand and apply **TDD workflow** (Red → Green → Refactor)  
- Practice using **Jest matchers** for writing effective tests  
- Build confidence in writing testable and reliable code  

---

## Concepts Learned

- **Test-Driven Development (TDD):**
  - Writing tests before implementation  
  - Iteratively improving code based on test results  

- **Jest Fundamentals:**
  - Setting up and running test suites  
  - Using matchers like:
    - `toBe`
    - `toEqual`
    - `toContain`
    - `toThrow`

- **Edge Case Handling:**
  - Writing tests for unexpected or boundary inputs  
  - Ensuring robustness of functions  

---

## Installation

### 1. Clone the repository 

```bash
git clone https://github.com/your-username/tdd-practice.git

cd tdd-practice 
```
### 2. Install dependencies

```bash
npm install
```
## Usage
### Run tests with:
```bash
npm test
```

## Project Structure
```
├── README.md
├── package.json
├── package-lock.json
├── babel.config.js
├── src/
│   ├── utilities/
│   │   ├── capitalize.js
│   │   ├── reverseString.js
│   │   └── caesarCipher.js
│   └── tests/
│       ├── capitalize.test.js
│       ├── reverseString.test.js
│       └── caesarCipher.test.js
```