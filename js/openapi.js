const API_KEY = "347e957968970698be0c52a9ef58f1390756e118";

const populationBtn =
    document.getElementById("populationBtn");

const incomeBtn =
    document.getElementById("incomeBtn");

const output =
    document.getElementById("output");

populationBtn.addEventListener(
    "click",
    getPopulation
);

incomeBtn.addEventListener(
    "click",
    getIncome
);

function createSource(variable, description) {
    return `
        <p class="source">
            Source: U.S. Census Bureau, ACS 2024 1-Year Estimates.
            Variable: ${variable} (${description}).
        </p>
    `;
}

async function getPopulation() {

    output.innerHTML = "Loading population data...";

    const url =
        `https://api.census.gov/data/2024/acs/acs1?get=NAME,B01003_001E&for=state:48&key=${API_KEY}`;

    try {

        const response =
            await fetch(url);

        const data =
            await response.json();

        const stateName =
            data[1][0];

        const population =
            Number(data[1][1]).toLocaleString();

        output.innerHTML = `
        <h3>${stateName}</h3>
        <p>Total Population: <strong>${population}</strong></p>
        ${createSource("B01003_001E", "Total Population")}
        `;

    } catch (error) {

        output.innerHTML = `
            <p>
                Unable to retrieve population data.
            </p>
        `;

        console.error(error);
    }
}



async function getIncome() {

    output.innerHTML =
        "Loading income data...";

    const url =
        `https://api.census.gov/data/2024/acs/acs1?get=NAME,B19013_001E&for=state:48&key=${API_KEY}`;

    try {

        const response =
            await fetch(url);

        const data =
            await response.json();

        const stateName =
            data[1][0];

        const income =
            Number(data[1][1]).toLocaleString();

        output.innerHTML = `
        <h3>${stateName}</h3>
        <p>Median Household Income: <strong>$${income}</strong></p>
        ${createSource("B19013_001E","Median Household Income")}
        `;    


    } catch (error) {

        output.innerHTML = `
            <p>
                Unable to retrieve income data.
            </p>
        `;

        console.error(error);
    }
}



