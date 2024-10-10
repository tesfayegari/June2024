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
    this.state = { mentors: [], openDialog: false, selectedMentor: null, currentUserSelectedMentor: false }
    this.verifyCurrentUser()
  }

  private verifyCurrentUser() {
    this.svc = new ReadSPData(this.props.context);
    let email = this.props.context.pageContext.user.email;
    this.svc.readSharePointItems("Mentor", `$select=MenteeAssigned/EMail&$filter=MenteeAssigned/EMail eq '${email}'&$expand=MenteeAssigned`)
      .then(data => {
        this.setState({ currentUserSelectedMentor: data.length > 0 });
      }, error => console.log("Oops error ", error));
  }

  componentDidMount(): void {
    //reading data from SP 
    this.svc = new ReadSPData(this.props.context);
    this.svc.readSharePointItems("Mentor", "$select=*,MentorName/Title, MentorName/EMail,Author/Title, Author/EMail,MenteeAssigned/Title, MenteeAssigned/EMail&$filter=Available ne false&$expand=Author,MenteeAssigned,MentorName")
      .then(data => {
        this.setState({ mentors: data });
      }, error => console.log("Oops error ", error));
  }

  private toggleHideDialog = (mentor: any) => {
    console.log("Selected mentor ", mentor);
    this.setState({ openDialog: !this.state.openDialog, selectedMentor: mentor })
  }

  private confirmSelectedMentor = (agree: boolean) => {
    this.setState({ openDialog: !this.state.openDialog });
    if (agree) {
      this.svc = new ReadSPData(this.props.context);
      let body = {
        '__metadata': {
          'type': 'SP.Data.MentorListItem'
        },
        'MenteeAssignedId': 23,//Todo pick User ID from REST API 
        'Available': false,
        'MenteeAssignedDate': (new Date())
      };

      this.svc.updateSharePointItem("Mentor", body, this.state.selectedMentor.Id)
        .then(response => {
          //console.log("Response is ", response)
          this.verifyCurrentUser();
          this.componentDidMount();
        }, error => {
          console.log("Oops error ", error)
          this.verifyCurrentUser();
          this.componentDidMount();
        })
    }

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
              disableHover={false}
            />
            <div style={{ padding: "10px" }}>
              <PrimaryButton style={{ float: 'right' }} text={`Select ${m.MentorName.Title}`} onClick={() => this.toggleHideDialog(m)} allowDisabledFocus disabled={this.state.currentUserSelectedMentor} checked={false} />
            </div>
            <hr style={{ clear: 'both' }} />
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
            <PrimaryButton onClick={() => this.confirmSelectedMentor(true)} text="Yes" />
            <DefaultButton onClick={() => this.confirmSelectedMentor(false)} text="No" />
          </DialogFooter>
        </Dialog>

      </section>
    );
  }
}





