/* ***************************** Import Packages ******************************** **/
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";

/* ************************** Import Component Level CSS *************************** **/
import styles from "./chitscheme.module.css";

/* ************************** Import Components *************************** **/
import Table from "../../components/Table";
import Popup from "../../components/Popup";
import Form from "../../components/Form";
import SelectBox from "../../components/SelectBox";

/* ************************** Import Redux Action *************************** **/
import { getSchemeData } from "../../redux/actions/schemeAction";
import { CreateJoinData } from "../../redux/actions/joinAction";

/* ************************** Import Utils *************************** **/
import { convertBase64 } from "../../utils/convertBase64";
import inputMask from "../../utils/inputMasking";

const ChitScheme = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [popup, setPopup] = useState({});
  const [schemeId, setSchemeId] = useState("");

  useEffect(() => {
    dispatch(getSchemeData()).then((res) => {
      console.log(res?.records, "Get the scheme data");
      setData(res?.records);
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      email_id: "",
      mobile_number: "",
      country: "",
      state: "",
      pincode: "",
      city: "",
      verification_document: "",
      document: "",
      document_type: "",
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .required("Field should not be empty"),
      email_id: yup.string().required("Field should not be empty"),
      mobile_number: yup.string().required("Field should not be empty"),
      country: yup.string().required("Field should not be empty"),
      pincode: yup.string().required("Field should not be empty"),
      state: yup.string().required("Field should not be empty"),
      city: yup.string().required("Field should not be empty"),
      verification_document: yup
        .string()
        .required("Field should not be empty"),
      document: yup.string().required("Field should not be empty"),
    }),

    onSubmit: (userInputData) => {
      console.log("Check req. payload ---->", userInputData);
      userInputData.scheme_id = schemeId;
      if (userInputData) {
        userInputData.scheme_id = popup?.id;
        dispatch(CreateJoinData(userInputData)).then((res) => {
          if (res) {
            console.log(res, "toastfy");

          }
        });
      }

      // formik.values.name = "";
      // formik.values.email_id = "";
      // formik.values.mobile_number = "";
      // formik.values.country = "";
      // formik.values.pincode = "";
      // formik.values.state = "";
      // formik.values.city = "";
      // formik.values.verification_document = "";
      // // formik.values.document = '';
    },
  });

  const handleMoadal = () => {
    setShow(true);
  };

  const handleform = (item) => {
    setPopup(item);
  };

  const handleHideModal = () => {
    setShow(false);
  };

  const handleFileUpload = async (e) => {
    {
      const file = e.target.files[0];
      let base64 = await convertBase64(file);
      // For replacing pre-string of base64
      if (file?.type === "image/jpeg" || file?.type === "image/png") {
        base64 = base64.replace(/^data:image\/\w+;base64,/, "");
        formik.setFieldValue("document_type", "img");
      } else {
        base64 = base64.replace(/^data:application\/\w+;base64,/, "");
        formik.setFieldValue("document_type", "pdf");
      }
      formik.setFieldValue("document", base64);
    }
  };

  const CloseForm = () => {
    formik.resetForm();
    handleHideModal();
  }

  return (
    <div className={`${styles.table} container`}>
      <h3 className={`${styles.tabletxt}`}>Chit Schemes</h3>
      <Table
        fields={[
          "SchemeName",
          "TotalAmount",
          "TotalMonths",
          "MonthlyInstallment",
          "Action",
        ]}
        customFileds={{
          SchemeName: (item) => <td>{item?.name}</td>,
          TotalAmount: (item) => <td>{item?.total_amount}</td>,
          TotalMonths: (item) => <td>{item?.total_month}</td>,
          MonthlyInstallment: (item) => <td>{item?.monthly_installment}</td>,
          Action: (item) => {
            console.log("Check item from table action", item);
            return (
              <div>
                <button
                  className={`${styles.btn}`}
                  onClick={() => {
                    handleMoadal(), setSchemeId(item?.id);
                  }}
                >
                  Join
                </button>
              </div>
            );
          },
        }}
        data={data}
        handleClick={handleform}
      />
      <Popup
        show={show}
        handleHideModal={handleHideModal}
        handleSaveModal={formik.handleSubmit}
        title="Join Scheme"
        CloseForm={CloseForm}

      >
        <form onSubmit={formik.handleSubmit} >
          <div className="row ps-4 mt-4">
            <div className="col-md-6 form-group">
              <h6 className="mb-0 mt-3 ">Your Name</h6>
              <Form
                width="95%"
                height="38px"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                margin="10px 0px 0px 0px"
                padding="0px 10px 0px 10px"
              />
              {formik.touched.name && formik.errors.name ? (
                <span className="text-danger error">{formik.errors.name}</span>
              ) : null}
            </div>
            <div className="col-md-6 form-group">
              <h6 className="mb-0 mt-3 ">Email address</h6>
              <Form
                width="95%"
                height="38px"
                name="email_id"
                value={formik.values.email_id}
                onChange={formik.handleChange}
                margin="10px 0px 0px 0px"
                padding="0px 10px 0px 10px"
              />
              <div>
                {formik.touched.email_id && formik.errors.email_id ? (
                  <span className="text-danger error">
                    {formik.errors.email_id}
                  </span>
                ) : null}
              </div>
            </div>
            <div className="col-md-6 form-group">
              <h6 className="mb-0 mt-3 ">Mobile number</h6>
              <Form
                width="95%"
                height="38px"
                name="mobile_number"
                onChange={(e) => {
                  const maskedValue = inputMask("mobile", e);
                  formik.setFieldValue("mobile_number", maskedValue);
                }}
                // onBlur={formik.handleBlur}
                value={
                  formik.values.mobile_number
                }
                margin="10px 0px 0px 0px"
                padding="0px 10px 0px 10px"
              />
              <div>
                {formik.touched.mobile_number && formik.errors.mobile_number ? (
                  <span className="text-danger error">
                    {formik.errors.mobile_number}
                  </span>
                ) : null}
              </div>
            </div>
            <div className="col-md-6 form-group">
              <h6 className="mb-0 mt-3 ">Country</h6>
              <Form
                width="95%"
                height="38px"
                name="country"
                value={formik.values.country}
                onChange={formik.handleChange}
                margin="10px 0px 0px 0px"
                padding="0px 10px 0px 10px"
              />
              <div>
                {formik.touched.country && formik.errors.country ? (
                  <span className="text-danger error">
                    {formik.errors.country}
                  </span>
                ) : null}
              </div>
            </div>
            <div className="col-md-6 form-group">
              <h6 className="mb-0 mt-3 ">State</h6>
              <Form
                width="95%"
                height="38px"
                name="state"
                value={formik.values.state}
                onChange={formik.handleChange}
                margin="10px 0px 0px 0px"
                padding="0px 10px 0px 10px"
              />
              <div>
                {formik.touched.state && formik.errors.state ? (
                  <span className="text-danger error">
                    {formik.errors.state}
                  </span>
                ) : null}
              </div>
            </div>
            <div className="col-md-6 form-group">
              <h6 className="mb-0 mt-3 ">City</h6>
              <Form
                width="95%"
                height="38px"
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
                margin="10px 0px 0px 0px"
                padding="0px 10px 0px 10px"
              />
              <div>
                {formik.touched.city && formik.errors.city ? (
                  <span className="text-danger error">
                    {formik.errors.city}
                  </span>
                ) : null}
              </div>
            </div>
            <div className="col-md-6 form-group">
              <h6 className="mb-0 mt-3 ">Pincode</h6>
              <Form
                width="95%"
                height="38px"
                name="pincode"
                onChange={(e) => {
                  const maskedValue = inputMask("zipCode", e);
                  formik.setFieldValue("pincode", maskedValue);
                }}
                value={formik.values.pincode}
                margin="10px 0px 0px 0px"
                padding="0px 10px 0px 10px"
              />
              <div>
                {formik.touched.pincode && formik.errors.pincode ? (
                  <span className="text-danger error">
                    {formik.errors.pincode}
                  </span>
                ) : null}
              </div>
            </div>
            <div className="col-md-6 form-group">
              <h6 className="mb-0 mt-3 ">Verification document</h6>
              <SelectBox
                width="95%"
                height="38px"
                name="verification_document"
                margin="10px 0px 0px 0px"
                padding="0px 10px 0px 10px"
                onChange={formik.handleChange}
                value={formik.values.verification_document}
              >
                <option value="">Select</option>
                <option value="Aadhaar Card">Aadhaar Card</option>
                <option value="Pan Card">Pan Card</option>
                <option value="Driving License">Driving License</option>
              </SelectBox>
              <div>
                {formik.touched.verification_document &&
                  formik.errors.verification_document ? (
                  <span className="text-danger error">
                    {formik.errors.verification_document}
                  </span>
                ) : null}
              </div>
            </div>
            <div className="col-md-6 form-group">
              <h6 className="mb-0 mt-3 ">Upload</h6>
              <Form
                type="file"
                width="95%"
                height="38px"
                // className={`${styles.customFileLable} ${styles.customFileLable1}`}
                name="document"
                onChange={(e) => handleFileUpload(e)}
                margin="10px 0px 0px 0px"
                padding="0px 10px 0px 10px"
              />
              <div>
                {formik.touched.document && formik.errors.document ? (
                  <span className="text-danger error">
                    {formik.errors.document}
                  </span>
                ) : null}
              </div>
            </div>
          </div>
        </form>
      </Popup>
    </div>
  );
};

export default ChitScheme;
