/*
Você deve criar um sistema para calcular o salário líquido de um funcionário. O salário líquido de um
funcionário é seu salário bruto, subtraído do imposto e do desconto de previdência. As regras de
imposto e previdência são:
Imposto: 20% do salário bruto
Previdência: 10% do salário bruto

ENTRADA 
Joaquim
4000.00

SAÍDA

Funcionário = Joaquim
Salário bruto = 4000.00
Salário líquido = 2800.00

*/



import * as salaryService from "./services/salary-service.js";

import Employee from "./models/employee.js";

const data = document.getElementById("grossSalaryInput").innerHTML.split("\n");

const employee = new Employee(data[0], Number(data[1]));

const netSalary = salaryService.netSalary(employee);

console.log(`Funcionário = ${employee.name}`);
console.log(`Salário bruto = ${employee.grossSalary.toFixed(2)}`);
console.log(`Salário líquido = ${netSalary.toFixed(2)}`);