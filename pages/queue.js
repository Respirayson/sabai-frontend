import React from "react";
import { withAuthSync, logInCheck } from "../utils/auth";
import axios from "axios";
import moment from "moment";
import Router from "next/router";
import { API_URL } from "../utils/constants";

class Queue extends React.Component {
  static async getInitialProps(ctx) {
    let authentication = await logInCheck(ctx);
    let { query } = ctx;

    return { query };
  }

  constructor() {
    super();

    this.state = {
      visits: [],
      visitsFiltered: [],
      filterString: "",
      formChoices: {
        triageChoice: "medicalTriage",
        consultChoice: "medical",
      },
    };

    this.onFilterChange = this.onFilterChange.bind(this);
    this.handleFormChoiceChange = this.handleFormChoiceChange.bind(this);
  }

  componentDidMount() {
    this.onRefresh();
  }

  async onRefresh() {
    let { data: visits } = await axios.get(`${API_URL}/visits?status=started`);

    this.setState({ visits, visitsFiltered: visits });
  }

  handleFormChoiceChange() {
    let { formChoices } = this.state;

    const target = event.target;
    const value = target.value;
    const name = target.name;

    formChoices[name] = value;

    this.setState({
      formChoices,
    });
  }

  renderTableContent() {
    let { visitsFiltered, formChoices } = this.state;
    let visitsRows = visitsFiltered.map((visit) => {
      let Id = `${visit.patient.village_prefix}${visit.patient.id}`;
      let imageUrl = `${API_URL}/${visit.patient.picture}`;
      let fullName = visit.patient.name;
      console.log(imageUrl);
      let progress = (
        <button
          className="button is-dark level-item"
          onClick={() => Router.push(`/record?id=${visit.patient.id}`)}
        >
          View
        </button>
      );

      let triage = (
        <div className="field is-grouped">
          <div className="control is-expanded">
            <div className="select is-fullwidth">
              <select
                name={"triageChoice"}
                onChange={this.handleFormChoiceChange}
              >
                <option value={"medicalTriage"}>Medical</option>
                <option value={"dentalTriage"}>Dental</option>
              </select>
            </div>
          </div>

          <button
            className="button is-dark level-item"
            onClick={() =>
              Router.push(
                `/patient?id=${visit.patient.pk}&form=${formChoices.triageChoice}`
              )
            }
          >
            Create
          </button>
        </div>
      );

      let consultation = (
        <div className="field is-grouped">
          <div className="control is-expanded">
            <div className="select is-fullwidth">
              <select
                name={"consultChoice"}
                onChange={this.handleFormChoiceChange}
              >
                <option value={"medical"}>Medical</option>
                <option value={"dental"}>Dental</option>
              </select>
            </div>
          </div>

          <button
            className="button is-dark level-item"
            onClick={() =>
              Router.push(
                `/patient?id=${visit.patient.pk}&form=${formChoices.consultChoice}`
              )
            }
          >
            Create
          </button>
        </div>
      );

      return (
        <tr>
          <td>{Id}</td>
          <td>
            <figure className="image is-96x96">
              <img
                src={imageUrl}
                alt="Placeholder image"
                style={{ height: 96, width: 96, objectFit: "cover" }}
              />
            </figure>
          </td>
          <td>{fullName}</td>

          <td>{progress}</td>
          <td>{triage}</td>
          <td>{consultation}</td>
        </tr>
      );
    });

    return visitsRows;
  }

  onFilterChange(event) {
    let { visits } = this.state;
    let filteredVisits = visits.filter((visit) => {
      let patientId =
        `${visit.patient.village_prefix}${visit.patient.id}`.toLowerCase();

      return patientId.includes(event.target.value.toLowerCase());
    });

    this.setState({ visitsFiltered: filteredVisits });
  }

  render() {
    return (
      <div
        style={{
          marginTop: 15,
          marginLeft: 25,
          marginRight: 25,
          // position: "relative"
        }}
      >
        <div className="column is-12">
          <h1 style={{ color: "black", fontSize: "1.5em" }}>Queue</h1>
          <div className="field">
            <div className="control">
              <input
                className="input is-medium"
                type="text"
                placeholder="Search Patient"
                onChange={this.onFilterChange}
              />
            </div>
          </div>
          <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>ID</th>
                <th>Photo</th>
                <th>Full Name</th>
                <th>Record</th>
                <th>New Triage</th>
                <th>New Consultation</th>
                {/* <th>Medical Triage</th>
              <th>Dental Triage</th>
              <th>Medical</th>
              <th>Dental</th> */}
                {/* <th>ID</th> */}
              </tr>
            </thead>
            <tbody>{this.renderTableContent()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default withAuthSync(Queue);
