import { IPrice } from "./Util";


export class Utility {
    private pricing: IPrice[];

    constructor() {
        this.pricing = [
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
    }

    public buildPricesHtml(maxItem: number) {
        let itemCount = 0;
        let pricingHtml = '';

        for (let p of this.pricing) {
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
        return `<div class="row row-cols-1 row-cols-md-3 mb-3 text-center  mt-5"> ${pricingHtml}</div>`;
    }

    buildEmployeesHtml(employees: any[], siteUrl: string) {       
        let empslHtml = '';

        for (let e of employees) {
            empslHtml  +=
                `<div class="card col-md-4">
                    <img class="card-img-top" src="${siteUrl}/_layouts/15/userphoto.aspx?size=L&username=${e.Employee.EMail}" alt="Card image" style="width:100%">
                    <div class="card-body">
                        <h4 class="card-title">${e.Employee.Title}</h4>
                        <p class="card-text">${e.ShortBio.toString().substring(0, 130) + "..."}</p>
                        <a href="#" class="btn btn-primary">Visit Profile</a>
                    </div>
                </div>`;           
        }
        return `<div class="row row-cols-1 row-cols-md-3 mb-3 text-center  mt-5"> ${empslHtml}</div>`;
    }
}
