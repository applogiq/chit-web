/* ***************************** Import Packages ******************************** **/
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from 'formik';
import * as yup from 'yup';

/* ************************** Import Component Level CSS *************************** **/
import styles from "./chitscheme.module.css";

/* ************************** Import Components *************************** **/
import Table from "../../components/Table";
import Popup from "../../components/Popup";
import Form from "../../components/Form";
import SelectBox from "../../components/SelectBox";

/* ************************** Import Utils *************************** **/
import inputMask from "../../utils/inputMasking";

/* ************************** Import Redux Action *************************** **/
import { getSchemeData } from "../../redux/actions/schemeAction";
import { CreateJoinData } from "../../redux/actions/joinAction"

const ChitScheme = () => {

    const [data, setData] = useState([]);
    const [show, setShow] = useState(false)
    const [popup, setPopup] = useState({});
    const [schemeId, setSchemeId] = useState("");

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
            document_type: "",
        },
        validationSchema: yup.object({
            name: yup
                .string()
                .required(" Name is Required")
                .min(1, "Minimun 1 Charecter Required")
                .max(15, "Maximun 15 Charecter Required"),
            email_id: yup.string().required("E-mail-id is required"),
            mobile_number: yup.string().required("Mobile Number is required"),
            country: yup.string().required("Country is required"),
            pincode: yup.string().required("Pincode is required"),
            state: yup.string().required("State is required"),
            city: yup.string().required("City is required"),
            verification_document: yup.string().required("Verification Document is required"),
            document_type: yup.string().required("Document Type is required"),
        }),

        onSubmit: (userInputData) => {

            if (userInputData) {
                userInputData.scheme_id = popup?.id;
                dispatch(CreateJoinData(userInputData)).then((res) => {
                    if (res) {
                        console.log(res, "toastfy");
                        toast.success("Registered Successfully");
                    }
                });
            }

            formik.values.name = '';
            formik.values.email_id = '';
            formik.values.mobile_number = '';
            formik.values.country = '';
            formik.values.pincode = '';
            formik.values.state = '';
            formik.values.city = '';
            formik.values.verification_document = '';
            formik.values.document_type = '';
        },
    });

    const handleMoadal = () => {
        setShow(true);
    }

    const handleform = (item) => {
        setPopup(item);
    }

    const handleHideModal = () => {
        setShow(false)
    }
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSchemeData()).then((res) => {
            console.log(res?.records, "Get the scheme data");
            setData(res?.records);
            setSchemeId(res?.records?.id);
        })
    }, [])

    console.log(data, "_--------------->7");

    return (
        <div className={`${styles.table} container`}>
            <h3 className={`${styles.tabletxt}`}>Chit Schemes</h3>
            <Table
                fields={["SchemeName", "TotalAmount", "TotalMonths", "MonthlyInstallment", "Action"]}
                customFileds={{
                    SchemeName: (item) => (
                        <td>{item?.name}</td>
                    ),
                    TotalAmount: (item) => (
                        <td>{item?.total_amount}</td>
                    ),
                    TotalMonths: (item) => (
                        <td>{item?.total_month}</td>
                    ),
                    MonthlyInstallment: (item) => (
                        <td>{item?.monthly_installment}</td>
                    ),
                    Action: (item) => (
                        <div>
                            <button className={`${styles.btn}`} onClick={() => handleMoadal()} >Join</button>
                        </div>
                    )
                }}
                data={data}
                handleClick={handleform}

            />
            <Popup
                show={show}
                handleHideModal={handleHideModal}
                handleSaveModal={formik.handleSubmit}
                title="Join Scheme"
            >
                <form onSubmit={formik.handleSubmit}>
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
                                <span className="text-danger error">
                                    {formik.errors.name}
                                </span>
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
                                value={formik.values.mobile_number}
                                onChange={formik.handleChange}
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
                                onChange={formik.handleChange}
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
                                {formik.touched.verification_document && formik.errors.verification_document ? (
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
                                className={`${styles.customFileLable} ${styles.customFileLable1}`}
                                name="document_type"
                                value={formik.values.document_type}
                                onChange={formik.handleChange}
                                margin="10px 0px 0px 0px"
                                padding="0px 10px 0px 10px"

                            />
                            <div>
                                {formik.touched.document_type && formik.errors.document_type ? (
                                    <span className="text-danger error">
                                        {formik.errors.document_type}
                                    </span>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </form>
            </Popup>

        </div>
    )
}

export default ChitScheme;