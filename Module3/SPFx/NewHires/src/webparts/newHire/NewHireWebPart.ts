import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { SPComponentLoader } from '@microsoft/sp-loader';

//import type { IReadonlyTheme } from '@microsoft/sp-component-base';
//import { escape } from '@microsoft/sp-lodash-subset';

import styles from './NewHireWebPart.module.scss';
import * as strings from 'NewHireWebPartStrings';
import { Utility } from './Pricing';

export interface INewHireWebPartProps {
  description: string;
}

export default class NewHireWebPart extends BaseClientSideWebPart<INewHireWebPartProps> {

  
  public render(): void {
    SPComponentLoader.loadCss("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css");

    let util = new Utility();
   
    this.domElement.innerHTML = `
    <section class="${styles.newHire} ${!!this.context.sdks.microsoftTeams ? styles.teams : ''}">
      ${util.buildPricesHtml(12)}
    </section>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
