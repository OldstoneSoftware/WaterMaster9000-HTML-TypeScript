//table
        //table create
        let table: HTMLTableElement = document.createElement("table");
        table.setAttribute("class", "table table-striped table-bordered");


        //table collums
        let tabaleThead: HTMLTableSectionElement = document.createElement("thead"); // thead requered for bootstrap

        let tablecolumnRow: HTMLTableRowElement = document.createElement("tr"); //row til columns

        let tablecolumn0: HTMLTableHeaderCellElement = document.createElement("th"); // paragraph column
        tablecolumn0.innerHTML = "Titler";
        
        let tablecolumn1: HTMLTableHeaderCellElement = document.createElement("th"); // input column
        tablecolumn1.innerHTML = "Input";


        // table tbody (used by bootstrap)
        let tabletbody: HTMLTableSectionElement = document.createElement("tbody");

        // table row
        let tableRow0 : HTMLTableRowElement = document.createElement("tr");
        tableRow0.setAttribute("id", "row0"); 
        
        let tableRow1 : HTMLTableRowElement = document.createElement("tr");
        tableRow1.setAttribute("id", "row1"); 

        let tableRow2 : HTMLTableRowElement = document.createElement("tr");
        tableRow2.setAttribute("id", "row2"); 


        // table name
        let tableRowName : HTMLTableDataCellElement = document.createElement("td")
        tableRowName.setAttribute("id", "rowName" + this.sensorID.toString());
        tableRowName.innerHTML = "Navn: ";

        let tableRowNameTd: HTMLTableDataCellElement = document.createElement("td");

        // input name
        let tableRowNameInput : HTMLInputElement = document.createElement("input");
        tableRowNameInput.setAttribute("id", "rowNameInput");
        tableRowNameInput.setAttribute("class", "form-control");
        tableRowNameInput.setAttribute("placeholder", "indtast navn her");
        tableRowNameInput.value = sensor.name;

        // table lower
        let tableRowLower : HTMLTableDataCellElement = document.createElement("td");
        tableRowLower.setAttribute("id", "rowLower" + this.sensorID.toString());
        tableRowLower.innerHTML = "Nedre grænse: ";

        let tableRowLowerTd: HTMLTableDataCellElement = document.createElement("td");

        // input lower
        let tableRowLowerInput : HTMLInputElement = document.createElement("input");
        tableRowLowerInput.setAttribute("id", "rowLowerInput");
        tableRowLowerInput.setAttribute("class", "form-control");
        tableRowLowerInput.setAttribute("placeholder", "indtast laveste grænse her");
        tableRowLowerInput.value = sensor.limitLow;

        // table upper
        let tableRowUpper : HTMLTableDataCellElement = document.createElement("td");
        tableRowUpper.setAttribute("id", "rowUpper" + this.sensorID.toString());
        tableRowUpper.innerHTML = "Øvre grænse: ";

        let tableRowUpperTd: HTMLTableDataCellElement = document.createElement("td");

        // input Upper
        let tableRowUpperInput : HTMLInputElement = document.createElement("input");
        tableRowUpperInput.setAttribute("id", "rowUpperInput");
        tableRowUpperInput.setAttribute("class", "form-control");
        tableRowUpperInput.setAttribute("placeholder", "indtast øvre grænse her");
        tableRowUpperInput.value = sensor.limitUp;

        // table append
        cardBody.appendChild(table);

        table.appendChild(tabaleThead);
        tabaleThead.appendChild(tablecolumnRow);
        tablecolumnRow.appendChild(tablecolumn0);
        tablecolumnRow.appendChild(tablecolumn1);

        table.appendChild(tabletbody);

        tabletbody.appendChild(tableRow0);

        tableRow0.appendChild(tableRowName);
        tableRow0.appendChild(tableRowNameTd);
        tableRowNameTd.appendChild(tableRowNameInput);

        tabletbody.appendChild(tableRow1);

        tableRow1.appendChild(tableRowLower);
        tableRow1.appendChild(tableRowLowerTd);
        tableRowLowerTd.appendChild(tableRowLowerInput);

        tabletbody.appendChild(tableRow2);

        tableRow2.appendChild(tableRowUpper);
        tableRow2.appendChild(tableRowUpperTd);
        tableRowUpperTd.appendChild(tableRowUpperInput);