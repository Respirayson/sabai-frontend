import React from "react";

class VitalsForm extends React.Component {
  constructor() {
    super();
  }

  render() {
    let { handleInputChange, formDetails } = this.props;

    return (
      <div>
        <label className="label">Vitals</label>
        <div className="field is-grouped">
          <div className="control is-expanded">
            <label className="label">Height (Decimal eg. 160.5)</label>
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
            <label className="label">Weight (Decimal eg. 60.2)</label>
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
            <label className="label">Systolic (Number eg. 10)</label>
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
            <label className="label">Diastolic (Number eg. 10)</label>
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
            <label className="label">Temperature (Decimal eg. 36.5)</label>
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
            <label className="label">Heart Rate (Number eg. 120)</label>
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

        <div className="field is-grouped">
          <div className="control is-expanded">
            <label className="label">Left Eye (Fraction eg. 6/6)</label>
            <div className="control">
              <input
                name="left_eye_degree"
                className="input"
                type="text"
                onChange={handleInputChange}
                value={formDetails.left_eye_degree}
              />
            </div>
          </div>

          <div className="control is-expanded">
            <label className="label">Right Eye (Fraction eg. 6/12)</label>
            <div className="control">
              <input
                name="right_eye_degree"
                className="input"
                type="text"
                onChange={handleInputChange}
                value={formDetails.right_eye_degree}
              />
            </div>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control is-expanded">
            <label className="label">Cataract (Text eg. Anyth)</label>
            <div className="control">
              <input
                name="cataracts"
                className="input"
                type="text"
                onChange={handleInputChange}
                value={formDetails.cataracts}
              />
            </div>
          </div>

          <div className="control is-expanded">
            <label className="label">Eye Pressure (Text eg. anyth)</label>
            <div className="control">
              <input
                name="eye_pressure"
                className="input"
                type="text"
                onChange={handleInputChange}
                value={formDetails.eye_pressure}
              />
            </div>
          </div>
        </div>

        <br></br>

        <div className="field is-grouped">
          <div className="control is-expanded">
            <label className="checkbox">
              <input
                type="checkbox"
                name="phq_9"
                onChange={handleInputChange}
                value={formDetails.phq_9}
              />
              &nbsp; PHQ-9
            </label>
          </div>
          <div className="control is-expanded">
            <label className="checkbox">
              <input
                type="checkbox"
                name="gad_7"
                onChange={handleInputChange}
                value={formDetails.gad_7}
              />
              &nbsp; GAD-7
            </label>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input
                type="checkbox"
                name="hiv_positive"
                onChange={handleInputChange}
                value={formDetails.hiv_positive}
              />
              &nbsp; HIV Positive?
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
              &nbsp; PTB Positive?
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
              &nbsp; HEPC Positive?
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
    this.state = {
      showWomenClinicDetails: false,
    };
  }

  handleCheckboxChange = (event) => {
    const { checked } = event.target;
    this.setState({ showWomenClinicDetails: checked });
  };

  render() {
    let { handleInputChange, formDetails } = this.props;
    const { showWomenClinicDetails } = this.state;

    return (
      <div>
        <label className="label">Medical Consultation Form</label>

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
          <label className="label">
            <input
              name="women_clinic_checkbox"
              type="checkbox"
              checked={showWomenClinicDetails}
              onChange={this.handleCheckboxChange}
              style={{ marginRight: "10px" }}
            />
            Women's Clinic Triage
          </label>
        </div>

        {showWomenClinicDetails && (
          <div className="field">
            <label className="label">Additional Information</label>
            <div className="control">
              <div className="columns">
                <div className="column">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      name="Breast Problem"
                      style={{ marginRight: "10px" }}
                    />
                    Breast Problem
                  </label>
                </div>
                <div className="column">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      name="Genital Area Problem"
                      style={{ marginRight: "10px" }}
                    />
                    Genital Area Problem
                  </label>
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      name="Menstruation Problem"
                      style={{ marginRight: "10px" }}
                    />
                    Menstruation Problem
                  </label>
                </div>
                <div className="column">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      name="Others"
                      style={{ marginRight: "10px" }}
                    />
                    Others
                  </label>
                  <textarea
                    name="others_details"
                    className="textarea"
                    placeholder="Enter details..."
                    onChange={handleInputChange}
                    value={formDetails.others_details}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <hr />

        <div className="field">
          <label className="label">* Referred for (within clinic)</label>
          <div className="control" style={{ marginBottom: 20 }}>
            <div className="select">
              <select
                name="referred_for"
                onChange={handleInputChange}
              >
                <option>Please Select...</option>
                <option value="Diagnostic">Diagnostic</option>
                <option value="Acute">Acute</option>
                <option value="Chronic">Chronic</option>
              </select>
            </div>
            {/* <input
              name="referred_for"
              className="input"
              type="text"
              placeholder="Type specialty here..."
              onChange={handleInputChange}
              value={formDetails.referred_for}
            /> */}
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
      return medicine == med.pk;
    });

    if (medication.length > 0) return medication[0].fields.quantity;
    return 0;
  }

  calculateMedicineReservedStock(medicine) {
    let { reservedMedications } = this.props;

    if (typeof reservedMedications[medicine] === "undefined") return 0;
    else return reservedMedications[medicine];
  }

  render() {
    let {
      allergies,
      handleInputChange,
      formDetails,
      medicationOptions,
      onSubmit,
      isEditing,
    } = this.props;
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

export { VitalsForm, MedicalForm, PrescriptionForm };
