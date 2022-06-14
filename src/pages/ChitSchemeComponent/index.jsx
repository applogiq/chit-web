/* ***************************** Import Packages ******************************** **/
import React from "react";

/* ************************** Import Component Level CSS *************************** **/
import styles from "./chitscheme.module.css";

/* ************************** Import Components *************************** **/
import Table from "../../components/Table";

const ChitScheme = () => {
    return (
        <div className={styles.table}>
            <Table
                fields={["Scheme name", "Total amount", "Total months", "Monthly Installment", "Action"]}
            />

        </div>
    )
}

export default ChitScheme;