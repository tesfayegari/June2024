import * as React from 'react';

import { LivePersona } from "@pnp/spfx-controls-react/lib/LivePersona";
import { DefaultButton, Dialog, DialogFooter, DialogType, Persona, PersonaSize, PrimaryButton } from '@fluentui/react';

import styles from './MentorSelection.module.scss';
import type { IMentorSelectionProps, IMentorSelectionState } from './IMentorSelectionProps';
import { ReadSPData } from '../services/ReadSPData';


export default class MentorSelection extends React.Component<IMentorSelectionProps, IMentorSelectionState> {

  svc: ReadSPData;

  constructor(props: IMentorSelectionProps) {
    super(props);
    this.state = { mentors: [], openDialog: false, selectedMentor: null }

  }

  componentDidMount(): void {
    //reading data from SP 
    this.svc = new ReadSPData(this.props.context);
    this.svc.readSharePointItems("Mentor", "$select=*,MentorName/Title, MentorName/EMail,Author/Title, Author/EMail,MenteeAssigned/Title, MenteeAssigned/EMail&$filter=Available ne false&$expand=Author,MenteeAssigned,MentorName")
      .then(data => {
        this.setState({ mentors: data });
      }, error => console.log("Oops error ", error));
  }

  toggleHideDialog = (mentor: any) => {
    console.log("Selected mentor ", mentor);
    this.setState({ openDialog: !this.state.openDialog, selectedMentor: mentor })
  }


  public render(): React.ReactElement<IMentorSelectionProps> {
    const {
      description
    } = this.props;

    const dialogContentProps = {
      type: DialogType.normal,
      title: `Confirmation window for ${this.state.selectedMentor?.MentorName?.Title}`,
      subText: `Are you sure you want to selec ${this.state.selectedMentor?.MentorName?.Title}?`,
    };
    console.log("State variable is ", this.state)

    return (
      <section className={`${styles.mentorSelection}`}>
        <h2>{description}</h2>
        {this.state.mentors.map(m =>
          <>
            <LivePersona upn={m.MentorName.EMail}
              template={
                <>
                  <Persona
                    imageUrl={`${this.props.context.pageContext.web.absoluteUrl}/_layouts/15/userphoto.aspx?size=L&username=${m.MentorName.EMail}`}
                    text={m.MentorName.Title}
                    secondaryText={m.MentorBio}
                    size={PersonaSize.size72} />
                </>
              }
              serviceScope={this.context.serviceScope}
            />
            <PrimaryButton text={`Select ${m.MentorName.Title}`} onClick={()=>this.toggleHideDialog(m)} allowDisabledFocus disabled={false} checked={false} />
            <hr />
          </>
        )
        }

        <Dialog
          hidden={!this.state.openDialog}
          onDismiss={this.toggleHideDialog}
          dialogContentProps={dialogContentProps}
          isBlocking={true}
        //modalProps={modalProps}
        >
          <DialogFooter>
            <PrimaryButton onClick={this.toggleHideDialog} text="Yes" />
            <DefaultButton onClick={this.toggleHideDialog} text="No" />
          </DialogFooter>
        </Dialog>

      </section>
    );
  }
}





