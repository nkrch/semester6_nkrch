//variables

var template = Handlebars.compile(`
<tr>
<td><p>{{num}}</p></td>
<td><p>{{quant}}</p></td>
<td><p>{{phone}}</p></td>
<td><p>{{classDirector}}</p></td>
</tr>
`);

var templateSelect = Handlebars.compile(`
<option value='{{num}}'>{{num}}</option>
`);

const selectDel = document.getElementById("delete");
const selectAdd = document.getElementById("showOne");

const table = document.getElementsByTagName("table")[0];
let set = new Set();
const formCont = document.getElementById("formCont");

//class data

class StudentClass {
  constructor(num, quant, phone, classDirector) {
    this.num = num;
    this.quant = quant;
    this.phone = phone;
    this.classDirector = classDirector;
  }
}

//some check addition

set.add(
  new StudentClass('5 "А"', 30, "80 (29) 112 54 74", "Иванова Иванка Ивановна")
);

//set making table and options

function formFunc(ev) {
  switch (ev) {
    case "send":
      let num = document.getElementById("num").value,
        quant = document.getElementById("quant").value,
        phone = document.getElementById("phone").value,
        classDirector = document.getElementById("classDirector").value;
      set.add(new StudentClass(num, quant, phone, classDirector));

      table.insertAdjacentHTML(
        "beforeend",
        template({
          num: num,
          quant: quant,
          phone: phone,
          classDirector: classDirector,
        })
      );
      console.log(templateSelect);
      selectAdd.insertAdjacentHTML(
        "beforeend",
        templateSelect({
          num: num,
        })
      );
      selectDel.insertAdjacentHTML(
        "beforeend",
        templateSelect({
          num: num,
        })
      );
      modalClose();
      break;
    case "all":
      table.innerHTML = `<tr>
        <th>№ класса</th>
        <th>Кол-во учащихся</th>
        <th>Телефон</th>
        <th>ФИО классного руководителя</th>
      </tr>`;
      selectAdd.innerHTML = `<option value="choose">Показать класс</option>`;
      selectDel.innerHTML = `<option value="choose">Удалить класс</option>`;
      set.forEach((element) => {
        table.insertAdjacentHTML(
          "beforeend",
          template({
            num: element.num,
            quant: element.quant,
            phone: element.phone,
            classDirector: element.classDirector,
          })
        );
        console.log(templateSelect);
        selectAdd.insertAdjacentHTML(
          "beforeend",
          templateSelect({
            num: element.num,
          })
        );
        selectDel.insertAdjacentHTML(
          "beforeend",
          templateSelect({
            num: element.num,
          })
        );
      });

      break;

    case "reset":
      let inputs = document.getElementsByTagName("input");
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
      }

      break;

    default:
      break;
  }
}

//function for options

function optionFunc(num, ev) {
  switch (ev) {
    case "show":
      set.forEach((element) => {
        if (element.num == num) {
          table.innerHTML =
            ("beforeend",
            `<tr>
        <th>№ класса</th>
        <th>Кол-во учащихся</th>
        <th>Телефон</th>
        <th>ФИО классного руководителя</th>
      </tr>` +
              template({
                num: element.num,
                quant: element.quant,
                phone: element.phone,
                classDirector: element.classDirector,
              }));
        }
        /*console.log(element);*/
      });
      break;
    case "delete":
      set.forEach((element) => {
        if (element.num == num) {
          set.delete(element);
          formFunc("all");
        }
      });

      break;
    default:
      break;
  }
}

//
//start All
formFunc("all");

//set.add(a5);

//сделать ВСЕ кнопки
//ввести данные
//очистить форму
//удалить запись с выбранным айди
