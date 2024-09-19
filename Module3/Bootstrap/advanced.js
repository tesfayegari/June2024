
let pricing = [
    {
        title: "Free",
        price: 0,
        numUsers: 10,
        numStorage: 2,
        emailInclude: true,
        helpAccess: true,
        link: { title: "Signup for free", url: "https://google.com" }
    },
    {
        title: "Pro",
        price: 10,
        numUsers: 20,
        numStorage: 10,
        emailInclude: true,
        helpAccess: true,
        link: { title: "Get Started", url: "https://google.com" }
    },
    {
        title: "Enterprise",
        price: 29,
        numUsers: 30,
        numStorage: 15,
        emailInclude: true,
        helpAccess: true,
        link: { title: "Get Started", url: "https://google.com" }
    },
    {
        title: "Free",
        price: 0,
        numUsers: 10,
        numStorage: 2,
        emailInclude: true,
        helpAccess: true,
        link: { title: "Signup for free", url: "https://google.com" }
    },
    {
        title: "Pro",
        price: 10,
        numUsers: 20,
        numStorage: 10,
        emailInclude: true,
        helpAccess: true,
        link: { title: "Get Started", url: "https://google.com" }
    },
    {
        title: "Enterprise",
        price: 29,
        numUsers: 30,
        numStorage: 15,
        emailInclude: true,
        helpAccess: true,
        link: { title: "Get Started", url: "https://google.com" }
    },
    {
        title: "Silver",
        price: 40,
        numUsers: 50,
        numStorage: 20,
        emailInclude: true,
        helpAccess: true,
        link: { title: "Signup for free", url: "https://google.com" }
    },
    {
        title: "Platinum",
        price: 50,
        numUsers: 70,
        numStorage: 30,
        emailInclude: true,
        helpAccess: true,
        link: { title: "Get Started", url: "https://google.com" }
    },
    {
        title: "Gold",
        price: 60,
        numUsers: 75,
        numStorage: 100,
        emailInclude: true,
        helpAccess: true,
        link: { title: "Get Started", url: "https://google.com" }
    },
    {
        title: "Pro",
        price: 10,
        numUsers: 20,
        numStorage: 10,
        emailInclude: true,
        helpAccess: true,
        link: { title: "Get Started", url: "https://google.com" }
    },
    {
        title: "Enterprise",
        price: 29,
        numUsers: 30,
        numStorage: 15,
        emailInclude: true,
        helpAccess: true,
        link: { title: "Get Started", url: "https://google.com" }
    },
    {
        title: "Silver",
        price: 40,
        numUsers: 50,
        numStorage: 20,
        emailInclude: true,
        helpAccess: true,
        link: { title: "Signup for free", url: "https://google.com" }
    },
]

/*
            <div class="col-md-4">
                <div class="card mb-4 rounded-3 shadow-sm">
                    <div class="card-header py-3">
                        <h4 class="my-0 fw-normal">{title}</h4>
                    </div>
                    <div class="card-body">
                        <h1 class="card-title pricing-card-title">${price}<small
                                class="text-body-secondary fw-light">/mo</small></h1>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li>{numUsers} users included</li>
                            <li>{numStorage} GB of storage</li>
                            <li>Email support</li>
                            <li>Help center access</li>
                        </ul>
                        <button type="button" class="w-100 btn btn-lg btn-primary">{linkTitle}</button>
                    </div>
                </div>
            </div>
*/



// if (document.getElementById('prices') != null) {
//     document.getElementById('prices').innerHTML = pricingHtml;
// }
// console.log("entire html is ", pricingHtml);

// user defined functions 

window.onload = function Func() {
    if (document.getElementById('prices') != null) {
        document.getElementById('prices').innerHTML = pricingHtml;
    }
}


// user Defined functions 
/*
Syntax: 
function functionName (Paramertsrs){//parameters are optional 
    //statements 

    return data; //optional 

}
*/
let pricingHtml = '';
function buildPricesHtml(maxItem) {
    let itemCount = 0;
    pricingHtml = '';
    for (let p of pricing) {
        pricingHtml = pricingHtml +
            `<div class="col-md-4">
                <div class="card mb-4 rounded-3 shadow-sm">
                    <div class="card-header py-3">
                        <h4 class="my-0 fw-normal">${p.title}</h4>
                    </div>
                    <div class="card-body">
                        <h1 class="card-title pricing-card-title">$${p.price}<small
                                class="text-body-secondary fw-light">/mo</small></h1>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li>${p.numUsers} users included</li>
                            <li>${p.numStorage} GB of storage</li>
                            <li>Email support</li>
                            <li>Help center access</li>
                        </ul>
                        <button type="button" class="w-100 btn btn-lg btn-primary">${p.link.title}</button>
                    </div>
                </div>
            </div>`;
        itemCount++;
        if (itemCount == maxItem) {
            break;
        }
    }
    document.getElementById('prices').innerHTML = pricingHtml;
}




