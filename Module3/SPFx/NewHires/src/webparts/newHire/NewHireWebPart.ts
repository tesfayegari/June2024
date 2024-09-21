import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneSlider
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { SPComponentLoader } from '@microsoft/sp-loader';

//import type { IReadonlyTheme } from '@microsoft/sp-component-base';
//import { escape } from '@microsoft/sp-lodash-subset';

import styles from './NewHireWebPart.module.scss';
//import * as strings from 'NewHireWebPartStrings';
import { Utility } from './Pricing';
import { ReadSPData } from './services/ReadSPData';

export interface INewHireWebPartProps {
  description: string;
  maxItems: number;
}

export default class NewHireWebPart extends BaseClientSideWebPart<INewHireWebPartProps> {


  public render(): void {
    SPComponentLoader.loadCss("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css");
    console.log("Your Site URL", this.context.pageContext.web.absoluteUrl);

    let spService = new ReadSPData(this.context);
    let util = new Utility();

    spService.readSharePointItems('NewHire', '$filter=Show ne false&$select=*,Employee/Title, Employee/EMail&$expand=Employee&$top=' + this.properties.maxItems)
      .then(employees => {       
        this.domElement.innerHTML = `
        <section class="${styles.newHire} ${!!this.context.sdks.microsoftTeams ? styles.teams : ''}">
          <h2>${this.properties.description}</h2>
          ${util.buildEmployeesHtml(employees,this.context.pageContext.web.absoluteUrl)}
        </section>`;
      });

    // this.domElement.innerHTML = `
    // <section class="${styles.newHire} ${!!this.context.sdks.microsoftTeams ? styles.teams : ''}">
    //   <h2>${this.properties.description}</h2>
    //   ${util.buildPricesHtml(this.properties.maxItems)}
    // </section>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: 'Webpart Settings'
          },
          groups: [
            {
              groupName: 'General Setting',
              groupFields: [
                PropertyPaneTextField('description', {
                  label: 'Webpart Title'
                }),
                PropertyPaneSlider('maxItems', { min: 0, max: 12, label: 'Max Items'  })                
              ]
            }
          ]
        }
      ]
    };
  }
}
