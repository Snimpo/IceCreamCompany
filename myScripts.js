function extractNumberFromElement(element) {
    let myText = element.value;
    let myNumber = Number(myText);

    return myNumber;
}
function calculate() {
    let sales = [];
    let salesPosition = 0;
    let salesElement = document.getElementById("itemsStores");

    for (let item of salesElement.children) {
        let saleValue = extractNumberFromElement(item.children[1]);
        sales[salesPosition] = saleValue;
        salesPosition = salesPosition + 1;
    }

    let totalSales = sumatoryTotal(sales); //Error de prueba
    let highestSales = calculateHighest(sales);
    let lowestSales = calculateLowest(sales);
    let messageOutput = "Total Sales: " + totalSales
        + " / Highest: " + highestSales + " / Lowest: " + lowestSales;
    let elementOutput = document.getElementById("Output");

    elementOutput.textContent = messageOutput;

}
function sumatoryTotal(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total = total + array[i];
    }
    return total;
}
function calculateHighest(array) {
    let max = array[0];
    for (let sales of array) {
        if (sales > max) {
            max = sales;
        }
    }
    return max;
}
function calculateLowest(array) {
    let min = array[0];
    for (let sales of array) {
        if (sales < min) {
            min = sales;
        }
    }
    return min;
}
function createParagraphStore(textLabel, minValue) {
    //create <p>
    let elementParagraph = document.createElement("p");

    //create Label
    let elementLabel = document.createElement("label");
    elementLabel.innerText = textLabel + ":"

    //input
    elementLabel.setAttribute("for", textLabel);

    // Create input
    let elementInput = document.createElement("input");

    //Stablish input
    elementLabel.setAttribute("type", "number");
    elementLabel.setAttribute("id", textLabel);
    elementLabel.setAttribute("min", minValue);
    elementLabel.setAttribute("value", 0);

    //Add input and label to the paragraf 
    elementParagraph.appendChild(elementLabel);
    elementParagraph.appendChild(elementInput);

    //Return the paragraf
    return elementParagraph;
}
function createStores(IDContainer, min, amountOfStores) {
    //find container using IDContainer
    let containerElement = document.getElementById(IDContainer);

    //Loop to create as many stores as needed.
    for (let storeCounter = 1; storeCounter <= amountOfStores; storeCounter++) {
        // Label text to call the function
        let textLabel = "Store " + storeCounter;
        //Create Stores using 
        let Storeparagraph = createParagraphStore(textLabel, min);
        //Add the paragraf to the container
        containerElement.appendChild(Storeparagraph);
    }
}

