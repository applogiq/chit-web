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

/* ************************** Import Redux Action *************************** **/
import { getSchemeData } from "../../redux/actions/schemeAction";

const ChitScheme = () => {

    const [data, setData] = useState([]);
    const [show, setShow] = useState(false)
    const [popup, setPopup] = useState({});

    const formik = useFormik({
        initialValues: {
            //   title: values?.title || '',
            //   filterNames: option(values?.filterNames || []),
            //   isActive: values?.isActive || '',
        },
        validationSchema: yup.object({
            //   title: yup.string().required("This field is required"),
            //   filterNames: yup.array().of(
            //     yup.object().shape({
            //       value: yup.string().required("Field Not be Empty"),
            //       label: yup.string().required("Field Not be Empty"),
            //     })),
            //   isActive: yup.string().required("This field is required"),
        }),

        onSubmit: (postData) => {
            // const tempValues = { ...values, ...postData };
            // tempValues.filterNames = tempValues.filterNames.map((item) => item.value);
            // console.log(tempValues, 2);
            // alert(tempValues.filterNames.toString());
            // if (tempValues?.id) {
            //     delete tempValues.id;
            //     dispatch(updateFilter(tempValues, values?.id)).then((res) => {
            //         console.log('response123', res);
            //     });
            // } else {
            //     dispatch(postFilter(tempValues)).then((res) => {
            //         console.log('response123', res);
            //     });
            // }

            // formik.values.title = '';
            // formik.values.filterNames = '';
            // formik.values.isActive = '';
        },
    });

    const handleMoadal = (item) => {
        setShow(true);
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
        })
    }, [])

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
                            <button className={`${styles.btn}`} onClick={handleMoadal}>Join</button>
                        </div>
                    )
                }}
                data={data}
            />

            <Popup
                show={show}
                handleHideModal={handleHideModal}
                // handleSaveModal={formik.handleSubmit}
                title="Join Scheme"
            >
                <div className="row ps-4 mt-4">
                    <div className="col-md-6">
                        <h6 className="mb-0 mt-3 ProductTitles">Your Name</h6>
                        <Form
                            width="95%"
                            height="38px"
                            name="title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            margin="10px 0px 0px 0px"
                            padding="0px 10px 0px 10px"
                        />
                        <div>
                            {formik.touched.title && formik.errors.title ? (
                                <span className="text-danger error">
                                    {formik.errors.title}
                                </span>
                            ) : null}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h6 className="mb-0 mt-3 ProductTitles">Email address</h6>
                        <Form
                            width="95%"
                            height="38px"
                            name="title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            margin="10px 0px 0px 0px"
                            padding="0px 10px 0px 10px"
                        />
                        <div>
                            {formik.touched.title && formik.errors.title ? (
                                <span className="text-danger error">
                                    {formik.errors.title}
                                </span>
                            ) : null}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h6 className="mb-0 mt-3 ProductTitles">Mobile number</h6>
                        <Form
                            width="95%"
                            height="38px"
                            name="title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            margin="10px 0px 0px 0px"
                            padding="0px 10px 0px 10px"
                        />
                        <div>
                            {formik.touched.title && formik.errors.title ? (
                                <span className="text-danger error">
                                    {formik.errors.title}
                                </span>
                            ) : null}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h6 className="mb-0 mt-3 ProductTitles">Country</h6>
                        <Form
                            width="95%"
                            height="38px"
                            name="title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            margin="10px 0px 0px 0px"
                            padding="0px 10px 0px 10px"
                        />
                        <div>
                            {formik.touched.title && formik.errors.title ? (
                                <span className="text-danger error">
                                    {formik.errors.title}
                                </span>
                            ) : null}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h6 className="mb-0 mt-3 ProductTitles">State</h6>
                        <Form
                            width="95%"
                            height="38px"
                            name="title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            margin="10px 0px 0px 0px"
                            padding="0px 10px 0px 10px"
                        />
                        <div>
                            {formik.touched.title && formik.errors.title ? (
                                <span className="text-danger error">
                                    {formik.errors.title}
                                </span>
                            ) : null}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h6 className="mb-0 mt-3 ProductTitles">State</h6>
                        <Form
                            width="95%"
                            height="38px"
                            name="title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            margin="10px 0px 0px 0px"
                            padding="0px 10px 0px 10px"
                        />
                        <div>
                            {formik.touched.title && formik.errors.title ? (
                                <span className="text-danger error">
                                    {formik.errors.title}
                                </span>
                            ) : null}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h6 className="mb-0 mt-3 ProductTitles">Pincode</h6>
                        <Form
                            width="95%"
                            height="38px"
                            name="title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            margin="10px 0px 0px 0px"
                            padding="0px 10px 0px 10px"
                        />
                        <div>
                            {formik.touched.title && formik.errors.title ? (
                                <span className="text-danger error">
                                    {formik.errors.title}
                                </span>
                            ) : null}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h6 className="mb-0 mt-3 ProductTitles">Verification document</h6>
                        <Form
                            width="95%"
                            height="38px"
                            name="title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            margin="10px 0px 0px 0px"
                            padding="0px 10px 0px 10px"
                        />
                        <div>
                            {formik.touched.title && formik.errors.title ? (
                                <span className="text-danger error">
                                    {formik.errors.title}
                                </span>
                            ) : null}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h6 className="mb-0 mt-3 ProductTitles">Upload</h6>
                        <Form
                            width="95%"
                            height="38px"
                            name="title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            margin="10px 0px 0px 0px"
                            padding="0px 10px 0px 10px"
                        />
                        <div>
                            {formik.touched.title && formik.errors.title ? (
                                <span className="text-danger error">
                                    {formik.errors.title}
                                </span>
                            ) : null}
                        </div>
                    </div>
                </div>
            </Popup>

        </div>
    )
}

export default ChitScheme;