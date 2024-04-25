/*
№3. В двумерном массиве хранится информация о зарплате 18 человек за каждый месяц года (за январь 
— в первом столбце, за февраль — во втором и т. д.). Определить общую зарплату, выплаченную в июне.
*/

// Данные о зарплате сотрудников за каждый месяц года
const salaries = [
    [2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500,],
    [2200, 2700, 3200, 3700, 4200, 4700, 5200, 5700, 6200, 6700, 7200, 7700],
    [2400, 2900, 3400, 3900, 4400, 4900, 5400, 5900, 6400, 6900, 7400, 7900],
    [2600, 3100, 3600, 4100, 4600, 5100, 5600, 6100, 6600, 7100, 7600, 8100],
    [2800, 3300, 3800, 4300, 4800, 5300, 5800, 6300, 6800, 7300, 7800, 8300],
    [3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000, 8500],
    [3200, 3700, 4200, 4700, 5200, 5700, 6200, 6700, 7200, 7700, 8200, 8700],
    [3400, 3900, 4400, 4900, 5400, 5900, 6400, 6900, 7400, 7900, 8400, 8900],
    [3600, 4100, 4600, 5100, 5600, 6100, 6600, 7100, 7600, 8100, 8600, 9100],
    [3800, 4300, 4800, 5300, 5800, 6300, 6800, 7300, 7800, 8300, 8800, 9300],
    [4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000, 8500, 9000, 9500],
    [4200, 4700, 5200, 5700, 6200, 6700, 7200, 7700, 8200, 8700, 9200, 9700],
    [4400, 4900, 5400, 5900, 6400, 6900, 7400, 7900, 8400, 8900, 9400, 9900],
    [4600, 5100, 5600, 6100, 6600, 7100, 7600, 8100, 8600, 9100, 9600, 10100],
    [4800, 5300, 5800, 6300, 6800, 7300, 7800, 8300, 8800, 9300, 9800, 10300],
    [5000, 5500, 6000, 6500, 7000, 7500, 8000, 8500, 9000, 9500, 10000, 10500],
    [5200, 5700, 6200, 6700, 7200, 7700, 8200, 8700, 9200, 9700, 10200, 10700],
    [5400, 5900, 6400, 6900, 7400, 7900, 8400, 8900, 9400, 9900, 10400, 10900],
];
  
  // Массив с именами сотрудников
  const nameWork = ["Алиса", "Мария", "Дэвид", "Макс", "Олег", "Виктор", "Александр", "Денис", "Ольга", "Надежда", "Карина", "Марина", "Илья", "Алина", "Кирилл", "Павел", "Джон", "Стэйси"];
  
 // Получаем индекс столбца для июня (июнь - 6-й месяц)
 const juneIndex = '5';

 // Суммируем зарплаты сотрудников за июнь
 let totalJuneSalary = 0;
 for (let i = 0; i < salaries.length; i++) {
  // parseFloat - принимает строку в качестве аргумента и пытается преобразовать ее в число с плавающей точкой
  // представляет собой заработную плату для i-го сотрудника в июне
   totalJuneSalary += parseFloat(salaries[i][juneIndex]);
 }
 // Выводим общую зарплату, выплаченную в июне
 console.log(`Общая зарплата, выплаченная в июне: ${totalJuneSalary}`);

 // Выводим информацию о зарплате каждого сотрудника за каждый месяц года
 for (let i = 0; i < nameWork.length; i++) {
   console.log(`Зарплата сотрудника ${nameWork[i]}:`);
   for (let j = 0; j < salaries[i].length; j++) {
    // salaries[i][j] зарплата текущего сотрудника в текущем периоде
    // ${j + 1} выводит номер столбца в текущей строке
    // также двоеточием отделили номер работника от его зарплаты
    console.log(`  ${j + 1}: ${salaries[i][j]}`);
   }
   // Выводит пустую строку для разделения зарплат разных сотрудников
   console.log();
 }