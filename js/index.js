$(document).ready(function () {
  const treeData = [
    {
      image:
        "https://mir-cdn.behance.net/v1/rendition/project_modules/1400_opt_1/e2360545048867.582562e85b60c.png",
      header: "this is header",
      subheader: "this is sub header",
      children: [
        {
          action: {
            action_number: "421524567",
            status: "in_progress",
            time: "time",
            date: "02.03.2020",
          },
          image:
            "https://mir-cdn.behance.net/v1/rendition/project_modules/1400_opt_1/e2360545048867.582562e85b60c.png",
          header: "this is header",
          subheader: "this is sub header",
          children: [
            {
              action: {
                action_number: "421524567",
                status: "in_progress",
                time: "time",
                date: "02.03.2020",
              },
              image:
                "https://mir-cdn.behance.net/v1/rendition/project_modules/1400_opt_1/e2360545048867.582562e85b60c.png",
              header: "this is header",
              subheader: "this is sub header",
              children: [
                {
                  action: {
                    action_number: "421524567",
                    status: "in_progress",
                    time: "time",
                    date: "02.03.2020",
                  },
                  image:
                    "https://mir-cdn.behance.net/v1/rendition/project_modules/1400_opt_1/e2360545048867.582562e85b60c.png",
                  header: "this is header",
                  subheader: "this is sub header",
                },
              ],
            },
          ],
        },
        {
          action: {
            action_number: "421524567",
            status: "in_progress",
            time: "time",
            date: "02.03.2020",
          },
          image:
            "https://mir-cdn.behance.net/v1/rendition/project_modules/1400_opt_1/e2360545048867.582562e85b60c.png",
          header: "this is header",
          subheader: "this is sub header",
          children: [
            {
              action: {
                action_number: "421524567",
                status: "in_progress",
                time: "time",
                date: "02.03.2020",
              },
              image:
                "https://mir-cdn.behance.net/v1/rendition/project_modules/1400_opt_1/e2360545048867.582562e85b60c.png",
              header: "this is header",
              subheader: "this is sub header",
            },
          ],
        },
        {
          action: {
            action_number: "421524567",
            status: "in_progress",
            time: "time",
            date: "02.03.2020",
          },
          image:
            "https://mir-cdn.behance.net/v1/rendition/project_modules/1400_opt_1/e2360545048867.582562e85b60c.png",
          header: "this is header",
          subheader: "this is sub header",
        },
      ],
    },
  ];

  const treeBox = $(".tree-box");

  const createChild = (child) => {
    let childrenBox = [];
    let childCount = [];
    child.map((item, index) => {
      let divMainBox = $(
        `<div class="child-box-inner ml-5 my-4"> <span class="left-border-line" style="height:${
          child.length > 1 ? "130%" : "140px"
        }">  </span>    </div>`
      );
      let children = "";
      divMainBox.append(
        `<div class="top-info d-flex justify-content-between p-3 my-2 rounded" style="background-color: #F5FCFF;">` +
          `<p>421245678</p>` +
          `<div class="d-flex align-items-center">` +
          `<div class="inprogress"></div>` +
          `<p>in progress</p>` +
          `</div>` +
          `</div>` +
          `<div class="d-flex px-1 my-2">` +
          `<div class="time d-flex align-items-center">` +
          `<i class="far fa-clock mr-2"></i>` +
          `<p>time</p>` +
          `</div>` +
          `<div class="date ml-3 d-flex align-items-center">` +
          `<i class="fas fa-calendar-alt mr-2"></i>` +
          `<p>02.06.2020</p>` +
          `</div>` +
          `</div>` +
          `<div class="inner-box d-flex align-content-center align-items-center">` +
          `<div class="user-image">` +
          `<span class="left-line" style="width:${23}px"></span>` +
          `<img class="m-0" src="${item.image}" style="object-fit: cover; width: 50px; height: 50px; border-radius: 50%; border: 2px solid lightgrey;" alt="">` +
          //   `<span class="under-line"></span>` +
          `</div>` +
          `<div class="right-info ml-3">` +
          `<h4>${item.header}</h4>` +
          `<p class="text-muted">${item.subheader}</p>` +
          `</div>` +
          `</div>`
      );

      if (item.children) {
        children = createChild(item.children);
        childCount.push(item.children.length);
      }

      divMainBox.append(children);

      childrenBox.push(divMainBox);
    });
    console.log(childCount);

    return childrenBox;
  };

  const createTree = (treeData) => {
    let divMainBox = $('<div class="child-box">  </div>');
    let childCount = [];
    treeData.map((item, index) => {
      let children = [];
      divMainBox.append(
        `<div class="inner-box d-flex align-content-center align-items-center">` +
          `<div class="user-image">` +
          `<img class="m-0" src="${item.image}" style="object-fit: cover; width: 50px; height: 50px; border-radius: 50%; border: 2px solid lightgrey;" alt="">` +
          `<span class="under-line" style="height:${0}px"  ></span>` +
          `</div>` +
          `<div class="right-info ml-3">` +
          `<h4>${item.header}</h4>` +
          `<p class="text-muted">${item.subheader}</p>` +
          `</div>` +
          `</div>`
      );
      if (item.children) {
        children = createChild(item.children);
        childCount.push(item.children.length);
      }
      children.map((item) => {
        divMainBox.append(item);
      });
    });
    treeBox.append(divMainBox);
    console.log(childCount);
  };
  createTree(treeData);

  //   let childCount = document.querySelectorAll(".child-box");

  console.log(treeData);

  const accordion = $(".acc-top");

  $(accordion).click(function () {
    $(this).next().slideToggle(500);
    accordion.not(this).next().slideUp(500);
    $(this).children("i").toggleClass("angle-down");
    accordion.not(this).children("i").removeClass("angle-down");
  });

  let start, end, startArray, endArray;

  $("#start").change(function (e) {
    e.preventDefault();
    start = e.target.value.split("-");
    startArray = start.map((element) => parseInt(element));
    console.log(startArray);
  });

  $("#end").change(function (e) {
    e.preventDefault();
    end = e.target.value.split("-");
    endArray = end.map((element) => parseInt(element));
    console.log(endArray);

    if (endArray[0] < startArray[0]) {
      alert("yil kichkina");
    } else if (endArray[1] < startArray[1]) {
      alert("oy kichkina");
    } else if (endArray[2] <= startArray[2]) {
      alert("kun kichkina");
    } else {
      alert("hammasi joyida");
    }
  });

  // Quil Text Editor

  var quill = new Quill("#editor", {
    placeholder: "Compose an epic...",
    theme: "snow",
  });

  // Multiple images preview in browser
  var imagesPreview = function (input, placeToInsertImagePreview) {
    if (input.files) {
      var filesAmount = input.files.length;

      for (const index in input.files) {
        if (Object.hasOwnProperty.call(input.files, index)) {
          const element = input.files[index];
          console.log(element);
        }
      }

      for (i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        reader.onload = function (event) {
          $($.parseHTML("<img>"))
            .attr({
              src: event.target.result,
            })
            .appendTo(placeToInsertImagePreview);
        };
        reader.readAsDataURL(input.files[i]);
      }
    }
  };

  $("#gallery-photo-add").on("change", function () {
    imagesPreview(this, "div.gallery");
  });

  // Drag and Drop

  const dragAndDrop = () => {
    const cards = document.querySelectorAll(".drag_body_inner_item");
    const columns = document.querySelectorAll(".drag_column_body");

    var card_item;

    const dragStart = function () {
      card_item = this;

      setTimeout(() => {
        this.classList.add("hide_card");
      }, 0);
    };

    const dragEnd = function () {
      card_item = null;
      setTimeout(() => {
        this.classList.remove("hide_card");
      }, 0);
    };

    cards.forEach((card) => {
      card.addEventListener("dragstart", dragStart);
      card.addEventListener("dragend", dragEnd);
    });

    const dragOver = function (e) {
      e.preventDefault();
      console.log("over");
    };

    const dragEnter = function () {
      console.log("enter");

      // this.parentElement.classList.add( 'hovered_card' );
    };

    const dragLeave = function () {
      console.log("leave");

      // this.parentElement.classList.remove( 'hovered_card' );
    };

    const dragDrop = function (e) {
      console.log(e);

      this.append(card_item);
    };

    columns.forEach((column) => {
      column.addEventListener("dragover", dragOver);
      column.addEventListener("dragenter", dragEnter);
      column.addEventListener("dragleave", dragLeave);
      column.addEventListener("drop", dragDrop);
    });
  };

  dragAndDrop();

  // add table

  const inputs = document.querySelectorAll(".modal-table-input");

  const addBtn = document.querySelector(".add-btn");

  let addData = [];

  const addDataTable = function () {
    const tableTrs = document.querySelectorAll(".table-tr");
    const numbers = [];
    const data = [];

    // $('#myTable > tbody:last-child').append('<tr>...</tr><tr>...</tr>');
    inputs.forEach((input, index) => {
      data[index] = input.value;
      addData.push({
        [input.name]: input.value,
      });
    });

    console.log(addData);

    tableTrs.forEach((tableTr, index) => {
      numbers[index] = index + 1;
    });

    $(".top-table > tbody:last-child").append(` <tr class="table-tr">
        <th scope="row"> ${numbers[numbers.length - 1] + 1} </th>

        <td> ${data[0]} </td>
        <td>${data[1]} </td>
        <td>${data[2]}</td>

        <td class="d-flex justify-content-end"> <button type="button" class="btn btn-primary mr-2">
          <i class="far fa-edit color-white font-weight-bold"></i>
        </button>
            <button type="button" class="btn btn-primary btn-remove">
              <i class="fas fa-times color-white font-weight-bold "></i>
        </button> </td>
    </tr>`);
  };

  addBtn.addEventListener("click", addDataTable);

  let fruits = [];

  fruits.push({
    name: "hello",
    lastName: "world",
  });

  console.log(fruits);
});
