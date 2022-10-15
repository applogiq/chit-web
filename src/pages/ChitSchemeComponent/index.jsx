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

const ChitScheme = ({ loading }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [popup, setPopup] = useState({});
  const [schemeId, setSchemeId] = useState("");
  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png",
  ];

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
      name: yup.string().required("Name is Required"),
      email_id: yup.string().required("Email-id is Required"),
      mobile_number: yup.string().required("Mobile Number is Required"),
      country: yup.string().required("Country is Required"),
      pincode: yup.string().required("Pincode is Required"),
      state: yup.string().required("State is Required"),
      city: yup.string().required("City is Required"),
      verification_document: yup.string().required("Document is Required"),

      // document: mixed()
      //   .test(
      //     "fileSize",
      //     "File too large",
      //     (value) => value === null || (value && value.size <= FILE_SIZE)
      //   )
      //   .test(
      //     "fileFormat",
      //     "Unsupported file type",
      //     (value) =>
      //       value === null || (value && SUPPORTED_FORMATS.includes(value.type))
      //   ),

      document: yup.mixed().required("Document is required"),
    }),

    onSubmit: (userInputData) => {
      console.log("Check req. payload ---->", userInputData);
      userInputData.scheme_id = schemeId;
      if (userInputData) {
        userInputData.scheme_id = popup?.id;
        dispatch(CreateJoinData(userInputData)).then((res) => {
          formik.resetForm();
          handleHideModal();
        });
      }
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
  };

  return (
    <div className={`${styles.table} container`}>
      <h3 className={`${styles.tabletxt} mb-4`}>Chit Schemes</h3>
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
        loading={loading}
      >
        <form onSubmit={formik.handleSubmit}>
          <div className="row ps-4 mt-4">
            <div className="col-md-6 form-group">
              <h6 className="mb-0 ">Your Name</h6>
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
                <div className="text-danger error py-1">
                  {formik.errors.name}
                </div>
              ) : (
                <div className="text-danger error py-1">&nbsp;</div>
              )}
            </div>
            <div className="col-md-6 form-group">
              <h6 className="mb-0  ">Email address</h6>
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
                  <div className="text-danger error py-1">
                    {formik.errors.email_id}
                  </div>
                ) : (
                  <div className="text-danger error py-1">&nbsp;</div>
                )}
              </div>
            </div>
            <div className="col-md-6 form-group">
              <h6 className="mb-0  ">Mobile number</h6>
              <Form
                width="95%"
                height="38px"
                name="mobile_number"
                onChange={(e) => {
                  const maskedValue = inputMask("mobile", e);
                  formik.setFieldValue("mobile_number", maskedValue);
                }}
                // onBlur={formik.handleBlur}
                value={formik.values.mobile_number}
                margin="10px 0px 0px 0px"
                padding="0px 10px 0px 10px"
              />
              <div>
                {formik.touched.mobile_number && formik.errors.mobile_number ? (
                  <div className="text-danger error py-1">
                    {formik.errors.mobile_number}
                  </div>
                ) : (
                  <div className="text-danger error py-1">&nbsp;</div>
                )}
              </div>
            </div>
            <div className="col-md-6 form-group">
              <h6 className="mb-0  ">Country</h6>
              <SelectBox
                width="95%"
                height="38px"
                name="country"
                margin="10px 0px 0px 0px"
                padding="0px 10px 0px 10px"
                onChange={formik.handleChange}
                value={formik.values.country}
              >
                <option value="">Select</option>
                <option value="India">India</option>
              </SelectBox>
              <div>
                {formik.touched.country && formik.errors.country ? (
                  <div className="text-danger error py-1">
                    {formik.errors.country}
                  </div>
                ) : (
                  <div className="text-danger error py-1">&nbsp;</div>
                )}
              </div>
            </div>
            <div className="col-md-6 form-group">
              <h6 className="mb-0  ">State</h6>
              <SelectBox
                width="95%"
                height="38px"
                name="state"
                margin="10px 0px 0px 0px"
                padding="0px 10px 0px 10px"
                onChange={formik.handleChange}
                value={formik.values.state}
              >
                <option value="">Select</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
              </SelectBox>
              <div>
                {formik.touched.state && formik.errors.state ? (
                  <div className="text-danger error py-1">
                    {formik.errors.state}
                  </div>
                ) : (
                  <div className="text-danger error py-1">&nbsp;</div>
                )}
              </div>
            </div>
            <div className="col-md-6 form-group">
              <h6 className="mb-0  ">City</h6>
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
                  <div className="text-danger error py-1">
                    {formik.errors.city}
                  </div>
                ) : (
                  <div className="text-danger error py-1">&nbsp;</div>
                )}
              </div>
            </div>
            <div className="col-md-6 form-group">
              <h6 className="mb-0  ">Pincode</h6>
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
                  <div className="text-danger error py-1">
                    {formik.errors.pincode}
                  </div>
                ) : (
                  <div className="text-danger error py-1">&nbsp;</div>
                )}
              </div>
            </div>
            <div className="col-md-6 form-group">
              <h6 className="mb-0  ">Verification document</h6>
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
                  <div className="text-danger error py-1">
                    {formik.errors.verification_document}
                  </div>
                ) : (
                  <div className="text-danger error py-1">&nbsp;</div>
                )}
              </div>
            </div>
            <div className="col-md-6 form-group">
              <h6 className="mb-0  ">Upload</h6>
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
                  <div className="text-danger error py-1">
                    {formik.errors.document}
                  </div>
                ) : (
                  <div className="text-danger error py-1">&nbsp;</div>
                )}
              </div>
            </div>
          </div>
        </form>
      </Popup>
    </div>
  );
};

export default ChitScheme;
