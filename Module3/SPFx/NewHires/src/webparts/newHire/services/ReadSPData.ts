import { WebPartContext } from "@microsoft/sp-webpart-base";
import { SPHttpClient, SPHttpClientResponse } from "@microsoft/sp-http"

export class ReadSPData {

    constructor(private context: WebPartContext) { }

    readSharePointItems(listName: string, query: string = '') {
        let url = this.context.pageContext.web.absoluteUrl;
        let oData = query ? '?' + query : query;
        return this.context.spHttpClient.get(`${url}/_api/web/lists/getbytitle('${listName}')/items${oData}`, SPHttpClient.configurations.v1)
            .then((data: SPHttpClientResponse) => data.json())
            .then(items => {
                if (items.error) {
                    console.log('Oops error occured ', items.error.message);
                    return [];
                } else {
                    console.log('Your SharePoint data is ', items);
                    return items.value
                }
            }, error => { console.log('Oops error occured ', error); return []; });
    }


}