# ES2015 Задачи

## Async Execution and Promises

1. Направете функция която изчаква 1000ms след което записва във файл произволен стринг. След това изчаква още 1000ms и записва в друг файл отново произволен стринг. След още 1000ms изчакване отваря първия файл, отново изчаква 1000ms, отваря втория файл, изчаква отново 1000ms и накрая записва в трети файл конкатениран резултатa от четенето на двата предходни файла. 
Използвайте функции [writeFile](https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback) и [readFile](https://nodejs.org/api/fs.html#fs_fs_readfile_file_options_callback) и _не използвайте_ Promises.

1. Направете предната задача използвайки Promises

1. Използвайте примера за httpGet oт първия час и напишете генератор на произволни имена на класове за браузъра. За целта вземете имена на класове от [ClassNamer](http://www.classnamer.com/) - подайте http request към адрес http://www.classnamer.com/index.txt?generator=generic.

1. Напишете функция simulateDocs, която ще ви помогне да симулирате, че сте написали документация за кода си. Тя трябва да използва генератора от предната задача, за да получи произволни имена на класове и при последващи извиквания да връща стрингoве:
simulateDocs() -> "ClassName1 extends ClassName2"
simulateDocs() -> "ClassName1 extends ClassName2 extends ClassName3"
...
ClassName1,..N са върнати от генератора имена и при всяко следващо извикване функцията simulateDocs върнатият стринг е продължение на този от предходното извикване. При повече от 5 извиквания функцията трябва да спре да връща резултат.
