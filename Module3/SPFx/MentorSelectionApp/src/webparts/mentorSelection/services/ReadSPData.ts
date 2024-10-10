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

    updateSharePointItem(listName: string, body: any, itemId: number) {
        let etag: string | null;
        return this.context.spHttpClient.get(`${this.context.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('${listName}')/items(${itemId})?$select=Id`,
            SPHttpClient.configurations.v1)
            .then((response: SPHttpClientResponse): Promise<any> => {
                etag = (response.headers.get('ETag') == null) ? '' : response.headers.get('ETag');
                return response.json();
            }).then(d => {

                let e = etag == null ? '' : etag;

                return this.context.spHttpClient.post(`${this.context.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('${listName}')/items(${itemId})`,
                    SPHttpClient.configurations.v1,
                    {
                        headers: {
                            'Accept': 'application/json;odata=nometadata',
                            'Content-type': 'application/json;odata=verbose',
                            'odata-version': '',
                            'IF-MATCH': e,
                            'X-HTTP-Method': 'MERGE'
                        },
                        body: JSON.stringify(body)
                    })
                    .then((data: SPHttpClientResponse) => data.json())
                    .then(response=>{data: 'Succeful'});                   
            });

    }


}