import React from "react";

class ConsultationsTable extends React.Component {
  constructor() {
    super();
  }

  render() {
    let { consultRows } = this.props;

    return (
      <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Type</th>
            <th>Sub Type</th>
            <th>Doctor</th>
            <th>Referred For</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{consultRows}</tbody>
      </table>
    );
  }
}

class ConsultationsView extends React.Component {
  constructor() {
    super();
  }

  renderPrescriptions(prescriptions) {
    let prescriptionRows = prescriptions.map((prescription) => {
      let name = prescription.fields.medicine_name;
      let quantity = prescription.fields.quantity;
      let notes = prescription.fields.notes;

      return (
        <tr>
          <td>{name}</td>
          <td>{quantity}</td>
          <td>{notes}</td>
        </tr>
      );
    });

    return (
      <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Medicine Name</th>
            <th>Quantity</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>{prescriptionRows}</tbody>
      </table>
    );
  }

  renderMedicalConsultation(content) {
    let fields = content.fields;
    let prescriptions = content.prescriptions;

    return (
      <div>
        <div className="field">
          <label className="label">Sub Type</label>
          <article className="message">
            <div className="message-body">{fields.sub_type}</div>
          </article>
        </div>

        <div className="field">
          <label className="label">Problems</label>
          <article className="message">
            <div className="message-body">{fields.problems}</div>
          </article>
        </div>

        <div className="field">
          <label className="label">Diagnosis</label>
          <article className="message">
            <div className="message-body">{fields.diagnosis}</div>
          </article>
        </div>

        <div className="field">
          <label className="label">Notes</label>
          <article className="message">
            <div className="message-body">{fields.notes}</div>
          </article>
        </div>
      </div>
    );
  }

  render() {
    let { content } = this.props;
    if (Object.keys(content).length == 0) return null;

    let type = content.fields.type;
    let prescriptions = content.prescriptions;

    return (
      <div className="column is-12">
        <h1 style={{ color: "black", fontSize: "1.5em" }}>Consultation</h1>
        <div className="field">
          <label className="label">Done by</label>
          <article className="message">
            <div className="message-body">{content.fields.doctor}</div>
          </article>
        </div>

        <hr />

        {type == "medical" ? this.renderMedicalConsultation(content) : null}

        <hr />

        <div className="field">
          <label className="label">Referred For</label>
          <article className="message">
            <div className="message-body">{content.fields.referred_for}</div>
          </article>
        </div>

        <hr />

        <div className="field">
          <label className="label">Prescriptions</label>
          {prescriptions.length > 0 ? (
            this.renderPrescriptions(prescriptions)
          ) : (
            <h2>None</h2>
          )}
        </div>

        <hr />
      </div>
    );
  }
}

class DentalTriageView extends React.Component {
  constructor() {
    super();
  }

  render() {
    let { content } = this.props;

    return (
      <div className="column is-12">
        <h1 style={{ color: "black", fontSize: "1.5em" }}>Dental Triage</h1>
        <div className="field">
          <label className="label">Complaints</label>
          <article className="message">
            <div className="message-body">{content.fields.complaints}</div>
          </article>
        </div>

        <div className="field">
          <label className="label">Intraoral</label>
          <article className="message">
            <div className="message-body">{content.fields.intraoral}</div>
          </article>
        </div>

        <div className="field">
          <label className="label">Diagnosis</label>
          <article className="message">
            <div className="message-body">{content.fields.diagnosis}</div>
          </article>
        </div>
        <hr />

        <div className="field is-grouped">
          <div className="control is-expanded">
            <label className="label">EXO</label>
            <div className="control">
              <article className="message">
                <div className="message-body">{content.fields.exo}</div>
              </article>
            </div>
          </div>

          <div className="control is-expanded">
            <label className="label">CAP</label>
            <div className="control">
              <article className="message">
                <div className="message-body">{content.fields.cap}</div>
              </article>
            </div>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control is-expanded">
            <label className="label">SDF</label>
            <div className="control">
              <article className="message">
                <div className="message-body">{content.fields.sdf}</div>
              </article>
            </div>
          </div>

          <div className="control is-expanded">
            <label className="label">F</label>
            <div className="control">
              <article className="message">
                <div className="message-body">{content.fields.f}</div>
              </article>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Others</label>
          <article className="message">
            <div className="message-body">{content.fields.others}</div>
          </article>
        </div>

        <hr />
      </div>
    );
  }
}

class MedicalTriageView extends React.Component {
  constructor() {
    super();
  }

  render() {
    let { content } = this.props;

    return (
      <div className="column is-12">
        <h1 style={{ color: "black", fontSize: "1.5em" }}>Medical Triage</h1>

        <div className="field is-grouped">
          <div className="control is-expanded">
            <label className="label">Height</label>
            <div className="control">
              <article className="message">
                <div className="message-body">{content.fields.height}</div>
              </article>
            </div>
          </div>

          <div className="control is-expanded">
            <label className="label">Weight</label>
            <div className="control">
              <article className="message">
                <div className="message-body">{content.fields.weight}</div>
              </article>
            </div>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control is-expanded">
            <label className="label">Systolic</label>
            <div className="control">
              <article className="message">
                <div className="message-body">{content.fields.systolic}</div>
              </article>
            </div>
          </div>

          <div className="control is-expanded">
            <label className="label">Diastolic</label>
            <div className="control">
              <article className="message">
                <div className="message-body">{content.fields.diastolic}</div>
              </article>
            </div>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control is-expanded">
            <label className="label">Temperature</label>
            <div className="control">
              <article className="message">
                <div className="message-body">{content.fields.temperature}</div>
              </article>
            </div>
          </div>

          <div className="control is-expanded">
            <label className="label">Heart Rate</label>
            <div className="control">
              <article className="message">
                <div className="message-body">{content.fields.heart_rate}</div>
              </article>
            </div>
          </div>
        </div>

        <hr />

        <div className="field">
          <label className="label">HIV Positive</label>
          <article className="message">
            <div className="message-body">
              {content.fields.hiv_positive ? "Positive" : "Negative"}
            </div>
          </article>
        </div>

        <div className="field">
          <label className="label">PTB Positive</label>
          <article className="message">
            <div className="message-body">
              {content.fields.ptb_positive ? "Positive" : "Negative"}
            </div>
          </article>
        </div>

        <div className="field">
          <label className="label">HEPC Positive</label>
          <article className="message">
            <div className="message-body">
              {content.fields.hepc_positive ? "Positive" : "Negative"}
            </div>
          </article>
        </div>
      </div>
    );
  }
}

class VisitPrescriptionsTable extends React.Component {
  constructor() {
    super();
  }

  render() {
    let { content: prescriptions } = this.props;

    let prescriptionRows = prescriptions.map((prescription) => {
      let name = prescription.fields.medicine_name;
      let quantity = prescription.fields.quantity;
      let doctor = prescription.fields.doctor;

      return (
        <tr>
          <td>{name}</td>
          <td>{quantity}</td>
          <td>{doctor}</td>
        </tr>
      );
    });

    return (
      <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Medicine Name</th>
            <th>Quantity</th>
            <th>Doctor</th>
          </tr>
        </thead>
        <tbody>{prescriptionRows}</tbody>
      </table>
    );
  }
}

class PatientView extends React.Component {
  constructor() {
    super();
  }

  render() {
    let { content } = this.props;

    return (
      <div className="column is-3">
        <div className="field">
          <label className="label">Local Name</label>
          <article className="message">
            <div className="message-body">{content.fields.local_name}</div>
          </article>
        </div>

        <div className="field">
          <label className="label">Gender</label>
          <article className="message">
            <div className="message-body">{content.fields.gender}</div>
          </article>
        </div>

        <div className="field">
          <label className="label">Date of Birth</label>
          <article className="message">
            <div className="message-body">{content.fields.date_of_birth}</div>
          </article>
        </div>

        <div className="field">
          <label className="label">Travelling Time to Village</label>
          <article className="message">
            <div className="message-body">
              {content.fields.travelling_time_to_village}
            </div>
          </article>
        </div>

        <div className="field">
          <label className="label">Allergies</label>
          <article className="message">
            <div className="message-body">{content.fields.drug_allergy}</div>
          </article>
        </div>
      </div>
    );
  }
}

export {
  ConsultationsTable,
  ConsultationsView,
  DentalTriageView,
  MedicalTriageView,
  VisitPrescriptionsTable,
  PatientView,
};
