/* ************************** Import Packages *************************** **/
import React, { useState } from 'react';

/* ************************** Import CSS *************************** **/
import styles from "./table.module.css";

export default function (props) {
    const {
        fields,
        customFileds,
        data,
        handleClick,
    } = props;

    const handleOnClick = (e, item, index) => {
        e.hold();
        handleClick(item, index)
    };

    return (
        <div className="p-4">
            <div className="border">
                <div className={`${styles.customTable}`}>
                    <table>
                        <tr>
                            {fields?.map((item, index) => (
                                <th className="p-3" key={index}>
                                    {item?.replace(/([a-z0-9])([A-Z])/g, '$1 $2')}
                                </th>
                            ))}
                        </tr>
                        {data?.map((item, itemIndex) => (
                            <tr
                                className={`${styles.customTableContent}`}
                                key={itemIndex}
                                onClick={(e) => handleOnClick(e, item, itemIndex)}
                            >
                                {Array(fields.length)
                                    ?.fill(1)
                                    ?.map((data, dataIndex) => (customFileds[`${fields?.[dataIndex]}`] ? (
                                        <td className="p-3" key={dataIndex}>
                                            {customFileds[`${fields?.[dataIndex]}`](item)}
                                        </td>
                                    ) : (
                                        <td
                                            className="p-3"
                                            key={dataIndex}
                                        >
                                            {item?.[`${fields?.[dataIndex]}`] || '-'}
                                        </td>
                                    )))}
                            </tr>
                        ))}
                    </table>
                </div>

            </div>
        </div>
    )
}