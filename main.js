// Styling The Body
document.body.style.backgroundColor = "#131519";
document.body.style.fontFamily = "Arial, Helvetica, sans-serif";

// Creating & Styling Main Container
let mainContainer = document.createElement("main");
mainContainer.className = "main-container";
mainContainer.style.display = "flex";
mainContainer.style.justifyContent = "center";
mainContainer.style.alignItems = "center";
mainContainer.style.width = "100%";
mainContainer.style.height = "100vh";

// Creating & Styling Main Component
let component = document.createElement("div");
component.className = "our-component";
component.style.width = "300px";
component.style.height = "300px";
component.style.borderRadius = "12px";
component.style.backgroundColor = "#212932";

// Creating & Styling Rate Component & It's Elements
let rateComponent = document.createElement("div");
rateComponent.className = "rates-component";

let starDiv = document.createElement("div");
starDiv.className = "star-icon";
starDiv.innerHTML = `<img src="images/icon-star.svg" alt="Star">`;
starDiv.style.width = "20px";
starDiv.style.height = "20px";
starDiv.style.display = "flex";
starDiv.style.justifyContent = "center";
starDiv.style.alignItems = "center";
starDiv.style.backgroundColor = "#262e3a";
starDiv.style.padding = "10px";
starDiv.style.borderRadius = "50%";
starDiv.style.margin = "15px auto";

let textDiv = document.createElement("div");
textDiv.className = "component-text";
let textHead = document.createElement("h3");
textHead.appendChild(document.createTextNode("How did we do?"))
let textP = document.createElement("p");
textP.appendChild(document.createTextNode("Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"));

textDiv.style.cssText = "text-align: center; padding: 0 22px; margin: 20px auto;";
textHead.style.cssText = "margin: 0; color: white; font-size: 18px;";
textP.style.cssText = "color: #626874; font-size: 12px; line-height: 1.8; width: 240px; margin: 10px auto;";

textDiv.appendChild(textHead);
textDiv.appendChild(textP);

let ratesDiv = document.createElement("div");
ratesDiv.className = "rates-nums";
ratesDiv.style.cssText = "display: flex; justify-content: center; align-items: center; margin: 20px auto; text-align: center; gap: 12px;";
for (let i = 1; i <= 5; i++) {
    let span = document.createElement("span");
    span.appendChild(document.createTextNode(i));
    span.style.cssText = "background-color: #282e38; color: #757e87; width: 40px; height: 40px; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 12px; font-weight: bold;cursor: pointer; transition: 0.5s";
    ratesDiv.appendChild(span);
};

let submitBtn = document.createElement("button");
submitBtn.innerHTML = `Submit`;
submitBtn.style.cssText = "display: block; margin: 20px auto; background-color: #fc7613; color: white; border: none; width: 80%; padding: 8px; border-radius: 15px; cursor: pointer; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px; transition: 0.5s"

rateComponent.appendChild(starDiv);
rateComponent.appendChild(textDiv);
rateComponent.appendChild(ratesDiv);
rateComponent.appendChild(submitBtn);
component.appendChild(rateComponent);

// Creating & Styling Submit Component & It's Elements
let submitComponent = document.createElement("div");
submitComponent.className = "submit-component";
submitComponent.style.display = "none"; 

let submitImg = document.createElement("div");
submitImg.className = "img";
submitImg.innerHTML = `<img src="images/illustration-thank-you.svg" alt="Image">`;
submitImg.style.cssText = "width: 120px; margin: 30px auto;";
submitImg.firstChild.style.cssText = "max-width: 100%";

let selectRateDiv = document.createElement("div");
selectRateDiv.className = "selected-rate";
selectRateDiv.innerHTML = `You selected <span></span> out of 5`
selectRateDiv.style.cssText = "width: fit-content; margin: 20px auto; background-color: #252e35; color: #b1591e; font-size: 12px; padding: 6px 20px; border-radius: 20px;";

let submitTextDiv = document.createElement("div");
submitTextDiv.className = "submit-component-text";
let submitTextHead = document.createElement("h3");
submitTextHead.appendChild(document.createTextNode("Thank you!"));
let submitTextP = document.createElement("p");
submitTextP.appendChild(document.createTextNode("We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"));

submitTextDiv.style.cssText = "text-align: center; padding: 0 22px; margin: 20px auto;";
submitTextHead.style.cssText = "margin: 0; color: white; font-size: 18px;";
submitTextP.style.cssText = "color: #626874; font-size: 10px; line-height: 1.8; width: 240px; margin: 10px auto;";

submitTextDiv.appendChild(submitTextHead);
submitTextDiv.appendChild(submitTextP);

submitComponent.appendChild(submitImg);
submitComponent.appendChild(selectRateDiv);
submitComponent.appendChild(submitTextDiv);
component.appendChild(submitComponent);

// Creating & Styling Attribution Element
let attribution = document.createElement("div");
attribution.innerHTML = `Coded By Mennat-Allah @ <span></span>`;
attribution.style.cssText = "position: fixed; bottom: 10px; font-size: 11px; color: white;"

// Appending Main Elements
mainContainer.appendChild(component);
mainContainer.appendChild(attribution);
document.body.appendChild(mainContainer);

// Set Actions

let ratesSpans = Array.from(ratesDiv.children);

ratesSpans.forEach((s) => {
    s.addEventListener("click", () => {
        ratesSpans.forEach((s) => {
            s.classList.remove("clicked");
            s.style.backgroundColor = "#282e38";
            s.style.color = "#757e87";
        });
        s.classList.add("clicked");
        s.style.backgroundColor = "#fc7613";
        s.style.color = "white";
    })
});

submitBtn.addEventListener("mouseover", () => {
    submitBtn.style.cssText = "display: block; margin: 20px auto; background-color: white; color: #fc7613; border: none; width: 80%; padding: 8px; border-radius: 15px; cursor: pointer; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px; transition: 0.5s"
});
submitBtn.addEventListener("mouseout", () => {
    submitBtn.style.cssText = "display: block; margin: 20px auto; background-color: #fc7613; color: white; border: none; width: 80%; padding: 8px; border-radius: 15px; cursor: pointer; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px; transition: 0.5s"
});
submitBtn.addEventListener("click", () => {
    rateComponent.style.display = "none";
    submitComponent.style.display = "block";
    let clickedRate = ratesSpans.filter((s) => s.classList.contains("clicked"));
    if (clickedRate.length === 1) {
        selectRateDiv.innerHTML = `You selected <span>${clickedRate[0].innerHTML}</span> out of 5`;
    } else {
        selectRateDiv.innerHTML = `You did not select any rate`;
        submitTextHead.innerHTML = "";
        submitTextHead.appendChild(document.createTextNode("Please rate us!"));
        submitTextHead.style.cssText = "background-color: #fc7613; color: white; font-size: 16px; padding: 6px; border-radius: 15px; cursor: pointer;"
        submitTextHead.addEventListener("click", () => {
            window.location.reload();
        });
    };
});

attribution.firstElementChild.appendChild(document.createTextNode(new Date().getFullYear()));
