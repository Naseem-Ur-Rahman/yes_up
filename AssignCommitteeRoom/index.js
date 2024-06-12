import { ToastContainer } from "react-toastify";
import { Layout } from "../../../../../../components/Layout";
import {
  CommitteesSideBarItems,
  LegislationSideBarItems,
} from "../../../../../../utils/sideBarItems";
import Header from "../../../../../../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../../../api/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import { getAllParliamentaryYears } from "../../../../../../api/APIs/Services/ManageQMS.service";
import {
  createNewOrdinance,
  getSingleOrdinanceByID,
} from "../../../../../../api/APIs/Services/LegislationModule.service";
import { getUserData } from "../../../../../../api/Auth";
import { showSuccessMessage } from "../../../../../../utils/ToastAlert";
import moment from "moment";
import TimePicker from "react-time-picker";
function AssignCommitteeRoom() {
  const location = useLocation();
  const navigate = useNavigate();
  const { sessions } = useContext(AuthContext);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isNACalendarOpen, setIsNACalendarOpen] = useState(false);
  const [parliamentaryYearData, setParliamentaryYearData] = useState([]);
  const [singleOrdinanceData, setSingleOrdinanceData] = useState([]);
  const userData = getUserData();
  // Handle Claneder Toggel
  const handleCalendarToggle = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };
  // Handale DateCHange
  const handleDateSelect = (date) => {
    formik.setFieldValue("committeeMeetingDate", date);
    setIsCalendarOpen(false);
  };

  const GetParlimentaryYearsApi = async () => {
    try {
      const response = await getAllParliamentaryYears(0, 300);
      if (response.success) {
        setParliamentaryYearData(response?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetParlimentaryYearsApi();
  }, []);

  const formik = useFormik({
    initialValues: {
      committeeRoom: "",
      committeeName: "",
      committeeType: "",
      committeeMeetingDate: "",
      committeeMeettingTime: "",
      Remarks: "",
      // chairperson_convener: "",
      // committeeSecretery: "",
      // members: "",
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      // Handle form submission here
      if (location?.state?.id) {
        //   handleEditBill(values);
        console.log(values);
      } else {
        // CreateOrdinance(values);
      }
    },
  });

  //   const CreateCommittee = async (values) => {
  //     const data = {
  //       fkParliamentaryYearId: values?.parliamentaryYear,
  //       fkSessionId: values?.session,
  //       fkUserId: userData && userData?.id,
  //       ordinanceTitle: values?.title,
  //       dateOfLayingInTheSenate: values?.dateOfLayingSenate && moment(values?.dateOfLayingSenate).format("YYYY-MM-DD"),
  //       dateOfLayingInTheNA: values?.dateOfLayingNA && moment(values?.dateOfLayingNA).format("YYYY-MM-DD"),
  //       fkOrdinanceStatus:1
  //     };

  //     try {
  //       const response = await createNewOrdinance(data);
  //       if (response?.success) {
  //         showSuccessMessage(response?.message);
  //         formik.resetForm();
  //         setTimeout(() => {
  //           navigate("/lgms/dashboard/ordinances/ordinance-list");
  //         }, [3000]);
  //       }
  //       console.log(response?.data);
  //     } catch (error) {}
  //   };

  return (
    <Layout
      module={true}
      sidebarItems={CommitteesSideBarItems}
      centerlogohide={true}
    >
      <ToastContainer />
      <Header
        dashboardLink={"/committees/dashboard"}
        addLink1={"/committees/dashboard"}
        title1={location?.state ? "Assign Committee Room" : ""}
      />
      <div className="container-fluid">
        <div className="card">
          <div className="card-header red-bg">
            <h1> Assigned Committee Room</h1>
          </div>
          <div className="card-body">
            <form onSubmit={formik.handleSubmit}>
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label class="form-label">Committee Room</label>
                    <select
                      // className="form-select"
                      id="committeeRoom"
                      name="committeeRoom"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.committeeRoom}
                      className={`form-select  ${
                        formik.touched.committeeRoom &&
                        formik.errors.committeeRoom
                          ? "is-invalid"
                          : ""
                      }`}
                    >
                      <option value={""} selected disabled hidden>
                        Select
                      </option>
                      <option>Committee Room 1</option>
                      <option>Committee Room 2</option>
                      <option>Committee Room 3</option>
                      <option>Committee Room 4</option>
                      <option>Committee Room 5</option>
                    </select>
                    {formik.touched.committeeRoom &&
                      formik.errors.committeeRoom && (
                        <div className="invalid-feedback">
                          {formik.errors.committeeRoom}
                        </div>
                      )}
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <label className="form-label">Committee Name</label>
                    <input
                      type="text"
                      className={`form-control ${
                        formik.touched.committeeName &&
                        formik.errors.committeeName
                          ? "is-invalid"
                          : ""
                      }`}
                      id="committeeName"
                      value={formik.values.committeeName}
                      // placeholder={formik.values.committeeName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.committeeName &&
                      formik.errors.committeeName && (
                        <div className="invalid-feedback">
                          {formik.errors.committeeName}
                        </div>
                      )}
                  </div>
                </div>

                <div className="col">
                  <div className="mb-3">
                    <label class="form-label">Committee Type</label>
                    <select
                      // className="form-select"
                      id="committeeType"
                      name="committeeType"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.committeeType}
                      className={`form-select  ${
                        formik.touched.committeeType &&
                        formik.errors.committeeType
                          ? "is-invalid"
                          : ""
                      }`}
                    >
                      <option value={""} selected disabled hidden>
                        Select
                      </option>
                      <option>Standing Committees</option>
                      <option>Functional Committees</option>
                      <option>Domestics Committees</option>
                      <option>Other Committees</option>
                      <option>Special Committee</option>
                    </select>
                    {formik.touched.committeeType &&
                      formik.errors.committeeType && (
                        <div className="invalid-feedback">
                          {formik.errors.committeeType}
                        </div>
                      )}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="mb-3" style={{ position: "relative" }}>
                    <label className="form-label">Committee Meeting Date</label>
                    <span
                      style={{
                        position: "absolute",
                        right: "15px",
                        top: "36px",
                        zIndex: 1,
                        fontSize: "20px",
                        zIndex: "1",
                        color: "#666",
                        cursor: "pointer",
                      }}
                      onClick={handleCalendarToggle}
                    >
                      <FontAwesomeIcon icon={faCalendarAlt} />
                    </span>

                    <DatePicker
                      selected={formik.values.committeeMeetingDate}
                      onChange={handleDateSelect}
                      onBlur={formik.handleBlur}
                      className={`form-control ${
                        formik.touched.committeeMeetingDate &&
                        formik.errors.committeeMeetingDate
                          ? "is-invalid"
                          : ""
                      }`}
                      open={isCalendarOpen}
                      onClickOutside={() => setIsCalendarOpen(false)}
                      onInputClick={handleCalendarToggle}
                      // onClick={handleCalendarToggle}
                      maxDate={new Date()}
                      dateFormat="dd-MM-yyyy"
                    />

                    {formik.touched.committeeMeetingDate &&
                      formik.errors.committeeMeetingDate && (
                        <div
                          className="invalid-feedback"
                          style={{ display: "block" }}
                        >
                          {formik.errors.committeeMeetingDate}
                        </div>
                      )}
                  </div>
                </div>

                <div class="col">
                  <div class="mb-3">
                    <label class="form-label">Committee Meeting Time</label>
                    <TimePicker
                      value={formik.values.committeeMeettingTime}
                      clockIcon={null}
                      openClockOnFocus={false}
                      format="hh:mm a"
                      onChange={(time) =>
                        formik.setFieldValue("committeeMeettingTime", time)
                      }
                      className={`form-control`}
                    />
                    {formik.touched.committeeMeettingTime &&
                      formik.errors.committeeMeettingTime && (
                        <div className="invalid-feedback">
                          {formik.errors.committeeMeettingTime}
                        </div>
                      )}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label class="form-label">Remarks</label>
                    <textarea
                      class="form-control"
                      id="Remarks"
                      name="Remarks"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.Remarks}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button type="submit" className="btn btn-primary mt-3">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default AssignCommitteeRoom;
