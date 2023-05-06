import React from "react";

class DentalTriageForm extends React.Component {
  constructor() {
    super();
  }

  render() {
    let { handleInputChange, formDetails } = this.props;

    return (
      <div>
        <label className="label">Dental Triage Form</label>
        <div className="field">
          <label className="label">Complaints</label>
          <div className="control">
            <textarea
              name="complaints"
              className="textarea"
              placeholder="Textarea"
              onChange={handleInputChange}
              value={formDetails.complaints}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Intraoral</label>
          <div className="control">
            <textarea
              name="intraoral"
              className="textarea"
              placeholder="Textarea"
              onChange={handleInputChange}
              value={formDetails.intraoral}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Diagnosis</label>
          <div className="control">
            <textarea
              name="diagnosis"
              className="textarea"
              placeholder="Textarea"
              onChange={handleInputChange}
              value={formDetails.diagnosis}
            />
          </div>
        </div>

        <hr />
        <label className="label">Treatments Needed</label>

        <div className="field">
          <label className="label">EXO</label>
          <div className="control">
            <input
              name="exo"
              className="input"
              type="text"
              onChange={handleInputChange}
              value={formDetails.exo}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">CAP</label>
          <div className="control">
            <input
              name="cap"
              className="input"
              type="text"
              onChange={handleInputChange}
              value={formDetails.cap}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">SDF</label>
          <div className="control">
            <input
              name="sdf"
              className="input"
              type="text"
              onChange={handleInputChange}
              value={formDetails.sdf}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">F</label>
          <div className="control">
            <input
              name="f"
              className="input"
              type="text"
              onChange={handleInputChange}
              value={formDetails.f}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Others</label>
          <div className="control">
            <input
              name="others"
              className="input"
              type="text"
              onChange={handleInputChange}
              value={formDetails.others}
            />
          </div>
        </div>
      </div>
    );
  }
}

class MedicalTriageForm extends React.Component {
  constructor() {
    super();
  }

  render() {
    let { handleInputChange, formDetails } = this.props;

    return (
      <div>
        <label className="label">Medical Triage Form</label>
        <div className="field is-grouped">
          <div className="control is-expanded">
            <label className="label">Height</label>
            <div className="control">
              <input
                name="height"
                className="input"
                type="number"
                onChange={handleInputChange}
                value={formDetails.height}
              />
            </div>
          </div>

          <div className="control is-expanded">
            <label className="label">Weight</label>
            <div className="control">
              <input
                name="weight"
                className="input"
                type="number"
                onChange={handleInputChange}
                value={formDetails.weight}
              />
            </div>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control is-expanded">
            <label className="label">Systolic</label>
            <div className="control">
              <input
                name="systolic"
                className="input"
                type="number"
                onChange={handleInputChange}
                value={formDetails.systolic}
              />
            </div>
          </div>

          <div className="control is-expanded">
            <label className="label">Diastolic</label>
            <div className="control">
              <input
                name="diastolic"
                className="input"
                type="number"
                onChange={handleInputChange}
                value={formDetails.diastolic}
              />
            </div>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control is-expanded">
            <label className="label">Temperature</label>
            <div className="control">
              <input
                name="temperature"
                className="input"
                type="number"
                onChange={handleInputChange}
                value={formDetails.temperature}
              />
            </div>
          </div>

          <div className="control is-expanded">
            <label className="label">Heart Rate</label>
            <div className="control">
              <input
                name="heart_rate"
                className="input"
                type="number"
                onChange={handleInputChange}
                value={formDetails.heart_rate}
              />
            </div>
          </div>
        </div>

        <div className="field">
          {/* <label className="label">HIV Po</label> */}
          <div className="control">
            <label className="checkbox">
              <input
                type="checkbox"
                name="hiv_positive"
                onChange={handleInputChange}
                value={formDetails.hiv_positive}
              />
              HIV Positive?
            </label>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input
                type="checkbox"
                name="ptb_positive"
                onChange={handleInputChange}
                value={formDetails.ptb_positive}
              />
              PTB Positive?
            </label>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input
                type="checkbox"
                name="hepc_positive"
                onChange={handleInputChange}
                value={formDetails.hepc_positive}
              />
              HEPC Positive?
            </label>
          </div>
        </div>
      </div>
    );
  }
}

class MedicalForm extends React.Component {
  constructor() {
    super();
  }

  render() {
    let { handleInputChange, formDetails } = this.props;

    return (
      <div>
        <label className="label">Medical Consultation Form</label>

        <label className="label">Sub-type</label>
        <div className="control" style={{ marginBottom: 20 }}>
          <input
            name="sub_type"
            className="input"
            type="text"
            placeholder="General"
            onChange={handleInputChange}
            value={formDetails.sub_type}
          />
        </div>

        <div className="field">
          <label className="label">Problems</label>
          <div className="control">
            <textarea
              name="problems"
              className="textarea"
              placeholder="Type your problems here..."
              onChange={handleInputChange}
              value={formDetails.problems}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Diagnosis</label>
          <div className="control">
            <textarea
              name="diagnosis"
              className="textarea"
              placeholder="Type your diagnosis here..."
              onChange={handleInputChange}
              value={formDetails.diagnosis}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Notes</label>
          <div className="control">
            <textarea
              name="notes"
              className="textarea"
              placeholder="Type your notes here..."
              onChange={handleInputChange}
              value={formDetails.notes}
            />
          </div>
        </div>

        <hr />

        <div className="field">
          <label className="label">Referred for (within clinic)</label>
          <div className="control" style={{ marginBottom: 20 }}>
            <input
              name="referred_for"
              className="input"
              type="text"
              placeholder="Type specialty here..."
              onChange={handleInputChange}
              value={formDetails.referred_for}
            />
          </div>
        </div>
      </div>
    );
  }
}

class PrescriptionForm extends React.Component {
  constructor() {
    super();
  }

  calculateMedicineCurrentStock(medicine) {
    let { medications } = this.props;

    let medication = medications.filter((med) => {
      console.log(med);
      return medicine == med.pk;
    });

    if (medication.length > 0) return medication[0].fields.quantity;
    return 0;
  }

  calculateMedicineReservedStock(medicine) {
    let { reservedMedications } = this.props;
    console.log(reservedMedications);

    if (typeof reservedMedications[medicine] === "undefined") return 0;
    else return reservedMedications[medicine];
  }

  render() {
    console.log(1);
    let {
      allergies,
      handleInputChange,
      formDetails,
      medicationOptions,
      onSubmit,
      isEditing,
    } = this.props;
    console.log(this.props);
    console.log("adsfasfasdf");
    return (
      <div className="column is-12">
        <h1 style={{ color: "black", fontSize: "1.5em" }}>Prescription</h1>

        <div className="field">
          <label className="label">Allergies</label>
          <h2 style={{ color: "red" }}>{allergies}</h2>
        </div>

        <div className="field">
          <label className="label">Medicine</label>
          <div className="select is-fullwidth">
            <select name={"medication"} onChange={handleInputChange}>
              <option value={"0 Dummy"}>-</option>
              {medicationOptions}
            </select>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control is-expanded">
            <label className="label">In Stock</label>
            <h2>{this.calculateMedicineCurrentStock(formDetails.medicine)}</h2>
          </div>

          <div className="control is-expanded">
            <label className="label">Currently Reserved</label>
            <h2>{this.calculateMedicineReservedStock(formDetails.medicine)}</h2>
          </div>

          <div className="control is-expanded">
            <label className="label">Quantity to be ordered</label>
            <div className="control">
              <input
                name="quantity"
                className="input"
                type="number"
                onChange={handleInputChange}
                value={formDetails.quantity}
              />
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Dosage Instructions</label>
          <div className="control">
            <textarea
              name="notes"
              className="textarea"
              placeholder="Textarea"
              onChange={handleInputChange}
              value={formDetails.notes}
            />
          </div>
        </div>

        <button
          className="button is-dark is-medium level-item"
          style={{ marginTop: 15 }}
          onClick={onSubmit}
        >
          {isEditing ? "Edit" : "Add"}
        </button>
      </div>
    );
  }
}

export { DentalTriageForm, MedicalTriageForm, MedicalForm, PrescriptionForm };
